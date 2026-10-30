import Link from "next/link";
import { Home } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-brand-soft to-white px-5 text-center">
      <AuroraBackground />
      <div className="relative">
        <p className="font-heading text-8xl font-semibold text-brand md:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold md:text-3xl">This page lost its smile</h1>
        <p className="mx-auto mt-3 max-w-md text-brand-dark/70">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          <Home size={18} /> Back to home
        </Link>
      </div>
    </main>
  );
}