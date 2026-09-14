// ============================================================
// MOCK DATA for ANSH Capital Services (frontend-only clone)
// All content here is mocked and can later be replaced by a real backend.
// ============================================================

import anshGuptaImg from "../assets/team/ansh-gupta.jpg";
import kavitaRaoImg from "../assets/team/kavita-rao.jpg";
import manishAggarwalImg from "../assets/team/manish-aggarwal.jpg";
import bannerMutualFunds from "../assets/banner_mutual_funds.png";
import infographicMutualFunds from "../assets/infographic_mutual_funds.jpg";
import bannerInsurance from "../assets/banner_insurance.jpg";
import bannerAssetProtection from "../assets/banner_asset_protection.png";
import bannerHealthInsurance from "../assets/banner_health_insurance.png";
import bannerLifeInsuranceLegacy from "../assets/banner_life_insurance_legacy.png";
import bannerPlanToday from "../assets/banner_plan_today.png";
import bannerOurMissionTeam from "../assets/banner_our_mission_team.png";
import bannerConnectContact from "../assets/banner_connect_contact.jpg";
import bannerLoans from "../assets/banner_loans.png";

export const company = {
  name: "ANSH",
  fullName: "ANSH Capital Services",
  tagline: "Suraksha Bhi.. Samriddhi Bhi..",
  city: "Faridabad",
  since: "SINCE DAY ONE",
  phones: ["+91 70424 70200", "+91 99992 27531"],
  email: "Support@anshcapitalservices.com",
  whatsapp: "917042470200",
  address:
    "RPS 12 Avenue, Tower-4, Lower Ground Floor, Sec-27C, Mathura Road, Faridabad, Haryana, 121001",
  timings: [
    { day: "Mon - Sat", hours: "10:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  mapUrl: "https://maps.google.com/?q=Faridabad+Haryana",
};

export const topBar = {
  message: "Secure.",
  highlight: "Invest.",
  suffix: "Grow.",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      {
        label: "Mutual Funds",
        to: "/services/mutual-funds",
        subItems: [
          { label: "Equity Funds", to: "/products/equity" },
          { label: "Debt Funds", to: "/products/debt" },
          { label: "Hybrid Funds", to: "/products/hybrid" },
          { label: "Index Funds", to: "/products/index" },
          { label: "SIP & Tax-Saving (ELSS)", to: "/services/mutual-funds" },
        ],
      },
      {
        label: "Insurance Solutions",
        to: "/services/insurance",
        subItems: [
          { label: "Child Education / Marriage Plan", to: "/services/insurance" },
          { label: "Retirement Solutions", to: "/services/insurance" },
          { label: "Guaranteed Plans", to: "/services/insurance" },
          { label: "Health & Life Insurance", to: "/services/insurance" },
        ],
      },
      {
        label: "Loan Solutions",
        to: "/services/loans",
        subItems: [
          { label: "Home Loan", to: "/services/loans" },
          { label: "Personal Loan", to: "/services/loans" },
          { label: "Car Loan", to: "/services/loans" },
          { label: "Business Loan", to: "/services/loans" },
        ],
      },
      {
        label: "All Services & Products",
        to: "/services",
      },
    ],
  },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

export const hero = {
  eyebrow: "FARIDABAD • SINCE DAY ONE",
  titleLine1: "Money moves",
  titleLine2Prefix: "made ",
  titleHighlight: "simple.",
  description:
    "Mutual Funds, Insurance & Loans — planned honestly, explained clearly, by people who live in your city.",
  primaryCta: "Talk to an Expert",
  secondaryCta: "Explore Our Services",
  image:
    "https://images.pexels.com/photos/13515445/pexels-photo-13515445.jpeg",
  stats: [
    { value: "19+", label: "Years of Experience", icon: "Users" },
    { value: "500+", label: "Satisfied Clients", icon: "ShieldCheck" },
    { value: "1000+", label: "Plans Managed", icon: "Users2" },
    { value: "AI Trusted", label: "Advice & Support", icon: "BadgeCheck" },
  ],
};

export const promoBanner = {
  left: "Market moves daily. Opportunities don't wait.",
  middleTitle: "The Right Financial Decision Today",
  middleSubtitle: "Can Change Your Tomorrow.",
  cta: "Plan Your Future Now",
};

export const servicesIntro = {
  eyebrow: "OUR SERVICES",
  line1: "Comprehensive Financial Solutions",
  highlight: "Designed",
  line2: "Around your Goals",
  title: "Comprehensive Financial Solutions Designed Around Your Goals",
  subtitle:
    "From investments and protection to credit and growth, we provide solutions designed around you.",
};

export const services = [
  {
    id: "mutual-funds",
    icon: "PieChart",
    title: "Mutual Funds",
    bannerImage: bannerMutualFunds,
    description:
      "Grow your wealth with smart investing plans tailored to your goals.",
    points: ["SIP Planning", "Goal-based Investing", "Portfolio Review"],
    detail: {
      heroImage: bannerMutualFunds,
      infographicImage: infographicMutualFunds,
      overview: "Mutual Funds are professionally managed investment vehicles that pool money from multiple investors to invest in diversified portfolios of stocks, bonds, and other securities. At ANSH Capital Services, we help you identify the right mutual fund schemes aligned with your risk profile, financial goals, and investment horizon.",
      scope: [
        "Equity Mutual Funds — for long-term wealth creation through stock market exposure",
        "Debt Mutual Funds — for stable, low-risk income generation",
        "Hybrid Funds — a balanced mix of equity and debt for moderate growth",
        "ELSS (Tax-Saving Funds) — to save tax under Section 80C while growing your money",
        "Index Funds & ETFs — low-cost passive investing tracking market indices",
        "Sectoral & Thematic Funds — targeted exposure to specific industries",
      ],
      process: [
        { step: "01", title: "Risk Assessment", desc: "We evaluate your risk tolerance, financial goals, and investment timeline through a detailed consultation." },
        { step: "02", title: "Fund Selection", desc: "Our experts shortlist the best-performing funds from trusted AMCs based on your profile and market conditions." },
        { step: "03", title: "SIP or Lump Sum Setup", desc: "We help you choose between SIP (Systematic Investment Plan) or lump-sum investments and set up your account." },
        { step: "04", title: "Portfolio Monitoring", desc: "We continuously track your portfolio performance and make timely rebalancing recommendations." },
        { step: "05", title: "Review & Reporting", desc: "Regular reviews and transparent reports keep you informed about your wealth growth journey." },
      ],
      benefits: [
        "Professional fund management by expert analysts",
        "Diversification across asset classes to reduce risk",
        "Start with as low as ₹500/month via SIP",
        "Tax benefits up to ₹1.5 Lakh under Section 80C (ELSS)",
        "High liquidity — redeem anytime (open-ended funds)",
        "Power of compounding for long-term wealth creation",
      ],
      faqs: [
        { q: "What is the minimum amount to start investing in mutual funds?", a: "You can start a SIP with as little as ₹500 per month. Lump-sum investments typically start from ₹5,000 depending on the fund house." },
        { q: "Are mutual funds safe?", a: "Mutual funds are regulated by SEBI and managed by professional fund managers. While market-linked funds carry some risk, proper diversification and a long-term approach significantly reduce risk." },
        { q: "How long should I stay invested?", a: "For equity funds, we recommend a minimum of 5-7 years. Debt funds can work well for 1-3 years. The longer you stay invested, the better the compounding benefits." },
        { q: "Can I withdraw my money anytime?", a: "Yes, open-ended mutual funds allow redemption at any time. However, some funds may have exit loads if redeemed within a certain period (usually 1 year for equity funds)." },
      ],
    },
  },
  {
    id: "insurance",
    icon: "ShieldCheck",
    title: "Insurance Solutions",
    bannerImage: bannerInsurance,
    assetBanner: bannerAssetProtection,
    healthBanner: bannerHealthInsurance,
    legacyBanner: bannerLifeInsuranceLegacy,
    description:
      "Protect your family and your assets with comprehensive coverage.",
    points: ["Child Education & Marriage", "Retirement Solutions", "Guaranteed Plans", "Health & Life Cover"],
    detail: {
      heroImage: bannerInsurance,
      assetBanner: bannerAssetProtection,
      healthBanner: bannerHealthInsurance,
      legacyBanner: bannerLifeInsuranceLegacy,
      overview: "Insurance is the cornerstone of any sound financial plan. At ANSH Capital Services, we help you secure your family's future with the right mix of child future plans, retirement solutions, guaranteed return policies, and health & term insurance. We work with all major insurers to find you the best coverage at the most competitive premiums.",
      scope: [
        "Child Education / Marriage Plan — guaranteed corpus creation to fund higher education and major life milestones",
        "Retirement Solutions — pension plans and annuity schemes for guaranteed lifelong post-retirement regular income",
        "Guaranteed Plans — 100% capital safety with assured returns, bonuses, and tax-free maturity benefits",
        "Term Life Insurance — high cover pure protection plans with affordable premiums for family security",
        "Health Insurance — cashless hospitalization and critical medical coverage at 10,000+ top hospitals",
        "Vehicle & Travel Insurance — comprehensive protection for cars, two-wheelers, property, and global travel",
      ],
      process: [
        { step: "01", title: "Needs Analysis", desc: "We assess your family's financial obligations, child future timelines, retirement goals, and protection requirements." },
        { step: "02", title: "Plan Comparison", desc: "We compare plans from 30+ insurers to find the right balance of guaranteed returns, coverage, and claim settlement ratio." },
        { step: "03", title: "Application & Documentation", desc: "We handle the entire paperwork, medical tests coordination, and application submission on your behalf." },
        { step: "04", title: "Policy Issuance", desc: "Once approved, we ensure timely policy issuance and explain all terms, exclusions, and benefits." },
        { step: "05", title: "Claims Assistance", desc: "In case of a claim, we guide you through the entire process for quick and hassle-free settlement." },
      ],
      benefits: [
        "Guaranteed financial security for your child's education and marriage",
        "Lifelong pension and stress-free retirement income",
        "100% Capital safety with guaranteed return plans",
        "Tax benefits under Section 80C and 80D",
        "Cashless hospitalization at 10,000+ network hospitals",
        "Dedicated claims support and lifetime servicing",
      ],
      faqs: [
        { q: "How do Child Education & Marriage Plans work?", a: "These plans combine insurance coverage with guaranteed payouts structured around your child's key milestone ages (e.g. 18 for college, 21 for graduation, 25 for marriage). Even in unfortunate events, the policy continues with premiums waived by the insurer." },
        { q: "What are Guaranteed Return Plans?", a: "Guaranteed plans offer a fixed, legally binding rate of return on your investment, completely immune to stock market volatility, often with tax-free payouts under Section 10(10D)." },
        { q: "When should I start Retirement Solutions?", a: "The earlier you start, the smaller the monthly contribution needed due to compounding. Starting in your 20s or 30s ensures a substantial, inflation-beating pension corpus." },
        { q: "How much life insurance coverage do I need?", a: "A general rule is 10-15 times your annual income, taking into account debts, future child education costs, and family lifestyle maintenance." },
      ],
    },
  },
  {
    id: "loans",
    icon: "Wallet",
    title: "Loan Solutions",
    bannerImage: bannerLoans,
    description: "Smart loan solutions tailored to your financial needs.",
    points: ["Home Loan (from 7.15%)", "Personal Loan", "Car Loan", "Business Loan"],
    detail: {
      heroImage: bannerLoans,
      overview: "Whether you're buying your dream home, purchasing a car, expanding your business, or meeting urgent personal needs, ANSH Capital Services connects you with the best loan products from 25+ leading banks and NBFCs. We negotiate the lowest interest rates starting from 7.15% and ensure instant, hassle-free processing.",
      scope: [
        "Home Loan — lowest interest rates from 7.15% for purchase, construction, plot, or balance transfer",
        "Personal Loan — quick collateral-free funding for weddings, travel, medical emergencies, or debt consolidation",
        "Car Loan — attractive interest rates and flexible tenures for new and pre-owned vehicle purchases",
        "Business Loan — collateral-free working capital, machinery, and business expansion financing",
        "Loan Against Property (LAP) — high-value funding leveraging your residential or commercial property",
        "Education Loan — comprehensive financing for prestigious universities in India and abroad",
      ],
      process: [
        { step: "01", title: "Requirement Understanding", desc: "We understand your loan purpose, amount needed, repayment capacity, and timeline preferences." },
        { step: "02", title: "Lender Comparison", desc: "We compare interest rates, processing fees, and terms from 25+ banks and NBFCs to find you the best deal." },
        { step: "03", title: "Documentation Support", desc: "We assist with all paperwork — income proof, property documents, KYC, and application forms." },
        { step: "04", title: "Application & Processing", desc: "We submit your application, follow up with the lender, and coordinate property valuation if needed." },
        { step: "05", title: "Disbursement & Support", desc: "Once approved, we ensure quick disbursement and remain available for any post-disbursement queries." },
      ],
      benefits: [
        "Home loan interest rates starting from 7.15% p.a.",
        "Access to 25+ leading public/private banks and NBFCs",
        "Zero or discounted processing fees on select products",
        "Instant digital approval — within 24-48 hours",
        "Balance transfer facility to reduce your existing EMIs",
        "Flexible repayment tenures from 1 to 30 years",
      ],
      faqs: [
        { q: "What is the starting interest rate for home loans?", a: "Home loan rates start from 7.15% p.a. onwards depending on the lender, your CIBIL score, and loan amount. We help negotiate the lowest rate for you." },
        { q: "Can I get a Car Loan or Personal Loan without heavy paperwork?", a: "Yes! We offer pre-approved and minimal documentation personal and car loans with instant digital KYC and rapid disbursement." },
        { q: "What is the eligibility for Business Loans?", a: "Business loans are available for self-employed professionals, traders, manufacturers, and service providers with minimum 1-2 years of business vintage and ITR filings." },
        { q: "How can I reduce my loan EMI?", a: "You can reduce EMI by transferring your existing loan to a lender with a lower interest rate, increasing your tenure, or making prepayments. We handle the entire balance transfer process." },
      ],
    },
  },
];

export const processIntro = {
  eyebrow: "OUR PROCESS",
  titleLine1: "How We Help You",
  titleLine2: "Achieve Your Goals",
  description:
    "A simple, transparent process to help you make confident financial decisions.",
  cta: "Get Started Today",
};

export const processSteps = [
  {
    number: "01",
    icon: "Users",
    title: "Understand Your Goals",
    description:
      "We listen to your needs, priorities and financial aspirations.",
  },
  {
    number: "02",
    icon: "Target",
    title: "Analyse & Plan",
    description:
      "We evaluate your financial situation and create a custom plan.",
  },
  {
    number: "03",
    icon: "LineChart",
    title: "Recommend The Right Solution",
    description:
      "We suggest the best mutual funds, insurance or loans.",
  },
  {
    number: "04",
    icon: "HandCoins",
    title: "Implement Your Plan",
    description: "We execute the plan with the right strategies.",
  },
  {
    number: "05",
    icon: "Settings",
    title: "Review & Monitor",
    description: "We track progress and make regular adjustments.",
  },
  {
    number: "06",
    icon: "TrendingUp",
    title: "Grow & Secure Your Future",
    description: "We help you stay on track for long-term success.",
  },
];

export const investIntro = {
  eyebrow: "INVEST SMARTLY",
  titleLine1: "How We Help You",
  titleLine2: "Achieve Your Goals",
  description:
    "Choose from a wide range of mutual fund schemes tailored to your risk profile and financial objectives.",
  cta: "Explore Mutual Funds",
};

export const investmentOptions = [
  {
    id: "equity",
    title: "Equity Funds",
    subtitle: "High growth wealth creation",
    image:
      "https://images.pexels.com/photos/16876265/pexels-photo-16876265.jpeg",
  },
  {
    id: "debt",
    title: "Debt Funds",
    subtitle: "Stable returns lower risk",
    image:
      "https://images.pexels.com/photos/34742289/pexels-photo-34742289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "hybrid",
    title: "Hybrid Funds",
    subtitle: "Balanced growth with stability",
    image:
      "https://images.pexels.com/photos/16204377/pexels-photo-16204377.jpeg",
  },
  {
    id: "index",
    title: "Index Funds",
    subtitle: "Low cost passive investing",
    image:
      "https://images.unsplash.com/photo-1433002208920-1362f13a93a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxhZXJpYWwlMjB2aWV3JTIwaG9yaXpvbnxlbnwwfHx8fDE3ODY3MTQ4MDN8MA&ixlib=rb-4.1.0&q=85",
  },
];

export const investFeatures = [
  { icon: "Users2", text: "Research-backed Portfolio Selection & Reviews" },
  { icon: "PencilLine", text: "Minimal Fees More for Your Money" },
  { icon: "ShieldCheck", text: "Risk-managed Strategies" },
  { icon: "BadgeCheck", text: "Transparent & Easy Process" },
];

export const goalsIntro = {
  eyebrow: "PLAN TODAY",
  titleLine1: "Goals We Can Help",
  titleLine2: "You Achieve",
  cta: "View All Goals",
};

export const goals = [
  {
    id: "home",
    title: "Buy Your Dream Home",
    icon: "Home",
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
  },
  {
    id: "education",
    title: "Child's Education",
    icon: "GraduationCap",
    image:
      "https://images.unsplash.com/photo-1618355776464-8666794d2520?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwZWR1Y2F0aW9ufGVufDB8fHx8MTc4MTg1NzI2M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "wealth",
    title: "Wealth Creation",
    icon: "TrendingUp",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBncm93dGh8ZW58MHx8fHwxNzg4NDMzNjAzfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "retirement",
    title: "Retirement Planning",
    icon: "ShieldCheck",
    image:
      "https://images.pexels.com/photos/8796064/pexels-photo-8796064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "protection",
    title: "Financial Protection",
    icon: "BarChart3",
    image:
      "https://images.pexels.com/photos/9467762/pexels-photo-9467762.jpeg",
  },
];

export const statsSection = [
  { value: "19+", label: "Years of Experience", icon: "Award" },
  { value: "500+", label: "Satisfied Clients", icon: "Users2" },
  { value: "1000+", label: "Plans Managed", icon: "Users" },
  { value: "₹500Cr+", label: "Assets Under Advisory", icon: "Landmark" },
];

export const testimonialsIntro = {
  eyebrow: "WHAT OUR CLIENTS SAY",
  title: "Trusted by Families Like Yours",
};

export const testimonials = [
  {
    id: 1,
    name: "Prashant Solanki",
    role: "Business Owner, Faridabad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "I've had a very good experience with Ansh Capital Services. The team is helpful, responsive, and most importantly, Mr. Ankur explains everything in a very simple and easy-to-understand way. Unlike many other insurance service providers, there's no complicated jargon or confusion — he takes the time to explain the options clearly and helps you make an informed decision. I've been really satisfied with their service and have also recommended Ansh Capital Services to some of my close friends and family. Definitely a reliable team to work with. Thank you, Mr. Ankur, for the continued support!",
  },
  {
    id: 2,
    name: "Pankaj Chawla",
    role: "Working Professional, Delhi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "I had a very positive experience with Ansh Capital Services for my insurance requirements. The team was professional, responsive, and extremely helpful throughout the process. They took the time to understand my needs, explained the policy details clearly, and guided me toward the right coverage without making the process complicated. What I particularly appreciated was their prompt communication and customer-focused approach. I would definitely recommend Ansh Capital Services to anyone looking for a reliable and trustworthy insurance service provider.",
  },
  {
    id: 3,
    name: "Nandani Verma",
    role: "Mutual Fund Investor, Gurgaon",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "I wasn't aware of SIPs before, and I honestly had a lot of questions about how they work and how to get started. Mr. Ankur Jain and his team explained everything very patiently and in a very easy-to-understand way. They answered all my questions politely and guided me throughout the process. Really appreciate their support and the way they made everything so simple and clear.",
  },
  {
    id: 4,
    name: "Keshav",
    role: "Media Entrepreneur, Delhi NCR",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "I run my own media company and have been working with Ankur Sir and the team at Ansh Capital. Their professionalism and work ethics have been genuinely impressive. They have recommended funds that I am investing in, and they also took care of my term insurance along with my family's complete health insurance. I highly recommend them.",
  },
  {
    id: 5,
    name: "Radhika Arora",
    role: "Health Insurance Client, Faridabad",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "I was actually planning to have my health insurance for a very long time but was very skeptical of my decision. My dear friend Mr. Vivek, who is part of Ansh Capital Services, always used to guide me on the benefits of health insurance, because of which I actually made up my mind and took it. The overall process was really quick, smooth, and he even made me understand all the benefits and time period of the same. He even twice confirmed everything before proceeding, so it was a very smooth process. Thank you once again!",
  },
  {
    id: 6,
    name: "Priyanka Ghai",
    role: "Financial Planning Client, Delhi",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "A big thanks to Ankur Sir and Vivek for changing my perspective on financial planning and helping me make smarter money decisions. Taking term insurance and starting my mutual fund journey with their guidance has been one of my best decisions. What I admire most is that they're always ready to help with financial advice whether you're a client or not. Thank you for teaching me the value of money, savings, and investing. Wishing you both continued success and growth ahead!",
  },
  {
    id: 7,
    name: "CodM",
    role: "Corporate GMC Client",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&h=160&q=80",
    rating: 5,
    quote:
      "We had a great experience working with Ansh Capital Services for the GMC policy for our employees. The team was helpful, understood our requirements, explained the options clearly and helped us through the entire process without any hassle. The team was always available to help and made the overall experience quite smooth for us.",
  },
];

export const insightsIntro = {
  eyebrow: "LEARN & GROW",
  titleLine1: "Financial Insights",
  titleLine2: "For A Better Tomorrow",
  description:
    "Explore our latest articles and guides on investments, insurance and financial planning.",
  cta: "View All Articles",
};

export const insights = [
  {
    id: "sip-vs-lumpsum",
    category: "MUTUAL FUNDS",
    title: "SIP vs Lump Sum: Which is Better For You?",
    date: "May 12, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBwbGFubmluZ3xlbnwwfHx8fDE3ODg0MzM3MDF8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Understand the difference between systematic investing and one-time investing to choose the right strategy for your goals.",
  },
  {
    id: "life-insurance-need",
    category: "INSURANCE",
    title: "How Much Life Insurance Do You Really Need?",
    date: "May 08, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBpbnN1cmFuY2V8ZW58MHx8fHwxNzg4NDMzNzAxfDA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "A simple framework to calculate the right cover so your family stays protected no matter what happens.",
  },
  {
    id: "home-loan-first-time",
    category: "LOANS",
    title: "Understanding Home Loan For First-Time Buyers",
    date: "April 29, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwzfHxob21lJTIwbG9hbnxlbnwwfHx8fDE3ODg0MzM3MDN8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Everything a first-time buyer needs to know about eligibility, interest rates, EMIs and documentation.",
  },
  {
    id: "tax-saving-regimes",
    category: "TAX PLANNING",
    title: "Old vs New Tax Regime: Which Saves You More Money?",
    date: "April 18, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHx0YXglMjBzYXZpbmd8ZW58MHx8fHwxNzg4NDMzNzAxfDA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "A complete breakdown of deductions under 80C, 80D and standard deductions compared against lower slab rates.",
  },
  {
    id: "emergency-fund-guide",
    category: "WEALTH MANAGEMENT",
    title: "Building an Emergency Fund: 5 Common Mistakes to Avoid",
    date: "April 05, 2024",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxzYXZpbmdzfGVufDB8fHx8MTc4ODQzMzcwMXww&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Why keeping emergency money in locked instruments hurts you, and where you should ideally park 6 months of expenses.",
  },
  {
    id: "retirement-corpus-target",
    category: "RETIREMENT",
    title: "How Much Corpus Do You Need to Retire Gracefully at 60?",
    date: "March 24, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50fGVufDB8fHx8MTc4ODQzMzcwMXww&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Factor inflation, medical expenses, and lifestyle needs into your retirement calculation with our step-by-step formula.",
  },
];

export const ctaSection = {
  title: "Ready to Take the Next Step?",
  description:
    "Your financial future doesn't have to feel complicated. Let's start with a conversation about where you are today, where you want to go and how we can help you get there.",
  primaryCta: "Talk to an Expert",
  secondaryCta: "WhatsApp Us",
};

export const footer = {
  description:
    "Your trusted financial partner for investments, protection and loans. Local advisors, no jargon.",
  quickLinks: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services & Products", to: "/services" },
    { label: "Why Choose Us", to: "/why-choose-us" },
    { label: "Blog", to: "/blog" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
  ],
  ourServices: [
    { label: "Mutual Funds", to: "/services#mutual-funds" },
    { label: "Insurance", to: "/services#insurance" },
    { label: "Home Loans", to: "/services#loans" },
    { label: "Personal Loans", to: "/services#loans" },
    { label: "Business Loans", to: "/services#loans" },
    { label: "Financial Planning", to: "/services#wealth" },
  ],
  socials: [
    {
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/anshcapitalservices/",
    },
    {
      icon: "Facebook",
      url: "https://www.facebook.com/Anshcapitalservices/",
    },
    {
      icon: "Instagram",
      url: "https://www.instagram.com/anshcapitalservices/",
    },
  ],
};

// ---------------- About Page ----------------
export const aboutPage = {
  eyebrow: "ABOUT US",
  title: "Financial Guidance With a Human Touch",
  image: "/images/about-us.png",
  intro:
    "ANSH Capital Services is a Delhi/NCR-based financial advisory firm helping families and businesses make confident money decisions. We combine 19+ years of experience with honest, jargon-free advice.",
  mission:
    "To make financial planning simple, transparent and accessible for every family in our city.",
  vision:
    "To be the most trusted financial partner in the region — one relationship at a time.",
  values: [
    {
      icon: "HeartHandshake",
      title: "Honesty First",
      description:
        "We recommend only what's right for you — no pushy sales, no hidden agenda.",
    },
    {
      icon: "MessageCircle",
      title: "Clear Communication",
      description:
        "Complex finance explained in plain language you can actually understand.",
    },
    {
      icon: "ShieldCheck",
      title: "Long-term Trust",
      description:
        "Regular reviews and lifelong support as your goals and life evolve.",
    },
    {
      icon: "MapPin",
      title: "Local & Personal",
      description:
        "People from your city who understand your needs and are always reachable.",
    },
  ],
  team: [
    {
      name: "Ansh Gupta",
      role: "Founder & Principal Advisor",
      avatar: anshGuptaImg,
    },
    {
      name: "Kavita Rao",
      role: "Insurance Specialist",
      avatar: kavitaRaoImg,
    },
    {
      name: "Manish Aggarwal",
      role: "Mutual Fund Advisor",
      avatar: manishAggarwalImg,
    },
  ],
};

// ---------------- Why Choose Us Page ----------------
export const whyChooseUs = {
  eyebrow: "WHY CHOOSE US",
  title: "Reasons Families Trust ANSH Capital",
  subtitle:
    "We are more than advisors — we are partners committed to your financial well-being.",
  reasons: [
    {
      icon: "Award",
      title: "19+ Years of Experience",
      description:
        "A proven track record of guiding families and businesses through every market cycle.",
    },
    {
      icon: "Handshake",
      title: "Unbiased Advice",
      description:
        "Recommendations based on your goals, never on commissions or targets.",
    },
    {
      icon: "LineChart",
      title: "Goal-based Planning",
      description:
        "Every plan is built around your specific life goals and risk profile.",
    },
    {
      icon: "RefreshCw",
      title: "Regular Reviews",
      description:
        "We monitor and rebalance your portfolio as markets and life change.",
    },
    {
      icon: "Lock",
      title: "Complete Transparency",
      description:
        "No hidden charges. You always know exactly what you're paying for.",
    },
    {
      icon: "Phone",
      title: "Always Reachable",
      description:
        "A dedicated advisor you can actually call, meet and rely on.",
    },
  ],
};

// ---------------- Products Page ----------------
export const productsIntro = {
  eyebrow: "OUR PRODUCTS",
  title: "Investment Products for Every Risk Profile",
  subtitle:
    "Explore our curated range of mutual fund categories designed to match your goals and comfort with risk.",
};

export const products = [
  {
    id: "equity",
    title: "Equity Funds",
    risk: "High",
    returns: "12-15% p.a.*",
    description:
      "Ideal for long-term wealth creation. These funds invest primarily in stocks for high growth potential.",
    image:
      "https://images.pexels.com/photos/16876265/pexels-photo-16876265.jpeg",
    features: ["Long-term growth", "Tax-efficient (ELSS)", "SIP available"],
    detail: {
      heroImage:
        "https://images.pexels.com/photos/16876265/pexels-photo-16876265.jpeg",
      tagline: "High-growth wealth creation for long-term financial freedom",
      overview:
        "Equity mutual funds pool capital from investors to invest primarily in equity shares of publicly listed companies across market capitalizations. By holding a diversified basket of 30–60 high-conviction stocks, equity funds offer substantial long-term wealth compounding, beat inflation, and allow retail investors to participate directly in India's corporate growth story without needing to research individual stocks.",
      idealHorizon: "5+ Years (Recommended 7-10 Years)",
      riskProfile: "High Risk — High Potential Return",
      indicativeReturn: "12% - 15% p.a.*",
      scope: [
        "Large Cap Funds — Top 100 established blue-chip companies with stable balance sheets and proven track records.",
        "Mid Cap Funds — High-growth companies ranked 101 to 250 with strong earnings momentum and aggressive expansion.",
        "Small Cap Funds — Emerging market innovators (251st onwards) with high growth potential over long investment cycles.",
        "Flexi Cap & Multi Cap — Dynamic allocation across large, mid, and small cap stocks to capture opportunities across cycles.",
        "ELSS (Tax Saver) — Dual benefit of equity compounding and Section 80C tax deduction up to ₹1.5 Lakhs with 3-yr lock-in.",
        "Sectoral & Thematic — Targeted exposure to sunrise sectors like Banking, IT, Pharma, Infrastructure, and Defence.",
      ],
      benefits: [
        {
          title: "Superior Inflation-Beating Returns",
          desc: "Historically outperforms fixed deposits, gold, and real estate over 7+ year time horizons through corporate earnings compounding.",
        },
        {
          title: "Power of Rupee-Cost Averaging",
          desc: "Investing through monthly SIPs automatically buys more units during market dips and fewer at peaks, reducing volatility risk.",
        },
        {
          title: "Institutional Research Management",
          desc: "Managed full-time by SEBI-registered fund managers backed by dedicated equity research analysts and rigorous governance.",
        },
        {
          title: "High Liquidity & Transparency",
          desc: "Open-ended funds allow redemption anytime with money credited to your bank account within T+2 working days.",
        },
      ],
      whoShouldInvest: [
        "Salaried professionals and business owners looking to build multi-crore retirement or wealth corpuses over 7–15+ years.",
        "Parents planning for their children's higher education or marriage 5 to 15 years in advance.",
        "Taxpayers looking to save income tax under Section 80C through ELSS with the shortest lock-in among tax-saving instruments.",
        "Investors who understand market fluctuations and have the patience to stay invested during temporary corrections.",
      ],
      taxation: {
        ltcg: "Long-Term Capital Gains (holding > 12 months) are taxed at 12.5% on gains exceeding ₹1.25 Lakhs per financial year.",
        stcg: "Short-Term Capital Gains (holding < 12 months) are taxed at a flat rate of 20%.",
        dividend: "Dividends (IDCW) are added to your taxable income and taxed at your applicable income tax slab rates.",
      },
      process: [
        {
          step: "01",
          title: "Risk Tolerance & Goal Mapping",
          desc: "We analyze your monthly savings, financial horizon, and emotional comfort with volatility to map your optimal equity allocation.",
        },
        {
          step: "02",
          title: "Data-Driven Fund Selection",
          desc: "We screen 400+ equity schemes using rolling returns, downside capture ratio, Sharpe ratio, and fund manager track records.",
        },
        {
          step: "03",
          title: "Automated Paperless Execution",
          desc: "Instant digital KYC and setup of auto-debit SIP mandates or staggered STP deployment for lump-sum investments.",
        },
        {
          step: "04",
          title: "Periodic Rebalancing & Reviews",
          desc: "We review your portfolio every 6 months, trim underperformers, rebalance asset weights, and optimize tax-harvesting.",
        },
      ],
      faqs: [
        {
          q: "What is the minimum amount required to start investing in Equity Funds?",
          a: "You can start a Systematic Investment Plan (SIP) with as little as ₹500 to ₹1,000 per month. For lump-sum investments, the minimum amount is usually ₹5,000.",
        },
        {
          q: "Can I lose all my money in Equity Mutual Funds?",
          a: "Because mutual funds hold 30 to 60 diverse companies across multiple industries, the probability of complete capital wipeout is virtually non-existent. While short-term NAV fluctuations do happen, historical 7-year rolling returns in Indian equity funds have consistently delivered positive compounding.",
        },
        {
          q: "How is ELSS different from other 80C options like PPF or FD?",
          a: "ELSS has the shortest lock-in period (3 years vs 5 years for Tax-Saving FD and 15 years for PPF) while providing market-linked equity returns that historically beat fixed-rate instruments by a wide margin.",
        },
        {
          q: "Can I pause or stop my SIP anytime?",
          a: "Yes, you have complete flexibility. You can pause, increase (step-up), or stop your SIP anytime without any penalty or charge.",
        },
      ],
    },
  },
  {
    id: "debt",
    title: "Debt Funds",
    risk: "Low",
    returns: "6-8% p.a.*",
    description:
      "Stable, lower-risk investments in bonds and fixed-income securities for steady returns.",
    image:
      "https://images.pexels.com/photos/34742289/pexels-photo-34742289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    features: ["Capital preservation", "Steady income", "High liquidity"],
    detail: {
      heroImage:
        "https://images.pexels.com/photos/34742289/pexels-photo-34742289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      tagline: "Capital preservation, predictable income, and institutional liquidity",
      overview:
        "Debt mutual funds invest in fixed-income securities including Government Bonds (G-Secs), Treasury Bills, AAA-rated Corporate Debentures, Certificates of Deposit (CDs), and Commercial Papers. They generate steady returns primarily through periodic interest coupon payments and capital appreciation, providing a much higher degree of capital safety and liquidity than equity markets.",
      idealHorizon: "1 Day to 3 Years (Flexible)",
      riskProfile: "Low to Moderate Risk",
      indicativeReturn: "6% - 8% p.a.*",
      scope: [
        "Liquid & Overnight Funds — Parking emergency funds and surplus business cash for 1 day to 3 months with instant redemption up to ₹50,000.",
        "Ultra Short & Low Duration Funds — Suitable for 3 to 12 months with low interest rate sensitivity and higher yields than bank savings.",
        "Corporate Bond Funds — High quality portfolio with minimum 80% in AA+ and AAA rated corporate papers for consistent yield.",
        "Banking & PSU Debt Funds — Invests in debt instruments of banks, PSUs, and public financial institutions with minimal credit default risk.",
        "Gilt & Target Maturity Funds — 100% sovereign government securities with zero credit risk, offering defined maturity predictability.",
        "Money Market Funds — Invests in money market instruments having maturity up to 1 year for safe and liquid short-term returns.",
      ],
      benefits: [
        {
          title: "Better Yield Than Traditional Savings",
          desc: "Earn returns typically 2% to 3% higher than conventional bank savings accounts without taking equity market risks.",
        },
        {
          title: "High Liquidity Without Lock-in",
          desc: "Unlike bank fixed deposits that impose penalty deductions on early withdrawal, open-ended debt funds let you withdraw anytime.",
        },
        {
          title: "Diversified Credit Protection",
          desc: "Your money is lent to dozens of top-rated government and corporate borrowers, eliminating reliance on any single institution.",
        },
        {
          title: "No Mandatory TDS on Redemption",
          desc: "Unlike bank FDs where TDS is deducted every single financial year regardless of withdrawal, debt funds only incur taxes when you redeem.",
        },
      ],
      whoShouldInvest: [
        "Individuals building a dedicated 6-to-12 month emergency fund for financial security.",
        "Business owners and self-employed professionals with surplus working capital seeking higher liquid yields.",
        "Conservative investors who cannot tolerate stock market volatility and prioritize capital preservation above all else.",
        "Investors with short-term financial goals coming up in 6 months to 3 years (e.g. car purchase, holiday, home renovation).",
      ],
      taxation: {
        ltcg: "Capital gains on debt mutual funds are treated as short-term and added to your taxable income, taxed at your applicable income tax slab rates.",
        stcg: "Taxed at your applicable income tax slab rates upon redemption.",
        dividend: "Dividends (IDCW) are subject to TDS of 10% if exceeding ₹5,000, and taxed at your personal income tax slab rate.",
      },
      process: [
        {
          step: "01",
          title: "Cash Flow & Horizon Analysis",
          desc: "We assess your liquidity requirements to match your funds with the exact right duration bucket.",
        },
        {
          step: "02",
          title: "Credit Quality Screening",
          desc: "We rigorously filter schemes with 95%+ AAA and Sovereign exposure to guard against corporate default risks.",
        },
        {
          step: "03",
          title: "Deployment & STP Setup",
          desc: "We configure instant liquid parking or Systematic Transfer Plans (STP) to stagger investments into equity over time.",
        },
        {
          step: "04",
          title: "Yield & Rate Cycle Monitoring",
          desc: "Our team monitors RBI policy rate changes and yield curves to protect against interest rate fluctuations.",
        },
      ],
      faqs: [
        {
          q: "Are Debt Mutual Funds safe like Bank Fixed Deposits?",
          a: "Debt funds do not carry the ₹5 Lakh DICGC insurance of bank deposits, but funds holding Sovereign government paper and AAA corporate bonds carry near-zero default risk while offering superior liquidity.",
        },
        {
          q: "What is an STP (Systematic Transfer Plan)?",
          a: "An STP allows you to invest a lump sum in a safe debt/liquid fund and automatically transfer a fixed amount into an equity fund every week or month. This earns steady returns on the idle balance while averaging equity costs.",
        },
        {
          q: "Can I withdraw my money from debt funds anytime?",
          a: "Yes! Liquid funds allow instant redemption up to ₹50,000 or 90% of your balance within minutes 24/7. Other debt funds credit your bank within 1 to 2 business days.",
        },
        {
          q: "Do debt funds have exit loads?",
          a: "Liquid funds have a graded exit load that drops to 0% after 7 days. Many other short-duration funds have zero exit load from day one.",
        },
      ],
    },
  },
  {
    id: "hybrid",
    title: "Hybrid Funds",
    risk: "Medium",
    returns: "9-11% p.a.*",
    description:
      "A balanced mix of equity and debt to give you growth with reduced volatility.",
    image:
      "https://images.pexels.com/photos/16204377/pexels-photo-16204377.jpeg",
    features: ["Balanced approach", "Auto rebalancing", "Moderate risk"],
    detail: {
      heroImage:
        "https://images.pexels.com/photos/16204377/pexels-photo-16204377.jpeg",
      tagline: "The best of both worlds — equity growth engine with debt safety cushion",
      overview:
        "Hybrid mutual funds strategically combine equity (stocks) and debt (bonds and fixed income) within a single portfolio. When equity markets rally, the stock component captures capital growth; when equity markets experience sharp dips, the debt component acts as a resilient shock absorber. With dynamic automatic rebalancing, hybrid funds deliver smoother wealth creation without emotional panic.",
      idealHorizon: "3 to 5 Years",
      riskProfile: "Moderate Risk",
      indicativeReturn: "9% - 11% p.a.*",
      scope: [
        "Balanced Advantage / Dynamic Asset Allocation (BAF) — Uses quantitative valuation models to dynamically shift between 30% and 80% equity, buying low and selling high automatically.",
        "Aggressive Hybrid Funds — Maintains 65% to 80% in equities and 20% to 35% in debt. Qualifies for equity taxation while cutting downside volatility.",
        "Multi-Asset Allocation Funds — Invests in at least 3 distinct asset classes: Equity, Debt, and Gold/Silver for true all-weather portfolio diversification.",
        "Conservative Hybrid Funds — Invests 75% to 90% in debt instruments and 10% to 25% in equities for conservative investors wanting mild inflation protection.",
        "Arbitrage Funds — Exploits simultaneous price differences between cash and futures markets; carries virtually zero credit/market risk while taxed as equity.",
        "Equity Savings Funds — Combines equity, arbitrage, and fixed income to maintain a conservative risk profile with equity taxation benefits.",
      ],
      benefits: [
        {
          title: "Automatic Emotion-Free Rebalancing",
          desc: "Fund managers automatically book profits when markets are overheated and buy attractive stocks during dips without triggering tax events for you.",
        },
        {
          title: "Significantly Lower Drawdowns",
          desc: "During major market corrections, hybrid funds typically drop 40% to 60% less than pure equity funds, keeping your capital safe.",
        },
        {
          title: "Favorable Equity Taxation",
          desc: "Aggressive Hybrid and Balanced Advantage schemes maintaining 65%+ gross equity exposure enjoy low equity LTCG rates of 12.5%.",
        },
        {
          title: "Complete All-in-One Solution",
          desc: "Provides ready-made asset allocation in one simple investment without having to juggle multiple separate schemes.",
        },
      ],
      whoShouldInvest: [
        "First-time mutual fund investors transitioning away from fixed deposits who want equity returns without large volatility swings.",
        "Retirees looking for steady monthly cash flows via SWP (Systematic Withdrawal Plan) while preserving their capital base.",
        "Investors with intermediate goals (3 to 5 years) such as down payments, car purchases, or children's school admissions.",
        "Conservative investors who get nervous seeing short-term stock market corrections.",
      ],
      taxation: {
        ltcg: "Schemes maintaining 65%+ gross equity exposure are taxed as equity funds: 12.5% on long-term gains exceeding ₹1.25 Lakh per financial year.",
        stcg: "Short-term gains (holding under 12 months) are taxed at 20%. Multi-asset funds holding under 65% equity follow respective asset category tax guidelines.",
        dividend: "Dividends (IDCW) are taxed according to your personal income tax slab rates.",
      },
      process: [
        {
          step: "01",
          title: "Risk-Return Calibration",
          desc: "We determine whether your portfolio best aligns with Aggressive Hybrid, Balanced Advantage, or Multi-Asset models.",
        },
        {
          step: "02",
          title: "Valuation Model Due Diligence",
          desc: "We analyze fund house asset allocation algorithms (P/E, P/B, momentum metrics) to select funds with proven downside protection.",
        },
        {
          step: "03",
          title: "Tax-Optimized Setup",
          desc: "We structure your investments to maximize post-tax returns and set up automated monthly SIP or SWP income channels.",
        },
        {
          step: "04",
          title: "Quarterly Performance Tracking",
          desc: "Continuous monitoring of fund asset shifts, equity hedged positions, and debt credit quality.",
        },
      ],
      faqs: [
        {
          q: "What is a Balanced Advantage Fund (BAF)?",
          a: "A Balanced Advantage Fund dynamically changes its equity exposure based on market valuations. When markets are expensive, it lowers equity to protect capital; when markets crash, it aggressively buys stocks to capture upside.",
        },
        {
          q: "Can I use Hybrid Funds for regular monthly pension / income?",
          a: "Yes! Hybrid funds are the most popular vehicle for Systematic Withdrawal Plans (SWP). You invest a lump sum, and a fixed amount is credited to your bank account monthly, with much higher tax efficiency than bank FD interest.",
        },
        {
          q: "How are Hybrid Funds taxed compared to Debt Funds?",
          a: "Hybrid funds that maintain at least 65% in equities (including hedged arbitrage) are taxed at favorable equity rates (12.5% LTCG above ₹1.25L), which is often much lower than regular income tax slabs.",
        },
        {
          q: "Are returns guaranteed in Hybrid Funds?",
          a: "No, returns in hybrid funds are market-linked and not guaranteed. However, their debt and hedging components provide a strong cushion against severe market drops.",
        },
      ],
    },
  },
  {
    id: "index",
    title: "Index Funds",
    risk: "Medium",
    returns: "10-12% p.a.*",
    description:
      "Low-cost passive funds that track a market index like the Nifty 50 or Sensex.",
    image:
      "https://images.unsplash.com/photo-1433002208920-1362f13a93a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxhZXJpYWwlMjB2aWV3JTIwaG9yaXpvbnxlbnwwfHx8fDE3ODY3MTQ4MDN8MA&ixlib=rb-4.1.0&q=85",
    features: ["Ultra low cost", "Market returns", "Fully transparent"],
    detail: {
      heroImage:
        "https://images.unsplash.com/photo-1433002208920-1362f13a93a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxhZXJpYWwlMjB2aWV3JTIwaG9yaXpvbnxlbnwwfHx8fDE3ODY3MTQ4MDN8MA&ixlib=rb-4.1.0&q=85",
      tagline: "Low-cost, zero-bias, transparent passive compounding tracking India's top indices",
      overview:
        "Index mutual funds and ETFs are passive investments that replicate the exact portfolio and company weights of a benchmark index like the Nifty 50, BSE Sensex, or Nifty Next 50. Instead of paying expensive management teams to guess which individual stocks will win, index funds capture the broad economic growth of India's leading corporations at razor-thin expense ratios.",
      idealHorizon: "5+ Years",
      riskProfile: "Moderate to High Risk (Matches Benchmark)",
      indicativeReturn: "10% - 12% p.a.*",
      scope: [
        "Nifty 50 Index Funds — Invests in India's top 50 blue-chip market leaders representing over 60% of total free-float market cap.",
        "BSE Sensex 30 Index Funds — Tracks the 30 largest, most liquid companies listed on the Bombay Stock Exchange.",
        "Nifty Next 50 (Junior Nifty) — Captures emerging blue-chip companies ranked 51 to 100 with higher earnings growth potential.",
        "Nifty Midcap 150 & Smallcap 250 Indices — Passive exposure to India's dynamic mid and small cap segments with rules-based rebalancing.",
        "Broad Market Nifty 500 — Comprehensive exposure to 500 companies across all major industries of the Indian economy.",
        "Smart Beta & Factor Indices — Enhanced index funds based on proven investment factors like Quality, Low Volatility, Momentum, and Value.",
      ],
      benefits: [
        {
          title: "Ultra-Low Expense Ratios",
          desc: "Expense ratios can be as low as 0.10% to 0.30%, saving 1% to 1.5% in fees every year compared to active funds — compounding into huge savings over 15 years.",
        },
        {
          title: "Zero Fund Manager Bias or Risk",
          desc: "Removes the human error of a fund manager holding underperforming stocks or missing top-performing market sectors.",
        },
        {
          title: "Complete Portfolio Transparency",
          desc: "You know every single stock held in your fund daily; weights match the official published index without surprises.",
        },
        {
          title: "Consistent Long-Term Compounding",
          desc: "Captures the full upside of India's growing GDP. Historically, the vast majority of active large-cap funds fail to beat index benchmarks.",
        },
      ],
      whoShouldInvest: [
        "Investors who believe in the long-term compounding of India's economy and want a stress-free investment.",
        "Cost-conscious investors who dislike paying high management fees for active funds that underperform their benchmarks.",
        "Beginners looking for their very first SIP fund with maximum diversification across India's top corporate giants.",
        "Experienced investors building a robust 'Core and Satellite' portfolio foundation.",
      ],
      taxation: {
        ltcg: "Equity taxation applies: Long-Term Capital Gains (holding > 12 months) taxed at 12.5% on gains over ₹1.25 Lakh per financial year.",
        stcg: "Short-Term Capital Gains (holding < 12 months) are taxed at a flat rate of 20%.",
        dividend: "Dividends (IDCW) are added to your taxable income and taxed at your applicable income tax slab rates.",
      },
      process: [
        {
          step: "01",
          title: "Index Selection & Horizon Mapping",
          desc: "We help you choose between Nifty 50, Sensex, Nifty Next 50, or broader market indices based on your risk tolerance.",
        },
        {
          step: "02",
          title: "Tracking Error & AUM Screening",
          desc: "We screen and select index funds with the lowest tracking error and highest trading volumes for seamless liquidity.",
        },
        {
          step: "03",
          title: "Automated Monthly SIP Execution",
          desc: "Setup hassle-free automated monthly investments linked directly to your primary bank account.",
        },
        {
          step: "04",
          title: "Continuous Tracking & Annual Review",
          desc: "We monitor fund tracking difference and expense ratios to guarantee you receive pure benchmark returns.",
        },
      ],
      faqs: [
        {
          q: "What is the difference between an Index Fund and an ETF?",
          a: "Index funds can be bought and sold directly through mutual fund platforms or SIPs without needing a demat account. ETFs (Exchange Traded Funds) trade in real-time on stock exchanges and require a demat and trading account.",
        },
        {
          q: "What is tracking error in Index Funds?",
          a: "Tracking error measures the difference in returns between the index fund and its benchmark index. Lower tracking error means the fund is replicating the index more accurately. We only recommend funds with minimal tracking error.",
        },
        {
          q: "Why choose an Index Fund over an actively managed fund?",
          a: "Index funds have significantly lower fees (often 1% lower per year) and zero fund manager risk. Over 10-15 year horizons, the compounding benefit of lower expenses often leads to superior net returns.",
        },
        {
          q: "Can I start an Index Fund SIP with ₹500?",
          a: "Yes! Almost all top Index Funds in India allow monthly SIPs starting from just ₹500.",
        },
      ],
    },
  },
];

// ---------------- FAQ Page ----------------
export const faqIntro = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  subtitle:
    "Everything you need to know about working with ANSH Capital Services.",
};

export const faqs = [
  {
    q: "How do I get started with ANSH Capital?",
    a: "Simply click 'Talk to an Expert' or call us. We'll schedule a free, no-obligation consultation to understand your goals before recommending anything.",
  },
  {
    q: "Do you charge for financial advice?",
    a: "Your initial consultation is completely free. For ongoing advisory, our charges are fully transparent and shared with you upfront — no hidden fees.",
  },
  {
    q: "What is the minimum amount required to start investing?",
    a: "You can start a SIP (Systematic Investment Plan) with as little as ₹500 per month. We help you start small and grow steadily.",
  },
  {
    q: "Are mutual fund investments safe?",
    a: "Mutual funds are subject to market risks. We help you choose funds matched to your risk profile and review them regularly to keep you on track.",
  },
  {
    q: "Can you help me with both insurance and investments?",
    a: "Absolutely. We offer end-to-end solutions — mutual funds, insurance, loans and retirement planning — all under one trusted roof.",
  },
  {
    q: "How often will my portfolio be reviewed?",
    a: "We review your portfolio at least quarterly, and any time there's a major market movement or a change in your personal goals.",
  },
  {
    q: "Do you provide services outside Faridabad?",
    a: "Yes. While we're based in Faridabad, we serve clients across Delhi NCR and can assist you remotely through calls and video meetings.",
  },
];

// ---------------- Contact Page ----------------
export const contactIntro = {
  eyebrow: "CONTACT US",
  title: "Let's Plan Your Financial Future Together",
  subtitle:
    "Have a question or ready to get started? Reach out and one of our advisors will get back to you shortly.",
};
