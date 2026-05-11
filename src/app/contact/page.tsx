import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import Button from '@/components/ui/Button'
import ArrowLink from '@/components/ui/ArrowLink'
import FooterCTA from '@/components/home/FooterCTA'

export const metadata: Metadata = {
  title: 'Contact — Milos Dostanic',
  description:
    'Contact Milos Dostanic for complex product design, design systems, and AI-assisted delivery support.',
}

const OPEN_TO = [
  {
    title: 'Product UX/UI Design',
    description:
      'Complex SaaS, healthcare, fintech, and enterprise UX/UI work.',
  },
  {
    title: 'Design Systems',
    description:
      'Tokens, components, documentation, and design-engineering alignment.',
  },
  {
    title: 'AI-Assisted Prototyping',
    description:
      'Fast validation of complex interaction patterns in realistic prototypes.',
  },
  {
    title: 'Figma-to-Code Collaboration',
    description:
      'Design handoff quality, parity checks, and implementation review support.',
  },
  {
    title: 'UX Audits & Redesigns',
    description:
      'Focused UX diagnosis with prioritized redesign actions.',
  },
  {
    title: 'Consulting & Advisory',
    description:
      'Senior product, system, and workflow guidance for specific phases.',
  },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/milosdostanic' },
  { label: 'GitHub', href: 'https://github.com/milosdostanic' },
  { label: 'Behance', href: 'https://www.behance.net/mdostanic' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact / Availability"
        title={
          <>
            Let&apos;s talk
            <br />
            about the
            <br />
            <span className="accent-gradient-text">problem first.</span>
          </>
        }
        intro={
          <>
            Senior Product Designer for complex products, scalable systems, and
            implementation-aware delivery. Best way to start: a short direct conversation.
          </>
        }
        aside={
          <div className="rounded-[10px] border border-stroke bg-surface p-6 lg:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Direct email
            </p>
            <a
              href="mailto:milos@dostanic.net"
              className="mt-3 block break-all display-tight text-xl font-semibold leading-tight text-foreground transition-colors hover:text-accent sm:text-2xl"
            >
              milos@dostanic.net
            </a>

            <Button
              href="mailto:milos@dostanic.net"
              className="mt-6"
            >
              Send Email
            </Button>

            <div className="mt-8 border-t border-stroke pt-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Also on
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <ArrowLink
                    key={label}
                    href={href}
                    className="text-muted hover:text-foreground"
                  >
                    {label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          </div>
        }
        topRightLabel="Reply within 24h"
      />

      {/* ── Open to ───────────────────────────────────────────────────── */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:mb-16">
            <div className="lg:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Open to
              </p>
              <h2 className="display-tight text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
                Six ways
                <br />
                I work.
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-muted lg:col-span-6 lg:col-start-7 lg:text-lg">
              These are the most common collaboration formats. Scope and depth depend on
              your product stage and constraints.
            </p>
          </div>

          <ul className="grid grid-cols-1 border-t border-stroke sm:grid-cols-2 lg:grid-cols-3">
            {OPEN_TO.map((item, idx) => {
              // 6 items in a max 3-col grid. Borders are computed per index per
              // breakpoint so the cells form a clean editorial table.
              const isLastOnSm = idx % 2 === 1
              const isLastOnLg = idx % 3 === 2
              const cellBorders = [
                'border-b border-stroke',
                isLastOnSm ? '' : 'sm:border-r',
                isLastOnLg ? 'lg:border-r-0' : 'lg:border-r',
              ]
                .filter(Boolean)
                .join(' ')
              return (
                <li
                  key={item.title}
                  className={`group flex flex-col gap-4 p-8 transition-colors duration-300 ${cellBorders}`}
                >
                  <h3 className="display-tight text-xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-muted lg:text-base">
                    {item.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      {/* ── Availability mark ─────────────────────────────────────────── */}
      <Section padding="md">
        <Container size="wide">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Availability
              </p>
              <p className="display-tight text-2xl font-semibold leading-[1.15] text-foreground sm:text-3xl lg:text-4xl">
                Currently available for senior product design roles and design systems
                consulting. Remote, with preference for{' '}
                <span className="text-accent">European time zones</span> — but I have
                worked effectively with teams in the US, UK, and across Europe.
              </p>
            </div>
            <div className="space-y-6 lg:col-span-4 lg:col-start-9">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Based in
                </p>
                <p className="mt-2 text-base text-foreground lg:text-lg">
                  Serbia · Remote
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Response time
                </p>
                <p className="mt-2 text-base text-foreground lg:text-lg">
                  Usually within 24 hours on business days
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
