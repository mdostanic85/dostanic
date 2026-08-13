import type { Metadata } from 'next'
import { Azeret_Mono, Bricolage_Grotesque } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import RouteTransitions from '@/components/layout/RouteTransitions'
import SmoothScroll from '@/components/layout/SmoothScroll'
import CursorDot from '@/components/v3/CursorDot'
import ScrollProgress from '@/components/v3/ScrollProgress'
import PortfolioAnalytics from '@/components/analytics/PortfolioAnalytics'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-azeret-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Milos Dostanic | Senior Product Designer, Complex B2B & Design Systems',
    template: '%s | Milos Dostanic',
  },
  description:
    'Senior Product Designer leading end-to-end design on complex B2B products — design systems and token architecture, data-heavy UX, and delivery through implementation.',
  openGraph: {
    title: 'Milos Dostanic | Senior Product Designer, Complex B2B & Design Systems',
    description:
      'Complex B2B product design, atomic design systems and token architecture, data-heavy UX, and delivery through implementation.',
    url: SITE_URL,
    siteName: 'Milos Dostanic',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milos Dostanic | Senior Product Designer, Complex B2B & Design Systems',
    description:
      'Product design for complex software, backed by atomic design systems, token architecture, and Figma-to-code delivery.',
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
    <html lang="en" className={`${bricolageGrotesque.variable} ${azeretMono.variable}`}>
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
