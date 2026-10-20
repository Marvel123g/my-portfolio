import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
        space: ["var(--font-space)"],
        outfit: ["var(--font-outfit)"],
        // montserrat: ["var(--font-montserrat)"],
        // nunito_san: ["var(--font-nunito_san)"],
      },
      colors: {
        // Cornflower blue primary accent
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          dim: "rgb(var(--accent-dim-rgb) / <alpha-value>)",
          muted: "rgb(var(--accent-rgb) / 0.09)",
          border: "rgb(var(--accent-rgb) / 0.2)",
        },
        // Quiet champagne secondary accent
        secondary: {
          DEFAULT: "rgb(var(--secondary-rgb) / <alpha-value>)",
          muted: "rgb(var(--secondary-rgb) / 0.1)",
          border: "rgb(var(--secondary-rgb) / 0.25)",
        },
        // Cinematic navy surfaces
        canvas: {
          DEFAULT: "rgb(var(--canvas-rgb) / <alpha-value>)",
          mid: "rgb(var(--canvas-mid-rgb) / <alpha-value>)",
          card: "rgb(var(--canvas-card-rgb) / <alpha-value>)",
          border: "rgb(var(--canvas-border-rgb) / 0.13)",
        },
        surface: {
          blue: "rgb(var(--surface-blue-rgb) / <alpha-value>)",
          warm: "rgb(var(--surface-warm-rgb) / <alpha-value>)",
        },
        // Deep green-gray text hierarchy
        ink: {
          DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)",
          muted: "rgb(var(--ink-muted-rgb) / <alpha-value>)",
          dim: "rgb(var(--ink-dim-rgb) / <alpha-value>)",
        },
        danger: "rgb(var(--danger-rgb) / <alpha-value>)",
        signal: {
          close: "rgb(var(--signal-close-rgb) / <alpha-value>)",
          minimize: "rgb(var(--signal-minimize-rgb) / <alpha-value>)",
          open: "rgb(var(--signal-open-rgb) / <alpha-value>)",
        },
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "112": "28rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        "display-2xl": [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(1.875rem, 3.5vw, 3rem)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        ticker: "ticker 30s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        grain: "url('/grain.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "accent-glow": "0 0 40px rgb(var(--accent-rgb) / 0.14)",
        card: "0 1px 0 rgb(var(--canvas-border-rgb) / 0.05), 0 8px 28px rgb(0 0 0 / 0.2)",
        "card-hover":
          "0 1px 0 rgb(var(--canvas-border-rgb) / 0.1), 0 12px 44px rgb(0 0 0 / 0.3)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};

export default config;
