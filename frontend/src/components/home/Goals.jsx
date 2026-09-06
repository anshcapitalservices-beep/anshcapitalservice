import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { goals, goalsIntro } from "../../mock/mock";
import { Icon } from "../iconMap";
import Reveal from "../Reveal";

const Goals = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <Reveal className="lg:w-[24%] shrink-0">
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              {goalsIntro.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              {goalsIntro.titleLine1}
              <br />
              {goalsIntro.titleLine2}
            </h2>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
            >
              {goalsIntro.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {goals.map((g, i) => (
              <Reveal key={g.id} delay={i * 70} className="group flex flex-col items-center">
                <div className="relative rounded-xl overflow-hidden w-full aspect-[4/3]">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/10" />
                </div>
                <div className="flex flex-col items-center -mt-7 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <Icon
                      name={g.icon}
                      className="h-6 w-6 text-gold group-hover:text-white transition-colors"
                    />
                  </div>
                  <p className="mt-2 text-center text-sm font-semibold text-navy leading-tight px-1">
                    {g.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
