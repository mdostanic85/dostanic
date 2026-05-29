import { cn } from '@/lib/utils'
import { sectionEyebrowAccentClassName, sectionSubheadingClassName } from '@/lib/headings'

type Props = {
  intro?: string
  challengeTitle?: string
  responseTitle?: string
  problems: readonly string[]
  solutions: readonly string[]
}

export default function ProblemSolution({
  intro,
  challengeTitle = 'Fragmented experience, heavy cognitive load',
  responseTitle = 'Unified structure, clearer hierarchy',
  problems,
  solutions,
}: Props) {
  return (
    <div className="space-y-10">
      {intro ? (
        <p className="max-w-2xl text-base leading-[1.7] text-muted lg:text-lg">{intro}</p>
      ) : null}

      <p className={sectionEyebrowAccentClassName}>Problem → solution</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <article className="rounded-[10px] border border-stroke bg-surface p-6 lg:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            The challenge
          </p>
          <h3 className={cn(sectionSubheadingClassName, 'mt-4')}>{challengeTitle}</h3>
          <ul className="mt-6 space-y-4">
            {problems.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-[1.65] text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[10px] border border-stroke bg-surface/60 p-6 lg:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Design response
          </p>
          <h3 className={cn(sectionSubheadingClassName, 'mt-4')}>{responseTitle}</h3>
          <ul className="mt-6 space-y-4">
            {solutions.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-[1.65] text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  )
}
