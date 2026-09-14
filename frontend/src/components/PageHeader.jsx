import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const defaultBgImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80";

const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  current,
  bgImage = defaultBgImage,
}) => {
  return (
    <section className="relative bg-[#06152b] overflow-hidden">
      {/* Background image with multi-layer deep gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title || "Page Header Background"}
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-700"
        />
        {/* Navy gradient scrim to keep text ultra sharp and legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06152b] via-[#06152b]/90 to-[#0b1f3a]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152b] via-transparent to-transparent opacity-90" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14 md:py-18 relative z-20">
        {eyebrow && (
          <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/80 max-w-2xl text-sm sm:text-base leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-white/60">
          <Link to="/" className="hover:text-[#d89626] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#d89626]/70" />
          <span className="text-[#d89626] font-medium">{current}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
