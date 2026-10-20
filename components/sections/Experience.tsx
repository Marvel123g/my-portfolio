"use client";

import { motion } from "motion/react";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience, education } from "@/lib/data/experience";

function TimelineEntry({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-accent before:ring-4 before:ring-accent/10 after:absolute after:left-[3px] after:top-4 after:bottom-0 after:w-px after:bg-canvas-border"
    >
      {children}
    </motion.div>
  );
}

const RESUME_URL =
  "https://drive.google.com/file/d/1_QOHi66mW_BIgFu1DOZIoBVQxrVo0Hn6/view?usp=drivesdk";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-32 md:py-40 border-t border-canvas-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <Reveal className="mb-16">
          <SectionLabel number="04" label="Experience & Education" />
          <h2
            id="experience-heading"
            className="font-sans text-display-xl text-ink mt-3"
          >
            Career journey &{" "}
            <span className="italic text-ink-muted">credentials.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <FiBriefcase size={16} className="text-accent" aria-hidden="true" />
              <h3 className="font-outfit text-xs tracking-[0.2em] uppercase text-ink-muted">
                Work Experience
              </h3>
            </div>

            <div className="flex flex-col gap-10">
              {experience.map((item, i) => (
                <TimelineEntry key={item.company} index={i}>
                  <div className="flex flex-col gap-4 pb-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                      <div>
                        <h4 className="font-space font-medium text-xl text-ink">{item.role}</h4>
                        <p className="font-outfit text-xs text-accent tracking-[0.08em]">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                        <span className="font-mono text-[10px] tracking-[0.12em] text-ink-dim px-2.5 py-1 rounded-full border border-canvas-border bg-canvas-card">
                          {item.period}
                        </span>
                        <span className="font-sans text-[9px] text-ink-dim tracking-[0.1em] uppercase">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-ink-muted text-sm leading-relaxed font-outfit">{item.description}</p>

                    <ul className="flex flex-col gap-2 font-outfit" aria-label={`Achievements at ${item.company}`}>
                      {item.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                          <span className="text-ink-muted text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech used */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded font-mono text-[9px] tracking-[0.08em] uppercase text-ink-dim border border-canvas-border bg-canvas-mid"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TimelineEntry>
              ))}
            </div>
          </div>

          {/* Education + Resume Download */}
          <div className="flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <FiBookOpen size={16} className="text-accent" aria-hidden="true" />
                <h3 className="font-outfit text-xs tracking-[0.2em] uppercase text-ink-muted">
                  Education
                </h3>
              </div>

              <div className="flex flex-col gap-8">
                {education.map((edu, i) => (
                  <TimelineEntry key={edu.institution} index={i}>
                    <div className="flex flex-col gap-2 pb-6">
                      <div className="flex flex-col md:flex-row items-start md:justify-between gap-2">
                        <h4 className="font-space text-xl text-ink">{edu.degree}</h4>
                        <span className="font-mono text-[10px] text-ink-dim tracking-[0.12em] px-2.5 py-1 rounded-full border border-canvas-border bg-canvas-card shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-outfit font-medium text-xs text-accent tracking-[0.08em]">
                        {edu.institution}
                      </p>
                      <p className="text-ink-muted font-outfit text-sm leading-relaxed">{edu.focus}</p>
                    </div>
                  </TimelineEntry>
                ))}
              </div>
            </div>

            {/* Resume download banner */}
            <Reveal>
              <div className="p-6 rounded-2xl border border-accent/20 bg-accent-muted">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-space text-[10px] tracking-[0.15em] uppercase text-accent mb-2">
                      Download CV
                    </p>
                    <h4 className="font-outfit text-xl text-ink">
                      Want the complete résumé?
                    </h4>
                    <p className="text-ink-muted font-outfit text-sm mt-1 leading-relaxed">
                      Full PDF with references, project details, and contact information.
                    </p>
                  </div>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-accent text-canvas font-sans text-xs tracking-[0.1em] uppercase hover:bg-accent-dim transition-colors duration-200"
                  >
                    Download PDF ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

