"use client";

import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Smile, Crown, Baby, ShieldCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { services } from "@/data/site";
import Link from "next/link";

const icons = {
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  smile: Smile,
  crown: Crown,
  baby: Baby,
  shield: ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete dental care under one roof"
          subtitle="Clear pricing, no hidden charges. Final cost is confirmed after your check-up."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-brand/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl"
              >
                <SpotlightCard className="h-full rounded-3xl p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand">{s.price}</span>
                      <Link href={`/services/${s.slug}`} className="flex items-center gap-1 text-sm font-medium transition group-hover:gap-2">
                          Learn more<span className="sr-only"> about {s.title}</span> <ArrowRight size={16} />
                     </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}