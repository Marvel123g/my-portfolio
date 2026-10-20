"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredProjects, type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative grid  gap-0 rounded-2xl overflow-hidden border border-canvas-border bg-canvas-card hover:border-accent/15 transition-colors duration-300",
        isEven
          ? "md:grid-cols-[2fr_1fr]"
          : "md:[&>*:first-child]:order-2 md:grid-cols-[1.5fr_1fr]",
      )}
      aria-label={`${project.title} — ${project.type} project`}
    >
      {/* Image side */}
      <div className="relative h-72 md:h-auto overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project`}
          fill
          // sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-canvas-card/40 via-transparent to-transparent"
        />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono font-extrabold backdrop-blur-lg text-[10px] tracking-[0.12em] uppercase z-30",
              project.status === "ongoing"
                ? "bg-secondary-muted border border-amber-700 text-amber-700"
                : "bg-accent-muted border border-slate-800 text-slate-800",
            )}
          >
            <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
            {project.status === "ongoing" ? "In Progress" : "Live"}
          </span>
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-between p-8 md:p-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-ink-dim">
                {project.year} · {project.type}
              </span>
              <h3 className="font-space font-medium text-display-md text-ink">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-2 mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-canvas-border text-ink-dim hover:text-ink hover:border-ink-dim transition-all duration-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub size={13} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-canvas-border text-ink-dim hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label={`Visit ${project.title} live site`}
                >
                  <FiArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>

          <p className="text-ink-muted font-outfit leading-relaxed text-sm">
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div
            className="flex flex-wrap gap-1.5"
            aria-label="Technologies used"
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md border border-canvas-border bg-canvas-mid font-mono text-[10px] tracking-[0.08em] text-ink-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Case study link */}
        <div className="mt-8 pt-6 border-t border-canvas-border">
          <Link
            href={`/work/${project.slug}`}
            className="group/link flex items-center justify-between"
            aria-label={`Read ${project.title} case study`}
          >
            <span className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-ink-muted group-hover/link:text-accent transition-colors duration-200">
              Read Case Study
            </span>
            <motion.div
              animate={hovered ? { x: 4 } : { x: 0 }}
              className="w-8 h-8 rounded-full border border-canvas-border flex items-center justify-center text-ink-muted group-hover/link:border-accent/30 group-hover/link:text-accent transition-all duration-200"
            >
              <FiArrowUpRight size={13} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-32 md:py-40 border-t border-canvas-border bg-surface-warm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel number="03" label="Selected Work" />
            <h2
              id="projects-heading"
              className="font-sans font-medium text-6xl text-ink mt-3"
            >
              Projects that{" "}
              <span className="italic text-ink-muted">define the craft.</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-xs text-sm font-space leading-relaxed">
            Each project is a case study — problem, process, and solution.
          </p>
        </Reveal>

        {/* Featured projects — alternating layout */}
        <div className="flex flex-col gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* All projects CTA */}
        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-canvas-border bg-canvas-card font-mono text-xs tracking-[0.15em] uppercase text-ink-muted hover:border-accent/30 hover:text-accent transition-all duration-200"
          >
            View All Projects
            <FiArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
