import type { Metadata } from 'next'
import Link from 'next/link'
import ResumeActions from '@/components/resume/ResumeActions'
import {
  LINKEDIN_PROFILE_URL,
  RESUME_EDUCATION,
  RESUME_EXPERIENCE,
  RESUME_LANGUAGES,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Résumé',
  description:
    'Résumé for Milos Dostanic, Senior Product Designer leading design on complex B2B products, based in Serbia.',
  alternates: { canonical: '/resume' },
}

const EXPERTISE = [
  'Complex B2B and enterprise product UX',
  'Information architecture and data-heavy interfaces',
  'Design systems: atomic composition and three-tier token architecture',
  'Figma variables in parity with production CSS, plus system governance',
  'Functional prototypes and Figma-to-code workflows',
  'Engineering collaboration, handoff, and design QA',
  'AI and agentic product flows, with explicit trust and failure states',
  'Product strategy and discovery on ambiguous problems',
] as const

const SELECTED_PROOF = [
  {
    title: 'OriginChains',
    label: 'Client work · Climate SaaS',
    body: 'Senior product design for company discovery, trust-heavy data presentation, activity feeds, and a component system tuned for engineering handoff.',
    href: '/work/originchains',
  },
  {
    title: 'Optronic',
    label: 'Client work · Designed and built',
    body: 'Multilingual EN/DE information architecture across nine product families, built as a reusable React component set and shipped live.',
    href: '/work/optronic',
  },
  {
    title: 'WorkLight',
    label: 'Personal product · Active development',
    body: 'A local-first daily work operator with evidence-linked priorities, read-only integrations, a PostgreSQL data model, background jobs, and explicit trust states.',
    href: 'https://github.com/mdostanic85/morning',
  },
  {
    title: 'Design system architecture',
    label: 'Working method',
    body: 'Atoms to organisms, primitive to semantic to component tokens, Figma variables versioned against CSS custom properties, and governance designed with the library.',
    href: '/work/design-systems',
  },
] as const

export default function ResumePage() {
  return (
    <main className="resume-page bg-white text-[#111318]">
      <div className="resume-actions mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4 px-5 pb-6 pt-24 sm:px-8">
        <Link href="/" className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#111318]/60 hover:text-[#2742ff]">← Portfolio</Link>
        <ResumeActions />
      </div>

      <article className="mx-auto w-full max-w-[1100px] px-5 pb-24 sm:px-8">
        <header className="grid grid-cols-1 gap-10 border-y border-[#111318]/20 py-10 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#2742ff]">Milos Dostanic</p>
            <h1 className="mt-4 max-w-[12ch] text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-7xl">
              Senior Product Designer & Product Builder
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.7] text-[#111318]/70">
              I take complex software from ambiguity to a clear, buildable product — product
              architecture, data-heavy and workflow-heavy UX, design systems, and enough
              implementation work to keep the shipped result faithful to the decision.
              12 years in digital products, 20 in design. Current commercial work is confidential.
            </p>
          </div>
          <address className="not-italic sm:col-span-4 sm:text-right">
            <p className="text-sm leading-7 text-[#111318]/70">Serbia · CET · Remote worldwide</p>
            <a href="mailto:milos@dostanic.net" className="block text-sm leading-7 hover:text-[#2742ff]">milos@dostanic.net</a>
            <a href={LINKEDIN_PROFILE_URL} className="block text-sm leading-7 hover:text-[#2742ff]">linkedin.com/in/milos-dostanic</a>
            <a href="https://github.com/mdostanic85" className="block text-sm leading-7 hover:text-[#2742ff]">github.com/mdostanic85</a>
            <a href="https://www.dostanic.net" className="block text-sm leading-7 hover:text-[#2742ff]">www.dostanic.net</a>
          </address>
        </header>

        <section className="grid grid-cols-1 gap-10 border-b border-[#111318]/20 py-10 sm:grid-cols-12">
          <div className="sm:col-span-3">
            <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#2742ff]">Experience</h2>
            <p className="mt-3 max-w-[24ch] text-xs leading-5 text-[#111318]/50">
              Ongoing independent and company roles overlap, as listed in the source profile.
            </p>
          </div>
          <div className="sm:col-span-9">
            {RESUME_EXPERIENCE.map((row, index) => (
              <article key={row.company} className={index > 0 ? 'border-t border-[#111318]/15 py-7' : 'pb-7'}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{row.company}</h3>
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#111318]/55">{row.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-[#2742ff]">{row.role}</p>
                {row.location ? <p className="mt-1 text-xs text-[#111318]/45">{row.location}</p> : null}
                <p className="mt-3 max-w-[72ch] text-sm leading-[1.7] text-[#111318]/70">{row.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 border-b border-[#111318]/20 py-10 sm:grid-cols-12">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#2742ff] sm:col-span-3">Selected proof</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:col-span-9 sm:grid-cols-2">
            {SELECTED_PROOF.map((item) => (
              <article key={item.title}>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.17em] text-[#2742ff]">{item.label}</p>
                <p className="mt-3 text-sm leading-[1.65] text-[#111318]/70">{item.body}</p>
                <a href={item.href} className="mt-3 inline-block text-xs font-medium text-[#2742ff]">View proof</a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-12">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#2742ff] sm:col-span-3">Core expertise</h2>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm leading-[1.6] text-[#111318]/75 sm:col-span-9 sm:grid-cols-2">
            {EXPERTISE.map((item) => <li key={item} className="border-t border-[#111318]/15 pt-3">{item}</li>)}
          </ul>
        </section>

        <section className="grid grid-cols-1 gap-10 border-t border-[#111318]/20 py-10 sm:grid-cols-12">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#2742ff] sm:col-span-3">Education & languages</h2>
          <div className="grid grid-cols-1 gap-8 sm:col-span-9 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">Education</h3>
              {RESUME_EDUCATION.map((item) => (
                <div key={item.qualification} className="mt-4 border-t border-[#111318]/15 pt-4">
                  <p className="text-sm font-semibold">{item.school}</p>
                  <p className="mt-1 text-sm text-[#111318]/70">{item.qualification}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#111318]/50">{item.period}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em]">Languages</h3>
              <ul className="mt-4 border-t border-[#111318]/15">
                {RESUME_LANGUAGES.map((item) => (
                  <li key={item.language} className="flex justify-between gap-4 border-b border-[#111318]/15 py-3 text-sm">
                    <span className="font-medium">{item.language}</span>
                    <span className="text-right text-[#111318]/60">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
