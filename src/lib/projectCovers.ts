import type { Project } from '@/lib/types'

/** Static cover paths for projects with assets in /public/work/[slug]/ */
export const PROJECT_COVER_BY_SLUG: Record<string, string> = {
  devrev: '/work/devrev/cover.png',
  originchains: '/work/originchains/cover.png',
  soundscope: '/work/soundscope/cover.png',
  'healthcare-crm': '/work/healthcare-crm/cover.jpg',
  'spotify-admin-enterprise': '/work/spotify-admin-enterprise/cover.png',
  'galaxy-cash': '/work/galaxy-cash/cover.png',
  cecconis: '/work/cecconis/cover.png',
  matchlink: '/work/matchlink/cover.jpg',
}

export function getProjectCoverSrc(project: Pick<Project, 'slug' | 'coverImage'>): string | undefined {
  return project.coverImage ?? PROJECT_COVER_BY_SLUG[project.slug]
}
