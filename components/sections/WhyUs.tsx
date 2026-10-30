"use client";

import { motion } from "framer-motion";
import { Award, Baby, CalendarClock, HeartPulse, IndianRupee, ScanLine, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyUs } from "@/data/site";

const icons = {
  heart: HeartPulse,
  scan: ScanLine,
  rupee: IndianRupee,
  shield: ShieldCheck,
  clock: CalendarClock,
  baby: Baby,
  award: Award,
};

const sizes = {
  lg: "sm:col-span-2 md:row-span-2",
  wide: "sm:col-span-2",
  sm: "",
};

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-gradient-to-b from-white to-brand-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Dentistry designed around you"
          subtitle="Small details that make a big difference to your comfort and confidence."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:auto-rows-[minmax(190px,auto)] md:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            const dark = i === 0 || i === 3;
            const tone =
              i === 0
                ? "bg-gradient-to-br from-brand to-brand-dark text-white"
                : i === 3
                  ? "bg-brand-dark text-white"
                  : "border border-brand/10 bg-white";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${sizes[item.size as keyof typeof sizes]} ${tone}`}
              >
                {item.size === "lg" && (
                  <Icon
                    aria-hidden
                    className="absolute -right-6 -bottom-6 text-white/10 transition duration-500 group-hover:scale-110"
                    size={220}
                    strokeWidth={1}
                  />
                )}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    dark ? "bg-white/15 text-accent" : "bg-brand-soft text-brand"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <div className="relative mt-6">
                  <h3 className={`font-semibold ${item.size === "lg" ? "text-3xl" : "text-lg"}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/75" : "text-brand-dark/70"}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}