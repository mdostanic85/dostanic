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
  title: 'Galaxy Cash — Fintech Mobile App · Milos Dostanic',
  description:
    'Galaxy Cash mobile product design — onboarding, transfers, and security-sensitive flows where clarity builds trust.',
}

const META = [
  { label: 'Product', value: 'Galaxy Cash' },
  { label: 'Year', value: '2025' },
  { label: 'Role', value: 'Product design lead' },
  { label: 'Domain', value: 'Fintech · mobile' },
  { label: 'Focus', value: 'Trust · transfers' },
]

const nav = getCaseStudyNav('galaxy-cash')

export default function GalaxyCashCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Fintech mobile"
      title={
        <>
          Galaxy Cash —
          <br />
          <span className="accent-gradient-text">mobile fintech.</span>
        </>
      }
      intro={
        <>
          Consumer fintech mobile — onboarding, balances, transfers, and security-sensitive
          flows where trust is built through clarity, not decoration.
        </>
      }
      topRightLabel="2025"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="In fintech, users decide in seconds whether they trust the product — ambiguity costs conversions and support tickets."
          body="I directed interaction patterns for step-up authentication, error recovery, and transaction review so users always know what will happen before money moves. Visual hierarchy and motion stayed minimal on purpose: restraint reads as expertise."
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
            'Progressive onboarding — core actions first, advanced features after first success',
            'Explicit review screens with amount, recipient, and fee breakdown before confirm',
            'Recovery patterns for network, KYC, and limit errors with next-step guidance',
            'Step-up auth framed as protection — what is happening and why, in plain language',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Mapped jobs-to-be-done across send, receive, and account management.',
            'Flow diagrams for happy path, decline, and limit-exceeded branches.',
            'Mobile UI with thumb-zone priorities and large touch targets for primary actions.',
            'Token set for money states — pending, success, failed — distinct but calm.',
            'Prototype review with stakeholders on real device sizes before engineering lock.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Cover frame — mobile shell emphasising balance clarity and primary actions."
          screens={[
            {
              src: '/work/galaxy-cash/cover.png',
              alt: 'Galaxy Cash fintech mobile app screens',
              caption: 'Mobile overview',
              decision:
                'Home prioritises balance truth and the next safe action — secondary features stay one tap away, not on the first screen.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Mobile system discipline"
          paragraphs={[
            'Limited colour palette — semantic greens and reds only where money state requires it.',
            'Typography scale tuned for numeric amounts and currency formatting at a glance.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Copy and flows, reviewed')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro="AI drafted microcopy variants for error and auth screens — every line was edited for tone and compliance clarity."
          steps={DEFAULT_AI_STEPS}
          tools={['Figma', 'Claude', 'Figma Make']}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          A mobile experience where users understand money movement before they commit —
          fewer support contacts from confusion, stronger trust signals in core flows.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
