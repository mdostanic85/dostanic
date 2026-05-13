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
      className="grain relative h-[1000px] overflow-x-hidden pt-[120px]"
    >
      <Container size="wide" className="max-w-[1399px]">
        <div className="py-20">
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
            Senior Product Designer focused on SaaS platforms, scalable design systems, AI-assisted workflows, and developer-ready product delivery — bridging product thinking, UX, Figma, and code to help teams turn complex workflows into clear, buildable digital products.
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
            className="mt-[104px] animate-fade-in-up sm:mt-[108px] lg:mt-28"
            style={{ animationDelay: '560ms' }}
          >
            <WaveStripe />
          </div>
        </div>
      </Container>
    </section>
  )
}
