// ============================================================
// MOCK DATA for ANSH Capital Services (frontend-only clone)
// All content here is mocked and can later be replaced by a real backend.
// ============================================================

export const company = {
  name: "ANSH",
  fullName: "ANSH Capital Services",
  tagline: "CAPITAL SERVICES",
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
  message: "Market opportunities don't wait.",
  highlight: "Plan today.",
  suffix: "Secure tomorrow.",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      { label: "Mutual Funds", to: "/services#mutual-funds" },
      { label: "Insurance Solutions", to: "/services#insurance" },
      { label: "Wealth Management", to: "/services#wealth" },
      { label: "Retirement Planning", to: "/services#retirement" },
      { label: "Loan Solutions", to: "/services#loans" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Equity Funds", to: "/products#equity" },
      { label: "Debt Funds", to: "/products#debt" },
      { label: "Hybrid Funds", to: "/products#hybrid" },
      { label: "Index Funds", to: "/products#index" },
    ],
  },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Testimonials", to: "/testimonials" },
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
    { value: "16+", label: "Years of Experience", icon: "Users" },
    { value: "1000+", label: "Happy Clients", icon: "ShieldCheck" },
    { value: "15K+", label: "Plans Managed", icon: "Users2" },
    { value: "AI Trusted", label: "Advice & Support", icon: "BadgeCheck" },
  ],
};

export const promoBanner = {
  left: "The right financial decision today can change your tomorrow.",
  middle: "Market moves daily. Opportunities don't wait.",
  cta: "Plan Your Future Now",
};

export const servicesIntro = {
  eyebrow: "OUR SERVICES",
  title: "Comprehensive Financial Solutions Designed Around Your Goals",
  subtitle:
    "From investments and protection to credit and growth, we provide solutions designed around you.",
};

export const services = [
  {
    id: "mutual-funds",
    icon: "PieChart",
    title: "Mutual Funds",
    description:
      "Grow your wealth with smart investing plans tailored to your goals.",
    points: ["SIP Planning", "Goal-based Investing", "Portfolio Review"],
    detail: {
      heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80",
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
    description:
      "Protect your family and your assets with comprehensive coverage.",
    points: ["Health Insurance", "Life Insurance", "General Insurance"],
    detail: {
      heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80",
      overview: "Insurance is the cornerstone of any sound financial plan. At ANSH Capital Services, we help you secure your family's future with the right mix of life, health, and general insurance policies. We work with all major insurers to find you the best coverage at the most competitive premiums.",
      scope: [
        "Term Life Insurance — pure protection plans with high coverage at low premiums",
        "Health Insurance — cashless hospitalization and medical expense coverage for individuals and families",
        "Critical Illness Cover — lump-sum payout on diagnosis of specified critical illnesses",
        "Motor Insurance — comprehensive and third-party coverage for cars and two-wheelers",
        "Home & Property Insurance — protection against natural disasters, theft, and damage",
        "Travel Insurance — coverage for medical emergencies, trip cancellations, and baggage loss",
      ],
      process: [
        { step: "01", title: "Needs Analysis", desc: "We assess your family's financial obligations, existing coverage gaps, and protection requirements." },
        { step: "02", title: "Plan Comparison", desc: "We compare plans from 30+ insurers to find the right balance of coverage, premiums, and claim settlement ratio." },
        { step: "03", title: "Application & Documentation", desc: "We handle the entire paperwork, medical tests coordination, and application submission on your behalf." },
        { step: "04", title: "Policy Issuance", desc: "Once approved, we ensure timely policy issuance and explain all terms, exclusions, and benefits." },
        { step: "05", title: "Claims Assistance", desc: "In case of a claim, we guide you through the entire process for quick and hassle-free settlement." },
      ],
      benefits: [
        "Financial security for your family against unforeseen events",
        "Tax benefits under Section 80C and 80D",
        "Cashless hospitalization at 10,000+ network hospitals",
        "Affordable premiums with maximum coverage",
        "Dedicated claims support and assistance",
        "Riders for accidental death, disability, and waiver of premium",
      ],
      faqs: [
        { q: "How much life insurance coverage do I need?", a: "A general rule is 10-15 times your annual income. However, we consider your liabilities, dependents, and financial goals to recommend an optimal sum assured." },
        { q: "Should I buy online or through an advisor?", a: "While online plans may seem cheaper, an advisor helps you choose the right plan, assists with documentation, and provides crucial support during claims — which is when insurance truly matters." },
        { q: "What is the claim settlement ratio?", a: "It's the percentage of claims an insurer settles out of total claims received. We recommend companies with a settlement ratio above 95% for maximum reliability." },
        { q: "Can I have multiple health insurance policies?", a: "Yes, you can hold multiple health insurance policies. In case of a claim, you can use the primary policy first and the remaining amount from the second policy." },
      ],
    },
  },
  {
    id: "wealth",
    icon: "UserRound",
    title: "Wealth Management",
    description:
      "Financial planning, investment advisory and goal-based strategies.",
    points: ["Financial Planning", "Advisory", "Goal Strategies"],
    detail: {
      heroImage: "https://images.unsplash.com/photo-1553729459-uj4njqzqtq0?auto=format&fit=crop&w=2000&q=80",
      overview: "Wealth Management is a holistic advisory service that combines financial planning, investment management, and tax optimization to help high-net-worth individuals and families grow, protect, and transfer their wealth. At ANSH Capital Services, we provide personalized strategies that align with your lifestyle, goals, and legacy plans.",
      scope: [
        "Comprehensive Financial Planning — budgeting, cash flow analysis, and goal mapping",
        "Investment Portfolio Construction — diversified allocation across equities, debt, real estate, and alternatives",
        "Tax Planning & Optimization — strategies to minimize tax liability legally",
        "Estate Planning — will drafting, trust creation, and succession planning",
        "Risk Management — insurance adequacy review and hedging strategies",
        "NRI Wealth Services — investment advisory for Non-Resident Indians",
      ],
      process: [
        { step: "01", title: "Discovery Meeting", desc: "We understand your complete financial picture — income, expenses, assets, liabilities, and aspirations." },
        { step: "02", title: "Goal Prioritization", desc: "We help you define and prioritize short-term, mid-term, and long-term financial goals." },
        { step: "03", title: "Strategy Design", desc: "Our team crafts a personalized wealth strategy with the right asset allocation and investment vehicles." },
        { step: "04", title: "Implementation", desc: "We execute the plan across multiple instruments — mutual funds, stocks, bonds, insurance, and more." },
        { step: "05", title: "Ongoing Review", desc: "Quarterly reviews ensure your portfolio stays aligned with your evolving goals and market conditions." },
      ],
      benefits: [
        "360-degree view of your financial health",
        "Personalized asset allocation strategy",
        "Tax-efficient investment structures",
        "Access to exclusive investment opportunities",
        "Regular portfolio rebalancing and optimization",
        "Legacy and succession planning for wealth transfer",
      ],
      faqs: [
        { q: "Who needs wealth management?", a: "Anyone with significant savings, multiple income sources, or complex financial needs can benefit. It's especially valuable for business owners, professionals, and families planning for the future." },
        { q: "How is wealth management different from just investing?", a: "Investing focuses on growing money. Wealth management is comprehensive — it includes tax planning, insurance, estate planning, and retirement alongside investments." },
        { q: "What is the minimum investment required?", a: "We work with clients across various investment sizes. Our planning services are designed to add value whether you're starting your wealth journey or managing a substantial portfolio." },
        { q: "How often will my portfolio be reviewed?", a: "We conduct formal quarterly reviews, but our team monitors your portfolio continuously and reaches out proactively if market conditions warrant changes." },
      ],
    },
  },
  {
    id: "retirement",
    icon: "ShoppingCart",
    title: "Retirement Planning",
    description:
      "Plan today for a peaceful and financially secure retirement tomorrow.",
    points: ["Pension Plans", "Annuities", "Corpus Building"],
    detail: {
      heroImage: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2000&q=80",
      overview: "Retirement Planning ensures you maintain your desired lifestyle after you stop earning. At ANSH Capital Services, we help you build a robust retirement corpus through the right combination of pension plans, systematic investments, and annuities — so you can enjoy your golden years without financial worries.",
      scope: [
        "National Pension System (NPS) — government-backed retirement scheme with tax benefits",
        "Employee Provident Fund (EPF) — optimization and voluntary PF contributions",
        "Pension & Annuity Plans — guaranteed regular income post-retirement",
        "Systematic Withdrawal Plans (SWP) — creating monthly income from mutual fund investments",
        "Senior Citizen Savings Scheme (SCSS) — high-interest government savings for retirees",
        "Retirement Mutual Funds — dedicated solution funds for retirement corpus building",
      ],
      process: [
        { step: "01", title: "Retirement Goal Setting", desc: "We help you determine your desired retirement age, monthly income needs, and lifestyle expectations." },
        { step: "02", title: "Gap Analysis", desc: "We calculate the gap between your current savings and the corpus needed for a comfortable retirement." },
        { step: "03", title: "Investment Plan Design", desc: "We design a customized investment plan using the right mix of NPS, mutual funds, and pension products." },
        { step: "04", title: "Systematic Execution", desc: "We set up SIPs, NPS contributions, and other retirement savings vehicles with automated contributions." },
        { step: "05", title: "Pre-Retirement Review", desc: "As retirement approaches, we shift to capital preservation strategies and plan your post-retirement income streams." },
      ],
      benefits: [
        "Financial independence in your golden years",
        "Additional tax savings under Section 80CCD (NPS)",
        "Inflation-adjusted corpus planning",
        "Guaranteed income streams through annuities",
        "Flexible withdrawal options post-retirement",
        "Peace of mind for you and your family",
      ],
      faqs: [
        { q: "When should I start retirement planning?", a: "The earlier, the better. Starting in your 20s or 30s gives you the maximum benefit of compounding. However, it's never too late — even starting at 40 or 45 can make a significant difference." },
        { q: "How much do I need for retirement?", a: "It depends on your lifestyle, expenses, and inflation. A general rule: you'll need approximately 70-80% of your pre-retirement income annually. We calculate the exact corpus needed based on your specific situation." },
        { q: "Is NPS a good option?", a: "Yes, NPS offers excellent returns with low fund management charges and additional tax benefits of ₹50,000 under Section 80CCD(1B) over and above the ₹1.5 lakh limit of 80C." },
        { q: "Can I retire early?", a: "Absolutely! With disciplined saving and smart investing, early retirement (FIRE) is achievable. We can design a specific plan to help you reach financial independence earlier." },
      ],
    },
  },
  {
    id: "loans",
    icon: "Wallet",
    title: "Loan Solutions",
    description: "Smart loan solutions tailored to your financial needs.",
    points: ["Home Loan", "Personal Loan", "Business Loan"],
    detail: {
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80",
      overview: "Whether you're buying your dream home, funding your business expansion, or meeting personal financial needs, ANSH Capital Services connects you with the best loan products from leading banks and NBFCs. We negotiate the best interest rates and ensure a smooth, hassle-free disbursement process.",
      scope: [
        "Home Loan — purchase, construction, or renovation of residential property",
        "Business Loan — working capital, expansion, and equipment financing",
        "Personal Loan — for weddings, travel, medical emergencies, or any personal need",
        "Loan Against Property (LAP) — unlock the value of your property for large funding needs",
        "Education Loan — funding for higher education in India and abroad",
        "Loan Against Securities — leverage your mutual funds, shares, and insurance for quick liquidity",
      ],
      process: [
        { step: "01", title: "Requirement Understanding", desc: "We understand your loan purpose, amount needed, repayment capacity, and timeline preferences." },
        { step: "02", title: "Lender Comparison", desc: "We compare interest rates, processing fees, and terms from 25+ banks and NBFCs to find you the best deal." },
        { step: "03", title: "Documentation Support", desc: "We assist with all paperwork — income proof, property documents, KYC, and application forms." },
        { step: "04", title: "Application & Processing", desc: "We submit your application, follow up with the lender, and coordinate property valuation if needed." },
        { step: "05", title: "Disbursement & Support", desc: "Once approved, we ensure quick disbursement and remain available for any post-disbursement queries." },
      ],
      benefits: [
        "Access to competitive interest rates from 25+ lenders",
        "Zero processing fees on select products",
        "Quick approval — as fast as 24-48 hours",
        "End-to-end documentation support",
        "Balance transfer facility for lower interest rates",
        "Flexible repayment tenures from 1 to 30 years",
      ],
      faqs: [
        { q: "What is the current home loan interest rate?", a: "Home loan rates start from 8.25% p.a. onwards depending on the lender, your credit score, and loan amount. We help you get the most competitive rate available." },
        { q: "What credit score do I need for a loan?", a: "A CIBIL score of 750+ is ideal for the best rates. However, we work with lenders who offer loans even for scores of 650+, though at slightly higher rates." },
        { q: "Can self-employed individuals get loans?", a: "Yes! We specialize in helping self-employed professionals and business owners get approved with the right documentation — ITR, bank statements, and business proof." },
        { q: "How can I reduce my loan EMI?", a: "You can reduce EMI by opting for a longer tenure, making prepayments, or transferring your loan to a lender with a lower interest rate. We can help with all these options." },
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
  titleLine1: "Investment Options for",
  titleLine2: "Every Financial Goal",
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
  { value: "16+", label: "Years of Experience", icon: "Award" },
  { value: "1000+", label: "Families Guided", icon: "Users2" },
  { value: "15K+", label: "Happy Clients", icon: "Users" },
  { value: "₹500Cr+", label: "Assets Under Advisory", icon: "Landmark" },
];

export const testimonialsIntro = {
  eyebrow: "WHAT OUR CLIENTS SAY",
  title: "Trusted by Families Like Yours",
};

export const testimonials = [
  {
    id: 1,
    quote:
      "Ansh Capital helped me structure my investments the right way. I now feel confident about my family's future.",
    name: "Amit Sharma",
    role: "Business Owner, Faridabad",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their team guided me with the right financial plan for my child's education and retirement. Highly professional and reliable.",
    name: "Neha Verma",
    role: "Working Professional, Delhi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "I love their transparent approach and regular reviews. It keeps my investments aligned with my goals and life changes.",
    name: "Rohit Kapoor",
    role: "IT Consultant, Gurugram",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Getting a home loan felt effortless with their guidance. They compared options and got me the best possible rate.",
    name: "Priya Nair",
    role: "Doctor, Faridabad",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Honest advice with zero pressure. They explained every option clearly before I invested a single rupee.",
    name: "Sandeep Yadav",
    role: "Entrepreneur, Noida",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
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
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Why Choose Us", to: "/why-choose-us" },
    { label: "Testimonials", to: "/testimonials" },
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
    { icon: "Linkedin", url: "#" },
    { icon: "Facebook", url: "#" },
    { icon: "Instagram", url: "#" },
    { icon: "Youtube", url: "#" },
  ],
};

// ---------------- About Page ----------------
export const aboutPage = {
  eyebrow: "ABOUT US",
  title: "Financial Guidance With a Human Touch",
  intro:
    "ANSH Capital Services is a Faridabad-based financial advisory firm helping families and businesses make confident money decisions. We combine 16+ years of experience with honest, jargon-free advice.",
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
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Kavita Rao",
      role: "Insurance Specialist",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Manish Aggarwal",
      role: "Mutual Fund Advisor",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Sneha Kapoor",
      role: "Client Relations Manager",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
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
      title: "16+ Years of Experience",
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
