"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TypedTextProps {
  words: string[];
  /** ms between typing chars */
  typeSpeed?: number;
  /** ms between delete chars */
  deleteSpeed?: number;
  /** ms pause at full word */
  pauseDuration?: number;
  className?: string;
}

/**
 * Custom typed-text component — replaces react-simple-typewriter.
 * Uses a local hook with Framer Motion for the blinking cursor.
 * Zero external dependencies beyond motion.
 */
export function TypedText({
  words,
  typeSpeed = 65,
  deleteSpeed = 35,
  pauseDuration = 2200,
  className,
}: TypedTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
          typeSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      setPhase("deleting");
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deleteSpeed,
        );
      } else {
        setWordIndex((i) => i + 1);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {displayed}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        className="inline-block ml-[1px] text-[--accent]"
      >
        _
      </motion.span>
    </span>
  );
}

