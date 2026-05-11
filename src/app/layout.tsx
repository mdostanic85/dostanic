import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Nav from '@/components/nav/Nav'
import RouteTransitions from '@/components/layout/RouteTransitions'
import SmoothScroll from '@/components/layout/SmoothScroll'
import CursorGlow from '@/components/layout/CursorGlow'
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

/** Inline script that runs before React hydration to prevent flash of wrong theme.
 *  Dark is the default — only apply data-theme="light" when explicitly stored. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        {/* Anti-FOCT: set theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SmoothScroll />
        <RouteTransitions />
        <CursorGlow />
        <Nav />
        {children}
      </body>
    </html>
  )
}
