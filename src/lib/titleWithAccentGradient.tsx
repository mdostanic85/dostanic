import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const EN_DASH_SEP = ' — '

type TitleWithAccentOptions = {
  /** Applied to the non-gradient prefix (e.g. `group-hover:text-accent`). */
  leadClassName?: string
}

/**
 * Renders a title with one phrase emphasised in solid accent (`text-accent`).
 * If the title contains ` — ` (spaced en dash), the part after it is
 * accent-coloured; otherwise the last word is.
 */
export function titleWithAccentGradient(
  title: string,
  opts?: TitleWithAccentOptions,
): ReactNode {
  const leadClassName = opts?.leadClassName
  const dashIdx = title.indexOf(EN_DASH_SEP)
  if (dashIdx !== -1) {
    const before = title.slice(0, dashIdx + EN_DASH_SEP.length)
    const after = title.slice(dashIdx + EN_DASH_SEP.length)
    return (
      <>
        <span className={cn('text-foreground', leadClassName)}>{before}</span>
        <span className="text-accent">{after}</span>
      </>
    )
  }
  const t = title.trimEnd()
  const lastSpace = t.lastIndexOf(' ')
  if (lastSpace === -1) {
    return <span className="text-accent">{t}</span>
  }
  return (
    <>
      <span className={cn('text-foreground', leadClassName)}>{t.slice(0, lastSpace + 1)}</span>
      <span className="text-accent">{t.slice(lastSpace + 1)}</span>
    </>
  )
}
