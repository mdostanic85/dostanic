import Hero from '@/components/home/Hero'
import DeliveryStrip from '@/components/home/DeliveryStrip'
import SelectedWork from '@/components/home/SelectedWork'
import FooterCTA from '@/components/home/FooterCTA'

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <DeliveryStrip />
      <SelectedWork />
      <FooterCTA />
    </main>
  )
}
