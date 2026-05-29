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
  title: "Cecconi's Restaurant — Web & Brand · Milos Dostanic",
  description:
    "Cecconi's hospitality web — menu hierarchy, reservations, and editorial pacing for a premium restaurant brand.",
}

const META = [
  { label: 'Client', value: "Cecconi's" },
  { label: 'Year', value: '2021' },
  { label: 'Role', value: 'Art direction · UX' },
  { label: 'Domain', value: 'Hospitality' },
  { label: 'Focus', value: 'Brand · web' },
]

const nav = getCaseStudyNav('cecconis')

export default function CecconisCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Hospitality web"
      title={
        <>
          Cecconi&apos;s —
          <br />
          <span className="accent-gradient-text">restaurant web.</span>
        </>
      }
      intro={
        <>
          Premium hospitality site — menu hierarchy, reservation paths, and editorial
          photography pacing that match a high-touch restaurant brand.
        </>
      }
      topRightLabel="2021"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Guests evaluate quality in seconds on mobile — the site must feel as considered as the dining room."
          body="I set art direction and UX for menu structure, reservations, and photography rhythm. Typography, spacing, and motion were tuned for an audience that reads restraint as quality. The digital layer supports the physical experience instead of competing with it."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Brand vs usability"
          responseTitle="Editorial, navigable"
          problems={[
            'Menus are long and seasonal — hierarchy must stay scannable',
            'Reservation paths must work on mobile during on-the-go booking',
            'Photography-heavy layouts risk slow loads and visual noise',
            'Brand tone must stay premium without feeling inaccessible',
          ]}
          solutions={[
            'Menu IA by course and dietary tags — not one endless scroll',
            'Reservation CTA persistent but quiet — available without shouting',
            'Image sizing and lazy loading strategy paired with art direction',
            'Type-led sections where copy carries brand when photos are sparse',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Reviewed brand guidelines, photography, and existing site pain points.',
            'Mapped primary journeys — menu browse, book, location, events.',
            'Desktop and mobile wireframes with editorial pacing between sections.',
            'Visual design — type scale, colour restraint, and photo crop rules.',
            'Handoff with responsive behaviour notes for engineering or CMS build.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Cover frame — hospitality brand with menu and reservation hierarchy."
          screens={[
            {
              src: '/work/cecconis/cover.png',
              alt: "Cecconi's restaurant website overview",
              caption: 'Site overview',
              decision:
                'Hero photography sets mood; navigation stays minimal so menu and book remain obvious within one scroll.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Brand system on web"
          paragraphs={[
            'Spacing and type scales derived from print-adjacent hospitality standards — generous leading, restrained palette.',
            'Reusable section templates for menus, private dining, and locations without one-off page layouts.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Content structure first')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro="AI helped organise menu copy and meta descriptions — visual and brand decisions stayed manual."
          steps={DEFAULT_AI_STEPS}
          tools={['Figma', 'Claude']}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          A hospitality site that reads premium on mobile, surfaces menu and booking without
          friction, and keeps photography in service of the brand — not as decoration alone.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
