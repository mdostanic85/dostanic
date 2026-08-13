'use client'

import { useState } from 'react'

export type ExpertiseArea = {
  id: string
  number: string
  title: string
  description: string
  usefulWhen: string[]
  outputs: string[]
}

/**
 * Expertise accordion — six oversized numbered rows; one opens at a
 * time. The panel animates via the CSS grid-rows trick (0fr → 1fr), so
 * height animation is buttery without any measurement code. The open
 * row's number fills with accent and the title indents slightly.
 */
export default function ExpertiseAccordion({
  areas,
}: {
  areas: ExpertiseArea[]
}) {
  const [open, setOpen] = useState<string | null>(areas[0]?.id ?? null)

  return (
    <ul className="border-t border-stroke">
      {areas.map((area) => {
        const isOpen = open === area.id
        return (
          <li key={area.id} id={area.id} className="border-b border-stroke">
            <button
              onClick={() => setOpen(isOpen ? null : area.id)}
              aria-expanded={isOpen}
              aria-controls={`${area.id}-panel`}
              className="group grid w-full grid-cols-12 items-baseline gap-3 py-8 text-left transition-colors sm:py-10 lg:gap-8"
            >
              <span
                className={[
                  'col-span-2 font-mono text-[12px] uppercase tracking-[0.25em] transition-colors duration-300 sm:col-span-1',
                  isOpen ? 'text-accent' : 'text-muted group-hover:text-accent',
                ].join(' ')}
              >
                {area.number}
              </span>
              <span
                className={[
                  'display-tight col-span-9 text-2xl font-medium transition-all duration-500 sm:col-span-10 sm:text-4xl lg:text-5xl',
                  isOpen
                    ? 'translate-x-2 text-foreground sm:translate-x-4'
                    : 'text-foreground/80 group-hover:translate-x-2 group-hover:text-foreground',
                ].join(' ')}
              >
                {area.title}
              </span>
              <span
                aria-hidden="true"
                className={[
                  'col-span-1 justify-self-end text-2xl font-light text-muted transition-transform duration-500',
                  isOpen ? 'rotate-45 text-accent' : 'group-hover:rotate-90',
                ].join(' ')}
              >
                +
              </span>
            </button>

            <div
              id={`${area.id}-panel`}
              className="grid transition-[grid-template-rows] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-12 gap-3 pb-12 lg:gap-8">
                  <div className="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-span-4">
                    <p className="text-base leading-[1.75] text-muted lg:text-[18px]">
                      {area.description}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-start-2 sm:col-span-5 lg:col-start-7 lg:col-span-3">
                    <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.3em] text-foreground">
                      Useful when
                    </p>
                    <ul className="space-y-3">
                      {area.usefulWhen.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-[1.6] text-muted"
                        >
                          <span className="mt-[3px] shrink-0 font-mono text-accent">
                            →
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-12 sm:col-start-7 sm:col-span-5 lg:col-start-10 lg:col-span-3">
                    <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.3em] text-foreground">
                      Typical outputs
                    </p>
                    <ul className="space-y-3">
                      {area.outputs.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-[1.6] text-muted"
                        >
                          <span className="mt-[3px] shrink-0 font-mono text-accent">
                            ·
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
