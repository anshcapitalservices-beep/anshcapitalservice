import React from "react";
import { statsSection } from "../../mock/mock";
import { Icon } from "../iconMap";
import Reveal from "../Reveal";

const StatsSection = () => {
  return (
    <section className="bg-cream-dark py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {statsSection.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className={`flex items-center gap-4 justify-center md:px-6 ${
                i !== 0 ? "md:border-l md:border-gold/20" : ""
              }`}
            >
              <Icon name={s.icon} className="h-9 w-9 text-gold shrink-0" />
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-navy">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
