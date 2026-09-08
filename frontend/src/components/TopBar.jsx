import React from "react";
import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#061a3b] text-white text-[13px] border-b border-navy/40 relative z-50">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Left message */}
        <div className="flex items-center justify-center md:justify-start text-center md:text-left w-full md:w-auto">
          <div className="text-[11px] sm:text-[12.5px] md:text-[13px] text-white flex items-center justify-center md:justify-start gap-1 sm:gap-1.5 flex-wrap font-normal leading-tight">
            <span className="text-white/95 whitespace-nowrap">Market opportunities don't wait.</span>
            <span className="text-[#d89626] font-bold text-xs sm:text-sm">›</span>
            <span className="text-[#d89626] font-semibold whitespace-nowrap">Plan today.</span>
            <span className="text-[#d89626] font-bold text-xs sm:text-sm">›</span>
            <span className="text-white/80 whitespace-nowrap">Secure tomorrow.</span>
          </div>
        </div>

        {/* Phone numbers */}
        <div className="flex items-center justify-center md:justify-end gap-2 shrink-0 text-[11px] sm:text-[12.5px] md:text-[13px] font-medium w-full md:w-auto">
          <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#d89626] fill-[#d89626] shrink-0" />
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <a
              href="tel:+917042470200"
              className="text-white/90 hover:text-[#d89626] transition-colors whitespace-nowrap"
            >
              +91 70424 70200
            </a>
            <span className="text-white/40">/</span>
            <a
              href="tel:+919999227531"
              className="text-white/90 hover:text-[#d89626] transition-colors whitespace-nowrap"
            >
              +91 99992 27531
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
