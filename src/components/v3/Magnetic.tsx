'use client'

import { useRef, type ReactNode } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type MagneticProps = {
  children: ReactNode
  className?: string
  /** Max translation in px at the element's edge. */
  strength?: number
}

/**
 * Magnetic hover — the child is gently pulled toward the cursor while it
 * roams the wrapper, and springs back elastically on leave. Wrap buttons
 * and key links; no-op under reduced motion and on touch.
 */
export default function Magnetic({
  children,
  className = '',
  strength = 10,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || prefersReducedMotion) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const rect = el.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(el, {
      x: relX * strength * 2,
      y: relY * strength * 2,
      duration: 0.4,
      ease: 'power3.out',
    })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el || prefersReducedMotion) return
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </div>
  )
}
