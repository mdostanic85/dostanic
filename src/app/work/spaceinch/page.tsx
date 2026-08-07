import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import { buildProcessSteps } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'Space Inch — Enterprise Product Design',
  description:
    'NDA-safe case study covering complex enterprise workflows, product systems, engineering collaboration, and implementation review at Space Inch.',
  alternates: { canonical: '/work/spaceinch' },
}

const nav = getCaseStudyNav('spaceinch')

const META = [
  { label: 'Engagement', value: 'Client work · NDA protected' },
  { label: 'Period', value: 'March 2024 to present' },
  { label: 'Role', value: 'Senior Product Designer' },
  { label: 'Ownership', value: 'Discovery through implementation review' },
  { label: 'Collaboration', value: 'Product · engineering · client stakeholders' },
  { label: 'Delivery', value: 'Production product work' },
]

const DECISIONS = [
  {
    number: '01',
    title: 'Model the workflow before the screens',
    body: 'I map actors, decisions, states, permissions, and handoffs first. This exposes conflicting requirements before visual polish makes them expensive to change.',
  },
  {
    number: '02',
    title: 'Design dense interfaces for scanning',
    body: 'Tables, search, filters, and administration surfaces use explicit hierarchy and predictable actions so experts can move quickly without hiding context from newer users.',
  },
  {
    number: '03',
    title: 'Treat edge cases as product states',
    body: 'Loading, empty, partial, forbidden, error, and recovery states are part of the flow documentation rather than notes left for engineering to interpret later.',
  },
  {
    number: '04',
    title: 'Review the implementation, not only the handoff',
    body: 'I compare working builds with the intended behaviour, discuss technical trade-offs, and close gaps in spacing, states, responsiveness, and interaction details.',
  },
] as const

export default function SpaceInchCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Enterprise product work"
      title={
        <>
          Space Inch
          <br />
          <span className="accent-gradient-text">complex product systems.</span>
        </>
      }
      intro={
        <>
          Ongoing senior product design across confidential B2B engagements. This page explains
          the problem categories, responsibilities, decisions, and delivery model without exposing
          client data or protected interfaces.
        </>
      }
      topRightLabel="March 2024 to present"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The work sits where complex workflows, legacy constraints, multiple roles, and implementation pressure meet."
          body="I join client teams as a senior product designer and work across framing, information architecture, detailed product UI, design-system patterns, handoff, and design QA. The confidential details change by engagement, but the operating model stays consistent."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          intro="Client and product details are intentionally anonymised."
          challengeTitle="Complexity was spread across the workflow"
          responseTitle="Make the system legible"
          problems={[
            'Legacy processes and product rules were distributed across people, tools, and incomplete documentation',
            'Different roles needed different levels of detail, permissions, and next actions inside the same product',
            'Dense operational screens had to support speed without making irreversible actions easy to miss',
            'Design intent could degrade when edge cases reached implementation late',
          ]}
          solutions={[
            'Shared models for actors, states, objects, and handoffs before committing to interface structure',
            'Role-aware navigation and progressive disclosure for dense information',
            'Reusable patterns for tables, search, filters, forms, feedback, and administration states',
            'Implementation reviews that turn visual discrepancies into specific, prioritised fixes',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Important decisions</p>
            <h2 className="display-tight mt-5 max-w-[11ch] text-3xl font-medium sm:text-4xl">
              The work behind a scalable interface.
            </h2>
          </div>
          <ol className="border-t border-stroke lg:col-span-8">
            {DECISIONS.map((decision) => (
              <li key={decision.number} className="grid grid-cols-12 gap-4 border-b border-stroke py-8">
                <span className="col-span-2 font-mono text-[10px] tracking-[0.22em] text-accent">{decision.number}</span>
                <div className="col-span-10 sm:grid sm:grid-cols-8 sm:gap-6">
                  <h3 className="display-tight text-xl font-medium sm:col-span-3">{decision.title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-muted sm:col-span-5 sm:mt-0 sm:text-base">{decision.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <UXProcessFlow
          title="From unclear requirements to implementation"
          steps={buildProcessSteps([
            'Align on the business problem, user groups, product evidence, technical limits, and decisions that still need an owner.',
            'Map core objects, roles, permissions, routes, and the happy path alongside failure and recovery states.',
            'Design realistic flows with production-like density, responsive behaviour, and clear action hierarchy.',
            'Turn repeated patterns into components, variants, tokens, and rules the team can extend.',
            'Review working builds with engineers, document trade-offs, and verify the highest-risk states before release.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CaseStudyOutcome>
              The engagements produce clearer workflow models, reusable interface patterns, documented edge cases,
              and implementation feedback tied to specific behaviour. No confidential metrics or client details are
              claimed on this page.
            </CaseStudyOutcome>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">Reflection</p>
            <p className="mt-4 text-sm leading-[1.75] text-muted sm:text-base">
              Senior product work is often less about a single screen and more about making a complex system
              understandable to users, stakeholders, and the engineers who have to build it.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
