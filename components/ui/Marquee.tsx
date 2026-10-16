"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: number; // animation duration in seconds
  className?: string;
  separator?: string;
}

/**
 * Infinite horizontal ticker/marquee.
 * Duplicates items array so the loop is seamless.
 * Pauses on hover.
 * Respects prefers-reduced-motion via CSS.
 */
export function Marquee({
  items,
  speed = 30,
  className,
  separator = "·",
}: MarqueeProps) {
  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden whitespace-nowrap",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="ticker-track inline-flex items-center gap-8"
        style={{ animationDuration: `${speed}s` }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 font-mono text-xs tracking-[0.15em] uppercase text-ink-dim"
          >
            {item}
            <span className="text-accent opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

