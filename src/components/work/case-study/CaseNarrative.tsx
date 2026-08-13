import type { ReactNode } from 'react'

/**
 * The shared narrative furniture for a case study, in the order it is read:
 * role → the real problem → the complication → (decisions) → reflection.
 *
 * Each piece is one component so every case study tells its story in the same
 * shape. The point of the fixed shape is comparability: a reader who has read
 * one case knows exactly where to look in the next.
 */

/** What this person personally owned. First person, no "we". */
export function CaseRole({
  summary,
  points,
  collaborators,
}: {
  /** One sentence stating the role plainly. */
  summary: string
  /** Concrete owned areas. Each starts with a verb. */
  points: string[]
  /** Optional honest note on who else was involved, kept separate from ownership. */
  collaborators?: string
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
          My role
        </p>
        <p className="display-tight mt-5 max-w-[20ch] text-2xl font-medium leading-[1.25] text-foreground sm:text-3xl">
          {summary}
        </p>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <ul className="border-t border-stroke">
          {points.map((point) => (
            <li
              key={point}
              className="border-b border-stroke py-4 text-[17px] leading-[1.7] text-muted sm:text-[18px]"
            >
              {point}
            </li>
          ))}
        </ul>
        {collaborators ? (
          <p className="mt-6 max-w-[60ch] text-base leading-[1.7] text-muted/80">
            {collaborators}
          </p>
        ) : null}
      </div>
    </div>
  )
}

/** What made the project genuinely hard. Not a list of tasks. */
export function CaseProblem({
  lead,
  points,
}: {
  lead: string
  points: string[]
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
          The real problem
        </p>
        <p className="display-tight mt-5 max-w-[26ch] text-2xl font-medium leading-[1.25] text-foreground sm:text-3xl lg:text-[32px]">
          {lead}
        </p>
      </div>

      <ul className="lg:col-span-6 lg:col-start-7">
        {points.map((point, idx) => (
          <li
            key={point}
            className="flex items-start gap-5 border-b border-stroke py-5 last:border-b-0"
          >
            <span className="mt-1 font-mono text-[12px] tracking-[0.22em] text-accent">
              /{String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-[17px] leading-[1.7] text-muted sm:text-[18px]">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * The complication — the turn that made the obvious solution insufficient.
 * Rendered as a full-width statement because it is the hinge of the story.
 */
export function CaseComplication({
  statement,
  body,
}: {
  statement: string
  body: string
}) {
  return (
    <div className="mx-auto max-w-[80ch]">
      <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
        Then it got harder
      </p>
      <p className="display-tight mt-6 text-2xl font-medium leading-[1.3] text-foreground sm:text-3xl lg:text-[38px]">
        {statement}
      </p>
      <p className="mt-8 max-w-[64ch] text-[17px] leading-[1.75] text-muted sm:text-[18px] lg:text-xl">
        {body}
      </p>
    </div>
  )
}

/** Verifiable outcomes only — never invented numbers. */
export function CaseOutcome({
  points,
  aside,
}: {
  points: string[]
  aside?: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-6">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
          Outcome
        </p>
        <ul className="mt-7 space-y-5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent"
              />
              <span className="text-[17px] leading-[1.7] text-muted sm:text-[18px]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {aside ? <div className="lg:col-span-5 lg:col-start-8">{aside}</div> : null}
    </div>
  )
}

/**
 * Short closing reflection. Present tense, no self-congratulation — this is the
 * section that makes the work read as mature rather than promotional.
 */
export function CaseReflection({
  items,
}: {
  items: { label: string; body: string }[]
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-3">
        <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-muted">
          Reflection
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-9 lg:col-span-9 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
              {item.label}
            </p>
            <p className="mt-3 text-base leading-[1.7] text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
