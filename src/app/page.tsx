import Hero from '@/components/v3/Hero'
import MarqueeDivider from '@/components/v3/MarqueeDivider'
import CaseRows from '@/components/v3/CaseRows'
import Capabilities from '@/components/v3/Capabilities'
import ExperienceIndex from '@/components/v3/ExperienceIndex'
import FooterCTA from '@/components/home/FooterCTA'

/**
 * Home — tight chapter flow: ink hero → icy work index → ink capabilities
 * slab → icy experience → ink contact. The thinking/principles content
 * lives on About; home stays focused on proof and contact.
 */
export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <MarqueeDivider />
      <CaseRows />
      <Capabilities />
      <ExperienceIndex />
      <FooterCTA />
    </main>
  )
}
