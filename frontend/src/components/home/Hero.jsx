import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
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
    <section className="relative w-full bg-[#052846] overflow-hidden">
      {/* Container with Split Navy Left and Light Cream Right */}
      <div className="relative w-full flex flex-col lg:flex-row items-stretch justify-between">
        
        {/* Left Section (Navy Background with Pure HTML/CSS Content) */}
        <div className="w-full lg:w-[48%] xl:w-[46%] bg-[#052846] px-6 sm:px-10 lg:pl-12 lg:pr-8 py-12 lg:py-16 text-white flex flex-col justify-center relative z-10 shrink-0">
          
          {/* Eyebrow */}
          <div className="text-[12px] sm:text-[13px] font-bold tracking-[4px] uppercase mb-4 text-[#e9a719]">
            <span>FARIDABAD</span>
            <span className="text-white/60 mx-1.5">·</span>
            <span className="text-white/90">SINCE DAY ONE</span>
          </div>

          {/* Hero Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-bold leading-[1.08] tracking-tight max-w-[620px] mb-4">
            Plan Today for a
            <br />
            <span className="text-[#e9a719]">Brighter Tomorrow.</span>
          </h1>

          {/* Hero Description */}
          <p className="text-white/85 text-sm sm:text-base lg:text-[16px] leading-[1.6] max-w-[540px] mb-6 font-normal">
            Expert guidance in Insurance, Mutual Funds and Loans to help you build a secure and prosperous future.
          </p>

          {/* Service Features Row */}
          <div className="flex items-center gap-3 sm:gap-5 max-w-[560px] mb-7">
            
            {/* Feature 1: Insurance */}
            <Link to="/services/insurance" className="flex-1 text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#f9c53e] to-[#df9b10] flex items-center justify-center text-[#06294a] shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-[#e9a719] transition-colors">
                Insurance
              </h3>
              <p className="text-[11px] sm:text-xs text-white/75">
                Protect what matters
              </p>
            </Link>

            {/* Divider */}
            <div className="w-px h-14 sm:h-16 bg-white/20 shrink-0" />

            {/* Feature 2: Mutual Funds */}
            <Link to="/services/mutual-funds" className="flex-1 text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#f9c53e] to-[#df9b10] flex items-center justify-center text-[#06294a] shadow-md group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-[#e9a719] transition-colors">
                Mutual Funds
              </h3>
              <p className="text-[11px] sm:text-xs text-white/75">
                Grow your wealth
              </p>
            </Link>

            {/* Divider */}
            <div className="w-px h-14 sm:h-16 bg-white/20 shrink-0" />

            {/* Feature 3: Loans */}
            <Link to="/services/loans" className="flex-1 text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#f9c53e] to-[#df9b10] flex items-center justify-center text-[#06294a] shadow-md group-hover:scale-105 transition-transform">
                <IndianRupee className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-[#e9a719] transition-colors">
                Loans
              </h3>
              <p className="text-[11px] sm:text-xs text-white/75">
                Achieve your goals
              </p>
            </Link>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              to="/contact"
              className="h-[50px] sm:h-[54px] px-6 sm:px-7 rounded-xl bg-[#e9a719] hover:bg-[#d89626] text-[#06294a] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              to="/services"
              className="h-[50px] sm:h-[54px] px-6 sm:px-7 rounded-xl bg-transparent hover:bg-white/10 border-2 border-[#e9a719] text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

        </div>

        {/* Right Illustration Section (100% Full Uncropped Image) */}
        <div className="w-full lg:w-[52%] xl:w-[54%] bg-[#f8f5ed] flex items-center justify-center relative z-0 p-2 sm:p-4 lg:p-0">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={heroFamilyRoadmap}
              alt="Plan Today for a Brighter Tomorrow - ANSH Capital Services"
              className="w-full h-auto object-contain block max-w-full"
            />
          </div>
        </div>

      </div>

      {/* Bottom Curve Ribbon */}
      <div className="relative w-full z-20 border-t border-[#e9a719]/40 bg-gradient-to-r from-[#031f3b] via-[#052846] to-[#031f3b] py-2.5 px-6">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs text-white/70 font-semibold tracking-[4px] uppercase">
          <span className="hidden sm:inline text-[#e9a719] tracking-[2px]">Suraksha Bhi.. Samriddhi Bhi..</span>
          <span className="ml-auto">
            PEOPLE <span className="text-[#e9a719] mx-1">•</span> PLANS <span className="text-[#e9a719] mx-1">•</span> PROGRESS.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
