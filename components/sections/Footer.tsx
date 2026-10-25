import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Marquee } from "@/components/ui/Marquee";
import { FaWhatsapp } from "react-icons/fa";

const TICKER_ITEMS = [
  "React Developer",
  "Next.js Engineer",
  "TypeScript",
  "Framer Motion",
  "UI Craftsman",
  "Tailwind CSS",
  "Open to Work",
  "Lagos · Nigeria",
];

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-canvas-border bg-surface-warm"
      role="contentinfo"
    >
      {/* Ticker */}
      <div className="border-b border-canvas-border py-3 overflow-hidden">
        <Marquee items={TICKER_ITEMS} speed={20} separator="·" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-0">
          {/* Brand */}
          <div className="flex flex-col gap-4 font-space">
            <Link
              href="/"
              className="font-mono text-sm tracking-[0.15em] uppercase text-ink hover:text-accent transition-colors duration-200"
              aria-label="Back to top — Olorunwa Marvelous"
            >
              <span className="text-accent">M</span>arvelous
            </Link>
            <p className="text-ink-muted text-sm leading-relaxed max-w-xs">
              Frontend Developer crafting thoughtful, high-performance web
              experiences from Lagos, Nigeria.
            </p>
            <p className="font-mono text-[10px] text-ink-dim tracking-[0.12em] uppercase">
              Available for work · Remote-first
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4 md:mx-auto">
            <p className="font-outfit font-bold text-[11px] tracking-[0.2em] uppercase text-ink-dim mb-1">
              Navigation
            </p>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-xs font-medium text-ink-muted hover:text-accent transition-colors duration-200 tracking-[0.08em]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials + legal */}
          <div className="flex flex-col gap-4 md:items-end">
            <p className="font-mono font-medium text-[10px] tracking-[0.2em] uppercase text-ink-dim mb-1">
              Connect
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Marvel123g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-canvas-border text-ink-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/marvellous-olorunwa-16aa72362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-canvas-border text-ink-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="https://wa.me/2348145038125?text=Hi%20Marvelous%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-canvas-border text-ink-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
            <a
              href="mailto:marvellousolorunwa23@gmail.com"
              className="font-space font-medium text-sm text-ink-muted hover:text-accent transition-colors duration-200"
            >
              marvellousolorunwa23@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-canvas-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono font-bold text-[10px] text-ink-dim tracking-[0.12em]">
            © {new Date().getFullYear()} Olorunwa Marvelous. All rights
            reserved.
          </p>
          <p className="font-mono font-bold text-[10px] text-ink-dim tracking-[0.08em]">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
