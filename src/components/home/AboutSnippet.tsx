import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  monoKickerMutedClassName,
} from '@/lib/headings'

/**
 * "About" snippet — atomic.black's "About Studio" tile compressed into a
 * single editorial paragraph. Sits between the toolchain marquee and the
 * closing CTA. The "since 2017" caption mirrors atomic's "since —2016".
 */
export default function AboutSnippet() {
  return (
    <Section id="about-snippet" padding="md">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className={sectionEyebrowAccentClassName}>
              About / Background
            </p>
            <p className={monoKickerMutedClassName}>
              Shipping product
              <br />
              <span className="text-foreground">since — 2017</span>
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className={sectionHeadingClassName}>
              Senior Product Designer who has shipped across enterprise SaaS,
              healthcare, fintech, and logistics — in environments where the edge
              cases <span className="text-accent">are</span> the product and the
              stakes are real.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-[1.7] text-muted lg:text-lg">
              Team-oriented: I connect design and development — comfortable in a Figma
              file and in a GitHub PR. Token-first systems, AI-assisted prototyping, and
              review against what actually ships.
            </p>
            <ArrowLink
              href="/about"
              className="text-foreground hover:text-accent mt-10 inline-flex"
            >
              More about me
            </ArrowLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
