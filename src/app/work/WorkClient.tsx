'use client'

import { useState } from 'react'
import ProjectCard from '@/components/work/ProjectCard'
import type { Project, ProjectCategory } from '@/lib/types'

type FilterOption = 'All' | ProjectCategory

const FILTERS: FilterOption[] = [
  'All',
  'Product Design',
  'Analytics',
  'Healthcare',
  'Fintech',
  'Design Systems',
  'Web',
]

type WorkClientProps = {
  projects: Project[]
}

export default function WorkClient({ projects }: WorkClientProps) {
  const [active, setActive] = useState<FilterOption>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Filter strip — atomic-style mono pill row */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-12 flex flex-wrap items-center gap-2 py-5 lg:mb-16"
      >
        <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Filter:
        </span>
        {FILTERS.map((f) => {
          const selected = active === f
          return (
            <button
              key={f}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(f)}
              className={[
                'rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-150',
                selected
                  ? 'bg-foreground text-inverse-foreground'
                  : 'border border-stroke text-muted hover:border-foreground hover:text-foreground',
              ].join(' ')}
            >
              {f}
            </button>
          )
        })}
      </div>

      {/* Grid — staggered like home SelectedWork to keep one editorial system */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
        {filtered.map((project, idx) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={idx + 1}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </>
  )
}
