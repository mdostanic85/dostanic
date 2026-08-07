'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectSignalCover from '@/components/work/ProjectSignalCover'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import type { Project, ProjectCategory } from '@/lib/types'

type FilterOption = 'Selected' | 'Explorations' | ProjectCategory

const FILTERS: FilterOption[] = [
  'Selected',
  'Explorations',
  'Product Design',
  'Product Builder',
  'Analytics',
  'Healthcare',
  'Fintech',
  'Design Systems',
  'Web',
]

type WorkClientProps = {
  projects: Project[]
}

/**
 * V3 work index — an editorial table. Each case is a hairline row:
 * index, title, domain, year, arrow. On fine-pointer devices a floating
 * cover preview trails the cursor over the list (GSAP quickTo springs);
 * touch devices get inline thumbnails instead. Filters are plain mono
 * text with counts — no pills.
 */
export default function WorkClient({ projects }: WorkClientProps) {
  const [active, setActive] = useState<FilterOption>('Selected')
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const previewRef = useRef<HTMLDivElement | null>(null)
  const moveX = useRef<((v: number) => void) | null>(null)
  const moveY = useRef<((v: number) => void) | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const filtered = projects.filter((project) => {
    if (active === 'Selected') return project.portfolioGroup === 'Selected'
    if (active === 'Explorations') return project.portfolioGroup === 'Exploration'
    return project.category === active
  })

  const countFor = (filter: FilterOption) => {
    if (filter === 'Selected') {
      return projects.filter((project) => project.portfolioGroup === 'Selected').length
    }
    if (filter === 'Explorations') {
      return projects.filter((project) => project.portfolioGroup === 'Exploration').length
    }
    return projects.filter((project) => project.category === filter).length
  }

  // Floating preview springs — desktop only.
  useLayoutEffect(() => {
    const el = previewRef.current
    if (!el || prefersReducedMotion) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    moveX.current = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    moveY.current = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      moveX.current?.(e.clientX + 28)
      moveY.current?.(e.clientY - 110)
    }
    const list = listRef.current
    list?.addEventListener('pointermove', onMove, { passive: true })
    return () => list?.removeEventListener('pointermove', onMove)
  }, [prefersReducedMotion])

  return (
    <>
      {/* Filters — mono text row */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-14 flex flex-wrap items-baseline gap-x-7 gap-y-3 border-b border-stroke pb-6 lg:mb-20"
      >
        {FILTERS.map((f) => {
          const selected = active === f
          return (
            <button
              key={f}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(f)}
              className={[
                'group inline-flex items-baseline gap-2 font-mono text-[12px] uppercase tracking-[0.2em] transition-colors duration-150',
                selected
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground',
              ].join(' ')}
            >
              <span
                className={
                  selected
                    ? 'border-b border-accent pb-1'
                    : 'border-b border-transparent pb-1'
                }
              >
                {f}
              </span>
              <sup className={selected ? 'text-accent' : 'text-muted/70'}>
                {countFor(f)}
              </sup>
            </button>
          )
        })}
      </div>

      {/* Index rows */}
      <div ref={listRef} className="relative">
        <ul className="border-t border-stroke">
          {filtered.map((project, idx) => (
            <li key={project.slug} className="border-b border-stroke">
              <Link
                href={`/work/${project.slug}`}
                onPointerEnter={() =>
                  setPreviewSrc(project.coverImage ?? null)
                }
                onPointerLeave={() => setPreviewSrc(null)}
                className="group grid grid-cols-12 items-baseline gap-3 py-7 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:py-9 lg:gap-8"
              >
                <span className="col-span-2 font-mono text-[12px] uppercase tracking-[0.25em] text-muted transition-colors group-hover:text-accent sm:col-span-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="display-tight col-span-10 text-2xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:col-span-6 sm:text-3xl lg:text-4xl">
                  {project.title.split(' | ')[0].split(' — ')[0]}
                </h3>
                <span className="col-span-6 col-start-3 font-mono text-[12px] uppercase tracking-[0.25em] text-muted sm:col-span-3 sm:col-start-8 sm:text-right">
                  {project.projectType || project.domain}
                </span>
                <span className="col-span-3 text-right font-mono text-[12px] uppercase tracking-[0.25em] text-muted sm:col-span-1">
                  {project.isCapability ? 'CAP' : project.year || '—'}
                </span>
                <span
                  aria-hidden="true"
                  className="col-span-1 text-right text-lg text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                >
                  ↗
                </span>

                {/* Touch fallback — inline thumbnail */}
                <div className="col-span-12 mt-4 overflow-hidden [@media(hover:hover)_and_(pointer:fine)]:hidden">
                  <ProjectSignalCover project={project} />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Floating preview — fixed, trails cursor, fine pointers only */}
        <div
          ref={previewRef}
          aria-hidden="true"
          className={[
            'pointer-events-none fixed left-0 top-0 z-40 hidden w-[320px] overflow-hidden border border-stroke bg-surface shadow-2xl transition-opacity duration-300 [@media(hover:hover)_and_(pointer:fine)]:block',
            previewSrc ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          {previewSrc ? (
            <Image
              src={previewSrc}
              alt=""
              width={640}
              height={400}
              sizes="320px"
              className="aspect-[16/10] w-full object-cover"
            />
          ) : null}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </>
  )
}
