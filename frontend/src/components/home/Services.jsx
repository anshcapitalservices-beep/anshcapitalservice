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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 80}
              className="group bg-white rounded-xl border border-slate-100 p-6 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.35)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-cream flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                <Icon
                  name={s.icon}
                  className="h-7 w-7 text-gold group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {s.description}
              </p>
              <ul className="space-y-1.5 mb-5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-navy font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
