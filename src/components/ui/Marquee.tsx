import type { ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  /** Speed token. Defaults to 'medium'. */
  speed?: 'fast' | 'medium' | 'slow'
  /** Reverse the direction of travel. */
  reverse?: boolean
  /** Outer wrapper class — apply borders, padding, background here. */
  className?: string
  /** Pause animation when the user hovers the strip. */
  pauseOnHover?: boolean
  /** Optional aria label — defaults to a sensible value. */
  label?: string
}

const speedClass = {
  fast: 'animate-marquee-fast',
  medium: 'animate-marquee',
  slow: 'animate-marquee',
}

/**
 * Infinite-scroll text strip in the spirit of atomic.black's
 * "ProfessionalAgency · Atomic" header band. Children are rendered
 * twice back-to-back so the loop is seamless. The pair travels by -50%
 * which is exactly the width of one copy.
 */
export default function Marquee({
  children,
  speed = 'medium',
  reverse = false,
  className = '',
  pauseOnHover = true,
  label = 'Decorative scrolling banner',
}: MarqueeProps) {
  const trackClass = reverse ? 'animate-marquee-reverse' : speedClass[speed]

  return (
    <div
      role="presentation"
      aria-label={label}
      className={[
        'relative flex w-full overflow-hidden',
        pauseOnHover ? 'marquee-pause-on-hover' : '',
        className,
      ].join(' ')}
    >
      <div className={`marquee-track ${trackClass}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
