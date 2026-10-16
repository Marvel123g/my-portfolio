import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavBar } from "@/components/sections/NavBar";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

// ── Typography ──────────────────────────────────────────────
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false, // not LCP-critical
  weight: ["400", "500"],
});

// ── Root Metadata ───────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://marvelousdev.netlify.app"),
  title: {
    default: "Olorunwa Marvelous — Frontend Developer",
    template: "%s | Olorunwa Marvelous",
  },
  description:
    "Frontend Developer specialising in React, Next.js, TypeScript & Tailwind CSS. Building thoughtful, high-performance web experiences from Lagos, Nigeria. Available for remote roles.",
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Tailwind CSS",
    "Lagos Nigeria",
    "remote frontend engineer",
    "Olorunwa Marvelous",
    "Framer Motion",
    "UI developer",
    "web developer Nigeria",
    "JavaScript developer",
  ],
  authors: [{ name: "Olorunwa Marvelous", url: "https://marvelousdev.netlify.app" }],
  creator: "Olorunwa Marvelous",
  publisher: "Olorunwa Marvelous",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://marvelousdev.netlify.app",
    siteName: "Olorunwa Marvelous — Portfolio",
    title: "Olorunwa Marvelous — Frontend Developer",
    description:
      "Frontend Developer specialising in React, Next.js & TypeScript. Building high-performance web experiences from Lagos, Nigeria.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Olorunwa Marvelous — Frontend Developer Portfolio",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

// ── Root Layout ─────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-NG"
      className={`${instrumentSerif.variable} ${interTight.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-ink font-sans antialiased selection:bg-accent selection:text-canvas">
        {/* Skip-to-content link */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* Grain overlay — purely decorative */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#131619",
              color: "#f0f0ef",
              border: "1px solid rgba(255,255,255,0.07)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              borderRadius: "12px",
            },
          }}
        />

        {/* Smooth scroll wrapper */}
        <SmoothScroll>
          <NavBar />
          <div id="main-content">{children}</div>
        </SmoothScroll>

        {/* Desktop custom cursor */}
        <CustomCursor />
      </body>
    </html>
  );
}

