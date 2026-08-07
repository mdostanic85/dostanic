type MetaField = {
  label: string
  value: string | string[]
}

type CaseStudyMetaProps = {
  fields: MetaField[]
  className?: string
}

/**
 * Case study metadata as a responsive card grid: one column on small
 * viewports, two on tablet, three on large (3×2 when there are six fields).
 * Sits directly under the case study headline.
 */
export default function CaseStudyMeta({ fields, className = '' }: CaseStudyMetaProps) {
  return (
    <dl
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 ${className}`}
    >
      {fields.map(({ label, value }) => (
        <div
          key={label}
          className="flex h-full min-h-0 flex-col gap-3 rounded-[10px] bg-surface p-5 sm:gap-3.5 sm:p-6"
        >
          <dt className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted sm:text-[13px]">
            {label}
          </dt>
          <dd className="text-[15px] font-medium leading-snug text-foreground sm:text-base sm:leading-snug">
            {Array.isArray(value) ? (
              <ul className="flex flex-col gap-1">
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
