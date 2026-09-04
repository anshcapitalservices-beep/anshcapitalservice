import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageHeader = ({ eyebrow, title, subtitle, current }) => {
  return (
    <section className="bg-navy relative overflow-hidden">
      <svg
        className="absolute right-0 top-0 h-full w-1/3 opacity-70 hidden md:block pointer-events-none"
        viewBox="0 0 400 240"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        <path
          d="M20 210 C 150 200, 260 150, 370 40"
          stroke="#c99a3a"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M370 40 L 350 62 M370 40 L 344 34"
          stroke="#c99a3a"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14 md:py-16 relative z-10">
        {eyebrow && (
          <p className="text-gold font-semibold tracking-[0.22em] text-xs uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gold">{current}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
