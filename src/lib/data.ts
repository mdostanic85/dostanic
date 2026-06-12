import type { Project, ExpertiseTile, Differentiator } from './types'

export const PROJECTS: Project[] = [
  // ─── Current engagement ──────────────────────────────────────────────────
  {
    title: 'Space Inch — Enterprise Product Design',
    domain: 'Agency / SaaS',
    discipline: 'Senior Product Designer',
    description:
      'At Space Inch — a product and engineering studio that partners with healthcare, fintech, and growth-stage SaaS organizations — I operate as a senior product designer embedded with client teams. I own discovery through delivery: journey mapping and IA, high-density operational UIs, accessible patterns, and engineering-ready specs so shipped software matches the design intent. Engagements span modernization of legacy workflows, internal tooling at scale, and AI-assisted product surfaces where design, data, and engineering have to stay aligned. For the latest engagements and timeline, see my LinkedIn profile.',
    slug: 'spaceinch',
    year: '2025',
    featured: true,
    category: 'Product Design',
  },

  // ─── Product Design & Enterprise SaaS ────────────────────────────────────
  {
    title: 'DevRev — Developer Tools Platform',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'I led end-to-end product design for DevRev — a developer-centric platform that ties engineering, support, and product workflows together. As the senior designer on complex surface area, I defined multi-role information architecture, dashboard and table systems, and a shared component language so dozens of screens stayed coherent as the product grew. My remit included interaction models for dense data, empty and error states that respect practitioner mental models, and documentation that let engineering ship without re-interpreting every edge case.',
    slug: 'devrev',
    year: '2023',
    featured: true,
    category: 'Product Design',
    coverImage: '/work/devrev/cover.png',
  },
  {
    title: 'OriginChains — Climate Company Discovery',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'I acted as lead product designer on a B2B climate intelligence web app — company discovery, trust-heavy data presentation, activity feeds, and admin and privacy modes where permissions had to be obvious, not decorative. I architected flows for analysts and buyers, tightened how evidence and signals surface in the UI, and built a Figma design system tuned for single-frame engineering handoff. The work demanded systems thinking: every list, filter, and detail panel had to scale as datasets and customer segments expanded.',
    slug: 'originchains',
    year: '2025',
    featured: true,
    category: 'Product Design',
    coverImage: '/work/originchains/cover.png',
  },
  {
    title: 'Spotify — Admin Enterprise Panel',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'I designed enterprise-grade admin experiences for internal Spotify tooling — power users managing content and configuration at scale. The challenge was extreme density without losing scanability: bulk operations, role-based access, audit-friendly layouts, and predictable patterns for tables, dialogs, and inline edits. I treated accessibility and keyboard paths as first-class requirements and partnered closely with engineering so constraints from production data volumes shaped the UI early, not after handoff.',
    slug: 'spotify-admin-enterprise',
    year: '2022',
    featured: true,
    category: 'Product Design',
    coverImage: '/work/spotify-admin-enterprise/cover.png',
  },

  // ─── Analytics & Data Dashboards ─────────────────────────────────────────
  {
    title: 'SoundScope — Music Analytics Dashboard',
    domain: 'Analytics',
    discipline: 'Product Design',
    description:
      'I led the redesign of an analytics platform for labels and publishers — artist and catalog performance, revenue, campaigns, and genre-level insight in one dark, analyst-first shell. I established semantic tokens and modular components so charts, tables, and filters could evolve without visual drift, and I prioritized decision hierarchy over chart variety so executives and analysts could share one product without diluting either workflow. The case study documents how I paired design-system structure with implementation collaboration.',
    slug: 'soundscope',
    year: '2025',
    featured: true,
    category: 'Analytics',
    behanceUrl: 'https://www.behance.net/gallery/235878795/SoundScope-Music-Analytics-Dashboard-Redesign',
    coverImage: '/work/soundscope/cover.png',
  },
  {
    title: 'MatchLink — Real-Time Matchday Insights',
    domain: 'Sports Tech',
    discipline: 'Product Design',
    description:
      'As product design lead on a live matchday platform, I shaped real-time streams, event timelines, and high-density views for analysts and operations staff working under seconds of pressure. I focused on legibility at speed — typographic rhythm, status encoding, and layouts that stay usable when data refreshes constantly. The UI had to make uncertainty explicit: partial data, delayed feeds, and operator overrides all needed clear, calm affordances.',
    slug: 'matchlink',
    year: '2025',
    featured: false,
    category: 'Analytics',
    behanceUrl: 'https://www.behance.net/gallery/225610623/MatchLink-Real-Time-Matchday-Insights',
    coverImage: '/work/matchlink/cover.jpg',
  },

  // ─── Healthcare & Fintech ─────────────────────────────────────────────────
  {
    title: 'HealthCare CRM',
    domain: 'Healthcare',
    discipline: 'Product UX',
    description:
      'I owned UX for a healthcare CRM and care-coordination product — patient communication, tasking, handoffs between roles, and clinical-adjacent workflows where mistakes carry real cost. I mapped provider personas and permission boundaries, then designed flows that reduce context switching: in-line patient context, templated but flexible messaging, and dashboards that surface what each role must do next. The work sits at the intersection of compliance expectations, speed of use in clinics, and long-term maintainability of the pattern library.',
    slug: 'healthcare-crm',
    year: '2024',
    featured: true,
    category: 'Healthcare',
  },
  {
    title: 'Galaxy Cash — Fintech Mobile App',
    domain: 'Fintech',
    discipline: 'Product Design',
    description:
      'I directed product design for a consumer fintech mobile experience — onboarding, balances, transfers, and security-sensitive flows where trust is built through clarity, not decoration. I defined interaction patterns for step-up authentication, error recovery, and transaction review so users always know what will happen before money moves. Visual hierarchy and motion were kept minimal on purpose: in fintech, restraint reads as expertise.',
    slug: 'galaxy-cash',
    year: '2025',
    featured: false,
    category: 'Fintech',
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
    featured: true,
    category: 'Design Systems',
    isCapability: true,
  },

  // ─── Web & Digital Experience ─────────────────────────────────────────────
  {
    title: 'Optronic — Website Redesign',
    domain: 'Web',
    discipline: 'UX & Frontend',
    description:
      'I led a full website redesign and build for an industrial optics manufacturer — multilingual EN/DE IA, nine structured product families, SEO-aware content hierarchy, and hosted manuals and firmware as first-class product surfaces. As both UX lead and implementer (Next.js on Vercel), I shortened the loop between design intent and production typography, routing, and performance. The engagement included a live preview workflow so stakeholders could annotate against real builds, not static exports.',
    slug: 'optronic',
    year: '2024',
    featured: false,
    category: 'Web',
  },
  {
    title: "Cecconi's Restaurant",
    domain: 'Hospitality',
    discipline: 'Web & Brand',
    description:
      'I set art direction and UX for a premium hospitality site — menu hierarchy, reservation paths, and editorial photography pacing that match a high-touch restaurant brand. Typography, spacing, and motion were tuned for an audience that evaluates quality in seconds on mobile. The outcome is a restrained digital layer that supports the physical experience instead of competing with it.',
    slug: 'cecconis',
    year: '2021',
    featured: false,
    category: 'Web',
    coverImage: '/work/cecconis/cover.png',
  },
]

/** Public profile — titles, timelines, recommendations, and client context under NDA. */
export const LINKEDIN_PROFILE_URL =
  'https://www.linkedin.com/in/milosdostanic/' as const

/**
 * Employment timeline — companies only, LinkedIn-style. Used on About and
 * the home experience strip. Client project names deliberately excluded;
 * those live under /work.
 */
export const COMPANIES = [
  {
    company: 'Space Inch',
    role: 'Senior Product Designer',
    period: '2025 — Present',
    note: 'Product & engineering studio. Embedded with client teams as the senior designer — discovery to delivery across healthcare, fintech, and enterprise SaaS: IA, high-density operational UI, accessibility, and implementation-grade specs.',
  },
  {
    company: 'Polyrific',
    role: 'Product Designer',
    period: '2023 — 2024',
    note: 'AI platform work — flows, UI, prototyping, and system thinking with product and engineering leads.',
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
    note: 'Brand and campaign craft for global brands including Heineken and Carlsberg — the visual foundation under the product work.',
  },
] as const

export const EXPERTISE_TILES: ExpertiseTile[] = [
  {
    number: '01',
    title: 'Product UX/UI',
    description:
      'Complex enterprise products — SaaS dashboards, healthcare workflows, fintech platforms, logistics ops tools. I work where edge cases and high-density information are the norm, not the exception.',
  },
  {
    number: '02',
    title: 'Design Systems',
    description:
      'Token-first component architecture. Figma variables mapped to CSS custom properties. Component APIs designed for engineering. Documentation written for the team that has to maintain it in two years.',
  },
  {
    number: '03',
    title: 'AI-Assisted Workflows',
    description:
      'Cursor for prototyping in code. Claude for content architecture and copy structure. Figma Make for rapid variant exploration. MCP for design-to-code automation. Production workflow tools — not experiments.',
  },
  {
    number: '04',
    title: 'Figma Architecture',
    description:
      'Component structure, variant logic, and auto-layout that scales past 10 contributors without breaking. File organisation built for handoff and long-term maintenance — not for a Dribbble screenshot.',
  },
  {
    number: '05',
    title: 'Design-to-Code',
    description:
      'GitHub PRs, Vercel preview review, implementation parity checks. I annotate discrepancies, flag shortcuts that degrade the design intent, and close the loop before shipping.',
  },
  {
    number: '06',
    title: 'Rapid Prototyping',
    description:
      'High-fidelity interactive prototypes in Figma — and when fidelity requires real code, I build it in Cursor. Stakeholders get something they can actually use, not a click-through approximation.',
  },
]

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
