import type { Metadata } from 'next'
import Link from 'next/link'
import FooterCTA from '@/components/home/FooterCTA'
import Reveal from '@/components/v3/Reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Milos Dostanic about senior product design roles and selected B2B product collaborations.',
  alternates: { canonical: '/contact' },
}

const FIT = [
  'Senior remote Product Design roles with meaningful product ownership',
  'Complex B2B, enterprise, data-heavy, or AI product work',
  'Teams that want design involved through implementation',
  'Selected product strategy, system, and functional prototype engagements',
] as const

export default function ContactPage() {
  return (
    <main>
      <header className="chapter-dark grain bg-background pb-20 pt-36 text-foreground sm:pb-28 sm:pt-44">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-8">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
            <h1 className="display-mega mt-7 max-w-[12ch] text-[clamp(48px,9vw,132px)] font-semibold uppercase">
              Let&apos;s discuss the product problem.
            </h1>
          </div>
          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="max-w-[44ch] text-base leading-[1.75] text-muted">
              I am based in Serbia, work in CET, and collaborate remotely with teams worldwide.
              Email is the clearest way to start.
            </p>
            <a
              href="mailto:milos@dostanic.net?subject=Product%20design%20conversation"
              data-analytics-event="contact_action"
              className="display-tight mt-8 w-fit border-b border-accent pb-2 text-2xl font-medium text-foreground transition-colors hover:text-accent sm:text-3xl"
            >
              milos@dostanic.net
            </a>
          </div>
        </div>
      </header>

      <section aria-labelledby="contact-fit" className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="grid grid-cols-1 gap-12 border-t border-stroke pt-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">Good fit</p>
                <h2 id="contact-fit" className="display-tight mt-5 max-w-[10ch] text-3xl font-medium sm:text-5xl">
                  The work I want to do next.
                </h2>
              </div>
              <ul className="border-t border-stroke lg:col-span-8">
                {FIT.map((item, index) => (
                  <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-stroke py-7">
                    <span className="font-mono text-[12px] tracking-[0.22em] text-accent">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-base leading-[1.65] text-foreground sm:text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-20 flex flex-col gap-5 border-t border-stroke pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[50ch] text-sm leading-[1.7] text-muted">
                Include a short description of the product, team, problem, and timing. I will reply by email.
              </p>
              <div className="flex flex-wrap gap-5 font-mono text-[12px] uppercase tracking-[0.22em]">
                <a href="https://www.linkedin.com/in/milos-dostanic/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn ↗</a>
                <a href="https://github.com/mdostanic85" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub ↗</a>
                <Link href="/resume" data-analytics-event="resume_action" className="hover:text-accent">Résumé →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterCTA compact />
    </main>
  )
}
