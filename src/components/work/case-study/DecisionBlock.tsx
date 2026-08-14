import type { ReactNode } from 'react'

export type DecisionOption = {
  label: string
  /** The one that was taken. Exactly one option per decision should set this. */
  chosen?: boolean
  /** Why it was rejected — only meaningful on options that were not chosen. */
  note?: string
}

export type Decision = {
  /** Short imperative title — the decision itself, not the topic. */
  title: string
  /** The tension. What made this a decision rather than a default. */
  tension: string
  /** Real alternatives that were on the table, including the one taken. */
  options: DecisionOption[]
  /** Why this direction won. */
  reasoning: string
  /** What was knowingly given up. Never omit this — it is the credibility. */
  tradeoff: string
  /** What became possible afterwards. */
  enabled: string
  /** Optional diagram / before-after / screen shown beside the reasoning. */
  visual?: ReactNode
}

/**
 * One key decision, argued rather than listed.
 *
 * Every block answers the same five questions in the same order — tension,
 * options, why this one, what it cost, what it unlocked — so a reader can
 * compare decisions across case studies without relearning the layout.
 *
 * The options rail is the visual argument: alternatives are struck through with
 * the reason they lost, and the taken path is marked. Showing the rejected
 * options is the part that makes this read as a decision instead of a feature
 * description.
 */
export default function DecisionBlock({
  decision,
  index,
}: {
  decision: Decision
  index: number
}) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="border-t border-stroke pt-10 lg:pt-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* ── Left: the decision and its tension ───────────────────────── */}
        <header className="lg:col-span-5">
          <p className="font-mono text-[12px] uppercase tracking-[0.26em] text-accent">
            Decision {num}
          </p>
          <h3 className="display-tight mt-5 max-w-[22ch] text-2xl font-medium text-foreground sm:text-3xl">
            {decision.title}
          </h3>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.7] text-foreground/85 sm:text-[18px]">
            {decision.tension}
          </p>
        </header>

        {/* ── Right: the reasoning ─────────────────────────────────────── */}
        <div className="lg:col-span-7">
          {/* Options — the rejected ones stay visible on purpose. */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Options on the table
            </p>
            <ul className="mt-4 space-y-3">
              {decision.options.map((option) => (
                <li key={option.label} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={[
                      'mt-[7px] h-2 w-2 shrink-0',
                      option.chosen
                        ? 'bg-accent'
                        : 'border border-stroke bg-transparent',
                    ].join(' ')}
                  />
                  <span className="text-sm leading-[1.65]">
                    {/* The strikethrough is the signal that an option was
                        rejected, so it needs enough contrast to be read as
                        deliberate rather than as a rendering artefact. */}
                    <span
                      className={
                        option.chosen
                          ? 'font-medium text-foreground'
                          : 'text-muted line-through decoration-foreground/35'
                      }
                    >
                      {option.label}
                    </span>
                    {option.chosen ? (
                      <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        chosen
                      </span>
                    ) : null}
                    {option.note ? (
                      <span className="mt-1 block text-muted/80">{option.note}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why / trade-off / enabled — a fixed three-row ledger. */}
          <dl className="mt-9 border-t border-stroke">
            <div className="grid grid-cols-1 gap-2 border-b border-stroke py-5 sm:grid-cols-4 sm:gap-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                Why this
              </dt>
              <dd className="text-base leading-[1.7] text-muted sm:col-span-3">
                {decision.reasoning}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-2 border-b border-stroke py-5 sm:grid-cols-4 sm:gap-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                Trade-off
              </dt>
              <dd className="text-base leading-[1.7] text-muted sm:col-span-3">
                {decision.tradeoff}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-4 sm:gap-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                What it enabled
              </dt>
              <dd className="text-base leading-[1.7] text-foreground/85 sm:col-span-3">
                {decision.enabled}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Visual evidence, full width under the argument ───────────────── */}
      {decision.visual ? <div className="mt-12">{decision.visual}</div> : null}
    </article>
  )
}

/** Wrapper for a run of decisions — supplies the section head and spacing. */
export function DecisionSection({
  title,
  intro,
  children,
}: {
  title: string
  intro?: string
  children: ReactNode
}) {
  return (
    <div>
      <div className="max-w-[42ch]">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
          Key decisions
        </p>
        <h2 className="display-tight mt-5 text-3xl font-medium sm:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-6 text-[17px] leading-[1.75] text-muted sm:text-[18px]">
            {intro}
          </p>
        ) : null}
      </div>
      <div className="mt-16 flex flex-col gap-20 lg:gap-28">{children}</div>
    </div>
  )
}
