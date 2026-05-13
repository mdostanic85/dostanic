import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'
import { getProjectCoverPlaceholderBackground } from '@/lib/projectCoverPlaceholder'
import { sectionSubheadingClassName } from '@/lib/headings'

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
 * Tiles are display-only (no case-study routes).
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group">
      <div className="block cursor-default">
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

        {/* Cover image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border border-stroke bg-surface transition-colors duration-300 group-hover:border-foreground">
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{
              backgroundColor: getProjectCoverPlaceholderBackground(project.slug),
            }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/75">
              {project.isCapability ? 'Capability' : 'Case study'}
            </span>
          </div>

          {/* Capability ribbon */}
          {project.isCapability ? (
            <span className="absolute left-4 top-4 rounded-[3px] bg-foreground px-2 py-1 font-mono text-[12px] uppercase tracking-[0.18em] text-inverse-foreground">
              Capability
            </span>
          ) : null}

          {/* Accent line slide-in */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
          />
        </div>

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
      </div>
    </article>
  )
}
