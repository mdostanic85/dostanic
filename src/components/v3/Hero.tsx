'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import ParticleField from './ParticleField'
import Magnetic from './Magnetic'

/**
 * V3 hero — full-viewport poster lockup. Three uppercase mega lines,
 * the last one in outline stroke; mono meta rail top, copy + magnetic
 * CTAs bottom, hairline base rail. Particle constellation behind.
 *
 * Motion: GSAP timeline — masked lines rise with a slight skew that
 * settles, meta fades, field eases in. Reduced motion renders at rest.
 */
export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (prefersReducedMotion) {
      gsap.set(root.querySelectorAll('[data-hero-fade], [data-hero-line]'), {
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
          '[data-hero-line]',
          { yPercent: 114, skewY: 4 },
          { yPercent: 0, skewY: 0, duration: 1.4, stagger: 0.13 },
          0.1
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
        {/* Meta rail */}
        <div className="flex items-start justify-between gap-6 pt-8 sm:pt-12">
          <p
            data-hero-fade
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
          >
            Senior Product Designer & Product Builder
          </p>
          <p
            data-hero-fade
            className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted sm:flex"
          >
            <span className="pulse-host h-1.5 w-1.5" aria-hidden="true">
              <span className="pulse-ring" />
              <span className="pulse-core block h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Open to senior remote product roles
          </p>
        </div>

        {/* Poster lockup */}
        <div className="flex flex-1 flex-col justify-center py-8 sm:py-10">
          <h1 className="display-mega text-[clamp(42px,7.3vw,118px)] font-semibold uppercase !leading-[0.92] text-foreground">
            <span className="line-mask">
              <span data-hero-line className="block">
                I design
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="block sm:ml-[10vw]">
                complex B2B
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="text-outline block sm:ml-[4vw]">
                products teams
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="block sm:ml-[22vw]">
                can build.
              </span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-7 sm:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <p
              data-hero-fade
              className="max-w-[46ch] text-[15px] leading-[1.7] text-muted sm:text-base lg:text-[17px]"
            >
              Complex workflows, design systems, data-heavy interfaces, and
              AI-powered products. I work from early product thinking to
              implementation-ready delivery.
            </p>

            <div data-hero-fade className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  href="#selected-work"
                  data-analytics-event="selected_work_action"
                  className="group inline-flex h-12 items-center gap-3 border border-foreground bg-foreground px-7 font-mono text-[11px] uppercase tracking-[0.2em] text-inverse-foreground transition-colors hover:bg-transparent hover:text-foreground"
                >
                  View selected work
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  data-analytics-event="contact_action"
                  className="group inline-flex h-12 items-center gap-3 border border-stroke px-7 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  Contact me
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Base rail */}
        <div
          data-hero-fade
          className="flex items-center justify-between gap-6 border-t border-stroke py-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            12+ years across design · 10+ years digital products
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-muted md:block">
            Serbia / CET · Remote worldwide
          </p>
          <p
            aria-hidden="true"
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
          >
            Scroll
            <span className="inline-block animate-bounce">↓</span>
          </p>
        </div>
      </div>
    </section>
  )
}
