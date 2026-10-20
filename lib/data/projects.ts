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
}

export const projects: Project[] = [
  {
    slug: "lucidify",
    title: "Lucidify",
    tagline:
      "A clean, intuitive productivity interface built for deep-work sessions.",
    year: "2026",
    type: "Frontend",
    status: "live",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "AOS"],
    image: "/projects/cac-project.png",
    featured: true,
    url: "https://lucidify2.netlify.app/",
    // problem:
    //   "Productivity tools are often cluttered and anxiety-inducing. Lucidify needed to feel calm, structured, and frictionless — a digital environment that gets out of the way.",
    // process:
    //   "Started with a minimal component library in Figma, prioritizing whitespace and typographic rhythm. Built with React + TypeScript for strict prop-typing, Tailwind for utility-first styling, and Framer Motion for purposeful micro-interactions.",
    // solution:
    //   "Delivered a distraction-free workspace interface with smooth animated transitions, keyboard-first UX, and a design system built on a strict 4-point spacing grid. Motion is used only to reinforce hierarchy and task completion — never decorative.",

    problem:
      "CAC Annual Return filing is a confusing, paper-heavy process that leaves small business owners and LLCs vulnerable to costly legal assistance, avoidable errors, and missed deadlines. Users lack a clear, guided path through complex regulatory requirements.",
    process:
      "Built an AI-powered compliance platform with a backend developer handling server-side logic and database architecture. Automated form completion, integrated error-reduction checks, and designed step-by-step guidance that translates complex legal requirements into plain, actionable tasks.",
    solution:
      "Delivered a fast, affordable, user-friendly digital experience that streamlines CAC compliance end-to-end. Users complete Annual Returns in minutes with automated form filling, real-time error prevention, and guided workflows — eliminating paperwork confusion, reducing reliance on expensive legal help, and ensuring deadlines are never missed.",
  },
  {
    slug: "bible-study",
    title: "Bible Study",
    tagline:
      "A scripture-first devotional platform with real-time Firebase sync.",
    year: "2025",
    type: "Full Stack",
    status: "live",
    tech: ["Next.js", "SCSS", "Firebase"],
    image: "/projects/Bible-study.png",
    featured: true,
    url: "https://bible-study-project.vercel.app/",
    problem:
      "Having to attend bible study but there is no time for questions to be answered. The goal was a minimal platform where users can ask questions,and receive a valid answers.",
    process:
      "Chose Next.js for SSR/SEO benefits on scripture content, Firebase Realtime Database for instant sync, and SCSS for structured, maintainable styling with component-scoped theming.",
    solution:
      "The Bible study website is an interactive platform where user can submit Bible-related questions. These questions are displayed on both the user and admin pages. The admin can answer, delete submitted question, and the answers along side the questions are then shown to both admin and user.This system encourages learning and interaction through structured question-and-answer discussions.",
  },
  {
    slug: "d-asset",
    title: "D-ASSET",
    tagline:
      "Full-stack asset management platform with real-time dashboards. (Ongoing)",
    year: "2026",
    type: "Full Stack",
    status: "ongoing",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Framer Motion",
    ],
    image: "/projects/d-asset.png",
    featured: true,
    problem:
      "Organizations managing physical assets lacked a unified, real-time visibility tool. Spreadsheets created inconsistency, and off-the-shelf solutions were overbuilt.",
    process:
      "Architected a monorepo with React+TypeScript frontend, Express REST API, and PostgreSQL. Designed entity relationship schema for assets, asset management assignments, and aseet transfers. Implemented JWT auth, role-based access control, and real-time dashboard via polling.",
    solution:
      "A full-stack asset management system with interactive Chart.js dashboards, CSV exports, and a responsive admin interface — currently in active development.",
  },
  {
    // slug: "budget-tracker",
    // title: "Budget Tracker",
    slug: "lifebridge",
    title: "Lifebridge",
    // tagline:
    //   "Full CRUD income & expense tracker with live currency conversion.",
    tagline:  "Emergency healthcare financing that bridges urgent treatment and affordable repayment.",
    // year: "2023",
    year: '2026',
    type: "Frontend",
    status: "live",
    // tech: ["React", "SCSS"],
    tech: ["React", "TypeScript", "Tailwindcss", "state management"],
    image: "/projects/lifebridge.png",
    featured: false,
    // url: "https://Marvel123g.github.io/Budget-Tracker/",
    url: "https://lifebridge-dlight.vercel.app/",
    // problem:
    //   "Personal finance tools are either too complex (Mint, YNAB) or too simple (notes). A focused income/expense tracker with currency flexibility was needed.",
    // process:
    //   "Built with React hooks for state management, localStorage for persistence, and a manually calculation for currency switching.",
    // solution:
    //   "A polished single-page tracker with full CRUD, live currency switching across 4 currencies, transaction history, and category filtering.",
    
  problem: "Medical emergencies cannot wait for lengthy financing processes or raising money from family and friends. When a hospital is ready to treat but the patient cannot afford the required upfront payment, a critical financing gap emerges — leaving patients stranded at the moment they need care most.",
  process: "As the frontend developer on a collaborative team, translated LifeBridge's emergency financing workflow into a clear, trustworthy interface. Focused on guiding hospitals and patients through time-sensitive actions — financing requests, KYC steps, and repayment plan visibility — with an emphasis on clarity, urgency, and ease of use during high-stress moments.",
  solution: "Delivered a frontend experience that makes emergency healthcare financing fast and understandable. Verified partner hospitals can initiate financing requests on behalf of patients, while patients see a controlled path toward an initial treatment advance as KYC and full assessment proceed. Once approved, the interface clearly communicates the payment path to the healthcare provider and presents the patient with a structured repayment plan — all designed to reduce friction at the critical moment of care."

  },

  {
    slug: "skillmirror",
    title: "SkillMirror",
    tagline: "A personalized learning p/home/marvelous/Documents/Projects/my-portfolio/public/projects/skillmirror.pnglatform that transforms ambitious goals into achievable milestones through curated resources, structured roadmaps, and progress tracking.",
    year: '2026',
    type: "Fullstack",
    status: "ongoing",
    tech: ["Expo", "React", "TypeScript", "Express.js", "PostgreSQL"],
    image: "/skillmirror.png",
    featured: false,
    
  problem:  "Learning a new skill or pursuing a personal goal can feel overwhelming without a clear direction. People often struggle to identify what to learn next, find reliable learning resources, stay consistent, and measure their progress. Generic learning platforms offer content but don't always provide a personalized path that adapts to an individual's existing skills, ambitions, and available time.",
  process: "Designed SkillMirror as a personalized, mobile-first learning experience that guides users from goal definition to measurable progress. The experience begins with authentication and a multi-step onboarding process that captures the user's current skill level, existing skills, personal goals, and weekly learning availability. The application uses this information to generate a tailored learning roadmap, organize relevant resources, and track completed lessons. The frontend focuses on intuitive navigation, reusable components, persistent application state, and a polished dark interface with purple accents. The backend supports authentication, personalized data management, AI integration, and progress synchronization.",
  solution: "Built SkillMirror to help users turn personal ambitions into structured, manageable learning journeys across different fields, including technology, business, productivity, personal development, and creative skills. Users receive a personalized roadmap divided into progressive learning stages, access curated videos and articles, explore practical exercises, and monitor their progress from a unified dashboard. Completed lessons update roadmap milestones and overall progress, while personalized recommendations help users identify their next steps. By combining AI-assisted personalization, external API integrations, secure authentication, and persistent progress tracking, SkillMirror provides a guided learning experience that encourages consistency, accountability, and continuous growth."

  },
  
  {
    slug: "product-list-cart",
    title: "Product List with Cart",
    tagline:
      "Pixel-perfect Frontend Mentor challenge with interactive cart logic.",
    year: "2023",
    type: "Frontend",
    status: "live",
    tech: ["JavaScript", "SCSS"],
    image: "/projects/product-list.jpg",
    featured: false,
    url: "https://marvel123g.github.io/product-list-cart/",
    problem:
      "Faithfully implementing a complex Frontend Mentor design system — interactive cart state, quantity modifiers, order calculation, and confirmation modal in vanilla JavaScript.",
    process:
      "No frameworks — pure DOM manipulation with event delegation, module pattern for cart state, and CSS custom properties for theming. Focus on accessibility and reponsiveness.",
    solution:
      "Pixel-perfect implementation matching the Figma design spec. Full cart CRUD, modal confirmation, and responsive layout across all breakpoints.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
