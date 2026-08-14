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
  'design-systems': {
    label:
      'Abstract map of a design system architecture — atoms, molecules, and organisms bound to primitive, semantic, and component token tiers',
    eyebrow: 'Capability · Systems',
    status: 'Working method',
    headline: 'Atoms to organisms, primitives to components.',
    rail: ['Atomic layers', 'Token tiers', 'Figma ↔ CSS'],
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
      // Container queries, not viewport ones: this mock is rendered both as a
      // narrow homepage card and as a full-width case-study cover, and it has
      // to scale with the box it is given rather than with the window.
      <div
        role="img"
        aria-label="WorkLight product model showing source signals, evidence-linked ranking, and one next action"
        className="@container relative flex aspect-[16/10] flex-col overflow-hidden border border-stroke bg-[#0a0d13] p-4 text-[#f2f5fa] @xl:p-8"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/15 pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 @md:text-[11px] @md:tracking-[0.2em] @xl:pb-4 @xl:text-[12px]">
          <span>WorkLight · Today</span>
          <span className="whitespace-nowrap text-[#6c83ff]">Evidence linked</span>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-2 pt-3 @md:gap-3 @xl:gap-5 @xl:pt-4">
          {/* Label then list, top-aligned — `justify-between` left a void in the
              middle of the column once the list was only a few items long. */}
          {/* On a narrow card the two columns leave the headline four lines deep
              and it overruns the 16:10 box. Below `@md` the signal list drops
              and the priority panel takes the full width instead. */}
          <div className="col-span-4 hidden flex-col gap-2 border border-white/10 p-2 @md:flex @md:gap-4 @xl:p-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 @md:text-[11px] @md:tracking-[0.18em]">Read-only signals</span>
            <div className="space-y-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/70 @md:space-y-2 @md:text-[11px] @md:tracking-[0.14em]">
              <p>Calendar</p><p>Jira</p><p>Figma</p><p>GitHub</p>
              <p className="text-white/40">+ 6 more</p>
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-between bg-white/[0.055] p-2.5 @md:col-span-8 @md:p-3 @xl:p-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6c83ff] @md:text-[11px] @md:tracking-[0.18em]">Priority 01 · Confidence high</p>
              <p className="display-tight mt-1.5 line-clamp-3 text-[12px] font-medium @md:mt-3 @md:line-clamp-none @md:max-w-[15ch] @md:text-lg @xl:text-3xl">Review the implementation against the accepted design.</p>
            </div>
            {/* Below `@md` the box is too short for the supporting line; the
                priority and the affordance are what have to survive. */}
            <div className="flex items-end justify-between gap-3 border-t border-white/10 pt-2 @xl:pt-3">
              <p className="hidden max-w-[30ch] text-[10px] leading-relaxed text-white/50 @md:block @md:text-[11px] @xl:text-xs">Why now, the next action, and the done criteria stay tied to source evidence.</p>
              <span className="ml-auto font-mono text-sm text-[#6c83ff] @xl:text-lg">→</span>
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
      className="@container relative aspect-[16/10] overflow-hidden border border-stroke bg-[#0a0c12] p-4 text-[#f2f5fa] @xl:p-8"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50 @md:text-[11px] @md:tracking-[0.2em] @xl:text-[12px]">
          <span>{signal.eyebrow}</span>
          <span className="text-right">{signal.status}</span>
        </div>
        <p className="display-tight max-w-[15ch] text-lg font-medium @md:text-2xl @xl:text-4xl @3xl:text-5xl">
          {signal.headline}
        </p>
        {/* Wraps as an inline row on narrow cards — a three-column grid this
            small breaks each label across two lines. */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-white/15 pt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-white/55 @md:text-[11px] @md:tracking-[0.14em] @xl:grid @xl:grid-cols-3 @xl:pt-4 @xl:text-[12px]">
          {signal.rail.map((item, i) => (
            <span key={item} className={i === 2 ? '@xl:text-right' : undefined}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
