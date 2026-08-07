import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import type { ProcessStep } from '@/components/work/case-study/UXProcessFlow'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import { cn } from '@/lib/utils'
import { sectionStatementClassName } from '@/lib/headings'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'AI-Connected Design System Workflow',
  description:
    'Documented workflow — Figma tokens, component APIs, AI-assisted prototyping, and engineering parity gates.',
}

const nav = getCaseStudyNav('ai-design-system-workflow')

const META = [
  { label: 'Type', value: 'Capability' },
  { label: 'Focus', value: 'Design systems' },
  { label: 'Stack', value: 'Figma · tokens · code' },
  { label: 'AI', value: 'Cursor · Claude' },
]

const WORKFLOW_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Token architecture',
    body: 'Primitive → semantic → component tokens. Figma variables map to CSS custom properties with explicit, versioned parity.',
    tools: ['Figma Variables', 'CSS custom properties', 'Style Dictionary'],
  },
  {
    number: '02',
    title: 'Components with code APIs',
    body: 'Variants, states, and responsive rules documented in Figma — written for the team that inherits the system.',
    tools: ['Figma', 'Storybook', 'Code Connect'],
  },
  {
    number: '03',
    title: 'AI-assisted prototyping',
    body: 'When Figma cannot validate real data, viewports, or edge cases — prototype in code with Cursor and Claude.',
    tools: ['Cursor', 'Claude', 'Next.js', 'Tailwind'],
  },
  {
    number: '04',
    title: 'Parity at every gate',
    body: 'Compare implementation to intent on feature branch and staging — specific engineering tasks, not vague mismatch notes.',
    tools: ['Vercel Previews', 'GitHub', 'BugHerd', 'Ruttl'],
  },
  {
    number: '05',
    title: 'AI for exploration',
    body: 'Structured copy and variant exploration — AI compresses options; senior judgment selects what ships.',
    tools: ['Claude', 'ChatGPT', 'Figma Make'],
  },
  {
    number: '06',
    title: 'Governance',
    body: 'Contribution model, deprecation, and versioning designed with the components — not after.',
    tools: ['Notion', 'GitHub', 'Linear'],
  },
]

export default function AIWorkflowPage() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Capability / Workflow"
      title={
        <>
          AI-connected
          <br />
          <span className="accent-gradient-text">design system workflow.</span>
        </>
      }
      intro={
        <>
          Not a client project — a documented way of working that connects Figma systems,
          tokens, AI-assisted prototyping, and engineering delivery.
        </>
      }
      topRightLabel="Capability"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Design systems fail in predictable ways — token drift, component APIs nobody agreed on, feedback after production."
          body="AI does not fix these automatically. Used in the right order, it compresses the time to close them. This capability page documents the workflow I apply across client work."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          intro="Common failure modes — and how the workflow addresses them."
          challengeTitle="Predictable failure modes"
          responseTitle="Structured workflow response"
          problems={[
            'Tokens in Figma with no CSS variables — engineers recreate values from screenshots',
            'Components that look consistent but have no agreed API — implementation diverges',
            'Designs never tested with real data, viewports, or edge cases',
            'Feedback after production when change is expensive',
            'Systems without governance — forked or abandoned within a year',
          ]}
          solutions={[
            'Explicit token parity: Figma variables ↔ CSS custom properties, versioned',
            'Components documented with variant props, states, and responsive behaviour',
            'Code prototypes when Figma is not enough to validate behaviour',
            'Parity checks at feature branch and staging with actionable deltas',
            'Governance alongside components — contribution and deprecation rules',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow title="Six steps, in order" steps={WORKFLOW_STEPS} />
      </CaseStudySection>

      <Section padding="md" className="bg-surface/40">
        <Container size="wide">
          <blockquote className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <p className={cn(sectionStatementClassName, 'lg:col-span-9')}>
              &ldquo;AI compresses the cost of exploration.{' '}
              <span className="text-accent">
                Senior judgment is still what determines what gets built.
              </span>
              &rdquo;
            </p>
            <cite className="lg:col-span-3 lg:self-end font-mono text-[12px] not-italic uppercase tracking-[0.2em] text-muted">
              — Milos Dostanic
            </cite>
          </blockquote>
        </Container>
      </Section>

      <CaseStudySection>
        <CaseStudyOutcome>
          A repeatable workflow for token-first systems, implementation-aware components,
          and AI used where it saves time — not where it replaces design ownership.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
