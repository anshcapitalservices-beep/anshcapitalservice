import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import Logo from "./Logo";
import { Icon } from "./iconMap";
import { footer, company } from "../mock/mock";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.85fr_0.95fr_1.35fr_0.95fr] gap-8 xl:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {footer.description}
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {footer.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.icon}
                  className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-gold hover:border-gold hover:text-white transition-colors"
                >
                  <Icon name={s.icon} className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 hover:text-gold-light transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {footer.ourServices.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 hover:text-gold-light transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {company.phones.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <a
                    href={`tel:${p.replace(/\s+/g, "")}`}
                    className="whitespace-nowrap hover:text-gold-light transition-colors text-[13px] xl:text-sm"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="whitespace-nowrap hover:text-gold-light transition-colors text-[13px] xl:text-sm"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs xl:text-sm leading-relaxed">{company.address}</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Timings</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {company.timings.map((t) => (
                <li key={t.day} className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <span>
                    {t.day}: {t.hours}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={company.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-white/20 hover:border-gold hover:text-gold text-sm text-white/80 px-4 py-2.5 rounded-md transition-colors"
            >
              Get Direction <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {company.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
