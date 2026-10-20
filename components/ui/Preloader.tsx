"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { charReveal } from "@/lib/motion";

interface PreloaderProps {
  onComplete: () => void;
}

const NAME = "Olorunwa Marvelous";
const CHARS = NAME.split("");

/**
 * Animated preloader — reveals name character by character, then fades out.
 * Max ~1.5s. Has a skip button for returning visitors.
 * onComplete fires when animation ends or user skips.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Simulate load progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 80);

    // Auto-complete after 2s
    const timeout = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 600);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="preloader"
          aria-live="assertive"
          aria-label="Loading portfolio"
        >
          {/* Name character reveal */}
          <motion.div
            className="overflow-hidden perspective-[800px]"
            initial="hidden"
            animate="visible"
            style={{ perspective: "800px" }}
          >
            <div className="flex flex-wrap justify-center gap-x-[0.5px] font-space font-medium text-display-lg text-ink tracking-[-0.03em]">
              {CHARS.map((char, i) =>
                char === " " ? (
                  <span key={i} className="w-4" aria-hidden="true" />
                ) : (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={charReveal}
                    className="inline-block"
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>

          {/* Role label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="font-outfit text-[10px] tracking-[0.25em] uppercase text-ink-muted"
          >
            Frontend Developer · React Specialist
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-px bg-canvas-border overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              style={{ scaleX: Math.min(progress, 100) / 100, transformOrigin: "left" }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim hover:text-accent transition-colors duration-200"
            aria-label="Skip preloader animation"
          >
            Skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

