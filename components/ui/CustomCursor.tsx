"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.3 });
  const y = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.3 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed -top-4 left-2 z-[10000] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: 14,
          height: 14,
          borderRadius: "50%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-accent"
      />
    </motion.div>
  );
}
