"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Smiles we are proud of"
          subtitle="Rated 4.9 out of 5 by 500+ patients on Google."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-brand/10 bg-white p-7 shadow-sm transition hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-6 text-brand/15" size={44} />

              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={18} className="text-accent" fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-4 leading-relaxed text-brand-dark/80">&ldquo;{t.quote}&rdquo;</blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-semibold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-brand-dark/60">{t.treatment}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}