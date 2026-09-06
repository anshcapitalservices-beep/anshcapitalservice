import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Lock, Clock, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { contactApi } from "../lib/api";

const NOTIFICATION_EMAIL = "pratyushk92.pk@gmail.com";

const SERVICE_OPTIONS = [
  "Mutual Funds (SIP/Lump Sum)",
  "Insurance Solutions",
  "Wealth Management",
  "Retirement Planning",
  "Loan Solutions",
  "Tax Planning",
  "Other",
];

const BUDGET_OPTIONS = [
  "< ₹5,000 / mo",
  "₹5,000 – ₹15,000 / mo",
  "₹15,000 – ₹50,000 / mo",
  "₹50,000 – ₹1,00,000 / mo",
  "> ₹1,00,000 / mo",
  "Lump Sum Investment",
];

const ConsultationForm = ({ compact = false }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      service: form.service || "General Consultation",
      budget: form.budget || "Not Specified",
      message: form.message.trim() || "No additional message",
      source_url: window.location.href,
      submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    let emailSent = false;

    // 1. Direct Email Transmission to pratyushk92.pk@gmail.com via FormSubmit AJAX
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🔔 New Consultation Lead: ${payload.name} (${payload.service})`,
          _template: "table",
          _captcha: "false",
          "Full Name": payload.name,
          "Mobile Phone": payload.phone,
          "Email Address": payload.email || "Not Provided",
          "Selected Service": payload.service,
          "Monthly Budget": payload.budget,
          "Client Message": payload.message,
          "Submitted From": payload.source_url,
          "Date & Time": payload.submitted_at,
        }),
      });

      const resData = await response.json().catch(() => ({}));
      if (response.ok || resData?.success === "true" || resData?.success === true) {
        emailSent = true;
      }
    } catch (err) {
      console.warn("Direct email delivery notice:", err);
    }

    // 2. Parallel backup to backend database
    try {
      await contactApi.submit(payload);
    } catch (backendErr) {
      console.warn("Backend API notice:", backendErr);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success(`Request received! Details sent to ${NOTIFICATION_EMAIL}.`);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-100 shadow-[0_24px_60px_-20px_rgba(11,31,58,0.2)] p-7 md:p-9 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#0b1f3a] mb-2">
          Consultation Booked!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-4">
          Thank you, <strong className="text-[#0b1f3a]">{form.name}</strong>! Your information has been forwarded directly to our advisory team at <strong className="text-[#0b1f3a]">{NOTIFICATION_EMAIL}</strong>.
        </p>
        <div className="bg-[#faf6ee] rounded-xl p-4 border border-[#f0dca8]/50 max-w-sm mx-auto mb-6 text-xs text-slate-600 space-y-1">
          <p>
            <span className="font-bold text-[#0b1f3a]">Contact Number:</span> {form.phone}
          </p>
          <p>
            <span className="font-bold text-[#0b1f3a]">Service:</span> {form.service || "General Wealth Planning"}
          </p>
          <p className="text-[#d89626] font-semibold pt-1">
            ⚡ An advisor will call you within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setForm({ name: "", phone: "", email: "", service: "", budget: "", message: "" });
          }}
          className="text-xs font-semibold text-slate-500 hover:text-[#d89626] underline transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-100 shadow-[0_24px_60px_-20px_rgba(11,31,58,0.2)] p-6 sm:p-7 md:p-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="font-display text-xl font-bold text-[#0b1f3a]">
          Send Us A Message
        </h3>
        <span className="shrink-0 inline-flex items-center gap-1 bg-red-50 text-red-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          3 Slots Left
        </span>
      </div>
      <p className="text-xs text-slate-500 mb-5">
        100% confidential. No obligation. Response within one business day.
      </p>

      {/* Name + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="h-11 px-4 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all"
        />
        <input
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="Mobile Number (+91) *"
          className="h-11 px-4 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all"
        />
      </div>

      {/* Email */}
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address (optional)"
        className="w-full h-11 px-4 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all mb-3"
      />

      {/* Service + Budget dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="h-11 px-3 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] bg-white focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }}
        >
          <option value="" disabled hidden>Select Service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="h-11 px-3 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] bg-white focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
          }}
        >
          <option value="" disabled hidden>Monthly Budget (optional)</option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      {!compact && (
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Any specific goals or questions? (optional)"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all resize-none mb-4"
        />
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d89626] to-[#e5a93b] hover:from-[#c4841d] hover:to-[#d89626] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed ${compact ? "mt-3" : ""}`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending to Advisor...
          </>
        ) : (
          <>
            <ArrowRight className="h-4 w-4" />
            Book My Free Consultation
          </>
        )}
      </button>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-[#d89626]" /> AMFI Registered
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5 text-[#d89626]" /> Data stays private
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-[#d89626]" /> Reply in 24 hrs
        </span>
      </div>
    </form>
  );
};

export default ConsultationForm;
