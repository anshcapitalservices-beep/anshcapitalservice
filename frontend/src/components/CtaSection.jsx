import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ctaSection, company } from "../mock/mock";
import { WhatsappIcon } from "./FloatingButtons";
import Reveal from "./Reveal";

const CtaSection = () => {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* decorative gold arrow */}
      <svg
        className="absolute right-0 bottom-0 h-full w-1/3 opacity-90 hidden md:block pointer-events-none"
        viewBox="0 0 400 200"
        fill="none"
        preserveAspectRatio="xMaxYMax meet"
      >
        <path
          d="M20 180 C 140 180, 260 140, 360 30"
          stroke="#c99a3a"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M360 30 L 340 55 M360 30 L 332 22"
          stroke="#c99a3a"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:justify-between">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-white leading-tight">
              {ctaSection.title}
            </h2>
            <p className="mt-4 text-white/60 text-[15px] leading-relaxed">
              {ctaSection.description}
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
            >
              {ctaSection.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-gold hover:text-gold text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
            >
              <WhatsappIcon className="h-5 w-5" />
              {ctaSection.secondaryCta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
