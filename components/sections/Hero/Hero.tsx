"use client";

import { motion, useReducedMotion } from "motion/react";

import { HeroStatus } from "./HeroStatus";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroMetrics } from "./HeroMetrics";
import { HeroProfile } from "./HeroProfile";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-canvas pb-24 pt-28 md:pb-28 md:pt-32"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/[0.035] blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-secondary/[0.045] blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[minmax(0,1fr)_minmax(300px,400px)] md:gap-10 md:px-10 lg:gap-16">
        {/* Left column */}
        <div className="flex min-w-0 flex-col items-start gap-7">
          <HeroStatus />

          <HeroContent />

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.45,
            }}
            className="w-full"
          >
            <HeroActions />
          </motion.div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.55,
            }}
            className="w-full"
          >
            <HeroMetrics />
          </motion.div>
        </div>

        {/* Right column */}
        <HeroProfile />
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        initial={false}
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: [0, 5, 0] }
        }
        transition={{
          duration: shouldReduceMotion ? 0 : 1.8,
          repeat: shouldReduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1.5 right-1/2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 rounded-md text-ink-dim transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:bottom-3"
        aria-label="Scroll to projects"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          Explore
        </span>

        <span
          aria-hidden="true"
          className="h-7 w-px bg-gradient-to-b from-ink-dim to-transparent"
        />
      </motion.a>
    </section>
  );
}