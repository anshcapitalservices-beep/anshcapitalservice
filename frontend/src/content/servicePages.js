// Content for the dedicated, search-friendly service pages
// (/life-insurance, /health-insurance, /general-insurance, /mutual-funds, /loans).
// Keep claims factual: no "guaranteed returns" or "best plan" wording.

import bannerLifeLegacy from "../assets/banner_life_insurance_legacy.webp";
import bannerHealthInsurance from "../assets/banner_health_insurance.webp";
import bannerAssetProtection from "../assets/banner_asset_protection.webp";
import bannerMutualFunds from "../assets/banner_mutual_funds.webp";
import bannerLoans from "../assets/banner_loans.webp";

export const servicePages = [
  {
    path: "/life-insurance",
    label: "Life Insurance",
    icon: "ShieldCheck",
    eyebrow: "TERM & LIFE INSURANCE",
    h1: "Term & Life Insurance in Faridabad",
    lead:
      "Make sure your family can keep the same life, pay off the home loan and fund the children's education even if you are not there. We help you work out the right cover and compare plans from leading insurers.",
    banner: bannerLifeLegacy,
    bannerAlt: "Term and life insurance advice at Ansh Capital Services, Faridabad",
    formService: "Life / Term Insurance",
    disclaimer: "insurance",
    guide: "life",
    intro: [
      "A term insurance plan has one job: if the earning member of the family passes away, the insurer pays a lump sum that replaces their income. Because it has no savings component, term cover is the most affordable way to buy a large sum assured, often ₹1 crore or more for a modest yearly premium if you buy it young and healthy.",
      "Many families in Faridabad and Delhi NCR are covered only through an employer group policy or a small endowment plan of ₹10–25 lakh, which runs out within a few years. A common starting point is cover of 10 to 15 times your yearly income, plus your outstanding loans and the cost of big goals such as higher education, minus what you already have. We do this calculation with you for free.",
      "Alongside pure term cover, we also explain savings-oriented life plans, child education and marriage plans, and pension or annuity plans, so you can see clearly what each one costs and what it pays. Where a plan is not right for your goal, we will say so.",
    ],
    whoFor: [
      "Salaried professionals and business owners with dependants",
      "Young couples planning a family or buying a home on loan",
      "Parents who want their children's education protected",
      "Anyone whose only cover is an employer group policy",
      "People approaching retirement who want regular income from an annuity",
    ],
    covers: [
      { title: "Term insurance", desc: "High life cover at a low premium, with options for critical illness and accidental death riders." },
      { title: "Child education & marriage plans", desc: "Payouts timed to milestone ages, with premium waiver if the parent passes away." },
      { title: "Savings & income plans", desc: "Life cover combined with a savings component; we show the actual returns illustrated by the insurer." },
      { title: "Retirement & annuity plans", desc: "Pension plans that turn your savings into a regular income after you stop working." },
    ],
    faqs: [
      { q: "How much term cover do I need?", a: "A simple starting point is 10 to 15 times your annual income, plus outstanding loans and big future goals such as children's education, minus existing cover and savings. We calculate your exact number for free." },
      { q: "Is employer group cover enough?", a: "Usually not. Group cover is often only a few times your salary and it ends when you leave the job. A personal term plan stays with you regardless of where you work." },
      { q: "Why should I buy term insurance early?", a: "Premiums depend mainly on your age and health at the time of buying, and stay fixed for the whole policy term. Waiting a few years, or developing a health condition, can raise the premium noticeably." },
      { q: "What can lead to a claim being rejected?", a: "The most common reason is not disclosing health conditions, smoking or existing policies in the proposal form. We help you fill the form accurately so your family's claim is not put at risk." },
      { q: "Do I get a tax benefit on life insurance?", a: "Under the old tax regime, premiums can qualify for deduction under Section 80C up to the overall ₹1.5 lakh limit, and the death benefit is generally tax-free under Section 10(10D), subject to the conditions in the tax law." },
    ],
  },
  {
    path: "/health-insurance",
    label: "Health Insurance",
    icon: "HeartPulse",
    eyebrow: "HEALTH INSURANCE",
    h1: "Health Insurance in Faridabad",
    lead:
      "One hospital stay can wipe out years of savings. We help families and senior citizens in Faridabad choose a health plan with the right sum insured, a good hospital network and clear claim terms.",
    banner: bannerHealthInsurance,
    bannerAlt: "Family health insurance from Ansh Capital Services, Faridabad",
    formService: "Health Insurance",
    disclaimer: "insurance",
    guide: "health",
    intro: [
      "Medical costs in private hospitals across Delhi NCR keep rising every year. A health insurance policy pays for hospitalisation, surgery, day-care procedures and pre- and post-hospitalisation expenses, either directly to the hospital (cashless) or by reimbursing you after discharge.",
      "Choosing a plan is not only about the premium. The details that matter at claim time are the room rent limit, waiting periods for existing illnesses, co-payment clauses, sub-limits on specific treatments and whether the hospitals near you are in the insurer's cashless network. We read these terms with you and compare plans from leading health and general insurers side by side.",
      "For parents above 60 we look at senior citizen plans, and for families we compare individual and family floater options, top-up and super top-up covers, and critical illness plans. After you buy, we stay with you for renewals, portability and claims.",
    ],
    whoFor: [
      "Families who want one floater policy for everyone",
      "Parents and senior citizens above 60",
      "Employees whose office cover is not enough or ends with the job",
      "Self-employed people and small business owners",
      "Anyone wanting a top-up over an existing policy",
    ],
    covers: [
      { title: "Family floater & individual plans", desc: "Hospitalisation, day-care, ambulance, and pre- and post-hospitalisation costs." },
      { title: "Senior citizen health plans", desc: "Plans designed for people above 60, with clear terms on co-payment and waiting periods." },
      { title: "Top-up & super top-up", desc: "Low-cost extra cover that starts after a set amount, ideal over an employer policy." },
      { title: "Critical illness & personal accident", desc: "Lump-sum payouts on diagnosis of listed illnesses or after an accident." },
    ],
    faqs: [
      { q: "How much health cover does a family need?", a: "For a family in a metro area like Faridabad, many advisors suggest at least ₹10 lakh of cover today, and more if you prefer large private hospitals. A top-up can raise cover cheaply. We help you size it for your family." },
      { q: "What is the difference between cashless and reimbursement claims?", a: "In a cashless claim the insurer settles the bill directly with a network hospital. In a reimbursement claim you pay the hospital first and then submit the bills to the insurer. We help you with both." },
      { q: "Are existing illnesses covered?", a: "Usually yes, after a waiting period that depends on the plan, often two to three years. Declaring every existing condition honestly in the proposal is important so your claim is not rejected later." },
      { q: "Can I get health insurance for my parents above 60?", a: "Yes. Several insurers offer senior citizen plans. Premiums are higher and some include co-payment, so it is worth comparing terms carefully. We do this comparison for you." },
      { q: "What tax benefit do I get on health insurance?", a: "Under the old tax regime, Section 80D allows a deduction of up to ₹25,000 a year for self, spouse and children, and a further ₹25,000 for parents (₹50,000 if they are senior citizens), subject to the conditions in the tax law." },
    ],
  },
  {
    path: "/general-insurance",
    label: "General Insurance",
    icon: "Car",
    eyebrow: "MOTOR, HOME & BUSINESS INSURANCE",
    h1: "Car, Bike, Home & Business Insurance in Faridabad",
    lead:
      "Quick renewals, honest advice on add-ons and help when you need to claim. We look after motor, home, shop and business insurance from our New Mathura Road office.",
    banner: bannerAssetProtection,
    bannerAlt: "Car, bike and business insurance at Ansh Capital Services, Faridabad",
    formService: "General Insurance (Motor / Home / Business)",
    disclaimer: "insurance",
    guide: "motor",
    intro: [
      "Third-party motor insurance is compulsory for every vehicle on Indian roads, but a comprehensive policy is what protects your own car or two-wheeler against accidents, theft, fire and floods. At renewal, the right add-ons and the right Insured Declared Value (IDV) make a big difference to what you receive at claim time.",
      "We compare renewal quotes from leading general insurers, make sure your No Claim Bonus is carried forward correctly, and explain add-ons such as zero depreciation, engine protection, return to invoice and roadside assistance so you only pay for what you need.",
      "Beyond vehicles, we arrange home insurance for the building and contents, shop and office packages, fire and burglary cover, and group health or personal accident cover for small businesses and their employees. When something goes wrong, we guide you through the claim and follow up with the insurer.",
    ],
    whoFor: [
      "Car and two-wheeler owners renewing or buying a policy",
      "Home owners who want to protect the building and contents",
      "Shopkeepers, traders and small manufacturers in Faridabad",
      "Businesses wanting group health or accident cover for staff",
      "Anyone whose policy has lapsed and needs it restored",
    ],
    covers: [
      { title: "Car & bike insurance", desc: "Comprehensive and third-party cover, add-ons, and No Claim Bonus transfer." },
      { title: "Home insurance", desc: "Cover for the structure and contents against fire, natural disasters and burglary." },
      { title: "Shop & office packages", desc: "Stock, fittings, cash and liability under one policy." },
      { title: "Business & group cover", desc: "Fire, marine, liability, and group health or accident cover for employees." },
    ],
    faqs: [
      { q: "Is third-party insurance enough for my car?", a: "Third-party cover is the legal minimum and only pays for damage you cause to others. It does not pay for repairs to your own vehicle. A comprehensive policy covers both." },
      { q: "What is a No Claim Bonus and do I lose it if I switch insurer?", a: "A No Claim Bonus is a discount on your own-damage premium for every claim-free year, rising up to 50%. It belongs to you, not the insurer, so it transfers when you switch at renewal." },
      { q: "Is zero depreciation cover worth it?", a: "For newer cars it usually is, because without it the insurer deducts depreciation on replaced parts such as plastic and rubber. We help you decide based on your car's age and how you use it." },
      { q: "What should I do right after an accident?", a: "Inform the insurer as soon as possible, take photos, do not move the vehicle for repair before the surveyor's inspection unless told to, and file a police report if a third party is injured or the vehicle is stolen. Call us and we will guide you." },
      { q: "Can you insure my shop or small factory?", a: "Yes. We arrange shop and office packages, fire and burglary policies, and liability cover for businesses in Faridabad and nearby industrial areas." },
    ],
  },
  {
    path: "/mutual-funds",
    label: "Mutual Funds",
    icon: "PieChart",
    eyebrow: "MUTUAL FUNDS & SIP",
    h1: "Mutual Fund & SIP Advice in Faridabad",
    lead:
      "Start a SIP from as little as ₹500 a month, save tax with ELSS, and plan for goals such as your child's education and your retirement, with regular reviews from a local team.",
    banner: bannerMutualFunds,
    bannerAlt: "Mutual fund and SIP investment planning at Ansh Capital Services, Faridabad",
    formService: "Mutual Funds (SIP/Lump Sum)",
    disclaimer: "mutualFunds",
    guide: "mutualFunds",
    showArn: true,
    intro: [
      "A mutual fund pools money from many investors and invests it in shares, bonds or both, managed by a professional fund manager and regulated by SEBI. A Systematic Investment Plan (SIP) lets you invest a fixed amount every month, which builds discipline and averages out your purchase cost over market ups and downs.",
      "We start with your goals and timeline: a house in five years, a child's college in twelve, retirement in twenty-five. Then we suggest a mix of equity, debt and hybrid schemes from leading fund houses that suits your risk comfort, and help you complete KYC and set up your SIPs online.",
      "For tax saving under the old regime, Equity Linked Savings Schemes (ELSS) qualify for deduction under Section 80C and have the shortest lock-in among 80C options, three years. We review your portfolio with you regularly and suggest changes when your goals or the markets change, never to chase short-term returns.",
    ],
    whoFor: [
      "First-time investors who want to start a monthly SIP",
      "Salaried people looking to save tax under Section 80C with ELSS",
      "Parents planning for children's education or marriage",
      "Anyone building a retirement corpus",
      "Investors who want an existing portfolio reviewed",
    ],
    covers: [
      { title: "SIP planning", desc: "Goal-based monthly investments, with step-up SIPs as your income grows." },
      { title: "Tax saving with ELSS", desc: "80C-eligible equity funds with a three-year lock-in." },
      { title: "Debt & hybrid funds", desc: "Options for shorter goals and for investors who want lower volatility." },
      { title: "Portfolio review", desc: "Regular reviews, rebalancing suggestions and consolidated statements." },
    ],
    faqs: [
      { q: "What is the minimum amount to start a SIP?", a: "Many schemes allow SIPs from ₹500 a month. Lump-sum investments usually start from ₹1,000 to ₹5,000, depending on the scheme." },
      { q: "SIP or lump sum – which is better?", a: "A SIP suits regular income and reduces the risk of investing everything at a market high. A lump sum can suit money you already have, such as a bonus, especially for longer horizons or when spread over a few months. We help you decide." },
      { q: "How long should I stay invested in equity funds?", a: "Equity funds are meant for goals at least five to seven years away. Over shorter periods, their value can fall and recover unpredictably." },
      { q: "Can I withdraw my money at any time?", a: "Open-ended funds can be redeemed on any business day, though some charge an exit load if you redeem within a set period. ELSS units are locked in for three years from each investment." },
      { q: "Are mutual funds safe?", a: "Mutual funds are regulated by SEBI, but their value moves with the markets and returns are not assured. Diversification and a long-term approach reduce, but do not remove, that risk." },
    ],
  },
  {
    path: "/loans",
    label: "Loans",
    icon: "Wallet",
    eyebrow: "HOME, PERSONAL & BUSINESS LOANS",
    h1: "Home, Personal & Business Loans in Faridabad",
    lead:
      "Compare loan offers from leading banks and NBFCs, understand the real cost including fees, and get help with documents from application to disbursement.",
    banner: bannerLoans,
    bannerAlt: "Home, personal and business loan assistance at Ansh Capital Services, Faridabad",
    formService: "Loan Solutions",
    disclaimer: "loans",
    guide: "loans",
    intro: [
      "The interest rate is only part of a loan's cost. Processing fees, insurance bundled with the loan, prepayment terms and whether the rate is fixed or linked to the repo rate all change what you actually pay over the years. We compare offers from leading banks and NBFCs and show you the full picture before you sign.",
      "For home loans we help with purchase, construction, plot and balance transfer cases, including property document checks and coordination with the lender's valuation. For personal and car loans we look for quick approvals with minimal paperwork, and for business loans we help self-employed professionals, traders and manufacturers present their income and GST records clearly.",
      "Your credit score has the biggest effect on the rate you are offered. If yours needs work, we explain what to fix first. Once your loan is approved, we stay in touch for part-prepayments, top-ups and balance transfers when a better rate becomes available.",
    ],
    whoFor: [
      "First-time home buyers and those moving their home loan to a lower rate",
      "Salaried people needing a personal loan for a wedding, travel or emergency",
      "Car buyers comparing dealer finance with bank offers",
      "Business owners needing working capital or machinery finance",
      "Property owners looking for a loan against property",
    ],
    covers: [
      { title: "Home loans & balance transfer", desc: "Purchase, construction, plot and transfer of an existing loan to a lower rate." },
      { title: "Personal & car loans", desc: "Unsecured personal loans and new or used car finance with flexible tenures." },
      { title: "Business loans", desc: "Working capital, machinery and expansion loans for self-employed borrowers." },
      { title: "Loan against property", desc: "Larger amounts at lower rates, secured against residential or commercial property." },
    ],
    faqs: [
      { q: "What decides the interest rate I am offered?", a: "Mainly your credit score, income and its stability, the loan amount and tenure, and the lender's own policy. A score above 750 usually gets the most competitive offers." },
      { q: "What documents are needed for a home loan?", a: "Typically KYC, salary slips or ITRs for the last two to three years, bank statements, and the property papers. We share a checklist for your case and review documents before they go to the lender." },
      { q: "Should I transfer my home loan to another bank?", a: "If the new rate is meaningfully lower and a good part of the tenure is left, a balance transfer can save a lot of interest. We calculate the savings after fees before you decide." },
      { q: "Can self-employed people get a business loan without collateral?", a: "Yes, many lenders offer unsecured business loans to borrowers with a steady business record, usually two or more years of ITRs and bank statements. Amounts and rates depend on your turnover and credit history." },
      { q: "Do you charge for loan assistance?", a: "Please ask us about your specific case. We will tell you upfront about any fee, and the lender's own processing fee is shown separately in the offer." },
    ],
  },
];

export const servicePageByPath = Object.fromEntries(servicePages.map((s) => [s.path, s]));
