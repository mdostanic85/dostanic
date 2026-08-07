import ParallaxImage from '@/components/v3/ParallaxImage'
import type { Project } from '@/lib/types'

type SignalCard = {
  /** Alt text for the whole card — it is the project's only visual. */
  label: string
  eyebrow: string
  status: string
  headline: string
  rail: [string, string, string]
}

/**
 * Hand-written signal cards for projects that carry no screenshot. Anything
 * not listed here falls back to `buildSignalCard`, which derives the card from
 * the project record — never from another project's story.
 */
const SIGNAL_CARDS: Record<string, SignalCard> = {
  spaceinch: {
    label:
      'Abstract system map for NDA-protected enterprise product work at Space Inch',
    eyebrow: 'Space Inch · Enterprise systems',
    status: 'NDA protected',
    headline: 'Complex workflows made legible, scalable, and ready for build.',
    rail: ['Product framing', 'System design', 'Delivery QA'],
  },
  'ai-design-system-workflow': {
    label:
      'Abstract map of the AI-connected design system workflow — tokens, component APIs, and review loops kept in sync across Figma and code',
    eyebrow: 'Capability · Systems',
    status: 'Working method',
    headline: 'Tokens, components, and code kept in one loop.',
    rail: ['Variables', 'Component APIs', 'Review loops'],
  },
}

/** Derives a neutral card from the project record for anything unlisted. */
function buildSignalCard(project: Project): SignalCard {
  const headline = project.title.includes(' | ')
    ? project.title.split(' | ')[1]
    : project.title
  return {
    label: `Abstract cover for ${project.title}`,
    eyebrow: `${project.domain} · ${project.category}`,
    status: project.projectType ?? 'Project',
    headline,
    rail: [
      project.discipline,
      project.delivery ?? 'Case study',
      project.year || 'Current',
    ],
  }
}

export default function ProjectSignalCover({ project }: { project: Project }) {
  if (project.coverImage) {
    return (
      <ParallaxImage
        src={project.coverImage}
        alt={`${project.title} cover`}
        aspectClassName="aspect-[16/10]"
        className="transition-colors duration-500 group-hover:border-foreground/30"
      />
    )
  }

  if (project.slug === 'worklight') {
    return (
      <div
        role="img"
        aria-label="WorkLight product model showing source signals, evidence-linked ranking, and one next action"
        className="relative aspect-[16/10] overflow-hidden border border-stroke bg-[#0a0d13] p-5 text-[#f2f5fa] sm:p-8"
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-white/55">
          <span>WorkLight · Today</span>
          <span className="text-[#6c83ff]">Evidence linked</span>
        </div>
        <div className="grid h-[calc(100%-2.5rem)] grid-cols-12 gap-3 pt-4 sm:gap-5">
          <div className="col-span-4 flex flex-col justify-between border border-white/10 p-3 sm:p-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/45">Read-only signals</span>
            <div className="space-y-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white/70 sm:text-[12px]">
              <p>Calendar</p><p>Jira</p><p>Figma</p><p>GitHub</p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col justify-between bg-white/[0.055] p-4 sm:p-6">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#6c83ff]">Priority 01 · Confidence high</p>
              <p className="display-tight mt-3 max-w-[15ch] text-lg font-medium sm:text-3xl">Review the implementation against the accepted design.</p>
            </div>
            <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-3">
              <p className="max-w-[30ch] text-[12px] leading-relaxed text-white/50 sm:text-xs">Why now, the next action, and the done criteria stay tied to source evidence.</p>
              <span className="font-mono text-lg text-[#6c83ff]">→</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const signal = SIGNAL_CARDS[project.slug] ?? buildSignalCard(project)

  return (
    <div
      role="img"
      aria-label={signal.label}
      className="relative aspect-[16/10] overflow-hidden border border-stroke bg-[#0a0c12] p-5 text-[#f2f5fa] sm:p-8"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.18em] text-white/50 sm:text-[12px] sm:tracking-[0.2em]">
          <span>{signal.eyebrow}</span>
          <span className="text-right">{signal.status}</span>
        </div>
        <p className="display-tight max-w-[15ch] text-2xl font-medium sm:text-4xl lg:text-5xl">
          {signal.headline}
        </p>
        {/* Wraps as an inline row on narrow cards — a three-column grid this
            small breaks each label across two lines. */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-white/15 pt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-white/55 sm:grid sm:grid-cols-3 sm:text-[12px]">
          {signal.rail.map((item, i) => (
            <span key={item} className={i === 2 ? 'sm:text-right' : undefined}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
