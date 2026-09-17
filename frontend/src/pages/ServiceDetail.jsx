import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Phone,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import HealthInsuranceGuide from "../components/HealthInsuranceGuide";
import MotorInsuranceGuide from "../components/MotorInsuranceGuide";
import LifeInsuranceGuide from "../components/LifeInsuranceGuide";
import MutualFundsGuide from "../components/MutualFundsGuide";
import LoansGuide from "../components/LoansGuide";
import { services } from "../mock/mock";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  React.useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const elem = document.getElementById(hashId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [serviceId]);

  if (!service || !service.detail) {
    return <Navigate to="/services" replace />;
  }

  const { detail } = service;
  const otherServices = services.filter((s) => s.id !== serviceId);

  return (
    <>
      <PageHeader
        eyebrow="OUR SERVICES"
        title={service.title}
        subtitle={service.description}
        current={service.title}
      />

      {/* Featured Service Visual Banner */}
      {service.bannerImage && (
        <section className="bg-white pt-8 pb-4">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <Reveal className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(11,31,58,0.1)] border border-slate-100">
              <img
                src={service.bannerImage}
                alt={`${service.title} ANSH Capital Services Banner`}
                className="w-full h-auto block"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
                WHAT IS {service.title.toUpperCase()}?
              </p>
              <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-[#0b1f3a] leading-tight">
                Understanding{" "}
                <span className="text-[#d89626]">{service.title}</span>
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed text-[15px]">
                {detail.overview}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#061527] text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+917042470200"
                  className="inline-flex items-center gap-2 border border-[#d89626] text-[#d89626] hover:bg-[#d89626] hover:text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors"
                >
                  Call +91 70424 70200
                </a>
              </div>
            </Reveal>

            {/* Scope Cards */}
            <Reveal delay={100}>
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-4">
                SCOPE & OFFERINGS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {detail.scope.map((item, i) => {
                  const [label, desc] = item.split(" — ");
                  return (
                    <div
                      key={i}
                      className="bg-[#faf6ee] rounded-xl p-4 sm:p-5 border border-[#f0dca8]/50 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <Sparkles className="h-4 w-4 text-[#d89626]" />
                        </div>
                        <div>
                          <p className="font-bold text-[#0b1f3a] text-[14px] leading-snug">
                            {label}
                          </p>
                          {desc && (
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comprehensive Mutual Funds Breakdown Section */}
      {service.id === "mutual-funds" && <MutualFundsGuide />}

      {/* Comprehensive Health Insurance Breakdown Section */}
      {service.id === "insurance" && <HealthInsuranceGuide />}

      {/* Comprehensive Motor & Vehicle Insurance Breakdown Section */}
      {service.id === "insurance" && <MotorInsuranceGuide />}

      {/* Comprehensive Life & Term Insurance Breakdown Section */}
      {service.id === "insurance" && <LifeInsuranceGuide />}

      {/* Comprehensive Loans & Credit Breakdown Section */}
      {service.id === "loans" && <LoansGuide />}

      {/* Special Infographic Section for Mutual Funds */}
      {service.id === "mutual-funds" && detail.infographicImage && (
        <section className="bg-[#faf6ee] py-14 md:py-20 border-y border-[#d89626]/20">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <Reveal className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
                INVESTMENT EDUCATION
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
                The Significance of Mutual Funds
              </h2>
              <p className="mt-3 text-slate-600 text-sm">
                Direct stock picking vs professional mutual fund management — see how pooling funds, active diversification, and regular SIP build sustainable long-term wealth.
              </p>
            </Reveal>

            <Reveal delay={100} className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white max-w-4xl mx-auto">
              <img
                src={detail.infographicImage}
                alt="Direct Investment vs Mutual Fund Infographic"
                className="w-full h-auto"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Special Health Insurance Banner for Insurance */}
      {service.id === "insurance" && detail.healthBanner && (
        <section className="bg-[#faf6ee] py-12 md:py-16 border-t border-[#d89626]/20">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <Reveal className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
                HEALTH & FAMILY WELLNESS
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
                Secure Your Health. Protect Your Future.
              </h2>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white max-w-4xl mx-auto">
              <img
                src={detail.healthBanner}
                alt="ANSH Capital Health Insurance Banner"
                className="w-full h-auto"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Special Life Insurance Legacy Banner for Insurance */}
      {service.id === "insurance" && detail.legacyBanner && (
        <section className="bg-white py-12 md:py-16 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <Reveal className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
                LIFE & GENERATIONAL PROSPERITY
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
                Strategize for Generational Wealth & Family Legacy
              </h2>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={detail.legacyBanner}
                alt="ANSH Capital Life Insurance Legacy Banner"
                className="w-full h-auto block"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Special Secondary Asset & Travel Protection Banner for Insurance */}
      {service.id === "insurance" && (detail.assetBanner || detail.vehicleBanner) && (
        <section className="bg-[#faf6ee] py-12 md:py-16 border-t border-[#d89626]/20">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">
            <Reveal className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-2">
                HOME, TRAVEL & ACCIDENT COVERAGE
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">
                Your Secure Whole World. Protect What Matters Most.
              </h2>
            </Reveal>
            <Reveal delay={100} className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 max-w-5xl mx-auto">
              <img
                src={detail.assetBanner || detail.vehicleBanner}
                alt="Your Secure Whole World. Protect What Matters Most. ANSH Capital Services"
                className="w-full h-auto block"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="bg-[#0b1f3a] py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#d89626] blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-[#d89626] blur-[100px]" />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
                OUR PROCESS
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                How We Work With You
              </h2>
              <p className="mt-3 text-white/60 max-w-xl mx-auto text-sm">
                A transparent, step-by-step approach to help you make confident
                financial decisions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {detail.process.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:bg-white/10 transition-colors h-full group">
                  <div className="text-[#d89626] font-display text-3xl font-extrabold opacity-30 group-hover:opacity-60 transition-opacity">
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-white text-[15px] mt-2 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {p.desc}
                  </p>
                  {i < detail.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                      <ChevronRight className="h-5 w-5 text-[#d89626]/50" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
                WHY CHOOSE THIS SERVICE
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
                Key Benefits
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {detail.benefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-3.5 bg-[#faf6ee] rounded-xl p-5 border border-[#f0dca8]/40 hover:shadow-md transition-shadow">
                  <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#d89626]" />
                  </div>
                  <p className="text-[#0b1f3a] font-medium text-[14px] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#faf6ee] py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
                {service.title} FAQs
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {detail.faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <FaqItem question={faq.q} answer={faq.a} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0b1f3a] py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              Ready to Get Started with{" "}
              <span className="text-[#d89626]">{service.title}</span>?
            </h2>
            <p className="text-white/70 text-sm mb-7 max-w-lg mx-auto">
              Talk to our experts today and take the first step towards your
              financial goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d89626] hover:bg-[#c4841d] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors shadow-md"
              >
                <Phone className="h-4 w-4" />
                Talk to an Expert
              </Link>
              <a
                href="tel:+917042470200"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors"
              >
                Call +91 70424 70200
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
                EXPLORE MORE
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
                Other Services
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {otherServices.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <Link
                  to={`/services/${s.id}`}
                  className="group block bg-white rounded-xl border border-slate-100 p-5 hover:shadow-[0_20px_40px_-16px_rgba(11,31,58,0.3)] hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#faf6ee] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#d89626] transition-colors">
                    <Icon
                      name={s.icon}
                      className="h-6 w-6 text-[#d89626] group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#0b1f3a] mb-1 leading-snug">
                    {s.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#d89626] mt-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* FAQ Accordion Item */
const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`bg-white rounded-xl border transition-all duration-300 ${
        open
          ? "border-[#d89626]/40 shadow-md"
          : "border-slate-100 hover:border-[#d89626]/20"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span
          className={`font-semibold text-[14.5px] pr-4 transition-colors ${
            open ? "text-[#d89626]" : "text-[#0b1f3a]"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-[#d89626]" : "text-slate-400"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4 px-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
