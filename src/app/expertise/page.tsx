import type { Metadata } from 'next'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'
import ExpertiseAccordion, {
  type ExpertiseArea,
} from '@/components/v3/ExpertiseAccordion'

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Focused expertise across complex product UX, design systems, product delivery, and Product Builder work with AI.',
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
    id: 'product-builder-ai',
    number: '04',
    title: 'Product Builder & AI',
    description:
      'Functional products, Figma-to-code workflows, AI interaction models, LLM features, and architecture-aware product decisions.',
    usefulWhen: [
      'A product idea needs working behaviour, not only a click-through prototype',
      'AI features need evidence, confidence, failure, privacy, and trust decisions in the UX',
    ],
    outputs: [
      'Working prototypes or product slices built with the existing stack',
      'AI interaction flows with explicit trust and failure-state decisions',
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
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                Four areas · one operating model
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
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
