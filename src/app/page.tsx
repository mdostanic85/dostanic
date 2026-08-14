import type { Metadata } from 'next'
import Hero from '@/components/v3/Hero'
import CaseRows from '@/components/v3/CaseRows'
import Capabilities from '@/components/v3/Capabilities'
import ProcessSpine from '@/components/home/ProcessSpine'
import ExperienceIndex from '@/components/v3/ExperienceIndex'
import HomeNote from '@/components/home/HomeNote'
import FooterCTA from '@/components/home/FooterCTA'

export const metadata: Metadata = {
  title: 'Senior Product Designer / Product Builder',
  description:
    'Senior Product Designer and product builder. I take complex software from ambiguity to a clear, buildable product — product architecture, complex UX, design systems, and implementation.',
  alternates: { canonical: '/' },
}

/**
 * Home — one narrative, six beats.
 *
 *   hero → selected work → capabilities → how I work → experience → note
 *   → contact
 *
 * The whole page is one ink chapter. `.chapter-dark` remaps the palette tokens
 * once here, so every section below inherits the dark set without knowing about
 * it; the subpages keep the icy light base. Each beat carries exactly one
 * message, and the depth lives on the case studies and About rather than here.
 */
export default function HomePage() {
  return (
    <main className="chapter-dark bg-background text-foreground">
      <Hero />
      <CaseRows />
      <Capabilities />
      <ProcessSpine />
      <ExperienceIndex />
      <HomeNote />
      <FooterCTA />
    </main>
  )
}
