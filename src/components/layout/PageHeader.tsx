import type { ReactNode } from 'react'
import Container from '@/components/layout/Container'
import SectionReveal from '@/components/layout/SectionReveal'

type PageHeaderProps = {
  /** Mono caption shown above the headline — e.g. "About / Background". */
  eyebrow: string
  /** The big editorial headline. Use a string for plain text, or a node for
   * accent-pulled phrasing — e.g. <>Design that <span className="text-accent">survives</span></>. */
  title: ReactNode
  /** Optional intro paragraph shown below the headline. */
  intro?: ReactNode
  /** Optional content rendered in the right column (sidebar, quick-nav,
   * contact card, etc.). When omitted, the headline column is full-width. */
  aside?: ReactNode
  /** Right-side label in the top mark strip. Defaults to the current year token. */
  topRightLabel?: string
}

/**
 * Shared atomic.black-style page header used across all subpages.
 *
 * Structure:
 *   ┌──────────────────────────────────────────────────────────────┐
 *   │ EST. 2017 · <eyebrow> · <topRightLabel>                       │  top mark band
 *   ├──────────────────────────────────────────────────────────────┤
 *   │ <eyebrow caption>                                             │
 *   │ <mega editorial title>                                        │
 *   │ <intro paragraph>                                             │
 *   │                                              <aside content>  │
 *   └──────────────────────────────────────────────────────────────┘
 *
 * Headlines use display-tight tracking + responsive type ramp tuned to feel
 * editorial but stay readable on mobile. The aside collapses below on
 * narrower viewports.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  aside,
  topRightLabel = '2026 / Available',
}: PageHeaderProps) {
  return (
    <header className="grain relative overflow-hidden pt-16">
      {/* Top mark band — mirrors the home Hero's EST/Available strip */}
      <div className="border-b border-stroke">
        <Container size="wide">
          <div className="flex items-center justify-between py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="hidden sm:inline">EST. 2017</span>
            <span className="text-foreground">{eyebrow}</span>
            <span>{topRightLabel}</span>
          </div>
        </Container>
      </div>

      <Container size="wide">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
            <div className={aside ? 'lg:col-span-8' : 'lg:col-span-12'}>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>

              <h1 className="display-tight text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl xl:text-[70px]">
                {title}
              </h1>

              {intro ? (
                <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-muted lg:text-xl">
                  {intro}
                </p>
              ) : null}
            </div>

            {aside ? (
              <div className="lg:col-span-4 lg:pt-2">{aside}</div>
            ) : null}
          </div>
        </SectionReveal>
      </Container>
    </header>
  )
}
