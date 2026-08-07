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
  title: 'Galaxy Cash: Fintech Mobile App',
  description:
    'A self-directed fintech concept exploring onboarding, transfers, authentication, and error recovery.',
}

const META = [
  { label: 'Type', value: 'Concept · Visual exploration' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Self-directed product design' },
  { label: 'Domain', value: 'Fintech · mobile' },
  { label: 'Focus', value: 'Trust · transfers' },
]

const nav = getCaseStudyNav('galaxy-cash')

export default function GalaxyCashCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Exploration / Fintech mobile"
      title={
        <>
          Galaxy Cash
          <br />
          <span className="accent-gradient-text">mobile fintech.</span>
        </>
      }
      intro={
        <>
          A self-directed mobile fintech concept covering onboarding, balances, transfers,
          authentication, and recovery states.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
      links={[{
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/225609903/Galaxy-Cash-Mobile-App-Design',
      }]}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The design question was how a transfer flow could explain money movement, security checks, and recovery paths before a user commits."
          body="I explored onboarding, step-up authentication, error recovery, and transaction review as a self-directed exercise. The screens use product assumptions and illustrative data, not research findings or production metrics."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Trust under pressure"
          responseTitle="Clear money paths"
          problems={[
            'Onboarding must explain value without overwhelming first-time users',
            'Transfer flows need review steps that cannot be skipped accidentally',
            'Errors must recover without dead-ends or hidden support paths',
            'Security steps cannot feel like friction without context',
          ]}
          solutions={[
            'Progressive onboarding, with core actions first and advanced features after the first success',
            'Explicit review screens with amount, recipient, and fee breakdown before confirm',
            'Recovery patterns for network, KYC, and limit errors with next-step guidance',
            'Step-up authentication framed as protection, explaining what is happening and why in plain language',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildConceptSteps([
            'Defined the assumed audience, account model, money actions, and security constraints.',
            'Mapped send, receive, decline, limit, and recovery branches before visual design.',
            'Designed mobile layouts with thumb reach and large targets for primary actions.',
            'Created distinct token roles for pending, successful, and failed money states.',
            'A next phase would test comprehension with users and review compliance and technical constraints.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Cover frame with a mobile shell that emphasises balance clarity and primary actions."
          screens={[
            {
              src: '/work/galaxy-cash/cover.png',
              alt: 'Galaxy Cash fintech mobile app screens',
              caption: 'Mobile overview',
              decision:
                'Home prioritises balance truth and the next safe action. Secondary features stay one tap away, but not on the first screen.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Mobile system discipline"
          paragraphs={[
            'The limited colour palette uses semantic greens and reds only where the money state requires them.',
            'Typography scale tuned for numeric amounts and currency formatting at a glance.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          The result is a mobile concept that demonstrates review, authentication, and recovery
          patterns. It does not claim reduced support contacts, user validation, or a shipped product.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
