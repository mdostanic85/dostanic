import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import WaveStripe from '@/components/ui/WaveStripe'
import { cn } from '@/lib/utils'
import { heroHeadingClassName, heroIntroClassName } from '@/lib/headings'

const DEFAULTS = {
  titleLines: ['Turning Complexity', 'Into Buildable'],
  titleAccentLine: 'Product Design',
  intro:
    'Senior Product Designer focused on SaaS platforms, scalable design systems, AI-assisted workflows, and developer-ready product delivery — bridging product thinking, UX, Figma, and code to help teams turn complex workflows into clear, buildable digital products.',
  primaryCta: { label: 'View Work', href: '/work' },
  secondaryCta: { label: 'Get in Touch', href: 'mailto:milos@dostanic.net' },
} as const

type HeroProps = {
  titleLines?: string[]
  titleAccentLine?: string
  intro?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({
  titleLines,
  titleAccentLine,
  intro,
  primaryCta,
  secondaryCta,
}: HeroProps = {}) {
  const lines = titleLines && titleLines.length > 0 ? titleLines : DEFAULTS.titleLines
  const accentLine = titleAccentLine ?? DEFAULTS.titleAccentLine
  const introCopy = intro ?? DEFAULTS.intro
  const primary = primaryCta ?? DEFAULTS.primaryCta
  const secondary = secondaryCta ?? DEFAULTS.secondaryCta

  return (
    <section
      aria-label="Introduction"
      className="grain relative h-[300px] overflow-x-hidden pt-20 lg:h-[1000px] lg:pt-[120px]"
    >
      <Container size="wide" className="max-w-[1399px]">
        <div className="pt-[calc(5rem*2/3)] pb-20 lg:py-20">
          <h1
            className={cn(heroHeadingClassName, 'hero-title-tight')}
            style={{ animationDelay: '120ms' }}
          >
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="accent-gradient-text block w-fit">{accentLine}</span>
          </h1>

          <p className={heroIntroClassName} style={{ animationDelay: '280ms' }}>
            {introCopy}
          </p>

          <div
            className="mt-6 flex flex-wrap items-center gap-3 animate-fade-in-up sm:gap-4"
            style={{ animationDelay: '420ms' }}
          >
            <Button variant="primary" href={primary.href}>
              {primary.label}
            </Button>
            <Button variant="ghost" href={secondary.href}>
              {secondary.label}
            </Button>
          </div>

          <div
            className="mt-[70px] animate-fade-in-up sm:mt-[108px] lg:mt-28"
            style={{ animationDelay: '560ms' }}
          >
            <WaveStripe />
          </div>
        </div>
      </Container>
    </section>
  )
}
