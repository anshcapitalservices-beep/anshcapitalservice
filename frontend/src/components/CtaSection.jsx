import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { company } from "../mock/mock";
import ConsultationForm from "./ConsultationForm";
import Reveal from "./Reveal";

const CtaSection = () => {
  return (
    <section className="bg-[#faf6ee] py-14 md:py-20 relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
          <circle cx="400" cy="150" r="250" stroke="#d89626" strokeWidth="1" />
          <circle cx="350" cy="200" r="180" stroke="#d89626" strokeWidth="1" />
          <circle cx="300" cy="250" r="120" stroke="#d89626" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left — Copy */}
          <Reveal>
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              FREE WEALTH REVIEW
            </p>
            <h2 className="font-display text-3xl md:text-[2.3rem] font-bold text-[#0b1f3a] leading-[1.15]">
              Your Money Deserves{" "}
              <span className="text-[#d89626] italic font-display">
                A Plan, Not A Guess
              </span>
            </h2>
            <p className="mt-5 text-slate-500 text-[15px] leading-relaxed max-w-md">
              Book a free, no-obligation consultation with an ACS wealth
              advisor. We'll review where you stand and map the fastest honest
              route to your goals.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4 text-red-500" />
                </div>
                <span className="text-sm font-semibold text-red-600">
                  Only 3 free review slots remaining this week
                </span>
              </div>
              {[
                "100% confidential — your data never leaves us",
                "No obligation advisory, no product pushing",
                "AMFI registered, 19+ years, 500+ families",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-[#faf6ee] border border-[#e5d4a1] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#d89626]" />
                  </div>
                  <span className="text-sm text-slate-600">{text}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm text-slate-500">
              Prefer to talk?{" "}
              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="text-[#d89626] font-semibold hover:underline"
              >
                {company.phones[0]}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${company.phones[1].replace(/\s/g, "")}`}
                className="text-[#d89626] font-semibold hover:underline"
              >
                {company.phones[1]}
              </a>
            </p>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={120}>
            <ConsultationForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
