"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { href: "#about", label: "About", num: "01" },
  { href: "#stack", label: "Stack", num: "02" },
  { href: "#projects", label: "Work", num: "03" },
  { href: "#experience", label: "Experience", num: "04" },
  { href: "#contact", label: "Contact", num: "05" },
];


export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  // Blur nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator
  // Re-runs when `pathname` changes so the observer re-attaches to
  // whichever sections exist on the current page (e.g. after navigating
  // from /work back to /). Without `pathname` in the deps, the observer
  // stays bound to stale/empty targets after a route change.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // Track the section crossing a narrow band below the fixed navbar.
      // A percentage threshold can fail for tall sections such as Projects.
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Clear the active-section underline when we leave the home page,
  // so the last active link doesn't stay highlighted on other routes.
  useEffect(() => {
    if (pathname !== "/") setActiveSection("");
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Smooth-scroll to a section. If the section isn't on the current page
  // (e.g. we're on /work but the link points to #about), navigate to /#about
  // so the browser scrolls to the target after the route change.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = href.startsWith("#") ? href.slice(1) : null;
    if (!id) return;

    const el = document.getElementById(id);

    // If we're not on the home page, or the section doesn't exist here,
    // send the user to the home page with the hash.
    if (pathname !== "/" || !el) {
      e.preventDefault();
      router.push(`/#${id}`);
      setMobileOpen(false);
      return;
    }

    // We're on the home page and the section exists — let the default
    // anchor behavior (smooth scroll) handle it, just close the menu.
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeIn' }}
        className="fixed top-0 left-0 right-0 z-[999] backdrop-blur-md bg-canvas/80 border-b border-canvas-border shadow-[0_1px_0_rgb(var(--accent-rgb)/0.06)]"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-outfit font-medium text-xs tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors duration-200"
            aria-label="Olorunwa Marvelous — home"
          >
            <span className="text-accent">M</span>arvelous
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden min-[890px]:flex items-center gap-8"
          >
            {NAV_LINKS.map(({ href, label, num }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={cn(
                  "group relative font-space font-medium text-[11px] tracking-[0.15em] uppercase transition-colors duration-200",
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
          <div className="hidden min-[890px]:flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-space font-medium text-[11px] tracking-[0.15em] uppercase text-ink-muted hover:text-accent transition-colors duration-200"
            >
              Résumé ↗
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent-muted font-space font-medium text-[11px] tracking-[0.12em] uppercase text-accent hover:bg-accent hover:text-canvas transition-all duration-200"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="min-[890px]:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {!mobileOpen ? (<FiMenu size={30}/>) : <FiX size={30}/>}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-canvas flex flex-col justify-center px-8"
            aria-label="Mobile navigation"
          >
            <nav
              className="flex flex-col gap-2"
              aria-label="Mobile main navigation"
            >
              {NAV_LINKS.map(({ href, label, num }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  onClick={(e) => handleNavClick(e, href)}
                  className="group flex items-baseline gap-4 py-3 border-b border-canvas-border"
                >
                  <span className="font-outfit text-[10px] text-ink-dim tracking-[0.2em]">
                    {num}
                  </span>
                  <span className="font-space text-2xl text-ink transition-colors duration-200">
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
                className="font-mono text-xs text-ink-muted transition-colors duration-200"
              >
                marvellousolorunwa23@gmail.com
              </a>
              <a
                href="tel:+2348145038125"
                className="font-mono text-xs text-ink-dim transition-colors duration-200"
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