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
      "Restructure the frontend UI for (PixoryFlow Agency Website), the agency platform built using Next.js, TypeScript and Tailwindcss",
      "Implementing reusable design systems and component libraries with Tailwind CSS and AOS library for animation on scroll.",
      "Collaborating with design and other developers teams to ship responsive, accessible interfaces on aggressive timelines.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "AOS", "Next.js"],
  },
  {
    role: "Frontend Developer & IT Support",
    company: "Dufil Prima Foods Ltd",
    period: "2026",
    type: "Intern",
    description:
      "Short-term frontend engineering engagement at a major Food and Beverages company, focused on internal tool UI development and IT Operations.",
    achievements: [
      "Supervised by a Senior Developer, I Developed D-Asset, a fullstack web-based asset management system designed to help organizations track assets, monitor operational status, and manage maintenance workflows",
      // "Built responsive React and TypeScript interfaces for asset inventory, maintenance requests, asset transfers, and administrative operations.",
      "Integrated frontend workflows with Node.js, Express, and PostgreSQL, implementing role-based access and structured asset management processes.",
      "Supported IT operations by assisting with technical troubleshooting, system issues, and day-to-day technology support for staff."
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "IT Support", "Hardware Troubleshooting", "Network Troubleshooting"],
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

