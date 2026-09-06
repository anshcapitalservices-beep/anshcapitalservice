import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import ConsultationForm from "../components/ConsultationForm";
import { company, contactIntro, footer } from "../mock/mock";

const Contact = () => {
  const infoCards = [
    { icon: Phone, title: "Call Us", lines: company.phones },
    { icon: Mail, title: "Email Us", lines: [company.email] },
    { icon: MapPin, title: "Visit Us", lines: [company.address] },
    {
      icon: Clock,
      title: "Working Hours",
      lines: company.timings.map((t) => `${t.day}: ${t.hours}`),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={contactIntro.eyebrow}
        title="Let's Plan Your Financial Future"
        subtitle={contactIntro.subtitle}
        current="Contact Us"
      />

      {/* Form + Map Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left — Form */}
          <Reveal className="order-1">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              WRITE TO US
            </p>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-[#0b1f3a] leading-tight mb-2">
              Book Your Free{" "}
              <span className="text-[#d89626] italic font-display">
                Consultation
              </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-7">
              Fill the form and your message reaches our advisory desk
              instantly. Expect a call within one business day.
            </p>
            <ConsultationForm />
          </Reveal>

          {/* Right — Map + Office */}
          <Reveal delay={120} className="order-2">
            <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs uppercase mb-3">
              FIND US
            </p>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-bold text-[#0b1f3a] leading-tight mb-5">
              Our Faridabad{" "}
              <span className="text-[#d89626] italic font-display">Office</span>
            </h2>
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <iframe
                title="ANSH Capital Services location"
                src="https://www.google.com/maps?q=RPS+12th+Avenue+Sector+27C+Mathura+Road+Faridabad+Haryana&output=embed"
                className="w-full h-[320px] md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=RPS+12th+Avenue+Sector+27C+Mathura+Road+Faridabad+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#0b1f3a] hover:bg-[#061527] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Get Direction <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Info Cards + Social */}
      <section className="bg-[#faf6ee] py-14 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-xl p-5 flex gap-4 shadow-sm"
                >
                  <div className="h-11 w-11 rounded-lg bg-[#faf6ee] flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-[#d89626]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1f3a] text-sm mb-1">
                      {c.title}
                    </h3>
                    {c.lines.map((l) => (
                      <p key={l} className="text-xs text-slate-500 leading-relaxed">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex items-center gap-2.5 mt-8 justify-center">
              {footer.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  aria-label={s.icon}
                  className="h-10 w-10 rounded-full bg-[#0b1f3a] flex items-center justify-center text-white hover:bg-[#d89626] transition-colors"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
