const ITEMS = [
  'Product UX',
  'Design systems',
  'Figma → Code',
  'AI-assisted workflow',
  'Data-heavy interfaces',
  'Accessibility',
] as const

/**
 * Hairline marquee divider — one slow uppercase track between hero and
 * work. Decorative; hidden from the accessibility tree.
 */
export default function MarqueeDivider() {
  const row = (
    <>
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 px-5 font-mono text-[12px] uppercase tracking-[0.3em] text-muted"
        >
          {item}
          <span aria-hidden="true" className="text-accent">
            ✦
          </span>
        </span>
      ))}
    </>
  )

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-stroke py-5"
    >
      <div className="marquee-track animate-marquee">
        <div className="flex shrink-0">{row}</div>
        <div className="flex shrink-0">{row}</div>
      </div>
    </div>
  )
}
