export type ProjectCategory =
  | 'Product Design'
  | 'Product Builder'
  | 'Analytics'
  | 'Healthcare'
  | 'Fintech'
  | 'Design Systems'
  | 'Web'

export type ProjectType =
  | 'Client work'
  | 'Internal product'
  | 'Personal product'
  | 'Concept'
  | 'Capability'

export type PortfolioGroup = 'Selected' | 'Exploration' | 'Capability'

export type Project = {
  title: string
  domain: string
  discipline: string
  description: string
  /** Selected-work card: the product problem, in one plain sentence. */
  problem?: string
  /** Selected-work card: what this person owned, first person, no "we". */
  owned?: string
  /** Selected-work card: the single decision worth opening the case for. */
  decision?: string
  /** Homepage card: the problem compressed to one scannable line. */
  cardTagline?: string
  /** Homepage card: the two or three decisions worth scanning before opening. */
  cardHighlights?: string[]
  slug: string
  year: string
  featured: boolean
  category: ProjectCategory
  /** Clear public classification so concept and production work never blur together. */
  projectType?: ProjectType
  /** Short delivery status shown in project indexes and case-study metadata. */
  delivery?: string
  /** Keeps speculative explorations out of the default senior-work index. */
  portfolioGroup?: PortfolioGroup
  /** Optional path to cover image — e.g. /work/originchains/cover.png */
  coverImage?: string
  /** Link to Behance project if public */
  behanceUrl?: string
  /** True for the AI Workflow capability page — shows "Capability" badge instead of year */
  isCapability?: boolean
  repositoryUrl?: string
  liveUrl?: string
}

export type ExpertiseTile = {
  number: string
  title: string
  description: string
}

/** One step on the homepage process spine (Understand → … → Ship). */
export type ProcessStep = {
  number: string
  title: string
  description: string
}

/** One row on the Work page — organization + how you operated there as a senior practitioner. */
export type WorkEngagement = {
  company: string
  period: string
  role: string
  summary: string
}

/** Optional archive block on About (e.g. additional studio rows). */
export type StudioEmployment = {
  role: string
  company: string
  period: string
  note: string
}

export type ResumeExperience = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
}
