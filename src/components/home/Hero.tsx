import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import WaveStripe from '@/components/ui/WaveStripe'
import { cn } from '@/lib/utils'
import { heroHeadingClassName, heroIntroClassName } from '@/lib/headings'

/**
 * Home hero — stacked headline, intro, CTAs, and WaveStripe; vertical rhythm
 * is tuned so headline + wave read above the fold on typical laptop viewports.
 */
export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grain relative overflow-x-hidden pt-16"
    >
      <Container size="wide">
        <div className="py-8 sm:py-10 lg:py-12">
          <h1
            className={cn(heroHeadingClassName, 'hero-title-tight')}
            style={{
              animationDelay: '120ms',
            }}
          >
            <span className="block">Turning Complexity</span>
            <span className="block">Into Buildable</span>
            <span className="accent-gradient-text block w-fit">
              Product Design
            </span>
          </h1>

          <p
            className={heroIntroClassName}
            style={{ animationDelay: '280ms' }}
          >
            Senior Product Designer focused on SaaS platforms, scalable design systems, and developer-ready delivery — bridging product thinking, UX, Figma, and code so complex workflows become clear, buildable products.
          </p>

          <div
            className="mt-6 flex flex-wrap items-center gap-3 animate-fade-in-up sm:gap-4"
            style={{ animationDelay: '420ms' }}
          >
            <Button variant="primary" href="/work">
              View Work
            </Button>
            <Button variant="ghost" href="mailto:milos@dostanic.net">
              Get in Touch
            </Button>
          </div>

          <div
            className="mt-6 animate-fade-in-up sm:mt-7 lg:mt-8"
            style={{ animationDelay: '560ms' }}
          >
            <WaveStripe />
          </div>
        </div>
      </Container>
    </section>
  )
}
