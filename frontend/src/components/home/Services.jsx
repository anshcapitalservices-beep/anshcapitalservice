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

          <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">
            {servicesIntro.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 90}
              className="group bg-white rounded-2xl border border-slate-100 p-6 sm:p-7 md:p-8 hover:shadow-[0_24px_50px_-20px_rgba(11,31,58,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-cream flex items-center justify-center mb-5 md:mb-6 group-hover:bg-gold transition-colors">
                  <Icon
                    name={s.icon}
                    className="h-7 w-7 sm:h-8 sm:w-8 text-gold group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-2.5 leading-snug group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2.5 mb-6 pt-2 border-t border-slate-50">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 text-sm text-navy font-medium"
                    >
                      <span className="h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={`/services/${s.id}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-navy group-hover:text-gold transition-colors mt-auto"
              >
                <span>Learn More & Scope</span> <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
