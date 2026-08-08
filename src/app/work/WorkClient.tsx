'use client'

import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectSignalCover from '@/components/work/ProjectSignalCover'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import type { PortfolioGroup, Project } from '@/lib/types'

type Band = {
  key: PortfolioGroup
  label: string
  note: string
}

/**
 * Reading order of the index. Production work first, the system capability
 * under it, speculative work last — so a concept can never sit above shipped
 * client work just because it carries a later year.
 */
const BANDS: Band[] = [
  { key: 'Selected', label: 'Selected work', note: 'Client and product work' },
  { key: 'Capability', label: 'Capability', note: 'Working method' },
  { key: 'Exploration', label: 'Explorations', note: 'Concepts, labelled as such' },
]

type WorkClientProps = {
  projects: Project[]
}

/** Newest first; undated entries (the capability page) sink to the bottom. */
function byYearDesc(a: Project, b: Project) {
  return (Number(b.year) || 0) - (Number(a.year) || 0)
}

/**
 * Work index — an editorial record, not a gallery. Each case is a hairline
 * row led by its year, then title, project type, and delivery status, so the
 * list can be triaged without opening anything. Bands replace filters: with
 * this few cases, showing all of them under labelled rules beats hiding most
 * of them behind a control. On fine-pointer devices a cover preview trails
 * the cursor; touch devices get inline thumbnails instead.
 */
export default function WorkClient({ projects }: WorkClientProps) {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)
  const previewRef = useRef<HTMLDivElement | null>(null)
  const moveX = useRef<((v: number) => void) | null>(null)
  const moveY = useRef<((v: number) => void) | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const bands = useMemo(
    () =>
      BANDS.map((band) => ({
        ...band,
        items: projects
          .filter((project) => project.portfolioGroup === band.key)
          .sort(byYearDesc),
      })).filter((band) => band.items.length > 0),
    [projects],
  )

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
    <div ref={listRef} className="relative">
      {bands.map((band) => (
        <section key={band.key} aria-label={band.label} className="mb-16 lg:mb-24">
          {/* Band rule — a hairline label, not a header */}
          <div className="flex items-baseline justify-between gap-6 border-b border-foreground/25 pb-4">
            <h2 className="font-mono text-[12px] uppercase tracking-[0.3em] text-foreground">
              {band.label}
            </h2>
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-muted">
              <span className="hidden sm:inline">{band.note} · </span>
              {band.items.length}
            </p>
          </div>

          <ul>
            {band.items.map((project) => (
              <li key={project.slug} className="border-b border-stroke">
                <Link
                  href={`/work/${project.slug}`}
                  onPointerEnter={() => setPreviewSrc(project.coverImage ?? null)}
                  onPointerLeave={() => setPreviewSrc(null)}
                  className="group grid grid-cols-12 items-baseline gap-x-3 gap-y-3 py-7 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:py-9 lg:gap-x-8"
                >
                  {/* Year — the one true ordinal this list has */}
                  <span className="col-span-3 font-mono text-[12px] uppercase tracking-[0.25em] text-muted transition-colors group-hover:text-accent sm:col-span-1">
                    {project.year || '—'}
                  </span>

                  <h3 className="display-tight col-span-9 text-2xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:col-span-5 sm:text-3xl lg:text-4xl">
                    {project.title.split(' | ')[0].split(' — ')[0]}
                  </h3>

                  <div className="col-span-8 col-start-4 flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-[12px] uppercase tracking-[0.18em] text-muted sm:col-span-5 sm:col-start-7 sm:grid sm:grid-cols-9 sm:gap-x-4 sm:text-right">
                    <span className="sm:col-span-3">
                      {project.projectType || project.domain}
                    </span>
                    <span className="sm:col-span-6 transition-colors group-hover:text-foreground">
                      {project.delivery ?? project.discipline}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="col-span-1 self-center text-right text-lg text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
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
        </section>
      ))}

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
  )
}
