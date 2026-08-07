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
                Where I&apos;ve{' '}
                <span className="accent-gradient-text">worked.</span>
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
                className="group grid grid-cols-12 items-baseline gap-3 border-b border-stroke py-7 lg:py-8"
              >
                <span className="col-span-4 font-mono text-[12px] uppercase tracking-[0.23em] text-muted sm:col-span-2">
                  {row.period}
                </span>
                <h3 className="display-tight col-span-8 text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:col-span-5 sm:text-xl lg:text-2xl">
                  {row.company}
                </h3>
                <span className="col-span-12 col-start-5 font-mono text-[12px] uppercase tracking-[0.23em] text-muted sm:col-span-5 sm:col-start-8 sm:text-right">
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
