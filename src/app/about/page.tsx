import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'
import ParallaxY from '@/components/v3/ParallaxY'
import ArrowLink from '@/components/ui/ArrowLink'
import { COMPANIES, LINKEDIN_PROFILE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Milos Dostanic is a Senior Product Designer and Product Builder with 12+ years across design and 10+ years in digital products.',
  alternates: { canonical: '/about' },
}

const PRINCIPLES = [
  {
    number: '01',
    title: 'Structure before polish',
    body: 'I start with the problem, information architecture, flows, roles, and states. Visual craft strengthens that structure instead of replacing it.',
  },
  {
    number: '02',
    title: 'Constraints belong in the work',
    body: 'Business goals, technical limits, existing systems, and timeline pressure shape the product decision from the beginning.',
  },
  {
    number: '03',
    title: 'Delivery includes implementation',
    body: 'I stay close to engineering, review working builds, and check the states and details that are easiest to lose after handoff.',
  },
  {
    number: '04',
    title: 'Make the team stronger',
    body: 'Clear documentation, reusable patterns, direct feedback, and mentoring help the team make better decisions after my part is done.',
  },
]

/**
 * About — V3.1. Statement masthead (no shared PageHeader), then three
 * chapters with sticky mono labels on the left: Story, Experience
 * (companies only), Principles. Ghost "12+" numeral drifts behind the
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
              12+
            </span>
          </ParallaxY>

          <div className="relative flex flex-col justify-end pb-10 pt-20 sm:pt-28 lg:pb-14">
            <h1 className="display-mega max-w-[12ch] text-[clamp(44px,8.5vw,136px)] font-semibold uppercase">
              <span className="line-mask">
                <span
                  className="line-rise block"
                  style={{ animationDelay: '80ms' }}
                >
                  Designing systems.
                </span>
              </span>
              <span className="line-mask">
                <span
                  className="line-rise block"
                  style={{ animationDelay: '200ms' }}
                >
                  <span className="text-outline">Building products.</span>
                </span>
              </span>
            </h1>

            <div
              className="mt-10 flex flex-col gap-6 border-t border-stroke pt-6 animate-fade-in-up lg:flex-row lg:items-start lg:justify-between"
              style={{ animationDelay: '420ms' }}
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted">
                12+ years across design · 10+ years in digital products
              </p>
              <p className="max-w-[52ch] text-[15px] leading-[1.7] text-muted sm:text-base">
                I help teams turn complex product requirements into clear UX,
                scalable systems, and implementation-ready products. I work
                remotely from Serbia in CET.
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
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent lg:sticky lg:top-24">
                  01 · Story
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10 lg:col-span-9 lg:grid-cols-9">
                <div className="lg:col-span-6">
                <p className="display-tight max-w-4xl text-2xl font-medium leading-[1.25] text-foreground sm:text-3xl lg:text-4xl">
                  From communication design to complex product systems,
                  <span className="text-muted">
                    {' '}
                    the progression has always moved closer to how products work.
                  </span>
                </p>
                <div className="mt-10 grid max-w-4xl grid-cols-1 gap-8 text-[15px] leading-[1.75] text-muted sm:grid-cols-2 lg:text-base">
                  <p>
                    I began in graphic and communication design, then moved into
                    web and digital products. Work on enterprise systems made
                    information architecture, states, and team collaboration as
                    important as visual craft.
                  </p>
                  <p>
                    Today I work across product strategy, UX, interface systems,
                    functional prototypes, and implementation review. I am also
                    building WorkLight to test Product Builder and AI decisions
                    in working software.
                  </p>
                </div>
                </div>
                <figure className="lg:col-span-3">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <Image
                      src="https://avatars.githubusercontent.com/u/114145786?v=4"
                      alt="Milos Dostanic"
                      fill
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">Milos Dostanic · Serbia / CET</figcaption>
                </figure>
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
                  <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
                    02 · Experience
                  </p>
                  <p className="mt-6 max-w-xs text-sm leading-[1.75] text-muted">
                    Companies and roles. Client projects from these chapters
                    live under Work.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 lg:flex-col lg:items-start">
                    <Link
                      href="/resume"
                      data-analytics-event="resume_action"
                      className="group inline-flex h-11 items-center gap-3 border border-foreground px-5 font-mono text-[12px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-inverse-foreground"
                    >
                      View résumé
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                    <ArrowLink
                      href={LINKEDIN_PROFILE_URL}
                      className="text-foreground hover:text-accent"
                    >
                      LinkedIn profile
                    </ArrowLink>
                  </div>
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
                      <p className="font-mono text-[12px] uppercase tracking-[0.23em] text-muted">
                        {row.period}
                      </p>
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className="display-tight text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {row.company}
                      </h3>
                      <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.23em] text-accent">
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
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent lg:sticky lg:top-24">
                  03 · Principles
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
