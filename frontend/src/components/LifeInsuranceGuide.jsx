import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  CreditCard,
  Building,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Sparkles,
  ArrowDown,
  ArrowRight,
  Phone,
  Landmark,
  Scale,
  Award,
  Zap,
  Lock,
  UserCheck,
} from "lucide-react";
import Reveal from "./Reveal";

const lifePlans = [
  {
    type: "Term Insurance",
    action: "Pure income replacement for a specific term (e.g., 20–40 years)",
    benefit: "Maximum financial protection at lowest cost; no maturity benefit unless 'Return of Premium' option is chosen",
    bestFor: "Primary breadwinners, salaried individuals & families with loans",
    badge: "Pure Protection (High Cover)",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    type: "Whole Life Insurance",
    action: "Coverage for your entire lifetime (up to age 99 or 100)",
    benefit: "Guaranteed financial protection + tax-free legacy creation for heirs",
    bestFor: "Estate planning & lifelong dependents",
    badge: "Lifelong Till 100",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    type: "Endowment / Savings Plans",
    action: "Combines life protection with guaranteed low-risk savings",
    benefit: "Maturity bonus + guaranteed sum assured upon policy term completion",
    bestFor: "Conservative investors with fixed future milestones (child's college/marriage)",
    badge: "Guaranteed Savings",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    type: "ULIPs (Unit-Linked Plans)",
    action: "Combines life cover with equity or bond market investments",
    benefit: "Dual benefit: Life protection + market-linked wealth compounding with switch flexibility",
    bestFor: "Investors seeking wealth creation with life cover and tax exemption",
    badge: "Wealth + Cover",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Annuity / Pension Plans",
    action: "Replaces active salary with steady income streams post-retirement",
    benefit: "Guaranteed lifelong regular annuity payments immune to market swings",
    bestFor: "Retirement cash-flow planning & senior citizens",
    badge: "Lifelong Pension",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

const whyLifeEssential = [
  {
    icon: Users,
    title: "Income Replacement",
    desc: "Ensures your family can maintain their standard of living, pay household bills, and fund children's education if you are no longer there to earn.",
  },
  {
    icon: ShieldCheck,
    title: "Debt & Liability Protection",
    desc: "Prevents home loans, personal loans, or business debts from becoming an unbearable financial burden on your grieving family.",
  },
  {
    icon: Landmark,
    title: "Generational Legacy Building",
    desc: "Allows you to leave behind a substantial, organized wealth payout for future generations to kickstart their aspirations.",
  },
  {
    icon: Receipt,
    title: "Complete Tax Efficiency",
    desc: "Offers tax deductions on premiums paid (under Section 80C) and guarantees completely tax-free claim payouts (under Section 10(10D)).",
  },
];

const lifeFacts = [
  {
    stat: "1706",
    label: "Centuries of Risk Sharing",
    detail:
      "Modern life insurance roots trace back to 1706 in London with the creation of the Amicable Society for a Perpetual Assurance Office—establishing the worldwide foundation of family protection.",
  },
  {
    stat: "₹72.46 Lakh Cr+",
    label: "Trillions Under Management",
    detail:
      "Life insurance companies in India manage a massive asset base of over ₹72.46 lakh crore in total investments, serving as one of the largest domestic institutional pillars of the nation.",
  },
  {
    stat: "97% - 99%+",
    label: "High Claim Settlement Ratios",
    detail:
      "Industry-wide, Indian life insurers settle over 97% of individual death claims within 30 days, with leading insurers consistently achieving 98% to 99%+ claim settlement ratios.",
  },
  {
    stat: "₹4.60 Lakh Cr+",
    label: "Growing Market Scale",
    detail:
      "In FY 2025–26 alone, total new business premiums (First Year Premium) in India reached ₹4.60 lakh crore, highlighting massive expanding coverage across individual and group protection.",
  },
];

const LifeInsuranceGuide = () => {
  return (
    <section id="life-insurance" className="bg-white py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* 1. What is Life Insurance & Invisible Safety Net Analogy */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              FAMILY WEALTH & LEGACY PROTECTION
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
              What is <span className="text-[#d89626]">Life Insurance</span>?
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              A legally binding contract that provides an unbreakable financial safety net for your loved ones, replacing your income and securing their lifelong milestones.
            </p>
          </div>
        </Reveal>

        {/* Safety Net Analogy Callout Box */}
        <Reveal delay={50} className="mb-12">
          <div className="bg-gradient-to-br from-[#faf6ee] via-[#fffdf9] to-[#faf6ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#f0dca8] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89626]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow-md">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89626]/15 text-[#b37718] font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Invisible Safety Net Analogy
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-2">
                  Carrying an Invisible Safety Net Over Your Family
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Imagine carrying an invisible financial safety net over your family. You pay a small, predictable fee (premium) regularly to keep that net active. If an unexpected tragedy strikes and you are no longer there to earn for them, the safety net releases a lump sum amount (sum assured) to your family so their lives and financial goals remain completely protected.
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
                  <CreditCard className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  1. The Premium
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You pay fixed periodic amounts (monthly, quarterly, or annually) tailored to your age and income to keep the policy in-force.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Predictable Periodic Payment
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-amber-50 text-[#d89626] flex items-center justify-center mb-4 group-hover:bg-[#d89626] group-hover:text-white transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  2. The Protection
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The insurance company guarantees financial coverage (e.g. ₹1 Cr to ₹5 Cr) against untimely demise, critical illness, or total permanent disability.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Comprehensive Risk Shield
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-emerald-400 transition-colors">
                  <Landmark className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  3. The Payout
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you pass away during the term, nominees receive the full tax-free sum assured. In savings-linked policies, you receive accumulated maturity benefits.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Guaranteed Payout or Maturity
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. How Life Insurance Works in 3 Simple Steps & Visual Workflow */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              HOW LIFE INSURANCE WORKS
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Life Insurance Works in 3 Simple Steps
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              A transparent mechanism designed to secure your dependents without delay.
            </p>
          </Reveal>

          {/* Visual Workflow Diagram */}
          <Reveal delay={60} className="mb-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="px-5 py-3 rounded-xl bg-[#0b1f3a] text-white text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#d89626]" />
                  [ Policyholder Pays Regular Premium ]
                </div>
                <div className="h-8 w-0.5 bg-[#d89626] my-1 relative">
                  <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
                </div>
                <div className="px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2 mt-1">
                  <Landmark className="w-4 h-4 text-[#d89626]" />
                  [ Insurer Pools Risk Capital ]
                </div>
                <div className="h-8 w-0.5 bg-[#d89626] my-1 relative">
                  <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
                </div>
              </div>

              {/* Branching Grid */}
              <div className="mt-2 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Demise Event Branch */}
                <div className="bg-rose-50/70 rounded-xl p-4 sm:p-5 border border-rose-200/80 text-center flex flex-col items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 mb-2">
                      Scenario A: Unfortunate Demise
                    </span>
                    <h5 className="font-bold text-[#0b1f3a] text-base mb-1">
                      Event: Demise
                    </h5>
                    <p className="text-xs text-slate-600 mb-3">
                      Insurer immediately verifies claim and releases sum assured to nominees.
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-rose-200/60 bg-rose-100/50 rounded-lg p-2.5 text-xs font-bold text-rose-900">
                    Lump Sum Paid Tax-Free to Family
                  </div>
                </div>

                {/* Maturity Event Branch */}
                <div className="bg-emerald-50/70 rounded-xl p-4 sm:p-5 border border-emerald-200/80 text-center flex flex-col items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                      Scenario B: Policy Maturity
                    </span>
                    <h5 className="font-bold text-[#0b1f3a] text-base mb-1">
                      Event: Maturity
                    </h5>
                    <p className="text-xs text-slate-600 mb-3">
                      For savings/endowment/ULIP plans upon completing tenure.
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-emerald-200/60 bg-emerald-100/50 rounded-lg p-2.5 text-xs font-bold text-emerald-900">
                    Savings / Returns Paid to You
                  </div>
                </div>
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
                  You Choose Coverage & Term
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You select an optimal cover amount (e.g. ₹1 Crore) based on your income, liabilities, and future family needs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  02
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  You Pay Premiums
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You make regular, affordable premium payments to keep the policy in-force and active throughout the chosen horizon.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  03
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Financial Shield Deploys
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Upon an unfortunate event, the policy pays out tax-free benefit funds to your nominees, replacing your income stream.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Key Types of Life Insurance Plans */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              TYPES OF LIFE POLICIES
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Key Types of Life Insurance Plans
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Select between pure risk term protection, guaranteed endowment savings, or lifelong legacy creation.
            </p>
          </Reveal>

          {/* Table on Desktop */}
          <Reveal delay={70} className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b1f3a] text-white">
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Plan Type
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    What It Does
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Return / Benefit Focus
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {lifePlans.map((p, idx) => (
                  <tr
                    key={p.type}
                    className={`hover:bg-[#faf6ee]/50 transition-colors ${
                      idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-[#0b1f3a]">
                      <div className="flex items-center gap-2">
                        <span>{p.type}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                          {p.badge}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{p.action}</td>
                    <td className="py-4 px-6 text-slate-700 font-medium">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#d89626] shrink-0 mt-0.5" />
                        <span>{p.benefit}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs">
                        {p.bestFor}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Cards on Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lifePlans.map((p, idx) => (
              <Reveal key={p.type} delay={idx * 50}>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-[#0b1f3a] text-base">{p.type}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      <strong className="text-slate-700">What it does:</strong> {p.action}
                    </p>
                    <div className="bg-[#faf6ee] rounded-lg p-2.5 mb-3 border border-[#f0dca8]/40 text-xs text-slate-700">
                      <strong className="text-[#0b1f3a]">Benefit:</strong> {p.benefit}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Best For: <span className="text-[#0b1f3a]">{p.bestFor}</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4. Why Include Life Insurance in Your Financial Plan */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              WHY IT IS ESSENTIAL
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Why Include Life Insurance in Your Financial Plan?
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Four fundamental pillars protecting your family's future and lifestyle.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLifeEssential.map((r, idx) => {
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
              INDUSTRY DATA & STABILITY
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Eye-Opening Facts & Figures
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              The colossal asset base and high claim settlement reliability in Indian life insurance.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeFacts.map((f, idx) => (
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
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a]">
                  Calculate Your Family's Term Insurance Cover
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Compare plans with 99%+ claim settlement ratios, critical illness riders, and premium waiver benefits.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap px-6 py-3 rounded-lg bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d89626]" />
              Talk to Term Advisor
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LifeInsuranceGuide;
