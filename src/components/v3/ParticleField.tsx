'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Hero background — a drifting constellation field on canvas 2D.
 *
 * ~110 particles wander on a slow flow field; pairs within range are
 * connected by hairline segments whose opacity falls off with distance.
 * The cursor exerts a gentle radial push so the field parts around the
 * pointer. Cyan-tinted, very low alpha — atmosphere, not spectacle.
 *
 * Why canvas 2D instead of Three.js: the effect is 2D lines + dots; a
 * WebGL scene-graph would add ~150 kB of JS for identical output. This
 * keeps the hero cinematic and the first load fast.
 *
 * Reduced motion: a single static frame is drawn, no rAF loop, no
 * pointer listener. DPR-aware, caps at 2x. Pauses when the tab is
 * hidden and when the hero is fully scrolled out of view.
 */

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  /** Phase offset for per-particle drift variation. */
  seed: number
}

const PARTICLE_DENSITY = 1 / 14000 // particles per px² — ~110 on 1440×900
const MAX_PARTICLES = 160
const LINK_DIST = 130
const CURSOR_RADIUS = 180
const CURSOR_FORCE = 0.6
const DRIFT_SPEED = 0.16
/* Field opacity — raised 15% over the original 0.13 / 0.25 / 0.20 so the
   constellation reads against the ink chapter without turning into
   spectacle. Still atmosphere; just no longer nearly invisible. */
const LINK_ALPHA = 0.15
const DOT_ALPHA = 0.29
const DOT_TWINKLE = 0.23

export default function ParticleField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let raf = 0
    let running = false
    let inView = true
    let pageVisible = true

    // Cursor in canvas coordinates; far offscreen until first move.
    let cursorX = -9999
    let cursorY = -9999

    const accent = () =>
      // Read from the canvas, not the root — the field lives inside a
      // `.chapter-dark` scope whose accent differs from the page default.
      getComputedStyle(canvas).getPropertyValue('--color-accent').trim() ||
      '#22d3ee'

    const seedParticles = () => {
      const target = Math.min(
        MAX_PARTICLES,
        Math.round(width * height * PARTICLE_DENSITY)
      )
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * DRIFT_SPEED * 2,
        vy: (Math.random() - 0.5) * DRIFT_SPEED * 2,
        seed: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(2, window.devicePixelRatio || 1)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedParticles()
      // Paint one frame synchronously — the rAF loop may start late (or
      // be throttled in background tabs) and the field should never be
      // blank on first paint.
      drawFrame(0)
    }

    const drawFrame = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      const color = accent()

      // Links first so dots paint on top.
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 > LINK_DIST * LINK_DIST) continue
          const alpha = (1 - Math.sqrt(dist2) / LINK_DIST) * LINK_ALPHA
          ctx.strokeStyle = color
          ctx.globalAlpha = alpha
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
      for (const p of particles) {
        const tw = DOT_ALPHA + DOT_TWINKLE * Math.sin(t * 0.0011 + p.seed * 7)
        ctx.fillStyle = color
        ctx.globalAlpha = tw
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const step = (t: number) => {
      for (const p of particles) {
        // Slow flow-field drift — sinusoidal field keeps motion organic
        // without a noise library.
        const angle =
          Math.sin(p.x * 0.0016 + t * 0.00012 + p.seed) +
          Math.cos(p.y * 0.0014 - t * 0.0001)
        p.vx += Math.cos(angle) * 0.004
        p.vy += Math.sin(angle) * 0.004

        // Cursor repulsion.
        const dx = p.x - cursorX
        const dy = p.y - cursorY
        const d2 = dx * dx + dy * dy
        if (d2 < CURSOR_RADIUS * CURSOR_RADIUS && d2 > 0.01) {
          const d = Math.sqrt(d2)
          const f = ((CURSOR_RADIUS - d) / CURSOR_RADIUS) * CURSOR_FORCE
          p.vx += (dx / d) * f * 0.06
          p.vy += (dy / d) * f * 0.06
        }

        // Speed cap + damping.
        p.vx *= 0.985
        p.vy *= 0.985
        const sp = Math.hypot(p.vx, p.vy)
        const cap = DRIFT_SPEED * 2.4
        if (sp > cap) {
          p.vx = (p.vx / sp) * cap
          p.vy = (p.vy / sp) * cap
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap edges with a small margin so links don't pop.
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }
    }

    const tick = (t: number) => {
      step(t)
      drawFrame(t)
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running || prefersReducedMotion) return
      if (!inView || !pageVisible) return
      running = true
      raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    if (!prefersReducedMotion) {
      const io = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting
          if (inView) start()
          else stop()
        },
        { threshold: 0 }
      )
      io.observe(canvas)

      const onVisibility = () => {
        pageVisible = document.visibilityState === 'visible'
        if (pageVisible) start()
        else stop()
      }
      document.addEventListener('visibilitychange', onVisibility)

      const onPointerMove = (e: PointerEvent) => {
        const rect = canvas.getBoundingClientRect()
        cursorX = e.clientX - rect.left
        cursorY = e.clientY - rect.top
      }
      const onPointerLeave = () => {
        cursorX = -9999
        cursorY = -9999
      }
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onPointerLeave)

      start()

      return () => {
        stop()
        ro.disconnect()
        io.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        window.removeEventListener('pointermove', onPointerMove)
        document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      }
    }

    // Reduced motion — static frame only.
    drawFrame(0)
    return () => ro.disconnect()
  }, [prefersReducedMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
