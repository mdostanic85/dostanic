import type {
  Project,
  ExpertiseTile,
  Differentiator,
  ResumeExperience,
} from './types'

export const PROJECTS: Project[] = [
  // ─── Selected (senior portfolio) ─────────────────────────────────────────
  {
    title: 'OriginChains | Climate Company Discovery',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'B2B climate intelligence — discovery UX, trust-heavy company data, and a component system built so engineering could implement from patterns instead of one-off specs.',
    slug: 'originchains',
    year: '2025',
    featured: true,
    category: 'Product Design',
    projectType: 'Client work',
    delivery: 'Product design · Design system',
    portfolioGroup: 'Selected',
    coverImage: '/work/originchains/cover.png',
  },
  {
    title: 'Optronic | Website Redesign',
    domain: 'Web',
    discipline: 'UX & Frontend',
    description:
      'Industrial sensor manufacturer — EN/DE information architecture, nine product families, and a React component set I designed and built myself.',
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
  {
    title: 'WorkLight | Daily Work Operator',
    domain: 'AI Product',
    discipline: 'Product Designer & Builder',
    description:
      'Local-first AI product that turns work-tool signals into an evidence-linked daily plan. Ranking, trust model, data model, and implementation owned end to end.',
    slug: 'worklight',
    year: '2026',
    featured: true,
    category: 'Product Builder',
    projectType: 'Personal product',
    delivery: 'Working product · Active development',
    portfolioGroup: 'Selected',
    repositoryUrl: 'https://github.com/mdostanic85/morning',
  },

  // ─── Capability (not Selected flagship) ──────────────────────────────────
  {
    title: 'Design System Architecture',
    domain: 'Design Systems',
    discipline: 'Capability',
    description:
      'Atoms to organisms, primitives to semantic tokens, Figma variables in parity with production CSS — the system layer I build under every product.',
    slug: 'design-systems',
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
    title: 'HealthCare CRM',
    domain: 'Healthcare',
    discipline: 'Product UX',
    description:
      'Healthcare CRM concept — patient context, scheduling, role-based workflows, and a fully tokenised UI system.',
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
]

/** Public profile — titles, timelines, recommendations, and client context under NDA. */
export const LINKEDIN_PROFILE_URL =
  'https://www.linkedin.com/in/milos-dostanic/' as const

/**
 * One line, used wherever the portfolio has to account for the client work that
 * cannot be shown. Kept in one place so home, work, about, and résumé agree.
 */
export const NDA_PRACTICE_NOTE =
  'Most of my current work is enterprise product design under NDA — healthcare, fintech, and B2B SaaS.' as const

/**
 * Full employment timeline — companies only. Used on About and Résumé context.
 * Client product names stay under /work; employer client work may be NDA.
 */
export const COMPANIES = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: '2024 — Present',
    /** One-clause scope for the homepage strip; `note` is the About-page version. */
    scope: 'Lead design on NDA B2B products — healthcare, fintech, enterprise SaaS',
    note: 'Lead end-to-end product design on complex B2B engagements under NDA — healthcare, fintech, and enterprise SaaS. Product strategy, information architecture, high-density operational UI, design systems, AI and agentic workflows, and development-ready delivery.',
  },
  {
    company: 'TheBrendz',
    role: 'Senior Product Designer',
    period: '2016 — Present',
    note: 'Design and build digital products end to end — discovery, UX, design systems, functional prototypes, and implementation. Increasingly AI products: use cases, agentic workflows, tool and data integrations, and human-in-the-loop experiences.',
  },
  {
    company: 'Freelance',
    role: 'Product Designer',
    period: '2008 — Present',
    note: 'Independent product design running alongside studio and client engagements — product and UX work, web and mobile, prototypes, and visual design.',
  },
  {
    company: 'Polyrific',
    role: 'Product Designer',
    period: '2023 — 2024',
    scope: 'Led end-to-end design for an AI platform, including its design system',
    note: 'Led end-to-end design for an AI platform — research, flows, high-fidelity UI, prototypes, and the design system. Focused on making complex AI functionality legible and on transparent, trustworthy AI experiences.',
  },
  {
    company: 'KOD WORKS',
    role: 'Senior UI/UX Designer',
    period: '2023',
    note: 'Interfaces and flows for games, apps, and websites — user-flow maps, game interaction and usability, and Lottie-based product motion.',
  },
  {
    company: 'Quantox Technology',
    role: 'Medior → Senior UI/UX Designer',
    period: '2019 — 2023',
    scope: 'Product UX across multiple client accounts; promoted to Senior in 2022',
    note: 'Product UX/UI across long-form engagements and multiple client accounts — discovery, wireframes, flows, prototypes, and shipped interfaces, in close collaboration with PMs, engineers, and stakeholders. Promoted to Senior in 2022.',
  },
  {
    company: 'Fantastic Machines · Promo · HEINEKEN',
    role: 'UI & Graphic Design',
    period: '2013 — 2017',
    scope: 'Web interfaces, the Paxxon application, and packaging design',
    note: 'Early UI and campaign work — web interfaces and UI/UX improvements on the Paxxon application, advertising production, and the HEINEKEN Belgrade 2013 Limited Edition can.',
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

/** Title progression, shown on About. Each step is a role actually held. */
export const CAREER_PATH = [
  'Graphic Designer',
  'UI Designer',
  'UI/UX Designer',
  'Senior UI/UX Designer',
  'Product Designer',
  'Senior Product Designer',
] as const

/** Complete public résumé timeline, kept separate from the shorter About list. */
export const RESUME_EXPERIENCE: ResumeExperience[] = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: 'Mar 2024 - Present',
    location: 'United States / Remote',
    summary:
      'Lead end-to-end product design for complex B2B products under NDA, covering product strategy, UX, prototyping, design systems, and development-ready delivery. Design AI-powered and agentic workflows, using AI and code-based tools to connect data and tighten design-to-development collaboration.',
  },
  {
    company: 'TheBrendz',
    role: 'Senior Product Designer',
    period: 'Jan 2016 - Present',
    location: 'Serbia',
    summary:
      'Design and build digital products end to end — product strategy, UX/UI, design systems, functional prototypes, and implementation-ready solutions. Recent work focuses on AI products: defining use cases, designing agentic workflows, connecting tools and data sources, and shaping human-in-the-loop experiences.',
  },
  {
    company: 'Freelance',
    role: 'Product Designer',
    period: 'Jun 2008 - Present',
    location: 'Independent',
    summary:
      'Independent product and design work for clients across web and mobile — early product thinking, user flows, visual design, prototypes, and delivery.',
  },
  {
    company: 'Polyrific',
    role: 'Product Designer',
    period: 'Mar 2023 - Mar 2024',
    location: 'United States / Remote',
    summary:
      'Led end-to-end design for an AI-driven platform with complex user workflows. Research, interaction flows, high-fidelity UI, prototyping, and a maintained design system. Simplified complex AI functionality into understandable journeys and designed for transparency and trust, working closely with engineers and product managers on accurate, scalable implementation.',
  },
  {
    company: 'KOD WORKS',
    role: 'Senior UI/UX Designer',
    period: 'Jun 2023 - Nov 2023',
    location: 'Serbia',
    summary:
      'Designed UI and UX for games, apps, and websites — user-centred interfaces, user-flow maps, game interaction and usability, and Lottie animation implementation.',
  },
  {
    company: 'Quantox Technology',
    role: 'Medior to Senior UI/UX Designer',
    period: 'Mar 2019 - Jun 2023',
    location: 'Serbia',
    summary:
      'Product UX/UI across multiple client accounts — user research, product discovery, wireframes, flows, prototypes, and interface design, validated with project managers, engineers, and stakeholders. Promoted from Medior to Senior in September 2022.',
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
    summary:
      'Advertising and campaign design — promotional materials, print, and production-ready artwork.',
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
      'Products where several roles see different things, the tables are dense, and the edge cases are the actual work. I structure that before anyone designs a screen.',
  },
  {
    number: '02',
    title: 'Design Systems',
    description:
      'Atoms, molecules, organisms, and the token layer that binds them. Primitives map to semantic roles, roles map to components, and Figma variables stay in parity with production CSS. Governance gets designed with the library, not after.',
  },
  {
    number: '03',
    title: 'Product Delivery',
    description:
      'Prototypes engineers can read, handoff with states and responsive rules written down, and review against the deployed build until production matches the intent.',
  },
  {
    number: '04',
    title: 'Product Builder & AI',
    description:
      'I build working software when a prototype cannot answer the question. WorkLight is where I test AI product decisions: what to rank, what to show as evidence, and what the interface does when the model is not sure.',
  },
]

/** Homepage Selected Work — curated senior cases only (no capability pages). */
export const FLAGSHIP_PROJECT_SLUGS = [
  'originchains',
  'optronic',
  'worklight',
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
