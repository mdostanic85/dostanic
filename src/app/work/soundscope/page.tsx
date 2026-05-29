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
  title: 'SoundScope — Music Analytics Dashboard · Milos Dostanic',
  description:
    'SoundScope dashboard redesign — metric hierarchy, dark analyst UI, design system, and AI-assisted implementation collaboration.',
}

const nav = getCaseStudyNav('soundscope')

const META = [
  { label: 'Product', value: 'SoundScope' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Lead product designer' },
  { label: 'Domain', value: 'Music analytics' },
  { label: 'Focus', value: 'Dashboard · system · handoff' },
]

export default function SoundScopeCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Analytics"
      title={
        <>
          SoundScope —
          <br />
          <span className="accent-gradient-text">music analytics.</span>
        </>
      }
      intro={
        <>
          Redesign of a music analytics platform for labels and publishers — decision
          metrics, analyst-first UI, and a tokenized component system built with
          implementation in mind.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Teams were overwhelmed by fragmented reporting — slow decisions and low confidence in shared metrics."
          body="The goal was a system that answers: what is moving, why, and what’s next — not another chart wall. I led dashboard architecture, semantic tokens, and collaboration with engineering using Figma and code-side iteration."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Fragmented data, mixed audiences"
          responseTitle="Decision-first dashboard"
          problems={[
            'Data scattered across DSPs, ad platforms, and royalty systems',
            'Analysts need depth; executives need clarity — one product, two reading speeds',
            'High-density information risking cognitive overload',
            'Long reporting cycles delaying campaign adjustments',
          ]}
          solutions={[
            'Small set of decision metrics at the top; exploration in drill-down contexts',
            'Drill-down retains filter context from portfolio → artist → release',
            'Dark-first ergonomics, tokenised status colours, table density for long sessions',
            'Modular components so charts, tables, and filters evolve without visual drift',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Mapped analyst and executive jobs-to-be-done across catalog, campaigns, and revenue views.',
            'Defined hierarchy: what ships on the overview vs what lives in drill-down only.',
            'High-fidelity dark UI — contrast, type rhythm, and table behaviour for analysts.',
            'Semantic tokens and component variants documented for engineering.',
            'Cursor-assisted iteration on layout behaviour with real data volume in mind.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Overview frame showing metric hierarchy and analyst-first layout."
          screens={[
            {
              src: '/work/soundscope/cover.png',
              alt: 'SoundScope dashboard overview',
              caption: 'Dashboard overview',
              decision:
                'Decision metrics up front — deeper charts only in context, reducing noise for executive reviews.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Tokens & modular UI"
          paragraphs={[
            'Semantic tokens for surfaces, text, and status kept charts, tables, and filters aligned as features shipped.',
            'Component structure prioritised repeatable patterns over one-off chart compositions.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Figma + code iteration')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro={
            <>
              Used <span className="text-foreground">Cursor</span> alongside Figma to
              pressure-test dense layouts and handoff notes — AI accelerated exploration;
              design decisions stayed manual.
            </>
          }
          steps={DEFAULT_AI_STEPS}
          tools={['Figma', 'Cursor', 'Claude', 'GitHub']}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          Clearer reporting hierarchy, faster path from data review to action, and a reusable
          component system for future modules — qualitative improvements aimed at clarity and
          maintainability, not claimed percentage uplifts.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
