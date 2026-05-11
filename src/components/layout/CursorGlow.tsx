'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Site-wide cursor halo. A fixed-position radial gradient that tracks the
 * mouse globally so the entire page feels reactive — replaces the previous
 * single-section wave stripe with a continuous, full-page gradient that
 * never breaks across section boundaries.
 *
 * Implementation notes:
 *  - Mounted once at the root layout. Sits behind every section via
 *    `z-[-1]` so the body's ambient gradient peeks through underneath
 *    and the halo paints on top of it but below all content.
 *  - Cursor position is written to CSS variables on each `pointermove`
 *    via direct DOM `setProperty` — no React state to avoid re-renders
 *    in a high-frequency listener.
 *  - On touch devices (no hover) and `prefers-reduced-motion` users we
 *    fall back to a calm centered halo with no tracking.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      el.style.setProperty('--cursor-x', '50vw')
      el.style.setProperty('--cursor-y', '50vh')
      return
    }

    const hasFinePointer =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(hover: hover) and (pointer: fine)').matches

    if (!hasFinePointer) {
      el.style.setProperty('--cursor-x', '50vw')
      el.style.setProperty('--cursor-y', '50vh')
      return
    }

    let raf = 0
    let nextX = window.innerWidth / 2
    let nextY = window.innerHeight / 2

    const apply = () => {
      el.style.setProperty('--cursor-x', `${nextX}px`)
      el.style.setProperty('--cursor-y', `${nextY}px`)
      raf = 0
    }

    const handle = (e: PointerEvent | MouseEvent) => {
      nextX = e.clientX
      nextY = e.clientY
      if (raf === 0) raf = requestAnimationFrame(apply)
    }

    window.addEventListener('pointermove', handle, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handle)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [prefersReducedMotion])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-[-1]"
    />
  )
}
