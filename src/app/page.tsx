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
 *   hero (ink) → selected work (ice) → capabilities (ink) → how I work (ice)
 *   → experience (ice) → note (ice) → contact (ink)
 *
 * Three dark chapters, evenly spaced, so the page alternates instead of
 * strobing. Each beat carries exactly one message; the depth lives on the case
 * studies and About rather than here.
 */
export default function HomePage() {
  return (
    <main>
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
