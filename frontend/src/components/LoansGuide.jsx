import React from "react";
import { Link } from "react-router-dom";
import {
  Wallet,
  Building,
  Landmark,
  FileText,
  CheckCircle2,
  Percent,
  Calendar,
  CreditCard,
  TrendingUp,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Phone,
  ShieldCheck,
  Briefcase,
  Car,
  Home,
  Coins,
  History,
  Scale,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const loanTypes = [
  {
    type: "Home Loan",
    purpose: "Purchasing or constructing residential property, plot, or balance transfer",
    security: "Secured (Property pledged)",
    securityBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tenure: "Long-Term (15–30 Years)",
    rateProfile: "Lowest interest rates (from 7.15%) due to strong asset security",
    icon: Home,
  },
  {
    type: "Personal Loan",
    purpose: "Unplanned expenses, weddings, travel, or medical emergencies",
    security: "Unsecured (Zero collateral)",
    securityBadge: "bg-blue-50 text-blue-700 border-blue-200",
    tenure: "Short to Medium (1–5 Years)",
    rateProfile: "Fast approval; rates determined by CIBIL score & employer category",
    icon: Wallet,
  },
  {
    type: "Vehicle Loan",
    purpose: "Buying new or pre-owned cars, two-wheelers, or commercial fleets",
    security: "Secured (Vehicle hypothecated)",
    securityBadge: "bg-purple-50 text-purple-700 border-purple-200",
    tenure: "Short to Medium (3–7 Years)",
    rateProfile: "Attractive fixed interest rates with minimal processing fees",
    icon: Car,
  },
  {
    type: "Business Loan",
    purpose: "Machinery purchase, working capital, inventory, or operational expansion",
    security: "Secured or Unsecured",
    securityBadge: "bg-amber-50 text-amber-700 border-amber-200",
    tenure: "Variable (1–10 Years)",
    rateProfile: "Structured funding based on business cash flows, ITRs & turnover",
    icon: Briefcase,
  },
  {
    type: "Loan Against Property / Gold",
    purpose: "Unlocking large liquidity from high-value existing real estate or gold",
    security: "Secured (Gold or Real Estate)",
    securityBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tenure: "Flexible (6 Months to 15 Years)",
    rateProfile: "Significantly lower interest rates than unsecured personal loans",
    icon: Coins,
  },
];

const strategicReasons = [
  {
    icon: Zap,
    title: "Immediate Capital Access",
    desc: "Allows individuals and businesses to purchase high-value assets today without delaying plans for decades to save full cash upfront.",
  },
  {
    icon: Scale,
    title: "Cash Flow Management",
    desc: "Spreads large capital outlays into predictable monthly operating costs while preserving liquid emergency cash reserves.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth & Leverage",
    desc: "Enables commercial ventures to invest in productive capacity and machinery that generates higher revenue than the cost of borrowing.",
  },
  {
    icon: ShieldCheck,
    title: "Credit Score Building",
    desc: "Establishing a consistent history of timely loan repayments builds a stellar credit score (e.g. CIBIL score), unlocking premier terms in the future.",
  },
];

const loanFacts = [
  {
    stat: "3000 BCE",
    label: "Older Than Money Itself",
    detail:
      "Formal loans predate official government currency. The earliest recorded loan contracts date back to around 3000 BCE in ancient Mesopotamia, where farmers borrowed barley seeds on clay tablets and repaid them from future harvests.",
  },
  {
    stat: "₹212.9 Lakh Cr+",
    label: "Record Credit Offtake",
    detail:
      "Scheduled Commercial Banks in India hold total outstanding credit exceeding ₹212.9 lakh crore, driven by robust economic expansion across personal, industrial, and agricultural sectors.",
  },
  {
    stat: "33% Total Credit",
    label: "Personal Credit Boom",
    detail:
      "Personal loans (including housing, vehicle, and gold loans) account for 33% of overall bank credit in India, reflecting strong consumer confidence and accessible retail financing.",
  },
  {
    stat: "The Math of Interest",
    label: "Smart Debt Optimization",
    detail:
      "On a long-term 20-year home loan at standard market interest rates, total interest paid over the tenure often matches or exceeds the original principal amount borrowed—making partial pre-payments one of the most effective debt reduction strategies.",
  },
];

const LoansGuide = () => {
  return (
    <section id="loans-guide" className="bg-white py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* 1. What is a Loan & Upfront Capital Analogy */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              CREDIT & FINANCING FUNDAMENTALS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
              What is a <span className="text-[#d89626]">Loan</span>?
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              A formal financial agreement where a lender provides capital upfront to help you achieve goals immediately, repaid over time in predictable monthly installments.
            </p>
          </div>
        </Reveal>

        {/* Analogy Callout Box */}
        <Reveal delay={50} className="mb-12">
          <div className="bg-gradient-to-br from-[#faf6ee] via-[#fffdf9] to-[#faf6ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#f0dca8] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89626]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow-md">
                <Landmark className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89626]/15 text-[#b37718] font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> How Credit Empowers Growth
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-2">
                  Accomplish Your Milestones Today
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Imagine you want to buy a home or fund a business expansion today, but you don't have the full lump sum available right now. A lender agrees to provide you with the capital upfront so you can accomplish your goal immediately. In return, you agree to repay that borrowed amount over a fixed time frame in predictable monthly installments, along with a fee (interest) for using their funds.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={70}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-[#d89626] transition-colors">
                  <Wallet className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  1. The Principal
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The original sum of money you borrow from the bank or financial institution to finance your purchase or project.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Borrowed Capital Sum
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-amber-50 text-[#d89626] flex items-center justify-center mb-4 group-hover:bg-[#d89626] group-hover:text-white transition-colors">
                  <Percent className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  2. The Interest Rate
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The percentage fee charged by the lender for providing capital, starting from 7.15% p.a. for secured home loans.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Cost of Borrowing
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-emerald-400 transition-colors">
                  <Calendar className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  3. The Tenure
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The agreed timeline (ranging from 1 year to 30 years) over which the loan is repaid in equated monthly installments.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Repayment Horizon
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. How Loans Work in 3 Simple Steps & Visual Workflow */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              DISBURSEMENT & REPAYMENT
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Loans Work in 3 Simple Steps
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              A transparent digital pathway from document verification to instant capital release.
            </p>
          </Reveal>

          {/* Visual Workflow Diagram */}
          <Reveal delay={60} className="mb-10">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="px-5 py-3 rounded-xl bg-[#0b1f3a] text-white text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#d89626]" />
                [ Borrower Applies & Submits Financial Proof ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d89626]" />
                [ Lender Evaluates Credit & Approves ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-blue-50 border border-blue-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <Landmark className="w-4 h-4 text-blue-600" />
                [ Capital Disbursed Upfront ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                [ Borrower Repays via Equated Monthly Installments (EMIs) ]
              </div>
            </div>
          </Reveal>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Reveal delay={80}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  01
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Application & Credit Assessment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You request a specific amount, and the lender evaluates your credit history, income stability, and repayment capacity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  02
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Disbursement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Once approved, funds are transferred directly to your bank account or to the third-party seller (e.g. home developer or car dealership).
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  03
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Structured Repayment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You pay back the principal plus accrued interest over time through fixed, predictable Equated Monthly Installments (EMIs).
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Key Types of Loans */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              LOAN PRODUCTS & STRUCTURES
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Key Types of Loans
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Explore secured and unsecured financing options across 25+ partner banks and NBFCs.
            </p>
          </Reveal>

          {/* Table on Desktop */}
          <Reveal delay={70} className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b1f3a] text-white">
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Loan Type
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Primary Purpose
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Security / Collateral
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Typical Tenure
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Risk & Rate Profile
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {loanTypes.map((l, idx) => {
                  const IconComp = l.icon;
                  return (
                    <tr
                      key={l.type}
                      className={`hover:bg-[#faf6ee]/50 transition-colors ${
                        idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-[#0b1f3a]">
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-[#d89626] shrink-0" />
                          <span>{l.type}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-600">{l.purpose}</td>
                      <td className="py-4 px-6 font-medium">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${l.securityBadge}`}>
                          {l.security}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-medium">
                        {l.tenure}
                      </td>
                      <td className="py-4 px-6 text-slate-600 text-xs">
                        {l.rateProfile}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Reveal>

          {/* Cards on Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {loanTypes.map((l, idx) => {
              const IconComp = l.icon;
              return (
                <Reveal key={l.type} delay={idx * 50}>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-[#d89626]" />
                          <h4 className="font-bold text-[#0b1f3a] text-base">{l.type}</h4>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${l.securityBadge}`}>
                          {l.security}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        <strong className="text-slate-700">Purpose:</strong> {l.purpose}
                      </p>
                      <div className="bg-[#faf6ee] rounded-lg p-2.5 mb-2 border border-[#f0dca8]/40 text-xs text-slate-700">
                        <strong className="text-[#0b1f3a]">Tenure:</strong> {l.tenure}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                      {l.rateProfile}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* 4. Why Borrowers Use Loans Strategically */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              STRATEGIC FINANCING
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Why Borrowers Use Loans Strategically
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              How disciplined borrowing creates leverage, accelerates wealth, and preserves liquidity.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicReasons.map((r, idx) => {
              const IconComp = r.icon;
              return (
                <Reveal key={r.title} delay={idx * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#d89626] hover:shadow-lg transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-[#faf6ee] text-[#d89626] flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] transition-colors">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <h4 className="font-display text-base font-bold text-[#0b1f3a] mb-2 leading-snug">
                        {r.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* 5. Eye-Opening Facts & Figures */}
        <div>
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              CREDIT DATA & INSIGHTS
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Eye-Opening Facts & Figures
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Fascinating credit milestones and money management insights.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanFacts.map((f, idx) => (
              <Reveal key={f.label} delay={idx * 70}>
                <div className="bg-[#0b1f3a] text-white rounded-2xl p-6 border border-white/10 hover:border-[#d89626]/60 transition-all h-full flex flex-col justify-between shadow-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#d89626]/10 rounded-full blur-2xl group-hover:bg-[#d89626]/20 transition-colors" />
                  <div className="relative z-10">
                    <span className="font-display text-2xl sm:text-[1.75rem] font-black text-[#d89626] block mb-2 leading-tight">
                      {f.stat}
                    </span>
                    <h4 className="font-display text-base font-bold text-white mb-2">
                      {f.label}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {f.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Call To Action Box */}
        <Reveal delay={100} className="mt-14">
          <div className="bg-[#faf6ee] rounded-2xl p-6 sm:p-8 border border-[#f0dca8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a]">
                  Looking for the Lowest Interest Rate on Your Loan?
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Compare 25+ leading public and private banks. We negotiate lower processing fees and ensure swift digital approval.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap px-6 py-3 rounded-lg bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d89626]" />
              Check Loan Eligibility
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LoansGuide;
