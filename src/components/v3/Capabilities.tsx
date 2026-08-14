import Link from 'next/link'
import { EXPERTISE_TILES } from '@/lib/data'
import Reveal from './Reveal'
import ChapterReveal from './ChapterReveal'

/**
 * Capabilities — the mid-page ink slab. `.chapter-dark` remaps the
 * standard tokens, so this band reads as a cinematic dark chapter inside
 * the icy body. Four numbered disciplines in a hairline grid.
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
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
                02 · What I&apos;m good at
              </p>
              <h2 className="display-tight mt-6 max-w-[16ch] text-4xl font-medium sm:text-5xl lg:text-6xl">
                Four things, done properly.
              </h2>
            </div>
            <Link
              href="/expertise"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
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
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {EXPERTISE_TILES.map((tile) => (
              <li
                key={tile.number}
                data-reveal-item
                className="group flex flex-col border border-stroke bg-surface/40 p-7 transition-[transform,border-color,background-color] duration-500 ease-out hover:-translate-y-1 hover:border-accent/50 hover:bg-surface/70 lg:min-h-[300px] lg:p-8 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* The rule grows on hover — the only motion the tile needs. */}
                <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.28em] text-muted transition-colors duration-300 group-hover:text-accent">
                  {tile.number}
                  <span
                    aria-hidden="true"
                    className="h-px w-5 bg-stroke transition-[width,background-color] duration-500 ease-out group-hover:w-10 group-hover:bg-accent motion-reduce:transition-none"
                  />
                </p>
                <h3 className="display-tight mt-6 text-xl font-medium sm:text-2xl">
                  {tile.title}
                </h3>
                <p className="mt-4 text-base leading-[1.75] text-muted">
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
