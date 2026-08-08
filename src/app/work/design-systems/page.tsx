import type { Metadata } from 'next'
import Link from 'next/link'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import DesignSystemArchitecture from '@/components/work/case-study/DesignSystemArchitecture'
import TokenizationShowcase from '@/components/work/case-study/TokenizationShowcase'
import CaseStudyShell, {
  CaseStudyOutcome,
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import { sectionEyebrowAccentClassName } from '@/lib/headings'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'Design System Architecture',
  description:
    'How I build design systems: atomic composition, a three-tier token architecture, Figma variables in parity with production CSS, and governance designed with the library.',
  alternates: { canonical: '/work/design-systems' },
}

const nav = getCaseStudyNav('design-systems')

const META = [
  { label: 'Type', value: 'Capability' },
  { label: 'Focus', value: 'Design systems · tokens' },
  { label: 'Applied at', value: 'Space Inch · Polyrific · client work' },
  { label: 'Stack', value: 'Figma variables · CSS custom properties' },
  { label: 'Tooling', value: 'Storybook · Code Connect · Cursor' },
]

const GOVERNANCE = [
  {
    title: 'Contribution',
    body: 'A named path for proposing a component, and a rule for what belongs in the system versus what stays local to one product.',
  },
  {
    title: 'Versioning',
    body: 'Token and component changes are versioned, so a consuming team can read what changed before they adopt it.',
  },
  {
    title: 'Deprecation',
    body: 'Nothing is deleted silently. A deprecated component keeps working, is marked in Figma and code, and has a stated replacement.',
  },
] as const

export default function DesignSystemsPage() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Capability / Design systems"
      title={
        <>
          Design system
          <br />
          <span className="accent-gradient-text">architecture.</span>
        </>
      }
      intro={
        <>
          Not a client project. This is the system layer I build under product
          work — atomic composition, a three-tier token architecture, and Figma
          kept in parity with the CSS that ships.
        </>
      }
      topRightLabel="Capability"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Design systems fail in predictable ways — token drift, component APIs nobody agreed on, and feedback that arrives after production."
          body="None of those are tooling problems. They are structure problems: values with no owner, components with no contract, and a library with no rule for how it changes. This page documents the structure I put in place, and how I keep it aligned with code."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          intro="The failure modes, and the structural answer to each."
          challengeTitle="Predictable failure modes"
          responseTitle="Structural response"
          problems={[
            'Tokens exist in Figma but not in code, so engineers recreate values from screenshots',
            'Components look consistent but have no agreed API, so implementations diverge',
            'Every component references raw values, so a theme change becomes a full sweep',
            'Designs are never tested against real data, viewports, or edge cases',
            'No contribution or deprecation rule, so the library forks or is abandoned',
          ]}
          solutions={[
            'Figma variables and CSS custom properties versioned against each other, name for name',
            'Variants, states, and responsive rules documented as a component contract',
            'Three token tiers, so components bind to semantic roles and never to primitives',
            'Code prototypes when Figma cannot validate the behaviour',
            'Contribution, versioning, and deprecation designed alongside the components',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <DesignSystemArchitecture />
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className={sectionEyebrowAccentClassName}>Governance</p>
            <h2 className="display-tight mt-5 max-w-[14ch] text-3xl font-medium sm:text-4xl">
              A library without rules is a file people stop opening.
            </h2>
            <p className="mt-6 max-w-[46ch] text-sm leading-[1.75] text-muted sm:text-base">
              Governance is the part most systems skip, and it is the reason
              most systems are dead within a year. I design it with the
              components, not after them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3 lg:col-span-8">
            {GOVERNANCE.map((item, index) => (
              <article key={item.title} className="border-t border-stroke pt-5">
                <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="display-tight mt-4 text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="mb-12 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>Worked example</p>
          <h2 className="display-tight mt-4 text-2xl font-medium sm:text-3xl">
            The same architecture, applied.
          </h2>
          <p className="mt-6 text-base leading-[1.7] text-muted lg:text-lg">
            Token set from the{' '}
            <Link
              href="/work/healthcare-crm"
              className="text-accent underline-offset-4 hover:underline"
            >
              HealthCare CRM concept
            </Link>
            . Semantic roles first, then the component binding that consumes
            them — engineering receives names, not one-off hex per screen.
          </p>
        </div>
        <TokenizationShowcase />
      </CaseStudySection>

      <CaseStudySection>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className={sectionEyebrowAccentClassName}>Where AI fits</p>
            <h2 className="display-tight mt-5 max-w-[14ch] text-3xl font-medium sm:text-4xl">
              Useful in two places, and nowhere else.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-base leading-[1.7] text-muted lg:text-lg">
              AI compresses the cost of exploration and the cost of writing
              things down. It generates variant sets and documentation drafts
              faster than I can, and it is genuinely useful for building a code
              prototype when Figma cannot answer a question about real data or
              real viewports.
            </p>
            <p className="mt-6 text-base leading-[1.7] text-muted lg:text-lg">
              It does not decide the token structure, the component contract, or
              what ships. Those are the decisions the system is made of, and
              they stay mine.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          A repeatable structure: components composed atom to organism, values
          bound through three token tiers, Figma and CSS versioned name for
          name, and a governance model written before the library has enough
          users to need it. Applied across client engagements at Space Inch and
          Polyrific, and in the systems behind the case studies here.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
