import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, servicesIntro } from "../../mock/mock";
import { Icon } from "../iconMap";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          subtitle={servicesIntro.subtitle}
        />

        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 80}
              className="group bg-white rounded-xl border border-slate-100 p-3.5 sm:p-5 md:p-6 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl bg-cream flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-gold transition-colors">
                  <Icon
                    name={s.icon}
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gold group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-display text-[15px] sm:text-base md:text-lg font-bold text-navy mb-1.5 sm:mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-[13px] md:text-sm text-slate-500 leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                  {s.description}
                </p>
                <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-navy font-medium leading-tight"
                    >
                      <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gold shrink-0" />
                      <span className="truncate sm:whitespace-normal">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-navy group-hover:text-gold transition-colors mt-auto pt-1"
              >
                <span>Learn More</span> <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
