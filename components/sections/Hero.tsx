"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FiArrowDown, FiArrowUpRight, FiMapPin, FiCopy, FiCheck } from "react-icons/fi";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { TypedText } from "@/components/ui/TypedText";
import { staggerContainer } from "@/lib/motion";

const TYPED_WORDS = [
  "Frontend Engineer",
  "React Specialist",
  "Interface Craftsman",
  "Next.js Developer",
];

const METRICS = [
  { val: "2+", label: "Years Building" },
  { val: "5+", label: "Shipped Projects" },
  { val: "12+", label: "Core Technologies" },
];

const CONTENT_VARIANTS = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [lagosTime, setLagosTime] = useState("");

  const email = "marvellousolorunwa23@gmail.com";
  const resumeUrl =
    "https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk";

  // Live Lagos clock
  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-NG", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setLagosTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied!", {
      style: {
        background: "#131619",
        color: "#f0f0ef",
        border: "1px solid rgba(200,240,78,0.3)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
      },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      aria-label="Hero — Olorunwa Marvelous, Frontend Developer"
    >
      {/* Subtle radial glow background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(200,240,78,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-[1fr,420px] gap-16 items-center">
        {/* ── Left: Content ─────────────────────────────── */}
        <motion.div
          variants={CONTENT_VARIANTS}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Status + location row */}
          <motion.div variants={ITEM_VARIANTS} className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-muted border border-accent-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent">
                Available for Frontend Roles
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border">
              <FiMapPin size={10} className="text-ink-dim" />
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim">
                Lagos, NG (UTC+1)
              </span>
              {lagosTime && (
                <span className="font-mono text-[10px] text-ink-dim opacity-60 ml-1">
                  {lagosTime}
                </span>
              )}
            </div>
          </motion.div>

          {/* Terminal prefix */}
          <motion.div variants={ITEM_VARIANTS}>
            <span className="font-mono text-[11px] tracking-[0.15em] text-ink-dim">
              <span className="text-accent">▸</span> whoami / Olorunwa Marvelous
            </span>
          </motion.div>

          {/* Hero headline */}
          <motion.h1
            variants={ITEM_VARIANTS}
            className="font-display text-display-2xl text-ink leading-[0.92] tracking-[-0.04em]"
          >
            I craft{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-accent">thoughtful</span>
            </span>
            <br />& engaging{" "}
            <span className="text-ink-muted">web</span>
            <br />experiences.
          </motion.h1>

          {/* Typed role */}
          <motion.div
            variants={ITEM_VARIANTS}
            className="flex items-center gap-3 py-3 border-y border-canvas-border"
          >
            <span className="font-mono text-[11px] text-ink-dim tracking-[0.1em]">$ role =</span>
            <TypedText
              words={TYPED_WORDS}
              typeSpeed={60}
              deleteSpeed={30}
              className="font-mono text-sm text-ink"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={ITEM_VARIANTS}
            className="text-ink-muted text-base md:text-lg leading-relaxed max-w-xl"
          >
            Detail-oriented frontend developer with a strong foundation in modern JavaScript,
            component systems, and responsive web architecture. Turning complex product designs into
            pixel-perfect, accessible, tactile digital experiences.
          </motion.p>

          {/* CTA group */}
          <motion.div variants={ITEM_VARIANTS} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-accent text-canvas font-mono text-xs tracking-[0.1em] uppercase font-medium hover:bg-accent-dim transition-colors duration-200"
            >
              View Work
              <FiArrowDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform duration-200"
              />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-canvas-border bg-canvas-card text-ink font-mono text-xs tracking-[0.1em] uppercase hover:border-accent/30 hover:text-accent transition-all duration-200"
            >
              Download CV
              <FiArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address to clipboard"
              className="flex items-center gap-2 px-4 py-3 rounded-full border border-canvas-border text-ink-muted font-mono text-xs tracking-[0.1em] uppercase hover:border-canvas-border hover:text-ink transition-all duration-200"
            >
              {copied ? <FiCheck size={13} className="text-accent" /> : <FiCopy size={13} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            variants={ITEM_VARIANTS}
            className="flex items-center gap-8 pt-2"
            role="list"
            aria-label="Career metrics"
          >
            {METRICS.map((m, i) => (
              <div key={m.label} className="flex items-center gap-8" role="listitem">
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-2xl text-ink tracking-tight">{m.val}</span>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim">
                    {m.label}
                  </span>
                </div>
                {i < METRICS.length - 1 && (
                  <div className="h-8 w-px bg-canvas-border" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Card ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-2xl overflow-hidden border border-canvas-border bg-canvas-card shadow-card">
            {/* Window chrome bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-canvas-border bg-canvas-mid">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-[10px] text-ink-dim tracking-[0.1em]">
                marvelous.config.ts
              </span>
              <span className="font-mono text-[9px] text-accent tracking-[0.15em] uppercase">
                LIVE
              </span>
            </div>

            {/* Profile image */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/hero.png"
                alt="Olorunwa Marvelous — Frontend Developer based in Lagos, Nigeria"
                fill
                priority
                sizes="420px"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, var(--canvas-card) 100%)",
                }}
              />
            </div>

            {/* Card meta */}
            <div className="px-5 pb-5 -mt-8 relative z-10">
              <div className="flex flex-col gap-2.5">
                {[
                  { k: "Status", v: "Open to Opportunities", accent: true },
                  { k: "Current", v: "Pixory Flow Agency", accent: false },
                  { k: "Education", v: "Computer Science @ LASU", accent: false },
                  { k: "Location", v: "Ikorodu, Lagos, Nigeria", accent: false },
                ].map(({ k, v, accent }) => (
                  <div key={k} className="flex justify-between items-center py-1.5 border-b border-canvas-border last:border-0">
                    <span className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase">
                      {k}
                    </span>
                    <span
                      className={`font-mono text-[11px] tracking-tight ${
                        accent ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["Next.js 16", "React 19", "TypeScript", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md bg-canvas-mid border border-canvas-border font-mono text-[9px] tracking-[0.1em] uppercase text-ink-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating accent badge */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-canvas-card border border-accent-border shadow-accent-glow"
            aria-hidden="true"
          >
            <span className="font-mono text-[10px] text-accent tracking-[0.15em] uppercase">
              ✦ Frontend Developer
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] text-ink-dim tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-ink-dim to-transparent"
        />
      </motion.div>
    </main>
  );
}

