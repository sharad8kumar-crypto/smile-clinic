"use client";

import Image from "next/image";
import heroImg from "@/public/images/hero.jpg";
import Counter from "@/components/ui/Counter";
import { motion } from "framer-motion";
import { CalendarCheck, Phone, Star } from "lucide-react";
import { site } from "@/data/site";
import OpenStatus from "@/components/ui/OpenStatus";
import AuroraBackground from "@/components/ui/AuroraBackground";
import RevealText from "@/components/ui/RevealText";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stats = [
  { to: 10, suffix: "+", decimals: 0, label: "Years experience" },
  { to: 5000, suffix: "+", decimals: 0, label: "Happy patients" },
  { to: 4.9, suffix: "", decimals: 1, label: "Google rating" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white pt-32 pb-20">
       <AuroraBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        {/* Left: text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
          <OpenStatus />
          </motion.div>

                <h1 className="mt-5 text-4xl leading-tight font-semibold md:text-6xl">
                   <span className="sr-only">Painless dentistry for a confident smile.</span>
                   <RevealText text="Painless dentistry for a" delay={0.2} />
                   <RevealText text="confident smile." className="text-brand" delay={0.6} />
                 </h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-lg text-brand-dark/70">
            Modern equipment, gentle treatment and transparent pricing. Book your visit in under a minute.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              <CalendarCheck size={18} /> Book Appointment
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-7 py-3.5 font-semibold transition hover:border-brand"
            >
              <Phone size={18} /> {site.phone}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-semibold">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="text-sm text-brand-dark/70">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: visual */}
        <motion.div
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
            src={heroImg}
            alt="Smiling patient at a modern dental clinic"
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 768px) 448px, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
        </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl"
          >
            <Star className="text-accent" fill="currentColor" size={20} />
            <div>
              <p className="text-sm font-semibold">4.9 / 5</p>
              <p className="text-xs text-brand-dark/70">500+ reviews</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -right-4 bottom-10 rounded-2xl bg-white px-4 py-3 shadow-xl"
          >
            <p className="text-sm font-semibold">Next slot today</p>
            <p className="text-xs text-brand-dark/70">5:30 PM available</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}