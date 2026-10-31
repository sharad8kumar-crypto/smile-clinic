"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Baby, RotateCcw, User } from "lucide-react";
import { finder, services } from "@/data/site";

type Step = "who" | "concern" | "result";

const optionCls =
  "flex w-full items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-left font-medium transition hover:border-accent hover:bg-white/10";

export default function SmileFinder() {
  const [step, setStep] = useState<Step>("who");
  const [slug, setSlug] = useState<string | null>(null);

  const result = services.find((s) => s.slug === slug);
  const progress = step === "who" ? 1 : step === "concern" ? 2 : 3;

  const pick = (s: string) => {
    setSlug(s);
    setStep("result");
  };
  const reset = () => {
    setSlug(null);
    setStep("who");
  };

  return (
    <section id="finder" className="scroll-mt-20 bg-brand-dark py-24 text-white">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">Smile Finder</span>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Not sure what you need?</h2>
          <p className="mt-4 text-white/70">Answer 2 quick questions and we will point you to the right treatment.</p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
          <div className="mb-8 flex gap-2" aria-hidden>
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${n <= progress ? "bg-accent" : "bg-white/15"}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === "who" && (
              <motion.div key="who" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
                <h3 className="text-xl font-semibold">Who is the treatment for?</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button className={optionCls} onClick={() => setStep("concern")}>
                    <User className="text-accent" /> Myself (adult)
                  </button>
                  <button className={optionCls} onClick={() => pick(finder.childSlug)}>
                    <Baby className="text-accent" /> My child
                  </button>
                </div>
              </motion.div>
            )}

            {step === "concern" && (
              <motion.div key="concern" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
                <h3 className="text-xl font-semibold">What is bothering you the most?</h3>
                <div className="mt-5 space-y-3">
                  {finder.concerns.map((c) => (
                    <button key={c.slug} className={optionCls} onClick={() => pick(c.slug)}>
                      {c.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "result" && result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <p className="text-sm font-semibold tracking-wider text-accent uppercase">We suggest</p>
                <h3 className="mt-2 text-3xl font-semibold">{result.title}</h3>
                <p className="mt-3 text-white/70">{result.desc}</p>
                <p className="mt-4 font-semibold text-accent">{result.price}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${result.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-brand-dark transition hover:brightness-95"
                  >
                    View details <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/#appointment"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
                  >
                    Book appointment
                  </Link>
                </div>

                <p className="mt-6 text-xs text-white/50">
                  This is only a general guide. Your dentist will confirm the right treatment after a check-up.
                </p>
                <button onClick={reset} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white">
                  <RotateCcw size={14} /> Start over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}