import React from "react";
import {
  Shield,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

const tickerItems = [
  {
    icon: Sparkles,
    text: "MARKET OPPORTUNITIES DON'T WAIT. PLAN TODAY. SECURE TOMORROW.",
  },
  {
    icon: Shield,
    text: "INSTANT APPROVAL & SEAMLESS ONBOARDING",
  },
  {
    icon: TrendingUp,
    text: "SMART MUTUAL FUNDS & SIP WEALTH CREATION",
  },
  {
    icon: Award,
    text: "TRUSTED BY 5,000+ HAPPY INVESTORS",
  },
  {
    icon: Clock,
    text: "RETIREMENT PLANNING & PORTFOLIO MANAGEMENT",
  },
  {
    icon: Zap,
    text: "FAST, TRANSPARENT & 100% SECURE ADVISORY",
  },
  {
    icon: CheckCircle2,
    text: "ZERO HIDDEN CHARGES • MAXIMUM FINANCIAL GROWTH",
  },
];

const TickerBar = () => {
  return (
    <div className="relative bg-[#061a3b] border-y border-[#d89626]/30 overflow-hidden select-none z-30 shadow-inner">
      <div className="flex items-center h-8 sm:h-9">
        {/* Left gold live badge */}
        <div className="relative z-20 flex items-center gap-1.5 bg-[#d89626] text-[#061a3b] px-3 sm:px-3.5 h-full shrink-0 shadow-[2px_0_10px_rgba(0,0,0,0.3)] font-extrabold text-[11px] sm:text-xs uppercase tracking-wider">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#061a3b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#061a3b]"></span>
          </span>
          <span className="hidden xs:inline">LIVE</span>
        </div>

        {/* Marquee scrolling track */}
        <div className="relative flex-1 overflow-hidden flex items-center mask-fade">
          <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
            {/* First set of items */}
            {tickerItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`t1-${idx}`} className="flex items-center">
                  <span className="inline-flex items-center gap-1.5 text-[#e5a93b] hover:text-white transition-colors text-[11px] sm:text-[12.5px] font-bold tracking-wider uppercase px-4 sm:px-6">
                    <Icon className="h-3.5 w-3.5 text-[#e5a93b] shrink-0" />
                    {item.text}
                  </span>
                  <span className="text-[#e5a93b]/50 text-xs select-none">•</span>
                </div>
              );
            })}

            {/* Second identical set for seamless infinite loop */}
            {tickerItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={`t2-${idx}`} className="flex items-center">
                  <span className="inline-flex items-center gap-1.5 text-[#e5a93b] hover:text-white transition-colors text-[11px] sm:text-[12.5px] font-bold tracking-wider uppercase px-4 sm:px-6">
                    <Icon className="h-3.5 w-3.5 text-[#e5a93b] shrink-0" />
                    {item.text}
                  </span>
                  <span className="text-[#e5a93b]/50 text-xs select-none">•</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
