import type { Project, ExpertiseTile, Differentiator } from './types'

export const PROJECTS: Project[] = [
  // ─── Product Design & Enterprise SaaS ────────────────────────────────────
  {
    title: 'DevRev — Developer Tools Platform',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'End-to-end product design for DevRev — a developer-focused platform connecting engineering, support, and product workflows. Complex information architecture, multi-role dashboards, and a consistent component language across the product.',
    slug: 'devrev',
    year: '2023',
    featured: true,
    category: 'Product Design',
  },
  {
    title: 'Spotify — Admin Enterprise Panel',
    domain: 'SaaS',
    discipline: 'Product Design',
    description:
      'Enterprise admin panel for internal Spotify tooling — complex data management, bulk operations, role-based access, and dense information UI designed for power users managing content at scale.',
    slug: 'spotify-admin-enterprise',
    year: '2022',
    featured: true,
    category: 'Product Design',
  },

  // ─── Analytics & Data Dashboards ─────────────────────────────────────────
  {
    title: 'SoundScope — Music Analytics Dashboard',
    domain: 'Analytics',
    discipline: 'Product Design',
    description:
      'Redesigned analytics platform for record labels and publishers — tracking artist performance, revenue, campaign ROI, and genre insights. Data-heavy dark dashboard with semantic token architecture and modular components.',
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
      'Live data platform for matchday operations — real-time streams, event timelines, and high-density data views designed for analysts and operations teams working under time pressure.',
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
      'CRM and workflow management platform for healthcare providers — patient communication, care coordination, task management, and clinical workflow support across provider roles.',
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
      'Mobile payment and financial management app — onboarding flows, transaction history, account management, and security-critical interactions designed for clarity and trust.',
    slug: 'galaxy-cash',
    year: '2025',
    featured: false,
    category: 'Fintech',
    behanceUrl: 'https://www.behance.net/gallery/225609903/Galaxy-Cash-Mobile-App-Design',
    coverImage: '/work/galaxy-cash/cover.jpg',
  },

  // ─── Design Systems & AI Workflow ─────────────────────────────────────────
  {
    title: 'AI-Connected Design System Workflow',
    domain: 'Design Systems',
    discipline: 'Capability',
    description:
      'A documented workflow connecting Figma design systems, token architecture, AI-assisted prototyping, and engineering delivery — reducing the gap between design intent and production output.',
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
      'Complete website redesign and rebuild for an industrial optics manufacturer — multilingual EN/DE structure, 9 product pages, SEO content architecture, and Vercel-based delivery with a live client feedback workflow.',
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
      'Website design and digital brand direction for a premium restaurant — visual hierarchy, menu presentation, reservation UX, and a refined typographic system appropriate for the hospitality context.',
    slug: 'cecconis',
    year: '2021',
    featured: false,
    category: 'Web',
  },
]

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
