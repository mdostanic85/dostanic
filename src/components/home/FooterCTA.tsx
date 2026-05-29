import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'
import { footerCtaHeadingClassName } from '@/lib/headings'

const DEFAULTS = {
  eyebrow: 'Contacts / Availability',
  titleLines: ["I'm ready", 'to discuss'],
  titleAccentLine: 'your project.',
  body: "If you're building something complex and need a designer who reads the PR and stays close to implementation — let's talk.",
  locationLine: 'Based in Serbia · working remote with teams worldwide',
  emailLabel: 'Send email',
  email: 'milos@dostanic.net',
  copyrightOwner: '2026 Milos Dostanic',
} as const

type FooterCTAProps = {
  eyebrow?: string
  titleLines?: string[]
  titleAccentLine?: string
  body?: string
  locationLine?: string
  emailLabel?: string
  email?: string
  copyrightOwner?: string
}

export default function FooterCTA({
  eyebrow,
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
  const accentLine = titleAccentLine ?? DEFAULTS.titleAccentLine
  const activeEmail = email ?? DEFAULTS.email

  return (
    <footer className="grain relative bg-inverse text-inverse-foreground" id="contact">
      <Container size="wide">
        <div className="flex flex-col gap-8 py-[128px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] leading-[16.5px] text-inverse-muted">
            {eyebrow ?? DEFAULTS.eyebrow}
          </p>

          <h2 className={footerCtaHeadingClassName}>
            {activeLines.map((line) => (
              <span key={line} className="block leading-[0.88]">
                {line}
              </span>
            ))}
            <span className="accent-gradient-text block w-fit leading-[0.88]">
              {accentLine}
            </span>
          </h2>

          <p className="max-w-3xl pt-2 text-[20px] leading-[1.7] text-inverse-muted">
            {body ?? DEFAULTS.body}
          </p>

          <div className="flex flex-col items-start gap-3 pt-4">
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

        {/* Footer meta strip */}
        <div className="py-8">
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
