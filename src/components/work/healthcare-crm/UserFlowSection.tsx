'use client'

import UserFlowDiagram from './UserFlowDiagram'
import { sectionEyebrowAccentClassName, sectionHeadingClassName } from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export default function UserFlowSection() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className={sectionEyebrowAccentClassName}>User flow</p>
        <h2 className={sectionHeadingClassName}>
          {titleWithAccentGradient('Mapped before UI polish')}
        </h2>
        <p className="mt-5 text-[18px] leading-[1.7] text-muted lg:text-xl">
          Auth paths converge on a single home hub; multi-step tasks (projects, submit
          idea) stay linear. Built with{' '}
          <a
            href="https://reactflow.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-stroke underline-offset-4 hover:text-accent"
          >
            React Flow
          </a>{' '}
          — pan and zoom to explore.
        </p>
      </div>
      <UserFlowDiagram />
    </div>
  )
}
