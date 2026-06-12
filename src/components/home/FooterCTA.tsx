import Container from '@/components/layout/Container'
import { footerCtaHeadingClassName } from '@/lib/headings'

/**
 * Closing CTA — inverted light slab so the footer reads as a distinct
 * closing chapter after the dark page body. Massive editorial headline,
 * then the email itself as the primary action: a giant underlined link
 * rather than a button — the most confident CTA a portfolio can make.
 */
export default function FooterCTA() {
  return (
    <footer
      className="grain relative bg-inverse text-inverse-foreground"
      id="contact"
    >
      <Container size="wide">
        <div className="flex flex-col gap-10 py-28 lg:py-36">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-inverse-muted">
            Contact / Availability
          </p>

          <h2 className={footerCtaHeadingClassName}>
            <span className="block">Building something</span>
            <span className="block">complex? Let&apos;s make</span>
            <span className="block">it feel simple.</span>
          </h2>

          <p className="max-w-2xl text-lg leading-[1.7] text-inverse-muted lg:text-xl">
            If you need a designer who reads the PR, ships with engineering,
            and stays close to implementation — I&apos;m one email away.
          </p>

          <div className="pt-2">
            <a
              href="mailto:milos@dostanic.net"
              className="group inline-block"
            >
              <span className="display-tight break-all text-[clamp(24px,4.6vw,56px)] font-semibold text-inverse-foreground transition-colors group-hover:text-accent">
                milos@dostanic.net
              </span>
              <span
                aria-hidden="true"
                className="mt-2 block h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </a>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-inverse-muted">
              Based in Serbia · working remote with teams worldwide
            </p>
          </div>
        </div>

        {/* Footer meta strip */}
        <div className="border-t border-inverse-stroke py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-inverse-muted">
              © 2026 Milos Dostanic
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-inverse-foreground transition-opacity hover:opacity-70"
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
