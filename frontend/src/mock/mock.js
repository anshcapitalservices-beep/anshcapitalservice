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
  },
  {
    id: "insurance",
    icon: "ShieldCheck",
    title: "Insurance Solutions",
    description:
      "Protect your family and your assets with comprehensive coverage.",
    points: ["Health Insurance", "Life Insurance", "General Insurance"],
  },
  {
    id: "wealth",
    icon: "UserRound",
    title: "Wealth Management",
    description:
      "Financial planning, investment advisory and goal-based strategies.",
    points: ["Financial Planning", "Advisory", "Goal Strategies"],
  },
  {
    id: "retirement",
    icon: "ShoppingCart",
    title: "Retirement Planning",
    description:
      "Plan today for a peaceful and financially secure retirement tomorrow.",
    points: ["Pension Plans", "Annuities", "Corpus Building"],
  },
  {
    id: "loans",
    icon: "Wallet",
    title: "Loan Solutions",
    description: "Smart loan solutions tailored to your financial needs.",
    points: ["Home Loan", "Personal Loan", "Business Loan"],
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
