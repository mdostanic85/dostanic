import { PROCESS_STEPS } from '@/lib/data'
import Reveal from '@/components/v3/Reveal'

/**
 * Home chapter 03 — How I work.
 *
 * Deliberately not a design-thinking wheel and not a card grid: one horizontal
 * spine with the five steps sitting on it, so the sequence is the visual. The
 * two middle steps (Structure, Decide) are marked as the weight of the work —
 * that claim is the point of the section, so the diagram has to carry it rather
 * than leaving it to body copy.
 *
 * The rail is drawn once and the nodes sit on top of it, which keeps the whole
 * thing legible at any width; below `lg` the spine turns vertical.
 */
export default function ProcessSpine() {
  return (
    <section aria-labelledby="process-title" className="relative">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <Reveal>
          <div>
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
              03 · How I work
            </p>
            <h2
              id="process-title"
              className="display-tight mt-6 max-w-[16ch] text-4xl font-medium text-foreground sm:text-5xl lg:text-6xl"
            >
              Most of the work is deciding.
            </h2>
            <p className="mt-8 max-w-[56ch] text-[17px] leading-[1.75] text-muted sm:text-[18px]">
              Screens are the easy part. I spend most of my effort finding the
              structure of a product and naming the few decisions it actually
              depends on — the rest follows from those.
            </p>
          </div>
        </Reveal>

        {/* ── The stepper ──────────────────────────────────────────────── */}
        <Reveal staggerSelector="[data-reveal-item]">
          <ol className="relative mt-20 lg:mt-28">
            {/* Rail — horizontal on wide, vertical on narrow. */}
            <span
              aria-hidden="true"
              className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px bg-stroke lg:left-0 lg:top-4 lg:h-px lg:w-full"
            />

            <div className="flex flex-col gap-10 lg:flex-row lg:gap-5">
              {PROCESS_STEPS.map((step) => {
                const isWeight = step.title === 'Structure' || step.title === 'Decide'
                return (
                  <li
                    key={step.number}
                    data-reveal-item
                    className={[
                      'relative flex-1 pl-14 lg:pl-0',
                      // The weighted steps carry a panel; the rest stay bare,
                      // so the emphasis is structural rather than decorative.
                      isWeight
                        ? 'lg:border lg:border-accent/35 lg:bg-accent/[0.06] lg:p-7 lg:pt-16'
                        : 'lg:border lg:border-transparent lg:p-7 lg:pt-16',
                    ].join(' ')}
                  >
                    {/* Numbered chip, sitting on the rail. */}
                    <span
                      aria-hidden="true"
                      className={[
                        'absolute left-0 top-0 flex h-8 w-8 items-center justify-center font-mono text-[12px] lg:left-7',
                        isWeight
                          ? 'bg-accent text-inverse-foreground'
                          : 'border border-stroke bg-background text-muted',
                      ].join(' ')}
                    >
                      {step.number}
                    </span>

                    {/* Rendered on every step, hidden on the unweighted ones, so
                        the five titles sit on one line instead of stepping. */}
                    <p
                      aria-hidden={isWeight ? undefined : 'true'}
                      className={[
                        'font-mono text-[11px] uppercase tracking-[0.24em] text-accent',
                        isWeight ? '' : 'invisible',
                      ].join(' ')}
                    >
                      Where the time goes
                    </p>

                    <h3
                      className={[
                        'display-tight mt-3 text-xl font-medium sm:text-2xl',
                        isWeight ? 'text-foreground' : 'text-foreground/70',
                      ].join(' ')}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-base leading-[1.7] text-muted">
                      {step.description}
                    </p>
                  </li>
                )
              })}
            </div>
          </ol>
        </Reveal>

        {/* The claim the diagram is making, said once. */}
        <Reveal>
          <p className="mt-16 max-w-[62ch] border-t border-stroke pt-8 text-[17px] leading-[1.75] text-muted sm:text-[18px] lg:mt-20">
            The two marked steps are where I spend most of my time. A product
            with the right structure and four well-argued decisions is
            straightforward to design. One without them stays expensive no matter
            how good the screens look.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
