import type { Project } from '@/lib/types'

/** Static cover paths for projects with assets in /public/work/[slug]/ */
export const PROJECT_COVER_BY_SLUG: Record<string, string> = {
  originchains: '/work/originchains/cover.png',
  soundscope: '/work/soundscope/cover.png',
  'healthcare-crm': '/work/healthcare-crm/cover.jpg',
  optronic: '/work/optronic/cover.webp',
}

export function getProjectCoverSrc(project: Pick<Project, 'slug' | 'coverImage'>): string | undefined {
  return project.coverImage ?? PROJECT_COVER_BY_SLUG[project.slug]
}
