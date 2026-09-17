import React from "react";
import { Link } from "react-router-dom";
import {
  Car,
  ShieldCheck,
  Wrench,
  Scale,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  FileCheck2,
  Sparkles,
  ArrowDown,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  Zap,
  DollarSign,
  Layers,
  Fuel,
} from "lucide-react";
import Reveal from "./Reveal";

const motorPlans = [
  {
    type: "Third-Party Liability Insurance",
    covers: "Injuries, death, or property damage caused to another person or vehicle",
    benefit: "Mandated by law; avoids severe traffic fines (up to ₹4,000) and court liabilities",
    bestFor: "Older vehicles or minimal usage where basic legal compliance is required",
    badge: "Mandatory by Law",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    type: "Own Damage (OD) Policy",
    covers: "Accidental damage, fire, vandalism, natural disasters, or theft of your own vehicle",
    benefit: "Shields your own car/bike without forcing you to re-purchase basic third-party cover",
    bestFor: "Vehicle owners who already have an active standalone long-term third-party policy",
    badge: "Standalone OD",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    type: "Comprehensive Motor Insurance",
    covers: "Combines Third-Party Liability + Complete Own Damage protection in one policy",
    benefit: "Complete 360-degree financial coverage against almost all road and theft risks",
    bestFor: "New or relatively new cars, family vehicles, and daily commuters",
    badge: "Most Popular (360°)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Zero Depreciation (Add-on)",
    covers: "Full cost of replaced spare parts without deducting wear-and-tear depreciation",
    benefit: "100% claim payout for plastic, rubber, glass, and metal parts replaced",
    bestFor: "New vehicles up to 3–5 years old to avoid out-of-pocket repair bills",
    badge: "Bumper-to-Bumper",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

const whyMotorEssential = [
  {
    icon: Scale,
    title: "Legal Mandate in India",
    desc: "Driving without at least a Third-Party insurance policy is illegal under the Motor Vehicles Act, carrying heavy penalties up to ₹4,000 and potential license suspension or impounding.",
  },
  {
    icon: Wrench,
    title: "Protection Against High Repair Costs",
    desc: "Modern automobiles feature complex electronics, ADAS sensor arrays, and expensive bodywork. A single accident can result in repair bills running into lakhs, which insurance absorbs.",
  },
  {
    icon: ShieldCheck,
    title: "Theft & Total Loss Safeguard",
    desc: "If your vehicle is stolen or damaged beyond repair, the insurer pays out the full Insured Declared Value (IDV) of the vehicle, protecting your hard-earned capital.",
  },
  {
    icon: Sparkles,
    title: "Add-On Customization",
    desc: "Enhance protection with specialized add-ons like Engine & Gearbox Protect, 24x7 Roadside Assistance (towing/fuel delivery), Return to Invoice (RTI), and Consumables cover.",
  },
];

const motorFacts = [
  {
    stat: "1930",
    label: "Century-Old Obligation",
    detail:
      "Third-party motor insurance was first made compulsory internationally by the UK's Road Traffic Act of 1930 to protect innocent pedestrian victims of road accidents.",
  },
  {
    stat: "45% - 50%",
    label: "Dominant Market Share",
    detail:
      "Motor insurance is one of the largest non-life insurance sectors in India, accounting for nearly 45% to 50% of total general insurance policies written nationwide.",
  },
  {
    stat: "95% - 98%",
    label: "High Settlement Ratios",
    detail:
      "Leading auto insurers maintain Own-Damage (OD) claim settlement ratios consistently above 95% to 98%, processing millions of garage repairs annually through cashless network garage chains.",
  },
  {
    stat: "50%+",
    label: "The Uninsured Vehicle Gap",
    detail:
      "Despite strict statutory laws, industry data indicates that over 50% of the 30+ crore registered vehicles in India drive without active insurance, with two-wheelers making up the vast majority of uninsured vehicles on the road.",
  },
];

const MotorInsuranceGuide = () => {
  return (
    <section id="motor-insurance" className="bg-white py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* 1. What is Motor Insurance & Financial Shield Analogy */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              VEHICLE & AUTO PROTECTION
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
              What is <span className="text-[#d89626]">Motor Insurance</span>?
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              A comprehensive legal contract that safeguards your car, bike, or commercial vehicle against road accidents, theft, natural calamities, and third-party liabilities.
            </p>
          </div>
        </Reveal>

        {/* Built-in Shield Analogy Callout Box */}
        <Reveal delay={50} className="mb-12">
          <div className="bg-gradient-to-br from-[#faf6ee] via-[#fffdf9] to-[#faf6ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#f0dca8] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89626]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow-md">
                <Car className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89626]/15 text-[#b37718] font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Built-In Shield Analogy
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-2">
                  Drive With Complete Peace of Mind
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Imagine driving a vehicle with a built-in financial shield. If an accident happens, your car gets damaged, or you accidentally hit someone else's property, you don't have to pay massive repair bills or legal damages out of your own pocket. The insurance company steps in to cover those costs!
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
                  <DollarSign className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  The Premium
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  An annual or multi-year payment made to keep your vehicle legally protected and covered against damages.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Annual Coverage Fee
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
                  The Coverage
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Financial protection against accidental collision damage, vehicle theft, fire, floods, and mandatory third-party legal liabilities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                360° Risk Defense
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-emerald-400 transition-colors">
                  <Wrench className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  The Payout
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The insurer pays network garage repair costs directly (cashless claims) or reimburses your repair expenses following an accident or loss.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Direct Garage Settlement
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. How Motor Insurance Works in 3 Simple Steps & Visual Workflow */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              CLAIM LIFECYCLE
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Motor Insurance Works in 3 Simple Steps
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              From choosing your policy to instant survey and cashless garage repair.
            </p>
          </Reveal>

          {/* Visual Workflow Diagram */}
          <Reveal delay={60} className="mb-10">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="px-5 py-3 rounded-xl bg-[#0b1f3a] text-white text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#d89626]" />
                  [ Vehicle Owner Pays Annual Premium ]
                </div>
                <div className="h-8 w-0.5 bg-[#d89626] my-1 relative">
                  <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
                </div>
                <div className="px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2 mt-1">
                  <AlertTriangle className="w-4 h-4 text-[#d89626]" />
                  [ Accident, Theft, or Damage Event ]
                </div>
                <div className="h-8 w-0.5 bg-[#d89626] my-1 relative">
                  <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
                </div>
              </div>

              {/* Branching Grid */}
              <div className="mt-2 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Cashless Garage Branch */}
                <div className="bg-emerald-50/70 rounded-xl p-4 sm:p-5 border border-emerald-200/80 text-center flex flex-col items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                      Track 1: Own Damage Repair
                    </span>
                    <h5 className="font-bold text-[#0b1f3a] text-base mb-1">
                      Cashless Garage Claim
                    </h5>
                    <p className="text-xs text-slate-600 mb-3">
                      Authorized network garage handles repair with direct surveyor approval.
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-emerald-200/60 bg-emerald-100/50 rounded-lg p-2.5 text-xs font-bold text-emerald-900">
                    Insurer Pays Garage Repair Costs Directly
                  </div>
                </div>

                {/* Third-Party Legal Branch */}
                <div className="bg-blue-50/70 rounded-xl p-4 sm:p-5 border border-blue-200/80 text-center flex flex-col items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-2">
                      Track 2: Third-Party Damage
                    </span>
                    <h5 className="font-bold text-[#0b1f3a] text-base mb-1">
                      Third-Party Claim
                    </h5>
                    <p className="text-xs text-slate-600 mb-3">
                      Legal settlement for third-party bodily injury or external property damage.
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-blue-200/60 bg-blue-100/50 rounded-lg p-2.5 text-xs font-bold text-blue-900">
                    Insurer Covers Legal & Property Liabilities
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
                  Select Coverage & Policy
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You choose between mandatory basic legal coverage (Third-Party) or full protection for your own vehicle (Comprehensive + Zero Dep).
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  02
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Incident Occurs & Intimation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In the event of damage, collision, or theft, you inform your insurer and take the vehicle to an authorized network garage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  03
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  Claim Processing & Settlement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A surveyor assesses the vehicle damage, and the insurer pays the garage directly for repair costs (minus deductibles) or handles third-party claims.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Key Types of Motor Insurance Plans */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              POLICY TIERS & COVERS
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Key Types of Motor Insurance Plans
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Compare statutory requirements vs. full bumper-to-bumper protection.
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
                {motorPlans.map((p, idx) => (
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
            {motorPlans.map((p, idx) => (
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

        {/* 4. Why Motor Insurance is Essential */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              CORE PROTECTION
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Why Motor Insurance is Essential
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Avoid hefty penalties, legal issues, and unexpected out-of-pocket garage bills.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMotorEssential.map((r, idx) => {
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
              INDUSTRY DATA & FACTS
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Eye-Opening Facts & Figures
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Key auto insurance data points and road safety statistics in India.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {motorFacts.map((f, idx) => (
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
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a]">
                  Instant Motor Insurance Quote & Renewal
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Compare rates across 25+ insurers with instant policy issuance, Zero-Depreciation add-ons, and free roadside assistance.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap px-6 py-3 rounded-lg bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d89626]" />
              Get Vehicle Quote
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MotorInsuranceGuide;
