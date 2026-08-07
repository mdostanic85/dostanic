import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import CaseStudyScreens from '@/components/work/case-study/CaseStudyScreens'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import TokenizationShowcase from '@/components/work/healthcare-crm/TokenizationShowcase'
import UserFlowSection from '@/components/work/healthcare-crm/UserFlowSection'
import { buildConceptSteps } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'HealthCare CRM: Patient Management Platform',
  description:
    'A self-directed healthcare CRM concept covering product structure, patient context, responsive UI, and design tokens.',
}

const nav = getCaseStudyNav('healthcare-crm')

const META = [
  { label: 'Type', value: 'Concept · UX case study' },
  { label: 'Year', value: '2024' },
  { label: 'Role', value: 'Self-directed product design' },
  { label: 'Domain', value: 'Healthcare · SaaS' },
  { label: 'Focus', value: 'UX · UI system · Handoff' },
]

export default function HealthcareCRMCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Exploration / Healthcare"
      title={
        <>
          HealthCare CRM
          <br />
          <span className="accent-gradient-text">practice management.</span>
        </>
      }
      intro={
        <>
          A self-directed healthcare CRM concept covering product structure, key screens,
          an interactive flow map, responsive behavior, and a tokenized UI.
        </>
      }
      topRightLabel="2024"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The concept asks how one product shell could connect scheduling, communication, patient context, records, and reporting."
          body="I designed the dashboard hierarchy, core modules, flow map, and system foundations as a portfolio exercise. The workflow assumptions and sample data have not been validated with clinical or administrative users."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          intro="Based on product assumptions and illustrative screens. No production outcome is claimed."
          challengeTitle="Fragmented tools, heavy cognitive load"
          responseTitle="Unified platform, clearer hierarchy"
          problems={[
            'Disconnected tools creating data silos between scheduling, messaging, and records',
            'Weak hierarchy, with status, actions, and metadata competing at the same visual weight',
            'Unclear entry paths, with guest, login, and recovery not converging on one home model',
            'Design drift, with similar screens built as one-offs instead of shared components',
          ]}
          solutions={[
            'One CRM shell with persistent nav across patients, appointments, engagement, analytics, records',
            'Dashboard structured for scanning: overview → clinician tasks → Patient 360',
            'Auth and feature flows mapped before UI polish',
            'Semantic tokens and documented type/color roles for implementation',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildConceptSteps([
            'Defined assumed roles, workflow boundaries, privacy constraints, and the information that should stay visible.',
            'Mapped authentication, home, patient, appointment, and communication paths before high-fidelity UI.',
            'Explored dashboard, Patient 360, and module layouts with illustrative clinical data.',
            'Defined color roles, spacing, typography, and component states across the proposed system.',
            'A next phase would require clinical research, privacy review, and usability testing with representative tasks.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Three surfaces that carry the story. KPI numbers in mockups are illustrative only."
          screens={[
            {
              src: '/work/healthcare-crm/cover.jpg',
              alt: 'HealthCare CRM practice dashboard',
              caption: 'Practice dashboard',
              decision:
                'KPIs, clinician tasks, and patient context share one surface, with primary actions before deep navigation.',
            },
            {
              src: '/work/healthcare-crm/modules-overview.jpg',
              alt: 'CRM modules overview',
              caption: 'Module shell',
              decision:
                'Same sidebar and card language across appointments, messaging, analytics, and records.',
            },
            {
              src: '/work/healthcare-crm/mobile-responsive.jpg',
              alt: 'Mobile dashboard',
              caption: 'Responsive parity',
              decision: 'Mobile keeps the same scan order instead of introducing a separate visual system.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UserFlowSection />
      </CaseStudySection>

      <CaseStudySection>
        <TokenizationShowcase />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          The result is a documented CRM concept with one module model, a responsive screen set,
          and reusable tokens. It does not claim clinical validation, engineering delivery, or a live product.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
