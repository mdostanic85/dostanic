'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Magnetic from '@/components/v3/Magnetic'
import MobileMenu from './MobileMenu'

/**
 * V3.1 navigation — a transparent fixed rail rendered in white with
 * `mix-blend-difference`, so it self-inverts over both the ice body and
 * the ink chapters (no scroll background, no border — the ScrollProgress
 * hairline is the scroll affordance). Everything stays monochrome inside
 * the blend layer; cyan would shift warm under difference.
 */
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  /* Site chrome covers embedded Sanity Studio (fixed full-viewport UI). */
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <>
      <header className="site-header pointer-events-none fixed top-0 left-0 right-0 z-50 h-16 mix-blend-difference">
        <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-[1fr_auto] items-center gap-3 px-5 text-white sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-12">
          <Link
            href="/"
            className="link-roll pointer-events-auto justify-self-start font-mono text-[12px] uppercase tracking-[0.25em]"
            aria-label="Go to home page"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            <span className="link-roll-text">
              <span>Milos Dostanic®</span>
              <span aria-hidden="true">Milos Dostanic®</span>
            </span>
          </Link>

          <p
            aria-hidden="true"
            className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/60 md:block"
          >
            Senior Product Designer & Product Builder
          </p>

          <div className="flex items-center justify-self-end">
            <Magnetic strength={8}>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="site-navigation-overlay"
                className="group pointer-events-auto inline-flex items-center gap-3 py-2 pl-2 font-mono text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
              >
                Menu
                <span aria-hidden="true" className="flex flex-col gap-[5px]">
                  <span className="block h-px w-6 bg-current transition-transform duration-300 group-hover:scale-x-75" />
                  <span className="block h-px w-6 bg-current" />
                </span>
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
