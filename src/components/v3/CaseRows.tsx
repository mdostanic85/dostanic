import Link from 'next/link'
import { FLAGSHIP_PROJECTS, NDA_PRACTICE_NOTE } from '@/lib/data'
import Reveal from './Reveal'
import ParallaxY from './ParallaxY'
import ProjectSignalCover from '@/components/work/ProjectSignalCover'

/**
 * Selected work — full-width editorial rows. Each case is a 12-col band:
 * oversized index numeral, parallax image window, and a meta column with
 * title, facts, and the open-case affordance. Direction alternates per
 * row. Sharp frames, hairline separators, no cards.
 */
export default function CaseRows() {
  const cases = FLAGSHIP_PROJECTS

  return (
    <section id="selected-work" aria-label="Selected work" className="relative">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section head */}
        <Reveal>
          <div className="max-w-[34ch] pb-20 pt-24 sm:pb-28 sm:pt-32">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
              01 · Selected work
            </p>
            <h2 className="display-tight mt-6 text-4xl font-medium text-foreground sm:text-5xl lg:text-6xl">
              Complex problems, important decisions, shipped outcomes.
            </h2>
            {/* Accounts for the client work that cannot appear here — the
                question a senior reader asks at exactly this point. */}
            <p className="mt-8 text-[15px] leading-[1.75] text-muted sm:text-base">
              Three difficult products, and what I decided in each.{' '}
              {NDA_PRACTICE_NOTE}
            </p>
          </div>
        </Reveal>

        {/* Rows */}
        <div className="flex flex-col gap-28 pb-32 sm:gap-36 lg:gap-44 lg:pb-44">
          {cases.map((project, idx) => {
            const flip = idx % 2 === 1
            const num = String(idx + 1).padStart(2, '0')
            return (
              <Reveal key={project.slug}>
                <article className="group relative grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
                  {/* Ghost index numeral — drifts slower than the page */}
                  <ParallaxY
                    drift={110}
                    className={[
                      'pointer-events-none absolute -top-14 select-none sm:-top-20',
                      flip ? 'right-0' : 'left-0',
                    ].join(' ')}
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[120px] font-light leading-none tracking-tighter text-foreground/[0.07] sm:text-[180px]"
                    >
                      {num}
                    </span>
                  </ParallaxY>

                  {/* Image window */}
                  <div
                    className={[
                      'relative lg:col-span-7',
                      flip ? 'lg:order-2 lg:col-start-6' : 'lg:col-start-1',
                    ].join(' ')}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="block"
                    >
                      <ProjectSignalCover project={project} />
                    </Link>
                  </div>

                  {/* Meta column */}
                  <div
                    className={[
                      'flex flex-col lg:col-span-4 lg:pt-10',
                      flip
                        ? 'lg:order-1 lg:col-start-1'
                        : 'lg:col-start-9',
                    ].join(' ')}
                  >
                    {/* Level 3 — metadata stays quiet. Delivery status is
                        evidence, so it is kept, but never in accent. */}
                    <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted">
                      {num} / {project.projectType || project.domain} · {project.year || 'Current'}
                      {project.delivery ? (
                        <>
                          <span aria-hidden="true" className="mx-2 text-muted/50">·</span>
                          <span className="normal-case tracking-[0.12em]">
                            {project.delivery}
                          </span>
                        </>
                      ) : null}
                    </p>
                    <h3 className="display-tight mt-5 text-2xl font-medium text-foreground sm:text-3xl">
                      <Link
                        href={`/work/${project.slug}`}
                        className="transition-colors duration-300 hover:text-accent focus-visible:outline-none"
                      >
                      {project.title.split(' | ')[0]}
                      </Link>
                    </h3>

                    {/* Problem → ownership → the one decision. Three beats, in
                        that order, so the card argues instead of describing. */}
                    <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-foreground/85">
                      {project.problem ?? project.description}
                    </p>

                    {project.owned ? (
                      <div className="mt-6 max-w-md">
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                          I owned
                        </p>
                        <p className="mt-2 text-sm leading-[1.7] text-muted">
                          {project.owned}
                        </p>
                      </div>
                    ) : null}

                    {project.decision ? (
                      <div className="mt-6 max-w-md border-l border-accent/40 pl-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                          Key decision
                        </p>
                        <p className="mt-2 text-sm leading-[1.7] text-muted">
                          {project.decision}
                        </p>
                      </div>
                    ) : null}

                    <Link
                      href={`/work/${project.slug}`}
                      className="group/link mt-8 inline-flex w-fit items-center gap-3 border-b border-stroke pb-2 font-mono text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Open case
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
