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
  title: 'Spotify — Admin Enterprise Panel',
  description:
    'Enterprise admin UX for internal Spotify tooling — dense tables, RBAC, bulk operations, and keyboard-first patterns.',
}

const META = [
  { label: 'Type', value: 'Internal product work' },
  { label: 'Year', value: '2022' },
  { label: 'Role', value: 'Product designer' },
  { label: 'Domain', value: 'Enterprise admin' },
  { label: 'Focus', value: 'Density · RBAC · tables' },
]

const nav = getCaseStudyNav('spotify-admin-enterprise')

export default function SpotifyAdminCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case Study / Enterprise admin"
      title={
        <>
          Spotify —
          <br />
          <span className="accent-gradient-text">admin enterprise.</span>
        </>
      }
      intro={
        <>
          Internal admin experiences for power users — content and configuration at scale,
          with accessibility and keyboard paths treated as first-class requirements.
        </>
      }
      topRightLabel="2022"
      previous={nav.previous}
      next={nav.next}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="Operators manage large catalogs and configuration surfaces — every extra click compounds across a shift."
          body="I designed for extreme density without losing scanability: bulk operations, role-based access, audit-friendly layouts, and predictable patterns for tables, dialogs, and inline edits. Production data volumes shaped the UI early, not after handoff."
        />
      </CaseStudySection>

      <CaseStudySection>
        <ProblemSolution
          challengeTitle="Scale without chaos"
          responseTitle="Operator-first admin shell"
          problems={[
            'Power users need bulk actions without destructive ambiguity',
            'Role boundaries must be obvious in dense layouts',
            'Tables must stay scannable with high row counts and many columns',
            'Keyboard and screen-reader paths cannot be retrofitted later',
          ]}
          solutions={[
            'Bulk selection and action patterns with explicit confirmation for irreversible ops',
            'RBAC reflected in navigation, empty states, and disabled affordances — not tooltips alone',
            'Table typography, zebra rhythm, and sticky headers tuned for long sessions',
            'Documented keyboard maps and focus order alongside visual specs',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <UXProcessFlow
          steps={buildProcessSteps([
            'Interviewed operators on daily tasks, error recovery, and permission pain points.',
            'Mapped admin IA — what belongs in list views vs detail vs modals.',
            'High-fidelity table and dialog patterns with realistic data volume in frames.',
            'Component variants for states engineers must implement — loading, partial, forbidden.',
            'Handoff with parity notes for spacing, focus rings, and responsive collapse rules.',
          ])}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseStudyScreens
          intro="Cover frame — admin density with clear hierarchy for primary actions."
          screens={[
            {
              src: '/work/spotify-admin-enterprise/cover.png',
              alt: 'Spotify admin enterprise panel overview',
              caption: 'Admin overview',
              decision:
                'Primary actions and scope (what you are editing) stay visible while secondary tools defer to panels.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudySystemNote
          title="Patterns for operators"
          paragraphs={[
            'Reusable table, filter bar, and dialog components so new admin modules inherit behaviour instead of reinventing grids.',
            'State documentation covers forbidden, empty, and partial-data cases — common in internal tools.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <div className="mb-10 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>AI workflow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
            {titleWithAccentGradient('Specs that survive sprints')}
          </h2>
        </div>
        <CaseStudyAIWorkflow
          intro="AI helped structure handoff notes and edge-case inventories — design decisions stayed manual."
          steps={DEFAULT_AI_STEPS}
          tools={['Figma', 'Notion', 'Linear']}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseStudyOutcome>
          A coherent admin language for internal operators — faster scanning, clearer permissions,
          and patterns engineering could extend without one-off table redesigns each sprint.
        </CaseStudyOutcome>
      </CaseStudySection>
    </CaseStudyShell>
  )
}
