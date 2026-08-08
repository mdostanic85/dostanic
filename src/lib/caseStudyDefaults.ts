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

