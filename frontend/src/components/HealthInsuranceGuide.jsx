import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  HeartPulse,
  CreditCard,
  Building2,
  Receipt,
  CheckCircle2,
  TrendingUp,
  Percent,
  FileText,
  Activity,
  ArrowDown,
  ArrowRight,
  Sparkles,
  UtensilsCrossed,
  Layers,
  AlertTriangle,
  User,
  Users,
  HeartHandshake,
  Stethoscope,
  Phone,
} from "lucide-react";
import Reveal from "./Reveal";

const planTypes = [
  {
    type: "Individual Health Insurance",
    covers: "Covers a single person up to an independent Sum Insured",
    benefit: "Dedicated sum insured that is not shared with anyone else",
    bestFor: "Single adults or individuals with specific health needs",
    badge: "Solo Protection",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    type: "Family Floater Plan",
    covers: "A single policy covering the entire family (spouses, children)",
    benefit: "Shared sum insured; more cost-effective than separate individual policies",
    bestFor: "Young families and couples",
    badge: "Most Popular",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Senior Citizen Plan",
    covers: "Customized coverage for parents/elderly (usually age 60+)",
    benefit: "Higher medical coverage, including pre-existing disease tracking",
    bestFor: "Elderly parents requiring specialized medical care",
    badge: "Age 60+",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    type: "Critical Illness Insurance",
    covers: "Provides a lump sum payout upon diagnosis of severe diseases (e.g., cancer, stroke)",
    benefit: "Fixed cash payout regardless of actual hospital bill amount",
    bestFor: "Income protection against life-threatening illnesses",
    badge: "Lump-Sum Payout",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    type: "Super Top-Up Plan",
    covers: "High deductible policy that triggers once basic threshold limit is breached",
    benefit: "Massive extra coverage (e.g., ₹50 Lakh) at a fraction of the cost",
    bestFor: "Cost-effective buffer over basic base plans",
    badge: "High Deductible",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Protection Against Medical Inflation",
    desc: "Healthcare costs rise rapidly every year. Insurance shields your long-term savings from being wiped out by a single hospitalization event.",
  },
  {
    icon: Building2,
    title: "Cashless Hospitalization",
    desc: "Network hospitals allow you to receive quality care without having to arrange large sums of cash during an emergency.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Pre- & Post-Care",
    desc: "Modern health plans cover ambulance fees, pre-hospitalization tests (up to 60 days), post-discharge treatments (up to 90–180 days), and day-care procedures that don't require 24-hour admission.",
  },
  {
    icon: Receipt,
    title: "Tax Savings (Section 80D)",
    desc: "Premiums paid for self, spouse, children, and parents qualify for tax deductions (under Section 80D in traditional tax regimes).",
  },
];

const facts = [
  {
    stat: "11.5% - 14%",
    label: "Surging Medical Inflation",
    detail:
      "Medical cost inflation in India routinely runs at 11.5% to 14% annually, nearly double the general retail inflation rate—making health coverage crucial to guard against escalating treatment costs.",
  },
  {
    stat: "₹1.27 Lakh Cr+",
    label: "Largest Non-Life Market",
    detail:
      "Health insurance is the fastest-growing general insurance segment in India, generating over ₹1.27 lakh crore in premiums in FY 2024–25 and accounting for more than 41% of total non-life insurance business.",
  },
  {
    stat: "3.26 Cr+ / ₹94k+ Cr",
    label: "Massive Scale of Claims",
    detail:
      "Health insurers process over 3.26 crore claims annually, paying out over ₹94,000+ crore in medical claims, with around 58% settled via cashless processing directly at network hospitals.",
  },
  {
    stat: "~10.3% Retail",
    label: "The Coverage Gap",
    detail:
      "Out of roughly 58 crore lives covered under health insurance in India, 89%+ are covered under government welfare schemes or corporate employer policies, while individual retail coverage accounts for just ~10.3%—highlighting why personal independent coverage is critical when switching jobs or retiring.",
  },
];

const HealthInsuranceGuide = () => {
  return (
    <section id="health-insurance" className="bg-white py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* 1. What is Health Insurance & The Restaurant Analogy */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              HEALTH INSURANCE FUNDAMENTALS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
              What is <span className="text-[#d89626]">Health Insurance</span>?
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Health Insurance acts as a robust financial shield between sudden medical emergencies and your hard-earned lifetime savings.
            </p>
          </div>
        </Reveal>

        {/* Restaurant Analogy Callout Box */}
        <Reveal delay={50} className="mb-12">
          <div className="bg-gradient-to-br from-[#faf6ee] via-[#fffdf9] to-[#faf6ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#f0dca8] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89626]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow-md">
                <UtensilsCrossed className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89626]/15 text-[#b37718] font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Simple Analogy
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-2">
                  Think of it Like a Restaurant Membership
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Imagine going to a restaurant where, instead of paying for every expensive dish out of pocket, you pay a small fixed membership fee every month. When you dine, the bill is handled directly by the restaurant's partner network. That is exactly how modern health insurance protects your health and wallet.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={70}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-[#d89626] transition-colors">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  The Premium
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A small annual or monthly fee you pay to keep your comprehensive health policy active and guaranteed.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Financial Commitment
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
                  The Sum Insured
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The maximum annual limit (e.g. ₹10 Lakh to ₹1 Crore) up to which the insurance company covers your hospital and medical expenses.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Coverage Protection Limit
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-emerald-400 transition-colors">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  The Coverage
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If you or a covered family member suffer an illness or injury requiring hospitalization, the insurer pays the hospital directly or reimburses your treatment expenses.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Zero Out-Of-Pocket Stress
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. How Health Insurance Works in 3 Simple Steps & Visual Workflow */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              SEAMLESS CLAIM PROCESS
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Health Insurance Works in 3 Simple Steps
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              From premium payment to hospital admission and final settlement.
            </p>
          </Reveal>

          {/* Visual Workflow Diagram */}
          <Reveal delay={60} className="mb-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              {/* Step A: Policyholder */}
              <div className="flex flex-col items-center text-center">
                <div className="px-5 py-3 rounded-xl bg-[#0b1f3a] text-white text-sm sm:text-base font-bold shadow-sm inline-flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#d89626]" />
                  Policyholder Pays Annual Premium
                </div>
                <div className="h-8 w-0.5 bg-[#d89626] my-1 relative">
                  <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
                </div>
                <div className="px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 text-[#0b1f3a] text-sm sm:text-base font-bold shadow-sm inline-flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4 text-[#d89626]" />
                  Hospitalization / Medical Event
                </div>
                <div className="h-8 w-0.5 bg-[#d89626] my-1 relative">
                  <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
                </div>
              </div>

              {/* Branching Grid */}
              <div className="mt-2 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Cashless Branch */}
                <div className="bg-emerald-50/70 rounded-xl p-4 sm:p-5 border border-emerald-200/80 text-center flex flex-col items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                      Option A (Network Hospital)
                    </span>
                    <h5 className="font-bold text-[#0b1f3a] text-base mb-1">
                      Cashless Claim
                    </h5>
                    <p className="text-xs text-slate-600 mb-3">
                      Hospital TPA desk pre-authorizes treatment with your insurer.
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-emerald-200/60 bg-emerald-100/50 rounded-lg p-2.5 text-xs font-bold text-emerald-900">
                    Insurer Pays Network Hospital Directly
                  </div>
                </div>

                {/* Reimbursement Branch */}
                <div className="bg-blue-50/70 rounded-xl p-4 sm:p-5 border border-blue-200/80 text-center flex flex-col items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-2">
                      Option B (Non-Network Hospital)
                    </span>
                    <h5 className="font-bold text-[#0b1f3a] text-base mb-1">
                      Reimbursement Claim
                    </h5>
                    <p className="text-xs text-slate-600 mb-3">
                      You pay initially and submit hospital discharge bills to insurer.
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-blue-200/60 bg-blue-100/50 rounded-lg p-2.5 text-xs font-bold text-blue-900">
                    Insurer Reimburses Your Out-of-Pocket Bills
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
                  Get Admitted
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In the event of illness, surgery, or emergency, you get admitted to a network hospital (or non-network hospital).
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  02
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Submit Claim
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  For cashless treatment, the hospital pre-authorizes treatment with your insurer. For reimbursement, you submit hospital bills after discharge.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  03
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Bill Settlement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The insurer reviews the medical documents and pays the medical bill directly to the network hospital (or transfers funds into your bank account).
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Key Types of Health Insurance Plans */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              PLAN COMPARISON
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Key Types of Health Insurance Plans
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Select the right plan structure tailored to your age, dependents, and medical history.
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
                    What It Covers
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Key Benefit
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {planTypes.map((p, idx) => (
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
                    <td className="py-4 px-6 text-slate-600">{p.covers}</td>
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
            {planTypes.map((p, idx) => (
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
                      <strong className="text-slate-700">Covers:</strong> {p.covers}
                    </p>
                    <div className="bg-[#faf6ee] rounded-lg p-2.5 mb-3 border border-[#f0dca8]/40 text-xs text-slate-700">
                      <strong className="text-[#0b1f3a]">Key Benefit:</strong> {p.benefit}
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

        {/* 4. Why Health Insurance is Essential */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              ESSENTIAL PROTECTION
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Why Health Insurance is Essential
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Protect your wealth from escalating medical costs and enjoy complete peace of mind.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, idx) => {
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
              INDUSTRY DATA & REALITY
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Eye-Opening Facts & Figures
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Crucial industry insights every Indian family needs to know.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((f, idx) => (
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
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a]">
                  Need Help Choosing the Right Health Insurance Plan?
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Compare 30+ leading health insurers with zero waiting-period advice, cashless network assistance, and claims guarantee.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap px-6 py-3 rounded-lg bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d89626]" />
              Talk to Health Expert
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HealthInsuranceGuide;
