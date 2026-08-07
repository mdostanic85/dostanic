import type { Metadata } from 'next'
import Hero from '@/components/v3/Hero'
import CaseRows from '@/components/v3/CaseRows'
import Capabilities from '@/components/v3/Capabilities'
import ExperienceIndex from '@/components/v3/ExperienceIndex'
import FooterCTA from '@/components/home/FooterCTA'
import CredibilityStrip from '@/components/home/CredibilityStrip'
import HowIWork from '@/components/home/HowIWork'

export const metadata: Metadata = {
  title: 'Senior Product Designer & Product Builder',
  description:
    'I design complex B2B products that teams can build, from product structure and design systems to functional prototypes and implementation review.',
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
      <CredibilityStrip />
      <CaseRows />
      <Capabilities />
      <HowIWork />
      <ExperienceIndex />
      <FooterCTA />
    </main>
  )
}
