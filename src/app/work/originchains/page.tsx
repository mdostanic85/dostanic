import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import CaseStudyMeta from '@/components/work/CaseStudyMeta'
import ImagePlaceholder from '@/components/work/ImagePlaceholder'
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
  title: 'OriginChains — Climate Company Discovery · Milos Dostanic',
  description:
    'Senior product design for OriginChains — discovery UX, trust-heavy company data, social feed, and a Figma design system aligned to engineering delivery.',
}

const META_FIELDS = [
  { label: 'Product', value: 'OriginChains' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Senior product designer' },
  { label: 'Domain', value: 'Climate · B2B SaaS' },
  { label: 'Stack', value: 'Figma · variables · components' },
  { label: 'Output', value: 'Flows · UI · system · handoff' },
]

const ROLE_POINTS = [
  'Framed the problem with product and stakeholders — who we help, what “trust” means in UI, and which journeys had to ship first.',
  'Owned information architecture and navigation across marketing and signed-in app shells so growth and product surfaces did not fork into two products.',
  'Designed primary flows end-to-end in Figma: search, company onboarding, profile and admin settings, public vs private profile modes, and feed interactions — including empty, loading, and error states.',
  'Built a practical design system (inputs, buttons, navigation, feedback) so engineers could implement from consistent patterns instead of one-off specs.',
  'Prepared handoff with component naming, spacing, and interaction notes; aligned with dev on breakpoints and data-heavy layouts before visual polish locked.',
]

const CHALLENGES = [
  'Earn trust quickly — climate and ESG topics invite scepticism; the product had to read as credible, not promotional.',
  'One product with two rhythms: a simple marketing story on the landing page, and a dense signed-in experience for search, profiles, and activity.',
  'Company profiles that mix narrative, scores, charts, and methodology without burying the answer a user came for.',
  'Social feed patterns (post, comment, edit, delete) that feel familiar while staying on-brand with the rest of the system.',
  'Growing role surface (auth, admin, privacy) that still feels like one coherent IA.',
]

const DECISIONS = [
  {
    title: 'Search-first story on the landing page',
    body: 'The hero leads with a single search field and plain-language proof points (free scores, real data, no fluff) so first-time visitors understand the action before they understand the taxonomy.',
  },
  {
    title: 'IA grouped by “people” vs “organisations”',
    body: 'Navigation separates personal profile, company spaces, and administration — reducing duplicate entry points as the product added admin and visibility modes.',
  },
  {
    title: 'Repeatable modules for company “data” pages',
    body: 'Profile sections share a common skeleton — title, status, short explanation, chart or checklist, then methodology/source affordances — so dense climate metrics stay scannable.',
  },
  {
    title: 'System canvas before screen one-offs',
    body: 'Foundations (controls, top bar, toasts) live in a dedicated file area so marketing and app frames pull from the same components, which keeps QA and dev implementation predictable.',
  },
]

const OUTCOMES = [
  'Figma coverage for desktop journeys: landing, auth, feed, search, company profile variants, admin, and public/private profile modes — plus a parallel mobile set for parity review.',
  'A shared component vocabulary reused across acquisition and product surfaces, reducing drift between “marketing” and “app” quality.',
  'Clearer handoff for engineering: fewer ambiguous layouts on data-heavy pages because charts, modules, and states were designed as a system rather than as isolated artboards.',
]

export default function OriginChainsCaseStudy() {
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
            OriginChains —
            <br />
            Climate company
            <br />
            <span className="accent-gradient-text">discovery.</span>
          </>
        }
        intro={
          <>
            B2B web product for discovering climate-friendly companies — from the public
            landing and search entry points through signed-in profiles, activity, and
            governance flows. Each screen below is a{' '}
            <strong className="font-medium text-foreground">single Figma frame export</strong>{' '}
            (no stitched artboards).
          </>
        }
        topRightLabel="2025"
      />

      <Section padding="sm">
        <Container size="wide">
          <CaseStudyMeta fields={META_FIELDS} className="mb-12" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-surface">
            <Image
              src="/work/originchains/cover.png"
              alt="OriginChains — landing page (single frame)"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
            Source file —{' '}
            <a
              href="https://www.figma.com/design/6IPIMKih4iNN63d9lmOIcF/OriginChains-Web-App?node-id=2807-2666"
              className="text-accent underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              OriginChains Web App (Figma)
            </a>
          </p>
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
                OriginChains sits in a crowded “green tech” narrative — the design job was
                not only visual polish but{' '}
                <span className="text-foreground">product clarity</span>: make discovery
                legible, make scores and methodology feel grounded, and keep a growing web
                app navigable while the team iterated toward launch.
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
          <div className="mb-10 max-w-3xl">
            <p className={sectionEyebrowAccentClassName}>
              Selected screens
            </p>
            <h2 className={sectionHeadingClassName}>
              {titleWithAccentGradient('Feed — and the densest surface as a placeholder')}
            </h2>
            <p className="mt-6 text-base leading-[1.7] text-muted lg:text-lg">
              The activity feed is a single exported frame. The heaviest layout — search
              with expanded cards, filters, and comparison — stays a placeholder here
              until a clean single-frame export is wired in (that artboard is the one most
              likely to need a dedicated crop for the portfolio).
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <figure className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-surface">
                <Image
                  src="/work/originchains/screen-feed.png"
                  alt="OriginChains — activity feed (single frame)"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                Activity feed / Activity — one frame
              </figcaption>
            </figure>

            <figure className="space-y-3">
              <ImagePlaceholder
                label="Search results v2 — expanded cards, filters & compare"
                aspectClass="aspect-[4/3]"
                footnote=""
              />
              <figcaption className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
                Highest-density UI — placeholder (multi-panel search grid)
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

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
                Users want to act on climate, but only if they can trust the signal behind
                each company.
              </p>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                The Figma file maps the whole web app: marketing landing, authentication,
                global search, company creation, deep company profiles (including
                performance and data-heavy modules), personal and organisation areas,
                public vs private profile states, and admin settings — with a design system
                for inputs, navigation, and feedback that both marketing and product frames
                consume.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                The challenge
              </p>
              <h2 className={sectionHeadingClassName}>
                Trust,
                <br />
                <span className="text-accent">at a glance.</span>
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
                  <span className="text-base leading-[1.65] text-muted lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
                Systemic,
                <br />
                <span className="text-accent block w-fit">not decorative.</span>
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
                Ready for
                <br />
                <span className="text-accent">build &amp; iteration.</span>
              </h2>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                The file is structured so design and engineering can iterate in lockstep —
                fewer ambiguous one-offs on the hardest pages, and a shared language for
                everything else.
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-6 lg:col-start-7 lg:pt-2">
              {OUTCOMES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 pb-5"
                >
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-base leading-[1.6] text-foreground lg:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section padding="sm" className="bg-surface/40">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className={navRelatedLinkClassName}
            >
              <span aria-hidden="true">←</span> All work
            </Link>
            <ArrowLink href="/work/soundscope" className="text-foreground hover:text-accent">
              Next: SoundScope
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
