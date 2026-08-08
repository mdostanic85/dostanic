import type { Metadata } from 'next'
import Image from 'next/image'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import { sectionEyebrowAccentClassName } from '@/lib/headings'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

const nav = getCaseStudyNav('originchains')

export const metadata: Metadata = {
  title: 'OriginChains — Climate Company Discovery',
  description:
    'Senior product design for OriginChains — discovery UX, trust-heavy company data, activity feed, and a component system aligned to engineering delivery.',
  alternates: { canonical: '/work/originchains' },
}

const META = [
  { label: 'Type', value: 'Client work' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Senior product designer' },
  { label: 'Domain', value: 'Climate · B2B SaaS' },
  { label: 'Scope', value: 'IA · flows · UI · design system' },
  { label: 'Output', value: 'Design delivery · engineering handoff' },
]

const ROLE_POINTS = [
  'Framed the problem with product and stakeholders — who we help, what "trust" means in the interface, and which journeys had to ship first.',
  'Owned information architecture and navigation across the marketing and signed-in shells, so growth and product surfaces did not fork into two products.',
  'Designed the primary flows end to end: search, company onboarding, profile and admin settings, public versus private profile modes, and feed interactions, including empty, loading, and error states.',
  'Built the component system — inputs, buttons, navigation, feedback — so engineers implemented from consistent patterns instead of one-off specs.',
  'Prepared handoff with component naming, spacing, and interaction notes, and agreed breakpoints and data-heavy layouts with engineering before visual polish locked.',
]

const CHALLENGES = [
  'Earn trust quickly. Climate and ESG topics invite scepticism, so the product had to read as credible rather than promotional.',
  'One product with two rhythms: a simple marketing story on the landing page, and a dense signed-in experience for search, profiles, and activity.',
  'Company profiles that mix narrative, scores, charts, and methodology without burying the answer the user came for.',
  'Social feed patterns — post, comment, edit, delete — that feel familiar while staying coherent with the rest of the system.',
  'A growing role surface across auth, admin, and privacy that still had to read as one information architecture.',
]

const DECISIONS = [
  {
    title: 'Search-first story on the landing page',
    body: 'The hero leads with a single search field and plain proof points, so a first-time visitor understands the action before they understand the taxonomy.',
  },
  {
    title: 'Navigation split by people and organisations',
    body: 'Personal profile, company spaces, and administration are separated, which removed duplicate entry points as the product added admin and visibility modes.',
  },
  {
    title: 'One repeatable module for company data',
    body: 'Every profile section shares a skeleton: title, status, short explanation, chart or checklist, then methodology and sources. Dense climate metrics stay scannable because the reading order never changes.',
  },
  {
    title: 'System foundations before screen one-offs',
    body: 'Controls, top bar, and toasts live in a dedicated file area that marketing and app frames both consume, which kept QA and implementation predictable as the surface grew.',
  },
]

const OUTCOMES = [
  'Engineering could build the hardest pages from patterns rather than interpretation, because charts, modules, and states were designed as a system rather than as isolated artboards.',
  'Marketing and product surfaces stopped drifting apart — both pull from the same component vocabulary, so acquisition pages hold the same quality bar as the signed-in app.',
  'The team could add admin, privacy, and visibility modes without re-opening navigation, because the IA had already separated personal, company, and administrative space.',
  'Desktop journeys were covered end to end — landing, auth, feed, search, company profile variants, admin, and public/private modes — with a parallel mobile set for parity review.',
]

export default function OriginChainsCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Product & system"
      title={
        <>
          OriginChains
          <br />
          <span className="accent-gradient-text">climate company discovery.</span>
        </>
      }
      intro={
        <>
          A B2B product for finding climate-credible companies, from the public
          landing and search entry points through signed-in profiles, activity,
          and governance flows.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Users want to act on climate, but only if they can trust the signal behind each company."
          body="OriginChains sits in a crowded green-tech narrative, so the design work was product clarity rather than visual polish: make discovery legible, make scores and methodology feel grounded, and keep a growing web app navigable while the team iterated toward launch."
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className={sectionEyebrowAccentClassName}>What I owned</p>
            <h2 className="display-tight mt-5 max-w-[14ch] text-3xl font-medium sm:text-4xl">
              Senior product designer scope.
            </h2>
          </div>
          <ul className="space-y-5 lg:col-span-7 lg:col-start-6">
            {ROLE_POINTS.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-base leading-[1.7] text-muted lg:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>Selected screens</p>
          <h2 className="display-tight mt-4 text-2xl font-medium sm:text-3xl">
            Landing and activity feed.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted lg:text-lg">
            Social and activity patterns had to feel familiar while staying
            coherent with the denser signed-in product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <figure className="space-y-3">
            <div className="relative aspect-[16/10] overflow-hidden border border-stroke bg-surface">
              <Image
                src="/work/originchains/cover.png"
                alt="OriginChains landing page with search-first hero"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <figcaption className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
              Landing — search before taxonomy
            </figcaption>
          </figure>

          <figure className="space-y-3">
            <div className="relative aspect-[16/10] overflow-hidden border border-stroke bg-surface">
              <Image
                src="/work/originchains/screen-feed.png"
                alt="OriginChains activity feed on the signed-in product surface"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
              Activity feed — signed-in surface
            </figcaption>
          </figure>
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className={sectionEyebrowAccentClassName}>The challenge</p>
            <h2 className="display-tight mt-5 text-3xl font-medium sm:text-4xl">
              Trust,
              <br />
              <span className="text-accent">at a glance.</span>
            </h2>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {CHALLENGES.map((item, idx) => (
              <li key={item} className="flex items-start gap-5 border-b border-stroke py-5 last:border-b-0">
                <span className="mt-1 font-mono text-[12px] tracking-[0.22em] text-accent">
                  /{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-base leading-[1.65] text-muted lg:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className={sectionEyebrowAccentClassName}>Decisions</p>
            <h2 className="display-tight mt-5 max-w-[12ch] text-3xl font-medium sm:text-4xl">
              Systemic, not decorative.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {DECISIONS.map((decision, index) => (
              <article key={decision.title} className="border-t border-stroke pt-5">
                <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="display-tight mt-4 text-xl font-medium">
                  {decision.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted">
                  {decision.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <CaseStudyOutcome>
              <ul className="space-y-5">
                {OUTCOMES.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CaseStudyOutcome>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-accent">
              Scope of this case
            </p>
            <p className="mt-4 text-sm leading-[1.75] text-muted sm:text-base">
              My engagement covered product design and system delivery through
              engineering handoff. Commercial results after launch sit with the
              client and are not claimed here.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
