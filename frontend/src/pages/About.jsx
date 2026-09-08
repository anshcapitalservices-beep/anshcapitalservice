import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import { aboutPage } from "../mock/mock";
import aboutUsImg from "../assets/about-us.png";

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        current="About Us"
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal className="relative">
            <img
              src={aboutUsImg}
              alt="About ANSH Capital Services"
              className="rounded-2xl w-full h-[360px] md:h-[400px] object-cover shadow-[0_30px_60px_-24px_rgba(11,31,58,0.35)] border border-slate-100"
            />
            <div className="absolute -bottom-6 -right-4 bg-navy text-white rounded-xl px-6 py-5 hidden md:block">
              <div className="font-display text-3xl font-bold text-gold">19+</div>
              <div className="text-xs text-white/70">Years of Experience</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              WHO WE ARE
            </p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              Financial guidance built on trust
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">{aboutPage.intro}</p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <div className="h-11 w-11 rounded-lg bg-cream flex items-center justify-center shrink-0">
                  <Target className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Our Mission</h3>
                  <p className="text-sm text-slate-500 mt-1">{aboutPage.mission}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-11 w-11 rounded-lg bg-cream flex items-center justify-center shrink-0">
                  <Eye className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Our Vision</h3>
                  <p className="text-sm text-slate-500 mt-1">{aboutPage.vision}</p>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="OUR VALUES"
            title="What Makes Us Different"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutPage.values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="bg-white rounded-xl border border-slate-100 p-6 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-cream flex items-center justify-center mb-5">
                  <Icon name={v.icon} className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading eyebrow="OUR TEAM" title="Meet the People Behind ANSH" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutPage.team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 80}
                className="group text-center"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">
                  {m.name}
                </h3>
                <p className="text-sm text-gold">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
