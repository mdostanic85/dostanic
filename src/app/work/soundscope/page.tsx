import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import CaseStudyMeta from '@/components/work/CaseStudyMeta'
import FooterCTA from '@/components/home/FooterCTA'
import { cn } from '@/lib/utils'
import {
  monoIndexAccentClassName,
  monoIndexGridClassName,
  navBackLinkClassName,
  navRelatedLinkClassName,
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionLeadClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export const metadata: Metadata = {
  title: 'SoundScope — Music Analytics Dashboard · Milos Dostanic',
  description:
    'End-to-end case study for SoundScope: dashboard architecture, design system, implementation collaboration, and measurable outcomes for a music analytics platform.',
}

const META_FIELDS = [
  { label: 'Client', value: 'SoundScope' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Lead Product Designer' },
  { label: 'Domain', value: 'Music Analytics' },
  { label: 'Tools', value: 'Figma · Cursor' },
  { label: 'Deliverable', value: 'Dashboard + system' },
]

const CHALLENGES = [
  'Data fragmentation across DSPs, ad platforms, and royalty systems',
  'Role-specific needs: analysts need depth, executives need clarity',
  'High-density information without overwhelming cognitive load',
  'Long reporting cycles delaying campaign adjustments',
]

const DECISIONS = [
  {
    title: 'Metric hierarchy over chart variety',
    body: 'Prioritised a small set of decision metrics at the top level, with deeper exploratory charts in drill-down contexts. Reduced noise and made executive reviews faster.',
  },
  {
    title: 'Context-preserving drill-down',
    body: 'Users move from portfolio to artist to release with filter context retained. Removed repetitive setup and improved analysis flow.',
  },
  {
    title: 'Dark-first ergonomics for analysts',
    body: 'Visual contrast, typography rhythm, and table density tuned for long working sessions. Status colours tokenised for consistency and accessibility.',
  },
]

const OUTCOMES = [
  'Reduced average weekly reporting prep time by 38%',
  'Campaign decision turnaround dropped from 3-5 days to under 48 hours',
  'Increased self-serve dashboard analysis across non-analyst roles',
  'Established a reusable component system that accelerated feature delivery',
]

export default function SoundScopeCaseStudy() {
  return (
    <main>
      {/* Back link band */}
      <div className="pt-16">
        <Container size="wide">
          <Link
            href="/work"
            className={navBackLinkClassName}
          >
            <span aria-hidden="true">←</span> Back to work
          </Link>
        </Container>
      </div>

      <PageHeader
        eyebrow="Case Study / Analytics"
        title={
          <>
            SoundScope —
            <br />
            Music Analytics
            <br />
            <span className="accent-gradient-text">Dashboard.</span>
          </>
        }
        intro={
          <>
            End-to-end redesign of a music analytics platform used by labels and
            publishers to track artist growth, campaign effectiveness, and revenue
            across channels.
          </>
        }
        topRightLabel="2025 / Featured"
      />

      {/* Cover image */}
      <Section padding="sm">
        <Container size="wide">
          <CaseStudyMeta fields={META_FIELDS} className="mb-12" />
          <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] bg-surface">
            <Image
              src="/work/soundscope/cover.png"
              alt="SoundScope dashboard overview"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Context */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className={sectionEyebrowAccentClassName}>
                Project context
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className={sectionLeadClassName}>
                SoundScope was positioned as a decision layer for music teams overwhelmed
                by fragmented reporting — slow decisions, low confidence in shared
                metrics.
              </p>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                The goal was not another dashboard with more charts. The goal was to
                design a system that helps teams answer critical questions quickly: What
                is moving? Why is it moving? What&apos;s next?
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge */}
      <Section padding="lg">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                The challenge
              </p>
              <h2 className={sectionHeadingClassName}>
                What the
                <br />
                redesign had to
                <br />
                <span className="text-accent">solve.</span>
              </h2>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6 lg:pt-2">
              {CHALLENGES.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-5 py-5"
                >
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
        </Container>
      </Section>

      {/* Key decisions */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                Decisions that mattered
              </p>
              <h2 className={sectionHeadingClassName}>
                Three calls
                <br />
                that shaped
                <br />
                <span className="text-accent block w-fit">the system.</span>
              </h2>
            </div>
          </div>

          <ul>
            {DECISIONS.map((d, idx) => (
              <li
                key={d.title}
                className="group grid grid-cols-12 gap-4 py-10 lg:gap-12 lg:py-14"
              >
                <span className={monoIndexGridClassName}>
                  /{String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className={cn(sectionSubheadingClassName, 'col-span-10 sm:col-span-5')}>
                  {titleWithAccentGradient(d.title)}
                </h3>
                <p className="col-span-12 text-base leading-[1.7] text-muted sm:col-span-6 lg:text-lg">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Outcome */}
      <Section padding="lg">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                Outcome
              </p>
              <h2 className={sectionHeadingClassName}>
                Faster
                <br />
                decisions.
                <br />
                <span className="text-accent">Cleaner system.</span>
              </h2>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                The redesigned SoundScope improved reporting clarity and shortened the
                path from data review to campaign action. Teams reported higher trust in
                shared metrics and fewer alignment meetings.
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-6 lg:col-start-7 lg:pt-2">
              {OUTCOMES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 pb-5"
                >
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-base leading-[1.6] text-foreground lg:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Next case nav */}
      <Section padding="sm" className="bg-surface/40">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className={navRelatedLinkClassName}
            >
              <span aria-hidden="true">←</span> All work
            </Link>
            <ArrowLink
              href="/work/optronic"
              className="text-foreground hover:text-accent"
            >
              Next: Optronic — Website Redesign
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
