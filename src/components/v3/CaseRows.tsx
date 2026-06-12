import Link from 'next/link'
import { PROJECTS } from '@/lib/data'
import Reveal from './Reveal'
import ParallaxImage from './ParallaxImage'
import ParallaxY from './ParallaxY'

/**
 * Selected work — full-width editorial rows. Each case is a 12-col band:
 * oversized index numeral, parallax image window, and a meta column with
 * title, facts, and the open-case affordance. Direction alternates per
 * row. Sharp frames, hairline separators, no cards.
 */
export default function CaseRows() {
  const cases = PROJECTS.filter((p) => p.featured && p.coverImage).slice(0, 4)

  return (
    <section id="work" aria-label="Selected work" className="relative">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section head */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 pb-20 pt-24 sm:pb-28 sm:pt-32">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                01 — Selected work
              </p>
              <h2 className="display-tight mt-6 text-4xl font-medium text-foreground sm:text-5xl lg:text-6xl">
                Case <span className="accent-gradient-text">studies.</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
            >
              Full index
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
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
                      <ParallaxImage
                        src={project.coverImage as string}
                        alt={`${project.title} — cover`}
                        aspectClassName="aspect-[16/10]"
                        className="transition-colors duration-500 group-hover:border-foreground/30"
                      />
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
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                      {num} / {project.domain} · {project.year || '—'}
                    </p>
                    <h3 className="display-tight mt-5 text-2xl font-medium text-foreground sm:text-3xl">
                      <Link
                        href={`/work/${project.slug}`}
                        className="transition-colors duration-300 hover:text-accent focus-visible:outline-none"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-4 max-w-md text-sm leading-[1.75] text-muted">
                      {project.description}
                    </p>
                    <Link
                      href={`/work/${project.slug}`}
                      className="group/link mt-8 inline-flex w-fit items-center gap-3 border-b border-stroke pb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
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
