export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  focus: string;
}

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Pixory Flow Agency",
    period: "2026 — Present",
    type: "Full-time",
    description:
      "Building production-grade client interfaces at a fast-moving digital agency, working across multiple concurrent product workstreams.",
    achievements: [
      "Leading frontend development for D-ASSET, a full-stack asset management platform built with React, TypeScript, Express, and PostgreSQL.",
      "Implementing reusable design systems and component libraries with Tailwind CSS and cva for multi-client consistency.",
      "Collaborating with design and backend teams to ship responsive, accessible interfaces on aggressive timelines.",
      "Introducing Framer Motion micro-interactions and scroll-driven animations that improved user engagement metrics.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Express", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Dufil Prima Foods Ltd",
    period: "2026",
    type: "Contract",
    description:
      "Short-term frontend engineering engagement at a major FMCG company, focused on internal tool UI development.",
    achievements: [
      "Developed and maintained responsive internal dashboards used by operations teams.",
      "Refactored legacy jQuery UI to modern React components, reducing codebase size by 35%.",
      "Implemented accessible form systems with real-time validation, improving data entry accuracy.",
    ],
    tech: ["React", "JavaScript", "CSS", "Bootstrap"],
  },
];

export const education: Education[] = [
  {
    degree: "BSc Computer Science",
    institution: "Lagos State University (LASU)",
    period: "2023 — Present",
    focus:
      "Core curriculum covering data structures, algorithms, software engineering, databases, and systems design.",
  },
  {
    degree: "WASSCE (Senior Secondary Certificate)",
    institution: "D'solid Crystal Academy",
    period: "2016 — 2022",
    focus: "Science track with distinction in Mathematics and Physics.",
  },
];

