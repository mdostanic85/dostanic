import type { Metadata } from 'next'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import ProblemSolution from '@/components/work/case-study/ProblemSolution'
import UXProcessFlow from '@/components/work/case-study/UXProcessFlow'
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
  title: 'Optronic — Website Redesign · Milos Dostanic',
  description:
    'Optronic website redesign — multilingual IA, product discovery, design-to-build delivery on Next.js and Vercel.',
}

const nav = getCaseStudyNav('optronic')

const META = [
  { label: 'Client', value: 'Optronic' },
  { label: 'Year', value: '2024' },
  { label: 'Role', value: 'Design + build' },
  { label: 'Domain', value: 'Industrial / Web' },
  { label: 'Focus', value: 'IA · CMS · delivery' },
]

export default function OptronicCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Web & Digital"
      title={
        <>
          Optronic —
          <br />
          <span className="accent-gradient-text">website redesign.</span>
        </>
      }
      intro={
        <>
          Full redesign and rebuild — multilingual structure, nine product families, SEO-aware
          content hierarchy, and live preview delivery on Vercel.
        </>
      }
      topRightLabel="2024"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="An industrial optics manufacturer needed a site that works in EN and DE, surfaces nine product lines clearly, and hosts manuals and firmware in context."
          body="I led design and implementation — not a handoff-only engagement. The case study focuses on IA, multilingual constraints, and a maintainable component architecture the client team can extend."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Content sprawl, split languages"
          responseTitle="Structured, maintainable site"
          problems={[
            'EN/DE parity required across navigation, URLs, and metadata',
            'Nine product categories each needing appropriate technical depth',
            'Manuals and firmware scattered on third-party links',
            'Client team needed updates without a developer for routine content',
          ]}
          solutions={[
            'Multilingual-first navigation and URL patterns with context-preserving language toggle',
            'IA for known-product and discovery-by-application journeys',
            'Downloads integrated into product pages — versioned and findable in context',
            'Component-based Next.js structure with preview-based review workflow',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          title="From IA to production"
          steps={buildProcessSteps([
            'Audited existing content, product taxonomy, and EN/DE requirements.',
            'Mapped navigation, product templates, and download paths.',
            'Designed page templates and component set in Figma.',
            'Built reusable layout and typography rules in code — not one-off pages.',
            'Vercel previews for stakeholder review; iterative deploy to production.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudySystemNote
          title="Build-time system"
          paragraphs={[
            'Next.js layouts and shared components enforce heading hierarchy, spacing, and CTA patterns across product families.',
            'Content structure supports SEO intent per product line rather than generic brand keywords only.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Design and build in one loop')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro={
            <>
              AI assisted copy structure, component scaffolding, and implementation notes —
              I remained responsible for IA, visual design, and production quality.
            </>
          }
          steps={DEFAULT_AI_STEPS}
          tools={['Figma', 'Cursor', 'Next.js', 'Vercel']}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          Shipped with full EN/DE structure and nine product pages, content-managed updates for
          routine changes, and a maintainable component architecture — faster sign-off via live
          preview than static PDF cycles.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
