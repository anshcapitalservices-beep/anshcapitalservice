import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Shield, Award } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import { services, servicesIntro, products, productsIntro } from "../mock/mock";

const riskColor = {
  Low: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
  Medium: "bg-amber-50 text-amber-700 border border-amber-200/60",
  High: "bg-rose-50 text-rose-700 border border-rose-200/60",
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="OUR SERVICES & PRODUCTS"
        title="Comprehensive Financial Solutions & Investment Products"
        subtitle="From wealth creation and portfolio advisory to insurance protection and curated funds — planned honestly, under one roof."
        current="Services & Products"
      />

      {/* Core Services Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title="Everything You Need, Under One Roof"
            subtitle={servicesIntro.subtitle}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal
                key={s.id}
                id={s.id}
                delay={i * 70}
                className="scroll-mt-28 group bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex gap-5">
                  <div className="h-16 w-16 rounded-xl bg-cream flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <Icon
                      name={s.icon}
                      className="h-8 w-8 text-gold group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
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
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-50 flex items-center justify-between">
                  <Link
                    to={`/services/${s.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors"
                  >
                    View Scope & Process <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold px-3 py-1.5 rounded-md bg-cream hover:bg-gold hover:text-white text-navy transition-colors"
                  >
                    Consult Advisor
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Merged Investment Products Section */}
      <section id="products" className="bg-[#f8fafc] py-16 md:py-24 border-t border-slate-100 scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="INVESTMENT PRODUCTS"
            title="Curated Investment Products For Every Risk Profile"
            subtitle="Explore our curated range of mutual fund categories and schemes designed to match your specific financial milestones."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <Reveal
                key={p.id}
                id={`product-${p.id}`}
                delay={i * 80}
                className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-[0_24px_50px_-20px_rgba(11,31,58,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Link to={`/products/${p.id}`} className="block relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                        {p.title}
                      </h3>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full shadow-sm ${riskColor[p.risk] || "bg-slate-100 text-slate-800"}`}
                      >
                        {p.risk} Risk
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 md:p-7">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-display text-2xl font-bold text-[#d89626]">
                        {p.returns}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">indicative historical return</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="bg-slate-50/80 rounded-xl p-4 mb-5 border border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Highlights & Features
                      </h4>
                      <ul className="flex flex-wrap gap-x-5 gap-y-2">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-xs font-medium text-navy"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-7 pb-6 pt-0 border-t border-slate-100 mt-auto flex items-center justify-between gap-4">
                  <Link
                    to={`/products/${p.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
                  >
                    View In-Depth Breakdown <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-gold hover:bg-gold-dark text-white transition-colors shadow-sm"
                  >
                    Start Investing
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-navy">
                  Need Help Choosing Between Funds & Services?
                </h4>
                <p className="text-sm text-slate-500 mt-1 max-w-xl">
                  Our AMFI-certified advisors analyze your monthly cash flow, tax bracket, and retirement targets to design a personalized mix.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="whitespace-nowrap px-6 py-3 rounded-lg bg-navy hover:bg-navy-dark text-white font-semibold text-sm transition-colors shadow"
            >
              Book Free Consultation
            </Link>
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            *Returns are indicative and for illustration purposes only. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
