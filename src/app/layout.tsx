import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Nav from '@/components/nav/Nav'
import RouteTransitions from '@/components/layout/RouteTransitions'
import SmoothScroll from '@/components/layout/SmoothScroll'
import CursorDot from '@/components/v3/CursorDot'
import ScrollProgress from '@/components/v3/ScrollProgress'
import PortfolioAnalytics from '@/components/analytics/PortfolioAnalytics'
import { SITE_URL } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Milos Dostanic | Senior Product Designer & Product Builder',
    template: '%s | Milos Dostanic',
  },
  description:
    'Senior Product Designer and Product Builder for complex B2B products, design systems, data-heavy UX, and implementation-ready delivery.',
  openGraph: {
    title: 'Milos Dostanic | Senior Product Designer & Product Builder',
    description:
      'Complex B2B product design, scalable systems, data-heavy UX, and implementation-ready delivery.',
    url: SITE_URL,
    siteName: 'Milos Dostanic',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milos Dostanic | Senior Product Designer & Product Builder',
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
      <body id="top">
        <a
          href="#main-content"
          className="skip-to-content fixed left-4 top-4 z-[100] -translate-y-[200%] bg-foreground px-4 py-2 text-sm font-medium text-inverse-foreground transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <RouteTransitions />
        <PortfolioAnalytics />
        <ScrollProgress />
        <CursorDot />
        <Nav />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Milos Dostanic',
              url: SITE_URL,
              email: 'mailto:milos@dostanic.net',
              jobTitle: 'Senior Product Designer & Product Builder',
              homeLocation: { '@type': 'Country', name: 'Serbia' },
              sameAs: [
                'https://www.linkedin.com/in/milos-dostanic/',
                'https://github.com/mdostanic85',
                'https://www.behance.net/milosdostanic',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
