import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="chapter-dark grain flex min-h-screen items-center bg-background px-5 pb-20 pt-28 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">404 · Page not found</p>
          <h1 className="display-mega mt-7 text-[clamp(64px,15vw,220px)] font-semibold uppercase">
            Wrong turn.
          </h1>
        </div>
        <div className="flex flex-col justify-end lg:col-span-4">
          <p className="max-w-[40ch] text-[18px] leading-[1.75] text-muted">
            The page may have moved, or the link may be incomplete. The selected work and main portfolio are still available.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/work" className="bg-foreground px-5 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-inverse-foreground hover:bg-accent hover:text-white">View work</Link>
            <Link href="/" className="border border-stroke px-5 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-muted hover:border-foreground hover:text-foreground">Home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
