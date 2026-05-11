import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import Button from '@/components/ui/Button'
import ArrowLink from '@/components/ui/ArrowLink'
import FooterCTA from '@/components/home/FooterCTA'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Milos Dostanic',
  description:
    'Contact Milos Dostanic for complex product design, design systems, and AI-assisted delivery support.',
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/milosdostanic' },
  { label: 'GitHub', href: 'https://github.com/milosdostanic' },
  { label: 'Behance', href: 'https://www.behance.net/mdostanic' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
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
            implementation-aware delivery. Send a message below or email directly — short
            context is enough to start.
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

            <Button href="mailto:milos@dostanic.net" className="mt-6">
              Send Email
            </Button>

            <div className="mt-8 border-t border-stroke pt-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Also on
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <ArrowLink key={label} href={href} className="text-muted hover:text-foreground">
                    {label}
                  </ArrowLink>
                ))}
              </div>
            </div>

            <p className="mt-8 border-t border-stroke pt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted">
              Scope &amp; formats —{' '}
              <Link href="/expertise" className="text-foreground underline-offset-2 transition-colors hover:text-accent">
                Expertise
              </Link>
            </p>
          </div>
        }
        topRightLabel="Serbia · Remote"
      />

      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="flex flex-col justify-start gap-10 lg:col-span-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Availability</p>
                <p className="mt-4 display-tight text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                  Open for senior roles and design systems work. Remote · CET — also US,
                  UK, and EU teams.
                </p>
              </div>
              <div className="space-y-6 border-t border-stroke pt-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Response
                  </p>
                  <p className="mt-2 text-base text-foreground lg:text-lg">
                    Usually within one business day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
