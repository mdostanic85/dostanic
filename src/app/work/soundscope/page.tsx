import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import CaseStudyScreens from '@/components/work/case-study/CaseStudyScreens'
import CaseStudySystemNote from '@/components/work/case-study/CaseStudySystemNote'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import { buildConceptSteps } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'SoundScope: Music Analytics Dashboard',
  description:
    'A self-directed concept asking whether one dashboard can serve a ten-second executive check and a two-hour catalog session without becoming a wall of charts.',
}

const nav = getCaseStudyNav('soundscope')

const META = [
  { label: 'Type', value: 'Concept · Portfolio case study' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Self-directed product design' },
  { label: 'Domain', value: 'Music analytics' },
  { label: 'Focus', value: 'Dashboard · system · handoff' },
]

export default function SoundScopeCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Exploration / Analytics"
      title={
        <>
          SoundScope
          <br />
          <span className="accent-gradient-text">music analytics.</span>
        </>
      }
      intro={
        <>
          A self-directed concept for labels and publishers: the same dashboard has
          to survive a ten-second executive check and a two-hour catalog session
          without collapsing into a wall of charts.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
      links={[{
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/235878795/SoundScope-Music-Analytics-Dashboard-Redesign',
      }]}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The design question was how one dashboard could serve quick executive reviews and detailed catalog analysis without becoming a chart wall."
          body="I treated fragmented music data, mixed reading speeds, and long analysis sessions as assumptions for the exercise. The concept has not been validated with users or shipped in production."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Fragmented data, mixed audiences"
          responseTitle="Decision-first dashboard"
          problems={[
            'The concept assumes data arrives from DSPs, ad platforms, and royalty systems',
            'Analysts need depth while executives need a faster reading path',
            'Dense charts and tables can compete for attention',
            'Filters must preserve context between overview and drill-down views',
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
          steps={buildConceptSteps([
            'Defined a hypothetical audience, likely data sources, and the questions an overview should answer.',
            'Separated portfolio, artist, release, campaign, and revenue views while preserving filter context.',
            'Explored dark UI contrast, table density, and two reading speeds with realistic sample data.',
            'Created semantic color, spacing, chart, table, and filter patterns for the concept.',
            'A next phase would test comprehension with label teams and pressure-test the layout in a working prototype.',
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
                'Decision metrics up front, with deeper charts only in context to reduce noise during executive reviews.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Tokens & modular UI"
          paragraphs={[
            'Semantic tokens keep surfaces, text, status, charts, tables, and filters consistent across the proposed product.',
            'The component structure favors repeatable patterns over one-off chart compositions.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          The result is a portfolio concept with a clear reporting hierarchy and a reusable
          component direction. It demonstrates the proposed product model, but it does not claim
          user research, engineering delivery, or production outcomes.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
