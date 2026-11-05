import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown, Phone, FileText } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import ConsultationForm from "../components/ConsultationForm";
import { WhatsappIcon } from "../components/FloatingButtons";
import HealthInsuranceGuide from "../components/HealthInsuranceGuide";
import MotorInsuranceGuide from "../components/MotorInsuranceGuide";
import LifeInsuranceGuide from "../components/LifeInsuranceGuide";
import MutualFundsGuide from "../components/MutualFundsGuide";
import LoansGuide from "../components/LoansGuide";
import { servicePages, servicePageByPath } from "../content/servicePages";
import { BUSINESS, DISCLAIMERS, faqSchema } from "../seo/site";
import { jsonLd } from "../seo/head";

const GUIDES = {
  life: LifeInsuranceGuide,
  health: HealthInsuranceGuide,
  motor: MotorInsuranceGuide,
  mutualFunds: MutualFundsGuide,
  loans: LoansGuide,
};

export const CtaButtons = ({ quoteLabel = "Get a Free Quote", dark = false }) => (
  <div className="flex flex-wrap items-center gap-3">
    <a
      href={`tel:${BUSINESS.phoneE164}`}
      className="inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#061527] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors shadow-sm"
    >
      <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
    </a>
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors shadow-sm"
    >
      <WhatsappIcon className="h-4 w-4" /> WhatsApp Us
    </a>
    <a
      href="#enquiry"
      className={`inline-flex items-center gap-2 border text-sm font-semibold px-5 py-3 rounded-lg transition-colors ${
        dark
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-[#d89626] text-[#d89626] hover:bg-[#d89626] hover:text-white"
      }`}
    >
      <FileText className="h-4 w-4" /> {quoteLabel}
    </a>
  </div>
);

export const FaqList = ({ faqs }) => (
  <div className="space-y-3">
    {faqs.map((f, i) => (
      <details
        key={f.q}
        open={i === 0}
        className="group bg-white rounded-xl border border-slate-100 open:border-[#d89626]/40 open:shadow-md transition-all"
      >
        <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 font-semibold text-[14.5px] text-[#0b1f3a] group-open:text-[#d89626]">
          <h3 className="font-semibold">{f.q}</h3>
          <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180 group-open:text-[#d89626]" />
        </summary>
        <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{f.a}</p>
      </details>
    ))}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }} />
  </div>
);

export const EnquirySection = ({ title, defaultService }) => (
  <section id="enquiry" className="bg-white py-14 md:py-20 scroll-mt-24">
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <div>
        <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
          FREE CONSULTATION
        </p>
        <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-[#0b1f3a] leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-slate-600 text-[15px] leading-relaxed">
          Share your details and an advisor from our Faridabad office will call you within one
          business day. You can also call, WhatsApp or visit us.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          <li>
            <span className="font-semibold text-[#0b1f3a]">Office:</span> {BUSINESS.addressLine}
          </li>
          <li>
            <span className="font-semibold text-[#0b1f3a]">Phone:</span>{" "}
            <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-[#d89626]">
              {BUSINESS.phone}
            </a>
          </li>
          <li>
            <span className="font-semibold text-[#0b1f3a]">Hours:</span> Monday to Saturday, 10:00 AM – 7:00 PM
          </li>
        </ul>
        <div className="mt-7">
          <CtaButtons quoteLabel="Fill the form" />
        </div>
      </div>
      <ConsultationForm defaultService={defaultService} />
    </div>
  </section>
);

const ServiceLanding = ({ path }) => {
  const page = servicePageByPath[path];
  const Guide = GUIDES[page.guide];
  const others = servicePages.filter((s) => s.path !== path);

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.h1} subtitle={page.lead} current={page.label} />

      {/* Intro */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-[2.1rem] font-bold text-[#0b1f3a] leading-tight">
              {page.label} with{" "}
              <span className="text-[#d89626]">Ansh Capital Services</span>
            </h2>
            {page.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-slate-600 leading-relaxed text-[15px]">
                {p}
              </p>
            ))}
            <div className="mt-7">
              <CtaButtons />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(11,31,58,0.1)] border border-slate-100">
            <img src={page.banner} alt={page.bannerAlt} className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* Who it is for + what we cover */}
      <section className="bg-[#faf6ee] py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">WHO IT IS FOR</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">Is this right for you?</h2>
            <ul className="mt-5 space-y-3">
              {page.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-[#d89626] shrink-0 mt-0.5" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">WHAT WE HELP WITH</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">What we cover</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-3.5">
              {page.covers.map((c) => (
                <div key={c.title} className="bg-white rounded-xl p-5 border border-[#f0dca8]/60">
                  <h3 className="font-bold text-[#0b1f3a] text-[15px]">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-600 leading-relaxed">
              We compare products from leading companies so you can choose what fits your needs and
              budget, and we stay with you after you buy, from renewals to claims.
            </p>
          </div>
        </div>
      </section>

      {Guide && <Guide />}

      {/* FAQs */}
      <section className="bg-[#faf6ee] py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">
              {page.label} FAQs
            </h2>
          </div>
          <FaqList faqs={page.faqs} />
        </div>
      </section>

      <EnquirySection title={`Get a free ${page.label.toLowerCase()} consultation`} defaultService={page.formService} />

      {/* Disclaimer */}
      <section className="bg-white pb-6">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <p className="text-xs text-slate-500 border-t border-slate-100 pt-5 leading-relaxed">
            {DISCLAIMERS[page.disclaimer]}
            {page.showArn && BUSINESS.amfiArn && (
              <> AMFI-registered Mutual Fund Distributor, {BUSINESS.amfiArn}.</>
            )}
          </p>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Reveal className="text-center mb-8">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">EXPLORE MORE</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">Our other services</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...others, { path: "/become-associate", label: "Become an Associate", icon: "Briefcase" }].map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="group block bg-white rounded-xl border border-slate-100 p-5 hover:shadow-[0_20px_40px_-16px_rgba(11,31,58,0.3)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="h-11 w-11 rounded-xl bg-[#faf6ee] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#d89626] transition-colors">
                  <Icon name={s.icon} className="h-5 w-5 text-[#d89626] group-hover:text-white transition-colors" />
                </div>
                <span className="font-display text-sm font-bold text-[#0b1f3a]">{s.label}</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-600">
            Prefer to talk in person?{" "}
            <Link to="/contact" className="font-semibold text-[#d89626] inline-flex items-center gap-1">
              Visit our Faridabad office <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceLanding;
