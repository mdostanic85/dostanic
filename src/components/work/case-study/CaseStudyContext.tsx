import { sectionEyebrowAccentClassName, sectionLeadClassName } from '@/lib/headings'

type Props = {
  lead: string
  body: string
}

export default function CaseStudyContext({ lead, body }: Props) {
  return (
    <div className="max-w-3xl">
      <p className={sectionEyebrowAccentClassName}>Context</p>
      <p className={sectionLeadClassName}>{lead}</p>
      <p className="mt-6 text-base leading-[1.7] text-muted lg:text-lg">{body}</p>
    </div>
  )
}
