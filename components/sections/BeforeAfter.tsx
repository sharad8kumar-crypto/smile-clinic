"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { beforeAfter } from "@/data/site";
import smileImg from "@/public/images/smile.jpg";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <section id="results" className="scroll-mt-20 bg-brand-soft py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Real Results"
          title={beforeAfter.treatment}
          subtitle={beforeAfter.note}
        />

        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl select-none">
          {/* AFTER: neeche wali layer (original photo) */}
          <Image
            src={smileImg}
            alt="Smile after treatment"
            fill
            placeholder="blur"
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
          <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand">
            After
          </span>

          {/* BEFORE: upar wali layer (peeli dull photo), slider ke hisaab se clip hoti hai */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image
              src={smileImg}
              alt="Smile before treatment"
              fill
              placeholder="blur"
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover sepia brightness-90 saturate-50"
            />
          </div>
          <span className="absolute top-4 left-4 rounded-full bg-brand-dark px-3 py-1 text-xs font-semibold text-white">
            Before
          </span>

          {/* Divider line + handle */}
          <div
            className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <MoveHorizontal className="text-brand" size={22} />
            </div>
          </div>

          {/* Invisible range input: mouse, touch aur keyboard sab handle karta hai */}
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}