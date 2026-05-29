import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'
import { sectionEyebrowAccentClassName, sectionHeadingClassName } from '@/lib/headings'

type Row = { label: string; blurb: string }

const DEFAULT_ROWS: Row[] = [
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
]

const DEFAULTS = {
  eyebrow: 'Practice / Delivery stack',
  titleLine1: 'Design is half the job.',
  titleAccentLine: 'Shipping is the rest.',
  intro:
    'I am not a handoff-only designer. I work where product, systems, and implementation meet — so decisions survive from Figma into production.',
  link: { label: 'See how I work', href: '/expertise' },
} as const

type DeliveryStripProps = {
  eyebrow?: string
  titleLine1?: string
  titleAccentLine?: string
  intro?: string
  link?: { label: string; href: string }
  rows?: Row[]
}

export default function DeliveryStrip({
  eyebrow,
  titleLine1,
  titleAccentLine,
  intro,
  link,
  rows,
}: DeliveryStripProps = {}) {
  const activeRows = rows && rows.length > 0 ? rows : DEFAULT_ROWS
  const activeLink = link ?? DEFAULTS.link

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
            <p className={sectionEyebrowAccentClassName}>
              {eyebrow ?? DEFAULTS.eyebrow}
            </p>
            <h2 className={sectionHeadingClassName}>
              {titleLine1 ?? DEFAULTS.titleLine1}
              <br />
              <span className="text-accent">
                {titleAccentLine ?? DEFAULTS.titleAccentLine}
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-[1.65] text-muted lg:text-lg">
              {intro ?? DEFAULTS.intro}
            </p>
            <ArrowLink
              href={activeLink.href}
              className="mt-8 inline-flex text-foreground hover:text-accent"
            >
              {activeLink.label}
            </ArrowLink>
          </div>

          <ul className="space-y-0 lg:col-span-6 lg:col-start-7">
            {activeRows.map((row) => (
              <li
                key={row.label}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[minmax(0,140px)_1fr] sm:gap-8 sm:py-7"
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
