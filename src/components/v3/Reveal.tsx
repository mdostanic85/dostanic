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
 * GSAP scroll-triggered entrance. Content remains fully visible at every
 * point; motion only adds a short vertical settle. If animation setup fails,
 * the page still reads normally.
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
      return
    }

    const ctx = gsap.context(() => {
      const targets = staggerSelector
        ? Array.from(node.querySelectorAll(staggerSelector))
        : [node]

      gsap.fromTo(targets, {
        y: 18,
      }, {
        y: 0,
        duration: 0.8,
        delay,
        ease: 'expo.out',
        stagger: staggerSelector ? 0.08 : 0,
        onComplete() {
          targets.forEach((el) => {
            gsap.set(el, { clearProps: 'transform' })
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
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
