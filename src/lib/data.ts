import type {
  Project,
  ExpertiseTile,
  Differentiator,
  ResumeExperience,
} from './types'

export const PROJECTS: Project[] = [
  // ─── Selected (senior portfolio) ─────────────────────────────────────────
  {
    title: 'WorkLight | Daily Work Operator',
    domain: 'AI Product',
    discipline: 'Product Designer & Builder',
    description:
      'Local-first product that turns work-tool signals into an evidence-linked daily plan — ranking, trust model, and implementation owned end to end.',
    slug: 'worklight',
    year: '2026',
    featured: true,
    category: 'Product Builder',
    projectType: 'Personal product',
    delivery: 'Working product · Active development',
    portfolioGroup: 'Selected',
    repositoryUrl: 'https://github.com/mdostanic85/morning',
  },
  {
    title: 'OriginChains | Climate Company Discovery',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'B2B climate intelligence — discovery UX, trust-heavy company data, and a Figma system built for engineering handoff.',
    slug: 'originchains',
    year: '2025',
    featured: true,
    category: 'Product Design',
    projectType: 'Client work',
    delivery: 'Product design · Figma system',
    portfolioGroup: 'Selected',
    coverImage: '/work/originchains/cover.png',
  },
  {
    title: 'Optronic | Website Redesign',
    domain: 'Web',
    discipline: 'UX & Frontend',
    description:
      'Industrial sensor manufacturer site — EN/DE IA, nine product families, React components, live on Vercel.',
    slug: 'optronic',
    year: '2024',
    featured: true,
    category: 'Web',
    projectType: 'Client work',
    delivery: 'Designed and built · Live',
    portfolioGroup: 'Selected',
    liveUrl: 'https://optronic-v2.vercel.app',
    coverImage: '/work/optronic/cover.webp',
  },

  // ─── Capability (not Selected flagship) ──────────────────────────────────
  {
    title: 'AI-Connected Design System Workflow',
    domain: 'Design Systems',
    discipline: 'Capability',
    description:
      'How I keep design-system work aligned across tokens, Figma architecture, AI tooling, and code — a delivery method, not a client case.',
    slug: 'ai-design-system-workflow',
    year: '',
    featured: false,
    category: 'Design Systems',
    isCapability: true,
    projectType: 'Capability',
    delivery: 'Working method',
    portfolioGroup: 'Capability',
  },

  // ─── Explorations ────────────────────────────────────────────────────────
  {
    title: 'SoundScope | Music Analytics Dashboard',
    domain: 'Analytics',
    discipline: 'Product Design',
    description:
      'Analytics dashboard concept — decision hierarchy, dense charts, dark ergonomics, reusable tokens.',
    slug: 'soundscope',
    year: '2025',
    featured: false,
    category: 'Analytics',
    projectType: 'Concept',
    delivery: 'Portfolio case study',
    portfolioGroup: 'Exploration',
    behanceUrl: 'https://www.behance.net/gallery/235878795/SoundScope-Music-Analytics-Dashboard-Redesign',
    coverImage: '/work/soundscope/cover.png',
  },
  {
    title: 'MatchLink | Real-Time Matchday Insights',
    domain: 'Sports Tech',
    discipline: 'Product Design',
    description:
      'Matchday concept — real-time streams, event timelines, and high-density ops views.',
    slug: 'matchlink',
    year: '2025',
    featured: false,
    category: 'Analytics',
    projectType: 'Concept',
    delivery: 'Visual exploration',
    portfolioGroup: 'Exploration',
    behanceUrl: 'https://www.behance.net/gallery/225610623/MatchLink-Real-Time-Matchday-Insights',
    coverImage: '/work/matchlink/cover.jpg',
  },
  {
    title: 'HealthCare CRM',
    domain: 'Healthcare',
    discipline: 'Product UX',
    description:
      'Healthcare CRM concept — patient context, scheduling, role-based workflows, responsive system.',
    slug: 'healthcare-crm',
    year: '2024',
    featured: false,
    category: 'Healthcare',
    projectType: 'Concept',
    delivery: 'UX case study',
    portfolioGroup: 'Exploration',
    coverImage: '/work/healthcare-crm/cover.jpg',
  },
  {
    title: 'Galaxy Cash | Fintech Mobile App',
    domain: 'Fintech',
    discipline: 'Product Design',
    description:
      'Consumer fintech concept — onboarding, transfers, step-up auth, error recovery.',
    slug: 'galaxy-cash',
    year: '2025',
    featured: false,
    category: 'Fintech',
    projectType: 'Concept',
    delivery: 'Visual exploration',
    portfolioGroup: 'Exploration',
    behanceUrl: 'https://www.behance.net/gallery/225609903/Galaxy-Cash-Mobile-App-Design',
    coverImage: '/work/galaxy-cash/cover.png',
  },
  {
    title: "Cecconi's Restaurant",
    domain: 'Hospitality',
    discipline: 'Web & Brand',
    description:
      'Hospitality site concept — menu hierarchy, reservation paths, editorial type and photo.',
    slug: 'cecconis',
    year: '2021',
    featured: false,
    category: 'Web',
    projectType: 'Concept',
    delivery: 'Visual exploration',
    portfolioGroup: 'Exploration',
    coverImage: '/work/cecconis/cover.png',
  },
]

/** Public profile — titles, timelines, recommendations, and client context under NDA. */
export const LINKEDIN_PROFILE_URL =
  'https://www.linkedin.com/in/milos-dostanic/' as const

/**
 * Full employment timeline — companies only. Used on About and Résumé context.
 * Client product names stay under /work; employer client work may be NDA.
 */
export const COMPANIES = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: '2024 — Present',
    note: 'Product & engineering studio. Senior product design across healthcare, fintech, and enterprise SaaS client engagements (NDA) — IA, high-density operational UI, accessibility, and implementation-grade specs.',
  },
  {
    company: 'TheBrendz',
    role: 'Senior Product Designer',
    period: '2016 — Present',
    note: 'Ongoing product design work across UX/UI, design systems, functional prototypes, and implementation-ready delivery.',
  },
  {
    company: 'Freelance',
    role: 'Product Designer',
    period: '2008 — Present',
    note: 'Independent product design work running alongside studio and client engagements — visual design, prototypes, and digital delivery.',
  },
  {
    company: 'Polyrific',
    role: 'Product Designer',
    period: '2023 — 2024',
    note: 'AI platform work — flows, UI, prototyping, and system thinking with product and engineering leads.',
  },
  {
    company: 'KOD WORKS',
    role: 'Senior UI/UX Designer',
    period: '2023',
    note: 'Interfaces and flows for games, apps, and websites — interaction maps and Lottie-based product motion.',
  },
  {
    company: 'Quantox Technology',
    role: 'Medior → Senior UI/UX Designer',
    period: '2019 — 2023',
    note: 'Complex product UX/UI across long-form engagements and multiple client accounts — from discovery patterns through shipped UI, in tight collaboration with PMs and engineers.',
  },
  {
    company: 'Fantastic Machines · Promo · HEINEKEN',
    role: 'Graphic & Campaign Design',
    period: '2013 — 2017',
    note: 'Early UI, graphic, and campaign work, including the HEINEKEN Belgrade 2013 Limited Edition can.',
  },
] as const

/**
 * Homepage experience strip — high-signal employers only.
 * Full chronology stays on About / Résumé. Space Inch is current employer
 * (not a portfolio case study; client work there is NDA).
 */
export const HOME_COMPANIES = [
  COMPANIES[0], // Space Inch
  COMPANIES[3], // Polyrific
  COMPANIES[5], // Quantox
  COMPANIES[6], // Early career / HEINEKEN
] as const

/** Complete public résumé timeline, kept separate from the shorter About list. */
export const RESUME_EXPERIENCE: ResumeExperience[] = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: 'Mar 2024 - Present',
    location: 'United States / Remote',
    summary:
      'Lead product design across complex B2B engagements, covering product strategy, UX, prototypes, design systems, AI workflows, and development-ready delivery.',
  },
  {
    company: 'TheBrendz',
    role: 'Senior Product Designer',
    period: 'Jan 2016 - Present',
    location: 'Serbia',
    summary:
      'Design digital products across product strategy, UX/UI, system design, functional prototypes, and implementation-ready solutions.',
  },
  {
    company: 'Freelance',
    role: 'Product Designer',
    period: 'Jun 2008 - Present',
    location: 'Independent',
    summary:
      'Independent design work spanning early product thinking, user flows, visual design, prototypes, and digital delivery.',
  },
  {
    company: 'Polyrific',
    role: 'Product Designer',
    period: 'Mar 2023 - Mar 2024',
    location: 'United States / Remote',
    summary:
      'Designed an AI platform for organizing, analyzing, and interacting with personal data. Work covered research, flows, high-fidelity UI, prototypes, and the product design system.',
  },
  {
    company: 'KOD WORKS',
    role: 'Senior UI/UX Designer',
    period: 'Jun 2023 - Nov 2023',
    location: 'Serbia',
    summary:
      'Designed interfaces and flows for games, apps, and websites, including interaction maps and Lottie-based product motion.',
  },
  {
    company: 'Quantox Technology',
    role: 'Medior to Senior UI/UX Designer',
    period: 'Mar 2019 - Jun 2023',
    location: 'Serbia',
    summary:
      'Worked with product managers, engineers, and stakeholders on product UX, prototypes, interface design, and supporting visual communication across client engagements.',
  },
  {
    company: 'Fantastic Machines GmbH',
    role: 'UI Designer',
    period: 'Jan 2016 - Jan 2017',
    location: 'Serbia',
    summary:
      'Designed interfaces for web projects and contributed UI/UX improvements to the Paxxon application.',
  },
  {
    company: 'Promo Advertising',
    role: 'Graphic Designer',
    period: 'Sep 2013 - Jun 2014',
    location: 'Serbia',
    summary: 'Created graphic design for advertising and campaign materials.',
  },
  {
    company: 'The HEINEKEN Company',
    role: 'Graphic Designer',
    period: '2013',
    summary: 'Designed the Belgrade 2013 Limited Edition can.',
  },
]

export const RESUME_EDUCATION = [
  {
    school: 'Technical School',
    qualification: 'Computer Electrician, IT',
    period: '2000 - 2004',
  },
] as const

export const RESUME_LANGUAGES = [
  { language: 'English', level: 'Professional working proficiency' },
  { language: 'German', level: 'Limited working proficiency' },
] as const

export const EXPERTISE_TILES: ExpertiseTile[] = [
  {
    number: '01',
    title: 'Complex Product UX',
    description:
      'B2B workflows, information architecture, dense tables, multi-role products, permissions, complex forms, and the edge cases that shape real software.',
  },
  {
    number: '02',
    title: 'Design Systems',
    description:
      'Tokens, components, variants, accessibility, documentation, and governance that keep a growing product coherent in Figma and code.',
  },
  {
    number: '03',
    title: 'Product Delivery',
    description:
      'Functional prototypes, developer handoff, implementation review, and close collaboration with engineering until the shipped interface matches the intent.',
  },
  {
    number: '04',
    title: 'Product Builder & AI',
    description:
      'Figma-to-code workflows, functional prototypes, AI product flows, LLM features, and product architecture decisions tested in working software.',
  },
]

/** Homepage Selected Work — curated senior cases only (no capability pages). */
export const FLAGSHIP_PROJECT_SLUGS = [
  'worklight',
  'originchains',
  'optronic',
] as const

export const FLAGSHIP_PROJECTS = FLAGSHIP_PROJECT_SLUGS.map((slug) => {
  const project = PROJECTS.find((item) => item.slug === slug)
  if (!project) throw new Error(`Missing flagship project: ${slug}`)
  return project
})

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: '01',
    title: 'Token architecture before screens',
    description:
      "Before I open a frame, I map the token layer — spacing, colour, typography, elevation. Components built on shaky foundations don't survive a design system review. I start from the system, not the screen.",
  },
  {
    number: '02',
    title: "I prototype in code when Figma isn't enough",
    description:
      "When an interaction or data-heavy pattern can't be accurately represented in Figma, I build it in Cursor. Stakeholders and engineers see something real — not an approximation. This closes interpretation gaps before they become rework.",
  },
  {
    number: '03',
    title: 'Implementation review on every project',
    description:
      "I compare deployed product against design intent in Vercel preview and in production. Typography rendering, spacing, responsive behaviour, state handling — I annotate discrepancies and close them. Most designers stop at handoff. I don't.",
  },
  {
    number: '04',
    title: 'Design systems need governance, not just components',
    description:
      'A component library without a contribution process, versioning model, and deprecation policy is a Figma file that will be ignored within a year. I design the governance alongside the components.',
  },
]

export const TOOLS = [
  'Figma',
  'GitHub',
  'Vercel',
  'Cursor',
  'Claude',
  'ChatGPT',
  'Figma Make',
  'Linear',
  'Notion',
  'Storybook',
]
