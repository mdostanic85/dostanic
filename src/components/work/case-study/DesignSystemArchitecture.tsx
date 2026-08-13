import { sectionEyebrowAccentClassName } from '@/lib/headings'

/**
 * The two structures a design system actually runs on: the atomic composition
 * hierarchy, and the three-tier token pipeline that binds it to code. Rendered
 * with the site's own hairline/mono language — no new visual vocabulary.
 */

const ATOMIC_LAYERS = [
  {
    layer: 'Atoms',
    definition: 'Single-purpose elements that hold no layout opinion.',
    examples: ['Button', 'Input', 'Badge', 'Field label', 'Icon'],
    rule: 'Every value comes from a token. No raw hex, no magic numbers.',
  },
  {
    layer: 'Molecules',
    definition: 'Atoms combined into one unit of meaning.',
    examples: ['Field + label + error', 'Table cell + status', 'Card header'],
    rule: 'Owns its own states — empty, loading, invalid, disabled.',
  },
  {
    layer: 'Organisms',
    definition: 'Composed regions that carry real product behaviour.',
    examples: ['Data table with filters', 'Detail panel', 'Nav shell'],
    rule: 'Where responsive rules and permission variants get decided.',
  },
] as const

const TOKEN_TIERS = [
  {
    tier: 'Primitive',
    role: 'Raw value. Carries no meaning and is never used in a component.',
    example: '--blue-600: #2742ff;',
  },
  {
    tier: 'Semantic',
    role: 'Assigns the primitive a job. This is the layer product decisions happen in.',
    example: '--color-accent: var(--blue-600);',
  },
  {
    tier: 'Component',
    role: 'Binds a semantic role to one component surface, so it can be retargeted alone.',
    example: '--button-primary-bg: var(--color-accent);',
  },
] as const

const PARITY_ROWS = [
  { figma: 'color/semantic/accent', css: '--color-accent' },
  { figma: 'space/4', css: '--space-4' },
  { figma: 'radius/md', css: '--radius-md' },
  { figma: 'text/display-sm', css: '--text-display-sm' },
] as const

export default function DesignSystemArchitecture() {
  return (
    <div className="space-y-16">
      {/* Atomic composition */}
      <div>
        <p className={sectionEyebrowAccentClassName}>Composition</p>
        <h2 className="display-tight mt-4 max-w-[20ch] text-2xl font-medium sm:text-3xl">
          Atoms, molecules, organisms.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.7] text-muted lg:text-xl">
          The hierarchy is not a naming convention. It decides where a change is
          allowed to happen, which is what keeps a system from drifting once
          several people are contributing to it.
        </p>

        <ul className="mt-10 grid grid-cols-1 border-t border-stroke lg:grid-cols-3">
          {ATOMIC_LAYERS.map((item) => (
            <li
              key={item.layer}
              className="border-b border-stroke px-0 py-8 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0"
            >
              <h3 className="display-tight text-xl font-medium text-foreground">
                {item.layer}
              </h3>
              <p className="mt-3 text-base leading-[1.7] text-muted">
                {item.definition}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.examples.map((example) => (
                  <span
                    key={example}
                    className="border border-stroke px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
                  >
                    {example}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-stroke pt-4 text-sm leading-[1.6] text-foreground">
                {item.rule}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Token pipeline */}
      <div>
        <p className={sectionEyebrowAccentClassName}>Token architecture</p>
        <h2 className="display-tight mt-4 max-w-[24ch] text-2xl font-medium sm:text-3xl">
          Three tiers, so a rebrand is one file and not a sweep.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.7] text-muted lg:text-xl">
          Components never reference a primitive. That single rule is what makes
          theming, white-labelling, and dark mode a token change instead of a
          component rewrite.
        </p>

        <ol className="mt-10 border-t border-stroke">
          {TOKEN_TIERS.map((tier, index) => (
            <li
              key={tier.tier}
              className="grid grid-cols-12 items-start gap-x-6 gap-y-3 border-b border-stroke py-7"
            >
              <span className="col-span-2 font-mono text-[12px] tracking-[0.22em] text-accent sm:col-span-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="display-tight col-span-10 text-lg font-medium sm:col-span-3">
                {tier.tier}
              </h3>
              <p className="col-span-12 text-base leading-[1.7] text-muted sm:col-span-4">
                {tier.role}
              </p>
              <code className="col-span-12 overflow-x-auto whitespace-nowrap border border-stroke bg-background px-3 py-2 font-mono text-[12px] text-muted sm:col-span-4">
                {tier.example}
              </code>
            </li>
          ))}
        </ol>
      </div>

      {/* Figma ↔ code parity */}
      <div>
        <p className={sectionEyebrowAccentClassName}>Parity</p>
        <h2 className="display-tight mt-4 max-w-[24ch] text-2xl font-medium sm:text-3xl">
          One name in Figma, the same name in code.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.7] text-muted lg:text-xl">
          Figma variables and CSS custom properties are versioned against each
          other. When an engineer reads a spec, the name in the file is the name
          they type — there is nothing to translate and nothing to guess.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="border-y border-stroke">
                <th className="py-4 pr-6 font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-muted">
                  Figma variable
                </th>
                <th className="py-4 pr-6 font-mono text-[11px] font-normal uppercase tracking-[0.2em] text-muted">
                  CSS custom property
                </th>
              </tr>
            </thead>
            <tbody>
              {PARITY_ROWS.map((row) => (
                <tr key={row.css} className="border-b border-stroke">
                  <td className="py-4 pr-6 font-mono text-[13px] text-muted">
                    {row.figma}
                  </td>
                  <td className="py-4 pr-6 font-mono text-[13px] text-foreground">
                    {row.css}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
