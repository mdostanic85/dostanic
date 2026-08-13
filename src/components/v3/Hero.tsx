'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import ParticleField from './ParticleField'
import Magnetic from './Magnetic'

/**
 * V3 hero — full-viewport poster lockup. Mono eyebrow, three uppercase mega
 * lines with the object line in outline stroke, copy + magnetic CTAs below,
 * hairline base rail. Particle constellation behind.
 *
 * The headline breaks on its own phrases — subject, object, outcome — and
 * steps right on each line. The clamp floor is set by the longest phrase at
 * the narrowest supported width, so no line ever wraps inside its mask.
 *
 * Motion: GSAP timeline — eyebrow fades first, masked lines rise with a
 * slight skew that settles, the rest fades, field eases in. Reduced motion
 * renders at rest.
 */
export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (prefersReducedMotion) {
      gsap.set(root.querySelectorAll('[data-hero-fade], [data-hero-line], [data-hero-eyebrow]'), {
        clearProps: 'all',
        opacity: 1,
        y: 0,
        yPercent: 0,
        skewY: 0,
      })
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'expo.out' },
        delay: 0.15,
      })

      tl.fromTo(
        '[data-hero-field]',
        { opacity: 0 },
        { opacity: 1, duration: 2.2, ease: 'power2.out' },
        0
      )
        .fromTo(
          '[data-hero-eyebrow]',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.9 },
          0.05
        )
        .fromTo(
          '[data-hero-line]',
          { yPercent: 114, skewY: 4 },
          { yPercent: 0, skewY: 0, duration: 1.4, stagger: 0.13 },
          0.25
        )
        .fromTo(
          '[data-hero-fade]',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
          0.85
        )
    }, root)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={rootRef}
      aria-label="Introduction"
      className="chapter-dark grain relative flex min-h-[100svh] flex-col overflow-hidden bg-background text-foreground"
    >
      {/* Drifting constellation — behind everything. */}
      <div data-hero-field className="absolute inset-0">
        <ParticleField />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-5 pt-16 sm:px-8 lg:px-12">
        {/* Poster lockup */}
        <div className="flex flex-1 flex-col justify-center py-12 sm:py-16">
          <p
            data-hero-eyebrow
            className="font-mono text-[13px] font-normal uppercase tracking-[0.2em] text-accent sm:text-[15px] sm:tracking-[0.28em]"
          >
            Senior Product Designer / Product Builder
          </p>

          <h1 className="display-mega mt-10 text-[clamp(46px,8.2vw,132px)] font-semibold uppercase !leading-[0.96] text-foreground sm:mt-14">
            <span className="line-mask">
              <span data-hero-line className="block">
                I design
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="text-outline block text-[clamp(38px,9vw,148px)] sm:ml-[10vw]">
                complex software
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="block sm:ml-[18vw]">
                that ships.
              </span>
            </span>
          </h1>

          <div className="mt-12 flex flex-col gap-8 sm:mt-16 lg:flex-row lg:items-end lg:justify-between">
            <p
              data-hero-fade
              className="max-w-[46ch] text-[17px] leading-[1.7] text-muted sm:text-[18px] lg:text-[19px]"
            >
              I take on the products other designers pass on — too many roles,
              too many edge cases, too much at stake to fake with a mockup —
              and turn them into structure engineering can actually build.
            </p>

            <div data-hero-fade className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  href="#selected-work"
                  data-analytics-event="selected_work_action"
                  className="group inline-flex h-12 items-center gap-3 border border-foreground bg-foreground px-7 font-mono text-[12px] uppercase tracking-[0.2em] text-inverse-foreground transition-colors hover:bg-transparent hover:text-foreground"
                >
                  View selected work
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  data-analytics-event="contact_action"
                  className="group inline-flex h-12 items-center gap-3 border border-stroke px-7 font-mono text-[12px] uppercase tracking-[0.2em] text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  Let’s talk
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Scroll affordance only — the hero deliberately carries no second
            message. Employer and current product live further down the page,
            where they read as evidence instead of as a badge. */}
        <div data-hero-fade className="flex items-center border-t border-stroke py-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted">
            <span aria-hidden="true" className="mr-3 inline-block">↓</span>
            Selected work
          </p>
        </div>
      </div>
    </section>
  )
}
