import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  Instrument_Serif,
  Inter_Tight,
  JetBrains_Mono,
  Outfit,
  Space_Grotesk,
} from "next/font/google";

import { Toaster } from "react-hot-toast";

import { NavBar } from "@/components/sections/NavBar";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

import "./globals.css";

// ─────────────────────────────────────────────
// Typography
// ─────────────────────────────────────────────

// Primary font: clean, modern, and readable.
// Used for body text, navigation, buttons, and UI.
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  preload: true,
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

// Display font: adds personality to selected headings.
// Best used for editorial accents rather than every heading.
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

// Monospace font: ideal for code, technical labels,
// and small developer-focused details.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

// ─────────────────────────────────────────────
// SEO & Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://marvelousdev.netlify.app"),

  title: {
    default: "Olorunwa Marvelous — Frontend Developer",
    template: "%s | Olorunwa Marvelous",
  },

  description:
    "Frontend Developer specialising in React, Next.js, TypeScript, and Tailwind CSS. Building thoughtful, high-performance web experiences from Lagos, Nigeria. Available for remote opportunities.",

  keywords: [
    "Olorunwa Marvelous",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Frontend Engineer Nigeria",
    "Remote Frontend Developer",
    "Web Developer Lagos",
    "Framer Motion",
  ],

  authors: [
    {
      name: "Olorunwa Marvelous",
      url: "https://marvelousdev.netlify.app",
    },
  ],

  creator: "Olorunwa Marvelous",
  publisher: "Olorunwa Marvelous",

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://marvelousdev.netlify.app",
    siteName: "Olorunwa Marvelous — Portfolio",

    title: "Olorunwa Marvelous — Frontend Developer",

    description:
      "Frontend Developer specialising in React, Next.js, and TypeScript. Building thoughtful, high-performance web experiences from Lagos, Nigeria.",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

// ─────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-NG"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${space.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-canvas text-ink antialiased selection:bg-accent selection:text-canvas"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {/* Accessibility: skip navigation */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* Decorative grain texture */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--canvas-card)",
              color: "var(--ink)",
              border: "1px solid var(--canvas-border)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.8rem",
              borderRadius: "12px",
            },
          }}
        />

        {/* Application content */}
        <SmoothScroll>
          <NavBar />

          <main id="main-content">{children}</main>
        </SmoothScroll>

        {/* Custom cursor */}
        <CustomCursor />
      </body>
    </html>
  );
}
