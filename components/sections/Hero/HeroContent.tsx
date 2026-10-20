"use client";

import { motion, type Variants } from "motion/react";

import { TypedText } from "@/components/ui/TypedText";
import { TYPED_WORDS } from "./hero.data";

const CONTENT_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={CONTENT_VARIANTS}
      initial="hidden"
      animate="visible"
      className="flex min-w-0 flex-col items-start gap-6"
    >
      {/* Status and location */}
      <motion.div variants={ITEM_VARIANTS}>
        <div className="font-sans text-[12px] tracking-wide text-ink-dim">
          <span className="mr-2 text-accent" aria-hidden="true">
            {"//"}
          </span>
          Frontend development & digital experiences
        </div>
      </motion.div>

      {/* Main headline */}
      <motion.div variants={ITEM_VARIANTS}>
        {/* <h1
          className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          style={{
            fontFamily: "var(--font-body), sans-serif",
          }}
        > */}
        <h1
          id="hero-heading"
          className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-ink sm:text-4xl md:text-5xl lg:text-[5rem] font-space"
        >
          I build thoughtful
          <br className="hidden sm:block" />{" "}
          <span
            className="font-medium italic text-secondary font-space"
          >
            digital experiences.
          </span>
        </h1>
      </motion.div>

      {/* Animated role */}
      <motion.div
        variants={ITEM_VARIANTS}
        className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 border-y border-canvas-border py-4"
      >
        <span className="font-mono text-xs text-ink-dim">
          <span className="text-accent">$</span> role
          <span className="mx-1">=</span>
        </span>

        <div className="min-w-0">
          <TypedText
            words={TYPED_WORDS}
            typeSpeed={60}
            deleteSpeed={30}
            className="text-sm font-medium font-space text-ink sm:text-base"
          />
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.p
        variants={ITEM_VARIANTS}
        className="max-w-xl text-base leading-8 text-ink-muted sm:text-sm font-space"
      >
        I&apos;m a frontend developer focused on building responsive,
        accessible, and performant web applications. I turn complex requirements
        into clean interfaces with React, Next.js, TypeScript, and modern
        frontend technologies.
      </motion.p>
    </motion.div>
  );
}
