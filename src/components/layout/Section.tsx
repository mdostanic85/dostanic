import SectionReveal from './SectionReveal'

type SectionProps = {
  children: React.ReactNode
  id?: string
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** At least one viewport tall; content vertically centered when shorter. */
  fullScreen?: boolean
  as?: 'section' | 'div' | 'footer'
  /** Disable the scroll-triggered reveal animation for this Section.
   *  Useful for sections that already have their own entrance animation
   *  (e.g. above-the-fold hero blocks) or for nested sections that
   *  should not double-animate. */
  noReveal?: boolean
  /** Stagger delay (ms) before the reveal animation starts. Useful when
   *  multiple Sections are stacked and you want them to cascade in. */
  revealDelayMs?: number
}

const paddingClasses = {
  none: '',
  sm: 'py-16 lg:py-24',
  md: 'py-20 lg:py-[120px]',
  lg: 'py-24 lg:py-[140px]',
}

const fullScreenClasses =
  'flex min-h-svh flex-col justify-center py-16 sm:py-20 lg:py-28'

const SECTION_DIVIDER_CLASSES = new Set([
  'border-t',
  'border-b',
  'border-y',
  'border-stroke',
])

export default function Section({
  children,
  id,
  className = '',
  padding = 'md',
  fullScreen = false,
  as: Tag = 'section',
  noReveal = false,
  revealDelayMs = 0,
}: SectionProps) {
  const cleanedClassName = className
    .split(/\s+/)
    .filter((token) => token && !SECTION_DIVIDER_CLASSES.has(token))
    .join(' ')

  const spacingClasses = fullScreen ? fullScreenClasses : paddingClasses[padding]

  // Every Section auto-wraps in a SectionReveal so the scroll-triggered
  // entrance applies site-wide without each call-site needing to remember
  // it. The reveal wraps the outer <section> (not its children) so the
  // section's background and content lift in together — otherwise users
  // would briefly see a bare bg-surface band with no content before the
  // text faded in.
  const sectionEl = (
    <Tag id={id} className={`${spacingClasses} ${cleanedClassName}`}>
      {children}
    </Tag>
  )

  if (noReveal) return sectionEl
  return <SectionReveal delayMs={revealDelayMs}>{sectionEl}</SectionReveal>
}
