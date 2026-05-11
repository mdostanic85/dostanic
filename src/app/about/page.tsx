import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import FooterCTA from '@/components/home/FooterCTA'

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

const EXPERIENCE = [
  {
    role: 'Product Designer',
    company: 'Polyrific',
    period: 'Mar 2023 — Mar 2024',
    note: 'Led product design for an AI platform: flows, UI, prototyping, and design system.',
  },
  {
    role: 'Senior UI/UX Designer',
    company: 'Quantox Technology',
    period: 'Sep 2022 — Jun 2023',
    note: 'Delivered complex product UX/UI in collaboration with product and engineering teams.',
  },
  {
    role: 'Medior UI/UX Designer',
    company: 'Quantox Technology',
    period: 'Mar 2019 — Sep 2022',
    note: 'Built and improved multiple digital products across long-term client engagements.',
  },
  {
    role: 'Earlier roles',
    company: 'Fantastic Machines · Promo Advertising · The HEINEKEN Company',
    period: '2013 — 2017',
    note: 'UI and visual design across web and campaigns for brands including Heineken and Carlsberg, including Belgrade 2013 Limited Edition can design.',
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
            <span className="accent-gradient-text">hard problems.</span>
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
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                The story
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Practising
                <br />
                <span className="text-foreground">since — 2003</span>
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="display-tight text-xl font-medium leading-[1.35] text-foreground sm:text-2xl lg:text-[27px]">
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
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:mb-20">
            <div className="lg:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                How I think
              </p>
              <h2 className="display-tight text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                Four
                <br />
                principles.
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-muted lg:col-span-6 lg:col-start-7 lg:text-lg">
              Not a process diagram. The mental model behind the work — what I look at
              first, what I refuse to compromise on, and why I stay involved past the
              Figma file.
            </p>
          </div>

          <ul className="border-t border-stroke">
            {PRINCIPLES.map((p) => (
              <li
                key={p.number}
                className="group relative grid grid-cols-12 items-start gap-4 border-b border-stroke py-10 lg:py-14"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />
                <span className="col-span-2 pt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:col-span-1">
                  {p.number}
                </span>
                <h3 className="display-tight col-span-10 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent sm:col-span-5 sm:text-3xl lg:text-[36px]">
                  {p.title}
                </h3>
                <p className="col-span-12 text-base leading-[1.7] text-muted sm:col-span-6 lg:text-lg">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Experience ────────────────────────────────────────────────── */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:mb-16">
            <div className="lg:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Experience
              </p>
              <h2 className="display-tight text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                Where
                <br />
                I have shipped.
              </h2>
            </div>
          </div>

          <ul className="border-t border-stroke">
            {EXPERIENCE.map((e) => (
              <li
                key={`${e.role}-${e.company}`}
                className="grid grid-cols-1 gap-4 border-b border-stroke py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {e.period}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="display-tight text-xl font-semibold text-foreground sm:text-2xl">
                    {e.role}
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
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
