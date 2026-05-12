import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'
import Marquee from '@/components/ui/Marquee'
import { TOOLS } from '@/lib/data'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionBlockquoteClassName,
} from '@/lib/headings'

/**
 * Toolchain — re-built as a two-part band:
 *  1. Editorial pull-quote on the design-systems philosophy (left/right grid).
 *  2. Below it, an infinite-scroll Marquee of the tool stack — atomic-style
 *     caption ribbon. Decorative but communicative; the same tool list is
 *     also linked to the ExpertiseStrip and About copy.
 */
export default function ToolchainSection() {
  return (
    <Section id="toolchain" padding="lg" className="bg-surface/40">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className={sectionEyebrowAccentClassName}>
              Built With / The Stack
            </p>
            <h2 className={sectionHeadingClassName}>
              The full
              <br />
              <span className="text-accent block w-fit">stack.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-8 lg:col-span-7">
            <blockquote className="border-l-2 border-accent pl-6">
              <p className={sectionBlockquoteClassName}>
                &ldquo;A design system only works if engineers ship from it and
                designers maintain it. Everything else is a Figma file.&rdquo;
              </p>
              <cite className="mt-6 block font-mono text-[11px] not-italic uppercase tracking-[0.2em] text-muted">
                — Milos Dostanic
              </cite>
            </blockquote>
            <ArrowLink
              href="/expertise"
              className="text-foreground hover:text-accent self-start"
            >
              See how I build design systems
            </ArrowLink>
          </div>
        </div>
      </Container>

      {/* Tool marquee — full-bleed band below */}
      <div className="mt-20 lg:mt-28">
        <Marquee
          speed="slow"
          reverse
          label="Tools and technologies — decorative banner"
          className="py-5 sm:py-6"
        >
          {TOOLS.map((tool, idx) => (
            <span
              key={`${tool}-${idx}`}
              className="flex items-center gap-8 px-5 font-mono text-sm uppercase tracking-[0.18em] text-muted sm:gap-10 sm:px-7 sm:text-base"
            >
              <span className="text-foreground">{tool}</span>
              <span aria-hidden="true">·</span>
            </span>
          ))}
        </Marquee>
      </div>
    </Section>
  )
}
