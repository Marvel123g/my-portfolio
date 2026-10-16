"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { wordReveal, staggerContainer } from "@/lib/motion";

const BIO_WORDS =
  "Detail-oriented frontend developer who started building with Frontend Mentor challenges and grew into shipping production-grade interfaces. I specialise in React component systems, performance-first UI, and bridging the gap between design intent and browser reality.";

const INTERESTS = ["Coding challenges", "Reading", "Cinema", "UI Craft", "Open-source"];

const FACTS = [
  { label: "Based in", value: "Ikorodu, Lagos, Nigeria" },
  { label: "Currently at", value: "Pixory Flow Agency" },
  { label: "Studying", value: "Computer Science, LASU" },
  { label: "Available", value: "Immediately · Remote / Onsite" },
];

export function About() {
  const words = BIO_WORDS.split(" ");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-32 md:py-40 border-t border-canvas-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* ── Left: Image + facts ──────────────────── */}
          <Reveal className="flex flex-col gap-8">
            {/* Parallax portrait frame */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-canvas-border bg-canvas-card max-w-sm">
                <Image
                  src="/hero.png"
                  alt="Olorunwa Marvelous — a frontend developer from Lagos, Nigeria"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-canvas-card/60 via-transparent to-transparent"
                />
              </div>

              {/* Accent corner element */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-mono text-[8px] text-accent-dim tracking-[0.08em]">
                  ✦ DEV ✦
                </span>
              </motion.div>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-0" role="list" aria-label="Personal details">
              {FACTS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-between items-center py-3 border-b border-canvas-border last:border-0"
                  role="listitem"
                >
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-dim">
                    {label}
                  </span>
                  <span className="font-mono text-[11px] text-ink-muted text-right max-w-[55%]">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* ── Right: Bio + interests ───────────────── */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <SectionLabel number="01" label="About" />
              <h2
                id="about-heading"
                className="font-display text-display-xl text-ink mt-3 mb-0"
              >
                The developer
                <br />
                <span className="italic text-ink-muted">behind the code.</span>
              </h2>
            </Reveal>

            {/* Word-by-word animated bio */}
            <motion.p
              className="text-ink-muted text-lg leading-relaxed flex flex-wrap gap-x-[0.35em] gap-y-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  className="inline-block overflow-hidden"
                  style={{ display: "inline-block" }}
                >
                  <motion.span
                    variants={{
                      hidden: { y: "100%" },
                      visible: {
                        y: "0%",
                        transition: { delay: i * 0.015, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                </motion.span>
              ))}
            </motion.p>

            {/* Extended bio */}
            <Reveal delay={0.1}>
              <p className="text-ink-muted leading-relaxed">
                Currently a Frontend Developer at{" "}
                <span className="text-ink font-medium">Pixory Flow Agency</span>, where I lead UI
                development for client products including{" "}
                <span className="text-accent">D-ASSET</span>, a full-stack asset management
                platform. I&apos;m expanding into{" "}
                <span className="text-ink">React Native and backend engineering</span> — building
                toward full-stack fluency without losing my frontend edge.
              </p>
            </Reveal>

            {/* Interests */}
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
                  Outside of code
                </span>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full border border-canvas-border bg-canvas-card font-mono text-[11px] tracking-[0.08em] text-ink-muted hover:border-accent/30 hover:text-ink transition-all duration-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.2}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-accent hover:gap-3 transition-all duration-200"
              >
                Let&apos;s build together
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

