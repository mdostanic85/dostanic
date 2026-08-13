/**
 * WorkLight's central product diagram: where signals become a decision, and
 * exactly where the language model is allowed to start.
 *
 * The whole argument of the product is the vertical rule between stage 02 and
 * stage 03 — everything left of it is deterministic and testable, and the model
 * only writes about an order it did not choose. Drawn rather than screenshotted
 * because the boundary is the idea, and no screen shows a boundary.
 */

const STAGES = [
  {
    number: '01',
    title: 'Ingest',
    kind: 'Deterministic',
    lines: [
      'Read-only connectors',
      'Incremental, per source',
      'Source health tracked',
      'Raw items kept immutable',
    ],
  },
  {
    number: '02',
    title: 'Decide',
    kind: 'Deterministic',
    lines: [
      'Extract and merge',
      'Relate items to you',
      'Score and rank',
      'Expose conflicts',
    ],
  },
  {
    number: '03',
    title: 'Explain',
    kind: 'Generative',
    lines: [
      'Writes the brief',
      'Schema-bound output',
      'Cites source evidence',
      'Cannot reorder priorities',
    ],
  },
] as const

export default function SignalPipeline() {
  return (
    <figure className="border border-stroke bg-surface/40">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {STAGES.map((stage, index) => {
          const isGenerative = stage.kind === 'Generative'
          return (
            <div
              key={stage.number}
              className={[
                'relative p-7 sm:p-9',
                index < STAGES.length - 1 ? 'border-b border-stroke lg:border-b-0' : '',
                // The boundary itself — heavier rule before the generative stage.
                isGenerative
                  ? 'lg:border-l-2 lg:border-l-accent'
                  : index === 0
                    ? 'lg:border-r lg:border-r-stroke'
                    : '',
              ].join(' ')}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {stage.number} · {stage.title}
                </p>
                <p
                  className={[
                    'font-mono text-[10px] uppercase tracking-[0.18em]',
                    isGenerative ? 'text-foreground' : 'text-muted',
                  ].join(' ')}
                >
                  {stage.kind}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5">
                {stage.lines.map((line) => (
                  <li
                    key={line}
                    className="font-mono text-[12px] leading-[1.5] tracking-[0.04em] text-muted"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <figcaption className="border-t border-stroke px-7 py-6 sm:px-9">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          The boundary
        </p>
        <p className="mt-2 max-w-[74ch] text-sm leading-[1.7] text-foreground/85">
          No model runs before stage 03. The priority order is produced by code
          that can be tested and replayed, so the same day&apos;s data always
          yields the same order — and the model&apos;s job is to explain a
          decision rather than to make one.
        </p>
      </figcaption>
    </figure>
  )
}
