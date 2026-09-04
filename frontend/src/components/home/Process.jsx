import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { processIntro, processSteps } from "../../mock/mock";
import { Icon } from "../iconMap";
import Reveal from "../Reveal";

const Process = () => {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Left */}
          <Reveal className="lg:w-[26%] shrink-0">
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              {processIntro.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              {processIntro.titleLine1}
              <br />
              <span className="text-gold italic">{processIntro.titleLine2}</span>
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              {processIntro.description}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
            >
              {processIntro.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          {/* Steps */}
          <div className="flex-1 flex flex-wrap lg:flex-nowrap items-start gap-y-8">
            {processSteps.map((step, i) => (
              <React.Fragment key={step.number}>
                <Reveal
                  delay={i * 70}
                  className="w-1/2 md:w-1/3 lg:flex-1 px-2 text-center"
                >
                  <div className="relative inline-flex">
                    <div className="h-16 w-16 rounded-full bg-navy flex items-center justify-center">
                      <Icon name={step.icon} className="h-7 w-7 text-gold" />
                    </div>
                    <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-gold text-white text-[11px] font-bold flex items-center justify-center border-2 border-cream">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-navy leading-snug px-1">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed px-1">
                    {step.description}
                  </p>
                </Reveal>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center pt-6 text-slate-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
