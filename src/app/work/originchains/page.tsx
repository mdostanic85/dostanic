import type { Metadata } from 'next'
import Image from 'next/image'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import CaseStudyShell, {
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import DecisionBlock, {
  DecisionSection,
  type Decision,
} from '@/components/work/case-study/DecisionBlock'
import StructureCompare from '@/components/work/case-study/StructureCompare'
import {
  CaseComplication,
  CaseOutcome,
  CaseProblem,
  CaseReflection,
  CaseRole,
} from '@/components/work/case-study/CaseNarrative'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

const nav = getCaseStudyNav('originchains')

export const metadata: Metadata = {
  title: 'OriginChains — Climate Company Discovery',
  description:
    'How I separated three competing contexts in a B2B climate product, built one repeatable module for company data, and made the architecture absorb admin and visibility modes later.',
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

/** Figure frame shared by the two real screens in this case. */
function Screen({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string
  alt: string
  caption: string
  priority?: boolean
}) {
  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden border border-stroke bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {caption}
      </figcaption>
    </figure>
  )
}

const DECISIONS: Decision[] = [
  {
    title: 'Separate personal, company, and administrative space',
    tension:
      'Three contexts were competing for the same navigation. A person has their own identity and activity. A company is a shared workspace several people act inside. Administration governs both. While they lived together, “Profile” could mean your account or a company page, and “Settings” could mean your preferences or a company’s visibility — so the same word did different work depending on where you had come from.',
    options: [
      {
        label: 'Keep one navigation and switch meaning by context',
        note: 'Every label then needs a qualifier to be correct, and the ambiguity moves into the copy instead of being resolved.',
      },
      {
        label: 'Drive navigation from the user’s role',
        note: 'The same person is often a member and an administrator. The navigation would reorganise itself under them mid-session.',
      },
      {
        label: 'Three explicit spaces — you, the company, administration',
        chosen: true,
      },
    ],
    reasoning:
      'The ambiguity was structural, not a labelling problem, so renaming things would only have hidden it. Once the three contexts are separate spaces, each label only has to be correct inside its own space.',
    tradeoff:
      'A deliberate switch between spaces. Moving from your own activity into a company workspace costs a step it did not cost before, and that step had to be designed rather than assumed.',
    enabled:
      'Administration, privacy controls, and public versus private profile modes were all added afterwards without reopening navigation, because each one had an obvious place to land.',
    visual: (
      <StructureCompare
        before={{
          label: 'Before',
          caption:
            'One flat surface. Two entries mean different things depending on where the user arrived from.',
          nodes: [
            { label: 'Profile', problem: 'means two things' },
            { label: 'Settings', problem: 'means two things' },
            { label: 'Companies' },
            { label: 'Search' },
            { label: 'Admin' },
          ],
        }}
        after={{
          label: 'After',
          caption:
            'Three spaces. A label only has to be unambiguous inside its own space.',
          nodes: [
            { label: 'You', children: ['Profile', 'Activity', 'Preferences'] },
            {
              label: 'Company',
              children: ['Company profile', 'Members', 'Visibility'],
            },
            { label: 'Administration', children: ['Roles', 'Access'] },
          ],
        }}
        consequence="Because visibility belonged to the company space rather than to a shared settings page, public and private profile modes could be introduced as a property of a company instead of as a new top-level concept."
      />
    ),
  },
  {
    title: 'One repeatable module for every company section',
    tension:
      'A company profile mixes narrative, scores, charts, and methodology. Each section arrived with a different shape of data, and the instinct is to design each one to suit what it holds. Done that way, the reading order changes every few hundred pixels — and in a product whose entire job is credibility, a reader who has to relearn the layout stops trusting what it says.',
    options: [
      {
        label: 'Design each section around its own data',
        note: 'No two sections scan the same way, so the page has no rhythm and the sceptical reader has to work.',
      },
      {
        label: 'Show less per company to keep the page simple',
        note: 'Methodology and sources are what earn trust here. Removing them makes the page calmer and the product weaker.',
      },
      {
        label: 'One skeleton every section fills, in a fixed order',
        chosen: true,
      },
    ],
    reasoning:
      'Every section resolves the same way: title, status, a short explanation, a chart or checklist, then methodology and sources underneath. The answer is always in the same place and the evidence is always one step below it, so scepticism costs the reader less each time.',
    tradeoff:
      'Some sections carry a slightly heavier frame than their data strictly needs. A one-number section still gets the full skeleton.',
    enabled:
      'New profile sections could be added without new design work, and dense climate metrics stayed scannable because the reading order never moved.',
  },
  {
    title: 'Search before taxonomy on the landing page',
    tension:
      'The landing page had to introduce a category most visitors have no vocabulary for. Explaining the taxonomy first is the intuitive move — and it means a visitor has to learn the model before they are allowed to do anything with it.',
    options: [
      {
        label: 'Explain the category first, then offer search',
        note: 'Teaches before it lets anyone act, and most visitors leave during the lesson.',
      },
      {
        label: 'Lead with a browsable directory',
        note: 'Implies the taxonomy is the product, which is the thing we were trying not to say.',
      },
      { label: 'Lead with one search field and plain proof points', chosen: true },
    ],
    reasoning:
      'Understanding the action is cheaper than understanding the taxonomy. One search teaches the model faster than a paragraph about it, and the result page can carry the explanation to someone who has already shown intent.',
    tradeoff:
      'Visitors who genuinely need the category explained have to scroll for it. The page is confident that acting beats being taught.',
    enabled:
      'One entry point serves both the sceptic and someone who arrived with a company name in mind, and marketing and product share the same search component rather than maintaining two.',
    visual: (
      <Screen
        src="/work/originchains/cover.png"
        alt="OriginChains landing page leading with a single search field"
        caption="Landing — search before taxonomy"
        priority
      />
    ),
  },
  {
    title: 'Build the shared layer before the screens that needed it',
    tension:
      'The product had two rhythms: a simple marketing story on the public side and a dense signed-in application behind it. The normal sequence is to design the marketing site, then the app, then reconcile them — and reconciliation is usually where the quality of one of them goes.',
    options: [
      {
        label: 'Design each surface, then reconcile',
        note: 'Either the app inherits decisions made for a landing page, or the two quietly drift into different products.',
      },
      {
        label: 'Apply one visual theme across both',
        note: 'A paint layer. It matches colours without making the two surfaces agree on behaviour.',
      },
      {
        label: 'Shared controls, navigation, and feedback both surfaces consume',
        chosen: true,
      },
    ],
    reasoning:
      'The two surfaces disagree about density, not about what a button, a field, or a toast is. Sharing the behaviour layer and letting density differ keeps them recognisably one product.',
    tradeoff:
      'A slower visible start. Foundations produce no screenshots, which is uncomfortable in the first weeks of an engagement.',
    enabled:
      'Engineering implemented the hardest pages from existing patterns instead of from interpretation, and acquisition pages hold the same quality bar as the signed-in product.',
    visual: (
      <Screen
        src="/work/originchains/screen-feed.png"
        alt="OriginChains activity feed on the signed-in product surface"
        caption="Activity feed — the signed-in surface, same component vocabulary"
      />
    ),
  },
]

export default function OriginChainsCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Product architecture"
      title={
        <>
          OriginChains
          <br />
          <span className="accent-gradient-text">climate company discovery.</span>
        </>
      }
      intro={
        <>
          A B2B product for finding climate-credible companies — where the hard
          part was not the interface, but deciding which concepts were allowed to
          share a space.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="People will act on climate data, but only if they can see what is behind each claim."
          body="OriginChains sits in a crowded green-tech narrative, so the work was product clarity rather than visual polish: make discovery legible, keep scores and methodology grounded in visible evidence, and keep a fast-growing web app navigable while the team iterated toward launch."
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseRole
          summary="I owned the product structure and the system underneath it."
          points={[
            'Owned information architecture and navigation across both the public and signed-in shells, so growth and product surfaces did not fork into two products.',
            'Designed the primary flows end to end: search, company onboarding, profile and administration settings, public versus private profile modes, and feed interactions — including empty, loading, and error states.',
            'Built the component system — inputs, buttons, navigation, feedback — so engineering implemented from consistent patterns instead of one-off specs.',
            'Set the handoff contract: component naming, spacing, interaction notes, and agreed breakpoints for the data-heavy layouts before visual polish locked.',
          ]}
          collaborators="Product direction and the underlying climate methodology came from the client team. The structural and interface decisions described below were mine."
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseProblem
          lead="Credibility had to survive a sceptical reader and a growing product at the same time."
          points={[
            'Climate and ESG claims invite scepticism, so the product had to read as evidence rather than as marketing.',
            'One product carried two rhythms: a simple public story, and a dense signed-in experience for search, profiles, and activity.',
            'Company profiles mix narrative, scores, charts, and methodology — and still have to answer the question the visitor arrived with.',
            'Familiar social patterns — post, comment, edit, delete — had to coexist with dense data surfaces without either one feeling borrowed.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseComplication
          statement="Halfway through, the product stopped being about one person looking up a company."
          body="The role surface kept growing. The same person might be a private individual, a member of a company workspace, and an administrator of that workspace — sometimes within one session. Auth, administration, and privacy each arrived with their own settings, and every one of them wanted a place in a navigation that was already ambiguous. Renaming things would not have fixed it, because the problem was that unrelated concepts were sharing a space."
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <DecisionSection
          title="Four decisions the product depended on."
          intro="Each one had a real alternative, and each one cost something. The rejected options are shown because they are the reason the chosen direction was worth the trade-off."
        >
          {DECISIONS.map((decision, index) => (
            <DecisionBlock key={decision.title} decision={decision} index={index} />
          ))}
        </DecisionSection>
      </CaseStudySection>

      <CaseStudySection>
        <CaseOutcome
          points={[
            'Engineering built the hardest pages from patterns rather than interpretation, because charts, modules, and states were designed as a system instead of as isolated artboards.',
            'Public and signed-in surfaces stopped drifting apart — both draw on the same component vocabulary.',
            'Administration, privacy, and visibility modes were added without reopening navigation, because the architecture had already separated personal, company, and administrative space.',
            'Desktop journeys were covered end to end — landing, auth, feed, search, company profile variants, administration, and public/private modes — with a parallel mobile set for parity review.',
          ]}
          aside={
            <>
              <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-accent">
                Scope of this case
              </p>
              <p className="mt-4 text-base leading-[1.75] text-muted sm:text-[18px]">
                My engagement covered product design and system delivery through
                engineering handoff. Commercial results after launch sit with the
                client and are not claimed here.
              </p>
            </>
          }
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseReflection
          items={[
            {
              label: 'What I would improve',
              body: 'The profile skeleton earns its keep on data-rich companies and feels heavy on thin ones. It needs a genuine compact state, not just fewer sections.',
            },
            {
              label: 'What it taught me',
              body: 'In a trust product, a reading order that never moves does more for credibility than any amount of visual polish.',
            },
            {
              label: 'What I would test next',
              body: 'Whether people actually move between personal and company space, or settle into one and forget the other exists.',
            },
          ]}
        />
      </CaseStudySection>
    </CaseStudyShell>
  )
}
