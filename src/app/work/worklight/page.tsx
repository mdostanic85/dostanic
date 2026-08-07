import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import ArrowLink from '@/components/ui/ArrowLink'
import { buildProcessSteps } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'WorkLight — Daily Work Operator',
  description:
    'How I designed and built WorkLight, a local-first product that turns work signals into evidence-linked priorities, next actions, and done criteria.',
  alternates: { canonical: '/work/worklight' },
}

const nav = getCaseStudyNav('worklight')

const META = [
  { label: 'Type', value: 'Personal product' },
  { label: 'Status', value: 'Working product · Active development' },
  { label: 'Role', value: 'Product Designer & Builder' },
  { label: 'Scope', value: 'Strategy · UX · UI · architecture · code' },
  { label: 'Stack', value: 'Next.js · PostgreSQL · Drizzle · Inngest' },
  { label: 'AI layer', value: 'Provider router · schema-bound output' },
]

const DECISIONS = [
  {
    title: 'Deterministic ranking before generation',
    body: 'The system ranks work before an LLM writes the brief. AI explains and structures the result, but it does not invent the priority order.',
  },
  {
    title: 'Evidence on every task surface',
    body: 'A task shows why it exists, the single next action, and its done criteria. Claims stay linked to immutable source evidence.',
  },
  {
    title: 'Read-only integrations by default',
    body: 'Connectors ingest signals without writing back to external tools. Any future write needs a separate, explicit confirmation.',
  },
  {
    title: 'Uncertainty is a visible state',
    body: 'Ambiguous items move to Unclear instead of being guessed into the queue. A status set by the user is never silently overwritten.',
  },
] as const

const SOURCES = ['Granola', 'Gmail', 'Calendar', 'Drive', 'Jira', 'Confluence', 'Figma', 'GitHub', 'Discord', 'Local Git']

export default function WorkLightCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Personal product"
      title={
        <>
          WorkLight
          <br />
          <span className="accent-gradient-text">a daily work operator.</span>
        </>
      }
      intro={
        <>
          A local-first product that answers what to do first, why it matters, the next
          concrete action, and how to know the work is actually done.
        </>
      }
      topRightLabel="2026 · Active"
      previous={nav.previous}
      next={nav.next}
      links={[{ label: 'View repository', href: 'https://github.com/mdostanic85/morning' }]}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Work is spread across meetings, email, tickets, designs, repositories, and half-finished notes. The hard part is deciding what deserves attention now."
          body="I am designing and building WorkLight as one product, not as a visual concept. Product strategy, interaction design, trust decisions, data model, UI system, and implementation evolve together in the same repository."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Signals are not priorities"
          responseTitle="One traceable daily plan"
          problems={[
            'Important work arrives through tools with different structures, owners, and levels of authority',
            'A generic AI summary can sound certain even when the source evidence is incomplete or conflicting',
            'Task lists often lose the reason, next action, and definition of done as context changes',
            'One failed integration can make an apparently complete daily plan misleading',
          ]}
          solutions={[
            'Incremental read-only ingestion with visible source health per provider',
            'Deterministic extraction, merging, ranking, confidence, and verification before generation',
            'One task model with evidence, priority, next action, done criteria, ownership, and conflict decisions',
            'Completed, partially completed, failed, and cancelled sync states shown instead of hiding missing data',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">Product model</p>
            <h2 className="display-tight mt-5 max-w-[12ch] text-3xl font-medium sm:text-4xl">Signals become decisions through an auditable path.</h2>
            <p className="mt-6 max-w-[46ch] text-sm leading-[1.75] text-muted sm:text-base">
              The UI talks to services, services own database access, and each external connector stays isolated and read only.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 border border-stroke bg-background sm:grid-cols-3">
              <div className="border-b border-stroke p-6 sm:border-b-0 sm:border-r">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">01 · Sources</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {SOURCES.map((source) => (
                    <span key={source} className="border border-stroke px-2 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{source}</span>
                  ))}
                </div>
              </div>
              <div className="border-b border-stroke p-6 sm:border-b-0 sm:border-r">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">02 · Decision layer</p>
                <ul className="mt-5 space-y-3 text-sm leading-[1.6] text-muted">
                  <li>Extract and merge</li><li>Rank and score confidence</li><li>Verify claims</li><li>Expose conflicts</li>
                </ul>
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">03 · Daily operator</p>
                <ul className="mt-5 space-y-3 text-sm leading-[1.6] text-muted">
                  <li>What to do first</li><li>Why it matters</li><li>Next action</li><li>Done criteria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">Important decisions</p>
            <h2 className="display-tight mt-5 max-w-[12ch] text-3xl font-medium sm:text-4xl">Trust is part of the interaction model.</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {DECISIONS.map((decision, index) => (
              <article key={decision.title} className="border-t border-stroke pt-5">
                <p className="font-mono text-[11px] tracking-[0.22em] text-accent">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="display-tight mt-4 text-xl font-medium">{decision.title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted">{decision.body}</p>
              </article>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          title="Design and implementation in one loop"
          steps={buildProcessSteps([
            'Defined the daily decision problem and the evidence needed to support a priority.',
            'Designed domain models for tasks, source items, evidence, people, projects, conflicts, and sync state.',
            'Built the Today, Projects, Knowledge, How we decide, Settings, task detail, and trust surfaces around one consistent task model.',
            'Maintained reusable UI patterns and explicit service boundaries so the product can grow without coupling pages to connectors.',
            'Used automated tests, source-health states, telemetry, and visual review to catch incorrect assumptions before they reach the daily brief.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CaseStudyOutcome>
              WorkLight is a working application with a PostgreSQL data model, background sync pipeline,
              read-only connectors, evidence-backed task logic, report workflows, and a product UI for daily
              decisions. It remains an actively developed personal product, so this case study describes the
              current implementation rather than a finished market outcome.
            </CaseStudyOutcome>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-accent">Public proof</p>
            <p className="mt-4 text-sm leading-[1.75] text-muted sm:text-base">
              The repository documents the architecture, task model, integration boundaries, commands, and current product behaviour.
            </p>
            <ArrowLink href="https://github.com/mdostanic85/morning" className="mt-6 text-foreground hover:text-accent">
              Open WorkLight on GitHub
            </ArrowLink>
          </div>
        </div>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
