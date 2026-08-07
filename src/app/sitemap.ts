import type { MetadataRoute } from 'next'
import { CASE_STUDY_SLUGS } from '@/lib/caseStudyRoutes'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = ['', '/work', '/expertise', '/about', '/contact', '/resume', '/privacy']
  const caseRoutes = CASE_STUDY_SLUGS.map((slug) => `/work/${slug}`)

  return [...mainRoutes, ...caseRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route === '/work' ? 0.9 : 0.7,
  }))
}
