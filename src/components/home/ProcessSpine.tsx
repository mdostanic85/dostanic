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
          <div className="max-w-[46ch]">
            <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.28em] text-accent">
              03 · How I work
            </p>
            <h2
              id="process-title"
              className="display-tight mt-6 text-4xl font-medium text-foreground sm:text-5xl lg:text-6xl"
            >
              Most of the work is deciding.
            </h2>
            <p className="mt-8 text-[15px] leading-[1.75] text-muted sm:text-base">
              Screens are the easy part. I spend most of my effort finding the
              structure of a product and naming the few decisions it actually
              depends on — the rest follows from those.
            </p>
          </div>
        </Reveal>

        {/* ── The spine ────────────────────────────────────────────────── */}
        <Reveal staggerSelector="[data-reveal-item]">
          <ol className="relative mt-20 lg:mt-28">
            {/* Rail — horizontal on wide, vertical on narrow. */}
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-stroke lg:left-0 lg:top-[7px] lg:h-px lg:w-full"
            />

            <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
              {PROCESS_STEPS.map((step) => {
                const isWeight = step.title === 'Structure' || step.title === 'Decide'
                return (
                  <li
                    key={step.number}
                    data-reveal-item
                    className="relative flex-1 pl-9 lg:pl-0 lg:pt-9"
                  >
                    {/* Node on the rail */}
                    <span
                      aria-hidden="true"
                      className={[
                        'absolute left-0 top-1.5 h-[15px] w-[15px] lg:top-0',
                        isWeight
                          ? 'border-2 border-accent bg-background'
                          : 'border border-stroke bg-background',
                      ].join(' ')}
                    />
                    {isWeight ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[3px] top-[9px] h-[9px] w-[9px] bg-accent lg:top-[3px]"
                      />
                    ) : null}

                    <p
                      className={[
                        'font-mono text-[11px] uppercase tracking-[0.24em]',
                        isWeight ? 'text-accent' : 'text-muted',
                      ].join(' ')}
                    >
                      {step.number}
                    </p>
                    <h3
                      className={[
                        'display-tight mt-3 text-xl font-medium sm:text-2xl',
                        isWeight ? 'text-foreground' : 'text-foreground/70',
                      ].join(' ')}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-sm leading-[1.7] text-muted">
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
          <p className="mt-16 max-w-[62ch] border-t border-stroke pt-8 text-[15px] leading-[1.75] text-muted sm:text-base lg:mt-20">
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
