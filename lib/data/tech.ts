export interface TechItem {
  name: string;
  category: "Core & Language" | "Framework" | "Styling" | "Animation & Data" | "Backend & DB";
  tag: string;
  icon: string; // react-icons Si identifier
  proficiency: number; // 0-100
  description: string;
}

export const techStack: TechItem[] = [
  {
    name: "React",
    category: "Framework",
    tag: "UI Library",
    icon: "SiReact",
    proficiency: 92,
    description: "Component architecture, hooks, Context, Server Components, React 19 actions.",
  },
  {
    name: "TypeScript",
    category: "Core & Language",
    tag: "Language",
    icon: "SiTypescript",
    proficiency: 85,
    description: "Strict typing, generics, utility types, discriminated unions, module augmentation.",
  },
  {
    name: "Next.js",
    category: "Framework",
    tag: "Full-Stack",
    icon: "SiNextdotjs",
    proficiency: 82,
    description: "App Router, RSC, dynamic routes, ISR/SSG/SSR, metadata API, image optimization.",
  },
  {
    name: "JavaScript",
    category: "Core & Language",
    tag: "Language",
    icon: "SiJavascript",
    proficiency: 90,
    description: "ES2024+, async/await, closures, prototypes, DOM APIs, module systems.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    tag: "Utility-First CSS",
    icon: "SiTailwindcss",
    proficiency: 90,
    description: "Design tokens, responsive utilities, arbitrary values, cva variant systems.",
  },
  {
    name: "Framer Motion",
    category: "Animation & Data",
    tag: "Animation",
    icon: "SiFramer",
    proficiency: 80,
    description: "Scroll-driven reveals, layout animations, gesture-based interactions, variants.",
  },
  {
    name: "SCSS",
    category: "Styling",
    tag: "CSS Preprocessor",
    icon: "SiSass",
    proficiency: 85,
    description: "BEM methodology, mixins, functions, custom properties, modular architecture.",
  },
  {
    name: "Firebase",
    category: "Backend & DB",
    tag: "Backend-as-a-Service",
    icon: "SiFirebase",
    proficiency: 72,
    description: "Firestore, Realtime Database, Authentication (email, Google), Hosting, Storage.",
  },
  {
    name: "Bootstrap",
    category: "Styling",
    tag: "UI Framework",
    icon: "SiBootstrap",
    proficiency: 78,
    description: "Grid system, utility classes, component customization with Sass variables.",
  },
  {
    name: "Chart.js",
    category: "Animation & Data",
    tag: "Data Visualization",
    icon: "SiChartdotjs",
    proficiency: 70,
    description: "Bar, line, doughnut, and mixed chart types. Custom plugins and animations.",
  },
  {
    name: "Express.js",
    category: "Backend & DB",
    tag: "Node.js Framework",
    icon: "SiExpress",
    proficiency: 65,
    description: "REST API design, middleware, JWT auth, file uploads, route modularization.",
  },
  {
    name: "PostgreSQL",
    category: "Backend & DB",
    tag: "Database",
    icon: "SiPostgresql",
    proficiency: 62,
    description: "Schema design, joins, transactions, pg driver, query optimization basics.",
  },
];

export const techCategories = [
  "All",
  "Core & Language",
  "Framework",
  "Styling",
  "Animation & Data",
  "Backend & DB",
] as const;

