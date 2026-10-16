"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Use staggerContainer for children — wrap around a list */
  stagger?: boolean;
  /** Override amount of element visible before trigger */
  amount?: number;
}

/**
 * Scroll-triggered reveal wrapper.
 * Replaces all data-aos="fade-up" usages.
 * Uses whileInView + viewport once:true so each element animates exactly once.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  amount = 0.3,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = stagger
    ? staggerContainer
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveal a single child item — meant to be used as direct child of <Reveal stagger>
 */
export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}

