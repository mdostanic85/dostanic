export const NAV_LINKS = [
  { label: 'Work',      href: '/work' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
  { label: 'Résumé',    href: '/resume' },
] as const

/** True when this nav item should show as the current page (includes nested routes under /work). */
export function isNavActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
