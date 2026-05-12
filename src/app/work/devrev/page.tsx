import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import CaseStudyMeta from '@/components/work/CaseStudyMeta'
import DevRevUIScreens from '@/components/work/DevRevUIScreens'
import FooterCTA from '@/components/home/FooterCTA'
import { cn } from '@/lib/utils'
import {
  monoIndexAccentClassName,
  monoIndexAccentPaddedClassName,
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
  title: 'DevRev — Developer Tools Platform · Milos Dostanic',
  description:
    'End-to-end product design for DevRev — IA across engineering, support, and product surfaces; multi-role dashboards; and a shared component language for a developer-focused platform.',
}

const META_FIELDS = [
  { label: 'Product', value: 'DevRev' },
  { label: 'Year', value: '2023' },
  { label: 'Role', value: 'Senior product designer' },
  { label: 'Domain', value: 'Developer tools · B2B SaaS' },
  { label: 'Stack', value: 'Figma · design system · handoff' },
  { label: 'Output', value: 'IA · flows · UI · system' },
]

const ROLE_POINTS = [
  'Partnered with product and engineering to map who uses the product (IC engineer, team lead, support, PM) and which jobs-to-be-done had to work in the same navigation model — not as separate “apps”.',
  'Owned information architecture and primary navigation across work tracking, customer conversations, and org-level settings so power users could move fast without losing context.',
  'Designed end-to-end flows for dense, role-specific surfaces: triage, assignment, timelines, and cross-object relationships — including loading, empty, permission-denied, and error states.',
  'Established a practical component vocabulary (tables, filters, side panels, inline actions) so repeat patterns shipped consistently instead of as one-off frames.',
  'Ran structured handoff: naming, spacing, interaction notes, and breakpoint behaviour aligned with engineering before visual polish locked — reducing rework on data-heavy layouts.',
]

const CHALLENGES = [
  'Multiple professional identities in one product — engineering, support, and product leadership each expect familiar mental models without fragmenting the shell.',
  'High-density operational UI: many entities, links, and states visible at once; the risk is cognitive overload or a flat wall of tables.',
  'Speed vs clarity — expert users want keyboard-friendly density; newer users still need discoverable entry points and recoverable mistakes.',
  'Keeping a growing surface area coherent as modules expand (notifications, search, admin) without breaking the IA story.',
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & role mapping',
    description:
      'Workshops and async review of existing flows, support transcripts, and engineering workflows. Mapped primary personas, permission boundaries, and the minimum viable journeys for each role before touching layout.',
    tools: ['Workshops', 'FigJam', 'Product analytics'],
  },
  {
    number: '02',
    title: 'IA & navigation shell',
    description:
      'Defined the global structure: where work lives vs org settings, how deep links behave, and how context (workspace, customer, object) is preserved when users switch areas. Prototyped navigation variants for validation with internal stakeholders.',
    tools: ['Figma', 'Prototypes', 'IA diagrams'],
  },
  {
    number: '03',
    title: 'Flows for operational work',
    description:
      'Detailed flows for triage, assignment, comments, and cross-team handoffs — with explicit states for async collaboration. Focused on scannable lists, predictable actions, and reducing clicks on the highest-frequency paths.',
    tools: ['User flows', 'State diagrams', 'Figma'],
  },
  {
    number: '04',
    title: 'Design system & component specs',
    description:
      'Built and extended shared patterns for tables, filters, drawers, and inline edits so engineering could compose screens from documented building blocks. Documented spacing, focus order, and responsive collapse rules where density met small viewports.',
    tools: ['Components', 'Variants', 'Documentation'],
  },
  {
    number: '05',
    title: 'Handoff & implementation partnership',
    description:
      'Synced with engineering on edge cases, real data volume, and performance constraints. Reviewed builds in staging, filed concrete deltas (not vague “doesn’t match”), and closed the loop before release candidates.',
    tools: ['GitHub', 'Staging QA', 'Design QA'],
  },
]

const DECISIONS = [
  {
    title: 'One shell, many hats',
    body: 'Rather than siloing “support app” vs “dev app”, the shell reflects shared objects and permissions — so a user with multiple responsibilities does not mentally reboot when they change task.',
  },
  {
    title: 'Progressive disclosure on dense rows',
    body: 'Primary tables stay scannable; secondary metadata and actions move into panels or overflow menus so experts get depth without forcing every column into the default grid.',
  },
  {
    title: 'System-first for anything repeated twice',
    body: 'Any pattern that appeared on more than one surface was pulled into the component file — reducing drift between modules and shrinking the surface area engineering had to interpret from scratch.',
  },
]

const OUTCOMES = [
  'Clear IA and navigation model documented for engineering — fewer ad-hoc routing decisions during implementation.',
  'Reusable UI vocabulary across operational modules, improving consistency and shrinking design debt on new features.',
  'Flows that explicitly cover async collaboration states, reducing ambiguity in handoff for edge cases.',
  'Tighter design–engineering loop on dense layouts before launch, with actionable QA notes instead of screenshot-only feedback.',
]

export default function DevRevCaseStudy() {
  return (
    <main>
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
        eyebrow="Case Study / Product & system"
        title={
          <>
            DevRev —
            <br />
            Developer tools
            <br />
            <span className="accent-gradient-text">platform.</span>
          </>
        }
        intro={
          <>
            End-to-end product design for a developer-focused platform that connects
            engineering, support, and product workflows — complex information architecture,
            multi-role dashboards, and a consistent component language across the
            product.
          </>
        }
        topRightLabel="2023"
      />

      <Section padding="sm">
        <Container size="wide">
          <CaseStudyMeta fields={META_FIELDS} className="mb-12" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-surface">
            <Image
              src="/work/devrev/cover.png"
              alt="DevRev — product overview"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </Container>
      </Section>

      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className={sectionEyebrowAccentClassName}>
                What I owned
              </p>
              <h2 className={cn(sectionHeadingClassName, 'mt-4')}>
                {titleWithAccentGradient('Senior product designer scope')}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-[1.75] text-muted lg:text-lg">
                DevRev sits at the intersection of{' '}
                <span className="text-foreground">work management</span> and{' '}
                <span className="text-foreground">customer-facing operations</span>
                — the design challenge was to keep expert users fast while preserving a
                coherent model of customers, work items, and ownership as the product
                grew.
              </p>
              <ul className="mt-8 space-y-4 pt-8">
                {ROLE_POINTS.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-[1.65] text-muted lg:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className={sectionEyebrowAccentClassName}>
                Project context
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className={sectionLeadClassName}>
                Teams needed one place to see work, customer context, and handoffs —
                without turning the product into a generic ticket bucket.
              </p>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                The work spanned structuring how users enter and move through the product,
                how lists and detail panels relate, and how shared components behave under
                real data load. Success meant engineering could implement from repeatable
                patterns and stakeholders could reason about the same map of the system.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                The challenge
              </p>
              <h2 className={sectionHeadingClassName}>
                Density
                <br />
                without
                <br />
                <span className="text-accent">chaos.</span>
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

      <Section padding="lg">
        <Container size="wide">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                Process
              </p>
              <h2 className={sectionHeadingClassName}>
                How the
                <br />
                work ran
                <br />
                <span className="text-accent block w-fit">end to end.</span>
              </h2>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                From discovery through design system and build partnership — the same
                sequence I use on large SaaS surfaces: align on who and why, lock
                structure, then iterate on density and edge cases with engineering in the
                loop.
              </p>
            </div>
          </div>

          <ul>
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.number}
                className="group relative grid grid-cols-12 gap-4 py-12 lg:gap-12 lg:py-16"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />
                <span className={monoIndexAccentPaddedClassName}>
                  {step.number}
                </span>
                <div className="col-span-10 sm:col-span-5">
                  <h3 className={sectionSubheadingClassName}>
                    {titleWithAccentGradient(step.title, {
                      leadClassName:
                        'transition-colors duration-300 group-hover:text-accent',
                    })}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <p className="text-base leading-[1.7] text-muted lg:text-lg">
                    {step.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.tools.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-surface px-3 py-1 font-mono text-[12px] uppercase tracking-[0.18em] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                Decisions
              </p>
              <h2 className={sectionHeadingClassName}>
                Structure
                <br />
                <span className="text-accent block w-fit">before pixels.</span>
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

      <Section padding="lg">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                Outcome
              </p>
              <h2 className={sectionHeadingClassName}>
                Ready to
                <br />
                <span className="text-accent">ship &amp; extend.</span>
              </h2>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                Deliverables centred on a stable IA story and a component language teams
                could extend — so new modules plugged into the same rules instead of
                inventing parallel UI.
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

      <DevRevUIScreens />

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
              href="/work/originchains"
              className="text-foreground hover:text-accent"
            >
              Next: OriginChains
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
