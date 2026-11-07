import { site } from "@/data/site";
import Year from "@/components/layout/Year";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Doctor", href: "/#doctor" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book Appointment", href: "/#appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-16 pb-28 text-white md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-semibold">
            Smile<span className="text-accent">Care</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/70">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wider text-accent uppercase">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wider text-accent uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>{site.email}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-5 pt-6 text-xs text-white/70">
        &copy; <Year /> {site.name}. All rights reserved. This is a demo website created for portfolio purposes.
      </div>
    </footer>
  );
}