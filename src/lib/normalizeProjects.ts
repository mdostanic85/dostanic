import type { Project } from '@/lib/types'

/** Drop invalid or duplicate slugs so project grids never break React keys or links. */
export function normalizeProjects(projects: Project[]): Project[] {
  const seen = new Set<string>()
  const result: Project[] = []

  for (const project of projects) {
    const slug = project.slug?.trim()
    if (!slug || seen.has(slug)) continue
    seen.add(slug)
    result.push({ ...project, slug })
  }

  return result
}
