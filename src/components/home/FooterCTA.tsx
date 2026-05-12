import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import { footerCtaHeadingClassName } from '@/lib/headings'

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

          <h2 className={footerCtaHeadingClassName}>
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

          <div className="flex flex-col items-start gap-3 pt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] leading-[16.5px] text-inverse-muted">
              Based in Serbia · working remote with teams worldwide
            </p>
            <Button
              variant="primary-inverse"
              href="mailto:milos@dostanic.net"
              className="text-[14px] leading-5"
            >
              Send email
            </Button>
          </div>
        </div>

        {/* Footer meta strip */}
        <div className="py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
