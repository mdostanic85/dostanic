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
  title: 'DevRev | Developer Tools Platform',
  description:
    'DevRev product design covering multi-role information architecture, operational UI, reusable patterns, and engineering collaboration.',
  alternates: { canonical: '/work/devrev' },
}

const nav = getCaseStudyNav('devrev')

const META = [
  { label: 'Type', value: 'Client work' },
  { label: 'Year', value: '2023' },
  { label: 'Role', value: 'Senior product designer' },
  { label: 'Domain', value: 'Developer tools · B2B SaaS' },
  { label: 'Ownership', value: 'IA · flows · UI system · handoff' },
  { label: 'Collaboration', value: 'Product · engineering' },
]

export default function DevRevCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Product & system"
      title={
        <>
          DevRev —
          <br />
          <span className="accent-gradient-text">developer platform.</span>
        </>
      }
      intro={
        <>
          Product design for a developer-centric platform — engineering, support, and
          product workflows in one shell, with shared components and implementation-aware
          handoff.
        </>
      }
      topRightLabel="2023"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Teams needed one place to see work, customer context, and handoffs — without turning the product into a generic ticket bucket."
          body="I partnered with product and engineering on IA, dense operational surfaces, and a component vocabulary that could scale as modules grew. The work below follows problem → process → proof → system → AI handoff."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Many roles, one product"
          responseTitle="One shell, shared objects"
          problems={[
            'Engineering, support, and product leadership each expect familiar mental models without fragmenting the shell',
            'High-density UI — many entities and states visible at once; risk of cognitive overload',
            'Expert users want speed; newer users still need discoverable entry points',
            'Growing surface area (search, admin, notifications) threatening IA coherence',
          ]}
          solutions={[
            'Single navigation model across work tracking, conversations, and org settings',
            'Tables and panels with progressive disclosure — scannable rows, depth on demand',
            'Shared component vocabulary for filters, drawers, and inline actions',
            'Documented flows including loading, empty, permission, and error states',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Workshops and async review — personas, permissions, and jobs-to-be-done per role.',
            'Global structure: where work lives vs settings, deep links, preserved context.',
            'Triage, assignment, comments, and handoffs with explicit async collaboration states.',
            'Tables, filters, drawers documented with spacing, focus order, and responsive rules.',
            'Staging QA with concrete deltas — not vague “doesn’t match” feedback.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Representative surfaces for role selection, overview, and operational work."
          screens={[
            {
              src: '/work/devrev/cover.png',
              alt: 'DevRev product overview',
              caption: 'Platform overview',
              decision:
                'One shell for multiple professional identities — shared objects and permissions, not separate apps.',
            },
            {
              src: '/work/devrev/screens/Solution-overview.png',
              alt: 'Solution overview dashboard',
              caption: 'Solution overview',
              decision:
                'Hierarchy for status, ownership, and next actions — dense data without a flat wall of tables.',
            },
            {
              src: '/work/devrev/screens/Tasks.png',
              alt: 'Task management interface',
              caption: 'Tasks & delivery',
              decision:
                'Row-level actions and panels keep experts fast while preserving scan-friendly defaults.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          paragraphs={[
            'Patterns repeated across more than one surface were pulled into the component file — reducing drift and shrinking what engineering had to interpret from scratch.',
            'Spacing, interaction notes, and breakpoint behaviour were aligned with engineering before visual polish locked on data-heavy layouts.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Handoff with less ambiguity')}
          </h2>
        </div>
        <CaseStudyAIWorkflow steps={DEFAULT_AI_STEPS} tools={['Cursor', 'Claude', 'Figma', 'GitHub']} />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          Documented IA and navigation for engineering, reusable UI vocabulary across modules,
          flows that cover async collaboration edge cases, and actionable design QA before
          launch — qualitative delivery goals, not claimed revenue metrics.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
