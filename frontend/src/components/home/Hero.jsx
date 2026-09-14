import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
import heroFamilyRoadmap from "../../assets/hero_family_roadmap.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F5EC] min-h-[620px] lg:min-h-[660px]">
      <style>{`
        .hero-left-bg {
          position: absolute;
          inset: 0 auto 0 0;
          width: 53%;
          background:
            radial-gradient(circle at 15% 35%, rgba(23, 69, 105, 0.28), transparent 42%),
            linear-gradient(135deg, #062d51 0%, #052846 55%, #031f3b 100%);
          z-index: 2;
          clip-path: polygon(0 0, 100% 0, 84% 100%, 0 100%);
        }

        .hero-left-bg::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 82px;
          background: #e9a719;
          clip-path: ellipse(67% 100% at 9% 100%);
        }

        @media (max-width: 1024px) {
          .hero-left-bg {
            width: 100%;
            height: auto;
            position: relative;
            clip-path: none;
          }
          .hero-left-bg::after {
            display: none;
          }
        }
      `}</style>

      {/* Left Navy Angled Backdrop (Desktop) */}
      <div className="hero-left-bg hidden lg:block" />

      {/* Main Grid: Left HTML Content & Right Artwork Image */}
      <div className="relative max-w-[1440px] mx-auto min-h-[620px] lg:min-h-[660px] grid lg:grid-cols-[1.05fr_0.95fr] items-center">
        
        {/* Left Content */}
        <div className="relative z-10 bg-[#062d51] lg:bg-transparent px-6 sm:px-10 lg:pl-12 lg:pr-4 py-12 lg:py-16 text-white flex flex-col justify-center">
          
          {/* Eyebrow */}
          <div className="text-[13px] font-bold tracking-[5px] uppercase mb-4">
            <span className="text-[#e9a719]">FARIDABAD</span>
            <span className="text-white/60 mx-1">·</span>
            <span className="text-white/90">SINCE DAY ONE</span>
          </div>

          {/* Hero Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold leading-[1.04] tracking-[-1.5px] max-w-[700px] mb-4">
            Plan Today for a
            <br />
            <span className="text-[#e9a719]">Brighter Tomorrow.</span>
          </h1>

          {/* Hero Description */}
          <p className="text-white/90 text-base sm:text-lg lg:text-[19px] leading-[1.55] max-w-[580px] mb-6 font-normal">
            Expert guidance in Insurance, Mutual Funds and Loans to help you build a secure and prosperous future.
          </p>

          {/* Service Features Row */}
          <div className="flex items-center gap-3 sm:gap-5 max-w-[620px] mb-7">
            
            {/* Feature 1: Insurance */}
            <Link to="/services/insurance" className="flex-1 text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#f9c53e] to-[#df9b10] flex items-center justify-center text-[#06294a] shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-7 h-7 stroke-[2.2]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#e9a719] transition-colors">
                Insurance
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85">
                Protect what matters
              </p>
            </Link>

            {/* Divider */}
            <div className="w-px h-16 sm:h-20 bg-white/30 shrink-0" />

            {/* Feature 2: Mutual Funds */}
            <Link to="/services/mutual-funds" className="flex-1 text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#f9c53e] to-[#df9b10] flex items-center justify-center text-[#06294a] shadow-md group-hover:scale-105 transition-transform">
                <TrendingUp className="w-7 h-7 stroke-[2.2]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#e9a719] transition-colors">
                Mutual Funds
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85">
                Grow your wealth
              </p>
            </Link>

            {/* Divider */}
            <div className="w-px h-16 sm:h-20 bg-white/30 shrink-0" />

            {/* Feature 3: Loans */}
            <Link to="/services/loans" className="flex-1 text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#f9c53e] to-[#df9b10] flex items-center justify-center text-[#06294a] shadow-md group-hover:scale-105 transition-transform">
                <IndianRupee className="w-7 h-7 stroke-[2.2]" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-[#e9a719] transition-colors">
                Loans
              </h3>
              <p className="text-xs sm:text-[13px] text-white/85">
                Achieve your goals
              </p>
            </Link>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-[14px] bg-[#e9a719] hover:bg-[#d89626] text-[#06294a] font-bold text-sm sm:text-[15px] inline-flex items-center justify-center gap-3 shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </Link>

            <Link
              to="/services"
              className="h-[52px] sm:h-[56px] px-7 sm:px-8 rounded-[14px] bg-transparent hover:bg-white/10 border-2 border-[#e9a719] text-white font-bold text-sm sm:text-[15px] inline-flex items-center justify-center gap-3 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
          </div>

        </div>

        {/* Right Section (Full Uncropped Illustration) */}
        <div className="relative z-0 w-full h-full flex items-center justify-center lg:justify-end bg-[#F8F5EC] p-2 sm:p-4 lg:p-0">
          <img
            src={heroFamilyRoadmap}
            alt="Plan Today for a Brighter Tomorrow - ANSH Capital Services"
            className="w-full h-auto lg:h-full object-contain object-right block select-none max-h-[580px] mix-blend-multiply"
          />
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
