import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'

const STACK = [
  {
    label: 'GitHub',
    blurb: 'PRs, diffs, and reviews — I speak the same workflow as engineering.',
  },
  {
    label: 'Vercel',
    blurb: 'Previews and deploys — I validate UI against real builds, not static mocks.',
  },
  {
    label: 'AI workflows',
    blurb: 'Cursor, agents, and repo-aware tooling — faster exploration with senior judgment.',
  },
  {
    label: 'Figma MCP',
    blurb: 'Design context pulled into the IDE — tighter design–system and handoff loops.',
  },
] as const

/**
 * Compact home-only strip: positions you as an all-rounder (design + delivery
 * stack) without a long essay. Scannable rows + optional link to Expertise.
 */
export default function DeliveryStrip() {
  return (
    <Section
      id="how-i-ship"
      padding="md"
      className="bg-surface/30"
      revealDelayMs={80}
    >
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Practice / Delivery stack
            </p>
            <h2 className="display-tight mt-5 text-3xl font-semibold leading-[1.12] text-foreground sm:text-4xl lg:text-5xl">
              Design is half the job.
              <br />
              <span className="accent-gradient-text">Shipping is the rest.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-[1.65] text-muted lg:text-lg">
              I am not a handoff-only designer. I work where product, systems, and
              implementation meet — so decisions survive from Figma into production.
            </p>
            <ArrowLink
              href="/expertise"
              className="mt-8 inline-flex text-foreground hover:text-accent"
            >
              See how I work
            </ArrowLink>
          </div>

          <ul className="space-y-0 border-t border-stroke lg:col-span-6 lg:col-start-7">
            {STACK.map((row) => (
              <li
                key={row.label}
                className="grid grid-cols-1 gap-2 border-b border-stroke py-6 sm:grid-cols-[minmax(0,140px)_1fr] sm:gap-8 sm:py-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
                  {row.label}
                </p>
                <p className="text-sm leading-[1.6] text-muted lg:text-base">{row.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
