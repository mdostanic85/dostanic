'use client'

import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'
import ProjectCover from '@/components/work/ProjectCover'
import { sectionSubheadingClassName } from '@/lib/headings'
import CaseStudyTileLink from '@/components/work/CaseStudyTileLink'
import { hasCaseStudyPage } from '@/lib/caseStudyRoutes'

type ProjectCardProps = {
  project: Project
  /** Optional 1-based index used for the editorial number mark in the corner. */
  index?: number
}

/**
 * Atomic.black-style project tile — cover is a slug-stable colour placeholder,
 * with mono caption marks in the top corners (index + year/domain), an arrow
 * circle on the right of the caption, and a hover scale on the cover. Mirrors
 * the home SelectedWork tile so the listing reads as one coherent editorial system.
 * Links to the case study route when one exists; display-only otherwise.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const linked = hasCaseStudyPage(project.slug)
  return (
    <article className="group">
      <CaseStudyTileLink
        slug={project.slug}
        title={project.title}
        className={cn('block', linked ? 'cursor-pointer' : 'cursor-default')}
      >
        {/* Top mark row */}
        <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span>
            {typeof index === 'number'
              ? `/ ${String(index).padStart(2, '0')}`
              : `/ ${project.category}`}
          </span>
          <span className="flex items-center gap-3">
            <span>{project.domain}</span>
            <span aria-hidden="true" className="h-px w-5 bg-stroke" />
            <span>{project.isCapability ? 'Capability' : project.year || '—'}</span>
          </span>
        </div>

        <ProjectCover project={project} />

        {/* Caption */}
        <div className="mt-5 flex items-start justify-between gap-5">
          <div className="min-w-0">
            <h3
              className={cn(
                sectionSubheadingClassName,
                'transition-colors duration-200 group-hover:text-accent'
              )}
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-muted">
              {project.discipline}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stroke text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-foreground"
          >
            →
          </span>
        </div>
      </CaseStudyTileLink>
    </article>
  )
}
