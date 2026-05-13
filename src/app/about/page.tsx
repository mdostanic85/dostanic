import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import FooterCTA from '@/components/home/FooterCTA'
import ArrowLink from '@/components/ui/ArrowLink'
import {
  LINKEDIN_PROFILE_URL,
  STUDIO_EMPLOYMENT,
  WORK_ENGAGEMENTS,
} from '@/lib/data'
import {
  monoIndexAccentPaddedClassName,
  monoKickerMutedClassName,
  monoMetaMutedClassName,
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionLeadClassName,
  sectionPrincipleTitleClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export const metadata: Metadata = {
  title: 'About — Milos Dostanic',
  description:
    'Award-winning Senior Product Designer with a strong graphic design foundation, focused on complex products, scalable systems, and AI-assisted delivery.',
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

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About / Background"
        title={
          <>
            20+ years of design.
            <br />
            Still getting closer to the
            <br />
            <span className="accent-gradient-text leading-[0.88]">hard problems.</span>
          </>
        }
        intro={
          <>
            I am an award-winning designer with a strong graphic design background and
            20+ years of experience. I help teams turn complex product requirements into
            clear UX, scalable systems, and implementation-ready design.
          </>
        }
        topRightLabel="Serbia · Remote"
      />

      {/* ── The story ─────────────────────────────────────────────────── */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className={sectionEyebrowAccentClassName}>
                The story
              </p>
              <p className={monoKickerMutedClassName}>
                Practising
                <br />
                <span className="text-foreground">since — 2003</span>
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className={sectionLeadClassName}>
                20+ years in design, now focused on complex products where UX, system
                quality, and implementation alignment matter more than visual polish alone.
              </p>
              <div className="mt-8 space-y-5 text-base leading-[1.7] text-muted lg:text-lg">
                <p>
                  Before product work, I spent years in graphic and visual design. That
                  craft foundation still shapes how I think about hierarchy, typography,
                  clarity, and communication inside complex interfaces.
                </p>
                <p>
                  I also worked on brand-side projects for clients such as Heineken and
                  Carlsberg, which sharpened my discipline around visual systems and
                  consistency at scale.
                </p>
                <p>
                  My work spans healthcare, fintech, SaaS, enterprise tools, and data-heavy
                  workflows where permissions, states, and edge cases shape the product.
                </p>
                <p>
                  I operate between product strategy, UX, UI, design systems, Figma, and
                  code-aware delivery so what gets designed can actually be built and maintained.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── How I think ───────────────────────────────────────────────── */}
      <Section padding="lg">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:mb-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                How I think
              </p>
              <h2 className={sectionHeadingClassName}>
                Four
                <br />
                <span className="text-accent block w-fit">principles.</span>
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-muted lg:col-span-6 lg:col-start-7 lg:text-lg">
              Not a process diagram. The mental model behind the work — what I look at
              first, what I refuse to compromise on, and why I stay involved past the
              Figma file.
            </p>
          </div>

          <ul>
            {PRINCIPLES.map((p) => (
              <li
                key={p.number}
                className="group relative grid grid-cols-12 items-start gap-x-4 gap-y-2 py-6 sm:gap-y-2 lg:py-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />
                <span className={monoIndexAccentPaddedClassName}>
                  {p.number}
                </span>
                <h3 className={sectionPrincipleTitleClassName}>
                  {titleWithAccentGradient(p.title, {
                    leadClassName: 'transition-colors duration-300 group-hover:text-accent',
                  })}
                </h3>
                <p className="col-span-12 text-base leading-[1.7] text-muted sm:col-span-6 lg:text-lg">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Where I have shipped ─────────────────────────────────────── */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:mb-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>Experience</p>
              <h2 className={sectionHeadingClassName}>
                Where
                <br />
                <span className="text-accent block w-fit">I have shipped.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-base leading-[1.7] text-muted lg:text-lg">
                Employers and studios below are listed with the dates I was there and what
                I actually owned in role — from current embedded studio work back through
                agency and earlier graphic craft. Deeper product write-ups live on{' '}
                <ArrowLink
                  href="/work"
                  className="inline-flex text-foreground hover:text-accent"
                >
                  Work
                </ArrowLink>
                ; the authoritative timeline and recommendations stay on LinkedIn.
              </p>
              <ArrowLink
                href={LINKEDIN_PROFILE_URL}
                className="mt-6 inline-flex text-foreground hover:text-accent"
              >
                Full experience on LinkedIn
              </ArrowLink>
            </div>
          </div>

          <ul className="border-t border-stroke">
            {WORK_ENGAGEMENTS.map((row) => (
              <li
                key={row.company}
                className="grid grid-cols-1 gap-4 border-b border-stroke py-8 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-10"
              >
                <div className="lg:col-span-3">
                  <p className={monoMetaMutedClassName}>{row.period}</p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className={sectionSubheadingClassName}>{row.company}</h3>
                  <p className="mt-2 text-sm font-mono uppercase tracking-[0.16em] text-accent">
                    {row.role}
                  </p>
                  <p className="mt-4 max-w-3xl text-base leading-[1.7] text-muted lg:text-lg">
                    {row.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {STUDIO_EMPLOYMENT.length > 0 ? (
            <div className="mt-16 border-t border-stroke pt-14 lg:mt-20 lg:pt-16">
              <p className={sectionEyebrowAccentClassName}>Studios & full-time roles</p>
              <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted lg:text-lg">
                The longer-running studio chapter before embedded agency and direct product
                work at the scale above.
              </p>
              <ul className="mt-10 divide-y divide-stroke">
                {STUDIO_EMPLOYMENT.map((e) => (
                  <li
                    key={`${e.role}-${e.company}-${e.period}`}
                    className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
                  >
                    <div className="lg:col-span-3">
                      <p className={monoMetaMutedClassName}>{e.period}</p>
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className={sectionSubheadingClassName}>
                        {titleWithAccentGradient(e.role)}
                      </h3>
                      <p className="mt-2 text-sm font-mono uppercase tracking-[0.16em] text-accent">
                        {e.company}
                      </p>
                      <p className="mt-4 max-w-3xl text-base leading-[1.7] text-muted lg:text-lg">
                        {e.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
