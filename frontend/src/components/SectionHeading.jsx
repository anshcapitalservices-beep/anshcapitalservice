import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
  children,
}) => {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={`font-display text-3xl md:text-[2.3rem] font-bold leading-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-[15px] leading-relaxed ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
