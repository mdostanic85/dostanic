import type { Metadata } from 'next'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'
import ParallaxY from '@/components/v3/ParallaxY'
import ArrowLink from '@/components/ui/ArrowLink'
import { COMPANIES, LINKEDIN_PROFILE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About — Milos Dostanic',
  description:
    'Senior Product Designer with a strong graphic design foundation, focused on complex products, scalable systems, and AI-assisted delivery.',
}

const PRINCIPLES = [
  {
    number: '01',
    title: 'Structure before visuals',
    body: 'I start with information architecture and flows, then shape interface and visual quality around that system.',
  },
  {
    number: '02',
    title: 'Constraints are inputs',
    body: 'Business goals, technical limits, and timeline pressure are part of the design problem, not exceptions.',
  },
  {
    number: '03',
    title: 'Done means shipped',
    body: 'A design is complete only when it works in production with real data, edge cases, and implementation constraints.',
  },
  {
    number: '04',
    title: 'Systems scale products',
    body: 'Design systems are operational infrastructure: tokens, components, rules, and documentation teams can use daily.',
  },
]

/**
 * About — V3.1. Statement masthead (no shared PageHeader), then three
 * chapters with sticky mono labels on the left: Story, Experience
 * (companies only), Principles. Ghost "20+" numeral drifts behind the
 * masthead on scroll.
 */
export default function AboutPage() {
  return (
    <main>
      {/* Masthead — statement + bio */}
      <header className="relative overflow-hidden pt-16">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          {/* Ghost numeral */}
          <ParallaxY
            drift={120}
            className="pointer-events-none absolute right-0 top-10 select-none sm:top-0"
          >
            <span
              aria-hidden="true"
              className="font-mono text-[34vw] font-light leading-none tracking-tighter text-foreground/[0.05] sm:text-[26vw]"
            >
              20+
            </span>
          </ParallaxY>

          <div className="relative flex flex-col justify-end pb-10 pt-20 sm:pt-28 lg:pb-14">
            <h1 className="display-mega max-w-[12ch] text-[clamp(44px,8.5vw,136px)] font-semibold uppercase">
              <span className="line-mask">
                <span
                  className="line-rise block"
                  style={{ animationDelay: '80ms' }}
                >
                  Still chasing
                </span>
              </span>
              <span className="line-mask">
                <span
                  className="line-rise block"
                  style={{ animationDelay: '200ms' }}
                >
                  <span className="text-outline">hard problems.</span>
                </span>
              </span>
            </h1>

            <div
              className="mt-10 flex flex-col gap-6 border-t border-stroke pt-6 animate-fade-in-up lg:flex-row lg:items-start lg:justify-between"
              style={{ animationDelay: '420ms' }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                20+ years of design · Serbia · remote worldwide
              </p>
              <p className="max-w-[52ch] text-[15px] leading-[1.7] text-muted sm:text-base">
                I help teams turn complex product requirements into clear UX,
                scalable systems, and implementation-ready design — with a
                craft foundation built in graphic design and brand work for
                names like Heineken and Carlsberg.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01 Story ──────────────────────────────────────────────────── */}
      <section aria-label="Story" className="pt-20 lg:pt-28">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent lg:sticky lg:top-24">
                  01 — Story
                </p>
              </div>
              <div className="lg:col-span-9">
                <p className="display-tight max-w-4xl text-2xl font-medium leading-[1.25] text-foreground sm:text-3xl lg:text-4xl">
                  From global brand campaigns to data-heavy product UX —
                  <span className="text-muted">
                    {' '}
                    the common thread is clarity under complexity.
                  </span>
                </p>
                <div className="mt-10 grid max-w-4xl grid-cols-1 gap-8 text-[15px] leading-[1.75] text-muted sm:grid-cols-2 lg:text-base">
                  <p>
                    Before product work, I spent years in graphic and visual
                    design. That craft foundation still shapes how I think
                    about hierarchy, typography, and communication inside
                    complex interfaces.
                  </p>
                  <p>
                    Today I operate between product strategy, UX, UI, design
                    systems, Figma, and code-aware delivery — across
                    healthcare, fintech, SaaS, and enterprise tools where
                    permissions, states, and edge cases shape the product.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 02 Experience — companies only ───────────────────────────── */}
      <section aria-label="Experience" className="pt-20 lg:pt-28">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    02 — Experience
                  </p>
                  <p className="mt-6 max-w-xs text-sm leading-[1.75] text-muted">
                    Companies and roles. Client projects from these chapters
                    live under Work.
                  </p>
                  <ArrowLink
                    href={LINKEDIN_PROFILE_URL}
                    className="mt-6 inline-flex text-foreground hover:text-accent"
                  >
                    LinkedIn profile
                  </ArrowLink>
                </div>
              </div>

              <ul className="lg:col-span-9">
                {COMPANIES.map((row, i) => (
                  <li
                    key={row.company}
                    className={[
                      'group grid grid-cols-1 gap-3 border-stroke py-8 lg:grid-cols-12 lg:gap-8 lg:py-10',
                      i > 0 ? 'border-t' : '',
                    ].join(' ')}
                  >
                    <div className="lg:col-span-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        {row.period}
                      </p>
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className="display-tight text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {row.company}
                      </h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                        {row.role}
                      </p>
                      <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-muted lg:text-base">
                        {row.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 03 Principles ─────────────────────────────────────────────── */}
      <section aria-label="Principles" className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal staggerSelector="[data-reveal-item]">
            <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent lg:sticky lg:top-24">
                  03 — Principles
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-9 lg:gap-y-16">
                {PRINCIPLES.map((p) => (
                  <div key={p.number} data-reveal-item className="group">
                    <p className="font-mono text-[28px] font-light leading-none text-foreground/20 transition-colors duration-300 group-hover:text-accent">
                      {p.number}
                    </p>
                    <h3 className="display-tight mt-5 text-xl font-medium text-foreground sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-[1.75] text-muted">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
