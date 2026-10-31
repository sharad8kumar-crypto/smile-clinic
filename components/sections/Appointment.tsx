"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock, Loader2, MessageCircle, Phone } from "lucide-react";
import { services, site, timeSlots } from "@/data/site";

type FormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const empty: FormData = { name: "", phone: "", service: "", date: "", time: "", message: "" };

function getToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function validate(f: FormData) {
  const e: Partial<Record<keyof FormData, string>> = {};
  if (f.name.trim().length < 3) e.name = "Please enter your full name";
  if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = "Enter a valid 10-digit mobile number";
  if (!f.service) e.service = "Please select a service";
  if (!f.date) e.date = "Please choose a date";
  else if (f.date < getToday()) e.date = "Please choose a future date";
  else if (new Date(f.date + "T00:00:00").getDay() === 0) e.date = "Clinic is closed on Sundays";
  if (!f.time) e.time = "Please choose a time slot";
  return e;
}

const inputCls =
  "w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-400";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Appointment() {
  const [form, setForm] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [today, setToday] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value }));
    setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Demo site: asli backend nahi hai, isliye 1 second ka fake delay
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  const reset = () => {
    setForm(empty);
    setSent(false);
  };

  const waText = encodeURIComponent(
    `Hi, I booked an appointment on the website.\nName: ${form.name}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}`
  );

  return (
    <section id="appointment" className="scroll-mt-20 bg-brand-dark py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
        {/* Left: info */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">Appointment</span>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Book your visit in under a minute</h2>
          <p className="mt-5 max-w-md text-white/70">
            Pick a slot and we will confirm it shortly. No advance payment and no hidden charges.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 text-accent" size={20} />
              <div>
                {site.timings.map((t) => (
                  <p key={t.day} className="text-sm">
                    <span className="font-semibold">{t.day}:</span> {t.time}
                  </p>
                ))}
              </div>
            </div>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm font-semibold transition hover:text-accent"
            >
              <Phone className="text-accent" size={20} /> {site.phone}
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-[2rem] bg-white p-6 text-brand-dark shadow-2xl md:p-8">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center"
              >
                <CheckCircle2 className="mx-auto text-brand" size={64} />
                <h3 className="mt-4 text-2xl font-semibold">Request received!</h3>
                <p className="mt-2 text-sm text-brand-dark/70">
                  Thanks {form.name.split(" ")[0]}, we will confirm your visit on {form.date} at {form.time} shortly.
                </p>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  <MessageCircle size={18} /> Confirm on WhatsApp
                </a>
                <button onClick={reset} className="mt-4 block w-full text-sm font-medium text-brand underline">
                  Book another appointment
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <Field label="Full name" htmlFor="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    className={inputCls}
                  />
                </Field>

                <Field label="Mobile number" htmlFor="phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    aria-invalid={!!errors.phone}
                    className={inputCls}
                  />
                </Field>

                <Field label="Service" htmlFor="service" error={errors.service}>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    aria-invalid={!!errors.service}
                    className={inputCls}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Date" htmlFor="date" error={errors.date}>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      min={today}
                      onFocus={() => setToday(getToday())}
                      value={form.date}
                      onChange={handleChange}
                      aria-invalid={!!errors.date}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Time slot" htmlFor="time" error={errors.time}>
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      aria-invalid={!!errors.time}
                      className={inputCls}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your problem or any questions"
                    className={inputCls}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Sending...
                    </>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}