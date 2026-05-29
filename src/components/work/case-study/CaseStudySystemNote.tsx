import { sectionEyebrowAccentClassName } from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

type Props = {
  title?: string
  paragraphs: readonly string[]
}

export default function CaseStudySystemNote({
  title = 'Design system & tokens',
  paragraphs,
}: Props) {
  return (
    <div className="max-w-3xl space-y-6">
      <p className={sectionEyebrowAccentClassName}>Design system</p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
        {titleWithAccentGradient(title)}
      </h2>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="text-base leading-[1.7] text-muted lg:text-lg">
          {p}
        </p>
      ))}
    </div>
  )
}
