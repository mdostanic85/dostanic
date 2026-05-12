'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, isNavActive } from '@/lib/nav'
import ThemeToggle from './ThemeToggle'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

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
    // P0 fix: z-50 (same as header) — since this element is later in the DOM,
    // it stacks on top of the header at equal z-index, replacing it visually.
    <div
      id="mobile-navigation-dialog"
      ref={dialogRef}
      className="fixed inset-0 z-50 bg-background flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between px-5 sm:px-8 h-16">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted"
        >
          Milos Dostanic
        </Link>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 -mr-2 text-muted hover:text-foreground transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 4L16 16M16 4L4 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center px-5 sm:px-8 gap-2">
        {NAV_LINKS.map((link) => {
          const active = isNavActive(pathname, link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={[
                'border-l-2 py-3 pl-4 text-4xl font-semibold transition-colors sm:text-5xl sm:pl-5',
                active
                  ? 'border-accent text-foreground'
                  : 'border-transparent text-muted hover:border-stroke hover:text-foreground',
              ].join(' ')}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex flex-col gap-4 px-5 pb-10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <ThemeToggle />
        <a
          href="mailto:milos@dostanic.net"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          milos@dostanic.net
        </a>
      </div>
    </div>
  )
}
