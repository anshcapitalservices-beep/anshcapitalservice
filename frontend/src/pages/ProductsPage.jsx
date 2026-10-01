import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { products, productsIntro } from "../mock/mock";

const riskColor = {
  Low: "bg-emerald-50 text-emerald-700",
  Medium: "bg-amber-50 text-amber-700",
  High: "bg-rose-50 text-rose-700",
};

const ProductsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow={productsIntro.eyebrow}
        title="Investment Products for Every Goal"
        subtitle={productsIntro.subtitle}
        current="Products"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SectionHeading
            eyebrow="MUTUAL FUND CATEGORIES"
            title={productsIntro.title}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <Reveal
                key={p.id}
                id={p.id}
                delay={i * 80}
                className="scroll-mt-28 group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_24px_50px_-24px_rgba(11,31,58,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Link to={`/products/${p.id}`} className="block relative h-48 overflow-hidden">
                    <img
                      loading="lazy" decoding="async"
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-gold transition-colors">
                        {p.title}
                      </h3>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${riskColor[p.risk]}`}
                      >
                        {p.risk} Risk
                      </span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold bg-gold/10 px-3 py-1 rounded-md">
                        {p.focus}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {p.description}
                    </p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-2">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-navy font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-50 mt-auto flex items-center justify-between gap-4">
                  <Link
                    to={`/products/${p.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
                  >
                    Explore Details & Scope <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-gold hover:bg-gold-dark text-white transition-colors shadow-sm"
                  >
                    Start Investing
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            *Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
