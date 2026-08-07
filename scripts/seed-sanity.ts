/**
 * Seed script — populates the Sanity dataset with the current hardcoded
 * site content so the Studio shows real data from the start.
 *
 * Run:
 *   npm run seed
 *
 * Requires SANITY_API_WRITE_TOKEN in .env.local (Editor permissions).
 * Safe to re-run — uses createOrReplace so existing docs are overwritten.
 */
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

// ─────────────────────────────────────────────────────────────────────────────
// Singletons
// ─────────────────────────────────────────────────────────────────────────────

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  contactEmail: 'milos@dostanic.net',
  locationLine: 'Based in Serbia · working remote with teams worldwide',
  copyrightOwner: '2026 Milos Dostanic',
  linkedInUrl: 'https://www.linkedin.com/in/milosdostanic/',
}

const homePage = {
  _id: 'homePage',
  _type: 'homePage',
  hero: {
    titleLines: ['Turning Complexity', 'Into Buildable'],
    titleAccentLine: 'Product Design',
    intro:
      'Senior Product Designer focused on SaaS platforms, scalable design systems, AI-assisted workflows, and developer-ready product delivery — bridging product thinking, UX, Figma, and code to help teams turn complex workflows into clear, buildable digital products.',
    primaryCta: { label: 'View Work', href: '/work' },
    secondaryCta: { label: 'Get in Touch', href: 'mailto:milos@dostanic.net' },
  },
  deliveryStrip: {
    eyebrow: 'Practice / Delivery stack',
    titleLine1: 'Design is half the job.',
    titleAccentLine: 'Shipping is the rest.',
    intro:
      'I work where design, systems, and code meet — not at the handoff line.',
    rows: [
      { label: 'GitHub', blurb: '—' },
      { label: 'Vercel', blurb: '—' },
      { label: 'Cursor', blurb: '—' },
      { label: 'Figma', blurb: '—' },
      { label: 'Figma MCP', blurb: '—' },
      { label: 'Design systems', blurb: '—' },
      { label: 'Design tokens', blurb: '—' },
      { label: 'Storybook', blurb: '—' },
      { label: 'Next.js', blurb: '—' },
      { label: 'React', blurb: '—' },
      { label: 'Linear', blurb: '—' },
      { label: 'B2B SaaS', blurb: '—' },
      { label: 'Enterprise UX', blurb: '—' },
      { label: 'Developer handoff', blurb: '—' },
      { label: 'PR reviews', blurb: '—' },
      { label: 'Preview deploys', blurb: '—' },
      { label: 'AI workflows', blurb: '—' },
      { label: 'Component specs', blurb: '—' },
      { label: 'Sanity CMS', blurb: '—' },
      { label: 'Accessibility', blurb: '—' },
      { label: 'Data-heavy UI', blurb: '—' },
      { label: 'Admin tools', blurb: '—' },
    ],
  },
  selectedWork: {
    eyebrow: 'Best Cases / Selected Work',
    titleLine1: 'Selected work,',
    titleAccentLine: 'across complex products.',
    viewAllLabel: 'View all work',
  },
  footerCta: {
    eyebrow: 'Contacts / Availability',
    titleLines: ["I'm ready to discuss"],
    titleAccentLine: 'your project.',
    body: "If you're building something complex and need a designer who reads the PR and stays close to implementation — let's talk.",
    locationLine: 'Based in Serbia · working remote with teams worldwide',
    emailLabel: 'Send email',
  },
  seo: {
    title: 'Milos Dostanic — Senior Product Designer',
    description:
      'Senior Product Designer focused on complex software UX — B2B SaaS, internal tools, and data-heavy products. Backed by design systems, Figma-to-code workflows, and AI-assisted prototyping.',
  },
}

const workIndexPage = {
  _id: 'workIndexPage',
  _type: 'workIndexPage',
  pageHeader: {
    eyebrow: 'Selected Work / Best Cases',
    titleLines: ['Selected work,'],
    titleAccentLine: 'across complex products.',
    intro:
      'Twenty-plus years across product UX, design systems, analytics, healthcare, fintech, and web. The selection below shows the kind of work I do and how I think — edge cases included.',
    topRightLabel: '10 cases',
  },
  footerNote:
    'More projects available on request — including NDA-covered enterprise work and legacy projects not shown here.',
  seo: {
    title: 'Work — Milos Dostanic',
    description:
      'Selected product design and systems work — enterprise SaaS, healthcare, analytics, fintech, and agency engagements — from a senior designer who ships.',
  },
}

const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  pageHeader: {
    eyebrow: 'About / Background',
    titleLines: ['20+ years of design.', 'Still getting closer to the'],
    titleAccentLine: 'hard problems.',
    intro:
      'I am an award-winning designer with a strong graphic design background and 20+ years of experience. I help teams turn complex product requirements into clear UX, scalable systems, and implementation-ready design.',
    topRightLabel: 'Serbia · Remote',
  },
  storyEyebrow: 'The story',
  storySinceLabel: 'since — 2003',
  storyLead:
    '20+ years in design, now focused on complex products where UX, system quality, and implementation alignment matter more than visual polish alone.',
  storyParagraphs: [
    'Before product work, I spent years in graphic and visual design. That craft foundation still shapes how I think about hierarchy, typography, clarity, and communication inside complex interfaces.',
    'I also worked on brand-side projects for clients such as Heineken and Carlsberg, which sharpened my discipline around visual systems and consistency at scale.',
    'My work spans healthcare, fintech, SaaS, enterprise tools, and data-heavy workflows where permissions, states, and edge cases shape the product.',
    'I operate between product strategy, UX, UI, design systems, Figma, and code-aware delivery so what gets designed can actually be built and maintained.',
  ],
  principles: [
    {
      number: '01',
      title: 'Structure before visuals',
      body: 'I start with information architecture and flows, then shape interface and visual quality around that system.',
    },
    {
      number: '02',
      title: 'Constraints are inputs',
      body: 'Business goals, technical limits, and timeline pressure are part of the design problem, not exceptions.',
    },
    {
      number: '03',
      title: 'Done means shipped',
      body: 'A design is complete only when it works in production with real data, edge cases, and implementation constraints.',
    },
    {
      number: '04',
      title: 'Systems scale products',
      body: 'Design systems are operational infrastructure: tokens, components, rules, and documentation teams can use daily.',
    },
  ],
  experienceEyebrow: 'Experience',
  experienceIntro:
    'Employers and studios below are listed with the dates I was there and what I actually owned in role — from current embedded studio work back through agency and earlier graphic craft. Deeper product write-ups live on Work; the authoritative timeline and recommendations stay on LinkedIn.',
  seo: {
    title: 'About — Milos Dostanic',
    description:
      'Award-winning Senior Product Designer with a strong graphic design foundation, focused on complex products, scalable systems, and AI-assisted delivery.',
  },
}

const expertisePage = {
  _id: 'expertisePage',
  _type: 'expertisePage',
  pageHeader: {
    eyebrow: 'Expertise / Capabilities',
    titleLines: ['What I do.', 'And when it'],
    titleAccentLine: 'matters.',
    intro:
      'Focused capabilities for teams building complex products — what I do, when it helps, and what you get.',
    topRightLabel: 'Six disciplines',
  },
  sideNavEyebrow: 'On this page',
  seo: {
    title: 'Expertise — Milos Dostanic',
    description:
      'Focused expertise across complex product UX, design systems, AI-assisted workflows, and Figma-to-code delivery.',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Expertise areas (documents)
// ─────────────────────────────────────────────────────────────────────────────

const expertiseAreas = [
  {
    _id: 'expertiseArea-01',
    _type: 'expertiseArea',
    number: '01',
    idSlug: { current: 'product-ux-ui', _type: 'slug' },
    title: 'Product UX/UI Design',
    description:
      'Complex SaaS, healthcare, fintech, and enterprise interfaces. I design flows, structure, and UI that stay clear under real product complexity.',
    usefulWhen: [
      'You need clear UX architecture before engineering scales the feature set',
      'The product has grown inconsistent and hard to navigate',
    ],
    outputs: [
      'IA, key user flows, and high-fidelity product UI',
      'Structured handoff with states, edge cases, and responsive behavior',
    ],
    orderRank: 1,
  },
  {
    _id: 'expertiseArea-02',
    _type: 'expertiseArea',
    number: '02',
    idSlug: { current: 'design-systems', _type: 'slug' },
    title: 'Design Systems',
    description:
      'Practical design systems that connect tokens, components, and documentation across Figma and code.',
    usefulWhen: [
      'Design and code are drifting and teams keep rebuilding similar patterns',
      'The product is scaling but consistency and speed are dropping',
    ],
    outputs: [
      'Token architecture, variable setup, and component library structure',
      'System documentation and governance rules teams can actually use',
    ],
    orderRank: 2,
  },
  {
    _id: 'expertiseArea-03',
    _type: 'expertiseArea',
    number: '03',
    idSlug: { current: 'ai-prototyping', _type: 'slug' },
    title: 'AI-Assisted Prototyping',
    description:
      'AI-assisted prototyping with Cursor, Claude, and Figma workflows to test complex interactions faster in realistic conditions.',
    usefulWhen: [
      'A static Figma prototype is not enough to validate behavior',
      'You need to test multiple directions quickly before engineering commit',
    ],
    outputs: [
      'Interactive code prototypes and fast UX experiments',
      'Implementation-aware concepts with clearer design-to-dev alignment',
    ],
    orderRank: 3,
  },
  {
    _id: 'expertiseArea-04',
    _type: 'expertiseArea',
    number: '04',
    idSlug: { current: 'figma-to-code', _type: 'slug' },
    title: 'Figma-to-Code',
    description:
      'Reducing the gap between designed and shipped through PR-aware handoff, implementation review, and token/component parity checks.',
    usefulWhen: [
      'Shipped UI keeps drifting from Figma intent',
      'The team needs design quality to survive implementation',
    ],
    outputs: [
      'Clear handoff specs and implementation QA feedback',
      'Figma-to-code parity checks for tokens and components',
    ],
    orderRank: 4,
  },
  {
    _id: 'expertiseArea-05',
    _type: 'expertiseArea',
    number: '05',
    idSlug: { current: 'ux-audits', _type: 'slug' },
    title: 'UX Audits & Redesigns',
    description:
      'Structured UX diagnosis for products that feel messy, inconsistent, or hard to scale.',
    usefulWhen: [
      'You know UX is breaking but not where to start',
      'A redesign needs a prioritized plan, not guesswork',
    ],
    outputs: [
      'Prioritized findings with impact and effort',
      'Redesign roadmap focused on the highest-leverage fixes',
    ],
    orderRank: 5,
  },
  {
    _id: 'expertiseArea-06',
    _type: 'expertiseArea',
    number: '06',
    idSlug: { current: 'web-brand', _type: 'slug' },
    title: 'Web & Digital Experience',
    description:
      'Product-focused websites and digital experiences built for clarity, credibility, and conversion.',
    usefulWhen: [
      'Your website looks fine but does not explain the product clearly',
      'You need stronger information hierarchy and message clarity',
    ],
    outputs: [
      'Site architecture and clear content structure',
      'Page-level UI direction and implementation-ready design',
    ],
    orderRank: 6,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Experience entries (documents)
// ─────────────────────────────────────────────────────────────────────────────

const experienceEntries = [
  {
    _id: 'experience-space-inch',
    _type: 'experienceEntry',
    company: 'Space Inch',
    period: 'Mar 2024 — present',
    role: 'Senior Product Designer / AI Engineer',
    summary:
      'Product and engineering studio — I embed as senior product design lead from discovery through delivery: IA, flows, high-density SaaS and internal tools, accessibility, and specs that survive real sprint pressure (healthcare, fintech, enterprise). I often own the design system — tokens, components, Figma architecture, docs, and governance so more than one team can ship without visual or API drift. Work is increasingly AI-driven: faster exploration, tighter design–dev loops, and patterns where product, data, and tooling stay coherent. When it shortens the loop, I work in the same toolchain as engineering — GitHub (PRs, reviews, branching), Vercel previews for sign-off on production-like builds, and React / Next.js for prototypes or build-ready UI alongside Figma.',
    orderRank: 1,
  },
  {
    _id: 'experience-polyrific',
    _type: 'experienceEntry',
    company: 'Polyrific',
    period: 'Mar 2023 — Mar 2024',
    role: 'Product Designer · Part-time, project-based',
    summary:
      'Part-time engagement by project — product design for Geniverse, an AI platform for organising, analysing, and acting on data through adaptive workflows. I owned research and flows through hi-fi UI and prototyping, evolved the design system (components, type, colour), simplified complex features (memory, uploads, Spaces), and partnered with engineering and product so the experience stayed clear, trustworthy, and buildable.',
    orderRank: 2,
  },
  {
    _id: 'experience-kod-works',
    _type: 'experienceEntry',
    company: 'KOD WORKS',
    period: 'Jun 2023 — Nov 2023',
    role: 'Senior UI/UX Designer',
    summary:
      'UI and UX for games and other digital products — flow maps and interfaces that support gameplay, Lottie-based motion for stronger mobile game feel, and a deliberate balance between visual appeal and practical, repeatable interaction patterns.',
    orderRank: 3,
  },
  {
    _id: 'experience-quantox',
    _type: 'experienceEntry',
    company: 'Quantox Technology',
    period: 'Mar 2019 — Jun 2023',
    role: 'Medior UI/UX Designer, then Senior UI/UX Designer',
    summary:
      'Agency-side product and marketing design for client digital products: user research, prototyping, and shipped UI in collaboration with PMs, developers, and stakeholders. Promoted from medior to senior as scope grew; graphic-design background applied to logos, infographics, decks, and supporting visual assets when products needed them.',
    orderRank: 4,
  },
  {
    _id: 'experience-fantastic-machines',
    _type: 'experienceEntry',
    company: 'Fantastic Machines GmbH',
    period: 'Jan 2016 — Jan 2017',
    role: 'UI Designer',
    summary:
      'UI design across multiple web projects and UX improvements for the Paxxon app — working with a small product-oriented team (company based in Switzerland; I worked from Paraćin).',
    orderRank: 5,
  },
  {
    _id: 'experience-carlsberg',
    _type: 'experienceEntry',
    company: 'Carlsberg Group',
    period: '2015 — 2016',
    role: 'Graphic Designer',
    summary:
      'Brand-side graphic design for Carlsberg — campaign and packaging-adjacent materials, in line with global brand guidelines and local market execution.',
    orderRank: 6,
  },
  {
    _id: 'experience-promo-advertising',
    _type: 'experienceEntry',
    company: 'Promo Advertising',
    period: 'Sep 2013 — Jun 2014',
    role: 'Graphic Designer',
    summary:
      'Graphic design for advertising and print — campaign and client materials end to end, from layout and prepress-oriented execution to delivery-ready artwork.',
    orderRank: 7,
  },
  {
    _id: 'experience-heineken',
    _type: 'experienceEntry',
    company: 'The HEINEKEN Company',
    period: 'Jan 2013',
    role: 'Graphic Designer',
    summary:
      'Limited-time packaging project — design for the Belgrade 2013 limited-edition can, executed to global brand standards on a short, high-visibility timeline.',
    orderRank: 8,
  },
  {
    _id: 'experience-freelance',
    _type: 'experienceEntry',
    company: 'Freelance',
    period: '2003 — present',
    role: 'Independent designer',
    summary:
      'Independent practice since 2003 — graphic design, brand and campaign work, and (over time) product and digital UI/UX alongside studio and embedded roles. The thread is the same: clear systems, craft-level execution, and deliverables teams can ship.',
    orderRank: 9,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Projects (documents)
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    _id: 'project-originchains',
    _type: 'project',
    title: 'OriginChains — Climate Company Discovery',
    slug: { _type: 'slug', current: 'originchains' },
    domain: 'SaaS',
    discipline: 'Product Design',
    year: '2025',
    featured: true,
    category: 'Product Design',
    description:
      'I acted as lead product designer on a B2B climate intelligence web app — company discovery, trust-heavy data presentation, activity feeds, and admin and privacy modes where permissions had to be obvious, not decorative.',
    orderRank: 1,
  },
  {
    _id: 'project-soundscope',
    _type: 'project',
    title: 'SoundScope — Music Analytics Dashboard',
    slug: { _type: 'slug', current: 'soundscope' },
    domain: 'Analytics',
    discipline: 'Product Design',
    year: '2025',
    featured: true,
    category: 'Analytics',
    behanceUrl:
      'https://www.behance.net/gallery/235878795/SoundScope-Music-Analytics-Dashboard-Redesign',
    description:
      'I led the redesign of an analytics platform for labels and publishers — artist and catalog performance, revenue, campaigns, and genre-level insight in one dark, analyst-first shell.',
    orderRank: 4,
  },
  {
    _id: 'project-matchlink',
    _type: 'project',
    title: 'MatchLink — Real-Time Matchday Insights',
    slug: { _type: 'slug', current: 'matchlink' },
    domain: 'Sports Tech',
    discipline: 'Product Design',
    year: '2025',
    featured: false,
    category: 'Analytics',
    behanceUrl:
      'https://www.behance.net/gallery/225610623/MatchLink-Real-Time-Matchday-Insights',
    description:
      'As product design lead on a live matchday platform, I shaped real-time streams, event timelines, and high-density views for analysts and operations staff working under seconds of pressure.',
    orderRank: 5,
  },
  {
    _id: 'project-healthcare-crm',
    _type: 'project',
    title: 'HealthCare CRM',
    slug: { _type: 'slug', current: 'healthcare-crm' },
    domain: 'Healthcare',
    discipline: 'Product UX',
    year: '2024',
    featured: true,
    category: 'Healthcare',
    description:
      'I owned UX for a healthcare CRM and care-coordination product — patient communication, tasking, handoffs between roles, and clinical-adjacent workflows where mistakes carry real cost.',
    orderRank: 6,
  },
  {
    _id: 'project-galaxy-cash',
    _type: 'project',
    title: 'Galaxy Cash — Fintech Mobile App',
    slug: { _type: 'slug', current: 'galaxy-cash' },
    domain: 'Fintech',
    discipline: 'Product Design',
    year: '2025',
    featured: false,
    category: 'Fintech',
    behanceUrl:
      'https://www.behance.net/gallery/225609903/Galaxy-Cash-Mobile-App-Design',
    description:
      'I directed product design for a consumer fintech mobile experience — onboarding, balances, transfers, and security-sensitive flows where trust is built through clarity, not decoration.',
    orderRank: 7,
  },
  {
    _id: 'project-ai-workflow',
    _type: 'project',
    title: 'AI-Connected Design System Workflow',
    slug: { _type: 'slug', current: 'ai-design-system-workflow' },
    domain: 'Design Systems',
    discipline: 'Capability',
    year: '',
    featured: true,
    isCapability: true,
    category: 'Design Systems',
    description:
      'I codified how I run design-system work when AI tooling, tokens, Figma architecture, and codebases all have to stay in sync — a senior-practice playbook rather than a single client deliverable.',
    orderRank: 8,
  },
  {
    _id: 'project-optronic',
    _type: 'project',
    title: 'Optronic — Website Redesign',
    slug: { _type: 'slug', current: 'optronic' },
    domain: 'Web',
    discipline: 'UX & Frontend',
    year: '2024',
    featured: false,
    category: 'Web',
    description:
      'I led a full website redesign and build for an industrial optics manufacturer — multilingual EN/DE IA, nine structured product families, SEO-aware content hierarchy, and hosted manuals and firmware as first-class product surfaces.',
    orderRank: 9,
  },
  {
    _id: 'project-cecconis',
    _type: 'project',
    title: "Cecconi's Restaurant",
    slug: { _type: 'slug', current: 'cecconis' },
    domain: 'Hospitality',
    discipline: 'Web & Brand',
    year: '2021',
    featured: false,
    category: 'Web',
    description:
      'I set art direction and UX for a premium hospitality site — menu hierarchy, reservation paths, and editorial photography pacing that match a high-touch restaurant brand.',
    orderRank: 10,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Seed runner
// ─────────────────────────────────────────────────────────────────────────────

async function seed() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error(
      '❌  SANITY_API_WRITE_TOKEN is not set in .env.local.\n' +
        '   Create an Editor token at sanity.io/manage → API → Tokens.',
    )
    process.exit(1)
  }

  const allDocs = [
    siteSettings,
    homePage,
    workIndexPage,
    aboutPage,
    expertisePage,
    ...expertiseAreas,
    ...experienceEntries,
    ...projects,
  ]

  console.log(`\nSeeding ${allDocs.length} documents to dataset "${client.config().dataset}"...\n`)

  const tx = client.transaction()
  for (const doc of allDocs) {
    tx.createOrReplace(doc as Parameters<typeof tx.createOrReplace>[0])
  }

  try {
    const result = await tx.commit()
    console.log(`✅  Done. ${result.results.length} documents written.`)
    console.log('\nDocuments created:')
    result.results.forEach((r) => console.log(`   • ${r.id}`))
  } catch (err) {
    console.error('❌  Transaction failed:', err)
    process.exit(1)
  }
}

seed()
