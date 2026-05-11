import Hero from '@/components/home/Hero'
import SelectedWork from '@/components/home/SelectedWork'
import FooterCTA from '@/components/home/FooterCTA'

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <SelectedWork />
      <FooterCTA />
    </main>
  )
}
