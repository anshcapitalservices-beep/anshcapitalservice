import React from "react";
import { Link } from "react-router-dom";
import {
  PieChart,
  TrendingUp,
  Layers,
  Coins,
  Users2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowDown,
  ArrowRight,
  Landmark,
  Building,
  Scale,
  Gift,
  Phone,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

const fundTypes = [
  {
    type: "Equity Funds",
    investsIn: "Shares of listed companies (e.g., Tata, Reliance, Apple)",
    risk: "High",
    riskBadge: "bg-rose-50 text-rose-700 border-rose-200",
    bestFor: "Long-term wealth creation (5+ years)",
    focus: "Capital Appreciation",
  },
  {
    type: "Debt Funds",
    investsIn: "Fixed-income securities (Government bonds, corporate loans, T-bills)",
    risk: "Low to Moderate",
    riskBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bestFor: "Short to medium-term stability (1–3 years)",
    focus: "Capital Safety & Income",
  },
  {
    type: "Hybrid Funds",
    investsIn: "A strategic mix of both Equity and Debt instruments",
    risk: "Moderate",
    riskBadge: "bg-amber-50 text-amber-700 border-amber-200",
    bestFor: "Balanced growth with a safety cushion",
    focus: "Auto-Rebalancing",
  },
  {
    type: "Solution Funds",
    investsIn: "Goal-mapped portfolios (Retirement plans, children's education funds)",
    risk: "Varies (Tailored)",
    riskBadge: "bg-blue-50 text-blue-700 border-blue-200",
    bestFor: "Specific long-term financial milestones",
    focus: "Milestone Focused",
  },
];

const whyInvestReasons = [
  {
    icon: Layers,
    title: "Instant Diversification",
    desc: "Buying individual stocks is risky. A mutual fund spreads your money across 30–100 different companies, so if one performs poorly, the others balance it out.",
  },
  {
    icon: Briefcase,
    title: "Professional Expertise",
    desc: "You don't need to read complex financial reports or track the stock market daily—a qualified, full-time SEBI-registered fund manager manages your money.",
  },
  {
    icon: Zap,
    title: "Flexibility (SIPs)",
    desc: "You can start a Systematic Investment Plan (SIP) with small regular payments (starting ₹100 or ₹500) rather than requiring a large upfront lump sum.",
  },
  {
    icon: Clock,
    title: "High Liquidity",
    desc: "For most open-ended funds, you can sell your units and withdraw your cash online within 1–3 business days without punitive lock-ins.",
  },
];

const factsData = [
  {
    stat: "1774",
    label: "Centuries of Proven History",
    detail:
      "The concept isn't new—the world's very first mutual fund was created in 1774 by Dutch merchant Adriaan van Ketwich. He named it 'Eendragt Maakt Magt', which translates to 'Unity Creates Strength.'",
  },
  {
    stat: "₹85.76 Lakh Cr+",
    label: "Explosive Indian Growth",
    detail:
      "The Indian Mutual Fund Industry's Assets Under Management (AUM) reached an all-time high of ₹85.76 lakh crore in 2026—a massive 6-fold increase in just 10 years!",
  },
  {
    stat: "₹31,000+ Cr/mo",
    label: "The SIP Phenomenon",
    detail:
      "Everyday Indian retail investors pour over ₹31,000+ crore into mutual funds every single month through more than 10.6 crore active SIP accounts.",
  },
  {
    stat: "87%+ Retail",
    label: "Power of Small Beginnings",
    detail:
      "Over 87% of individual investors in India use mutual funds to get long-term exposure to the stock market without needing lakhs of capital upfront.",
  },
];

const assetClassComparison = [
  {
    asset: "Managed Mutual Funds",
    role: "Diversified wealth creation & goal-based growth",
    minCapital: "Low (Starts at ₹100–₹500)",
    liquidity: "High (T+1 to T+3 business days for open-ended funds)",
    effort: "Zero (Handled by SEBI-registered professional managers)",
    profile: "Market-linked; risk & allocation customized by category",
    highlight: true,
  },
  {
    asset: "Fixed Deposits (FDs)",
    role: "Guaranteed capital preservation & fixed income",
    minCapital: "Low (Starts at ₹1,000)",
    liquidity: "Moderate (Instant exit available with small penalty)",
    effort: "Zero (Handled directly by banks/NBFCs)",
    profile: "Guaranteed fixed interest; low risk",
    highlight: false,
  },
  {
    asset: "Direct Stocks",
    role: "High long-term capital appreciation for active traders",
    minCapital: "Low (Price of 1 share)",
    liquidity: "High (Instant trading during market hours)",
    effort: "High (Requires individual company research & daily tracking)",
    profile: "High growth potential; high short-term volatility",
    highlight: false,
  },
  {
    asset: "Gold / Commodities",
    role: "Portfolio hedge & inflation protection",
    minCapital: "Low to Moderate (Digital/ETFs vs Physical)",
    liquidity: "High (Physical gold or Gold ETFs)",
    effort: "Low to Moderate (Requires secure storage for physical gold)",
    profile: "Stable store of value; moderate price fluctuations",
    highlight: false,
  },
  {
    asset: "Real Estate",
    role: "Tangible wealth & regular rental yield",
    minCapital: "Very High (Requires large upfront capital)",
    liquidity: "Low (Takes weeks or months to liquidate)",
    effort: "High (Property maintenance, legalities, & tenant management)",
    profile: "Capital appreciation + rental yield; illiquidity risk",
    highlight: false,
  },
];

const comparisons = [
  {
    title: "vs. Direct Stock Investing",
    text: "Direct stock selection offers total control over company choices, but requires substantial time, financial skill, and emotional discipline to stay diversified. Mutual funds allow investors to access a professionally selected stock portfolio managed by experienced full-time analysts.",
  },
  {
    title: "vs. Bank Fixed Deposits",
    text: "FDs offer absolute safety of principal and predictable interest. Mutual funds (specifically debt and liquid funds) offer market-linked stability with potentially higher tax efficiency for longer holding periods, without locking capital in rigid deposit terms.",
  },
  {
    title: "vs. Real Estate",
    text: "Real estate generates steady rental yield and long-term land appreciation. Mutual funds offer a way to participate in equity growth without needing lakhs in upfront capital, maintenance costs, or illiquidity struggles.",
  },
  {
    title: "vs. Physical Gold",
    text: "Gold acts as a safe-haven asset during economic downturns. Mutual funds allow investors to hold gold electronically through Gold ETFs/Fund of Funds or hold Multi-Asset Allocation Funds that dynamically rebalance between equity, debt, and gold under one roof.",
  },
];

const MutualFundsGuide = () => {
  return (
    <section id="mutual-funds-guide" className="bg-white py-16 md:py-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* 1. What is a Mutual Fund & The Sweets Box Analogy */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              MUTUAL FUND FUNDAMENTALS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
              What is a <span className="text-[#d89626]">Mutual Fund</span>?
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              A professionally managed investment vehicle that pools money from thousands of individual investors to build a diversified portfolio.
            </p>
          </div>
        </Reveal>

        {/* The Mixed Sweets Box Analogy */}
        <Reveal delay={50} className="mb-12">
          <div className="bg-gradient-to-br from-[#faf6ee] via-[#fffdf9] to-[#faf6ee] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#f0dca8] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89626]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow-md">
                <Gift className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89626]/15 text-[#b37718] font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Everyday Analogy
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0b1f3a] mb-2">
                  Think of it Like Buying a Large Box of Mixed Sweets
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Imagine you and a group of friends want to buy a large box of mixed sweets, but individually, none of you has enough money to buy the whole box. So, everyone pools their money together, buys the box, and splits the sweets based on how much money each person contributed. A Mutual Fund works the exact same way with money!
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
                  <Users2 className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  1. The Pool
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thousands of individual and institutional investors pool their money together to create a sizable investment corpus.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Collective Capital
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-amber-50 text-[#d89626] flex items-center justify-center mb-4 group-hover:bg-[#d89626] group-hover:text-white transition-colors">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  2. The Manager
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A qualified, full-time fund manager takes this pooled money and strategically invests it into a diversified basket of assets—like stocks, government bonds, or gold.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Professional Expertise
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#d89626]/60 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-[#0b1f3a] group-hover:text-emerald-400 transition-colors">
                  <Coins className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mb-2">
                  3. The Units
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  In return, each investor receives "units" representing their proportionate share of the total pool. As the value of underlying assets grows, your unit NAV increases.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Proportionate Ownership
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. How Mutual Funds Work in 3 Simple Steps & Visual Workflow */}
        <div className="bg-[#FAF9F5] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/80 mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              HOW IT OPERATES
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Mutual Funds Work in 3 Simple Steps
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              A transparent, regulated chain connecting everyday savings with India's growth engine.
            </p>
          </Reveal>

          {/* Visual Workflow Diagram */}
          <Reveal delay={60} className="mb-10">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="px-5 py-3 rounded-xl bg-[#0b1f3a] text-white text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <Users2 className="w-4 h-4 text-[#d89626]" />
                [ Your Money ] + [ Other Investors' Money ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-amber-50 border border-amber-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#d89626]" />
                [ Pooled Fund ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-blue-50 border border-blue-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600" />
                [ Professional Fund Manager ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-purple-50 border border-purple-200 text-[#0b1f3a] text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                [ Invested in Stocks / Bonds / Gold ]
              </div>
              <div className="h-6 w-0.5 bg-[#d89626] my-1 relative">
                <ArrowDown className="w-3.5 h-3.5 text-[#d89626] absolute -bottom-1 -left-1.5" />
              </div>

              <div className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold shadow-sm inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                [ Returns & Growth Passed Back to Investors ]
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
                  You Invest
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You put in as little as ₹100 or ₹500 via a lump sum or automated monthly installment (SIP).
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  02
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  The Expert Manages
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A qualified Fund Manager researches, buys, tracks, and manages a diversified portfolio on your behalf.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                <span className="font-display text-3xl font-extrabold text-[#d89626]/40">
                  03
                </span>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a] mt-1 mb-2">
                  You Earn Returns
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Any capital growth or dividends earned by the fund are distributed back to you proportional to the units you hold.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Key Types of Mutual Funds */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              CATEGORIES & ASSET CLASSES
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Key Types of Mutual Funds
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Tailored mutual fund categories matched to your timeline, risk appetite, and goals.
            </p>
          </Reveal>

          {/* Table on Desktop */}
          <Reveal delay={70} className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b1f3a] text-white">
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Fund Type
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    What It Invests In
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Risk Level
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-sm tracking-wide">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {fundTypes.map((f, idx) => (
                  <tr
                    key={f.type}
                    className={`hover:bg-[#faf6ee]/50 transition-colors ${
                      idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-[#0b1f3a]">
                      <div className="flex items-center gap-2">
                        <span>{f.type}</span>
                        <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          {f.focus}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{f.investsIn}</td>
                    <td className="py-4 px-6 font-medium">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${f.riskBadge}`}>
                        {f.risk} Risk
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-medium">
                      {f.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Cards on Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fundTypes.map((f, idx) => (
              <Reveal key={f.type} delay={idx * 50}>
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-[#0b1f3a] text-base">{f.type}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${f.riskBadge}`}>
                        {f.risk}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      <strong className="text-slate-700">Invests in:</strong> {f.investsIn}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 bg-[#faf6ee]/60 rounded-lg p-2.5 text-xs text-slate-700">
                    <strong className="text-[#0b1f3a]">Best For:</strong> {f.bestFor}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 4. Why Invest in Mutual Funds? */}
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              CORE ADVANTAGES
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Why Invest in Mutual Funds?
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Four fundamental pillars that make mutual funds ideal for retail investors.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvestReasons.map((r, idx) => {
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
        <div className="mb-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              INDUSTRY DATA & SCALE
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              Eye-Opening Facts & Figures
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              The remarkable growth and participation powering India's mutual fund boom.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factsData.map((f, idx) => (
              <Reveal key={f.label} delay={idx * 70}>
                <div className="bg-[#0b1f3a] text-white rounded-2xl p-6 border border-white/10 hover:border-[#d89626]/60 transition-all h-full flex flex-col justify-between shadow-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#d89626]/10 rounded-full blur-2xl group-hover:bg-[#d89626]/20 transition-colors" />
                  <div className="relative z-10">
                    <span className="font-display text-2xl sm:text-[1.7rem] font-black text-[#d89626] block mb-2 leading-tight">
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

        {/* 6. Comprehensive Asset Class Comparison Table */}
        <div className="mb-16">
          <Reveal className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              PORTFOLIO ASSET ALLOCATION
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Managed Mutual Funds Compare Across Asset Classes
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Every asset class serves a distinct purpose within a well-balanced financial portfolio. Professional managed mutual funds exist alongside fixed income, direct equities, commodities, and real estate to give investors structured access to these underlying markets.
            </p>
          </Reveal>

          {/* Comparison Table Desktop */}
          <Reveal delay={70} className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#0b1f3a] text-white">
                  <th className="py-4 px-5 font-display font-bold text-xs tracking-wider">
                    Asset Class
                  </th>
                  <th className="py-4 px-5 font-display font-bold text-xs tracking-wider">
                    Primary Role
                  </th>
                  <th className="py-4 px-5 font-display font-bold text-xs tracking-wider">
                    Min. Capital
                  </th>
                  <th className="py-4 px-5 font-display font-bold text-xs tracking-wider">
                    Liquidity
                  </th>
                  <th className="py-4 px-5 font-display font-bold text-xs tracking-wider">
                    Research / Effort
                  </th>
                  <th className="py-4 px-5 font-display font-bold text-xs tracking-wider">
                    Risk & Return Profile
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assetClassComparison.map((row) => (
                  <tr
                    key={row.asset}
                    className={`transition-colors ${
                      row.highlight
                        ? "bg-[#faf6ee]/80 font-medium hover:bg-[#faf6ee]"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-[#0b1f3a]">
                      <div className="flex items-center gap-1.5">
                        {row.highlight && <Sparkles className="w-3.5 h-3.5 text-[#d89626] shrink-0" />}
                        <span>{row.asset}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-700">{row.role}</td>
                    <td className="py-4 px-5 text-slate-600">{row.minCapital}</td>
                    <td className="py-4 px-5 text-slate-600">{row.liquidity}</td>
                    <td className="py-4 px-5 text-slate-600">{row.effort}</td>
                    <td className="py-4 px-5 text-slate-700">{row.profile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Comparison Cards Mobile */}
          <div className="lg:hidden space-y-4">
            {assetClassComparison.map((row, idx) => (
              <Reveal key={row.asset} delay={idx * 50}>
                <div
                  className={`rounded-2xl p-5 border ${
                    row.highlight
                      ? "bg-[#faf6ee] border-[#f0dca8] shadow-sm"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-[#0b1f3a] text-base">{row.asset}</h4>
                    {row.highlight && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#d89626] text-white">
                        Recommended Core
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 mb-3 font-medium">
                    {row.role}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-100 mb-2">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Min Entry:</span>
                      <strong>{row.minCapital}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Liquidity:</span>
                      <strong>{row.liquidity}</strong>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    <strong className="text-[#0b1f3a]">Profile:</strong> {row.profile}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 7. Key Comparisons: How Managed Mutual Funds Complement the Market */}
        <div className="mb-14">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
              DEEP-DIVE COMPARISONS
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
              How Managed Mutual Funds Complement the Market
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisons.map((c, idx) => (
              <Reveal key={c.title} delay={idx * 60}>
                <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/90 hover:border-[#d89626]/50 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[#0b1f3a] font-bold text-xs uppercase tracking-wider mb-3">
                      <Scale className="w-3.5 h-3.5 text-[#d89626]" />
                      {c.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Call To Action Box */}
        <Reveal delay={100}>
          <div className="bg-[#faf6ee] rounded-2xl p-6 sm:p-8 border border-[#f0dca8] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#d89626] text-white flex items-center justify-center shrink-0 shadow">
                <PieChart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-[#0b1f3a]">
                  Start Your Goal-Based Mutual Fund Portfolio
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-xl">
                  Talk to our AMFI-certified advisors for customized SIP planning, tax-harvesting (ELSS), and regular portfolio rebalancing.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap px-6 py-3 rounded-lg bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm transition-colors shadow flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d89626]" />
              Start Mutual Fund SIP
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MutualFundsGuide;
