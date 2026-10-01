import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { investIntro, investmentOptions, investFeatures } from "../../mock/mock";
import { Icon } from "../iconMap";
import Reveal from "../Reveal";

const InvestmentOptions = () => {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_2.1fr] gap-10 items-center">
          {/* Left */}
          <Reveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              {investIntro.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-[2.1rem] font-bold text-white leading-tight">
              {investIntro.titleLine1}
              <br />
              {investIntro.titleLine2}
            </h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
              {investIntro.description}
            </p>
            <Link
              to="/services#products"
              className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
            >
              {investIntro.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {investmentOptions.map((opt, i) => (
              <Reveal key={opt.id} delay={i * 80}>
                <Link
                  to={`/products/${opt.id}`}
                  className="group block relative rounded-xl overflow-hidden h-52 md:h-60"
                >
                  <img
                    loading="lazy" decoding="async"
                    src={opt.image}
                    alt={opt.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="h-0.5 w-8 bg-gold mb-2 group-hover:w-14 transition-all duration-300" />
                    <h3 className="font-display text-lg font-bold text-white">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-white/70 mt-0.5">{opt.subtitle}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {investFeatures.map((f, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 ${
                i !== 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""
              }`}
            >
              <Icon name={f.icon} className="h-8 w-8 text-gold shrink-0" />
              <p className="text-sm text-white/80 font-medium leading-snug">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
