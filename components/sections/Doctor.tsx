"use client";

import { motion } from "framer-motion";
  import { Award, CalendarCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { doctor } from "@/data/site";
import Image from "next/image";
import doctorImg from "@/public/images/doctor.jpg";

export default function Doctor() {
  return (
    <section id="doctor" className="scroll-mt-20 bg-brand-soft py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Meet the Doctor" title="Care you can trust" />

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-sm rounded-[2rem] bg-white p-6 shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
             <Image
               src={doctorImg}
               alt={`${doctor.name}, dentist`}
               fill
               placeholder="blur"
               sizes="(min-width: 768px) 384px, 90vw"
               className="object-cover object-top transition duration-500 hover:scale-105"
             />
          </div>
            <h3 className="mt-5 text-2xl font-semibold">{doctor.name}</h3>
            <p className="text-sm text-brand-dark/70">{doctor.title}</p>
            <p className="mt-1 text-sm font-medium text-brand">{doctor.experience}</p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-brand-dark/80">{doctor.bio}</p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {doctor.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <Award size={16} className="text-brand" /> {c}
                </li>
              ))}
            </ul>

            <a
              href="#appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              <CalendarCheck size={18} /> Book a consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}