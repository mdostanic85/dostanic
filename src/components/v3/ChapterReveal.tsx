'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type ChapterRevealProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Chapter transition — the wrapped section scrolls in as an inset,
 * rounded panel and expands to full bleed as it approaches the viewport
 * top (scroll-scrubbed clip-path). Used on the ink chapters so the
 * dark slab "unfolds" out of the icy body instead of just starting.
 * No-op under reduced motion.
 */
export default function ChapterReveal({
  children,
  className = '',
}: ChapterRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(7% 5% 7% 5% round 32px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 32%',
            scrub: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className={className} style={{ willChange: 'clip-path' }}>
      {children}
    </div>
  )
}
