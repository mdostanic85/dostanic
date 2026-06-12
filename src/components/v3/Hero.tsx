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
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
          >
            Portfolio — 2026
          </p>
          <p
            data-hero-fade
            className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:flex"
          >
            <span className="pulse-host h-1.5 w-1.5" aria-hidden="true">
              <span className="pulse-ring" />
              <span className="pulse-core block h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Now booking — Q3 2026
          </p>
        </div>

        {/* Poster lockup */}
        <div className="flex flex-1 flex-col justify-center py-14">
          <h1 className="display-mega text-[clamp(56px,11.5vw,184px)] font-semibold uppercase text-foreground">
            <span className="line-mask">
              <span data-hero-line className="block">
                Complex,
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="block sm:ml-[16vw]">
                made
              </span>
            </span>
            <span className="line-mask">
              <span data-hero-line className="text-outline block">
                simple.
              </span>
            </span>
          </h1>

          <div className="mt-12 flex flex-col gap-10 sm:mt-16 lg:flex-row lg:items-end lg:justify-between">
            <p
              data-hero-fade
              className="max-w-[46ch] text-[15px] leading-[1.7] text-muted sm:text-base lg:text-[17px]"
            >
              I&apos;m Milos Dostanic — a senior product designer for B2B SaaS,
              design systems, and data-heavy software. I work from product
              thinking to production code, so what ships matches what was
              designed.
            </p>

            <div data-hero-fade className="flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link
                  href="/work"
                  className="group inline-flex h-12 items-center gap-3 border border-foreground bg-foreground px-7 font-mono text-[11px] uppercase tracking-[0.2em] text-inverse-foreground transition-colors hover:bg-transparent hover:text-foreground"
                >
                  Selected work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="mailto:milos@dostanic.net"
                  className="group inline-flex h-12 items-center gap-3 border border-stroke px-7 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  Contact
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Base rail */}
        <div
          data-hero-fade
          className="flex items-center justify-between gap-6 border-t border-stroke py-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Serbia — working worldwide
          </p>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:block">
            B2B SaaS · Design systems · Figma → Code
          </p>
          <p
            aria-hidden="true"
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted"
          >
            Scroll
            <span className="inline-block animate-bounce">↓</span>
          </p>
        </div>
      </div>
    </section>
  )
}
