import type {
  Project,
  ExpertiseTile,
  ProcessStep,
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
    problem:
      'A B2B product where three different contexts — your own identity, a company workspace, and administration — kept colliding in the same navigation.',
    owned:
      'Information architecture, navigation, the primary flows and their states, and the component system engineering built from.',
    decision:
      'Separated personal, company, and administrative space before designing screens — which is why admin and visibility modes could be added later without reopening navigation.',
    cardTagline: 'Three contexts kept colliding in one navigation.',
    cardHighlights: [
      'Split personal, company, and admin space before any screens',
      'Owned the IA, the primary flows, and every state',
      'Built the component system engineering implemented from',
    ],
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
    problem:
      'A Swiss industrial manufacturer whose catalogue had to serve two incompatible readers: engineers who know the part number, and buyers who only know their application.',
    owned:
      'The information architecture, the page templates, the component set — and the implementation. I designed this and I built it.',
    decision:
      'Treated manuals and firmware as product data rather than a downloads dump, so technical documents live on the product that needs them.',
    cardTagline: 'One catalogue, two readers who share no vocabulary.',
    cardHighlights: [
      'Two entry paths into a single product set',
      'Manuals and firmware modelled as product data',
      'Designed and built it — EN/DE, nine product families',
    ],
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
    problem:
      'Ten tools each hold part of your work and none of them agree. The hard question is not summarising them — it is deciding what actually deserves attention today.',
    owned:
      'The product definition, the ranking and trust model, the data model, the interface, and the code. End to end.',
    decision:
      'Ranked the work deterministically before any model writes a word, so the language layer explains the priority order instead of inventing it.',
    cardTagline: 'Ten tools hold your work. None of them agree.',
    cardHighlights: [
      'Ranked deterministically before any model writes a word',
      'Every priority stays linked to its source evidence',
      'Product, data model, and code owned end to end',
    ],
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
 *
 * Confidentiality: this line must never name a client, product, industry, or
 * internal workflow. Current commercial work is confidential — that is the
 * whole of what gets said publicly.
 */
export const NDA_PRACTICE_NOTE =
  'My current commercial work is confidential, so it is not shown here.' as const

/**
 * Full employment timeline — companies only. Used on About and Résumé context.
 * Client product names stay under /work; employer client work may be NDA.
 *
 * Confidentiality: the current-employer entry stays at employer + title only.
 * No industries, no client names, no product names, no internal workflows.
 */
export const COMPANIES = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: '2024 — Present',
    /** One-clause scope for the homepage strip; `note` is the About-page version. */
    scope: 'Current commercial work is confidential',
    note: 'Senior Product Designer. Current commercial work is confidential and is not described here.',
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
      'Senior Product Designer. Current commercial work is confidential and is not described here.',
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

/**
 * Homepage capabilities — four, deliberately differentiated, one short line each.
 * Ordered as the work actually happens: structure, then the hard surfaces, then
 * the system underneath, then getting it built.
 */
export const EXPERTISE_TILES: ExpertiseTile[] = [
  {
    number: '01',
    title: 'Product architecture',
    description:
      'Turning ambiguous requirements into flows, states, hierarchy, and a product structure a team can actually build against.',
  },
  {
    number: '02',
    title: 'Complex UX',
    description:
      'Data-heavy, workflow-heavy software. Several roles seeing different things, dense tables, and edge cases that are the real work.',
  },
  {
    number: '03',
    title: 'Systems',
    description:
      'Reusable foundations instead of one-off screens — tokens, components, and the rules that keep design and code from drifting apart.',
  },
  {
    number: '04',
    title: 'Prototype to implementation',
    description:
      'Prototypes, enough code to be useful, and close work with engineering — so the shipped product still matches the decision.',
  },
]

/**
 * Homepage process spine. Deliberately not a design-thinking diagram: the
 * weight sits on Structure and Decide, which is where the work actually is.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Read the system before proposing anything. Who it serves, what already exists, what the constraints really are.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'Find the shape of the product. Flows, states, hierarchy, and the boundaries between things that should not share a space.',
  },
  {
    number: '03',
    title: 'Decide',
    description:
      'Name the handful of decisions the product depends on, choose between real options, and accept the trade-off out loud.',
  },
  {
    number: '04',
    title: 'Prototype',
    description:
      'Make it concrete — in Figma when that answers the question, in code when it does not.',
  },
  {
    number: '05',
    title: 'Ship',
    description:
      'Stay with it through implementation and review the built product against the intent, not against the mockup.',
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

/**
 * Short personal note for the homepage — the evolution, not the CV. The full
 * story stays on About.
 */
export const HOME_NOTE = {
  lead: 'I did not start in product.',
  body: [
    'I started in communication design, moved to web, then to digital products, and kept moving toward the part of a product that decides whether it works at all — its structure.',
    'Complex software is where that turned into a practice: enterprise workflows, several roles, states nobody documented, and requirements that contradict each other. These days I build as well as design, because some product questions only answer themselves in working software.',
  ],
} as const
