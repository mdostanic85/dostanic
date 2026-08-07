import Link from 'next/link'

const CREDENTIALS = [
  { value: '12+', label: 'years across design' },
  { value: '10+', label: 'years in digital products' },
  { value: 'CET', label: 'Serbia · remote worldwide' },
] as const

const NAMES = ['Space Inch', 'Polyrific', 'Quantox', 'TheBrendz', 'HEINEKEN', 'WorkLight']

export default function CredibilityStrip() {
  return (
    <section aria-label="Experience and selected clients" className="border-b border-stroke bg-surface">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <dl className="grid grid-cols-1 border-x border-stroke sm:grid-cols-3">
          {CREDENTIALS.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline gap-4 border-b border-stroke px-5 py-6 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:px-7 sm:py-8 sm:last:border-r-0"
            >
              <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted sm:mt-3">
                {item.label}
              </dt>
              <dd className="display-tight text-3xl font-medium text-foreground sm:text-4xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-5 border-x border-t border-stroke px-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Selected experience and products
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Selected experience and products">
            {NAMES.map((name) => (
              <li key={name} className="text-sm font-medium text-foreground/75">
                {name}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-accent"
          >
            Full experience <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
