import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Shield, Wallet, PieChart } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import { services, servicesIntro, products, productsIntro } from "../mock/mock";

import bannerPlanToday from "../assets/banner_plan_today.webp";

const riskColor = {
  Low: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
  Medium: "bg-amber-50 text-amber-700 border border-amber-200/60",
  High: "bg-rose-50 text-rose-700 border border-rose-200/60",
};

const categories = [
  { id: "all", label: "All Offerings" },
  { id: "mutual-funds", label: "Mutual Funds" },
  { id: "insurance", label: "Insurance Solutions" },
  { id: "loans", label: "Loan Solutions" },
];

const ServicesPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "mutual-funds" || hash === "insurance" || hash === "loans") {
      setActiveTab(hash);
    } else if (hash === "products") {
      setActiveTab("mutual-funds");
    } else {
      setActiveTab("all");
    }
  }, [location.hash]);

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.id === activeTab);

  const showProducts = activeTab === "all" || activeTab === "mutual-funds";

  return (
    <>
      <PageHeader
        eyebrow="OUR SERVICES & PRODUCTS"
        title="Comprehensive Financial Solutions & Investment Products"
        subtitle="From wealth creation and portfolio advisory to insurance protection and loans — planned honestly, under one roof."
        current="Services & Products"
      />

      {/* Featured Banner: Plan Today for a Brighter Tomorrow */}
      <section className="bg-white pt-8 pb-4">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Reveal className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,31,58,0.1)] border border-slate-100">
            <img
              width={1024} height={409}
              src={bannerPlanToday}
              alt="Plan Today for a Brighter Tomorrow - ANSH Capital Services"
              className="w-full h-auto block"
            />
          </Reveal>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="bg-white pt-10 pb-4 border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-[#0b1f3a] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-[#faf6ee] hover:text-[#d89626]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow={
              activeTab === "all"
                ? servicesIntro.eyebrow
                : `${categories.find((c) => c.id === activeTab)?.label.toUpperCase()} OVERVIEW`
            }
            title={
              activeTab === "all"
                ? "Everything You Need, Under One Roof"
                : `${categories.find((c) => c.id === activeTab)?.label} Solutions`
            }
            subtitle={
              activeTab === "all"
                ? servicesIntro.subtitle
                : `Explore customized solutions and expert guidance for ${categories.find((c) => c.id === activeTab)?.label}.`
            }
          />

          <div
            className={`mt-12 grid gap-6 ${
              filteredServices.length === 1
                ? "max-w-3xl mx-auto grid-cols-1"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {filteredServices.map((s, i) => (
              <Reveal
                key={s.id}
                id={s.id}
                delay={i * 70}
                className="scroll-mt-28 group bg-white rounded-2xl border border-slate-100 p-7 sm:p-8 hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-5">
                    <div className="h-16 w-16 rounded-xl bg-[#faf6ee] flex items-center justify-center shrink-0 group-hover:bg-[#d89626] transition-colors">
                      <Icon
                        name={s.icon}
                        className="h-8 w-8 text-[#d89626] group-hover:text-white transition-colors"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-[#0b1f3a] mb-2 group-hover:text-[#d89626] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights / Sub-types */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Solutions & Scope:
                    </p>
                    <ul className="space-y-2.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2.5 text-sm text-[#0b1f3a] font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#d89626] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${s.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b1f3a] group-hover:text-[#d89626] transition-colors"
                  >
                    View In-Depth Scope & Process <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#faf6ee] hover:bg-[#d89626] hover:text-white text-[#0b1f3a] transition-colors"
                  >
                    Consult Advisor
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Products Section (Displayed when 'All' or 'Mutual Funds' is selected) */}
      {showProducts && (
        <section id="products" className="bg-[#f8fafc] py-16 md:py-24 border-t border-slate-100 scroll-mt-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <SectionHeading
              eyebrow="INVESTMENT PRODUCTS"
              title="Curated Mutual Fund Products For Every Risk Profile"
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
                        loading="lazy" decoding="async"
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 via-[#0b1f3a]/30 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#f0dca8] transition-colors">
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
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#d89626] bg-[#faf6ee] px-3 py-1 rounded-md">
                          {p.focus}
                        </span>
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
                              className="flex items-center gap-2 text-xs font-medium text-[#0b1f3a]"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#d89626] shrink-0" />
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b1f3a] hover:text-[#d89626] transition-colors"
                    >
                      View In-Depth Breakdown <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#d89626] hover:bg-[#c4841d] text-white transition-colors shadow-sm"
                    >
                      Start Investing
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#d89626]/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-[#d89626]" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-[#0b1f3a]">
                    Need Help Choosing Between Funds & Schemes?
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 max-w-xl">
                    Our AMFI-certified advisors analyze your monthly cash flow, tax bracket, and retirement targets to design a personalized mix.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="whitespace-nowrap px-6 py-3 rounded-lg bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm transition-colors shadow"
              >
                Book Free Consultation
              </Link>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              *Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default ServicesPage;
