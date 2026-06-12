'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Seconds added to the entrance delay — for cascading siblings. */
  delay?: number
  /** Stagger direct children instead of revealing the wrapper as one block.
   *  Pass a CSS selector for the items, e.g. '[data-reveal-item]'. */
  staggerSelector?: string
}

/**
 * GSAP scroll-triggered entrance. The from-state (opacity 0, 28px down)
 * is painted by the `.gsap-reveal` CSS class so SSR output never flashes;
 * GSAP animates to rest when the wrapper enters the viewport, then clears
 * inline props.
 *
 * Reduced motion: the class is removed and no tween runs — content at rest.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  staggerSelector,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    if (prefersReducedMotion) {
      node.classList.remove('gsap-reveal')
      node
        .querySelectorAll('.gsap-reveal')
        .forEach((el) => el.classList.remove('gsap-reveal'))
      return
    }

    const ctx = gsap.context(() => {
      const targets = staggerSelector
        ? Array.from(node.querySelectorAll(staggerSelector))
        : [node]

      if (staggerSelector) {
        // Wrapper itself should not stay hidden when staggering children.
        node.classList.remove('gsap-reveal')
        targets.forEach((el) => el.classList.add('gsap-reveal'))
      }

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'expo.out',
        stagger: staggerSelector ? 0.08 : 0,
        // The from-state lives in the `.gsap-reveal` class — drop the class
        // BEFORE clearing inline props, otherwise the element snaps back to
        // opacity:0 the moment clearProps removes the inline override.
        onComplete() {
          targets.forEach((el) => {
            ;(el as HTMLElement).classList.remove('gsap-reveal')
            gsap.set(el, { clearProps: 'opacity,transform' })
          })
        },
        scrollTrigger: {
          trigger: node,
          start: 'top 88%',
          once: true,
        },
      })
    }, node)

    return () => ctx.revert()
  }, [prefersReducedMotion, delay, staggerSelector])

  return (
    <div ref={ref} className={`gsap-reveal ${className}`}>
      {children}
    </div>
  )
}
