"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { PROFILE_DETAILS, TECH_STACK } from "./hero.data";

export function HeroProfile() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto hidden w-full max-w-[400px] md:block"
      aria-label="Professional profile"
    >
      <div className="overflow-hidden rounded-2xl border border-canvas-border bg-canvas-card shadow-card">
        {/* Card header */}
        <div className="flex items-center justify-between border-b border-canvas-border px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-close/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-minimize/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-open/80" />
          </div>

          <span className="font-mono text-[10px] text-ink-dim">profile.ts</span>

          <span className="font-mono text-[9px] uppercase tracking-wider text-accent">
            Available
          </span>
        </div>

        {/* Profile image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-canvas-mid">
          <Image
            src="/hero.png"
            alt="Olorunwa Marvelous, frontend developer"
            fill
            priority
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 35vw, 0px"
            className="object-cover object-top"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 60%, var(--canvas-card) 100%)",
            }}
          />
        </div>

        {/* Profile information */}
        <div className="relative z-10 px-5 pb-5">
          <div className="-mt-5 mb-4 font-space">
            <h2 className="text-xl font-sans font-semibold tracking-tight text-ink">
              Olorunwa Marvelous
            </h2>

            <p className="mt-1 text-sm text-ink-muted">Frontend Developer</p>
          </div>

          <dl>
            {PROFILE_DETAILS.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start justify-between gap-4 border-b border-canvas-border py-3 last:border-0 font-space"
              >
                <dt className="shrink-0 pt-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-ink-dim">
                  {detail.label}
                </dt>

                <dd
                  className={`max-w-[65%] text-right text-xs leading-relaxed ${
                    detail.highlight
                      ? "font-medium text-accent"
                      : "text-ink-muted"
                  }`}
                >
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Technology tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {TECH_STACK.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-canvas-border bg-canvas-mid px-2.5 py-1.5 text-[10px] font-medium text-ink-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative badge */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-3 rounded-full border border-accent-border bg-canvas-card px-4 py-2 shadow-card"
      >
        <span className="font-mono text-[10px] tracking-wide text-accent">
          {"<"} Building with purpose {"/>"}
        </span>
      </div>
    </motion.aside>
  );
}
