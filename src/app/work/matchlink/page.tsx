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
  title: 'MatchLink: Real-Time Matchday Insights',
  description:
    'A self-directed sports product concept exploring live event streams, timelines, and high-density matchday views.',
}

const META = [
  { label: 'Type', value: 'Concept · Visual exploration' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Self-directed product design' },
  { label: 'Domain', value: 'Sports tech' },
  { label: 'Focus', value: 'Real-time · density' },
]

const nav = getCaseStudyNav('matchlink')

export default function MatchLinkCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Exploration / Sports analytics"
      title={
        <>
          MatchLink
          <br />
          <span className="accent-gradient-text">matchday insights.</span>
        </>
      }
      intro={
        <>
          A self-directed matchday concept exploring live streams, event timelines, and dense
          views for analysts and operations staff.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
      links={[{
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/225610623/MatchLink-Real-Time-Matchday-Insights',
      }]}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The exercise asks how a matchday interface can stay legible while events update, arrive late, or get corrected."
          body="I used likely feed states and operator tasks as design assumptions. Typography, status encoding, and spatial rhythm were explored for quick scanning. No operator research or production implementation is claimed."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Live data, high stakes"
          responseTitle="Calm under refresh"
          problems={[
            'The concept assumes feeds can lag or arrive out of order',
            'Timelines must remain readable while events continue to arrive',
            'Correction and override paths need a visible history',
            'Mobile and desktop views require different density without changing event priority',
          ]}
          solutions={[
            'Explicit staleness and partial-data states, with no silent failure',
            'Timeline typography and colour encoding optimised for peripheral scanning',
            'Override flows with confirmation and visible audit trail in context',
            'Responsive breakpoints that preserve event priority, not just shrink columns',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildConceptSteps([
            'Defined a hypothetical operator, event model, feed constraints, and time-sensitive tasks.',
            'Mapped live, delayed, corrected, and void states into one timeline structure.',
            'Explored timeline density in Figma with realistic sample event volume.',
            'Defined status tokens and restrained motion rules so updates do not distract from the match.',
            'A next phase would include operator interviews and a working prototype with simulated feed latency.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Overview frame with a timeline-first layout for live match context."
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
            'Status colours and icons map to live, delayed, and corrected feed health, not decorative categories.',
            'Components assume refresh: skeletons, optimistic rows, and rollback when corrections arrive.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          The result is a design concept for a matchday surface that makes uncertainty and event
          priority visible. It still needs operator research and technical validation with a live feed.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
