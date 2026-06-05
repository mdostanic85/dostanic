'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Mouse-reactive wave-packet stripe. A thin horizontal spine spans the
 * full width and six overlapping sine paths swell up out of the spine
 * inside a Gaussian envelope. The envelope's centre tracks the cursor
 * (within the SVG's bounding rect) so the bloom slides along with the
 * mouse — this restores the reactive behaviour from the older mouse
 * version while keeping the calmer baseline amplitudes from the
 * ambient revision.
 *
 *  - When the pointer is idle, the packet drifts back to the strip
 *    centre after IDLE_RECENTER_MS so the wave sits still and reads
 *    as a calm horizontal line + bloom.
 *  - When the pointer sits inside the SVG's screen rect, a smoothed
 *    "hover" blend ramps up: faster phase travel, slightly higher
 *    amplitudes, tighter ripples, and snappier packet lerps so the
 *    bundle feels more alive without changing pointer-events on the
 *    strip (hit-test uses the same bounding rect as cursor mapping).
 *
 * Implementation notes:
 *  - All motion is driven by direct DOM `setAttribute` inside a
 *    single `requestAnimationFrame` loop. Re-rendering React on every
 *    frame for ~6 path updates × many samples would be wasteful.
 *    Each `<path>` still gets a static initial `d` (see INITIAL_PATH_DS)
 *    so the first paint and SSR HTML show the full wave, not an empty
 *    path that only fills in after `useEffect`.
 *  - The spine and paths use `vector-effect: non-scaling-stroke` so
 *    line weight stays constant regardless of how wide the SVG is
 *    rendered.
 *  - `prefers-reduced-motion` users get a single static frame at t=0
 *    with the packet pinned to the centre; no rAF loop runs and no
 *    pointer listener attaches.
 *
 * Full width: the root wrapper uses `w-screen` + `ml-[calc(50%-50vw)]`
 * so the stripe spans the viewport even when nested inside a max-width
 * container (e.g. home Hero).
 */

const WIDTH = 1200
const HEIGHT = 120
const CENTER_Y = HEIGHT / 5
// More points → smoother polylines (L segments) under preserveAspectRatio="none".
const SAMPLES = 200
const DEFAULT_PACKET_X = WIDTH / 2

// Gaussian envelope width (sigma in viewBox units). ~190 keeps the
// bloom slightly wider than 1/3 of the strip — wide enough that
// near-edge cursor positions still produce a smooth taper to the
// straight spine instead of a sharp cut-off.
const ENVELOPE_SIGMA = 240

// After this much idle time, the packet target snaps back to the
// strip's centre so the wave returns to its calm rest state.
const IDLE_RECENTER_MS = 700

type WavePath = {
  /** Initial phase offset in radians. */
  phase: number
  /** Temporal frequency — radians per second. Higher = faster motion. */
  timeFreq: number
  /** Spatial frequency — radians per pixel along the x axis. */
  spatialFreq: number
  /** Peak amplitude in viewBox units (clamped by the envelope). */
  amp: number
  /** Stroke opacity per path — staggers depth so the bundle reads as
   *  six layered ribbons instead of one thick stroke. */
  opacity: number
  /** Per-path smoothing factor for packet-X tracking. Lower = more
   *  trail. Together they create the visible wake when the cursor
   *  moves quickly across the strip. */
  lerp: number
}

// Time frequencies bumped ~25-30% over the previous revision so the
// motion reads as "slightly faster" without losing the calm character.
const PATHS: WavePath[] = [
  { phase: 0.0, timeFreq: 1.20, spatialFreq: 0.022, amp: 30, opacity: 0.85, lerp: 0.10 },
  { phase: 0.7, timeFreq: 1.55, spatialFreq: 0.019, amp: 26, opacity: 0.7,  lerp: 0.085 },
  { phase: 1.4, timeFreq: 1.00, spatialFreq: 0.026, amp: 34, opacity: 0.95, lerp: 0.075 },
  { phase: 2.1, timeFreq: 1.80, spatialFreq: 0.017, amp: 22, opacity: 0.6,  lerp: 0.060 },
  { phase: 2.8, timeFreq: 1.30, spatialFreq: 0.029, amp: 28, opacity: 0.75, lerp: 0.050 },
  { phase: 3.5, timeFreq: 1.45, spatialFreq: 0.0205, amp: 24, opacity: 0.65, lerp: 0.040 },
]

// Spine sits at HEIGHT/5; sine peaks extend above it into negative y. Expand
// the viewBox upward so those arcs are not clipped to a flat edge at y=0.
const MAX_PATH_AMP = Math.max(...PATHS.map((p) => p.amp))
const VIEW_TOP_PAD = Math.max(
  8,
  Math.ceil(MAX_PATH_AMP * (1 + 0.4) - CENTER_Y + 6)
)

type WaveDrawOpts = {
  /** Multiplier on temporal frequency — >1 speeds phase travel. */
  timeScale?: number
  /** Multiplier on peak amplitude. */
  ampScale?: number
  /** Multiplier on spatial frequency — >1 tightens ripples along x. */
  spatialScale?: number
}

function buildPathData(
  t: number,
  packetX: number,
  p: WavePath,
  opts?: WaveDrawOpts
): string {
  const timeScale = opts?.timeScale ?? 1
  const ampScale = opts?.ampScale ?? 1
  const spatialScale = opts?.spatialScale ?? 1
  let d = ''
  for (let i = 0; i <= SAMPLES; i++) {
    const x = (i / SAMPLES) * WIDTH
    const dx = x - packetX
    const envelope = Math.exp(
      -(dx * dx) / (2 * ENVELOPE_SIGMA * ENVELOPE_SIGMA)
    )
    const y =
      CENTER_Y +
      p.amp *
        ampScale *
        envelope *
        Math.sin(
          p.phase +
            t * p.timeFreq * timeScale +
            x * p.spatialFreq * spatialScale
        )
    d += (i === 0 ? 'M' : ' L') + ' ' + x.toFixed(3) + ' ' + y.toFixed(3)
  }
  return d
}

/** First-frame path data — matches `useEffect`’s initial `setAttribute` so
 *  the stripe looks correct on SSR and before the rAF loop mounts. */
const INITIAL_PATH_DS = PATHS.map((p) =>
  buildPathData(0, DEFAULT_PACKET_X, p)
)

export default function WaveStripe() {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathRefs = useRef<(SVGPathElement | null)[]>([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    // Initial paint — guarantees something is on screen before the rAF
    // loop kicks in (or as the only paint when motion is reduced).
    PATHS.forEach((p, i) => {
      const el = pathRefs.current[i]
      if (el) el.setAttribute('d', buildPathData(0, DEFAULT_PACKET_X, p))
    })

    // 0 = calm, 1 = pointer inside stripe rect — smoothed each frame so
    // hover ramps feel organic rather than binary.
    let hoverTarget = 0
    let hoverBlend = 0

    if (prefersReducedMotion) return

    // Per-path smoothed packet-X — each path lags behind the target by
    // its own lerp factor, producing a fanned-out wake when the
    // cursor sweeps across the strip.
    const perPathPacketX = PATHS.map(() => DEFAULT_PACKET_X)
    /** Raw goal from pointer / idle; smoothed into `targetPacketX` each frame. */
    let goalPacketX = DEFAULT_PACKET_X
    let targetPacketX = DEFAULT_PACKET_X
    let lastMoveAt = 0

    /** Low-pass pointer X so fast moves don’t yank the envelope (reduces jerk). */
    const GOAL_X_SMOOTH = 0.22

    const onPointerMove = (event: PointerEvent) => {
      const svg = svgRef.current
      if (!svg) return
      // Map the cursor X relative to the SVG's bounding rect, clamped
      // to [0,1]. When the cursor leaves the SVG horizontally the
      // fraction sticks to the nearer edge so the packet drifts to
      // that side instead of jumping back to the centre.
      const rect = svg.getBoundingClientRect()
      const w = rect.width || 1
      const fraction = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / w)
      )
      goalPacketX = fraction * WIDTH
      lastMoveAt = performance.now()

      // Slightly padded vertical hit band so tiny Y noise doesn’t flip hover.
      const padY = 6
      const overStripe =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top - padY &&
        event.clientY <= rect.bottom + padY
      hoverTarget = overStripe ? 1 : 0
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    let raf = 0
    const t0 = performance.now()
    const tick = () => {
      const now = performance.now()
      const t = (now - t0) / 1000

      // Idle return-to-centre so the wave reads as calm at rest.
      if (now - lastMoveAt > IDLE_RECENTER_MS) {
        goalPacketX = DEFAULT_PACKET_X
      }

      targetPacketX += (goalPacketX - targetPacketX) * GOAL_X_SMOOTH

      // Slower hover ramp avoids shimmer when spatial/time scales were tied to it.
      hoverBlend += (hoverTarget - hoverBlend) * 0.065

      const timeScale = 1 + hoverBlend * 0.22
      const ampScale = 1 + hoverBlend * 0.52
      // Changing spatial freq on hover shears the wave and reads as “broken”.
      const spatialScale = 1
      const lerpBoost = 1 + hoverBlend * 0.18

      const drawOpts: WaveDrawOpts = {
        timeScale,
        ampScale,
        spatialScale,
      }

      for (let i = 0; i < PATHS.length; i++) {
        const lerp = Math.min(0.28, PATHS[i].lerp * lerpBoost)
        perPathPacketX[i] += (targetPacketX - perPathPacketX[i]) * lerp
        const el = pathRefs.current[i]
        if (el)
          el.setAttribute(
            'd',
            buildPathData(t, perPathPacketX[i], PATHS[i], drawOpts)
          )
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [prefersReducedMotion])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative w-screen max-w-[100vw] select-none ml-[calc(50%-50vw)]"
    >
      <svg
        ref={svgRef}
        viewBox={`0 ${-VIEW_TOP_PAD} ${WIDTH} ${HEIGHT + VIEW_TOP_PAD}`}
        preserveAspectRatio="none"
        className="block h-[99px] w-full sm:h-[126px] lg:h-[144px]"
      >
        <defs>
          <linearGradient
            id="wavestripe-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1b67e8" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#1ccecb" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5a2" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Static spine — the "line on the sides" from the reference. */}
        <line
          x1="0"
          y1={CENTER_Y}
          x2={WIDTH}
          y2={CENTER_Y}
          stroke="url(#wavestripe-gradient)"
          strokeOpacity="0.32"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {PATHS.map((p, i) => (
          <path
            key={i}
            d={INITIAL_PATH_DS[i]}
            ref={(el) => {
              pathRefs.current[i] = el
            }}
            fill="none"
            stroke="url(#wavestripe-gradient)"
            strokeOpacity={p.opacity}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            shapeRendering="geometricPrecision"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  )
}
