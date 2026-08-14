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
      <p className="mt-6 text-[18px] leading-[1.7] text-muted lg:text-xl">{body}</p>
    </div>
  )
}
