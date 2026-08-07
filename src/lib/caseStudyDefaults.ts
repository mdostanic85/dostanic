import type { AIWorkflowStep } from '@/components/work/case-study/CaseStudyAIWorkflow'
import type { ProcessStep } from '@/components/work/case-study/UXProcessFlow'

/** Reusable five-step UX process skeleton. Tailor `body` copy for each project. */
export function buildProcessSteps(
  bodies: [string, string, string, string, string],
): ProcessStep[] {
  const titles = [
    'Research & context',
    'Flows & information architecture',
    'UI & hierarchy',
    'Design system & tokens',
    'Handoff & validation',
  ] as const
  return titles.map((title, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title,
    body: bodies[i],
  }))
}

/** Five-step structure for self-directed work with no implied client research or delivery. */
export function buildConceptSteps(
  bodies: [string, string, string, string, string],
): ProcessStep[] {
  const titles = [
    'Brief & assumptions',
    'Information architecture',
    'Interaction & hierarchy',
    'System rules',
    'Validation plan',
  ] as const
  return titles.map((title, index) => ({
    number: String(index + 1).padStart(2, '0'),
    title,
    body: bodies[index],
  }))
}

export const DEFAULT_AI_STEPS: AIWorkflowStep[] = [
  {
    number: '01',
    title: 'Manual review first',
    body: 'Requirements, flows, and screens reviewed before any AI output. AI never started the design.',
  },
  {
    number: '02',
    title: 'Structure messy input',
    body: 'Notes and specs structured into task lists, screen inventories, and open questions for engineering.',
  },
  {
    number: '03',
    title: 'Handoff notes & comments',
    body: 'AI drafted implementation notes and Figma comments; every line was edited before handoff.',
  },
  {
    number: '04',
    title: 'Design ↔ code parity',
    body: 'Compared design intent against component behaviour, including spacing, states, and variants before build.',
  },
]
