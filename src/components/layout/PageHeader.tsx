import type { ReactNode } from 'react'
import Container from '@/components/layout/Container'
import SectionReveal from '@/components/layout/SectionReveal'
import { cn } from '@/lib/utils'
import {
  pageHeadingClassName,
  pageHeaderKickerAccentClassName,
  pageHeaderMetaClassName,
  pageIntroClassName,
} from '@/lib/headings'

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
  /** Optional right-aligned mono label above the headline — year, count, or location. */
  topRightLabel?: string
  /** Less bottom padding when the next block (e.g. filters) should sit closer. */
  tightBottom?: boolean
}

/**
 * Shared atomic.black-style page header used across all subpages.
 * Typography tokens: `@/lib/headings` (`pageHeadingClassName`, etc.).
 *
 * Structure:
 *   ┌──────────────────────────────────────────────────────────────┐
 *   │ <eyebrow>                                    <topRightLabel>  │
 *   │ <mega editorial title>                                        │
 *   │ <intro paragraph>                                             │
 *   │                                              <aside content>  │
 *   └──────────────────────────────────────────────────────────────┘
 *
 * Headlines use display-tight tracking + responsive type ramp tuned to feel
 * editorial but stay readable on mobile. The aside collapses below on
 * narrower viewports. The `h1` uses `.page-header-headline` so line rhythm and
 * gradient spans match the home Hero without touching each route.
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  aside,
  topRightLabel = '2026 / Available',
  tightBottom = false,
}: PageHeaderProps) {
  return (
    <header className="grain relative overflow-hidden pt-16">
      <Container size="wide">
        <SectionReveal>
          <div
            className={cn(
              'grid grid-cols-1 gap-12 pt-[calc(4rem*2/3)] lg:grid-cols-12 lg:gap-12 lg:pt-24',
              tightBottom
                ? 'pb-8 lg:pb-10'
                : 'pb-16 lg:pb-24',
            )}
          >
            <div className={aside ? 'lg:col-span-8' : 'lg:col-span-12'}>
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className={pageHeaderKickerAccentClassName}>{eyebrow}</p>
                <span className={pageHeaderMetaClassName}>{topRightLabel}</span>
              </div>

              <h1 className={pageHeadingClassName}>{title}</h1>

              {intro ? <p className={pageIntroClassName}>{intro}</p> : null}
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
