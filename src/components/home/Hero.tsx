import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import WaveStripe from '@/components/ui/WaveStripe'

/**
 * atomic.black-inspired hero — manifesto layout.
 *
 *  - Top "year mark" strip — EST. 2017 / Senior Product Designer / Available 2026
 *  - Mega three-line editorial headline (split-text reveal). Headline now spans
 *    the full container width — the right-column case preview tile was removed
 *    to let the statement breathe and to remove the duplicate visual noise.
 *  - The cursor-following halo previously scoped to this section was lifted
 *    to the root layout (<CursorGlow />) so the same gradient continues to
 *    follow the cursor across every section of the page.
 *
 * Headline sizing has been dialled down twice — first from the original
 * 14/12/9.2vw with 136px cap, then to 12/10/8vw with 124px cap, and now to
 * 11/9/7vw with 108px cap. Each step shaved ~12–16px off the visible peak
 * size at desktop while keeping the editorial feel on mobile.
 */
export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grain relative overflow-hidden pt-16"
    >
      <Container size="wide">
        <div className="py-16 lg:py-28">
          <h1 className="display-mega text-foreground text-[44px] sm:text-[clamp(56px,6.4vw,94px)] font-bold">
            <span
              className="block animate-fade-in-up leading-[0.87]"
              style={{ animationDelay: '120ms' }}
            >
              Senior product
            </span>
            <span
              className="block animate-fade-in-up leading-[0.87]"
              style={{ animationDelay: '320ms' }}
            >
              designer for
            </span>
            <span
              className="accent-gradient-text block animate-fade-in-up leading-[0.984]"
              style={{ animationDelay: '520ms' }}
            >
              complex software.
            </span>
          </h1>

          <p
            className="mt-10 max-w-[860px] text-[18px] leading-[1.55] text-muted animate-fade-in-up"
            style={{ animationDelay: '760ms' }}
          >
            Senior Product Designer for complex products, scalable design systems,
            and AI-assisted delivery. Team-oriented — I bridge design and development so
            decisions stay aligned from Figma through implementation.
          </p>

          <div
            className="mt-10 flex items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '920ms' }}
          >
            <Button variant="primary" href="/work">
              View Work
            </Button>
            <Button variant="ghost" href="/contact">
              Get in Touch
            </Button>
          </div>

          {/* Wave stripe — sits just below the CTA buttons, intentionally
              kept close (mt-12) so it reads as the visual closer of the
              hero rather than a separate divider section. Each path runs
              at its own phase / frequency / amplitude, so the bundle
              constantly shifts shape without ever repeating. */}
          <div
            className="mt-12 animate-fade-in-up sm:mt-14 lg:mt-16"
            style={{ animationDelay: '1080ms' }}
          >
            <WaveStripe />
          </div>
        </div>
      </Container>
    </section>
  )
}
