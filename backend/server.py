from fastapi import FastAPI, APIRouter, UploadFile, File, Header, HTTPException, Query, Depends, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import base64
import re
import io
import hmac
import html
import hashlib
import secrets
import time
from collections import defaultdict, deque
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone

try:
    from motor.motor_asyncio import AsyncIOMotorClient
except ImportError:
    AsyncIOMotorClient = None

try:
    import firebase_admin
    from firebase_admin import credentials, firestore as fb_firestore
except ImportError:
    firebase_admin = None
    credentials = None
    fb_firestore = None


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (optional - not required for blog/admin features)
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'test_database')
client = None
db = None
if AsyncIOMotorClient is not None:
    try:
        client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=3000)
        db = client[db_name]
    except Exception as _mongo_err:
        logging.getLogger(__name__).warning("MongoDB connection skipped: %s", _mongo_err)

# Firebase / Firestore connection (used for the Blog)
FIREBASE_CRED_PATH = os.environ.get('FIREBASE_CRED_PATH', str(ROOT_DIR / 'firebase_service_account.json'))

fs = None
fb_init_error = None
if firebase_admin is not None:
    try:
        cred = None
        # 1. Check environment variable
        cred_error = "FIREBASE_SERVICE_ACCOUNT_JSON is not set"
        raw_cred = os.environ.get("FIREBASE_SERVICE_ACCOUNT_JSON", "").strip().lstrip("\ufeff")
        if raw_cred:
            try:
                import json
                # Tolerate the value being wrapped in quotes or base64-encoded
                if raw_cred[0] in "'\"" and raw_cred[-1] == raw_cred[0]:
                    raw_cred = raw_cred[1:-1]
                if not raw_cred.startswith("{"):
                    raw_cred = base64.b64decode(raw_cred).decode()
                cred_info = json.loads(raw_cred)
                if isinstance(cred_info, str):
                    cred_info = json.loads(cred_info)
                cred = credentials.Certificate(cred_info)
            except Exception as _e:
                # Describe the value without revealing it, to help fix a bad paste
                looks_like = ("a file name/path" if raw_cred.lower().endswith(".json") or "/" in raw_cred[:40]
                              else "JSON" if "{" in raw_cred else "plain text")
                cred_error = (f"FIREBASE_SERVICE_ACCOUNT_JSON is set but invalid ({type(_e).__name__}: {_e}; "
                              f"value is {len(raw_cred)} chars, starts with {raw_cred[:1]!r}, looks like {looks_like}, "
                              f"contains private_key: {'private_key' in raw_cred})")
                logging.getLogger(__name__).warning("Failed parsing FIREBASE_SERVICE_ACCOUNT_JSON: %s", _e)
        
        # 2. Check file path if it exists
        if cred is None and Path(FIREBASE_CRED_PATH).exists():
            try:
                cred = credentials.Certificate(FIREBASE_CRED_PATH)
            except Exception as _e:
                logging.getLogger(__name__).warning("Failed reading %s: %s", FIREBASE_CRED_PATH, _e)

        if cred is None:
            raise RuntimeError(f"No Firebase credentials: {cred_error}")

        if not firebase_admin._apps:
            firebase_admin.initialize_app(cred)
        fs = fb_firestore.client()
        logging.getLogger(__name__).info("Firestore connected successfully")
    except Exception as _fb_err:
        fb_init_error = str(_fb_err)
        logging.getLogger(__name__).error("Firebase init failed: %s", _fb_err)

# Create the main app without a prefix. The interactive docs/OpenAPI schema
# would publish every admin route, so they are off unless explicitly enabled.
_docs = os.environ.get("ENABLE_API_DOCS", "").lower() == "true"
app = FastAPI(
    docs_url="/api/docs" if _docs else None,
    redoc_url=None,
    openapi_url="/api/openapi.json" if _docs else None,
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ==================== ADMIN AUTH ====================
# Both values must come from the environment; there are no built-in defaults.
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "")
ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "")
ADMIN_TOKEN_TTL = int(os.environ.get("ADMIN_TOKEN_TTL_SECONDS", str(8 * 3600)))

# Session tokens are signed with a key derived from both secrets, so a token
# can't be forged without the password, and rotating either one logs everyone out.
_SIGNING_KEY = (
    hashlib.sha256(f"{ADMIN_TOKEN}\0{ADMIN_PASSWORD}".encode()).digest()
    if ADMIN_PASSWORD and ADMIN_TOKEN else b""
)
if not _SIGNING_KEY:
    logging.getLogger(__name__).warning("ADMIN_PASSWORD / ADMIN_TOKEN not set; admin login is disabled")


def _sign(payload: str) -> str:
    return hmac.new(_SIGNING_KEY, payload.encode(), hashlib.sha256).hexdigest()


def _issue_token() -> str:
    payload = f"{int(time.time()) + ADMIN_TOKEN_TTL}.{secrets.token_urlsafe(16)}"
    return f"{payload}.{_sign(payload)}"


def _verify_token(token: Optional[str]) -> bool:
    if not _SIGNING_KEY or not token or len(token) > 256:
        return False
    payload, _, sig = token.rpartition(".")
    expires = payload.split(".", 1)[0]
    if not expires.isdigit() or int(expires) < time.time():
        return False
    return hmac.compare_digest(sig, _sign(payload))


async def require_admin(x_admin_token: Optional[str] = Header(None)):
    if not _verify_token(x_admin_token):
        raise HTTPException(status_code=401, detail="Unauthorized: please re-login to the admin portal")
    return True


def _client_ip(request: Request) -> str:
    # Vercel sets x-forwarded-for / x-real-ip; fall back to the socket peer.
    fwd = request.headers.get("x-real-ip") or request.headers.get("x-forwarded-for", "").split(",")[0]
    return fwd.strip() or (request.client.host if request.client else "unknown")


class _RateLimiter:
    """Best-effort in-memory sliding-window limiter (per serverless instance)."""

    def __init__(self, limit: int, window: int):
        self.limit, self.window = limit, window
        self.hits = defaultdict(deque)

    def _prune(self, key: str) -> deque:
        q = self.hits[key]
        cutoff = time.time() - self.window
        while q and q[0] < cutoff:
            q.popleft()
        if len(self.hits) > 10000:  # bound memory under a flood of distinct IPs
            self.hits.clear()
            q = self.hits[key]
        return q

    def blocked(self, key: str) -> bool:
        return len(self._prune(key)) >= self.limit

    def hit(self, key: str) -> None:
        self._prune(key).append(time.time())


_login_limiter = _RateLimiter(limit=5, window=15 * 60)
_contact_limiter = _RateLimiter(limit=10, window=10 * 60)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(max_length=200)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.get("/health")
async def health(x_admin_token: Optional[str] = Header(None)):
    body = {"status": "ok", "firebase_connected": fs is not None}
    # Credential diagnostics are only shown to a logged-in admin.
    if fb_init_error and _verify_token(x_admin_token):
        body["firebase_error"] = fb_init_error
    return body

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate, _: bool = Depends(require_admin)):
    if db is None:
        raise HTTPException(status_code=503, detail="Database unavailable")
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(_: bool = Depends(require_admin)):
    if db is None:
        raise HTTPException(status_code=503, detail="Database unavailable")
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ==================== BLOG ====================


def slugify(text: str) -> str:
    text = (text or "").lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text)
    return text.strip('-')


class BlogPostBase(BaseModel):
    title: str = Field(max_length=200)
    category: str = Field(max_length=80)
    excerpt: str = Field("", max_length=1000)
    content: str = Field("", max_length=300_000)
    # Uploaded covers are base64 data URLs capped at ~850KB (see upload_image).
    image: str = Field("", max_length=1_200_000)
    author: str = Field("ANSH Capital", max_length=100)
    read_time: str = Field("5 min read", max_length=40)
    published: bool = True

    @field_validator("image")
    @classmethod
    def _image_url(cls, v):
        if v and not re.match(r"^(https://|/|data:image/(jpeg|png|webp|gif);base64,)", v):
            raise ValueError("Image must be an https URL or an uploaded image")
        return v


class BlogPostCreate(BlogPostBase):
    pass


class BlogPost(BlogPostBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    date: str = Field(default_factory=lambda: datetime.now(timezone.utc).strftime("%B %d, %Y"))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class LoginInput(BaseModel):
    password: str = Field(max_length=256)


@api_router.post("/admin/login")
async def admin_login(data: LoginInput, request: Request):
    if not _SIGNING_KEY:
        raise HTTPException(status_code=503, detail="Admin login is not configured")
    ip = _client_ip(request)
    if _login_limiter.blocked(ip):
        raise HTTPException(status_code=429, detail="Too many login attempts. Try again later.")
    if not hmac.compare_digest(data.password.encode(), ADMIN_PASSWORD.encode()):
        _login_limiter.hit(ip)
        raise HTTPException(status_code=401, detail="Invalid password")
    return {"token": _issue_token()}


# ==================== CONTACT / LEADS ====================
LEAD_COLLECTION = "leads"
LEAD_NOTIFICATION_EMAIL = os.environ.get("LEAD_NOTIFICATION_EMAIL", "support@anshcapitalservices.com")

class ContactLead(BaseModel):
    name: str = Field(max_length=120)
    phone: str = Field(max_length=32)
    email: Optional[str] = Field("", max_length=254)
    service: Optional[str] = Field("", max_length=120)
    budget: Optional[str] = Field("", max_length=120)
    message: Optional[str] = Field("", max_length=4000)

    @field_validator("name", "phone", "email", "service", "budget", "message", mode="before")
    @classmethod
    def _strip(cls, v):
        return v.strip() if isinstance(v, str) else v

    @field_validator("phone")
    @classmethod
    def _phone(cls, v):
        if v and not re.fullmatch(r"[0-9+()\-\s]{7,32}", v):
            raise ValueError("Invalid phone number")
        return v


@api_router.post("/contact")
async def submit_contact(lead: ContactLead, request: Request):
    if not lead.name or not lead.phone:
        raise HTTPException(status_code=400, detail="Name and phone number are required.")
    ip = _client_ip(request)
    if _contact_limiter.blocked(ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    _contact_limiter.hit(ip)

    lead_data = lead.model_dump()
    lead_data["id"] = str(uuid.uuid4())
    lead_data["created_at"] = datetime.now(timezone.utc).isoformat()
    lead_data["date"] = datetime.now(timezone.utc).strftime("%B %d, %Y, %I:%M %p UTC")

    # 1. Save to Firestore if available
    try:
        if fs is not None:
            fs.collection(LEAD_COLLECTION).document(lead_data["id"]).set(lead_data)
            logging.getLogger(__name__).info("Saved lead %s to Firestore", lead_data["id"])
    except Exception as e:
        logging.getLogger(__name__).warning("Could not save lead to Firestore: %s", e)

    # 2. Email dispatch via SMTP if configured
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASSWORD")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))

    if smtp_host and smtp_user and smtp_pass:
        try:
            import smtplib
            from email.mime.text import MIMEText
            from email.mime.multipart import MIMEMultipart

            # Every visitor-supplied value is HTML-escaped before it goes in the email.
            e = {k: html.escape(v or "") for k, v in lead.model_dump().items()}
            tel = re.sub(r"[^0-9+]", "", lead.phone)
            subject = f"New Consultation Lead: {lead.name} ({lead.service or 'Consultation'})"

            msg = MIMEMultipart("alternative")
            msg["Subject"] = re.sub(r"[\r\n]+", " ", subject)
            msg["From"] = smtp_user
            msg["To"] = LEAD_NOTIFICATION_EMAIL

            html = f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #0b1f3a; margin-top: 0;">New Consultation Request</h2>
              <p style="color: #64748b; font-size: 14px;">A new lead has submitted the consultation form on ANSH Capital Services:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Full Name:</td><td style="padding: 10px; color: #334155;">{e['name']}</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Mobile Number:</td><td style="padding: 10px; color: #334155;"><a href="tel:{tel}">{e['phone']}</a></td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Email:</td><td style="padding: 10px; color: #334155;">{e['email'] or 'Not provided'}</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Selected Service:</td><td style="padding: 10px; color: #334155;">{e['service'] or 'General'}</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Monthly Budget:</td><td style="padding: 10px; color: #334155;">{e['budget'] or 'Not specified'}</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Message / Goals:</td><td style="padding: 10px; color: #334155;">{e['message'] or 'None'}</td></tr>
                <tr><td style="padding: 10px; font-weight: bold; color: #0b1f3a;">Submitted At:</td><td style="padding: 10px; color: #64748b;">{lead_data["date"]}</td></tr>
              </table>
              <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center;">
                <a href="tel:{tel}" style="background-color: #d89626; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">Call Lead Now</a>
              </div>
            </div>
            """
            msg.attach(MIMEText(html, "html"))

            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_pass)
                server.sendmail(smtp_user, [LEAD_NOTIFICATION_EMAIL], msg.as_string())
            logging.getLogger(__name__).info("Lead email notification sent to %s", LEAD_NOTIFICATION_EMAIL)
        except Exception as mail_err:
            logging.getLogger(__name__).error("Failed sending email notification: %s", mail_err)

    return {"success": True, "message": "Lead received successfully"}

@api_router.get("/contact/leads")
async def list_leads(_: bool = Depends(require_admin)):
    if fs is None:
        return []
    try:
        docs = fs.collection(LEAD_COLLECTION).order_by("created_at", direction=fb_firestore.Query.DESCENDING).stream()
        return [d.to_dict() for d in docs]
    except Exception as e:
        logging.getLogger(__name__).error("Error fetching leads: %s", e)
        return []


BLOG_COLLECTION = "blog_posts"


def _blog_col():
    if fs is None:
        raise HTTPException(status_code=503, detail="Database unavailable")
    return fs.collection(BLOG_COLLECTION)


_DOC_ID = re.compile(r"^[A-Za-z0-9_-]{1,64}$")


def _check_doc_id(post_id: str) -> str:
    # Firestore treats "/" as a path separator; only accept plain ids.
    if not _DOC_ID.match(post_id):
        raise HTTPException(status_code=404, detail="Article not found")
    return post_id


def _slug_exists(slug: str) -> bool:
    docs = list(_blog_col().where("slug", "==", slug).limit(1).stream())
    return len(docs) > 0


MAX_UPLOAD_BYTES = 15 * 1024 * 1024


@api_router.post("/blog/upload")
async def upload_image(file: UploadFile = File(...), _: bool = Depends(require_admin)):
    contents = await file.read(MAX_UPLOAD_BYTES + 1)
    if len(contents) > MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=413, detail="Image is too large (max 15MB)")
    # Compress/resize so the base64 image fits within Firestore's 1MB document limit.
    # Re-encoding through Pillow also guarantees the result is a real JPEG.
    try:
        import warnings
        from PIL import Image
        Image.MAX_IMAGE_PIXELS = 50_000_000
        with warnings.catch_warnings():
            warnings.simplefilter("error", Image.DecompressionBombWarning)
            img = Image.open(io.BytesIO(contents))
            img.load()
        if img.mode in ("RGBA", "P", "LA"):
            img = img.convert("RGB")
        max_w = 1280
        if img.width > max_w:
            ratio = max_w / float(img.width)
            img = img.resize((max_w, int(img.height * ratio)))
        quality = 85
        buf = io.BytesIO()
        img.save(buf, format="JPEG", quality=quality, optimize=True)
        data = buf.getvalue()
        while len(data) > 850000 and quality > 35:
            quality -= 10
            buf = io.BytesIO()
            img.save(buf, format="JPEG", quality=quality, optimize=True)
            data = buf.getvalue()
        b64 = base64.b64encode(data).decode("utf-8")
        return {"url": f"data:image/jpeg;base64,{b64}"}
    except Exception as e:
        logging.getLogger(__name__).warning("Rejected upload: %s", e)
        raise HTTPException(status_code=400, detail="Please upload a valid image file")


@api_router.get("/blog/categories")
def get_categories():
    cats = {(d.to_dict() or {}).get("category", "") for d in _blog_col().stream()}
    return {"categories": sorted([c for c in cats if c])}


@api_router.get("/blog", response_model=List[BlogPost])
def list_blog(category: Optional[str] = Query(None, max_length=80), limit: int = Query(100, ge=1, le=100)):
    posts = [d.to_dict() for d in _blog_col().stream()]
    posts = [p for p in posts if p.get("published", True)]
    if category and category != "All":
        posts = [p for p in posts if p.get("category") == category]
    posts.sort(key=lambda p: p.get("created_at", ""), reverse=True)
    return posts[:limit]


@api_router.get("/blog/{slug}", response_model=BlogPost)
def get_blog(slug: str):
    if len(slug) > 200:
        raise HTTPException(status_code=404, detail="Article not found")
    for d in _blog_col().where("slug", "==", slug).limit(1).stream():
        return d.to_dict()
    raise HTTPException(status_code=404, detail="Article not found")


@api_router.post("/blog", response_model=BlogPost)
def create_blog(data: BlogPostCreate, _: bool = Depends(require_admin)):
    try:
        base_slug = slugify(data.title) or str(uuid.uuid4())[:8]
        slug = base_slug
        i = 1
        while _slug_exists(slug):
            i += 1
            slug = f"{base_slug}-{i}"
        post = BlogPost(**data.model_dump(), slug=slug)
        _blog_col().document(post.id).set(post.model_dump())
        return post
    except HTTPException:
        raise
    except Exception as e:
        logging.getLogger(__name__).error("Failed creating blog: %s", e)
        raise HTTPException(status_code=500, detail="Failed saving article")


@api_router.put("/blog/{post_id}", response_model=BlogPost)
def update_blog(post_id: str, data: BlogPostCreate, _: bool = Depends(require_admin)):
    try:
        ref = _blog_col().document(_check_doc_id(post_id))
        snap = ref.get()
        if not snap.exists:
            raise HTTPException(status_code=404, detail="Article not found")
        existing = snap.to_dict()
        update = data.model_dump()
        ref.update(update)
        return {**existing, **update}
    except HTTPException:
        raise
    except Exception as e:
        logging.getLogger(__name__).error("Failed updating blog: %s", e)
        raise HTTPException(status_code=500, detail="Failed updating article")


@api_router.delete("/blog/{post_id}")
def delete_blog(post_id: str, _: bool = Depends(require_admin)):
    ref = _blog_col().document(_check_doc_id(post_id))
    if not ref.get().exists:
        raise HTTPException(status_code=404, detail="Article not found")
    ref.delete()
    return {"success": True}


SEED_POSTS = [
    {
        "title": "SIP vs Lump Sum: Which is Better For You?",
        "category": "Mutual Funds",
        "read_time": "5 min read",
        "author": "ANSH Capital",
        "image": "https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwwfHx8fDE3ODg0MzM3MDF8MA&ixlib=rb-4.1.0&q=85",
        "excerpt": "Understand the difference between systematic investing and one-time investing to choose the right strategy for your goals.",
        "content": "<p>One of the most common questions new investors ask is whether they should invest through a <strong>Systematic Investment Plan (SIP)</strong> or a <strong>Lump Sum</strong>. Both approaches have their place, and the right choice depends on your cash flow, goals and risk appetite.</p><h2>What is a SIP?</h2><p>A SIP lets you invest a fixed amount at regular intervals \u2014 usually monthly. It brings discipline to your investing and averages out your purchase cost over time, a concept known as <em>rupee-cost averaging</em>.</p><ul><li>Great for salaried individuals with regular income</li><li>Reduces the impact of market volatility</li><li>Can start with as little as \u20b9500 per month</li></ul><h2>What is a Lump Sum?</h2><p>A lump sum investment means putting a large amount into a fund at one go. This works best when you have surplus funds and believe the market is attractively valued.</p><h2>So, which one should you choose?</h2><p>For most families building wealth from monthly savings, a SIP is the simplest and most effective path. If you receive a bonus or windfall, a lump sum \u2014 ideally staggered over a few months \u2014 can complement your SIPs.</p><blockquote>The best strategy is the one you can stick with consistently.</blockquote>",
    },
    {
        "title": "How Much Life Insurance Do You Really Need?",
        "category": "Insurance",
        "read_time": "6 min read",
        "author": "ANSH Capital",
        "image": "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBpbnN1cmFuY2V8ZW58MHx8fHwxNzg4NDMzNzAxfDA&ixlib=rb-4.1.0&q=85",
        "excerpt": "A simple framework to calculate the right cover so your family stays protected no matter what happens.",
        "content": "<p>Life insurance is one of the most important \u2014 and most misunderstood \u2014 financial products. The goal is simple: if something happens to you, your family should be able to maintain their lifestyle and meet their goals.</p><h2>The rule of thumb</h2><p>A widely used guideline is to have cover worth <strong>10 to 15 times your annual income</strong>. But a more accurate approach considers your specific situation.</p><h2>Factors to consider</h2><ul><li>Outstanding loans (home, car, personal)</li><li>Children's education and marriage goals</li><li>Your family's monthly living expenses</li><li>Existing savings and investments</li></ul><p>A pure-term insurance plan offers the highest cover at the lowest cost, making it the smartest choice for most families.</p>",
    },
    {
        "title": "Understanding Home Loan For First-Time Buyers",
        "category": "Loans",
        "read_time": "7 min read",
        "author": "ANSH Capital",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxob21lJTIwbG9hbnxlbnwwfHx8fDE3ODg0MzM3MDN8MA&ixlib=rb-4.1.0&q=85",
        "excerpt": "Everything a first-time buyer needs to know about eligibility, interest rates, EMIs and documentation.",
        "content": "<p>Buying your first home is a major milestone. A home loan makes it possible, but the process can feel overwhelming. Here's a clear breakdown to help you approach it with confidence.</p><h2>Check your eligibility</h2><p>Lenders look at your income, credit score, existing obligations and age. A credit score above 750 usually unlocks the best interest rates.</p><h2>Understand the EMI</h2><p>Your EMI depends on the loan amount, interest rate and tenure. A longer tenure lowers the monthly EMI but increases total interest paid.</p><h2>Documents you'll need</h2><ul><li>Identity and address proof</li><li>Income proof (salary slips / ITR)</li><li>Bank statements</li><li>Property documents</li></ul><p>Our advisors compare offers across multiple lenders to help you secure the best possible rate.</p>",
    },
]


@app.on_event("startup")
async def seed_blog():
    try:
        if fs is None:
            logging.getLogger(__name__).error("Firestore not initialised; skipping seed")
            return
        existing = list(_blog_col().limit(1).stream())
        if not existing:
            for p in SEED_POSTS:
                post = BlogPost(**p, slug=slugify(p["title"]))
                _blog_col().document(post.id).set(post.model_dump())
            logging.getLogger(__name__).info("Seeded %d blog posts to Firestore", len(SEED_POSTS))
    except Exception as e:
        logging.getLogger(__name__).error("Blog seed failed: %s", e)


# Include the router in the main app
app.include_router(api_router)

# The site calls the API same-origin; cross-origin callers must be listed in
# CORS_ORIGINS. Auth uses a header (not cookies), so credentials stay off.
app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,
    allow_origins=[o.strip() for o in os.environ.get("CORS_ORIGINS", "").split(",") if o.strip()],
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "X-Admin-Token"],
)

_PUBLIC_CACHEABLE = re.compile(r"^/api/blog(/categories|/[^/]+)?$")


@app.middleware("http")
async def security_headers(request: Request, call_next):
    response = await call_next(request)
    h = response.headers
    h.setdefault("X-Content-Type-Options", "nosniff")
    h.setdefault("X-Frame-Options", "DENY")
    h.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
    h.setdefault("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'")
    if (request.method == "GET" and response.status_code == 200
            and _PUBLIC_CACHEABLE.match(request.url.path)
            and "x-admin-token" not in request.headers):
        # Let Vercel's edge serve public blog reads for a minute instead of
        # re-reading Firestore on every page view.
        h.setdefault("Cache-Control", "public, max-age=0, s-maxage=60, stale-while-revalidate=300")
    else:
        h.setdefault("Cache-Control", "no-store")
    return response

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    if client is not None:
        client.close()