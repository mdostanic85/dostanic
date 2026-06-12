import type { Metadata } from 'next'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'
import ExpertiseAccordion, {
  type ExpertiseArea,
} from '@/components/v3/ExpertiseAccordion'

export const metadata: Metadata = {
  title: 'Expertise — Milos Dostanic',
  description:
    'Focused expertise across complex product UX, design systems, AI-assisted workflows, and Figma-to-code delivery.',
}

const EXPERTISE_AREAS: ExpertiseArea[] = [
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
                Six disciplines — one operating model
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
