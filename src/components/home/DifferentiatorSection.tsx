import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { DIFFERENTIATORS } from '@/lib/data'

/**
 * "How I Work" / About Studio block, in the spirit of atomic.black's
 * "About Studio" panel — a massive editorial title and tagline on top,
 * a pull-quote band, and a 2x2 grid of numbered principles below.
 */
export default function DifferentiatorSection() {
  return (
    <Section id="how-i-work" padding="lg">
      <Container size="wide">
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              How I Work / About Studio
            </p>
            <h2 className="display-tight text-5xl font-semibold text-foreground sm:text-6xl lg:text-7xl xl:text-[112px]">
              Design that
              <br />
              survives the
              <br />
              <span className="accent-gradient-text">handoff.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <p className="text-base leading-[1.7] text-muted lg:text-lg">
              I work at the intersection of design rigour and engineering fluency —
              equally comfortable in a Figma file and a GitHub PR. Most designers stop
              at handoff. The four principles below are why I don&apos;t.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              EST. 2017 — Serbia · Remote
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 border-t border-stroke pt-12 md:grid-cols-2 lg:gap-y-20 lg:pt-16">
          {DIFFERENTIATORS.map((item) => (
            <article
              key={item.number}
              className="group relative cursor-default"
            >
              {/* Number with growing accent rule */}
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  / {item.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 origin-left bg-stroke transition-transform duration-500 ease-out scale-x-100 group-hover:bg-accent"
                />
              </div>
              <h3 className="display-tight text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent sm:text-4xl lg:text-[40px]">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-[1.7] text-muted lg:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
