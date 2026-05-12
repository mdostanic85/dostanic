import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { EXPERTISE_TILES } from '@/lib/data'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionTileTitleClassName,
  monoIndexAccentExpertiseClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

/**
 * Atomic-style "What I Do" section:
 *  - Big section header with a sticky-feeling intro on the left.
 *  - Each capability is rendered as a full-width row with a massive title.
 *    On hover the title shifts to the accent color and the description fades
 *    in beneath it. The numeric mark on the left and the meta tag on the
 *    right echo atomic.black's editorial "rule" rhythm.
 *  - Falls back to a static list when JS is off; everything is CSS-only.
 */
export default function ExpertiseStrip() {
  return (
    <Section id="expertise" padding="lg" className="bg-surface/40">
      <Container size="wide">
        <div className="mb-16 grid grid-cols-1 gap-10 sm:mb-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className={sectionEyebrowAccentClassName}>
              What I Do / Types of Activities
            </p>
            <h2 className={sectionHeadingClassName}>
              Six disciplines.
              <br />
              <span className="text-accent block w-fit">One delivery model.</span>
            </h2>
          </div>
          <p className="text-base leading-[1.7] text-muted lg:col-span-6 lg:col-start-7 lg:text-lg">
            I work across the full lifecycle of complex products — from token-first
            system architecture and dense product UI, through AI-assisted prototyping,
            to design-to-code review against the actual deployed build. The list below
            is what I show up with, not what I claim.
          </p>
        </div>

        <ul>
          {EXPERTISE_TILES.map((tile) => (
            <li
              key={tile.number}
              className="group relative grid grid-cols-12 items-start gap-4 py-8 transition-colors duration-300 sm:py-10 lg:py-12"
            >
              {/* Hover sweep — accent fill from left */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
              />

              {/* Number */}
              <span className={monoIndexAccentExpertiseClassName}>
                {tile.number}
              </span>

              {/* Title + description */}
              <div className="col-span-10 sm:col-span-8 lg:col-span-7">
                <h3 className={sectionTileTitleClassName}>
                  {titleWithAccentGradient(tile.title, {
                    leadClassName: 'transition-colors duration-300 group-hover:text-accent',
                  })}
                </h3>
                <p
                  className="mt-0 max-h-0 overflow-hidden text-base leading-[1.7] text-muted opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:max-h-40 group-hover:opacity-100 lg:text-lg"
                >
                  {tile.description}
                </p>
              </div>

              {/* Meta affordance on the right */}
              <span
                aria-hidden="true"
                className="hidden text-right font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-foreground sm:col-span-3 sm:block lg:col-span-4 lg:pt-4"
              >
                Read more
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
