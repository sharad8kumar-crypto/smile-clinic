export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand/25 blur-3xl" />
      <div className="animate-float-slower absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-3xl" />
      <div className="animate-float-slow absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] rounded-full bg-sky-300/30 blur-3xl" />
      <div className="dot-grid absolute inset-0" />
    </div>
  );
}