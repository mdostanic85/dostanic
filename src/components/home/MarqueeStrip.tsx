import Marquee from '@/components/ui/Marquee'
import { marqueeItemClassName } from '@/lib/headings'

/**
 * Tools & technologies I actually use day-to-day. Ordered by phase of work
 * (design → AI co-pilot → frontend stack → systems → ship/coordinate) so
 * even passive scanning communicates the workflow.
 */
const TOOLS = [
  // Design & prototyping
  'Figma',
  'FigJam',
  'Framer',
  // AI co-pilot
  'Cursor',
  'Claude',
  'ChatGPT',
  // Frontend stack
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  // Design systems
  'Storybook',
  'Code Connect',
  'Tokens Studio',
  // Ship & coordinate
  'GitHub',
  'Vercel',
  'Linear',
  'Notion',
]

/**
 * Atomic-style endless caption band — now a stack/tooling ticker. Smaller
 * type than the original disciplines banner so it reads as a "tech credit
 * strip" rather than a second mega headline. Decorative; role="presentation"
 * via Marquee's internals and the list is already represented in the
 * Expertise page.
 */
export default function MarqueeStrip() {
  return (
    <div className="bg-surface/40">
      <Marquee
        speed="medium"
        label="Tools and technologies — decorative banner"
        className="py-3 sm:py-4"
      >
        {TOOLS.map((tool, idx) => (
          <span
            key={`${tool}-${idx}`}
            className={marqueeItemClassName}
          >
            {tool}
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
