import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Clock, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { services, serviceDetails, site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

// Build ke time saare 6 pages pehle se bana diye jaate hain (fast loading)
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: serviceDetails[slug].intro };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const detail = serviceDetails[slug];
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Top banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white pt-32 pb-16">
          <AuroraBackground />
          <div className="relative mx-auto max-w-6xl px-5">
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
              <ArrowLeft size={16} /> All services
            </Link>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold md:text-6xl">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-dark/70">{detail.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">{service.price}</span>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Clock size={16} className="text-brand" /> {detail.duration}
              </span>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold md:text-3xl">Why patients choose this</h2>
              <ul className="mt-6 space-y-4">
                {detail.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check size={14} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-2xl font-semibold md:text-3xl">How it works</h2>
              <ol className="mt-6 space-y-5">
                {detail.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl border border-brand/10 bg-white p-5 shadow-sm">
                    <span className="font-heading text-3xl font-semibold text-brand/40">0{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-brand-dark/70">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sticky booking card */}
            <aside className="h-fit rounded-3xl bg-brand-dark p-7 text-white shadow-xl lg:sticky lg:top-28">
              <p className="text-sm font-semibold tracking-wider text-accent uppercase">Book this service</p>
              <p className="mt-3 text-3xl font-semibold">{service.price}</p>
              <p className="mt-2 text-sm text-white/70">Final cost is confirmed after your check-up. No hidden charges.</p>
              <Link
                href="/#appointment"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-brand-dark transition hover:brightness-95"
              >
                <CalendarCheck size={18} /> Book Appointment
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/30 py-3.5 font-semibold transition hover:bg-white/10"
              >
                <Phone size={18} /> {site.phone}
              </a>
            </aside>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-brand-soft py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Other services</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-brand-dark/70">{o.desc}</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-brand transition group-hover:gap-2">
                    Learn more <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}