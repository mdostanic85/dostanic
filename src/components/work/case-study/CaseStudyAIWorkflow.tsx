import type { ReactNode } from 'react'
import { monoIndexAccentPaddedClassName, sectionSubheadingClassName } from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export type AIWorkflowStep = {
  number: string
  title: string
  body: string
}

type Props = {
  intro?: ReactNode
  steps: readonly AIWorkflowStep[]
  tools?: readonly string[]
}

const DEFAULT_INTRO = (
  <>
    AI was a <span className="text-foreground">workflow amplifier</span>, not the designer.
    It shortened documentation and handoff — judgment, structure, and final UI decisions
    stayed manual.
  </>
)

export default function CaseStudyAIWorkflow({
  intro = DEFAULT_INTRO,
  steps,
  tools = ['Cursor', 'Claude', 'Figma', 'GitHub'],
}: Props) {
  return (
    <div className="space-y-10">
      <p className="max-w-2xl text-base leading-[1.7] text-muted lg:text-lg">{intro}</p>

      <ul className="space-y-0">
        {steps.map((step) => (
          <li
            key={step.number}
            className="grid grid-cols-12 gap-4 border-t border-stroke py-10 first:border-t-0 first:pt-0 lg:gap-8"
          >
            <span className={monoIndexAccentPaddedClassName}>{step.number}</span>
            <div className="col-span-10 sm:col-span-11">
              <h3 className={sectionSubheadingClassName}>
                {titleWithAccentGradient(step.title)}
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ul>

      {tools.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex rounded-full border border-stroke bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
