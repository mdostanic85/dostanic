import Link from 'next/link'
import { HOME_COMPANIES } from '@/lib/data'
import Reveal from './Reveal'

/**
 * Experience — curated employers for the homepage. Full chronology is on
 * About / Résumé. Space Inch is current employer (NDA client work; not a case).
 */
export default function ExperienceIndex() {
  return (
    <section aria-label="Experience" className="relative">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 pb-12">
            <div>
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
                04 · Experience
              </p>
              <h2 className="display-tight mt-6 text-4xl font-medium text-foreground sm:text-5xl">
                Where I&apos;ve worked.
              </h2>
            </div>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
            >
              About me
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal staggerSelector="[data-reveal-item]">
          <ul className="border-t border-stroke">
            {HOME_COMPANIES.map((row) => (
              <li
                key={row.company}
                data-reveal-item
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1 border-b border-stroke py-5 transition-colors duration-300 hover:bg-surface/40"
              >
                <span className="col-span-12 font-mono text-[12px] uppercase tracking-[0.23em] text-muted sm:col-span-2">
                  {row.period}
                </span>
                <h3 className="col-span-12 display-tight text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:col-span-3 sm:text-xl">
                  {row.company}
                </h3>
                {/* Scope is the detail line — it stays quiet and drops out on
                    phones, where the row has to stay scannable. */}
                <p className="col-span-12 hidden max-w-[44ch] text-sm leading-[1.6] text-muted sm:col-span-4 sm:block">
                  {row.scope}
                </p>
                <span className="col-span-12 font-mono text-[12px] uppercase tracking-[0.23em] text-muted sm:col-span-3 sm:text-right">
                  {row.role}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
