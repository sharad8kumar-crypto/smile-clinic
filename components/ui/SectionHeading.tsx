export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-semibold tracking-widest text-brand uppercase">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-brand-dark/70">{subtitle}</p>}
    </div>
  );
}