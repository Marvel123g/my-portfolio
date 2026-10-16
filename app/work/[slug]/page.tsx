import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Per-route metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} — Case Study`;
  const description = `${project.tagline} Built with ${project.tech.join(", ")}.`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title,
      description,
      url: `/work/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} project screenshot`,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // JSON-LD for CreativeWork
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.tagline,
    creator: {
      "@type": "Person",
      name: "Olorunwa Marvelous",
      url: "https://marvelousdev.netlify.app",
    },
    programmingLanguage: project.tech,
    url: project.url ?? `https://marvelousdev.netlify.app/work/${project.slug}`,
    codeRepository: project.github,
    dateCreated: project.year,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />

      <main className="min-h-screen pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          {/* Back nav */}
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-ink-dim">
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#projects" className="hover:text-accent transition-colors duration-200">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink">{project.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
                {project.year}
              </span>
              <span className="w-4 h-px bg-canvas-border" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
                {project.type}
              </span>
              <span className="w-4 h-px bg-canvas-border" />
              <span
                className={`flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase ${
                  project.status === "ongoing"
                    ? "text-amber-400"
                    : "text-accent"
                }`}
              >
                <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
                {project.status === "ongoing" ? "In Progress" : "Live"}
              </span>
            </div>
            <h1 className="font-display text-display-xl text-ink mb-4">{project.title}</h1>
            <p className="text-ink-muted text-xl leading-relaxed mb-6">{project.tagline}</p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-canvas font-mono text-xs tracking-[0.1em] uppercase hover:bg-accent-dim transition-colors duration-200"
                >
                  View Live
                  <FiArrowUpRight size={13} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-canvas-border text-ink-muted font-mono text-xs tracking-[0.1em] uppercase hover:text-ink hover:border-ink-dim transition-all duration-200"
                >
                  <FiGithub size={13} />
                  Source Code
                </a>
              )}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-6" aria-label="Technologies used">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-canvas-border bg-canvas-card font-mono text-[10px] tracking-[0.08em] uppercase text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </header>

          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-canvas-border bg-canvas-card mb-16">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Case study content — Problem / Process / Solution */}
          <div className="flex flex-col gap-16">
            {[
              { label: "Problem", num: "01", content: project.problem },
              { label: "Process", num: "02", content: project.process },
              { label: "Solution", num: "03", content: project.solution },
            ].map(({ label, num, content }) => (
              <section key={label} aria-labelledby={`section-${label}`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] text-ink-dim tracking-[0.2em]">{num}</span>
                  <span className="h-px w-8 bg-canvas-border" />
                  <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
                    {label}
                  </span>
                </div>
                <p
                  id={`section-${label}`}
                  className="text-ink-muted text-lg leading-relaxed max-w-2xl"
                >
                  {content}
                </p>
              </section>
            ))}
          </div>

          {/* Navigation — prev/next projects */}
          <div className="mt-24 pt-12 border-t border-canvas-border flex justify-between items-center">
            <Link
              href="/#projects"
              className="group flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-ink-muted hover:text-accent transition-colors duration-200"
            >
              <FiArrowLeft
                size={13}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              All Projects
            </Link>
            <Link
              href="/#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent-muted text-accent font-mono text-xs tracking-[0.1em] uppercase hover:bg-accent hover:text-canvas transition-all duration-200"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

