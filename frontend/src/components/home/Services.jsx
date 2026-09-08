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
        {/* Creative 3-Line Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-[#d89626] font-bold tracking-[0.24em] text-sm sm:text-base md:text-[17px] uppercase mb-3 sm:mb-4 inline-block">
            {servicesIntro.eyebrow}
          </p>

          <h2 className="font-display font-extrabold text-[#0b1f3a] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.2] tracking-tight">
            <span className="block">Comprehensive Financial Solutions</span>
            <span className="inline-flex items-center justify-center my-1.5 sm:my-2.5">
              <span className="h-px w-6 sm:w-12 bg-[#d89626]/40 mr-2 sm:mr-3" />
              <span className="font-serif italic font-normal text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] text-[#d89626] tracking-wide px-1">
                Designed
              </span>
              <span className="h-px w-6 sm:w-12 bg-[#d89626]/40 ml-2 sm:ml-3" />
            </span>
            <span className="block">Around your Goals</span>
          </h2>

          <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            {servicesIntro.subtitle}
          </p>
        </Reveal>

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
                to={`/services/${s.id}`}
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
