import Link from 'next/link'
import { FLAGSHIP_PROJECTS, NDA_PRACTICE_NOTE } from '@/lib/data'
import Reveal from './Reveal'
import ProjectSignalCover from '@/components/work/ProjectSignalCover'

/**
 * Selected work — three case cards.
 *
 * The visual leads and the words follow it: a large key visual, the problem in
 * one line, then the two or three decisions worth scanning. The full argument
 * lives on the case study, so this section is a way in rather than a summary.
 *
 * The whole card is one link. The heading carries the anchor and everything
 * else is covered by a stretched overlay, so there is a single tab stop per
 * card and no nested-interactive markup.
 */
export default function CaseRows() {
  const cases = FLAGSHIP_PROJECTS

  return (
    <section id="selected-work" aria-label="Selected work" className="relative">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section head */}
        <Reveal>
          <div className="pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pt-44">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
              01 · Selected work
            </p>
            {/* Each element gets its own measure. A shared `ch` width on the
                wrapper is sized by the wrapper's own font, which strangles a
                display-size heading. */}
            <h2 className="display-tight mt-6 max-w-[17ch] text-4xl font-medium text-foreground sm:text-5xl lg:text-6xl">
              Complex problems, important decisions, shipped outcomes.
            </h2>
            <p className="mt-8 max-w-[56ch] text-[17px] leading-[1.75] text-muted sm:text-[18px]">
              Three difficult products, and what I decided in each.{' '}
              {NDA_PRACTICE_NOTE}
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal staggerSelector="[data-reveal-item]">
          <ul className="grid grid-cols-1 gap-6 pb-28 sm:gap-8 lg:grid-cols-3 lg:pb-40">
            {cases.map((project, idx) => {
              const num = String(idx + 1).padStart(2, '0')
              const name = project.title.split(' | ')[0]
              const highlights = project.cardHighlights ?? []

              return (
                <li key={project.slug} data-reveal-item>
                  <article
                    className="group relative flex h-full flex-col border border-stroke bg-surface/40 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_var(--color-accent),0_24px_60px_-24px_rgba(77,107,255,0.55)] focus-within:border-accent/50 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {/* Key visual — the covers carry their own frame. */}
                    <div className="relative overflow-hidden">
                      <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none">
                        <ProjectSignalCover project={project} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      {/* Label — what kind of work, and when. */}
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                        <span className="text-accent">{num}</span>
                        <span aria-hidden="true" className="mx-2 text-muted/40">
                          /
                        </span>
                        {project.projectType || project.domain}
                        <span aria-hidden="true" className="mx-2 text-muted/40">
                          ·
                        </span>
                        {project.year || 'Current'}
                      </p>

                      <h3 className="display-tight mt-4 text-2xl font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[28px]">
                        <Link
                          href={`/work/${project.slug}`}
                          className="focus-visible:outline-none"
                        >
                          {name}
                          {/* Stretches the heading's link over the whole card. */}
                          <span className="absolute inset-0" aria-hidden="true" />
                        </Link>
                      </h3>

                      {/* The problem, in one line. */}
                      <p className="mt-3 text-[17px] leading-[1.6] text-foreground/85">
                        {project.cardTagline ?? project.problem}
                      </p>

                      {highlights.length > 0 ? (
                        <ul className="mt-6 flex flex-col gap-3 border-t border-stroke pt-6">
                          {highlights.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[15px] leading-[1.6] text-muted"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[9px] h-px w-3 shrink-0 bg-accent/70"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <p className="mt-auto inline-flex items-center gap-3 pt-8 font-mono text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors duration-300 group-hover:text-accent">
                        Open case
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                        >
                          →
                        </span>
                      </p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
