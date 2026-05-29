import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import CaseStudyScreens from '@/components/work/case-study/CaseStudyScreens'
import CaseStudyAIWorkflow from '@/components/work/case-study/CaseStudyAIWorkflow'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import TokenizationShowcase from '@/components/work/healthcare-crm/TokenizationShowcase'
import UserFlowSection from '@/components/work/healthcare-crm/UserFlowSection'
import { sectionEyebrowAccentClassName } from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'
import { buildProcessSteps, DEFAULT_AI_STEPS } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'HealthCare CRM — Patient Management Platform · Milos Dostanic',
  description:
    'Healthcare CRM — problem framing, UX process, key screens, user flow, design tokens, and AI-assisted handoff.',
}

const nav = getCaseStudyNav('healthcare-crm')

const META = [
  { label: 'Product', value: 'HealthCare CRM' },
  { label: 'Year', value: '2024' },
  { label: 'Role', value: 'Senior product designer (UX/UI)' },
  { label: 'Domain', value: 'Healthcare · SaaS' },
  { label: 'Focus', value: 'UX · UI system · Handoff' },
]

export default function HealthcareCRMCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Healthcare"
      title={
        <>
          HealthCare CRM —
          <br />
          <span className="accent-gradient-text">practice management.</span>
        </>
      }
      intro={
        <>
          Product UX for a healthcare CRM — problem framing, process, key screens,
          interactive flow map, tokenized UI, and AI-assisted developer handoff.
        </>
      }
      topRightLabel="2024"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Clinical and admin staff move between scheduling, communication, records, and reporting — often in tools that do not share navigation or visual language."
          body="I owned UX/UI for the product shell, dashboard hierarchy, core modules, and design system foundations. The case study follows a familiar arc: clarify the problem, show how the work ran, prove it with meaningful screens, then document flow, tokens, and handoff."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          intro="Based on product context and early screens — not claimed production outcomes."
          challengeTitle="Fragmented tools, heavy cognitive load"
          responseTitle="Unified platform, clearer hierarchy"
          problems={[
            'Disconnected tools creating data silos between scheduling, messaging, and records',
            'Weak hierarchy — status, actions, and metadata competing at the same visual weight',
            'Unclear entry paths — guest, login, and recovery not converging on one home model',
            'Design drift — similar screens built as one-offs instead of shared components',
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
          steps={buildProcessSteps([
            'Healthcare workflows, role boundaries, and what must stay visible vs. progressive disclosure.',
            'Auth paths, home hub, and multi-step tasks mapped before high-fidelity UI.',
            'Dashboard, Patient 360, and modules — scan order and density for clinical use.',
            'Color roles, spacing scale, typography for UI, display, and monospace clinical data.',
            'Component refs, states, AI-assisted notes, and consistency pass across modules.',
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
                'KPIs, clinician tasks, and patient context on one surface — primary actions before deep navigation.',
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
              decision: 'Mobile keeps the same scan order — not a separate visual system.',
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
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Design → dev, less ambiguity')}
          </h2>
        </div>
        <CaseStudyAIWorkflow steps={DEFAULT_AI_STEPS} />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          Clearer dashboard hierarchy, a single module model, documented tokens, and handoff
          notes engineering could implement from — without reinventing layout per feature.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
