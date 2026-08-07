import Link from 'next/link'
import Reveal from '@/components/v3/Reveal'

const STEPS = [
  {
    number: '01',
    title: 'Frame the real problem',
    body: 'I turn business goals, user evidence, technical limits, and open questions into a decision-ready product brief.',
  },
  {
    number: '02',
    title: 'Structure the product',
    body: 'Information architecture, roles, permissions, flows, states, and edge cases come before polished screens.',
  },
  {
    number: '03',
    title: 'Test the system',
    body: 'I use prototypes, realistic data, components, and design-system rules to test how the solution behaves at scale.',
  },
  {
    number: '04',
    title: 'Stay through implementation',
    body: 'I work with engineering, review previews, document trade-offs, and check that production keeps the design intent.',
  },
] as const

export default function HowIWork() {
  return (
    <section aria-labelledby="how-i-work-title" className="bg-surface/55">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 border-t border-stroke pt-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">03 · How I work</p>
              <h2 id="how-i-work-title" className="display-tight mt-6 max-w-[12ch] text-4xl font-medium sm:text-5xl lg:text-6xl">
                From ambiguity to a product teams can build.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <ol className="border-t border-stroke">
                {STEPS.map((step) => (
                  <li key={step.number} className="grid grid-cols-12 gap-4 border-b border-stroke py-8 sm:py-10">
                    <span className="col-span-2 font-mono text-[12px] tracking-[0.23em] text-accent">{step.number}</span>
                    <h3 className="display-tight col-span-10 text-xl font-medium sm:col-span-4 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="col-span-10 col-start-3 max-w-[52ch] text-sm leading-[1.75] text-muted sm:col-span-6 sm:col-start-auto sm:text-base">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-8">
                <Link
                  href="/work/ai-design-system-workflow"
                  className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                >
                  Design ↔ implementation method
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
