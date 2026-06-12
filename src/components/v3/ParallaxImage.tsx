'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type ParallaxImageProps = {
  src: string
  alt: string
  sizes?: string
  /** Aspect class on the clipping frame, e.g. 'aspect-[16/10]'. */
  aspectClassName?: string
  className?: string
}

/**
 * Image in a clipping frame with a scroll-scrubbed inner parallax.
 * The inner image is scaled ~12% over the frame and translated on
 * scroll, so the photo glides inside its window — the quiet editorial
 * parallax, not a floating-element gimmick. Skipped entirely under
 * reduced motion.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes = '(min-width: 1024px) 60vw, 100vw',
  aspectClassName = 'aspect-[16/10]',
  className = '',
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const frame = frameRef.current
    const inner = innerRef.current
    if (!frame || !inner || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: frame,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, frame)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden border border-stroke bg-surface ${aspectClassName} ${className}`}
    >
      <div ref={innerRef} className="absolute inset-0 scale-[1.14]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
      </div>
      {/* Hover veil — quiet accent tint over the cover. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/[0.07]"
      />
    </div>
  )
}
