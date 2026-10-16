"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-red-400">
          Error
        </span>
        <h1 className="font-display text-display-lg text-ink">
          Something went wrong.
        </h1>
        <p className="text-ink-muted max-w-sm leading-relaxed text-sm">
          An unexpected error occurred. This has been logged. You can try again or return home.
        </p>
        <div className="flex gap-3 mt-2">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-accent text-canvas font-mono text-xs tracking-[0.1em] uppercase hover:bg-accent-dim transition-colors duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-canvas-border text-ink-muted font-mono text-xs tracking-[0.1em] uppercase hover:text-ink hover:border-ink-dim transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

