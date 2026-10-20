"use client"
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/lib/data/projects";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Work",
//   description:
//     "All projects by Olorunwa Marvelous — frontend, full-stack, and design engineering work.",
//   alternates: { canonical: "/work" },
// };

export default function WorkIndex() {
  const router = useRouter()
  return (
    <main className="min-h-screen pt-32 pb-24 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <span className="font-mono font-medium text-[10px] tracking-[0.2em] uppercase text-accent">
            03 / Selected Work
          </span>
          <h1 className="font-sans font-medium text-6xl text-ink mt-3">
            All <span className="italic text-ink-muted">projects.</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link

                  href={`/work/${project.slug}`}
              key={project.slug}
              className="group flex flex-col rounded-2xl overflow-hidden border border-canvas-border bg-canvas-card hover:border-accent/15 transition-colors duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-[9px] text-ink-dim tracking-[0.15em] uppercase">
                    {project.year} · {project.type}
                  </span>
                  <span
                    className={`ml-auto flex items-center gap-1 font-mono text-[9px] tracking-[0.1em] uppercase ${
                      project.status === "ongoing"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {project.status === "ongoing" ? "In Progress" : "Live"}
                  </span>
                </div>
                <h2 className="font-space font-bold text-2xl text-ink">
                  {project.title}
                </h2>
                <p className="text-ink-muted font-outfit -mt-3 font-medium text-sm leading-relaxed flex-1">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded font-sans font-semibold text-[9px] tracking-[0.06em] uppercase text-ink/60 border border-canvas-border bg-canvas-mid"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded font-mono text-[9px] text-ink-dim border border-canvas-border bg-canvas-mid">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                <button
                 onClick={() => router.push(`/work/${project.slug}`)}
                  className="flex items-center gap-2 font-space font-bold text-[11px] tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors duration-200 mt-2"
                  aria-label={`Read ${project.title} case study`}
                >
                  Case Study
                  <FiArrowUpRight size={12} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
