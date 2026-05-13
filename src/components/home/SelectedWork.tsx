import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/lib/data'
import { getProjectCoverPlaceholderBackground } from '@/lib/projectCoverPlaceholder'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'

/**
 * "Best Cases" section in the spirit of atomic.black:
 *  - Big editorial section header on the left, view-all link on the right.
 *  - Two-column staggered grid of project tiles. The left column is offset down
 *    to mimic atomic's asymmetric layout. On mobile, the offset collapses to a
 *    single stack.
 *  - Each tile shows a numeric mark, a year, a colour placeholder cover, tags and
 *    title, and an arrow affordance (display-only — no case-study link).
 *  - On hover: the cover scales up slightly, the title shifts to the accent
 *    colour, and a thin accent line slides across the bottom of the cover.
 */
export default function SelectedWork() {
  const cases = PROJECTS.filter((p) => p.featured).slice(0, 4)

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
              <span className="text-accent block w-fit">not the pitch.</span>
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
                <div className="block cursor-default">
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
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border border-stroke bg-surface transition-colors duration-300 group-hover:border-foreground">
                    <div
                      aria-hidden="true"
                      className="flex h-full w-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{
                        backgroundColor:
                          getProjectCoverPlaceholderBackground(project.slug),
                      }}
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/75">
                        {project.isCapability ? 'Capability' : 'Case study'}
                      </span>
                    </div>
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
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-foreground"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
