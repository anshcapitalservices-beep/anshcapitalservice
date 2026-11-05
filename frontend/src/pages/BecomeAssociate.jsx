import React from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { CtaButtons, EnquirySection, FaqList } from "./ServiceLanding";
import { DISCLAIMERS } from "../seo/site";

const benefits = [
  { title: "Training and certification support", desc: "We help you prepare for the IRDAI-mandated POSP training and exam, and for NISM certification if you want to distribute mutual funds." },
  { title: "Products from leading companies", desc: "Offer your clients life, health and motor insurance, mutual funds and loans through one partner." },
  { title: "Back-office and claim support", desc: "Our Faridabad team helps with quotes, documentation, policy issuance and claims, so you can focus on clients." },
  { title: "Work part-time or full-time", desc: "Build the business at your own pace, alongside a job, a shop or your studies." },
];

const whoFor = [
  "Homemakers, retired professionals and students looking for a flexible income",
  "Shop owners, CA/tax practitioners and property dealers who already advise clients",
  "Existing insurance agents who want a wider range of products",
  "Anyone in Faridabad, Palwal, Ballabgarh or Delhi NCR with a strong local network",
];

const steps = [
  "Share your details using the form below or call us.",
  "Meet our team for a short conversation about your goals.",
  "Complete the POSP training and exam with our guidance (and NISM certification for mutual funds, if you choose).",
  "Get your code, product training and start serving clients with our support.",
];

const faqs = [
  { q: "What is a POSP?", a: "A Point of Sales Person (POSP) is an individual certified under IRDAI guidelines to sell specified simple insurance products, such as motor, term and health plans, through an insurer or an insurance intermediary." },
  { q: "Who can become a POSP?", a: "Under IRDAI guidelines you must be at least 18 years old and have passed class 10, and you must complete the prescribed training and pass the examination. We guide you through the process." },
  { q: "Can I also sell mutual funds?", a: "To distribute mutual funds you need the NISM Series V-A certification and registration with AMFI. We can explain the steps and support you through them." },
  { q: "How much can I earn?", a: "Earnings are commission-based and depend on the products you sell and the business you bring. We explain the commission structure for each product before you start. There is no fixed or assured income." },
  { q: "Do I need to pay to join?", a: "Please speak to us about any training or examination fees that apply in your case. We will explain everything upfront before you begin." },
];

const BecomeAssociate = () => (
  <>
    <PageHeader
      eyebrow="PARTNER WITH US"
      title="Become an Insurance Associate (POSP) in Faridabad"
      subtitle="Build your own insurance, mutual fund and loan business with training, products and back-office support from Ansh Capital Services."
      current="Become an Associate"
    />

    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-[2.1rem] font-bold text-[#0b1f3a] leading-tight">
            Grow with <span className="text-[#d89626]">Ansh Capital Services</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">
            Every family needs life and health cover, a plan for their savings and, at some point,
            a loan. People prefer to take that advice from someone they know and trust. As an
            associate of Ansh Capital Services, you become that trusted person in your
            neighbourhood, office or business circle, backed by our team in Faridabad.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">
            You do not need a finance background to start. We help you complete the certification
            required by the regulator, train you on the products, and support you with quotes,
            paperwork and claims. You decide how much time to give; many of our associates start
            part-time.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">
            We expect every associate to give honest advice: recommend only what a client needs,
            explain exclusions clearly and never promise returns. That is how we have built
            long-term relationships with our own clients, and it is how you will build yours.
          </p>
          <div className="mt-7">
            <CtaButtons quoteLabel="Apply now" />
          </div>
        </div>
        <div className="bg-[#faf6ee] rounded-2xl p-6 md:p-8 border border-[#f0dca8]/60">
          <h2 className="font-display text-2xl font-bold text-[#0b1f3a]">How to join</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3 text-[15px] text-slate-700">
                <span className="h-7 w-7 rounded-full bg-[#d89626] text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="bg-[#faf6ee] py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div>
          <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">WHAT YOU GET</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">Support at every step</h2>
          <div className="mt-5 grid sm:grid-cols-2 gap-3.5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-5 border border-[#f0dca8]/60">
                <h3 className="font-bold text-[#0b1f3a] text-[15px]">{b.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">WHO CAN JOIN</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0b1f3a]">Is this for you?</h2>
          <ul className="mt-5 space-y-3">
            {whoFor.map((w) => (
              <li key={w} className="flex items-start gap-3 text-[15px] text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#d89626] shrink-0 mt-0.5" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white py-14 md:py-20">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b1f3a] leading-tight">Associate FAQs</h2>
        </div>
        <FaqList faqs={faqs} />
      </div>
    </section>

    <EnquirySection title="Apply to become an associate" defaultService="Become an Associate / POSP" />

    <section className="bg-white pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <p className="text-xs text-slate-500 border-t border-slate-100 pt-5 leading-relaxed">
          {DISCLAIMERS.insurance} {DISCLAIMERS.mutualFunds}
        </p>
      </div>
    </section>
  </>
);

export default BecomeAssociate;
