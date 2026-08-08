import Link from 'next/link'
import Reveal from '@/components/v3/Reveal'
import { DIFFERENTIATORS } from '@/lib/data'

/**
 * Home chapter 03 — the practice differentiators. These are deliberately
 * specific claims (token layer first, code prototypes, implementation review,
 * governance) rather than a generic process ladder: each one is checkable
 * against the case studies below.
 */
export default function Differentiators() {
  return (
    <section aria-labelledby="differentiators-title" className="bg-surface/55">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 border-t border-stroke pt-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
                03 · How I work
              </p>
              <h2
                id="differentiators-title"
                className="display-tight mt-6 max-w-[12ch] text-4xl font-medium sm:text-5xl lg:text-6xl"
              >
                What I do differently.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <ol className="border-t border-stroke">
                {DIFFERENTIATORS.map((item) => (
                  <li
                    key={item.number}
                    className="grid grid-cols-12 gap-x-4 gap-y-3 border-b border-stroke py-8 sm:py-10"
                  >
                    <span className="col-span-2 font-mono text-[12px] tracking-[0.23em] text-accent sm:col-span-1">
                      {item.number}
                    </span>
                    <h3 className="display-tight col-span-10 text-xl font-medium sm:col-span-5 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="col-span-12 max-w-[52ch] text-sm leading-[1.75] text-muted sm:col-span-6 sm:text-base">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-8">
                <Link
                  href="/work/design-systems"
                  className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                >
                  Design system architecture
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
