export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  type: string;
  status: "live" | "ongoing" | "archived";
  tech: string[];
  image: string;
  url?: string;
  github?: string;
  featured: boolean;
  problem: string;
  process: string;
  solution: string;
  color: string;
}

export const projects: Project[] = [
  {
    slug: "lucidify",
    title: "Lucidify",
    tagline: "A clean, intuitive productivity interface built for deep-work sessions.",
    year: "2024",
    type: "Frontend",
    status: "live",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "AOS"],
    image: "/projects/lucidify.png",
    featured: true,
    color: "#c8f04e",
    problem:
      "Productivity tools are often cluttered and anxiety-inducing. Lucidify needed to feel calm, structured, and frictionless — a digital environment that gets out of the way.",
    process:
      "Started with a minimal component library in Figma, prioritizing whitespace and typographic rhythm. Built with React + TypeScript for strict prop-typing, Tailwind for utility-first styling, and Framer Motion for purposeful micro-interactions.",
    solution:
      "Delivered a distraction-free workspace interface with smooth animated transitions, keyboard-first UX, and a design system built on a strict 4-point spacing grid. Motion is used only to reinforce hierarchy and task completion — never decorative.",
  },
  {
    slug: "bible-study",
    title: "Bible Study",
    tagline: "A scripture-first devotional platform with real-time Firebase sync.",
    year: "2024",
    type: "Full Stack",
    status: "live",
    tech: ["Next.js", "SCSS", "Firebase"],
    image: "/Bible-study.png",
    featured: true,
    color: "#6ee7f7",
    problem:
      "Existing Bible study tools lacked focused reading environments. The goal was a minimal platform where users can read, highlight, and take notes — synced across devices without friction.",
    process:
      "Chose Next.js for SSR/SEO benefits on scripture content, Firebase Realtime Database for instant sync, and SCSS for structured, maintainable styling with component-scoped theming.",
    solution:
      "Built a clean reading interface with highlight persistence, custom note-taking, and real-time sync across sessions. Performance-optimized with Next.js static generation for all scripture pages.",
  },
  {
    slug: "d-asset",
    title: "D-ASSET",
    tagline: "Full-stack asset management platform with real-time dashboards. (Ongoing)",
    year: "2025",
    type: "Full Stack",
    status: "ongoing",
    tech: ["React", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL", "Framer Motion"],
    image: "/d-asset.png",
    featured: true,
    color: "#f7a543",
    problem:
      "Organizations managing physical assets lacked a unified, real-time visibility tool. Spreadsheets created inconsistency, and off-the-shelf solutions were overbuilt.",
    process:
      "Architected a monorepo with React+TypeScript frontend, Express REST API, and PostgreSQL. Designed entity relationship schema for assets, assignments, and audit logs. Implemented JWT auth, role-based access control, and real-time dashboard via polling.",
    solution:
      "A full-stack asset management system with interactive Chart.js dashboards, CSV exports, and a responsive admin interface — currently in active development with Pixory Flow Agency.",
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker",
    tagline: "Full CRUD income & expense tracker with live currency conversion.",
    year: "2023",
    type: "Frontend",
    status: "live",
    tech: ["React", "SCSS"],
    image: "/budget-tracker.png",
    featured: false,
    color: "#a78bfa",
    problem:
      "Personal finance tools are either too complex (Mint, YNAB) or too simple (notes). A focused income/expense tracker with currency flexibility was needed.",
    process:
      "Built with React hooks for state management (useReducer for transaction CRUD), localStorage for persistence, and a free exchange rate API for currency switching.",
    solution:
      "A polished single-page tracker with full CRUD, live currency switching across 15+ currencies, transaction history, and category filtering. Zero dependencies beyond React.",
  },
  {
    slug: "product-list-cart",
    title: "Product List with Cart",
    tagline: "Pixel-perfect Frontend Mentor challenge with interactive cart logic.",
    year: "2023",
    type: "Frontend",
    status: "live",
    tech: ["JavaScript", "SCSS"],
    image: "/product-list.jpg",
    featured: false,
    color: "#fb923c",
    problem:
      "Faithfully implementing a complex Frontend Mentor design system — interactive cart state, quantity modifiers, order calculation, and confirmation modal in vanilla JavaScript.",
    process:
      "No frameworks — pure DOM manipulation with event delegation, module pattern for cart state, and CSS custom properties for theming. Focus on accessibility and keyboard navigation.",
    solution:
      "Pixel-perfect implementation matching the Figma design spec. Full cart CRUD, modal confirmation, and responsive layout across all breakpoints.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

