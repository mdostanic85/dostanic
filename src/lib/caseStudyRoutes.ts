/**
 * Registry of project slugs that have a live case study route at /work/[slug].
 *
 * Order here is the prev/next chain across case study footers.
 * Selected cases first, then capability, then explorations.
 */
export const CASE_STUDY_SLUGS = [
  'worklight',
  'originchains',
  'optronic',
  'ai-design-system-workflow',
  'soundscope',
  'healthcare-crm',
  'matchlink',
  'galaxy-cash',
  'cecconis',
] as const

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number]

export const CASE_STUDY_LABELS: Record<CaseStudySlug, string> = {
  worklight: 'WorkLight',
  originchains: 'OriginChains',
  optronic: 'Optronic',
  'ai-design-system-workflow': 'AI workflow',
  soundscope: 'SoundScope',
  'healthcare-crm': 'HealthCare CRM',
  matchlink: 'MatchLink',
  'galaxy-cash': 'Galaxy Cash',
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
