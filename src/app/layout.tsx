import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Nav from '@/components/nav/Nav'
import RouteTransitions from '@/components/layout/RouteTransitions'
import SmoothScroll from '@/components/layout/SmoothScroll'
import CursorDot from '@/components/v3/CursorDot'
import ScrollProgress from '@/components/v3/ScrollProgress'
import './globals.css'

export const metadata: Metadata = {
  title: 'Milos Dostanic — Senior Product Designer',
  description:
    'Senior Product Designer focused on complex software UX — B2B SaaS, internal tools, and data-heavy products. Backed by design systems, Figma-to-code workflows, and AI-assisted prototyping.',
  openGraph: {
    title: 'Milos Dostanic — Senior Product Designer',
    description:
      'Product design for complex software. Backed by design systems, Figma-to-code workflows, and AI-assisted prototyping.',
    url: 'https://dostanic.net',
    siteName: 'Milos Dostanic',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milos Dostanic — Senior Product Designer',
    description:
      'Product design for complex software. Backed by design systems, Figma-to-code, and AI-assisted prototyping.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a
          href="#top"
          className="skip-to-content fixed left-4 top-4 z-[100] -translate-y-[200%] bg-foreground px-4 py-2 text-sm font-medium text-inverse-foreground transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <RouteTransitions />
        <ScrollProgress />
        <CursorDot />
        <Nav />
        {children}
      </body>
    </html>
  )
}
