import React from "react";
import { Phone } from "lucide-react";
import metroTrain from "../assets/metro_train.png";
import topbarLogo from "../assets/topbar_logo.png";

const TopBar = () => {
  return (
    <div className="bg-[#061a3b] text-white text-[13px] border-b border-navy/40 relative z-50">
      <div className="max-w-[1360px] mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-4">
        {/* Left message with train icon */}
        <div className="flex items-center gap-2.5">
          <img
            src={topbarLogo}
            alt="ANSH Icon"
            className="h-5 w-auto object-contain hidden sm:inline-block shrink-0"
          />
          <div className="text-[12.5px] md:text-[13px] text-white flex items-center gap-1.5 flex-wrap font-normal">
            <span className="text-white/95">Market opportunities don't wait.</span>
            <span className="text-[#d89626] font-bold text-sm">›</span>
            <span className="text-[#d89626] font-semibold">Plan today.</span>
            <span className="text-[#d89626] font-bold text-sm">›</span>
            <span className="text-white/80">Secure tomorrow.</span>
          </div>
        </div>

        {/* Center train illustration */}
        <div className="hidden lg:flex items-center justify-center shrink-0">
          <img
            src={metroTrain}
            alt="Train"
            className="h-[22px] w-auto object-contain"
          />
        </div>

        {/* Phone numbers */}
        <div className="flex items-center gap-2 shrink-0 text-[12.5px] md:text-[13px] font-medium">
          <Phone className="h-3.5 w-3.5 text-[#d89626] fill-[#d89626]" />
          <div className="flex items-center gap-1.5">
            <a
              href="tel:+917042470200"
              className="text-white/90 hover:text-[#d89626] transition-colors"
            >
              +91 70424 70200
            </a>
            <span className="text-white/40">/</span>
            <a
              href="tel:+919999227531"
              className="text-white/90 hover:text-[#d89626] transition-colors"
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
