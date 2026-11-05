// ============================================================
// Single source of truth for the business details (NAP) and the
// per-page SEO tags. Used by the browser (to update <head> on
// navigation) and by scripts/prerender.js (to write each page's
// static HTML at build time), so both always agree.
// ============================================================

export const SITE_URL = "https://www.anshcapitalservices.com";

export const BUSINESS = {
  name: "Ansh Capital Services",
  slogan: "Suraksha Bhi.. Samriddhi Bhi..",
  phone: "+91 70424 70200",
  phoneE164: "+917042470200",
  whatsapp: "917042470200",
  email: "support@anshcapitalservices.com",
  streetAddress: "12 Avenue RPS, Tower-4, Lower Ground Floor, Sector 27C, New Mathura Road",
  locality: "Faridabad",
  region: "Haryana",
  postalCode: "121003",
  country: "IN",
  // Shown as one line in the footer and on the contact page.
  addressLine:
    "12 Avenue RPS, Tower-4, Lower Ground Floor, Sector 27C, New Mathura Road, Faridabad, Haryana 121003",
  mapUrl:
    "https://www.google.com/maps/dir/?api=1&destination=RPS+12+Avenue+Tower-4+Lower+Ground+Floor+Sec-27C+Mathura+Road+Faridabad+Haryana+121003",
  hours: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "19:00" }],
  areaServed: ["Faridabad", "Palwal", "Ballabgarh", "Delhi NCR"],
  // ---- Regulatory registrations ----------------------------------------
  // Fill these in once confirmed; the footer and the mutual funds page
  // show them automatically when they are non-empty.
  // e.g. irdai: "IRDAI Corporate Agent (Composite), Reg. No. CA0000"
  irdai: "",
  // e.g. amfiArn: "ARN-000000"
  amfiArn: "ARN-348400",
  // Social profiles (also used in the schema "sameAs" list).
  socials: [
    "https://www.facebook.com/Anshcapitalservices/",
    "https://www.linkedin.com/in/anshcapitalservices/",
    "https://www.instagram.com/anshcapitalservices/",
  ],
};

export const DISCLAIMERS = {
  insurance:
    "Insurance is the subject matter of solicitation. Please read the policy document carefully before buying.",
  mutualFunds:
    "Mutual fund investments are subject to market risks, read all scheme related documents carefully.",
  loans:
    "Loans are at the sole discretion of the lending bank or NBFC. Interest rates and eligibility depend on the lender's policy and your credit profile.",
};

const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

// Titles stay under 60 characters and descriptions under 160 so Google
// shows them in full.
export const PAGES = {
  "/": {
    title: "Ansh Capital Services – Insurance & Investments, Faridabad",
    description:
      "Life, health and general insurance, mutual funds and loans in Faridabad. Compare plans and get expert help. Call 7042470200.",
  },
  "/about": {
    title: "About Ansh Capital Services, Faridabad",
    description: "Who we are, our team and our promise: Suraksha Bhi.. Samriddhi Bhi..",
  },
  "/contact": {
    title: "Contact Ansh Capital Services – New Mathura Road, Faridabad",
    description:
      "Visit us at 12 Avenue RPS, New Mathura Road, Faridabad or call 7042470200. WhatsApp available.",
  },
  "/life-insurance": {
    title: "Term & Life Insurance Advisor in Faridabad – Ansh Capital",
    description:
      "Compare term and life insurance plans from leading insurers. Free cover calculation and claim support in Faridabad.",
  },
  "/health-insurance": {
    title: "Family Health Insurance in Faridabad – Ansh Capital",
    description:
      "Health insurance for families and senior citizens. Cashless hospitals, 80D tax benefit and claim help. Get a free quote.",
  },
  "/general-insurance": {
    title: "Car, Bike & Business Insurance Faridabad – Ansh Capital",
    description:
      "Motor, home, shop and business insurance with quick renewals and claim assistance from our Faridabad office.",
  },
  "/mutual-funds": {
    title: "Mutual Fund SIP Advisor in Faridabad – Ansh Capital",
    description:
      "Start a SIP, save tax with ELSS and plan goals like education and retirement. Mutual funds are subject to market risks.",
  },
  "/loans": {
    title: "Home, Personal & Business Loans Faridabad – Ansh Capital",
    description:
      "Compare home, personal and business loan offers from banks and NBFCs. Quick documentation help in Faridabad.",
  },
  "/become-associate": {
    title: "Become an Insurance Associate / POSP – Ansh Capital",
    description:
      "Earn from insurance, mutual fund and loan business with training and support. Join Ansh Capital Services, Faridabad.",
  },
  "/blog": {
    title: "Insurance, Tax & Investment Guides – Ansh Capital Blog",
    description:
      "Plain-language articles on term and health insurance, SIPs, tax saving and loans from Ansh Capital Services, Faridabad.",
  },
  "/services": {
    title: "Insurance, Mutual Fund & Loan Services – Ansh Capital",
    description:
      "All our services in one place: life, health and general insurance, mutual funds and loans, from our Faridabad office.",
  },
  "/services/insurance": {
    title: "Insurance Solutions in Faridabad – Ansh Capital Services",
    description:
      "Child, retirement, life, health and motor insurance plans compared across leading insurers, with claim support.",
  },
  "/why-choose-us": {
    title: "Why Choose Ansh Capital Services, Faridabad",
    description:
      "Local advisors, plans compared across leading companies, and support from the first conversation to claim settlement.",
  },
  "/faq": {
    title: "FAQs – Ansh Capital Services, Faridabad",
    description:
      "Answers to common questions about insurance, mutual funds, loans and working with Ansh Capital Services.",
  },
  "/privacy-policy": {
    title: "Privacy Policy – Ansh Capital Services",
    description:
      "How Ansh Capital Services collects, uses and protects the personal details you share through our website.",
  },
  "/products/equity": {
    title: "Equity Mutual Funds – Ansh Capital Services, Faridabad",
    description:
      "Understand equity mutual funds, who they suit and how to invest through SIP. Mutual funds are subject to market risks.",
  },
  "/products/debt": {
    title: "Debt Mutual Funds – Ansh Capital Services, Faridabad",
    description:
      "Understand debt mutual funds for steadier, shorter-term goals. Mutual funds are subject to market risks.",
  },
  "/products/hybrid": {
    title: "Hybrid Mutual Funds – Ansh Capital Services, Faridabad",
    description:
      "Hybrid funds mix equity and debt in one scheme. Learn who they suit. Mutual funds are subject to market risks.",
  },
  "/products/index": {
    title: "Index Funds & ETFs – Ansh Capital Services, Faridabad",
    description:
      "Low-cost index funds that track the market. Learn how they work. Mutual funds are subject to market risks.",
  },
};

// Routes written out as static HTML at build time (also the sitemap).
export const PRERENDER_ROUTES = Object.keys(PAGES);

// Routes that should not be listed in the sitemap (still prerendered).
export const SITEMAP_EXCLUDE = new Set(["/privacy-policy"]);

const FALLBACK = {
  title: "Ansh Capital Services – Insurance & Investments, Faridabad",
  description: PAGES["/"].description,
};

const normalise = (pathname = "/") => {
  const p = pathname.split(/[?#]/)[0].replace(/\/+$/, "");
  return p === "" ? "/" : p;
};

export const getPageMeta = (pathname) => {
  const path = normalise(pathname);
  const meta = PAGES[path];
  return {
    path,
    known: Boolean(meta),
    title: (meta || FALLBACK).title,
    description: (meta || FALLBACK).description,
    canonical: `${SITE_URL}${path === "/" ? "/" : path}`,
    image: DEFAULT_IMAGE,
  };
};

// schema.org InsuranceAgency markup for the home page.
export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  slogan: BUSINESS.slogan,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo512.png`,
  image: `${SITE_URL}/logo512.png`,
  telephone: "+91-7042470200",
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  openingHoursSpecification: BUSINESS.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: BUSINESS.areaServed,
  knowsAbout: ["Life insurance", "Health insurance", "General insurance", "Mutual funds", "Loans"],
  sameAs: BUSINESS.socials,
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
