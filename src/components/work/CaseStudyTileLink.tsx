'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { getCaseStudyHref } from '@/lib/caseStudyRoutes'

type Props = {
  slug: string
  title: string
  children: ReactNode
  className?: string
}

/**
 * Wraps a project tile in a Next.js Link when the slug has a live case study
 * route; otherwise renders a plain div preserving existing display-only behavior.
 */
export default function CaseStudyTileLink({ slug, title, children, className }: Props) {
  const href = getCaseStudyHref(slug)

  if (href) {
    return (
      <Link href={href} aria-label={`View ${title} case study`} className={className}>
        {children}
      </Link>
    )
  }

  return <div className={className}>{children}</div>
}
