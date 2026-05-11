import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import FooterCTA from '@/components/home/FooterCTA'
import WorkClient from './WorkClient'
import { PROJECTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Work — Milos Dostanic',
  description:
    'Selected product design work across enterprise SaaS, healthcare, analytics, fintech, and design systems.',
}

export default function WorkPage() {
  const total = PROJECTS.length

  return (
    <main>
      <PageHeader
        eyebrow="Selected Work / Best Cases"
        title={
          <>
            The work,
            <br />
            not the
            <br />
            <span className="accent-gradient-text">pitch.</span>
          </>
        }
        intro={
          <>
            20+ years across product UX, design systems, analytics, healthcare, fintech,
            and web. The selection below shows the kind of work I do and how I think —
            edge cases included.
          </>
        }
        topRightLabel={`${total} cases`}
      />

      <Section padding="lg">
        <Container size="wide">
          <WorkClient projects={PROJECTS} />

          <p className="mt-20 max-w-2xl border-t border-stroke pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            More projects available on request — including NDA-covered enterprise work
            and legacy projects not shown here.
          </p>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
