type ImagePlaceholderProps = {
  /** Caption shown inside the placeholder. */
  label: string
  /** Aspect ratio class — defaults to 16/9. */
  aspectClass?: string
  className?: string
  /**
   * Second line under the label. Omit for default “Cover pending” path hint.
   * Pass an empty string to hide the second line entirely.
   */
  footnote?: string
}

/**
 * Atomic-style placeholder block for case study images that have not been
 * sourced yet. Uses the same rounded-[10px] / surface fill vocabulary as
 * the rest of the home + case study tiles, with a mono caption under the
 * icon.
 */
export default function ImagePlaceholder({
  label,
  aspectClass = 'aspect-[16/9]',
  className = '',
  footnote,
}: ImagePlaceholderProps) {
  const foot =
    footnote === undefined
      ? 'Cover pending — /public/work/[slug]/'
      : footnote
  return (
    <div
      className={`${aspectClass} relative w-full overflow-hidden rounded-[10px] bg-surface ${className}`}
      aria-label={`Image placeholder for ${label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="text-foreground/30"
        >
          <rect
            x="3"
            y="5"
            width="26"
            height="22"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="11" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M3 22l7-6 5 4 4-3 10 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-foreground/60">
          {label}
        </p>
        {foot ? (
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted/70">
            {foot}
          </p>
        ) : null}
      </div>
    </div>
  )
}
