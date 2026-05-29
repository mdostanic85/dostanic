import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import CaseStudyScreens from '@/components/work/case-study/CaseStudyScreens'
import CaseStudySystemNote from '@/components/work/case-study/CaseStudySystemNote'
import CaseStudyAIWorkflow from '@/components/work/case-study/CaseStudyAIWorkflow'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import { sectionEyebrowAccentClassName } from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'
import { buildProcessSteps, DEFAULT_AI_STEPS } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'OriginChains — Climate Company Discovery · Milos Dostanic',
  description:
    'OriginChains product design — trust-heavy discovery UX, climate data surfaces, and Figma system handoff.',
}

const nav = getCaseStudyNav('originchains')

const META = [
  { label: 'Product', value: 'OriginChains' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Senior product designer' },
  { label: 'Domain', value: 'Climate · B2B SaaS' },
  { label: 'Focus', value: 'Trust · flows · system' },
]

export default function OriginChainsCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Climate SaaS"
      title={
        <>
          OriginChains —
          <br />
          <span className="accent-gradient-text">company discovery.</span>
        </>
      }
      intro={
        <>
          B2B climate intelligence — discovery, trust-heavy company data, social feed, and
          a Figma system aligned to engineering delivery.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Users want to act on climate, but only if they can trust the signal behind each company."
          body="I owned IA, primary flows, and a practical design system in Figma — landing through signed-in profiles, search, feed, and admin. Marketing and product surfaces share components so quality and handoff stay predictable."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Trust at a glance"
          responseTitle="Clarity through structure"
          problems={[
            'Climate and ESG topics invite scepticism — the product must read credible, not promotional',
            'Two rhythms: simple marketing story vs dense signed-in search, profiles, and activity',
            'Company profiles mixing narrative, scores, and methodology without burying the answer',
            'Social feed patterns that must stay on-brand with the rest of the system',
          ]}
          solutions={[
            'Search-first landing with plain-language proof before taxonomy depth',
            'IA grouped by people vs organisations — fewer duplicate entry points',
            'Repeatable modules for company data pages — scannable sections and sources',
            'Foundations file (controls, nav, toasts) consumed by marketing and app frames',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Framed who we help, what “trust” means in UI, and which journeys ship first.',
            'Navigation across marketing and signed-in shells — no forked products.',
            'Search, onboarding, profiles, feed, and admin flows with empty, loading, and error states.',
            'Inputs, buttons, navigation, and feedback as reusable Figma components.',
            'Handoff naming, spacing, and breakpoint notes aligned with engineering early.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          title="Frames that prove the system"
          intro="Single Figma frame exports — each tied to a UX decision, not a stitched gallery."
          screens={[
            {
              src: '/work/originchains/cover.png',
              alt: 'OriginChains landing page',
              caption: 'Landing & search entry',
              decision:
                'Hero leads with one search field and proof points — action before taxonomy.',
            },
            {
              src: '/work/originchains/screen-feed.png',
              alt: 'OriginChains activity feed',
              caption: 'Activity feed',
              decision:
                'Familiar social patterns with system components — on-brand with discovery surfaces.',
            },
            {
              alt: 'Search results with filters',
              caption: 'Search & compare',
              placeholderLabel: 'Search results — expanded cards, filters & compare',
              decision:
                'Highest-density UI structured as modules — placeholder until clean frame export is wired.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          paragraphs={[
            'Foundations live in a dedicated area so marketing and app frames pull from the same components — predictable for QA and development.',
            'Profile sections share a skeleton: title, status, explanation, chart or checklist, then methodology affordances.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Faster iteration on dense pages')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro={
            <>
              AI helped structure stakeholder notes and draft handoff comments for data-heavy
              pages — I edited outputs before they reached engineering.
            </>
          }
          steps={DEFAULT_AI_STEPS}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          Figma coverage for desktop and mobile journeys, shared vocabulary across acquisition
          and product surfaces, and clearer handoff on data-heavy pages — designed as a system,
          not isolated artboards.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
