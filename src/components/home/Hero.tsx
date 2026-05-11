import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import WaveStripe from '@/components/ui/WaveStripe'

/**
 * Home hero — stacked headline: lead line, gradient accent on “AI-Ready
 * Design Systems”, then the closing line. Gradient span is `w-fit` so the
 * background isn’t stretched across the full container width.
 */
export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grain relative overflow-x-hidden pt-16"
    >
      <Container size="wide">
        <div className="py-16 lg:py-28">
          <h1
            className="display-tight flex max-w-[1100px] flex-col gap-0 text-[28px] font-bold leading-[0.92] text-foreground animate-fade-in-up sm:text-[clamp(32px,4vw,56px)]"
            style={{ animationDelay: '120ms' }}
          >
            <span className="block">Senior Product Designer for</span>
            <span className="accent-gradient-text block w-fit">
              AI-Ready Design Systems
            </span>
            <span className="block">& Complex Digital Products</span>
          </h1>

          <p
            className="mt-8 max-w-[720px] text-[17px] font-normal leading-[1.55] text-muted animate-fade-in-up sm:text-lg"
            style={{ animationDelay: '280ms' }}
          >
            I design scalable product experiences, connect Figma design systems with
            real engineering workflows, and use AI as a controlled accelerator — not
            as a replacement for product thinking.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '420ms' }}
          >
            <Button variant="primary" href="/work">
              View Work
            </Button>
            <Button variant="ghost" href="/expertise">
              Expertise
            </Button>
          </div>

          <div
            className="mt-12 animate-fade-in-up sm:mt-14 lg:mt-16"
            style={{ animationDelay: '560ms' }}
          >
            <WaveStripe />
          </div>
        </div>
      </Container>
    </section>
  )
}
