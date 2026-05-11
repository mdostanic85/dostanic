import Link from 'next/link'

type ArrowLinkProps = {
  href: string
  children: React.ReactNode
  /**
   * Pass color utilities here — e.g. "text-foreground hover:text-accent".
   * No default color is applied so callers own the color context.
   */
  className?: string
}

export default function ArrowLink({ href, children, className = '' }: ArrowLinkProps) {
  const classes = `group/arrow inline-flex items-center gap-1 text-sm font-medium transition-colors ${className}`
  const content = (
    <>
      {children}
      <span
        className="inline-block transition-transform duration-150 group-hover/arrow:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </>
  )

  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  )
}
