import Link from 'next/link'
import { HOME_NOTE } from '@/lib/data'
import Reveal from '@/components/v3/Reveal'

/**
 * Home chapter 05 — the short human note.
 *
 * Editorial, not a card: an asymmetric two-column measure with a lead line
 * pulled large. This is the only place on the homepage that speaks in the first
 * person about the past, and it stays deliberately short — the full story is on
 * About, and repeating the CV here would undo the pacing.
 */
export default function HomeNote() {
  return (
    <section aria-labelledby="note-title" className="relative">
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-28 sm:px-8 lg:px-12 lg:pb-40">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
                05 · A short note
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2
                id="note-title"
                className="display-tight max-w-[24ch] text-2xl font-medium leading-[1.25] text-foreground sm:text-3xl lg:text-4xl"
              >
                {HOME_NOTE.lead}
              </h2>

              <div className="mt-8 grid max-w-3xl grid-cols-1 gap-7 text-[17px] leading-[1.75] text-muted sm:grid-cols-2 lg:text-[18px]">
                {HOME_NOTE.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <Link
                href="/about"
                className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-stroke pb-2 font-mono text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                More about how I got here
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
