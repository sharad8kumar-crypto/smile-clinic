"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Services", href: "/#services", id: "services" },
  { label: "Doctor", href: "/#doctor", id: "doctor" },
  { label: "Reviews", href: "/#testimonials", id: "testimonials" },
  { label: "FAQ", href: "/#faq", id: "faq" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: jo section screen ke beech mein hai, wahi active hota hai
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Service pages pe koi link highlight nahi hota
  const current = pathname === "/" ? active : "";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-heading text-xl font-semibold">
          Smile<span className="text-brand">Care</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={l.href}
                className={`relative py-1 text-sm font-medium transition hover:text-brand ${
                  current === l.id ? "text-brand" : ""
                }`}
              >
                {l.label}
                {current === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#appointment"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark md:inline-block"
        >
          Book Appointment
        </Link>

           <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-soft bg-white px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 py-4">
            {links.map((l) => (
              <li key={l.id}>
                <Link href={l.href} onClick={() => setOpen(false)} className="font-medium">
                  {l.label}
                </Link>
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