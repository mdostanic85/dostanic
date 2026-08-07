'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, isNavActive } from '@/lib/nav'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

/**
 * Full-screen overlay navigation — V3 uses this on every breakpoint.
 * Ink panel, oversized grotesk links with mono index marks,
 * staggered CSS entrance, contact rail at the bottom. Focus-trapped
 * dialog with Escape-to-close.
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Focus management + keyboard trap inside modal
  useEffect(() => {
    if (!open) return

    lastFocusedRef.current = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Restore focus back to trigger after menu closes
  useEffect(() => {
    if (open) return
    if (lastFocusedRef.current) {
      lastFocusedRef.current.focus()
      lastFocusedRef.current = null
    }
  }, [open])

  if (!open) return null

  return (
    <div
      id="site-navigation-overlay"
      ref={dialogRef}
      className="chapter-dark fixed inset-0 z-50 flex flex-col bg-background text-foreground animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Top rail */}
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-mono text-[13px] uppercase tracking-[0.25em] text-foreground transition-opacity hover:opacity-70"
        >
          Milos Dostanic<span className="text-accent">®</span>
        </Link>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex items-center gap-3 py-2 font-mono text-[12px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
        >
          Close
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 4L16 16M16 4L4 16"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      {/* `my-auto` on the list rather than `justify-center` on the nav: a
          centered flex container clips overflow beyond the top edge and cannot
          scroll back to it. Auto margins centre and still allow scrolling once
          the link stack outgrows a short viewport. */}
      <nav className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col overflow-y-auto px-5 sm:px-8 lg:px-12">
        <ul className="my-auto flex flex-col py-4">
          {NAV_LINKS.map((link, i) => {
            const active = isNavActive(pathname, link.href)
            return (
              <li
                key={link.href}
                className="animate-fade-in-up border-b border-stroke last:border-b-0"
                style={{ animationDelay: `${80 + i * 70}ms` }}
              >
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'group flex items-baseline gap-6 py-4 transition-colors sm:gap-10 sm:py-5',
                    active ? 'text-foreground' : 'text-muted hover:text-foreground',
                  ].join(' ')}
                >
                  <span className="w-10 shrink-0 font-mono text-[12px] uppercase tracking-[0.25em] text-accent sm:text-xs">
                    0{i + 1}
                  </span>
                  {/* Sized against viewport height, not width: five links must
                      all fit a 720px-tall laptop without the overlay
                      scrolling, while still reading as a poster on a large
                      display. */}
                  <span className="display-tight text-[clamp(1.6rem,6.4vh,5rem)] font-medium">
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto hidden text-2xl opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom rail */}
      <div
        className="mx-auto flex w-full max-w-[1500px] animate-fade-in-up flex-col gap-4 px-5 pb-10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"
        style={{ animationDelay: '380ms' }}
      >
        <a
          href="mailto:milos@dostanic.net"
          className="font-mono text-[12px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
        >
          milos@dostanic.net
        </a>
        <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
          Serbia / CET · remote worldwide
        </p>
      </div>
    </div>
  )
}
