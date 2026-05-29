import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import FooterCTA from '@/components/home/FooterCTA'
import WorkClient from './WorkClient'
import { PROJECTS } from '@/lib/data'
import { normalizeProjects } from '@/lib/normalizeProjects'
import type { Project, ProjectCategory } from '@/lib/types'
import { sanityFetch } from '@/sanity/lib/fetch'
import {
  PROJECTS_LIST_QUERY,
  WORK_INDEX_PAGE_QUERY,
} from '@/sanity/lib/queries'

type CmsPageHeader = {
  eyebrow?: string
  titleLines?: string[]
  titleAccentLine?: string
  intro?: string
  topRightLabel?: string
}

type CmsWorkIndexPage = {
  pageHeader?: CmsPageHeader
  footerNote?: string
  seo?: { title?: string; description?: string }
}

type CmsProject = {
  _id: string
  title: string
  slug: string
  domain?: string
  discipline?: string
  year?: string
  featured?: boolean
  isCapability?: boolean
  category?: string
  description?: string
  behanceUrl?: string
}

const FALLBACK_METADATA: Metadata = {
  title: 'Work — Milos Dostanic',
  description:
    'Selected product design and systems work — enterprise SaaS, healthcare, analytics, fintech, and agency engagements — from a senior designer who ships.',
}

export async function generateMetadata(): Promise<Metadata> {
  const cms = await sanityFetch<CmsWorkIndexPage | null>({
    query: WORK_INDEX_PAGE_QUERY,
    tags: ['workIndexPage'],
  })
  return {
    title: cms?.seo?.title ?? FALLBACK_METADATA.title,
    description: cms?.seo?.description ?? FALLBACK_METADATA.description,
  }
}

function mapCmsProject(p: CmsProject): Project | null {
  const slug = typeof p.slug === 'string' ? p.slug.trim() : ''
  if (!slug || !p.title) return null

  const staticProject = PROJECTS.find((item) => item.slug === slug)
  return {
    title: p.title,
    domain: p.domain ?? '',
    discipline: p.discipline ?? '',
    description: p.description ?? '',
    slug,
    year: p.year ?? '',
    featured: Boolean(p.featured),
    category: (p.category ?? 'Product Design') as ProjectCategory,
    isCapability: p.isCapability,
    behanceUrl: p.behanceUrl,
    coverImage: staticProject?.coverImage,
  }
}

export default async function WorkPage() {
  const [cmsPage, cmsProjects] = await Promise.all([
    sanityFetch<CmsWorkIndexPage | null>({
      query: WORK_INDEX_PAGE_QUERY,
      tags: ['workIndexPage'],
    }),
    sanityFetch<CmsProject[] | null>({
      query: PROJECTS_LIST_QUERY,
      tags: ['project'],
    }),
  ])

  const cmsMapped =
    cmsProjects?.map(mapCmsProject).filter((p): p is Project => p !== null) ?? []
  const projects: Project[] = normalizeProjects(
    cmsMapped.length > 0 ? cmsMapped : PROJECTS,
  )

  const total = projects.length

  const eyebrow = cmsPage?.pageHeader?.eyebrow ?? 'Selected Work / Best Cases'
  const intro =
    cmsPage?.pageHeader?.intro ??
    'Twenty-plus years across product UX, design systems, analytics, healthcare, fintech, and web. The selection below shows the kind of work I do and how I think — edge cases included.'
  const topRightLabel = cmsPage?.pageHeader?.topRightLabel ?? `${total} cases`
  const footerNote =
    cmsPage?.footerNote ??
    'More projects available on request — including NDA-covered enterprise work and legacy projects not shown here.'

  const titleLines = cmsPage?.pageHeader?.titleLines
  const titleAccentLine = cmsPage?.pageHeader?.titleAccentLine
  const titleNode =
    titleLines && titleLines.length > 0 ? (
      <>
        {titleLines.map((line, idx) => (
          <span key={idx}>
            {line}
            {idx < titleLines.length - 1 || titleAccentLine ? <br /> : null}
          </span>
        ))}
        {titleAccentLine ? (
          <span className="accent-gradient-text leading-[0.88]">
            {titleAccentLine}
          </span>
        ) : null}
      </>
    ) : (
      <>
        The work,
        <br />
        not the{' '}
        <span className="accent-gradient-text leading-[0.88]">pitch.</span>
      </>
    )

  return (
    <main>
      <PageHeader
        eyebrow={eyebrow}
        title={titleNode}
        intro={<>{intro}</>}
        topRightLabel={topRightLabel}
      />

      <Section padding="lg">
        <Container size="wide">
          <WorkClient projects={projects} />

          <p className="mt-20 max-w-2xl pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {footerNote}
          </p>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
