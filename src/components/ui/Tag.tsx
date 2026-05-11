type TagProps = {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-muted border border-stroke rounded-[4px] ${className}`}
    >
      {children}
    </span>
  )
}
