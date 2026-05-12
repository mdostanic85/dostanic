import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import FooterCTA from '@/components/home/FooterCTA'
import { cn } from '@/lib/utils'
import {
  sectionEyebrowForegroundBlockClassName,
  sectionEyebrowMutedBlockClassName,
  sectionEyebrowMonoClassName,
  sectionHeadingClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export const metadata: Metadata = {
  title: 'Expertise — Milos Dostanic',
  description:
    'Focused expertise across complex product UX, design systems, AI-assisted workflows, and Figma-to-code delivery.',
}

const EXPERTISE_AREAS = [
  {
    id: 'product-ux-ui',
    number: '01',
    title: 'Product UX/UI Design',
    description:
      'Complex SaaS, healthcare, fintech, and enterprise interfaces. I design flows, structure, and UI that stay clear under real product complexity.',
    usefulWhen: [
      'You need clear UX architecture before engineering scales the feature set',
      'The product has grown inconsistent and hard to navigate',
    ],
    outputs: [
      'IA, key user flows, and high-fidelity product UI',
      'Structured handoff with states, edge cases, and responsive behavior',
    ],
  },
  {
    id: 'design-systems',
    number: '02',
    title: 'Design Systems',
    description:
      'Practical design systems that connect tokens, components, and documentation across Figma and code.',
    usefulWhen: [
      'Design and code are drifting and teams keep rebuilding similar patterns',
      'The product is scaling but consistency and speed are dropping',
    ],
    outputs: [
      'Token architecture, variable setup, and component library structure',
      'System documentation and governance rules teams can actually use',
    ],
  },
  {
    id: 'ai-prototyping',
    number: '03',
    title: 'AI-Assisted Prototyping',
    description:
      'AI-assisted prototyping with Cursor, Claude, and Figma workflows to test complex interactions faster in realistic conditions.',
    usefulWhen: [
      'A static Figma prototype is not enough to validate behavior',
      'You need to test multiple directions quickly before engineering commit',
    ],
    outputs: [
      'Interactive code prototypes and fast UX experiments',
      'Implementation-aware concepts with clearer design-to-dev alignment',
    ],
  },
  {
    id: 'figma-to-code',
    number: '04',
    title: 'Figma-to-Code',
    description:
      'Reducing the gap between designed and shipped through PR-aware handoff, implementation review, and token/component parity checks.',
    usefulWhen: [
      'Shipped UI keeps drifting from Figma intent',
      'The team needs design quality to survive implementation',
    ],
    outputs: [
      'Clear handoff specs and implementation QA feedback',
      'Figma-to-code parity checks for tokens and components',
    ],
  },
  {
    id: 'ux-audits',
    number: '05',
    title: 'UX Audits & Redesigns',
    description:
      'Structured UX diagnosis for products that feel messy, inconsistent, or hard to scale.',
    usefulWhen: [
      'You know UX is breaking but not where to start',
      'A redesign needs a prioritized plan, not guesswork',
    ],
    outputs: [
      'Prioritized findings with impact and effort',
      'Redesign roadmap focused on the highest-leverage fixes',
    ],
  },
  {
    id: 'web-brand',
    number: '06',
    title: 'Web & Digital Experience',
    description:
      'Product-focused websites and digital experiences built for clarity, credibility, and conversion.',
    usefulWhen: [
      'Your website looks fine but does not explain the product clearly',
      'You need stronger information hierarchy and message clarity',
    ],
    outputs: [
      'Site architecture and clear content structure',
      'Page-level UI direction and implementation-ready design',
    ],
  },
]

export default function ExpertisePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Expertise / Capabilities"
        title={
          <>
            What I do.
            <br />
            And when it
            <br />
            <span className="accent-gradient-text">matters.</span>
          </>
        }
        intro={
          <>
            Focused capabilities for teams building complex products — what I do, when it
            helps, and what you get.
          </>
        }
        aside={
          <nav aria-label="Jump to expertise area" className="hidden lg:block">
            <p className={sectionEyebrowMutedBlockClassName}>
              On this page
            </p>
            <ul className="space-y-3">
              {EXPERTISE_AREAS.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    className="group flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                  >
                    <span className="text-accent/70 transition-colors group-hover:text-accent">
                      {a.number}
                    </span>
                    <span>{a.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
        topRightLabel="Six disciplines"
      />

      {/* ── Expertise areas — atomic-style large editorial rows ─────────── */}
      <Section padding="lg">
        <Container size="wide">
          <ul>
            {EXPERTISE_AREAS.map((area) => (
              <li
                key={area.id}
                id={area.id}
                className="group relative scroll-mt-24 py-12 lg:py-20"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />

                <div className="grid grid-cols-12 gap-4 lg:gap-12">
                  {/* Number + title */}
                  <div className="col-span-12 lg:col-span-5">
                    <span
                      className={cn(
                        sectionEyebrowMonoClassName,
                        'mb-5 block text-accent'
                      )}
                    >
                      / {area.number}
                    </span>
                    <h2 className={sectionHeadingClassName}>
                      {titleWithAccentGradient(area.title, {
                        leadClassName: 'transition-colors duration-300 group-hover:text-accent',
                      })}
                    </h2>
                  </div>

                  {/* Description + lists */}
                  <div className="col-span-12 lg:col-span-7">
                    <p className="text-base leading-[1.7] text-muted lg:text-lg">
                      {area.description}
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
                      <div>
                        <p className={sectionEyebrowForegroundBlockClassName}>
                          Useful when
                        </p>
                        <ul className="space-y-3">
                          {area.usefulWhen.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-[1.6] text-muted"
                            >
                              <span className="mt-[3px] shrink-0 font-mono text-accent">
                                →
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className={sectionEyebrowForegroundBlockClassName}>
                          Typical outputs
                        </p>
                        <ul className="space-y-3">
                          {area.outputs.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-[1.6] text-muted"
                            >
                              <span className="mt-[3px] shrink-0 font-mono text-accent">
                                ·
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
