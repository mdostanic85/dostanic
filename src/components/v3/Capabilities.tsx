import Link from 'next/link'
import { EXPERTISE_TILES } from '@/lib/data'
import Reveal from './Reveal'
import ChapterReveal from './ChapterReveal'

/**
 * Capabilities — the mid-page ink slab. `.chapter-dark` remaps the
 * standard tokens, so this band reads as a cinematic dark chapter inside
 * the icy body. Six numbered disciplines in a hairline grid.
 */
export default function Capabilities() {
  return (
    <ChapterReveal>
      <section
        aria-label="Capabilities"
        className="chapter-dark grain bg-background text-foreground"
      >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 pb-16 lg:pb-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                02 — Capabilities
              </p>
              <h2 className="display-tight mt-6 max-w-[16ch] text-4xl font-medium sm:text-5xl lg:text-6xl">
                What I bring
                <br />
                <span className="text-outline-fg font-semibold uppercase">
                  to the table.
                </span>
              </h2>
            </div>
            <Link
              href="/expertise"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
            >
              Full expertise
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal staggerSelector="[data-reveal-item]">
          <ul className="grid grid-cols-1 border-t border-stroke sm:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE_TILES.map((tile) => (
              <li
                key={tile.number}
                data-reveal-item
                className="group border-b border-stroke px-1 py-10 sm:px-6 sm:py-12 lg:min-h-[300px] lg:border-r lg:px-8 lg:[&:nth-child(3n)]:border-r-0"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors group-hover:text-accent">
                  / {tile.number}
                </p>
                <h3 className="display-tight mt-6 text-xl font-medium sm:text-2xl">
                  {tile.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted">
                  {tile.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      </section>
    </ChapterReveal>
  )
}
