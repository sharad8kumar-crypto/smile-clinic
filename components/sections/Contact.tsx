import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function Contact() {
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

  const cards = [
    { icon: MapPin, label: "Visit us", value: site.address, href: undefined },
    { icon: Phone, label: "Call us", value: site.phone, href: tel },
    { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Find us easily"
          subtitle="Walk in during clinic hours or book ahead to skip the wait."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: info cards */}
          <div className="space-y-4">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <div className="flex items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5 shadow-sm transition hover:border-brand/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-brand uppercase">{label}</p>
                    <p className="mt-1 font-medium">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">{body}</a>
              ) : (
                <div key={label}>{body}</div>
              );
            })}

            <div className="flex items-start gap-4 rounded-2xl bg-brand-dark p-5 text-white">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <Clock size={22} />
              </div>
              <div className="w-full">
                <p className="text-xs font-semibold tracking-wider text-accent uppercase">Clinic hours</p>
                <ul className="mt-2 space-y-1.5">
                  {site.timings.map((t) => (
                    <li key={t.day} className="flex justify-between text-sm">
                      <span className="text-white/70">{t.day}</span>
                      <span className="font-medium">{t.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="min-h-[360px] overflow-hidden rounded-[2rem] border border-brand/10 shadow-xl">
            <iframe
              title="Clinic location on Google Maps"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}