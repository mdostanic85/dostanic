import type { Metadata } from 'next'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'
import WorkClient from './WorkClient'
import { PROJECTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work — Milos Dostanic',
  description:
    'Selected product design and systems work — enterprise SaaS, healthcare, analytics, fintech, and agency engagements — from a senior designer who ships.',
}

/**
 * Work — V3.1. A raw index, not a gallery: giant INDEX masthead with a
 * project counter, filters as a mono rail, then the hairline table with
 * cursor-trailing previews.
 */
export default function WorkPage() {
  const total = PROJECTS.length
  const years = '2021 — 2026'

  return (
    <main>
      {/* Masthead — INDEX + counter */}
      <header className="relative overflow-hidden pt-16">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-end pb-10 pt-20 sm:pt-28 lg:pb-14">
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
              <h1 className="display-mega text-[clamp(56px,12vw,190px)] font-semibold uppercase">
                <span className="line-mask">
                  <span
                    className="line-rise block"
                    style={{ animationDelay: '80ms' }}
                  >
                    Ind<span className="text-outline">ex.</span>
                  </span>
                </span>
              </h1>
              <p
                className="mb-4 font-mono text-[12px] uppercase tracking-[0.25em] text-accent animate-fade-in-up sm:mb-8"
                style={{ animationDelay: '300ms' }}
              >
                ({String(total).padStart(2, '0')})
              </p>
            </div>
            <div
              className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-stroke pt-6 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                Selected work — {years}
              </p>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:block">
                NDA-covered enterprise work available on request
              </p>
            </div>
          </div>
        </div>
      </header>

      <section aria-label="Project index" className="pb-28 lg:pb-40">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <WorkClient projects={PROJECTS} />
          </Reveal>
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
