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
import { buildProcessSteps } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'Optronic — Website Redesign',
  description:
    'Optronic website redesign covering multilingual IA, product discovery, reusable React components, static delivery, and Vercel review.',
}

const nav = getCaseStudyNav('optronic')

const META = [
  { label: 'Type', value: 'Client work · Designed and built' },
  { label: 'Year', value: '2024' },
  { label: 'Role', value: 'Design + build' },
  { label: 'Domain', value: 'Industrial / Web' },
  { label: 'Focus', value: 'IA · CMS · delivery' },
]

export default function OptronicCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Designed and built"
      title={
        <>
          Optronic
          <br />
          <span className="accent-gradient-text">website redesign.</span>
        </>
      }
      intro={
        <>
          The delivery proof in this portfolio: I designed this and I built it.
          Multilingual structure, nine product families, a reusable React
          component set, and a live site the client team can extend.
        </>
      }
      topRightLabel="2024"
      previous={nav.previous}
      next={nav.next}
      links={[{ label: 'View live site', href: 'https://optronic-v2.vercel.app' }]}
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
            'Component-based React structure with a preview-based review workflow',
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
            'Built reusable layout and typography rules in code instead of one-off pages.',
            'Vercel previews for stakeholder review; iterative deploy to production.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Live screens from the shipped site — homepage, a product detail page, the German locale, and the downloads library."
          screens={[
            {
              src: '/work/optronic/cover.webp',
              alt: 'Optronic homepage with product carousel and primary navigation',
              caption: 'Homepage — EN',
              decision:
                'Nine product families collapse into one carousel and a Products dropdown, so the homepage stays short without hiding depth.',
            },
            {
              src: '/work/optronic/product-detail.webp',
              alt: 'Optronic product detail page for the LVMC digital light screen',
              caption: 'Product detail',
              decision:
                'Every product page repeats the same template — spec copy, image gallery, and a consistent path back to the category — so new products slot in without a new layout.',
            },
            {
              src: '/work/optronic/de-homepage.webp',
              alt: 'Optronic homepage rendered in German with translated navigation and content',
              caption: 'Homepage — DE',
              decision:
                'Full navigation, copy, and CTAs translate through the same routes and components — no parallel DE site to maintain.',
            },
            {
              src: '/work/optronic/downloads.webp',
              alt: 'Optronic downloads library with searchable technical documentation',
              caption: 'Downloads library',
              decision:
                'Manuals, datasheets, and firmware are searchable and grouped by product, replacing the scattered third-party links from the old site.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Build-time system"
          paragraphs={[
            'Shared React components enforce heading hierarchy, spacing, and CTA patterns across product families.',
            'Content structure supports SEO intent per product line rather than generic brand keywords only.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          Shipped and live, with full EN/DE structure across nine product families, downloads
          integrated into the product pages that need them, and a component architecture the
          client team can extend without a developer for routine content. Stakeholders reviewed
          working previews instead of static PDFs, which shortened each sign-off round.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
