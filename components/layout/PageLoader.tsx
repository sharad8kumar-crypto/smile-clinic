import { site } from "@/data/site";

export default function PageLoader() {
  return (
    <div
      aria-hidden
      className="page-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark text-white"
    >
      <svg viewBox="0 0 64 64" className="h-20 w-20" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="58" height="58" rx="16" strokeWidth="2" className="text-white/20" />
        <circle cx="23" cy="25" r="3.5" fill="currentColor" stroke="none" className="text-accent" />
        <circle cx="41" cy="25" r="3.5" fill="currentColor" stroke="none" className="text-accent" />
        <path
          pathLength="100"
          d="M18 36c4 10 24 10 28 0"
          strokeWidth="5"
          strokeLinecap="round"
          className="draw-smile text-accent"
        />
      </svg>

      <p className="font-heading mt-5 text-2xl font-semibold">{site.name}</p>

      <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/15">
        <div className="loader-bar h-full origin-left bg-accent" />
      </div>
    </div>
  );
}