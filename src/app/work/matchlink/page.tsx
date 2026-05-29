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
  title: 'MatchLink — Real-Time Matchday Insights · Milos Dostanic',
  description:
    'MatchLink product design — live matchday streams, event timelines, and high-density views for analysts under time pressure.',
}

const META = [
  { label: 'Product', value: 'MatchLink' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Product design lead' },
  { label: 'Domain', value: 'Sports tech' },
  { label: 'Focus', value: 'Real-time · density' },
]

const nav = getCaseStudyNav('matchlink')

export default function MatchLinkCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Sports analytics"
      title={
        <>
          MatchLink —
          <br />
          <span className="accent-gradient-text">matchday insights.</span>
        </>
      }
      intro={
        <>
          Live matchday platform — real-time streams, event timelines, and high-density views
          for analysts and operations staff working under seconds of pressure.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Matchday decisions happen in seconds — the UI must stay legible when data refreshes constantly."
          body="I shaped real-time streams, event timelines, and operator layouts where partial data, delayed feeds, and overrides all need clear, calm affordances. Typography, status encoding, and spatial rhythm were tuned for speed, not decoration."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Live data, high stakes"
          responseTitle="Calm under refresh"
          problems={[
            'Feeds can lag or arrive out of order — the UI must not pretend certainty',
            'Analysts scan timelines while events still arrive',
            'Operators need override paths without breaking audit clarity',
            'Mobile and desktop operators share one product with different density needs',
          ]}
          solutions={[
            'Explicit staleness and partial-data states — never silent failure',
            'Timeline typography and colour encoding optimised for peripheral scanning',
            'Override flows with confirmation and visible audit trail in context',
            'Responsive breakpoints that preserve event priority, not just shrink columns',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Shadowed matchday operators — peak load, delays, and recovery workflows.',
            'Mapped event model to UI states — live, delayed, corrected, void.',
            'Explored timeline density in Figma with realistic event volume.',
            'Defined status tokens and motion restraint so refresh does not distract.',
            'Partnered with engineering on websocket-driven UI behaviour and empty paths.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Overview frame — timeline-first layout for live match context."
          screens={[
            {
              src: '/work/matchlink/cover.jpg',
              alt: 'MatchLink matchday insights dashboard',
              caption: 'Matchday overview',
              decision:
                'Timeline stays primary; supporting metrics defer to secondary panels so attention follows the match clock.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Real-time UI system"
          paragraphs={[
            'Status colours and icons map to feed health — live, delayed, corrected — not decorative categories.',
            'Components assume refresh: skeletons, optimistic rows, and rollback when corrections arrive.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Edge cases before matchday')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro="AI helped enumerate feed failure and correction scenarios — visual design and hierarchy stayed manual."
          steps={DEFAULT_AI_STEPS}
          tools={['Figma', 'Claude', 'Linear']}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          Operators get a matchday surface that respects uncertainty — faster scanning, clearer
          event priority, and patterns that hold up when the feed misbehaves.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
