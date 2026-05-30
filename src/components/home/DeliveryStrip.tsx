import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Marquee from '@/components/ui/Marquee'
import {
  sectionHeadingClassName,
  preventHeadingOrphan,
} from '@/lib/headings'

type Row = { label: string; blurb?: string }

/** Tools + delivery signals tech teams look for in a senior product designer. */
const DEFAULT_STACK = [
  'GitHub',
  'Vercel',
  'Cursor',
  'Figma',
  'Figma MCP',
  'Design systems',
  'Design tokens',
  'Storybook',
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Linear',
  'Notion',
  'Sanity CMS',
  'B2B SaaS',
  'Enterprise UX',
  'Internal tools',
  'Developer handoff',
  'PR reviews',
  'Preview deploys',
  'CI/CD',
  'AI workflows',
  'Claude',
  'Component specs',
  'Figma variables',
  'Code Connect',
  'Prototyping',
  'User research',
  'Accessibility',
  'WCAG 2.2',
  'Data-heavy UI',
  'Admin tools',
  'SaaS UX',
  'Playwright',
] as const

const DEFAULTS = {
  titleLine1: 'Design is half the job.',
  titleAccentLine: 'Shipping is the rest.',
  intro:
    'I work where design, systems, and code meet — not at the handoff line.',
} as const

type DeliveryStripProps = {
  titleLine1?: string
  titleAccentLine?: string
  intro?: string
  rows?: Row[]
}

function mergeStackLabels(rows?: Row[]): string[] {
  const merged = [...DEFAULT_STACK]
  const seen = new Set(merged.map((label) => label.toLowerCase()))

  for (const row of rows ?? []) {
    const label = row.label.trim()
    if (!label) continue
    const key = label.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    merged.push(label)
  }

  return merged
}

/** Repeat labels so one marquee copy always spans wide viewports (Marquee duplicates once more). */
function buildMarqueeSequence(labels: string[]): string[] {
  const targetCount = Math.max(labels.length * 2, 36)
  const repeats = Math.ceil(targetCount / labels.length)
  return Array.from({ length: repeats }, () => labels).flat()
}

export default function DeliveryStrip({
  titleLine1,
  titleAccentLine,
  intro,
  rows,
}: DeliveryStripProps = {}) {
  const marqueeItems = buildMarqueeSequence(mergeStackLabels(rows))

  return (
    <Section
      id="how-i-ship"
      fullScreen
      className="!justify-between bg-surface/30"
      revealDelayMs={80}
    >
      <Container size="wide" className="w-full">
        <h2 className={sectionHeadingClassName}>
          <span className="block">
            {preventHeadingOrphan(titleLine1 ?? DEFAULTS.titleLine1)}
          </span>
          <span className="text-accent block">
            {preventHeadingOrphan(titleAccentLine ?? DEFAULTS.titleAccentLine)}
          </span>
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-[1.7] text-muted lg:mt-10">
          {intro ?? DEFAULTS.intro}
        </p>
      </Container>

      <div className="w-full border-t border-stroke pt-10 sm:pt-12 lg:pt-14">
        <Marquee
          speed="slow"
          label="Delivery stack and tools"
          className="py-2 sm:py-3"
        >
          {marqueeItems.map((label, idx) => (
            <span
              key={`${label}-${idx}`}
              className="mx-2 flex shrink-0 items-center sm:mx-3"
            >
              <span className="whitespace-nowrap rounded-full border border-stroke bg-surface/60 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground sm:px-6 sm:py-3 sm:text-xs">
                {label}
              </span>
              <span aria-hidden="true" className="ml-4 font-mono text-muted sm:ml-5">
                ·
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </Section>
  )
}
