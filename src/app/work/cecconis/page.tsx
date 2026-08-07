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
import { buildConceptSteps } from '@/lib/caseStudyDefaults'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: "Cecconi's Restaurant: Web & Brand",
  description:
    "A self-directed hospitality web concept exploring menu hierarchy, reservations, and editorial pacing.",
}

const META = [
  { label: 'Type', value: 'Concept · Visual exploration' },
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
      eyebrow="Exploration / Hospitality web"
      title={
        <>
          Cecconi&apos;s
          <br />
          <span className="accent-gradient-text">restaurant web.</span>
        </>
      }
      intro={
        <>
          A self-directed hospitality concept exploring menu hierarchy, reservation paths,
          editorial photography, and mobile pacing.
        </>
      }
      topRightLabel="2021"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The exercise asks how a restaurant site can feel editorial while keeping menus, reservations, locations, and events easy to find on mobile."
          body="I explored art direction, menu structure, reservation paths, and photography rhythm as a portfolio concept. It is not commissioned work and does not claim access to the restaurant's users, analytics, or brand team."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Brand vs usability"
          responseTitle="Editorial, navigable"
          problems={[
            'Menus are long and seasonal, so the hierarchy must stay scannable',
            'Reservation paths must work on mobile during on-the-go booking',
            'Photography-heavy layouts risk slow loads and visual noise',
            'Brand tone must stay premium without feeling inaccessible',
          ]}
          solutions={[
            'Menu IA organised by course and dietary tags instead of one endless scroll',
            'A persistent but quiet reservation CTA that stays available without shouting',
            'Image sizing and lazy loading strategy paired with art direction',
            'Type-led sections where copy carries brand when photos are sparse',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildConceptSteps([
            'Used the public brand, menu, photography, and site structure as reference material for the exercise.',
            'Mapped menu browsing, booking, locations, and events into a simple navigation model.',
            'Created desktop and mobile layouts with editorial pacing between content sections.',
            'Defined type scale, color restraint, spacing, and photography crop rules.',
            'A next phase would validate booking findability, content management needs, and image performance.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Cover frame for a hospitality brand with clear menu and reservation hierarchy."
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
            'Spacing and type scales draw on print-adjacent hospitality standards, with generous leading and a restrained palette.',
            'Reusable section templates for menus, private dining, and locations without one-off page layouts.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyOutcome>
          The result is a visual and interaction concept for menu, booking, and location pages.
          It has not been validated with guests or implemented in a live content system.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
