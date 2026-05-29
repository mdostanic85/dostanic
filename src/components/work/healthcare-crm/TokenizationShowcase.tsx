import { cn } from '@/lib/utils'
import { sectionEyebrowAccentClassName, sectionSubheadingClassName } from '@/lib/headings'

const COLOR_TOKENS = [
  {
    name: 'primary',
    label: 'Primary',
    hex: '#59698E',
    role: 'Main CTAs, links, active nav',
  },
  {
    name: 'success',
    label: 'Success',
    hex: '#10B981',
    role: 'Confirmations, positive status',
  },
  {
    name: 'highlight',
    label: 'Highlight',
    hex: '#EAB308',
    role: 'Focus, key metrics accents',
  },
  {
    name: 'accent',
    label: 'Accent',
    hex: '#8F45EF',
    role: 'Premium features, emphasis',
  },
] as const

const NEUTRAL_TOKENS = [
  { name: 'surface', hex: '#FFFFFF', role: 'Cards, main backgrounds' },
  { name: 'muted', hex: '#64748B', role: 'Secondary text, labels' },
  { name: 'foreground', hex: '#0F172A', role: 'Headers, navigation' },
] as const

const SPACING_TOKENS = [
  { token: '--space-1', value: '4px', use: 'Tight inline gaps' },
  { token: '--space-2', value: '8px', use: 'Icon padding, chip gaps' },
  { token: '--space-3', value: '12px', use: 'Form field internal padding' },
  { token: '--space-4', value: '16px', use: 'Card padding (compact)' },
  { token: '--space-6', value: '24px', use: 'Section gaps within modules' },
  { token: '--space-8', value: '32px', use: 'Dashboard module separation' },
] as const

const TYPE_TOKENS: {
  family: string
  role: string
  sample: string
  specs: string
  mono?: boolean
}[] = [
  {
    family: 'Plus Jakarta Sans',
    role: 'UI & dashboard body',
    sample: 'Patient overview',
    specs: '16px / 400 · 24px / 600 · 32px / 700',
  },
  {
    family: 'Space Grotesk',
    role: 'Page & module headlines',
    sample: 'Practice dashboard',
    specs: '24px / 500 · 32px / 600 · 48px / 700',
  },
  {
    family: 'DM Mono',
    role: 'IDs, codes, technical values',
    sample: 'HC-2024-001247',
    specs: '14px / 400 · 20px / 500',
    mono: true,
  },
]

function TokenCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[10px] border border-stroke bg-surface p-5 lg:p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Live token reference — example block for case study, not a full DS docs site. */
export default function TokenizationShowcase() {
  return (
    <div className="space-y-10">
      <div>
        <p className={sectionEyebrowAccentClassName}>Tokenization example</p>
        <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted lg:text-lg">
          Semantic tokens first — primitives map to roles, roles map to components.
          Engineering receives names and values, not one-off hex per screen.
        </p>
      </div>

      <TokenCard>
        <h3 className={sectionSubheadingClassName}>Color — semantic roles</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {COLOR_TOKENS.map((t) => (
            <div key={t.name} className="space-y-3">
              <div
                className="aspect-[4/3] rounded-[8px] border border-stroke"
                style={{ backgroundColor: t.hex }}
              />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  --color-{t.name}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{t.label}</p>
                <p className="font-mono text-xs text-muted">{t.hex}</p>
                <p className="mt-2 text-xs leading-[1.5] text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-stroke pt-8">
          {NEUTRAL_TOKENS.map((t) => (
            <div key={t.name} className="flex items-center gap-3">
              <div
                className="h-10 w-10 shrink-0 rounded-[6px] border border-stroke"
                style={{ backgroundColor: t.hex }}
              />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  --color-{t.name}
                </p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </TokenCard>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TokenCard>
          <h3 className={sectionSubheadingClassName}>Spacing scale</h3>
          <ul className="mt-6 space-y-3">
            {SPACING_TOKENS.map((t) => (
              <li
                key={t.token}
                className="flex items-center justify-between gap-4 border-b border-stroke pb-3 last:border-0 last:pb-0"
              >
                <span className="font-mono text-xs text-accent">{t.token}</span>
                <span className="font-mono text-xs text-muted">{t.value}</span>
                <span className="hidden text-right text-xs text-muted sm:block sm:max-w-[40%]">
                  {t.use}
                </span>
              </li>
            ))}
          </ul>
        </TokenCard>

        <TokenCard>
          <h3 className={sectionSubheadingClassName}>Typography roles</h3>
          <ul className="mt-6 space-y-6">
            {TYPE_TOKENS.map((t) => (
              <li key={t.family} className="border-b border-stroke pb-6 last:border-0 last:pb-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {t.role}
                </p>
                <p
                  className={cn(
                    'mt-2 text-foreground',
                    t.mono ? 'font-mono text-lg' : 'text-xl font-semibold',
                  )}
                  style={t.mono ? undefined : { fontFamily: 'var(--font-sans), system-ui' }}
                >
                  {t.sample}
                </p>
                <p className="mt-1 text-sm text-muted">{t.family}</p>
                <p className="mt-2 font-mono text-[11px] text-muted">{t.specs}</p>
              </li>
            ))}
          </ul>
        </TokenCard>
      </div>

      <TokenCard className="bg-surface/60">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          Component binding (example)
        </p>
        <pre className="mt-4 overflow-x-auto rounded-[8px] border border-stroke bg-background p-4 font-mono text-[12px] leading-relaxed text-muted">
          {`// KPI card — tokens only, no raw values
.kpi-card {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  border: 1px solid var(--color-stroke);
}
.kpi-card__value {
  font: var(--text-display-sm);
  color: var(--color-foreground);
}
.kpi-card__trend--positive {
  color: var(--color-success);
}`}
        </pre>
      </TokenCard>
    </div>
  )
}
