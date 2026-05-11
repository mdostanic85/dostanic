type MetaField = {
  label: string
  value: string | string[]
}

type CaseStudyMetaProps = {
  fields: MetaField[]
  className?: string
}

/**
 * Atomic-style meta strip — mono captions on top, foreground value below,
 * laid out as a 2/4-column grid that wraps cleanly. Sits directly under the
 * case study headline. Replaces the old hover-card meta block.
 */
export default function CaseStudyMeta({ fields, className = '' }: CaseStudyMetaProps) {
  return (
    <dl
      className={`grid grid-cols-2 gap-x-6 gap-y-8 border-y border-stroke py-8 sm:grid-cols-3 lg:grid-cols-6 ${className}`}
    >
      {fields.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-2">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {label}
          </dt>
          <dd className="text-sm font-medium leading-snug text-foreground">
            {Array.isArray(value) ? (
              <ul className="flex flex-col gap-0.5">
                {value.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
