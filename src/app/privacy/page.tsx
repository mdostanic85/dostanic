import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy information for this site.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[900px] px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Link href="/" className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted hover:text-accent">← Portfolio</Link>
      <p className="mt-16 font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">Privacy</p>
      <h1 className="display-tight mt-6 text-5xl font-medium sm:text-7xl">A simple portfolio with minimal data collection.</h1>

      <div className="mt-16 space-y-12 border-t border-stroke pt-10 text-base leading-[1.75] text-muted">
        <section>
          <h2 className="text-xl font-medium text-foreground">Contact</h2>
          <p className="mt-4">This site does not submit contact forms or create user accounts. Email links open your email application. Any information you send by email is handled through the email services used by you and by milos@dostanic.net.</p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-foreground">Hosting and technical logs</h2>
          <p className="mt-4">The hosting provider may process standard request information such as IP address, browser details, requested pages, and timestamps for security and reliability.</p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-foreground">External links</h2>
          <p className="mt-4">Links to LinkedIn, GitHub, Behance, Figma, and other external services are governed by those services&apos; privacy policies.</p>
        </section>
        <section>
          <h2 className="text-xl font-medium text-foreground">Questions</h2>
          <p className="mt-4">For a privacy question, email <a href="mailto:milos@dostanic.net" className="text-foreground underline decoration-stroke underline-offset-4 hover:text-accent">milos@dostanic.net</a>.</p>
        </section>
      </div>
    </main>
  )
}
