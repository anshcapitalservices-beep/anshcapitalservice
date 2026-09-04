import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { faqs, faqIntro } from "../mock/mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Faq = () => {
  return (
    <>
      <PageHeader
        eyebrow={faqIntro.eyebrow}
        title="Frequently Asked Questions"
        subtitle={faqIntro.subtitle}
        current="FAQ"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_320px] gap-10">
          <Reveal>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-slate-100 rounded-xl px-5 bg-white data-[state=open]:shadow-[0_18px_40px_-24px_rgba(11,31,58,0.25)] transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={120} className="h-max lg:sticky lg:top-28">
            <div className="bg-navy rounded-2xl p-7 text-center">
              <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-7 w-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Still have questions?
              </h3>
              <p className="text-sm text-white/60 mt-2">
                Our advisors are happy to help. Reach out and we'll get back to you shortly.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Faq;
