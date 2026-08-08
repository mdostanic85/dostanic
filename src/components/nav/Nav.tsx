'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Magnetic from '@/components/v3/Magnetic'
import { useScrolled } from '@/hooks/useScrolled'
import { NAV_LINKS, isNavActive } from '@/lib/nav'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

/**
 * Sample the page under the fixed header to see if we're over an ink
 * chapter (`.chapter-dark`) or the icy light body — drives frosted glass
 * tint once the bar has a background.
 */
function useOverDarkChapter() {
  const [overDark, setOverDark] = useState(true)

  useEffect(() => {
    let raf = 0
    const sample = () => {
      raf = 0
      const midX = Math.round(window.innerWidth / 2)
      const y = 32
      const el = document.elementFromPoint(midX, y)
      setOverDark(!!el?.closest('.chapter-dark'))
    }
    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(sample)
    }

    sample()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return overDark
}

/**
 * V3.1 navigation — transparent + mix-blend-difference at rest so it
 * self-inverts over ice and ink. Once scrolled, frosted glass with a
 * light or dark tint matching the chapter under the bar.
 */
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const scrolled = useScrolled(24)
  const overDark = useOverDarkChapter()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  /* Site chrome covers embedded Sanity Studio (fixed full-viewport UI). */
  if (pathname?.startsWith('/studio')) {
    return null
  }

  const frosted = scrolled
  const darkGlass = frosted && overDark
  const lightGlass = frosted && !overDark

  return (
    <>
      <header
        className={cn(
          'site-header pointer-events-none fixed top-0 left-0 right-0 z-50 h-16 transition-[background-color,backdrop-filter,color] duration-300',
          !frosted && 'mix-blend-difference text-white',
          darkGlass && 'bg-[#06070b]/70 text-white backdrop-blur-xl',
          lightGlass && 'bg-[#eef1f6]/75 text-[#0a0c12] backdrop-blur-xl',
        )}
      >
        <div className="mx-auto grid h-full w-full max-w-[1500px] grid-cols-[1fr_auto] items-center gap-3 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="link-roll pointer-events-auto justify-self-start font-mono text-[13px] uppercase tracking-[0.25em]"
            aria-label="Go to home page"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            <span className="link-roll-text">
              <span>Milos Dostanic®</span>
              <span aria-hidden="true">Milos Dostanic®</span>
            </span>
          </Link>

          <div className="flex items-center justify-self-end">
            {/* Desktop: the sections are the navigation. Below lg the same
                links live in the full-screen overlay behind Menu. */}
            <nav
              aria-label="Primary"
              className="pointer-events-auto hidden items-center gap-8 lg:flex"
            >
              {NAV_LINKS.map((link) => {
                const active = isNavActive(pathname, link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'font-mono text-[12px] uppercase tracking-[0.22em] transition-opacity hover:opacity-70',
                      active ? 'opacity-100' : 'opacity-60',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <Magnetic strength={8}>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="site-navigation-overlay"
                className="group pointer-events-auto inline-flex items-center gap-3 py-2 pl-2 font-mono text-[12px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70 lg:hidden"
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
