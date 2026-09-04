from fastapi import FastAPI, APIRouter, UploadFile, File, Header, HTTPException, Query, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import base64
import re
import io
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
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

EMBEDDED_FIREBASE_CRED = {
    "type": "service_account",
    "project_id": "ansh-capital",
    "private_key_id": "2501329311470bc7bf9531d3bd29499ebda6f84b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5NfVcDwyhM9KH\nLwknBhYtydMkTFk0m55YYGV1rYxqBw8oBmsCevr/BOx9W71L4+qigPoKHYt3LA+6\nvgV1Km0YDq7MY5oj30JeoJUQdoVqOrj0DugCPv2ucLzLhYJ/jTjkpwVioUZCIvkc\naKud/mZzM2+M5wYhqGdUp2BoFDMKUwPFxcqiVH6DpTi72HMecN+HeZHyWdGhqgy1\nfbzhoo2+MUrZzPDwET2u2V7SSPhmv0BXpizQ7a3vTuJvLmC7Vc0IHnaTgQb7ZzW6\nMwnNDMjTFUCmQPQ6MflCMvNm73MeiMWRgqtrFHCma+Z7aNIcDoUfjyhN4XHR0v7p\niIaa2bv/AgMBAAECggEARQ5Q1wvHbj2HxB6t/25eC6GCR7jt09coIZSDj+5u+cN7\nC7Xk5U5cUoSP9qeje23V+NQ1JltgukTj8oFSQJ7agUtMMmn6uWBPez/NhI9kbDjL\n6De8msXIyWdAhXPYtd0+dsatk9pE+3jVwBloz6ZgpZhqgbNLznXfXSlxIS1S4Ihz\nHEl4OkDRKIlJbNAGUZ3KhEJF9OzAWI+E/QLKbnmBGHzqMBUU30i8TSMDLPiQREgv\nxrsL4WCKZJz4PJu26+ipTlnXh8w4UXpYqhsgC/sxMnPhCC3CpNgNNA81Tmls/+LZ\nM9iNY6UCKHd7qcof8FRHTfW/H58UZwATTA0FnMrpkQKBgQDw9H6DTIx1gjVk43Fp\nP8CQCX8zakJvShDX4+508ztu+w0W983pAH7pckeKuGRSLvfXnRfsUA4fQndaNYiO\nird9tSpxqYxHst9B2ae5TTSS9rVwMflwTwdHSdhKFqzOSxzwHfcMMOrbx8wi7XRa\nm9jrpt358BezPZNqmm8JXA/YkQKBgQDExm3aax3Oxe+O4zb/NWA4lv405/nTsf8z\nSz9MXC1ImGLvOYUS5qT593aEoaFVu7tRi4M1YMt8lJ3Gw6KRWWRuCor7gSVaG+49\nMqVeOPqGRaxjOvAl2+UoEjzHRR23A+B9R1DgoARBbz8MU7vSqGkwnpncAvGU0ZVn\nyvHkMJ0TjwKBgDPicduUACrNfvHah/FB6RUa9mj72JJeQII8cnx8Y6/iH09yzMP/\nd1SNZxpX2kJYGsYy7ZPVKTVR+qFSJbWL6TcIa7tN5wcJXUmwtI0SMt/yf99I441r\ndwXCwPAzMcK6KeEKksftQKVSwIJE32kjZfJYXDQVnwTZnYS2/HHngQIBAoGBAJcV\nP91XJ1DOuyt7m4uB4PoyPMZEYpY+8ZHhsZ0gnQhDMJs7D8i+XGcssMwPCb+4348x\nzjFau4JQ3X9yUEzHVQwEfkezFgnErjxAuaXJm9kif8TEyQRYfO8yaYYatEED8gZe\njmOZmQrgroj5dZm+At34uGuruu8nqE5EDUvGY6RTAoGABva4gSyRfEBaCoC2w0mz\nyBrFlmmoidd6n2Z4AZpoEo0Od556x3clsYgZUhFVfFqed+hVULFi6MEjlzamwGTy\n/rXvQ5z/+hVP0+ldoJWsAeYohX2ilyKkIAxGO9PxqQEGB3TXZzdX30Yw+iCEFa0d\npGiMavwqjsHnx0gQoh4LkGo=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@ansh-capital.iam.gserviceaccount.com",
    "client_id": "110679736225335398912",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40ansh-capital.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

fs = None
fb_init_error = None
if firebase_admin is not None:
    try:
        cred = None
        # 1. Check environment variable
        if os.environ.get("FIREBASE_SERVICE_ACCOUNT_JSON"):
            try:
                import json
                cred = credentials.Certificate(json.loads(os.environ["FIREBASE_SERVICE_ACCOUNT_JSON"]))
            except Exception as _e:
                logging.getLogger(__name__).warning("Failed parsing FIREBASE_SERVICE_ACCOUNT_JSON: %s", _e)
        
        # 2. Check file path if it exists
        if cred is None and Path(FIREBASE_CRED_PATH).exists():
            try:
                cred = credentials.Certificate(FIREBASE_CRED_PATH)
            except Exception as _e:
                logging.getLogger(__name__).warning("Failed reading %s: %s", FIREBASE_CRED_PATH, _e)

        # 3. Fallback to embedded credentials
        if cred is None:
            cred = credentials.Certificate(EMBEDDED_FIREBASE_CRED)

        if not firebase_admin._apps:
            firebase_admin.initialize_app(cred)
        fs = fb_firestore.client()
        logging.getLogger(__name__).info("Firestore connected successfully")
    except Exception as _fb_err:
        fb_init_error = str(_fb_err)
        logging.getLogger(__name__).error("Firebase init failed: %s", _fb_err)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.get("/health")
async def health():
    return {
        "status": "ok",
        "firebase_connected": fs is not None,
        "firebase_error": fb_init_error
    }

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ==================== BLOG ====================
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'ansh@admin2025')
ADMIN_TOKEN = os.environ.get('ADMIN_TOKEN', 'ansh-secret-token-8f3a1c9d2e4b')


def slugify(text: str) -> str:
    text = (text or "").lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text)
    return text.strip('-')


class BlogPostBase(BaseModel):
    title: str
    category: str
    excerpt: str = ""
    content: str = ""
    image: str = ""
    author: str = "ANSH Capital"
    read_time: str = "5 min read"
    published: bool = True


class BlogPostCreate(BlogPostBase):
    pass


class BlogPost(BlogPostBase):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    slug: str
    date: str = Field(default_factory=lambda: datetime.now(timezone.utc).strftime("%B %d, %Y"))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class LoginInput(BaseModel):
    password: str


async def require_admin(x_admin_token: Optional[str] = Header(None)):
    if x_admin_token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")
    return True


@api_router.post("/admin/login")
async def admin_login(data: LoginInput):
    if data.password != ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid password")
    return {"token": ADMIN_TOKEN}


BLOG_COLLECTION = "blog_posts"


def _blog_col():
    if fs is None:
        raise HTTPException(status_code=500, detail=f"Database unavailable: {fb_init_error or 'Firestore not initialized'}")
    return fs.collection(BLOG_COLLECTION)


def _slug_exists(slug: str) -> bool:
    docs = list(_blog_col().where("slug", "==", slug).limit(1).stream())
    return len(docs) > 0


@api_router.post("/blog/upload")
async def upload_image(file: UploadFile = File(...), _: bool = Depends(require_admin)):
    contents = await file.read()
    # Compress/resize so the base64 image fits within Firestore's 1MB document limit.
    try:
        from PIL import Image
        img = Image.open(io.BytesIO(contents))
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
    except Exception:
        b64 = base64.b64encode(contents).decode("utf-8")
        mime = file.content_type or "image/jpeg"
        return {"url": f"data:{mime};base64,{b64}"}


@api_router.get("/blog/categories")
def get_categories():
    cats = {(d.to_dict() or {}).get("category", "") for d in _blog_col().stream()}
    return {"categories": sorted([c for c in cats if c])}


@api_router.get("/blog", response_model=List[BlogPost])
def list_blog(category: Optional[str] = Query(None), limit: int = Query(100)):
    posts = [d.to_dict() for d in _blog_col().stream()]
    posts = [p for p in posts if p.get("published", True)]
    if category and category != "All":
        posts = [p for p in posts if p.get("category") == category]
    posts.sort(key=lambda p: p.get("created_at", ""), reverse=True)
    return posts[:limit]


@api_router.get("/blog/{slug}", response_model=BlogPost)
def get_blog(slug: str):
    for d in _blog_col().where("slug", "==", slug).limit(1).stream():
        return d.to_dict()
    raise HTTPException(status_code=404, detail="Article not found")


@api_router.post("/blog", response_model=BlogPost)
def create_blog(data: BlogPostCreate, _: bool = Depends(require_admin)):
    base_slug = slugify(data.title) or str(uuid.uuid4())[:8]
    slug = base_slug
    i = 1
    while _slug_exists(slug):
        i += 1
        slug = f"{base_slug}-{i}"
    post = BlogPost(**data.model_dump(), slug=slug)
    _blog_col().document(post.id).set(post.model_dump())
    return post


@api_router.put("/blog/{post_id}", response_model=BlogPost)
def update_blog(post_id: str, data: BlogPostCreate, _: bool = Depends(require_admin)):
    ref = _blog_col().document(post_id)
    snap = ref.get()
    if not snap.exists:
        raise HTTPException(status_code=404, detail="Article not found")
    existing = snap.to_dict()
    update = data.model_dump()
    ref.update(update)
    return {**existing, **update}


@api_router.delete("/blog/{post_id}")
def delete_blog(post_id: str, _: bool = Depends(require_admin)):
    ref = _blog_col().document(post_id)
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

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()