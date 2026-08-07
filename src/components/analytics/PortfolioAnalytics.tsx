'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
}

/**
 * Small provider-neutral analytics boundary. It emits browser events for local
 * debugging and forwards them to gtag when an analytics provider defines it.
 * The site does not load a tracker by itself.
 */
export default function PortfolioAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    const eventName = pathname.startsWith('/work/') ? 'project_view' : 'page_view'
    const detail = { eventName, path: pathname }
    window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail }))
    ;(window as AnalyticsWindow).gtag?.('event', eventName, {
      page_path: pathname,
    })
  }, [pathname])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const tracked = target?.closest<HTMLElement>('[data-analytics-event]')
      if (!tracked) return

      const eventName = tracked.dataset.analyticsEvent
      if (!eventName) return

      const detail = {
        eventName,
        href: tracked.getAttribute('href') || undefined,
        label: tracked.textContent?.trim() || undefined,
      }
      window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail }))
      ;(window as AnalyticsWindow).gtag?.('event', eventName, detail)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
