import type { ReactNode } from 'react'

export type StructureNode = {
  label: string
  /** One level of nesting is enough to show a hierarchy; deeper reads as noise. */
  children?: string[]
  /**
   * Names what is wrong with this node and marks it as the problem. The word is
   * per-node on purpose — "ambiguous", "duplicated", and "siloed" are different
   * failures, and a single generic label would mislabel two of the three.
   */
  problem?: string
}

type Panel = {
  /** e.g. "Before" / "After" — kept short, it renders as a mono label. */
  label: string
  /** One line naming what this structure does to the user. */
  caption: string
  nodes: StructureNode[]
}

/**
 * Before / after of a *structure*, drawn rather than screenshotted.
 *
 * Used where the decision was architectural, so a screen capture would show
 * pixels while hiding the actual change. Nodes flagged `problem` render in a
 * warning-ish muted state with a marker, which is what makes the "before" panel
 * argue instead of merely existing.
 *
 * Deliberately built from type and hairlines — no images — so it stays honest
 * about being a diagram of structure and stays legible at any width.
 */
export default function StructureCompare({
  before,
  after,
  consequence,
}: {
  before: Panel
  after: Panel
  /** What the new structure made possible. Rendered under both panels. */
  consequence?: ReactNode
}) {
  return (
    <figure className="border border-stroke bg-surface/40">
      <div className="grid grid-cols-1 divide-y divide-stroke lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        {[before, after].map((panel, panelIndex) => {
          const isAfter = panelIndex === 1
          return (
            <div key={panel.label} className="p-7 sm:p-9">
              <div className="flex items-baseline gap-3">
                <p
                  className={[
                    'font-mono text-[11px] uppercase tracking-[0.26em]',
                    isAfter ? 'text-accent' : 'text-muted',
                  ].join(' ')}
                >
                  {panel.label}
                </p>
                {isAfter ? (
                  <span aria-hidden="true" className="text-muted/50">
                    →
                  </span>
                ) : null}
              </div>

              <p className="mt-3 max-w-[38ch] text-sm leading-[1.65] text-muted">
                {panel.caption}
              </p>

              <ul className="mt-7 space-y-px">
                {panel.nodes.map((node) => (
                  <li key={node.label}>
                    <div
                      className={[
                        'flex items-center gap-3 border-l-2 py-2.5 pl-4',
                        node.problem
                          ? 'border-l-foreground/25 bg-foreground/[0.03]'
                          : isAfter
                            ? 'border-l-accent/50'
                            : 'border-l-stroke',
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'font-mono text-[12px] tracking-[0.06em]',
                          node.problem ? 'text-muted' : 'text-foreground',
                        ].join(' ')}
                      >
                        {node.label}
                      </span>
                      {node.problem ? (
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted/70">
                          {node.problem}
                        </span>
                      ) : null}
                    </div>

                    {node.children && node.children.length > 0 ? (
                      <ul className="ml-4 border-l border-dashed border-stroke pl-5">
                        {node.children.map((child) => (
                          <li
                            key={child}
                            className="py-1.5 font-mono text-[11px] tracking-[0.06em] text-muted"
                          >
                            {child}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {consequence ? (
        <figcaption className="border-t border-stroke px-7 py-6 sm:px-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Consequence
          </p>
          <p className="mt-2 max-w-[74ch] text-base leading-[1.7] text-foreground/85">
            {consequence}
          </p>
        </figcaption>
      ) : null}
    </figure>
  )
}
