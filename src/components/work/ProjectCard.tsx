import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'
import { sectionSubheadingClassName } from '@/lib/headings'

type ProjectCardProps = {
  project: Project
  /** Optional 1-based index used for the editorial number mark in the corner. */
  index?: number
}

/**
 * Atomic.black-style project tile — image-driven, with mono caption marks in
 * the top corners (index + year/domain), an arrow circle on the right of the
 * caption, and a hover scale on the cover. Mirrors the home Hero's case
 * preview tile so the listing reads as one coherent editorial system.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const href = `/work/${project.slug}`

  return (
    <article className="group">
      <Link
        href={href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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

        {/* Cover image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stroke bg-surface transition-colors duration-300 group-hover:border-foreground/40">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">
                {project.isCapability ? 'Capability' : 'Case study'}
              </span>
            </div>
          )}

          {/* Capability ribbon */}
          {project.isCapability ? (
            <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-inverse-foreground">
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
            className="mt-2 shrink-0 text-lg text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          >
            ↗
          </span>
        </div>
      </Link>
    </article>
  )
}
