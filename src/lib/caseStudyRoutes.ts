/**
 * Registry of project slugs that have a live case study route at /work/[slug].
 *
 * Order here is the prev/next chain across case study footers.
 * When a new page is added under src/app/work/[slug]/page.tsx, append the slug.
 */
export const CASE_STUDY_SLUGS = [
  'spaceinch',
  'devrev',
  'worklight',
  'originchains',
  'spotify-admin-enterprise',
  'soundscope',
  'matchlink',
  'healthcare-crm',
  'galaxy-cash',
  'ai-design-system-workflow',
  'optronic',
  'cecconis',
] as const

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number]

export const CASE_STUDY_LABELS: Record<CaseStudySlug, string> = {
  spaceinch: 'Space Inch',
  devrev: 'DevRev',
  worklight: 'WorkLight',
  originchains: 'OriginChains',
  'spotify-admin-enterprise': 'Spotify Admin',
  soundscope: 'SoundScope',
  matchlink: 'MatchLink',
  'healthcare-crm': 'HealthCare CRM',
  'galaxy-cash': 'Galaxy Cash',
  'ai-design-system-workflow': 'AI workflow',
  optronic: 'Optronic',
  cecconis: "Cecconi's",
}

export type CaseStudyNavLink = { href: string; label: string }

export function hasCaseStudyPage(slug: string): slug is CaseStudySlug {
  return (CASE_STUDY_SLUGS as readonly string[]).includes(slug)
}

export function getCaseStudyHref(slug: string): `/work/${CaseStudySlug}` | null {
  if (hasCaseStudyPage(slug)) return `/work/${slug}`
  return null
}

/** Footer prev/next links for a case study — last item links to Expertise. */
export function getCaseStudyNav(slug: CaseStudySlug): {
  previous?: CaseStudyNavLink
  next?: CaseStudyNavLink
} {
  const idx = CASE_STUDY_SLUGS.indexOf(slug)
  const previous =
    idx > 0
      ? {
          href: `/work/${CASE_STUDY_SLUGS[idx - 1]}`,
          label: CASE_STUDY_LABELS[CASE_STUDY_SLUGS[idx - 1]],
        }
      : undefined
  const next =
    idx < CASE_STUDY_SLUGS.length - 1
      ? {
          href: `/work/${CASE_STUDY_SLUGS[idx + 1]}`,
          label: CASE_STUDY_LABELS[CASE_STUDY_SLUGS[idx + 1]],
        }
      : { href: '/expertise', label: 'Expertise' }

  return { previous, next }
}
