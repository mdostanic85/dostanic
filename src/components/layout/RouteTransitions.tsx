'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Site-wide page transition driver — wraps internal navigation in the
 * native View Transitions API (`document.startViewTransition`) so the
 * browser snapshots the outgoing page, performs the route swap, then
 * runs the keyframes defined under ::view-transition-old(root) and
 * ::view-transition-new(root) in globals.css.
 *
 * Why a global click interceptor instead of a custom <Link>?
 *   - Zero refactor: every existing <Link> and <a> in the codebase opts
 *     in automatically.
 *   - Plays nicely with Next.js prefetching: we still hand the
 *     navigation to `router.push`, only wrapped.
 *
 * We use the CAPTURE phase so we run before Next.js's <Link> onClick
 * handler (which fires in React's bubble phase and would otherwise
 * preventDefault before our handler ever sees the click). Using
 * `stopImmediatePropagation` after we take over ensures Next's onClick
 * does not also push the route, which would double-navigate.
 *
 * Browsers without View Transitions support (Firefox unflagged as of
 * 2026.05) silently fall through to a plain `router.push` without an
 * animation — navigation still works.
 *
 * Renders nothing — purely a side-effect component. Mount it once in
 * the root layout.
 */
export default function RouteTransitions() {
  const router = useRouter()

  useEffect(() => {
    const startViewTransition = (
      document as Document & {
        startViewTransition?: (callback: () => void) => unknown
      }
    ).startViewTransition

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return

      const target = event.target as HTMLElement | null
      const link = target?.closest('a')
      if (!link) return

      if (link.target && link.target !== '_self') return
      if (link.hasAttribute('download')) return
      if (link.dataset.noTransition === 'true') return

      const href = link.getAttribute('href')
      if (!href) return

      if (href.startsWith('mailto:') || href.startsWith('tel:')) return
      if (href.startsWith('#')) return
      if (href.startsWith('http://') || href.startsWith('https://')) {
        try {
          const url = new URL(href, window.location.origin)
          if (url.origin !== window.location.origin) return
        } catch {
          return
        }
      }

      let url: URL
      try {
        url = new URL(href, window.location.origin)
      } catch {
        return
      }

      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return
      }

      // Take over — block both the native nav and Next's onClick from
      // running, then drive the navigation ourselves so the View
      // Transition wraps the route swap.
      event.preventDefault()
      event.stopImmediatePropagation()

      const destination = url.pathname + url.search + url.hash

      if (typeof startViewTransition === 'function') {
        startViewTransition.call(document, () => {
          router.push(destination)
        })
      } else {
        router.push(destination)
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [router])

  return null
}
