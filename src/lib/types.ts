export type ProjectCategory =
  | 'Product Design'
  | 'Analytics'
  | 'Healthcare'
  | 'Fintech'
  | 'Design Systems'
  | 'Web'

export type Project = {
  title: string
  domain: string
  discipline: string
  description: string
  slug: string
  year: string
  featured: boolean
  category: ProjectCategory
  /** Optional path to cover image — e.g. /work/devrev/cover.jpg */
  coverImage?: string
  /** Link to Behance project if public */
  behanceUrl?: string
  /** True for the AI Workflow capability page — shows "Capability" badge instead of year */
  isCapability?: boolean
}

export type ExpertiseTile = {
  number: string
  title: string
  description: string
}

export type Differentiator = {
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
