import React, { useRef } from "react";
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, testimonialsIntro } from "../../mock/mock";
import SectionHeading from "../SectionHeading";

const TestimonialCard = ({ t }) => (
  <div className="w-[340px] sm:w-[400px] md:w-[460px] bg-white rounded-2xl border border-[#d89626]/25 shadow-[0_15px_35px_-15px_rgba(11,31,58,0.18)] p-6 sm:p-7 flex flex-col justify-between shrink-0 hover:border-[#d89626] hover:shadow-[0_20px_45px_-15px_rgba(216,150,38,0.3)] hover:-translate-y-1 transition-all duration-300 select-none mx-3 group">
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="font-serif text-4xl leading-none text-[#d89626] font-bold select-none opacity-80 group-hover:opacity-100 transition-opacity">
          “
        </span>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating || 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-[#d89626] fill-[#d89626]" />
          ))}
        </div>
      </div>
      <p className="text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-normal">
        {t.quote}
      </p>
    </div>

    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
      <div className="font-display font-bold text-[#0b1f3a] text-sm sm:text-base tracking-wide">
        — {t.name}
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#faf6ee] text-[#c99a3a] border border-[#d89626]/20">
        {t.role}
      </span>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#faf6ee] py-16 md:py-24 overflow-hidden relative border-y border-[#d89626]/20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <SectionHeading
              align="left"
              eyebrow={testimonialsIntro.eyebrow}
              title={testimonialsIntro.title}
              subtitle="Hear directly from individuals, families, and businesses who have partnered with us for transparent financial guidance."
            />
          </div>

          {/* Train live indicator & manual controls */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#d89626]/30 text-xs font-semibold text-[#0b1f3a]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d89626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d89626]"></span>
              </span>
              <span>Continuous Express Track • Hover to Pause</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-[#0b1f3a] hover:text-white hover:border-[#0b1f3a] transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-navy hover:bg-[#0b1f3a] hover:text-white hover:border-[#0b1f3a] transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Train-like Animated Sliding Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#faf6ee] via-[#faf6ee]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#faf6ee] via-[#faf6ee]/80 to-transparent z-10" />

        {/* Train Track Rail Visual Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d89626]/20 to-transparent -translate-y-1/2 pointer-events-none z-0" />

        {/* Marquee Train Track Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar py-4 relative z-10"
        >
          <div className="flex shrink-0 animate-train-slow items-stretch hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
            {/* Set 1 of Train Carriages */}
            {testimonials.map((t) => (
              <TestimonialCard key={`train-1-${t.id}`} t={t} />
            ))}

            {/* Set 2 of Train Carriages for Seamless Infinite Loop */}
            {testimonials.map((t) => (
              <TestimonialCard key={`train-2-${t.id}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Train Rail Summary Banner */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 mt-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-white/70 px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
          <Sparkles className="h-4 w-4 text-[#d89626]" />
          <span>
            Delhi/NCR's Trusted Financial Partner • <strong>7042470200 | 9999227531</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
