import { services } from "@/data/site";

const extras = ["Digital X-Ray", "Sterilized Tools", "Painless Treatment", "Transparent Pricing"];

export default function TrustMarquee() {
  const items = [...services.map((s) => s.title), ...extras];

  return (
    <div
      className="overflow-hidden bg-brand-dark py-5 text-white"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div className="animate-marquee flex w-max gap-12">
        {/* Items 2 baar render hote hain taaki loop beech mein toote nahi */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-medium tracking-wide whitespace-nowrap">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}