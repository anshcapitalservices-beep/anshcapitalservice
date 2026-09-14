import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Users,
  Layers,
  Sprout,
} from "lucide-react";
import { hero } from "../../mock/mock";
import Reveal from "../Reveal";
import heroBg from "../../assets/hero_bg_new.png";

const statsBadges = [
  {
    icon: Award,
    title: "19+ Years",
    subtitle: "of Experience",
  },
  {
    icon: Users,
    title: "500+",
    subtitle: "Satisfied Clients",
  },
  {
    icon: Layers,
    title: "1000+",
    subtitle: "Plans Managed",
  },
  {
    icon: Sprout,
    title: "Plan Today",
    subtitle: "for a Brighter Tomorrow",
  },
];

const Hero = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Hero Main Panoramic Section */}
      <section className="relative overflow-hidden bg-[#faf8f5] min-h-[520px] lg:min-h-[580px] flex flex-col justify-between">
        {/* Full-width background image with skyline & family */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={heroBg}
            alt="Family looking towards city skyline"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Subtle soft gradient on left for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.60) 48%, rgba(255,255,255,0.15) 68%, transparent 85%)",
            }}
          />
        </div>

        {/* Cursive text overlay on the right: "A Brighter Financial Tomorrow" */}
        <div
          className="absolute z-10 pointer-events-none select-none hidden md:block"
          style={{
            right: "4.5%",
            top: "20%",
            transform: "rotate(-8deg)",
          }}
        >
          <span
            style={{
              fontFamily: "'Dancing Script', 'Great Vibes', cursive",
              fontSize: "clamp(1.6rem, 2.5vw, 2.8rem)",
              color: "#c8903a",
              textShadow: "0 2px 14px rgba(0,0,0,0.15)",
              lineHeight: 1.25,
              letterSpacing: "0.01em",
              whiteSpace: "pre-line",
              display: "block",
            }}
          >
            {`A Brighter\nFinancial\nTomorrow`}
          </span>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-[1360px] w-full mx-auto px-4 md:px-6 relative z-10 pt-10 sm:pt-14 md:pt-16 pb-6">
          <div className="max-w-xl lg:max-w-[540px]">
            <Reveal>
              <div className="flex items-center gap-2 text-[#d89626] font-bold tracking-[0.24em] text-xs sm:text-[12.5px] uppercase mb-3.5">
                <span>FARIDABAD</span>
                <span className="text-[10px]">•</span>
                <span>SINCE DAY ONE</span>
              </div>

              <h1 className="font-display font-bold text-[#0b1f3a] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight">
                Money moves
                <br />
                made{" "}
                <span className="text-[#d89626] italic font-serif">simple.</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base md:text-[16px] leading-relaxed max-w-lg font-normal">
                {hero.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all duration-200"
                >
                  <span>{hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-[#d89626] text-[#d89626] bg-white hover:bg-[#d89626] hover:text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all duration-200"
                >
                  <span>{hero.secondaryCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Embedded Stats Badges Row (Bottom of Hero) */}
        <div className="relative z-10 w-full pb-6 md:pb-8 pt-2">
          <div className="max-w-[1360px] mx-auto px-4 md:px-6">
            <Reveal delay={120}>
              <div className="inline-flex flex-wrap md:flex-nowrap items-center gap-4 sm:gap-6 md:gap-8 bg-white/70 backdrop-blur-md py-3 px-4 sm:px-6 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgba(11,31,58,0.06)]">
                {statsBadges.map((badge, idx) => {
                  const IconComp = badge.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 py-1.5 ${
                        idx !== 0 ? "md:border-l md:border-slate-200/80 md:pl-8" : ""
                      }`}
                    >
                      <div className="h-10 w-10 rounded-xl bg-amber-50/90 flex items-center justify-center shrink-0 border border-amber-200/50 shadow-xs">
                        <IconComp className="h-5 w-5 text-[#d89626]" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-[#0b1f3a] text-sm sm:text-[15px] leading-tight">
                          {badge.title}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5 leading-tight">
                          {badge.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
