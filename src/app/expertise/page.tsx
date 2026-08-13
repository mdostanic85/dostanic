import type { Metadata } from 'next'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'
import ExpertiseAccordion, {
  type ExpertiseArea,
} from '@/components/v3/ExpertiseAccordion'

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Focused expertise across complex product UX, design systems and token architecture, product delivery, and Product Builder work with AI.',
  alternates: { canonical: '/expertise' },
}

const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: 'product-ux-ui',
    number: '01',
    title: 'Complex Product UX',
    description:
      'B2B and enterprise workflows, information architecture, dense tables, multi-role products, permissions, forms, and edge cases.',
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
      'Atomic composition — atoms, molecules, organisms — bound to a three-tier token architecture, with Figma variables kept in parity with the CSS that ships.',
    usefulWhen: [
      'Design and code are drifting and teams keep rebuilding similar patterns',
      'A theme, rebrand, or dark mode would currently mean editing every component',
      'The library has no contribution rule, so nobody knows what belongs in it',
    ],
    outputs: [
      'Primitive, semantic, and component token tiers, with Figma variables mapped name for name to CSS custom properties',
      'Component contracts: variants, states, and responsive rules an engineer can implement without asking',
      'Contribution, versioning, and deprecation rules written before the library needs them',
    ],
  },
  {
    id: 'product-delivery',
    number: '03',
    title: 'Product Delivery',
    description:
      'Prototyping, developer handoff, implementation review, and close collaboration with engineering until the working product keeps the design intent.',
    usefulWhen: [
      'The team needs to test behaviour before committing engineering time',
      'Shipped UI keeps drifting from the intended interaction and system rules',
    ],
    outputs: [
      'Functional prototypes, detailed states, and implementation-ready handoff',
      'Design QA feedback tied to specific behaviour and reusable patterns',
    ],
  },
  {
    id: 'prototype-to-implementation',
    number: '04',
    title: 'Prototype to implementation',
    description:
      'Working product slices instead of click-throughs, architecture-aware product decisions, and enough code to close the gap between a design and what ships.',
    usefulWhen: [
      'A product idea needs working behaviour before it can be judged',
      'The team needs a decision tested against real data and real states, not a mockup',
      'A feature depends on evidence, confidence, and failure states being designed rather than assumed',
    ],
    outputs: [
      'Working prototypes or product slices built with the existing stack',
      'Interaction flows with explicit trust and failure-state decisions',
      'Implementation review against the deployed build, not against the mockup',
    ],
  },
]

/**
 * Expertise — V3.1. No shared masthead pattern: a giant outline word
 * with a counter rail, then the whole page is one oversized accordion.
 */
export default function ExpertisePage() {
  return (
    <main>
      {/* Masthead — outline word + counter rail */}
      <header className="relative overflow-hidden pt-16">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-end pb-10 pt-20 sm:pt-28 lg:pb-14">
            <h1 className="display-mega text-[clamp(56px,12vw,190px)] font-semibold uppercase">
              <span className="line-mask">
                <span className="line-rise block" style={{ animationDelay: '80ms' }}>
                  Expert
                  <span className="text-outline">ise.</span>
                </span>
              </span>
            </h1>
            <div
              className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-stroke pt-6 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
                Four areas · one operating model
              </p>
              <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
                Tap a row to expand
              </p>
            </div>
          </div>
        </div>
      </header>

      <section aria-label="Expertise areas" className="pb-28 lg:pb-40">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <ExpertiseAccordion areas={EXPERTISE_AREAS} />
          </Reveal>
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}
