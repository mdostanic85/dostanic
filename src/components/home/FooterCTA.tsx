import Reveal from '@/components/v3/Reveal'
import Magnetic from '@/components/v3/Magnetic'
import LocalTime from '@/components/v3/LocalTime'
import ChapterReveal from '@/components/v3/ChapterReveal'

type FooterCTAProps = {
  compact?: boolean
}

function FooterMeta() {
  return (
    <div className="flex flex-col gap-4 border-t border-stroke py-7 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
        © 2026 Milos Dostanic
      </p>
      <div className="flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        <a href="/resume" data-analytics-event="resume_action" className="hover:text-foreground">Résumé</a>
        <a href="https://www.linkedin.com/in/milos-dostanic/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
        <a href="https://github.com/mdostanic85" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
        <a href="/privacy" className="hover:text-foreground">Privacy</a>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">Serbia · <LocalTime /></p>
      <a
        href="#top"
        className="link-roll inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-foreground"
      >
        <span className="link-roll-text">
          <span>Back to top ↑</span>
          <span aria-hidden="true">Back to top ↑</span>
        </span>
      </a>
    </div>
  )
}

/**
 * Closing chapter — V3. Uppercase poster headline with the loudest word
 * in outline stroke, the email as the primary action with an underline
 * sweep, live Belgrade clock in the meta rail. Shared site footer.
 */
export default function FooterCTA({ compact = false }: FooterCTAProps) {
  if (compact) {
    return (
      <footer className="chapter-dark bg-background text-foreground">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <FooterMeta />
        </div>
      </footer>
    )
  }

  return (
    <ChapterReveal>
    <footer
      className="chapter-dark grain relative bg-background text-foreground"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-12 py-28 lg:py-40">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              Contact
            </p>

            <h2 className="display-mega max-w-[14ch] text-[clamp(44px,8.5vw,128px)] font-semibold uppercase text-foreground">
              Have something{' '}
              <span className="text-outline block w-fit">complex?</span>
            </h2>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-[44ch] text-[15px] leading-[1.7] text-muted sm:text-base lg:text-[17px]">
                I&apos;m interested in senior remote product roles and selected
                collaborations involving complex B2B software, systems, and
                product delivery.
              </p>

              <Magnetic strength={12}>
                <a
                  href="mailto:milos@dostanic.net"
                  data-analytics-event="contact_action"
                  className="group inline-block shrink-0"
                >
                  <span className="display-tight text-[clamp(22px,3.4vw,40px)] font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                    milos@dostanic.net
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-px w-full origin-left scale-x-100 bg-stroke transition-transform duration-500 ease-out group-hover:scale-x-0"
                  />
                  <span
                    aria-hidden="true"
                    className="block h-px w-full origin-right scale-x-0 bg-accent transition-transform delay-100 duration-500 ease-out group-hover:origin-left group-hover:scale-x-100"
                  />
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        <FooterMeta />
      </div>
    </footer>
    </ChapterReveal>
  )
}
