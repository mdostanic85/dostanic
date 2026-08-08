'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Site-wide buttery smooth scroll — Lenis is the de-facto industry standard
 * for the Awwwards-tier scroll feel (atomic.black, basement.studio, every
 * portfolio that goes viral on Twitter for "feels nice"). It hijacks the
 * native wheel/touch events and lerps the document scroll, replacing the
 * jagged native scroll with an interpolated one.
 *
 * Why a side-effect component instead of wrapping <body>?
 *   - Lenis attaches to `window` directly, so the entire document scrolls
 *     smoothly without any wrapper element. That means we keep `position:
 *     fixed`, anchor links, scroll-snap, and View Transitions all working
 *     correctly — they all use `window.scrollY` which Lenis updates in
 *     sync with the lerp.
 *   - One component, one mount. Strict-mode safe (re-mount destroys the
 *     previous instance via the cleanup).
 *
 * `prefers-reduced-motion`: Lenis is fully disabled. The native scroll
 * takes over (Safari/Chrome/Firefox all do reduced-motion-aware native
 * scroll), so users who opt out of motion get instant scroll behaviour.
 *
 * Renders nothing — purely a side-effect component. Mount once in the
 * root layout.
 */
export default function SmoothScroll() {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      // Easing curve — a softened ease-out-expo. Lenis defaults to a
      // similar curve but slightly slower; this one settles ~600ms after
      // the wheel stops, which feels responsive without overshooting.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Lerp factor — lower = smoother & slower; higher = snappier &
      // closer to native. 0.1 is the sweet spot used by most production
      // sites. Bumped a touch to 0.12 so heavy scrolls don't feel
      // mushy on long pages.
      lerp: 0.12,
      // Wheel multiplier — keeps wheel input close to native intensity
      // so trackpad users don't have to push twice as hard.
      wheelMultiplier: 1,
      // Touch input — keep native touch behavior so iOS rubber-banding
      // and momentum scrolling stays intact.
      touchMultiplier: 1.4,
      // Smooth wheel events. Touch is left native because Lenis-smoothed
      // touch on iOS feels rubbery and competes with rubber-banding.
      smoothWheel: true,
    })

    let raf = 0
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [prefersReducedMotion])

  return null
}
