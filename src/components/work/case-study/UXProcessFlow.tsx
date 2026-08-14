import {
  monoIndexAccentPaddedClassName,
  sectionEyebrowAccentClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export type ProcessStep = {
  number: string
  title: string
  body: string
  tools?: readonly string[]
}

type Props = {
  title?: string
  steps: readonly ProcessStep[]
}

export default function UXProcessFlow({
  title = 'From context to handoff',
  steps,
}: Props) {
  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <p className={sectionEyebrowAccentClassName}>UX process</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
          {titleWithAccentGradient(title)}
        </h2>
      </div>

      <ol className="border-t border-stroke">
        {steps.map((step) => (
          <li
            key={step.number}
            className="group grid grid-cols-12 gap-4 border-b border-stroke py-10 lg:gap-10 lg:py-12"
          >
            <span className={monoIndexAccentPaddedClassName}>{step.number}</span>
            <div className="col-span-10 sm:col-span-4">
              <h3 className={sectionSubheadingClassName}>
                {titleWithAccentGradient(step.title, {
                  leadClassName: 'transition-colors group-hover:text-accent',
                })}
              </h3>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="text-[18px] leading-[1.7] text-muted lg:text-xl">{step.body}</p>
              {step.tools && step.tools.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.tools.map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full bg-surface px-3 py-1 font-mono text-[13px] uppercase tracking-[0.18em] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
