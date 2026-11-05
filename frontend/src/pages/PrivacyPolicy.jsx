import React from "react";
import PageHeader from "../components/PageHeader";
import { BUSINESS } from "../seo/site";

// Plain-language privacy notice for the enquiry forms. Have it reviewed by
// your compliance adviser before relying on it.
const LAST_UPDATED = "4 November 2026";

const Section = ({ title, children }) => (
  <section className="mt-8">
    <h2 className="font-display text-xl md:text-2xl font-bold text-[#0b1f3a]">{title}</h2>
    <div className="mt-3 space-y-3 text-[15px] text-slate-700 leading-relaxed">{children}</div>
  </section>
);

const PrivacyPolicy = () => (
  <>
    <PageHeader eyebrow="LEGAL" title="Privacy Policy" current="Privacy Policy" />
    <article className="max-w-[860px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
      <p className="mt-4 text-[15px] text-slate-700 leading-relaxed">
        This policy explains how {BUSINESS.name} ("we", "us") collects and uses the personal
        details you share with us through this website, and the choices you have. It applies to
        anshcapitalservices.com and its enquiry forms.
      </p>

      <Section title="What we collect">
        <p>
          When you fill an enquiry or consultation form we collect the details you enter: your
          name, mobile number, email address (optional), the service you are interested in, your
          budget range and your message, together with the page you submitted it from and the
          time of submission.
        </p>
        <p>
          Like most websites, our hosting provider records technical information such as your IP
          address and browser type for security. If website analytics is enabled, it records
          which pages are visited, in aggregate, to help us improve the site.
        </p>
      </Section>

      <Section title="How we use it">
        <p>
          We use your details only to respond to your enquiry: to call or message you, to prepare
          quotes and comparisons you asked for, and to keep a record of our conversation. With
          your consent we may share the details needed for a quote or application with the
          insurance company, mutual fund house, bank or NBFC you choose.
        </p>
        <p>We do not sell your personal data, and we do not use it for unrelated marketing.</p>
      </Section>

      <Section title="Where it is stored and for how long">
        <p>
          Form submissions are delivered to our business email and stored in our secure
          database. We keep enquiry records only as long as needed to serve you and to meet our
          legal and regulatory record-keeping obligations, after which they are deleted.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          You may ask us to tell you what personal data we hold about you, to correct it, or to
          delete it, and you may withdraw your consent to be contacted at any time, in line with
          the Digital Personal Data Protection Act, 2023. Write to us using the contact details
          below.
        </p>
      </Section>

      <Section title="Grievances and contact">
        <p>
          For any question or complaint about your data or our services, contact us:
          <br />
          {BUSINESS.name}, {BUSINESS.addressLine}
          <br />
          Email:{" "}
          <a className="text-[#d89626] underline" href={`mailto:${BUSINESS.email}`}>
            {BUSINESS.email}
          </a>
          <br />
          Phone:{" "}
          <a className="text-[#d89626] underline" href={`tel:${BUSINESS.phoneE164}`}>
            {BUSINESS.phone}
          </a>
        </p>
        <p>We aim to acknowledge every grievance within two working days.</p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If we change this policy we will update the date at the top of this page.
        </p>
      </Section>
    </article>
  </>
);

export default PrivacyPolicy;
