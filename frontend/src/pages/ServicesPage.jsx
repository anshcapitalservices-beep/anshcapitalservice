import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import { services, servicesIntro } from "../mock/mock";

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="OUR SERVICES"
        title="Comprehensive Financial Solutions"
        subtitle="From investments and protection to credit and growth, we provide solutions designed around you."
        current="Services"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title="Everything You Need, Under One Roof"
            subtitle={servicesIntro.subtitle}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal
                key={s.id}
                id={s.id}
                delay={i * 70}
                className="scroll-mt-28 group bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 flex gap-5"
              >
                <div className="h-16 w-16 rounded-xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Icon
                    name={s.icon}
                    className="h-8 w-8 text-gold group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-navy font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    Talk to an Expert <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
