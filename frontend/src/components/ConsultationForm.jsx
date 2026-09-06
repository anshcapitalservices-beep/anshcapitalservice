import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Lock, Clock } from "lucide-react";
import { toast } from "sonner";

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

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Thank you! Our advisor will reach out within 24 hours.");
    setForm({ name: "", phone: "", email: "", service: "", budget: "", message: "" });
  };

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
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="h-11 px-4 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Mobile Number (+91)"
          className="h-11 px-4 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all"
        />
      </div>

      {/* Email */}
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full h-11 px-4 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all mb-3"
      />

      {/* Service + Budget dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="h-11 px-3 rounded-lg border border-slate-200 text-sm text-[#0b1f3a] bg-white focus:outline-none focus:ring-2 focus:ring-[#d89626]/40 focus:border-[#d89626] transition-all appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
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
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
        >
          <option value="" disabled hidden>Monthly Budget</option>
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

      {/* Submit */}
      <button
        type="submit"
        className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d89626] to-[#e5a93b] hover:from-[#c4841d] hover:to-[#d89626] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all ${compact ? "mt-3" : ""}`}
      >
        <ArrowRight className="h-4 w-4" />
        Book My Free Consultation
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
