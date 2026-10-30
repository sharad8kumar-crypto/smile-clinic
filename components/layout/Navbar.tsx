"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-heading text-xl font-semibold">
          Smile<span className="text-brand">Care</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium transition hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark md:inline-block"
        >
          Book Appointment
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-soft bg-white px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 rounded-full bg-brand py-3 font-semibold text-white"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      )}
    </header>
  );
}