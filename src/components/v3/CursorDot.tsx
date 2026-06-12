'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Cursor follower — a small accent dot glued to the pointer plus a lagging
 * ring. Over any interactive element (a, button, [data-cursor]) the ring
 * swells and fills slightly; over text it stays quiet. The native cursor
 * is kept (usability first), the follower is pure garnish.
 *
 * Fine pointers only; reduced motion renders nothing.
 */
export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring || prefersReducedMotion) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    let visible = false

    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
      }
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element &&
      !!t.closest('a, button, [role="button"], [data-cursor]')

    // Stay monochrome — both elements sit in a mix-blend-difference
    // layer, where any hue would shift unpredictably across chapters.
    const onOver = (e: PointerEvent) => {
      if (!isInteractive(e.target)) return
      gsap.to(ring, {
        scale: 1.8,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        duration: 0.35,
        ease: 'power3.out',
      })
      gsap.to(dot, { scale: 0.5, duration: 0.35, ease: 'power3.out' })
    }
    const onOut = (e: PointerEvent) => {
      if (!isInteractive(e.target)) return
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        duration: 0.35,
        ease: 'power3.out',
      })
      gsap.to(dot, { scale: 1, duration: 0.35, ease: 'power3.out' })
    }

    const onLeaveDoc = () => {
      visible = false
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerout', onOut, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeaveDoc)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
      document.documentElement.removeEventListener('pointerleave', onLeaveDoc)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-1.5 w-1.5 rounded-full bg-white mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-9 w-9 rounded-full border border-white/40 mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:block"
      />
    </>
  )
}
