'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/nav'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
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
          className="text-sm font-semibold text-foreground tracking-tight"
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
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-4xl sm:text-5xl font-semibold text-foreground py-3 hover:text-muted transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="px-5 sm:px-8 pb-10 pt-6">
        <a
          href="mailto:milos@dostanic.net"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          milos@dostanic.net
        </a>
      </div>
    </div>
  )
}
