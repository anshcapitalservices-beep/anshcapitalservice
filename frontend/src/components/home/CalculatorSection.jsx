import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  IndianRupee,
  Percent,
  CalendarDays,
  PieChart,
  Calculator,
  Wallet,
} from "lucide-react";
import Reveal from "../Reveal";

/* ─── Formatter ─── */
const fmt = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

/* ─── Calculator Configs ─── */
const CALCULATORS = [
  { key: "sip", label: "SIP Calculator", icon: PieChart },
  { key: "mf", label: "Mutual Fund", icon: Calculator },
  { key: "emi", label: "EMI Calculator", icon: Wallet },
];

/* ─── Math ─── */
const calcSIP = (monthly, rate, years) => {
  const n = years * 12;
  const r = rate / 100 / 12;
  const invested = monthly * n;
  const futureValue = r === 0 ? invested : monthly * (((1 + r) ** n - 1) / r) * (1 + r);
  return { invested, futureValue: Math.round(futureValue), gains: Math.round(futureValue - invested) };
};

const calcMF = (lumpsum, rate, years) => {
  const r = rate / 100;
  const invested = lumpsum;
  const futureValue = lumpsum * (1 + r) ** years;
  return { invested, futureValue: Math.round(futureValue), gains: Math.round(futureValue - invested) };
};

const calcEMI = (principal, rate, years) => {
  const n = years * 12;
  const r = rate / 100 / 12;
  const emi = r === 0 ? principal / n : (principal * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const totalPayable = Math.round(emi * n);
  const interest = totalPayable - principal;
  return { principal, totalPayable, interest, emi: Math.round(emi) };
};

/* ─── Donut Chart (SVG) ─── */
const DonutChart = ({ invested, total }) => {
  const pct = total > 0 ? (invested / total) * 100 : 50;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const investedStroke = (pct / 100) * circumference;
  const growthStroke = circumference - investedStroke;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
        {/* Growth segment */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#d89626"
          strokeWidth="24"
          strokeDasharray={`${growthStroke} ${investedStroke}`}
          strokeDashoffset={-investedStroke}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          className="transition-all duration-700 ease-out"
        />
        {/* Invested segment */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#3b5a8a"
          strokeWidth="24"
          strokeDasharray={`${investedStroke} ${growthStroke}`}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-bold tracking-widest text-[#d89626] uppercase">
          {total > 0 ? "Projected" : "Result"}
        </span>
        <span className="font-sans text-xl sm:text-2xl font-extrabold text-white mt-0.5 leading-none tabular-nums tracking-tight">
          {fmt(total)}
        </span>
      </div>
    </div>
  );
};

/* ─── Slider Component ─── */
const Slider = ({ icon: IconCmp, label, value, onChange, min, max, step, suffix, prefix }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <IconCmp className="h-4 w-4 text-[#d89626]" />
          <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
            {label}
          </span>
        </div>
        <span className="text-white font-bold text-sm tabular-nums">
          {prefix}{value.toLocaleString("en-IN")}{suffix}
        </span>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full">
        <div
          className="absolute h-2 rounded-full bg-gradient-to-r from-[#d89626] to-[#e5b84a] transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-[#d89626] border-[3px] border-[#0b1f3a] shadow-lg transition-all duration-150 pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
    </div>
  );
};

/* ─── Result Card ─── */
const ResultCard = ({ label, value, highlight }) => (
  <div
    className={`rounded-xl px-4 py-3 text-center ${
      highlight
        ? "bg-[#d89626] text-[#0b1f3a]"
        : "bg-white/5 border border-white/10 text-white"
    }`}
  >
    <div className={`text-[10px] font-bold tracking-wider uppercase ${highlight ? "text-[#0b1f3a]/70" : "text-white/50"}`}>
      {label}
    </div>
    <div className={`font-sans text-lg sm:text-[19px] font-extrabold mt-0.5 tabular-nums tracking-tight ${highlight ? "text-[#0b1f3a]" : "text-white"}`}>
      {value}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════ */
const CalculatorSection = () => {
  const [active, setActive] = useState("sip");

  /* SIP State */
  const [sipMonthly, setSipMonthly] = useState(10000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  /* Mutual Fund (Lump Sum) State */
  const [mfLumpsum, setMfLumpsum] = useState(500000);
  const [mfRate, setMfRate] = useState(12);
  const [mfYears, setMfYears] = useState(10);

  /* EMI State */
  const [emiPrincipal, setEmiPrincipal] = useState(2500000);
  const [emiRate, setEmiRate] = useState(9);
  const [emiYears, setEmiYears] = useState(20);

  const sipResult = useMemo(() => calcSIP(sipMonthly, sipRate, sipYears), [sipMonthly, sipRate, sipYears]);
  const mfResult = useMemo(() => calcMF(mfLumpsum, mfRate, mfYears), [mfLumpsum, mfRate, mfYears]);
  const emiResult = useMemo(() => calcEMI(emiPrincipal, emiRate, emiYears), [emiPrincipal, emiRate, emiYears]);

  const headings = {
    sip: { pre: "Mutual Fund", highlight: "SIP Calculator", desc: "Plan your future investments smartly. Estimate returns and start building wealth systematically — starting with as little as ₹500/month." },
    mf: { pre: "Mutual Fund", highlight: "Lump Sum Calculator", desc: "See how a one-time investment can grow over time with the power of compounding. Plan your wealth with confidence." },
    emi: { pre: "Loan", highlight: "EMI Calculator", desc: "Calculate your monthly EMI for home, personal, or business loans. Compare tenures and interest rates to find the best fit." },
  };

  const h = headings[active];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* Top heading */}
        <Reveal>
          <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
            PLAN SMARTLY
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
            {h.pre}{" "}
            <span className="text-[#d89626] italic">{h.highlight}</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-[15px] max-w-2xl leading-relaxed">
            {h.desc}
          </p>
        </Reveal>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CALCULATORS.map((c) => {
            const IC = c.icon;
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0b1f3a] text-white shadow-lg"
                    : "bg-[#faf6ee] text-[#0b1f3a] hover:bg-[#f0dca8]"
                }`}
              >
                <IC className={`h-4 w-4 ${isActive ? "text-[#d89626]" : "text-[#c99a3a]"}`} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Calculator Card */}
        <div className="mt-8 bg-[#0b1f3a] rounded-2xl shadow-[0_40px_80px_-24px_rgba(11,31,58,0.6)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Sliders */}
            <div className="p-6 sm:p-8 lg:p-10">
              {active === "sip" && (
                <>
                  <Slider icon={IndianRupee} label="Monthly Investment" value={sipMonthly} onChange={setSipMonthly} min={500} max={200000} step={500} prefix="₹" suffix="" />
                  <Slider icon={Percent} label="Expected Return (P.A.)" value={sipRate} onChange={setSipRate} min={1} max={30} step={0.5} prefix="" suffix="%" />
                  <Slider icon={CalendarDays} label="Time Period" value={sipYears} onChange={setSipYears} min={1} max={40} step={1} prefix="" suffix=" yrs" />

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <ResultCard label="Invested" value={fmt(sipResult.invested)} />
                    <ResultCard label="Est. Gains" value={fmt(sipResult.gains)} />
                    <ResultCard label="Future Value" value={fmt(sipResult.futureValue)} highlight />
                  </div>
                </>
              )}

              {active === "mf" && (
                <>
                  <Slider icon={IndianRupee} label="Lump Sum Investment" value={mfLumpsum} onChange={setMfLumpsum} min={5000} max={10000000} step={5000} prefix="₹" suffix="" />
                  <Slider icon={Percent} label="Expected Return (P.A.)" value={mfRate} onChange={setMfRate} min={1} max={30} step={0.5} prefix="" suffix="%" />
                  <Slider icon={CalendarDays} label="Time Period" value={mfYears} onChange={setMfYears} min={1} max={40} step={1} prefix="" suffix=" yrs" />

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <ResultCard label="Invested" value={fmt(mfResult.invested)} />
                    <ResultCard label="Est. Gains" value={fmt(mfResult.gains)} />
                    <ResultCard label="Future Value" value={fmt(mfResult.futureValue)} highlight />
                  </div>
                </>
              )}

              {active === "emi" && (
                <>
                  <Slider icon={IndianRupee} label="Loan Amount" value={emiPrincipal} onChange={setEmiPrincipal} min={50000} max={50000000} step={50000} prefix="₹" suffix="" />
                  <Slider icon={Percent} label="Interest Rate (P.A.)" value={emiRate} onChange={setEmiRate} min={1} max={20} step={0.25} prefix="" suffix="%" />
                  <Slider icon={CalendarDays} label="Loan Tenure" value={emiYears} onChange={setEmiYears} min={1} max={30} step={1} prefix="" suffix=" yrs" />

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <ResultCard label="Monthly EMI" value={fmt(emiResult.emi)} highlight />
                    <ResultCard label="Total Interest" value={fmt(emiResult.interest)} />
                    <ResultCard label="Total Payable" value={fmt(emiResult.totalPayable)} />
                  </div>
                </>
              )}
            </div>

            {/* Right: Donut Chart & CTA */}
            <div className="bg-[#081627] p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center gap-6 border-t lg:border-t-0 lg:border-l border-white/5">
              {active === "sip" && (
                <DonutChart invested={sipResult.invested} total={sipResult.futureValue} />
              )}
              {active === "mf" && (
                <DonutChart invested={mfResult.invested} total={mfResult.futureValue} />
              )}
              {active === "emi" && (
                <DonutChart invested={emiResult.principal} total={emiResult.totalPayable} />
              )}

              {/* Legend */}
              <div className="flex items-center gap-5 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3b5a8a]" />
                  {active === "emi" ? "Principal" : "Invested"}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d89626]" />
                  {active === "emi" ? "Interest" : "Growth"}
                </span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {active === "emi" ? "Get Best Loan Rate" : "Lock In This Strategy"}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="text-[11px] text-white/40 text-center max-w-xs leading-relaxed">
                {active === "emi"
                  ? "Compare 25+ lenders. Estimates only, actual EMI may vary."
                  : "Start with as little as ₹500/month. Estimates only, not guaranteed returns."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
