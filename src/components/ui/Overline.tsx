type OverlineProps = {
  children: React.ReactNode
  /**
   * Render as "h2" to fix heading hierarchy when the section has no other h2.
   * Visually identical — the styling is always overline weight/size/case.
   */
  as?: 'p' | 'h2'
  className?: string
}

export default function Overline({ children, as: Tag = 'p', className = '' }: OverlineProps) {
  return (
    <Tag
      className={`text-xs font-medium uppercase tracking-[0.08em] text-accent ${className}`}
    >
      {children}
    </Tag>
  )
}
