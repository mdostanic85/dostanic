import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import CaseStudyMeta from '@/components/work/CaseStudyMeta'
import ImagePlaceholder from '@/components/work/ImagePlaceholder'
import FooterCTA from '@/components/home/FooterCTA'
import {
  monoIndexAccentClassName,
  navBackLinkClassName,
  navRelatedLinkClassName,
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionLeadClassName,
} from '@/lib/headings'
import { LINKEDIN_PROFILE_URL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Space Inch — Enterprise Product Design · Milos Dostanic',
  description:
    'Senior product designer engagement at Space Inch — embedded product craft for healthcare, fintech, and SaaS teams.',
}

const META_FIELDS = [
  { label: 'Studio', value: 'Space Inch' },
  { label: 'Engagement', value: '2025 — ongoing' },
  { label: 'Role', value: 'Senior Product Designer' },
  {
    label: 'Focus',
    value: ['Healthcare & regulated UX', 'Fintech & payments', 'Enterprise SaaS & internal tools'],
  },
  { label: 'Model', value: 'Embedded with client product & engineering' },
  {
    label: 'More detail',
    value: 'Client work is often under NDA — see LinkedIn for roles, timelines, and endorsements.',
  },
]

const CHALLENGES = [
  'Each client brings different domain rules, legacy constraints, and stakeholder surfaces — design has to adapt without inventing a new visual language every sprint.',
  'Healthcare and fintech products demand accessibility, auditability, and calm density at the same time — the UI cannot trade one for the other.',
  'Agency tempo means senior designers own clarity: tight discovery, decisive IA, and specs that survive handoff to multiple engineering teams.',
]

export default function SpaceInchCaseStudy() {
  return (
    <main>
      <div className="pt-16">
        <Container size="wide">
          <Link href="/work" className={navBackLinkClassName}>
            <span aria-hidden="true">←</span> Back to work
          </Link>
        </Container>
      </div>

      <PageHeader
        eyebrow="Engagement / Agency"
        title={
          <>
            Space Inch —
            <br />
            Senior product
            <br />
            <span className="accent-gradient-text">design.</span>
          </>
        }
        intro={
          <>
            Space Inch is a product and engineering studio that partners with teams
            modernizing serious software — healthcare, finance, and growth-stage SaaS. I
            join as a senior product designer inside those client organizations: owning
            flows, interaction patterns, and documentation so what ships matches the
            product intent. Specific products often stay under NDA; for the most current
            responsibilities and client context, my LinkedIn profile is the source of
            truth.
          </>
        }
        topRightLabel="2025 / Current"
      />

      <Section padding="sm">
        <Container size="wide">
          <CaseStudyMeta fields={META_FIELDS} className="mb-12" />
          <ImagePlaceholder
            label="Space Inch — embedded product design (NDA)"
            aspectClass="aspect-[16/8]"
          />
        </Container>
      </Section>

      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className={sectionEyebrowAccentClassName}>How I operate there</p>
              <h2 className={sectionHeadingClassName}>
                Embedded
                <br />
                craft at
                <br />
                <span className="text-accent">studio speed.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className={sectionLeadClassName}>
                I treat agency engagements like product leadership with a shorter runway:
                map the real user and operator journeys, align with engineering on what is
                feasible in-quarter, then deliver systems — tables, filters, wizards,
                dashboards — that stay coherent as scope shifts.
              </p>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                That means workshops when discovery is fuzzy, Figma architecture when the
                team needs a maintainable library, and code-aware reviews when we are
                closing the gap between prototype and production. Space Inch&apos;s model
                pairs designers with engineering and product leads inside the client; my
                job is to be the senior pair of hands that keeps quality from collapsing
                under delivery pressure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="wide">
          <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>Reality of the work</p>
              <h2 className={sectionHeadingClassName}>
                What stays
                <br />
                consistent
                <br />
                <span className="text-accent">across clients.</span>
              </h2>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6 lg:pt-2">
              {CHALLENGES.map((item, idx) => (
                <li key={item} className="flex items-start gap-5 py-5">
                  <span className={monoIndexAccentClassName}>
                    /{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base leading-[1.65] text-muted lg:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[10px] border border-stroke bg-surface p-6 sm:p-8 lg:p-10">
            <p className={sectionEyebrowAccentClassName}>Live profile</p>
            <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted lg:text-lg">
              For titles, dates, recommendations, and the specifics of what I am shipping
              right now, use LinkedIn — I keep it aligned with active engagements.
            </p>
            <ArrowLink
              href={LINKEDIN_PROFILE_URL}
              className="mt-6 inline-flex text-foreground hover:text-accent"
            >
              Milos Dostanic on LinkedIn
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <Section padding="sm" className="bg-surface/40">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Link href="/work" className={navRelatedLinkClassName}>
              <span aria-hidden="true">←</span> All work
            </Link>
            <ArrowLink href="/work/devrev" className="text-foreground hover:text-accent">
              Next: DevRev — Developer Tools Platform
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
