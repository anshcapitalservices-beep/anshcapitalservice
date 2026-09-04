import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials, testimonialsIntro } from "../../mock/mock";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const TestimonialCard = ({ t }) => (
  <div className="bg-white rounded-xl border border-slate-100 shadow-[0_18px_40px_-24px_rgba(11,31,58,0.25)] p-6 h-full flex flex-col">
    <Quote className="h-8 w-8 text-gold/70 mb-3" />
    <p className="text-[14.5px] text-slate-600 leading-relaxed flex-1">
      {t.quote}
    </p>
    <div className="flex items-center gap-3 mt-5">
      <img
        src={t.avatar}
        alt={t.name}
        className="h-11 w-11 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-navy text-sm">{t.name}</div>
        <div className="text-xs text-slate-500">{t.role}</div>
      </div>
    </div>
    <div className="flex gap-0.5 mt-3">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-gold fill-gold" />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const [offset, setOffset] = useState(0);
  const len = testimonials.length;

  const visible = [0, 1, 2].map((k) => testimonials[(offset + k) % len]);
  const prev = () => setOffset((o) => (o - 1 + len) % len);
  const next = () => setOffset((o) => (o + 1) % len);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow={testimonialsIntro.eyebrow}
          title={testimonialsIntro.title}
        />

        <div className="mt-12 flex items-center gap-3 md:gap-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden md:flex h-11 w-11 rounded-full border border-slate-200 items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors shrink-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <Reveal
                key={`${t.id}-${offset}`}
                delay={i * 90}
                className={i === 2 ? "hidden lg:block" : i === 1 ? "hidden md:block" : ""}
              >
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="hidden md:flex h-11 w-11 rounded-full border border-slate-200 items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors shrink-0"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="md:hidden h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center text-navy"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setOffset(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === offset ? "w-6 bg-gold" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="md:hidden h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center text-navy"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
