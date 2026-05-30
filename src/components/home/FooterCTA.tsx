import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import { footerCtaHeadingClassName, preventHeadingOrphan } from '@/lib/headings'

const DEFAULTS = {
  titleLines: ["I'm ready to discuss"],
  titleAccentLine: 'your project.',
  body: "If you're building something complex and need a designer who reads the PR and stays close to implementation — let's talk.",
  locationLine: 'Based in Serbia · working remote with teams worldwide',
  emailLabel: 'Send email',
  email: 'milos@dostanic.net',
  copyrightOwner: '2026 Milos Dostanic',
} as const

type FooterCTAProps = {
  titleLines?: string[]
  titleAccentLine?: string
  body?: string
  locationLine?: string
  emailLabel?: string
  email?: string
  copyrightOwner?: string
}

export default function FooterCTA({
  titleLines,
  titleAccentLine,
  body,
  locationLine,
  emailLabel,
  email,
  copyrightOwner,
}: FooterCTAProps = {}) {
  const activeLines =
    titleLines && titleLines.length > 0 ? titleLines : DEFAULTS.titleLines
  const primaryLine = activeLines.join(' ')
  const accentLine = titleAccentLine ?? DEFAULTS.titleAccentLine
  const activeEmail = email ?? DEFAULTS.email

  return (
    <footer className="grain relative bg-inverse text-inverse-foreground" id="contact">
      <div className="flex min-h-svh flex-col justify-center">
        <Container size="wide">
          <div className="flex flex-col gap-10 py-16 sm:gap-12 sm:py-20 lg:gap-14 lg:py-28">
            <h2 className={footerCtaHeadingClassName}>
              <span className="block">{preventHeadingOrphan(primaryLine)}</span>
              <span className="accent-gradient-text block">
                {preventHeadingOrphan(accentLine)}
              </span>
            </h2>

            <p className="max-w-3xl text-[20px] leading-[1.7] text-inverse-muted lg:text-[22px]">
              {body ?? DEFAULTS.body}
            </p>

            <div className="flex flex-col items-start gap-4 pt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] leading-[16.5px] text-inverse-muted">
                {locationLine ?? DEFAULTS.locationLine}
              </p>
              <Button
                variant="primary-inverse"
                href={`mailto:${activeEmail}`}
                className="text-[14px] leading-5"
              >
                {emailLabel ?? DEFAULTS.emailLabel}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer meta strip */}
      <Container size="wide">
        <div className="border-t border-inverse-foreground/10 py-10 lg:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.2em] text-inverse-muted">
              © {copyrightOwner ?? DEFAULTS.copyrightOwner}
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
