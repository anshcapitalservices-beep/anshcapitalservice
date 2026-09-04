import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  Award,
  Layers,
} from "lucide-react";
import { hero } from "../../mock/mock";
import Reveal from "../Reveal";
import heroRightFaded from "../../assets/hero_right_faded.png";

const Hero = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Whole background hero image on the right fading seamlessly into white on the left */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none z-0 overflow-hidden hidden md:block">
        <img
          src={heroRightFaded}
          alt="Hero Background Skyline"
          className="absolute right-0 top-0 h-full w-full object-cover object-right"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-6 relative z-10 pt-10 md:pt-16 pb-8 md:pb-12 min-h-[460px] lg:min-h-[500px] flex flex-col justify-between">
        {/* Top: Left Typography and CTAs */}
        <div className="max-w-xl lg:max-w-[540px] pt-2">
          <Reveal>
            <div className="flex items-center gap-2 text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-4">
              <span>FARIDABAD</span>
              <span className="text-[9px]">•</span>
              <span>SINCE DAY ONE</span>
            </div>

            <h1 className="font-display font-extrabold text-[#0b1f3a] text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] tracking-tight">
              Money moves
              <br />
              made <span className="text-[#d89626]">simple.</span>
            </h1>

            <p className="mt-5 text-slate-600 text-base md:text-[16.5px] leading-relaxed max-w-lg font-normal">
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all duration-200"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-[#d89626] text-[#d89626] bg-white/90 hover:bg-[#d89626] hover:text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all duration-200 backdrop-blur-xs"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Mobile background visual for small screens */}
        <div className="md:hidden mt-8 rounded-xl overflow-hidden shadow-md">
          <img
            src={heroRightFaded}
            alt="Hero Background Skyline"
            className="w-full h-[240px] object-cover object-right"
          />
        </div>
      </div>

      {/* Stats Row - 4 Columns */}
      <div className="border-t border-slate-100 bg-white relative z-10">
        <div className="max-w-[1360px] mx-auto px-4 md:px-6 py-8">
          <Reveal delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center">
              {/* Stat 1 */}
              <div className="flex items-center gap-3.5 px-2 md:px-4">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-[#d89626]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#0b1f3a]">
                    16+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3.5 px-2 md:px-4 md:border-l md:border-slate-200">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-[#d89626]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#0b1f3a]">
                    1000+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3.5 px-2 md:px-4 md:border-l md:border-slate-200">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Layers className="h-6 w-6 text-[#d89626]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#0b1f3a]">
                    15K+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Plans Managed
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3.5 px-2 md:px-4 md:border-l md:border-slate-200">
                <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6 text-[#d89626]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#0b1f3a]">
                    AI Trusted
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Advice & Support
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
