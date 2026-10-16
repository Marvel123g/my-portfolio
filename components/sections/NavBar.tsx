"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About", num: "01" },
  { href: "#stack", label: "Stack", num: "02" },
  { href: "#projects", label: "Work", num: "03" },
  { href: "#experience", label: "Experience", num: "04" },
  { href: "#contact", label: "Contact", num: "05" },
];

const MOBILE_MENU_VARIANTS = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
};

const LINK_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Blur nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-md bg-canvas/80 border-b border-canvas-border shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent",
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors duration-200"
            aria-label="Olorunwa Marvelous — home"
          >
            <span className="text-accent">M</span>arvelous
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label, num }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "group relative font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-200",
                  activeSection === href.slice(1)
                    ? "text-accent"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                <span className="text-ink-dim text-[9px] mr-1">{num}</span>
                {label}
                {activeSection === href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-ink-muted hover:text-accent transition-colors duration-200"
            >
              Résumé ↗
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent-muted font-mono text-[11px] tracking-[0.12em] uppercase text-accent hover:bg-accent hover:text-canvas transition-all duration-200"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-px bg-ink transition-all duration-200"
              style={{ width: mobileOpen ? "24px" : "24px" }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-px bg-ink"
              style={{ width: "16px" }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-px bg-ink transition-all duration-200"
              style={{ width: "24px" }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            variants={MOBILE_MENU_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-canvas flex flex-col justify-center px-8"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile main navigation">
              {NAV_LINKS.map(({ href, label, num }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  custom={i}
                  variants={LINK_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline gap-4 py-4 border-b border-canvas-border"
                >
                  <span className="font-mono text-[10px] text-ink-dim tracking-[0.2em]">{num}</span>
                  <span className="font-display text-display-lg text-ink group-hover:text-accent transition-colors duration-200">
                    {label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col gap-2"
            >
              <a
                href="mailto:marvellousolorunwa23@gmail.com"
                className="font-mono text-xs text-ink-muted hover:text-accent transition-colors duration-200"
              >
                marvellousolorunwa23@gmail.com
              </a>
              <a
                href="tel:+2348145038125"
                className="font-mono text-xs text-ink-dim hover:text-ink transition-colors duration-200"
              >
                +234 814 503 8125
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

