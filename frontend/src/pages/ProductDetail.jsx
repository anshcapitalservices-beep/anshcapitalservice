import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Phone,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldAlert,
  Percent,
  ReceiptText,
  UserCheck,
  Building2,
  HelpCircle,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { products } from "../mock/mock";

const riskBadgeStyle = {
  Low: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Medium: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  High: "bg-rose-500/10 text-rose-400 border-rose-500/30",
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [openFaq, setOpenFaq] = useState(0);

  React.useEffect(() => {
    if (product) {
      document.title = `${product.title} | ANSH Capital Services`;
    }
  }, [product]);

  if (!product || !product.detail) {
    return <Navigate to="/services#products" replace />;
  }

  const { detail } = product;
  const otherProducts = products.filter((p) => p.id !== productId);

  return (
    <>
      <PageHeader
        eyebrow="MUTUAL FUND CATEGORY"
        title={product.title}
        subtitle={detail.tagline || product.description}
        current={product.title}
        bgImage={detail.heroImage}
      />

      {/* Quick Metrics Bar */}
      <section className="bg-navy border-b border-white/10 py-6 text-white relative z-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Indicative Returns</p>
                <p className="font-display text-lg md:text-xl font-bold text-gold">{detail.indicativeReturn || product.returns}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Risk Level</p>
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${riskBadgeStyle[product.risk]}`}>
                  {product.risk} Risk
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Ideal Horizon</p>
                <p className="text-sm font-semibold text-white">{detail.idealHorizon}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <Percent className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">SIP Minimum</p>
                <p className="text-sm font-semibold text-white">Starting ₹500/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Scope Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className="text-gold font-bold tracking-[0.22em] text-xs uppercase mb-3">
                WHAT IS {product.title.toUpperCase()}?
              </p>
              <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-navy leading-tight">
                Understanding <span className="text-gold">{product.title}</span>
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed text-[15px]">
                {detail.overview}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#FAF9F5] border border-gold/20">
                <p className="text-xs font-bold uppercase tracking-wider text-navy mb-2 flex items-center gap-1.5">
                  <ReceiptText className="w-4 h-4 text-gold" />
                  Key Highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-navy"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  Start Investing Today
                </Link>
                <Link
                  to="/services#products"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors"
                >
                  All Products & Services
                </Link>
              </div>
            </Reveal>

            {/* Scope & Sub-Categories */}
            <Reveal delay={100}>
              <p className="text-gold font-bold tracking-[0.22em] text-xs uppercase mb-4">
                SUB-CATEGORIES & SCOPE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {detail.scope.map((item, i) => {
                  const [label, desc] = item.split(" — ");
                  return (
                    <div
                      key={i}
                      className="bg-[#FAF9F5] rounded-xl p-4 border border-slate-200/80 hover:border-gold/50 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-slate-100">
                          <Sparkles className="h-4 w-4 text-gold" />
                        </div>
                        <div>
                          <p className="font-semibold text-navy text-[13.5px] leading-snug">
                            {label}
                          </p>
                          {desc && (
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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

      {/* Benefits & Who Should Invest */}
      <section className="bg-[#FAF9F5] py-14 md:py-20 border-y border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Key Advantages */}
            <Reveal>
              <p className="text-gold font-bold tracking-[0.22em] text-xs uppercase mb-3">
                KEY ADVANTAGES
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight mb-6">
                Why Invest in <span className="text-gold">{product.title}</span>?
              </h3>
              <div className="space-y-4">
                {detail.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-navy">{b.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Who Should Invest */}
            <Reveal delay={120}>
              <p className="text-gold font-bold tracking-[0.22em] text-xs uppercase mb-3">
                INVESTOR SUITABILITY
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight mb-6">
                Who Should Choose This?
              </h3>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-4">
                {detail.whoShouldInvest.map((w, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 leading-relaxed">{w}</p>
                  </div>
                ))}

                {/* Taxation Box */}
                {detail.taxation && (
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-1.5">
                      <ReceiptText className="w-4 h-4 text-gold" />
                      Taxation Guide (Latest Union Budget)
                    </p>
                    <div className="space-y-2 text-xs text-slate-500">
                      <p>
                        <strong className="text-navy">LTCG:</strong> {detail.taxation.ltcg}
                      </p>
                      <p>
                        <strong className="text-navy">STCG:</strong> {detail.taxation.stcg}
                      </p>
                      {detail.taxation.dividend && (
                        <p>
                          <strong className="text-navy">Dividends:</strong> {detail.taxation.dividend}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Process Your Investment */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-bold tracking-[0.22em] text-xs uppercase mb-3">
              THE ANSH ADVANTAGE
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              How We Help You <span className="text-gold">Invest Right</span>
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              We remove the guesswork and help you construct an institutional-grade portfolio backed by 19+ years of advisory experience.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.process.map((step, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="relative bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/80 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="font-display text-3xl font-extrabold text-gold/30">
                      {step.step}
                    </span>
                    <h4 className="font-display text-lg font-bold text-navy mt-2 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {detail.faqs && detail.faqs.length > 0 && (
        <section className="bg-[#FAF9F5] py-14 md:py-20 border-t border-slate-200/70">
          <div className="max-w-[860px] mx-auto px-4 md:px-6">
            <Reveal className="text-center mb-10">
              <p className="text-gold font-bold tracking-[0.22em] text-xs uppercase mb-2">
                COMMON QUESTIONS
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">
                Frequently Asked Questions
              </h2>
            </Reveal>

            <div className="space-y-3">
              {detail.faqs.map((faq, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-semibold text-sm md:text-base text-navy hover:text-gold transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-gold shrink-0" />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-500 border-t border-slate-50 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Categories Switcher */}
      <section className="bg-navy py-12 text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-gold text-xs font-bold tracking-widest uppercase">Explore Other Options</p>
              <h3 className="font-display text-xl font-bold text-white">More Mutual Fund Products</h3>
            </div>
            <Link
              to="/services#products"
              className="text-xs text-gold hover:text-gold-light font-semibold inline-flex items-center gap-1"
            >
              View All Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-white group-hover:text-gold transition-colors text-base">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{p.returns} • {p.risk} Risk</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
