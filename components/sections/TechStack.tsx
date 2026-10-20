"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiFirebase,
  SiBootstrap,
  SiChartdotjs,
  SiExpress,
  SiPostgresql,
  SiExpo,
  SiCplusplus,
} from "react-icons/si";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/ui/Marquee";
import { techStack, techCategories, type TechItem } from "@/lib/data/tech";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  SiReact: <SiReact />,
  SiTypescript: <SiTypescript />,
  SiNextdotjs: <SiNextdotjs />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiExpo: <SiExpo />,
  SiFramer: <SiFramer />,
  SiSass: <SiSass />,
  SiFirebase: <SiFirebase />,
  SiBootstrap: <SiBootstrap />,
  SiChartdotjs: <SiChartdotjs />,
  SiExpress: <SiExpress />,
  SiPostgresql: <SiPostgresql />,
  SiCplusplus: <SiCplusplus />,
};

function TechCard({ item }: { item: TechItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, zIndex: 10 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative group flex flex-col gap-3 p-5 rounded-xl border border-canvas-border bg-canvas-card hover:border-accent/20 transition-colors duration-300 cursor-default z-0"
    >
      {/* Icon */}
      <div className="text-2xl text-ink-muted group-hover:text-accent transition-colors duration-200">
        {ICON_MAP[item.icon]}
      </div>

      {/* Name + tag */}
      <div className="flex flex-col gap-0.5 ">
        <span className="font-outfit text-sm text-ink tracking-wide">
          {item.name}
        </span>
        <span className="font-space text-[10px] text-ink-dim tracking-[0.1em] uppercase">
          {item.tag}
        </span>
      </div>

      {/* Proficiency bar */}
      <div className="h-px bg-canvas-border w-full overflow-hidden">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <p className="md:hidden flex items-center gap-[3px] font-space text-white text-xs">
        Proficiency:{" "}
        <span className=" font-bold text-sm">{item.proficiency}%</span>
      </p>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-18 left-[15%] -translate-x-1/2 -translate-y-full z-[999] w-56 p-3 rounded-xl bg-canvas-mid border border-canvas-border shadow-card text-left pointer-events-none"
          >
            <p className="font-mono text-[11px] text-ink-muted leading-relaxed">
              {item.description}
            </p>
            <span className="mt-2 block font-mono text-[10px] text-accent">
              {item.proficiency}% proficiency
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  const marqueeItems = techStack.map((t) => t.name);

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-32 md:py-40 border-t border-canvas-border overflow-hidden"
    >
      {/* Ticker divider */}
      <div className="border-y border-canvas-border py-3 mb-24 overflow-hidden">
        <Marquee items={marqueeItems} speed={25} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <SectionLabel number="02" label="Technical Arsenal" />
            <h2
              id="stack-heading"
              className="font-sans font-medium text-5xl sm:text-6xl text-ink mt-3"
            >
              Technologies &{" "}
              <span className="italic text-ink-muted">tools I leverage.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-xs text-sm leading-relaxed font-space">
            Production tools I use daily to craft performant, scalable, and
            delightful web applications. Hover any card for context.
          </p>
        </Reveal>

        {/* Category filter */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter by technology category"
        >
          {techCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full border font-sans font-medium text-[11px] tracking-[0.1em] uppercase transition-all duration-200",
                activeCategory === cat
                  ? "border-accent/40 bg-accent-muted text-accent"
                  : "border-canvas-border bg-canvas-card text-ink-dim hover:text-ink hover:border-canvas-border",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <Reveal stagger>
          <motion.div
            layout
            className="grid max-[400px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <TechCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
