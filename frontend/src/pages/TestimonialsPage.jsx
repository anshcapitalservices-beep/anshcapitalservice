import React from "react";
import { Star, Quote } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { testimonials, testimonialsIntro } from "../mock/mock";

const TestimonialsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow={testimonialsIntro.eyebrow}
        title="Trusted by Families Like Yours"
        subtitle="Real stories from real clients who trusted us with their financial journey."
        current="Testimonials"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="CLIENT STORIES"
            title={testimonialsIntro.title}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.id}
                delay={i * 70}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_18px_40px_-24px_rgba(11,31,58,0.25)] p-7 flex flex-col"
              >
                <Quote className="h-8 w-8 text-gold/70 mb-3" />
                <p className="text-[14.5px] text-slate-600 leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
