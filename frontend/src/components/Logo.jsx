import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo-transparent.png";

/**
 * ANSH Capital Services official logo
 * variant: "dark" (for light backgrounds) or "light" (for dark backgrounds).
 */
const Logo = ({ variant = "dark", className = "", showText = true, size = "md" }) => {
  const textMain = variant === "light" ? "text-white" : "text-navy";
  const textSub = variant === "light" ? "text-gold-light" : "text-gold";

  const imgHeight = size === "lg" ? "h-14" : size === "sm" ? "h-9" : "h-11";

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <div className={`shrink-0 flex items-center justify-center ${variant === "light" ? "bg-white p-1 rounded-xl shadow-md" : ""}`}>
        <img
          src={logoImg}
          alt="ANSH Capital Services Logo"
          className={`${imgHeight} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
      {showText && (
        <div className="leading-none flex flex-col justify-center">
          <div
            className={`font-display text-[1.35rem] font-bold tracking-wide ${textMain}`}
          >
            ANSH
          </div>
          <div
            className={`text-[0.58rem] font-semibold tracking-[0.24em] mt-0.5 ${textSub}`}
          >
            CAPITAL SERVICES
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;

