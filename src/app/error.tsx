'use client'

import { useEffect } from 'react'
import Link from 'next/link'

/**
 * Route-level error boundary — surfaces render/runtime failures instead of a
 * blank 500 so local debugging is faster.
 */
export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="grain flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        Something went wrong
      </p>
      <h1 className="max-w-md text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
        {error.message || 'Unexpected error'}
      </h1>
      {error.digest ? (
        <p className="font-mono text-xs text-muted">Digest: {error.digest}</p>
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-[4px] border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-inverse-foreground transition-colors hover:bg-foreground/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-[4px] border border-stroke px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
        >
          Home
        </Link>
      </div>
    </main>
  )
}
