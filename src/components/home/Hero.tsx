import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import WaveStripe from '@/components/ui/WaveStripe'
import { cn } from '@/lib/utils'
import { heroHeadingClassName, heroIntroClassName } from '@/lib/headings'

const HERO_FACTS = [
  { label: 'Focus', value: 'Complex B2B software' },
  { label: 'Practice', value: 'Design systems' },
  { label: 'Delivery', value: 'Figma → production code' },
  { label: 'Base', value: 'Serbia · Remote worldwide' },
] as const

/**
 * Home hero — full-viewport cinematic opener. Meta row up top, massive
 * masked-line headline, single paragraph and two CTAs; the WaveStripe and a
 * hairline fact strip close the fold. Layout uses justify-between against
 * 100svh so the composition breathes regardless of viewport height.
 */
export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grain relative flex min-h-[100svh] flex-col overflow-x-hidden pt-16"
    >
      <Container size="wide" className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col justify-center py-14 sm:py-16">
          {/* Meta row — availability + role */}
          <div
            className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 animate-fade-in-up sm:mb-12"
            style={{ animationDelay: '80ms' }}
          >
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="pulse-host h-2 w-2" aria-hidden="true">
                <span className="pulse-ring" />
                <span className="pulse-core block h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new work
            </p>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:block">
              Senior Product Designer
            </p>
          </div>

          <h1 className={cn(heroHeadingClassName, 'hero-title-tight')}>
            <span className="line-mask">
              <span className="line-rise" style={{ animationDelay: '120ms' }}>
                Turning complexity
              </span>
            </span>
            <span className="line-mask">
              <span className="line-rise" style={{ animationDelay: '220ms' }}>
                into{' '}
                <span className="accent-gradient-text">buildable product.</span>
              </span>
            </span>
          </h1>

          <p className={heroIntroClassName} style={{ animationDelay: '420ms' }}>
            Senior Product Designer for SaaS platforms, design systems, and
            data-heavy products — bridging product thinking, UX, Figma, and
            code so complex workflows ship as clear, buildable software.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-in-up sm:mt-10 sm:gap-5"
            style={{ animationDelay: '540ms' }}
          >
            <Button variant="primary" size="lg" href="/work">
              View selected work
            </Button>
            <a
              href="mailto:milos@dostanic.net"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-muted transition-colors hover:text-foreground"
            >
              milos@dostanic.net
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-px"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Fold closer — wave + hairline fact strip */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '680ms' }}
        >
          <WaveStripe />
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-stroke py-7 sm:py-8 lg:grid-cols-4">
            {HERO_FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-[13px] font-medium tracking-[-0.01em] text-foreground sm:text-sm">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
