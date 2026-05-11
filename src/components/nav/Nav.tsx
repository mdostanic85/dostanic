'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import Container from '@/components/layout/Container'
import MobileMenu from './MobileMenu'
import { NAV_LINKS } from '@/lib/nav'

export default function Nav() {
  const scrolled = useScrolled(80)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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
        <Container size="wide" className="h-full flex items-center justify-between">
          <Link
            href="/"
            className="text-foreground hover:text-muted transition-colors leading-[25.189px]"
            aria-label="Go to home page"
          >
            <span className="text-[24px] font-light">milos</span>
            <span className="text-[24px] font-bold">dostanic</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'relative pb-px text-[14px] font-medium lowercase leading-[16.5px] tracking-[0.071em] text-muted hover:text-foreground transition-colors duration-150',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full',
                  'after:origin-left after:scale-x-0 after:bg-accent',
                  'after:transition-transform after:duration-200 hover:after:scale-x-100',
                  "after:content-['']",
                ].join(' ')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

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
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
