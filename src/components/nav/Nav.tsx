'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import Container from '@/components/layout/Container'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS, isNavActive } from '@/lib/nav'

export default function Nav() {
  const scrolled = useScrolled(80)
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
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-200',
          scrolled
            ? 'bg-background/95 backdrop-blur-sm'
            : 'bg-transparent',
        ].join(' ')}
      >
        <Container
          size="wide"
          className="grid h-full grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
        >
          <Link
            href="/"
            className={[
              'col-start-1 row-start-1 justify-self-start transition-colors leading-[25.189px]',
              pathname === '/' ? 'text-foreground' : 'text-foreground hover:text-muted',
            ].join(' ')}
            aria-label="Go to home page"
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            <span className="text-[24px] font-light">milos</span>
            <span className="text-[24px] font-bold">dostanic</span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="col-start-2 row-start-1 hidden items-center justify-center gap-7 md:col-start-2 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = isNavActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'text-[14px] font-medium lowercase leading-[16.5px] tracking-[0.071em] transition-colors duration-150',
                    active
                      ? 'text-foreground'
                      : [
                          'relative pb-px text-muted',
                          'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full',
                          'after:origin-left after:bg-accent after:transition-transform after:duration-200',
                          "after:content-['']",
                          'after:scale-x-0 hover:text-foreground hover:after:scale-x-100',
                        ].join(' '),
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="col-start-2 row-start-1 flex items-center justify-self-end gap-2 md:col-start-3 md:gap-3">
            <ThemeToggle />

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-dialog"
              className="md:hidden p-2 -mr-2 text-muted hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
