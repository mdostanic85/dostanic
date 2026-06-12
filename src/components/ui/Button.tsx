import * as React from 'react'
import Link from 'next/link'
import { Slot } from 'radix-ui'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/**
 * shadcn-style Button — architecture (cva + Slot + asChild), variants driven
 * by the project's existing color tokens (`--color-foreground`,
 * `--color-inverse-foreground`, `--color-stroke`, `--color-accent`). Public
 * API stays backward-compatible with the prior `<Button variant href external>`
 * usage so existing call-sites in Hero, FooterCTA, Contact, etc. keep
 * working without changes.
 *
 * - `asChild` enables the standard shadcn pattern (`<Button asChild><Link …/></Button>`)
 * - `href` keeps the legacy auto-wrap behaviour: a Next `Link` (or external `<a>`)
 *   is rendered automatically when an `href` is provided without `asChild`.
 */
const buttonVariants = cva(
  // transition-colors + transition-transform (not transition-all) — keeps
  // hover lift while avoiding Tailwind v4 mis-parsing of comma-heavy
  // arbitrary `transition-[…]` declarations.
  // V3 — sharp rectangles, mono uppercase labels, fill-swap hovers.
  'inline-flex shrink-0 items-center justify-center whitespace-nowrap font-mono uppercase tracking-[0.2em] transition-colors duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-foreground text-inverse-foreground border border-foreground hover:bg-transparent hover:text-foreground',
        ghost:
          'bg-transparent text-muted border border-stroke hover:border-foreground hover:text-foreground',
        'primary-inverse':
          'bg-inverse-foreground text-foreground border border-inverse-foreground hover:bg-transparent hover:text-inverse-foreground',
        accent:
          'bg-accent text-inverse-foreground border border-accent hover:bg-transparent hover:text-accent',
      },
      size: {
        default: 'h-11 px-6 text-[11px]',
        sm: 'h-9 px-4 text-[10px]',
        lg: 'h-12 px-7 text-[11px]',
        icon: 'h-11 w-11 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
type ButtonElProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  asChild?: boolean
  href?: string
  external?: boolean
  className?: string
  children?: React.ReactNode
} & VariantProps<typeof buttonVariants> &
  Omit<ButtonElProps, 'children' | 'className'> &
  Omit<AnchorProps, 'children' | 'className'>

const Button = React.forwardRef<HTMLElement, ButtonProps>(function Button(
  { asChild = false, href, external = false, variant, size, className, children, ...props },
  ref,
) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if (asChild) {
    return (
      <Slot.Root
        ref={ref as React.Ref<HTMLElement>}
        className={classes}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </Slot.Root>
    )
  }

  if (href) {
    if (external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(props as AnchorProps)}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as AnchorProps)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonElProps)}
    >
      {children}
    </button>
  )
})

export { Button, buttonVariants }
export default Button
