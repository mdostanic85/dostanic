import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { DIFFERENTIATORS } from '@/lib/data'
import {
  sectionEyebrowAccentClassName,
  sectionFeatureTitleClassName,
  sectionHeadingClassName,
  monoMarkAccentClassName,
  monoKickerMutedClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

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
            <p className={sectionEyebrowAccentClassName}>
              How I Work / About Studio
            </p>
            <h2 className={sectionHeadingClassName}>
              Design that
              <br />
              survives the
              <br />
              <span className="text-accent">handoff.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <p className="text-base leading-[1.7] text-muted lg:text-lg">
              I work at the intersection of design rigour and engineering fluency —
              equally comfortable in a Figma file and a GitHub PR. Most designers stop
              at handoff. The four principles below are why I don&apos;t.
            </p>
            <p className={monoKickerMutedClassName}>
              EST. 2017 — Serbia · Remote
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 pt-12 md:grid-cols-2 lg:gap-y-20 lg:pt-16">
          {DIFFERENTIATORS.map((item) => (
            <article
              key={item.number}
              className="group relative cursor-default"
            >
              {/* Number with growing accent rule */}
              <div className="mb-6 flex items-center gap-4">
                <span className={monoMarkAccentClassName}>
                  / {item.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 origin-left bg-stroke transition-transform duration-500 ease-out scale-x-100 group-hover:bg-accent"
                />
              </div>
              <h3 className={sectionFeatureTitleClassName}>
                {titleWithAccentGradient(item.title, {
                  leadClassName: 'transition-colors duration-300 group-hover:text-accent',
                })}
              </h3>
              <p className="mt-6 text-base leading-[1.7] text-muted lg:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
