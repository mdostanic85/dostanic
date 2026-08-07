import type { ReactNode } from 'react'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import CaseStudyMeta from '@/components/work/CaseStudyMeta'
import FooterCTA from '@/components/home/FooterCTA'
import { navBackLinkClassName, navRelatedLinkClassName } from '@/lib/headings'

export type MetaField = { label: string; value: string }

type NavLink = { href: string; label: string }

/** External proof link — live site, repository, or Behance gallery. */
export type CaseStudyLink = { href: string; label: string }

type Props = {
  meta: MetaField[]
  eyebrow: string
  title: ReactNode
  intro: ReactNode
  topRightLabel: string
  children: ReactNode
  previous?: NavLink
  next?: NavLink
  /** Live site / repository / Behance links — rendered top-right, next to "Back to work". */
  links?: CaseStudyLink[]
}

/** Shared case study page shell — header, meta, sections, footer nav. */
export default function CaseStudyShell({
  meta,
  eyebrow,
  title,
  intro,
  topRightLabel,
  children,
  previous,
  next,
  links,
}: Props) {
  return (
    <main>
      <div className="pt-16">
        <Container size="wide">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            <Link href="/work" className={navBackLinkClassName}>
              <span aria-hidden="true">←</span> Back to work
            </Link>
            {links && links.length > 0 ? (
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {links.map((link) => (
                  <ArrowLink
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-accent"
                  >
                    {link.label}
                  </ArrowLink>
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </div>

      <PageHeader
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        topRightLabel={topRightLabel}
      />

      <Section padding="sm">
        <Container size="wide">
          <CaseStudyMeta fields={meta} />
        </Container>
      </Section>

      {children}

      <Section padding="sm">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Link href="/work" className={navRelatedLinkClassName}>
              <span aria-hidden="true">←</span> All work
            </Link>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              {previous ? (
                <ArrowLink href={previous.href} className="text-foreground hover:text-accent">
                  ← {previous.label}
                </ArrowLink>
              ) : null}
              {next ? (
                <ArrowLink href={next.href} className="text-foreground hover:text-accent">
                  Next: {next.label}
                </ArrowLink>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}

export function CaseStudySection({
  children,
  alt = false,
}: {
  children: ReactNode
  alt?: boolean
}) {
  return (
    <Section padding="lg" className={alt ? 'bg-surface/40' : undefined}>
      <Container size="wide">{children}</Container>
    </Section>
  )
}

export function CaseStudyOutcome({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Outcome</p>
      <div className="mt-4 text-base leading-[1.7] text-muted lg:text-lg">{children}</div>
    </div>
  )
}
