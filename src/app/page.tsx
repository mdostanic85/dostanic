import type { Metadata } from 'next'
import Hero from '@/components/v3/Hero'
import CaseRows from '@/components/v3/CaseRows'
import Capabilities from '@/components/v3/Capabilities'
import ExperienceIndex from '@/components/v3/ExperienceIndex'
import FooterCTA from '@/components/home/FooterCTA'
import Differentiators from '@/components/home/Differentiators'

export const metadata: Metadata = {
  title: 'Senior Product Designer, Complex B2B & Design Systems',
  description:
    'Senior Product Designer leading design on complex B2B products under NDA — product structure, design systems and token architecture, functional prototypes, and implementation review.',
  alternates: { canonical: '/' },
}

/**
 * Home — tight chapter flow: ink hero → icy work index → ink capabilities
 * slab → icy experience → ink contact. The thinking/principles content
 * lives on About; home stays focused on proof and contact.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <CaseRows />
      <Capabilities />
      <Differentiators />
      <ExperienceIndex />
      <FooterCTA />
    </main>
  )
}
