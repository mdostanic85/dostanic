import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/lib/data'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'

/**
 * "Best Cases" section in the spirit of atomic.black:
 *  - Big editorial section header on the left, view-all link on the right.
 *  - Two-column staggered grid of image-driven project tiles. The left column
 *    is offset down to mimic atomic's asymmetric "Top Phone / Back Phone"
 *    layout. On mobile, the offset collapses to a single stack.
 *  - Each tile shows a numeric mark, a year, the cover image, the tags and
 *    title, and an arrow link affordance.
 *  - On hover: the cover image scales up slightly, the title shifts to the
 *    accent color, and a thin accent line slides across the bottom of the
 *    image. Falls back gracefully without JS / on reduced-motion.
 */
export default function SelectedWork() {
  const featured = PROJECTS.filter((p) => p.featured && p.coverImage).slice(0, 4)
  // If we only have 3 image-backed cases, pad with the highest-priority no-image
  // featured ones so the grid still feels full.
  const fallback = PROJECTS.filter((p) => p.featured && !p.coverImage)
  const cases = (featured.length >= 4 ? featured : [...featured, ...fallback]).slice(0, 4)

  return (
    <Section id="work" padding="lg">
      <Container size="wide">
        <div className="mb-16 flex flex-col gap-8 sm:mb-20 sm:flex-row sm:items-end sm:justify-between lg:mb-24">
          <div>
            <p className={sectionEyebrowAccentClassName}>
              Best Cases / Selected Work
            </p>
            <h2 className={sectionHeadingClassName}>
              The work,
              <br />
              <span className="block w-fit text-muted">not the pitch.</span>
            </h2>
          </div>
          <ArrowLink
            href="/work"
            className="text-foreground hover:text-accent shrink-0 self-start sm:self-end"
          >
            View all work
          </ArrowLink>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-20 lg:gap-x-12 lg:gap-y-28">
          {cases.map((project, idx) => {
            const isOffset = idx % 2 === 1
            return (
              <article
                key={project.slug}
                className={[
                  'group relative',
                  isOffset ? 'sm:translate-y-20 lg:translate-y-28' : '',
                ].join(' ')}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block focus-visible:outline-none"
                >
                  {/* Top mark row */}
                  <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <span>
                      / {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="flex items-center gap-3">
                      <span>{project.domain}</span>
                      <span aria-hidden="true" className="h-px w-6 bg-stroke" />
                      <span>{project.year || 'Capability'}</span>
                    </span>
                  </div>

                  {/* Image block */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stroke bg-surface transition-colors duration-300 group-hover:border-foreground/40">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} cover`}
                        fill
                        sizes="(min-width: 1024px) 44vw, (min-width: 640px) 48vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-full w-full items-center justify-center text-foreground/40"
                      >
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">
                          Case Study
                        </span>
                      </div>
                    )}
                    {/* Accent line slide-in */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                    />
                  </div>

                  {/* Caption */}
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <h3
                        className={cn(
                          sectionSubheadingClassName,
                          'transition-colors duration-200 group-hover:text-accent'
                        )}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-[1.7] text-muted">
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
          })}
        </div>
      </Container>
    </Section>
  )
}
