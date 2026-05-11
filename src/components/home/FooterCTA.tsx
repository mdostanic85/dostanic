import Button from '@/components/ui/Button'
import ArrowLink from '@/components/ui/ArrowLink'
import Container from '@/components/layout/Container'

/**
 * Closing CTA — atomic.black's "We are ready to discuss your project" wall.
 *  - Inverted color block (bg-inverse) so the footer reads as a closing slab
 *    distinct from the dark page body above.
 *  - Massive editorial headline with the same accent gradient as the hero
 *    (blue → cyan → violet via `.accent-gradient-text`).
 *  - Compact contact row + meta footer below with EST mark and GO TOP link.
 *
 * The wave stripe used to live here; it has moved to the home page (between
 * Hero and SelectedWork) so it appears once, in a single dedicated spot, on
 * a true dark background where the gradient strokes can read against the
 * page's body gradient.
 */
export default function FooterCTA() {
  return (
    <footer
      className="grain relative bg-inverse text-inverse-foreground"
      id="contact"
    >
      <Container size="wide">
        <div className="flex flex-col gap-8 py-[128px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] leading-[16.5px] text-inverse-muted">
            Contacts / Availability
          </p>

          <h2 className="display-mega flex max-w-5xl flex-col gap-[0.02em] pb-[0.12em] text-[32px] font-bold leading-none tracking-[-0.045em] text-inverse-foreground sm:text-[clamp(44px,6.4vw,82px)]">
            <span className="block leading-[0.88]">I&apos;m ready</span>
            <span className="block leading-[0.88]">to discuss</span>
            <span className="accent-gradient-text block w-fit leading-[0.88]">
              your project.
            </span>
          </h2>

          <p className="max-w-3xl pt-2 text-[20px] leading-[1.7] text-inverse-muted">
            If you&apos;re building something complex and need a designer who reads the PR
            and stays close to implementation — let&apos;s talk.
          </p>

          <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center">
            <Button variant="primary-inverse" href="/contact" className="text-[14px] leading-5">
              Get in Touch
            </Button>
            <ArrowLink
              href="mailto:milos@dostanic.net"
              className="text-[14px] leading-5 text-inverse-muted hover:text-inverse-foreground"
            >
              milos@dostanic.net
            </ArrowLink>
          </div>
        </div>

        {/* Footer meta strip */}
        <div className="border-t border-[var(--color-inverse-stroke)] py-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.2em] text-inverse-muted">
              © 2026 Milos Dostanic
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 pl-2 font-mono text-[14px] uppercase leading-[16.5px] tracking-[0.141em] text-inverse-foreground"
            >
              <span>Go top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
