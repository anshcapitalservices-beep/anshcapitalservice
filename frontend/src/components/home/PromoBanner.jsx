import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Hourglass, Shield } from "lucide-react";
import { promoBanner } from "../../mock/mock";
import Reveal from "../Reveal";

const PromoBanner = () => {
  return (
    <section className="bg-white pt-2 pb-10">
      <div className="max-w-[1360px] mx-auto px-4 md:px-6">
        <Reveal className="bg-[#061a3b] rounded-2xl px-6 md:px-8 py-5 md:py-6 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Hourglass & headline */}
          <div className="flex items-center gap-4 flex-1">
            <div className="h-12 w-12 rounded-full border-2 border-[#d89626] flex items-center justify-center shrink-0">
              <Hourglass className="h-6 w-6 text-[#d89626]" />
            </div>
            <p className="text-white font-bold text-base md:text-lg lg:text-[19px] leading-snug">
              {promoBanner.left}
            </p>
          </div>

          {/* Middle: Shield & Text */}
          <div className="flex items-center gap-3.5 px-0 lg:px-6 lg:border-l lg:border-white/15">
            <div className="shrink-0">
              <Shield className="h-7 w-7 text-[#d89626]" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm md:text-[15px] leading-tight">
                {promoBanner.middleTitle || "The Right Financial Decision Today"}
              </div>
              <div className="text-white/70 text-xs md:text-sm mt-0.5">
                {promoBanner.middleSubtitle || "Can Change Your Tomorrow."}
              </div>
            </div>
          </div>

          {/* Right: Gold CTA button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all shrink-0 whitespace-nowrap"
          >
            <span>{promoBanner.cta}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default PromoBanner;
