import React from "react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import { whyChooseUs } from "../mock/mock";

const WhyChooseUs = () => {
  return (
    <>
      <PageHeader
        eyebrow={whyChooseUs.eyebrow}
        title="Why Families Trust ANSH Capital"
        subtitle={whyChooseUs.subtitle}
        current="Why Choose Us"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading eyebrow="THE ANSH ADVANTAGE" title={whyChooseUs.title} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.reasons.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 70}
                className="group relative bg-white rounded-2xl border border-slate-100 p-7 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 font-display text-7xl font-bold text-cream group-hover:text-gold/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-cream flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                    <Icon
                      name={r.icon}
                      className="h-7 w-7 text-gold group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
