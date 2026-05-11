import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost' | 'primary-inverse'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  external?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-foreground text-inverse-foreground hover:bg-foreground/90 border border-foreground',
  ghost:
    'bg-transparent text-foreground border border-stroke hover:border-foreground',
  'primary-inverse':
    'bg-inverse-foreground text-foreground hover:bg-inverse-foreground/90 border border-inverse-foreground',
}

// P2 fix: transition-[...] instead of transition-all — avoids unnecessary full-property transitions
const base =
  'inline-flex h-10 items-center justify-center px-5 text-[14px] leading-5 font-medium rounded-[4px] transition-[color,background-color,border-color,transform] duration-150 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 whitespace-nowrap'

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
