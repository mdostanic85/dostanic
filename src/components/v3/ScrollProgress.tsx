'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Hairline scroll progress — a 2px accent line pinned under the nav,
 * scaleX driven by document scroll. rAF-throttled, no re-renders.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let raf = 0
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`
      raf = 0
    }
    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [prefersReducedMotion])

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed left-0 top-16 z-50 h-px w-full origin-left scale-x-0 bg-white mix-blend-difference"
    />
  )
}
