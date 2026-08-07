import type {
  Project,
  ExpertiseTile,
  Differentiator,
  ResumeExperience,
} from './types'

export const PROJECTS: Project[] = [
  // ─── Current engagement ──────────────────────────────────────────────────
  {
    title: 'Space Inch | Enterprise Product Design',
    domain: 'Agency / SaaS',
    discipline: 'Senior Product Designer',
    description:
      'Embedded product design across complex client engagements. I work on information architecture, dense operational interfaces, accessible interaction patterns, and implementation reviews while keeping confidential product details protected.',
    slug: 'spaceinch',
    year: '2024–Now',
    featured: true,
    category: 'Product Design',
    projectType: 'Client work',
    delivery: 'Production engagement · NDA protected',
    portfolioGroup: 'Selected',
  },

  // ─── Product Design & Enterprise SaaS ────────────────────────────────────
  {
    title: 'DevRev | Developer Tools Platform',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'I led end-to-end product design for DevRev — a developer-centric platform that ties engineering, support, and product workflows together. As the senior designer on complex surface area, I defined multi-role information architecture, dashboard and table systems, and a shared component language so dozens of screens stayed coherent as the product grew. My remit included interaction models for dense data, empty and error states that respect practitioner mental models, and documentation that let engineering ship without re-interpreting every edge case.',
    slug: 'devrev',
    year: '2023',
    featured: true,
    category: 'Product Design',
    projectType: 'Client work',
    delivery: 'Product design · Enterprise SaaS',
    portfolioGroup: 'Selected',
    coverImage: '/work/devrev/cover.png',
  },
  {
    title: 'WorkLight | Daily Work Operator',
    domain: 'AI Product',
    discipline: 'Product Designer & Builder',
    description:
      'A local-first product that turns signals from work tools into an evidence-linked daily plan. I am designing and building the product, including the ranking logic, trust model, interaction system, integrations, and implementation.',
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
      'I acted as lead product designer on a B2B climate intelligence web app — company discovery, trust-heavy data presentation, activity feeds, and admin and privacy modes where permissions had to be obvious, not decorative. I architected flows for analysts and buyers, tightened how evidence and signals surface in the UI, and built a Figma design system tuned for single-frame engineering handoff. The work demanded systems thinking: every list, filter, and detail panel had to scale as datasets and customer segments expanded.',
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
    title: 'Spotify | Admin Enterprise Panel',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'I designed enterprise-grade admin experiences for internal Spotify tooling — power users managing content and configuration at scale. The challenge was extreme density without losing scanability: bulk operations, role-based access, audit-friendly layouts, and predictable patterns for tables, dialogs, and inline edits. I treated accessibility and keyboard paths as first-class requirements and partnered closely with engineering so constraints from production data volumes shaped the UI early, not after handoff.',
    slug: 'spotify-admin-enterprise',
    year: '2022',
    featured: false,
    category: 'Product Design',
    projectType: 'Internal product',
    delivery: 'Enterprise tooling',
    portfolioGroup: 'Selected',
    coverImage: '/work/spotify-admin-enterprise/cover.png',
  },

  // ─── Analytics & Data Dashboards ─────────────────────────────────────────
  {
    title: 'SoundScope | Music Analytics Dashboard',
    domain: 'Analytics',
    discipline: 'Product Design',
    description:
      'A self-directed analytics dashboard concept for labels and publishers. It explores decision hierarchy, dense charts and tables, dark interface ergonomics, and a reusable token and component system.',
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
      'A self-directed matchday product concept exploring real-time streams, event timelines, status encoding, and high-density views for analysts and operations staff.',
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

  // ─── Healthcare & Fintech ─────────────────────────────────────────────────
  {
    title: 'HealthCare CRM',
    domain: 'Healthcare',
    discipline: 'Product UX',
    description:
      'A healthcare CRM case study exploring patient context, scheduling, communication, role-based workflows, responsive behaviour, and a maintainable interface system.',
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
      'A self-directed consumer fintech concept covering onboarding, balances, transfers, step-up authentication, error recovery, and transaction review.',
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

  // ─── Design Systems & AI Workflow ─────────────────────────────────────────
  {
    title: 'AI-Connected Design System Workflow',
    domain: 'Design Systems',
    discipline: 'Capability',
    description:
      'I codified how I run design-system work when AI tooling, tokens, Figma architecture, and codebases all have to stay in sync — a senior-practice playbook rather than a single client deliverable. It covers variable strategy, component API thinking, AI-assisted prototyping, and review loops with engineering so "design system" means velocity and governance, not a static library. I treat this as the operating model behind the craft you see in the shipped work above.',
    slug: 'ai-design-system-workflow',
    year: '',
    featured: false,
    category: 'Design Systems',
    isCapability: true,
    projectType: 'Capability',
    delivery: 'Working method',
    portfolioGroup: 'Selected',
  },

  // ─── Web & Digital Experience ─────────────────────────────────────────────
  {
    title: 'Optronic | Website Redesign',
    domain: 'Web',
    discipline: 'UX & Frontend',
    description:
      'A complete redesign and build for an industrial sensor and control-system manufacturer. The work covers EN/DE information architecture, nine product families, technical downloads, SEO structure, reusable React components, and live review on Vercel.',
    slug: 'optronic',
    year: '2024',
    featured: false,
    category: 'Web',
    projectType: 'Client work',
    delivery: 'Designed and built',
    portfolioGroup: 'Selected',
    liveUrl: 'https://optronic-v2.vercel.app',
    coverImage: '/work/optronic/cover.webp',
  },
  {
    title: "Cecconi's Restaurant",
    domain: 'Hospitality',
    discipline: 'Web & Brand',
    description:
      'A self-directed hospitality website concept exploring menu hierarchy, reservation paths, editorial photography, typography, and mobile pacing.',
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
 * Employment timeline — companies only, LinkedIn-style. Used on About and
 * the home experience strip. Client project names deliberately excluded;
 * those live under /work.
 */
export const COMPANIES = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: '2024 — Present',
    note: 'Product & engineering studio. Embedded with client teams as the senior designer — discovery to delivery across healthcare, fintech, and enterprise SaaS: IA, high-density operational UI, accessibility, and implementation-grade specs.',
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

export const FLAGSHIP_PROJECT_SLUGS = [
  'worklight',
  'devrev',
  'spaceinch',
  'originchains',
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
