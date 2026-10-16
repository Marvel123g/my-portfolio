import { Variants } from "motion/react";

/** Standard fade-up reveal — used by <Reveal> wrapper */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger children container */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

/** Scale-in reveal for cards */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Word-by-word animated text */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%", clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: "0%",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Preloader name-character reveal */
export const charReveal: Variants = {
  hidden: { opacity: 0, y: "110%", rotateX: -30 },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: {
      delay: i * 0.045,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/** Hero title kinetic reveal */
export const heroTitle: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Timeline entry */
export const timelineEntry: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

