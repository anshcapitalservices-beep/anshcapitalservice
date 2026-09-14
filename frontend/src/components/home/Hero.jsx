import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
import Reveal from "../Reveal";
import heroBannerPlanToday from "../../assets/hero_banner_plan_today.png";

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
    <div className="relative w-full bg-[#081d3d] overflow-hidden">
      {/* Desktop / Tablet: Full Panoramic Banner Visual with Interactive Overlay */}
      <div className="hidden md:block relative w-full">
        <div className="max-w-[1440px] mx-auto relative">
          <img
            src={heroBannerPlanToday}
            alt="Plan Today for a Brighter Tomorrow - ANSH Capital Services"
            className="w-full h-auto block select-none"
          />

          {/* Interactive CTA Buttons Overlay positioned on the left action area */}
          <div
            className="absolute z-20 flex items-center gap-3.5"
            style={{
              left: "5.5%",
              bottom: "14%",
            }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-[#081d3d] font-bold text-xs lg:text-sm px-5 lg:px-6 py-2.5 lg:py-3.5 rounded-lg shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#081d3d]/90 hover:bg-[#081d3d] border border-[#d89626]/70 text-white font-semibold text-xs lg:text-sm px-5 lg:px-6 py-2.5 lg:py-3.5 rounded-lg shadow-md transition-all hover:scale-105 active:scale-95 backdrop-blur-xs"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Invisible interactive click areas for the 3 service icons */}
          <div
            className="absolute z-20 flex items-center justify-between"
            style={{
              left: "4.5%",
              bottom: "29%",
              width: "36%",
              height: "18%",
            }}
          >
            {servicesBadges.map((badge, idx) => (
              <Link
                key={idx}
                to={badge.to}
                className="w-1/3 h-full cursor-pointer hover:opacity-80 transition-opacity"
                title={`Explore ${badge.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Clean Responsive Layout */}
      <div className="md:hidden relative bg-[#081d3d] text-white px-5 py-10">
        <Reveal>
          <div className="flex items-center gap-2 text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
            <span>FARIDABAD</span>
            <span className="text-[10px]">•</span>
            <span>SINCE DAY ONE</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Plan Today for a
            <br />
            <span className="text-[#d89626] font-serif">Brighter Tomorrow.</span>
          </h1>

          <p className="mt-4 text-white/80 text-sm leading-relaxed">
            Expert guidance in Insurance, Mutual Funds and Loans to help you build a secure and prosperous future.
          </p>

          {/* 3 Service Badges */}
          <div className="mt-6 grid grid-cols-3 gap-2 border-y border-white/15 py-4">
            {servicesBadges.map((badge, idx) => {
              const IconComp = badge.icon;
              return (
                <Link
                  key={idx}
                  to={badge.to}
                  className="text-center flex flex-col items-center group"
                >
                  <div className="h-10 w-10 rounded-full bg-[#d89626]/15 border border-[#d89626] flex items-center justify-center mb-2 group-hover:bg-[#d89626] transition-colors">
                    <IconComp className="h-5 w-5 text-[#d89626] group-hover:text-[#081d3d] transition-colors" />
                  </div>
                  <div className="font-bold text-xs text-white group-hover:text-[#d89626] transition-colors">
                    {badge.title}
                  </div>
                  <div className="text-[10px] text-white/60 mt-0.5 leading-tight">
                    {badge.subtitle}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-[#081d3d] font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#081d3d] border border-[#d89626] text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Mobile artwork banner preview */}
        <div className="mt-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <img
            src={heroBannerPlanToday}
            alt="ANSH Capital Services - Plan Today for a Brighter Tomorrow"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
