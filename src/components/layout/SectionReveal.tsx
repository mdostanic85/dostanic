'use client'

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type SectionRevealProps = {
  children: React.ReactNode
  /** Optional delay before the reveal animation starts, in milliseconds. */
  delayMs?: number
  /** Used for the above-the-fold heuristic only (IntersectionObserver uses threshold 0). */
  threshold?: number
  /** Optional className passthrough — mainly so callers can adjust margins
   *  on the wrapper without needing an extra div. */
  className?: string
}

/**
 * Scroll-triggered reveal wrapper. The first time the wrapper enters the
 * viewport we flip its `data-revealed` flag, which swaps the
 * `section-reveal-pre` from-state class for `section-reveal-go` to fire
 * the keyframe defined in globals.css (24px lift + scale + blur unmask,
 * ~900ms ease-out-expo).
 *
 * Why a class swap instead of a CSS transition?
 *   - `transition` cannot animate from the unset state of `filter: blur`
 *     reliably across Safari + Chromium during initial mount.
 *   - A keyframe locks the from-state and to-state regardless of mount
 *     order, hot reload, or Strict Mode double-mount.
 *   - We also avoid emitting separate `style` properties for transform /
 *     opacity / filter — keeping the inline style purely for the delay
 *     so the wrapper can be any element on any page.
 *
 * `prefers-reduced-motion` users skip the from-state entirely — content
 * renders at rest. (See globals.css for the override.)
 */
export default function SectionReveal({
  children,
  delayMs = 0,
  threshold = 0.12,
  className = '',
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [revealed, setRevealed] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      setRevealed(true)
      return
    }

    const node = ref.current
    if (!node) return

    // If the element is already in the viewport on mount (above-the-fold
    // sections on direct navigation), reveal on the next frame so the
    // animation is visible rather than skipped.
    const rect = node.getBoundingClientRect()
    const inView =
      rect.top < window.innerHeight * (1 - threshold) && rect.bottom > 0

    if (inView) {
      const id = requestAnimationFrame(() => setRevealed(true))
      return () => cancelAnimationFrame(id)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setRevealed(true)
        observer.disconnect()
      },
      {
        /* `threshold: 0.12` alone missed short sections and some mobile
         * layouts where the ratio stayed below 0.12 until late — content
         * looked “stuck” blank. Any intersection + a generous rootMargin
         * restores reliable reveals. */
        threshold: 0,
        rootMargin: '0px 0px 12% 0px',
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReducedMotion, threshold])

  const style: CSSProperties = revealed
    ? { animationDelay: `${delayMs}ms` }
    : {}

  return (
    <div
      ref={ref}
      data-revealed={revealed ? 'true' : 'false'}
      className={[
        revealed ? 'section-reveal-go' : 'section-reveal-pre',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}
