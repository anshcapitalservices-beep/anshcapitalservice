import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
import Reveal from "../Reveal";
import heroFamilyRoadmap from "../../assets/hero_family_roadmap.png";

const servicesBadges = [
  {
    icon: Shield,
    title: "Insurance",
    subtitle: "Protect what matters",
    to: "/services/insurance",
  },
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    subtitle: "Grow your wealth",
    to: "/services/mutual-funds",
  },
  {
    icon: IndianRupee,
    title: "Loans",
    subtitle: "Achieve your goals",
    to: "/services/loans",
  },
];

const Hero = () => {
  return (
    <section className="relative w-full bg-[#061a3b] overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="relative max-w-[1440px] mx-auto min-h-[540px] lg:min-h-[580px] grid lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left Section (HTML / CSS Content) */}
        <div className="relative z-20 px-6 sm:px-10 lg:pl-12 lg:pr-6 py-12 md:py-16 flex flex-col justify-center">
          <Reveal>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[#d89626] font-bold tracking-[0.25em] text-xs uppercase mb-4">
              <span>FARIDABAD</span>
              <span className="text-[10px]">•</span>
              <span>SINCE DAY ONE</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] tracking-tight">
              Plan Today for a
              <br />
              <span className="text-[#d89626] italic font-display">Brighter Tomorrow.</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Expert guidance in Insurance, Mutual Funds and Loans to help you build a secure and prosperous future.
            </p>

            {/* 3 Service Badges Row with Vertical Dividers */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg py-2">
              {servicesBadges.map((badge, idx) => {
                const IconComp = badge.icon;
                return (
                  <Link
                    key={idx}
                    to={badge.to}
                    className={`flex flex-col items-center text-center group ${
                      idx !== 0 ? "border-l border-white/20 pl-3 sm:pl-4" : ""
                    }`}
                  >
                    <div className="h-12 w-12 rounded-full bg-[#d89626] flex items-center justify-center mb-2.5 shadow-md group-hover:scale-105 transition-transform">
                      <IconComp className="h-6 w-6 text-[#061a3b]" />
                    </div>
                    <div className="font-display font-bold text-white text-sm sm:text-[15px] group-hover:text-[#d89626] transition-colors leading-tight">
                      {badge.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-tight">
                      {badge.subtitle}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-[#061a3b] font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-[#d89626] bg-transparent hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Right Section (Roadmap Illustration + Family) */}
        <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden lg:pl-0">
          <div className="relative w-full h-full flex items-center justify-end">
            <img
              src={heroFamilyRoadmap}
              alt="ANSH Capital Services - Family Financial Roadmap"
              className="w-full h-auto lg:h-full object-contain lg:object-cover object-center select-none"
            />

            {/* Watermark Script */}
            <div
              className="absolute z-20 pointer-events-none select-none hidden sm:block"
              style={{
                right: "4%",
                top: "22%",
                transform: "rotate(-8deg)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Dancing Script', 'Great Vibes', cursive",
                  fontSize: "clamp(1.4rem, 2vw, 2.3rem)",
                  color: "#c8903a",
                  textShadow: "0 2px 12px rgba(0,0,0,0.12)",
                  lineHeight: 1.25,
                  letterSpacing: "0.01em",
                  whiteSpace: "pre-line",
                  display: "block",
                }}
              >
                {`A Brighter\nFinancial\nTomorrow`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Golden Wave Ribbon */}
      <div className="relative w-full z-20 border-t border-[#d89626]/30 bg-gradient-to-r from-[#061a3b] via-[#0b1f3a] to-[#061a3b] py-2 px-6">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-slate-400 font-medium tracking-widest uppercase">
          <span className="hidden sm:inline text-[#d89626]/80">Suraksha Bhi.. Samriddhi Bhi..</span>
          <span className="ml-auto text-white/70 tracking-[0.25em]">PEOPLE • PLANS • PROGRESS.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
