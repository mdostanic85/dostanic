import Image from 'next/image'
import { cn } from '@/lib/utils'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
} from '@/lib/headings'

const SCREENS = [
  {
    src: '/work/devrev/screens/Select-Role.png',
    width: 2592,
    height: 1676,
    alt: 'Select role onboarding screen',
    caption: 'Select role',
  },
  {
    src: '/work/devrev/screens/Recommended-Mentors.png',
    width: 2592,
    height: 1676,
    alt: 'Recommended mentors discovery screen',
    caption: 'Recommended mentors',
  },
  {
    src: '/work/devrev/screens/Solution-overview.png',
    width: 2592,
    height: 2691,
    alt: 'Solution overview dashboard',
    caption: 'Solution overview',
  },
  {
    src: '/work/devrev/screens/Tasks.png',
    width: 2592,
    height: 2853,
    alt: 'Task management interface',
    caption: 'Tasks & delivery',
  },
] as const

/** Selected high-fidelity UI frames for the DevRev case study. */
export default function DevRevUIScreens() {
  return (
    <Section padding="lg" className="bg-surface/40">
      <Container size="wide">
        <div className="mb-12 max-w-2xl">
          <p className={sectionEyebrowAccentClassName}>UI screens</p>
          <h2 className={cn(sectionHeadingClassName, 'mt-4')}>
            Key product surfaces
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted lg:text-lg">
            Representative frames for role selection, mentor discovery, solution
            overview, and task execution — showing density, hierarchy, and
            interaction patterns in context.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {SCREENS.map((screen) => (
            <figure key={screen.src} className="space-y-3">
              <div className="overflow-hidden rounded-[10px] bg-surface">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  className="h-auto w-full"
                  sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
