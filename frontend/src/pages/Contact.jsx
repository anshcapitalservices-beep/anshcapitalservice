import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { Icon } from "../components/iconMap";
import { company, contactIntro, footer } from "../mock/mock";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    toast.success("Thank you! Our team will reach out to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_1.15fr] gap-10">
          {/* Info */}
          <Reveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              We're here to help you every step of the way
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Whether you have a question about investments, insurance or loans, our team is ready to answer all your queries.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className="bg-cream rounded-xl p-5 flex gap-4"
                >
                  <div className="h-11 w-11 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-1">
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

            <div className="flex items-center gap-2.5 mt-6">
              {footer.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  aria-label={s.icon}
                  className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-gold transition-colors"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_24px_50px_-24px_rgba(11,31,58,0.25)] p-7 md:p-8"
            >
              <h3 className="font-display text-xl font-bold text-navy mb-6">
                Send Us a Message
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="text-navy">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-navy">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-navy">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-navy">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <Label htmlFor="message" className="text-navy">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your goals..."
                  rows={5}
                  className="mt-2"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>

        {/* Map */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 mt-14">
          <Reveal className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <iframe
              title="ANSH Capital Services location"
              src="https://www.google.com/maps?q=Sector%2027C%20Mathura%20Road%20Faridabad%20Haryana&output=embed"
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
