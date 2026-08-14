import Image from 'next/image'
import { cn } from '@/lib/utils'
import ImagePlaceholder from '@/components/work/ImagePlaceholder'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export type CaseStudyScreen = {
  src?: string
  alt: string
  caption: string
  decision: string
  placeholderLabel?: string
}

type Props = {
  title?: string
  intro: string
  screens: readonly CaseStudyScreen[]
}

export default function CaseStudyScreens({
  title = 'Evidence, not a gallery',
  intro,
  screens,
}: Props) {
  if (screens.length === 0) return null

  const [hero, ...supporting] = screens

  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <p className={sectionEyebrowAccentClassName}>Key screens</p>
        <h2 className={cn(sectionHeadingClassName, 'mt-4')}>
          {titleWithAccentGradient(title)}
        </h2>
        <p className="mt-5 text-[18px] leading-[1.7] text-muted lg:text-xl">{intro}</p>
      </div>

      <ScreenFigure screen={hero} priority />

      {supporting.length > 0 ? (
        <div
          className={cn(
            'grid grid-cols-1 gap-10',
            supporting.length > 1 ? 'md:grid-cols-2' : '',
          )}
        >
          {supporting.map((screen) => (
            <ScreenFigure key={screen.caption} screen={screen} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ScreenFigure({
  screen,
  priority,
}: {
  screen: CaseStudyScreen
  priority?: boolean
}) {
  return (
    <figure className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-stroke bg-surface">
        {screen.src ? (
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(min-width: 1280px) 1200px, 100vw"
          />
        ) : (
          <ImagePlaceholder
            label={screen.placeholderLabel ?? screen.caption}
            aspectClass="aspect-[16/10] h-full min-h-[240px]"
            footnote=""
          />
        )}
      </div>
      <figcaption>
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
          {screen.caption}
        </p>
        <p className="mt-2 text-sm leading-[1.65] text-muted">{screen.decision}</p>
      </figcaption>
    </figure>
  )
}
