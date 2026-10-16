import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
          404
        </span>
        <h1 className="font-display text-display-xl text-ink">
          Page not found.
        </h1>
        <p className="text-ink-muted max-w-sm leading-relaxed">
          This route doesn&apos;t exist. You might have followed a broken link, or the page may
          have been moved.
        </p>
        <div className="flex gap-3 mt-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-canvas font-mono text-xs tracking-[0.1em] uppercase hover:bg-accent-dim transition-colors duration-200"
          >
            Back to Home →
          </Link>
          <Link
            href="/#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-canvas-border text-ink-muted font-mono text-xs tracking-[0.1em] uppercase hover:text-ink hover:border-ink-dim transition-all duration-200"
          >
            View Work
          </Link>
        </div>
      </div>
    </main>
  );
}

