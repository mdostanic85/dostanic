/**
 * The WorkLight task model, drawn as an anatomy rather than described in prose.
 *
 * Each field is paired with the kind of source that can justify it, because the
 * product's rule is that no field stands on its own — if a claim cannot be
 * traced to an immutable source item, it does not appear. Showing the pairing is
 * the point; a list of field names would prove nothing.
 */

const FIELDS = [
  {
    field: 'Why this exists',
    evidence: 'Meeting note · thread · ticket description',
  },
  {
    field: 'Priority',
    evidence: 'Computed score · the inputs that produced it',
  },
  {
    field: 'Next action',
    evidence: 'The single concrete step, traced to its source',
  },
  {
    field: 'Done criteria',
    evidence: 'Stated acceptance, or the commitment that implied it',
  },
  {
    field: 'Ownership',
    evidence: 'Assignment · a commitment made in a meeting',
  },
  {
    field: 'Conflicts',
    evidence: 'The disagreeing sources, both kept',
  },
  {
    field: 'Sync state',
    evidence: 'Per-source health at the time of the brief',
  },
] as const

export default function TaskAnatomy() {
  return (
    <figure className="border border-stroke bg-surface/40">
      <div className="border-b border-stroke px-7 py-6 sm:px-9">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          One task
        </p>
        <p className="mt-2 max-w-[70ch] text-sm leading-[1.7] text-muted">
          Every field carries the evidence that justifies it. Nothing in the
          right column is generated — it is a link back to a source item that
          cannot be edited after ingest.
        </p>
      </div>

      <dl className="divide-y divide-stroke">
        {FIELDS.map((row) => (
          <div
            key={row.field}
            className="grid grid-cols-1 gap-2 px-7 py-4 sm:grid-cols-12 sm:gap-6 sm:px-9"
          >
            <dt className="font-mono text-[12px] tracking-[0.04em] text-foreground sm:col-span-4">
              {row.field}
            </dt>
            <dd className="flex items-start gap-3 text-sm leading-[1.6] text-muted sm:col-span-8">
              <span aria-hidden="true" className="mt-1 text-muted/50">
                ←
              </span>
              <span>{row.evidence}</span>
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}
