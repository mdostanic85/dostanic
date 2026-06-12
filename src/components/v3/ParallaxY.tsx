'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type ParallaxYProps = {
  children: React.ReactNode
  className?: string
  /** Total drift in px across the element's scroll journey (positive =
   *  moves up slower than the page, i.e. classic background parallax). */
  drift?: number
}

/**
 * Scroll-scrubbed vertical drift — for ghost numerals and decorative
 * marks that should move at a different speed than the page. Quiet by
 * default; no-op under reduced motion.
 */
export default function ParallaxY({
  children,
  className = '',
  drift = 80,
}: ParallaxYProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: drift / 2 },
        {
          y: -drift / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [prefersReducedMotion, drift])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
