/**
 * Editorial typography — one source of truth for heading / kicker / lead
 * classes. V3 "INK" system: medium-weight grotesk display, wide-tracked
 * mono micro-labels, cyan accent words via `.accent-gradient-text`.
 *
 * Use semantic HTML: one `h1` per page, `h2` for major bands, `h3` for
 * cards and step titles.
 */

/** Accent mono kicker above an `h2` (block; includes bottom margin). */
export const sectionEyebrowAccentClassName =
  'mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-accent'

/** Muted mono kicker with block spacing. */
export const sectionEyebrowMutedBlockClassName =
  'mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted'

/** Foreground mono kicker with block spacing. */
export const sectionEyebrowForegroundBlockClassName =
  'mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground'

/** Mono label without bottom margin. */
export const sectionEyebrowMonoClassName =
  'font-mono text-[10px] uppercase tracking-[0.3em]'

/** Spacer only when colour is custom. */
export const sectionEyebrowToTitleSpacingClassName = 'mb-6'

/** `h2` — primary section title (home strips + inner pages). */
export const sectionHeadingClassName =
  'display-tight text-3xl font-medium leading-[1.08] text-foreground sm:text-4xl lg:text-5xl'

/** `h1` — subpage masthead (with `.page-header-headline` rules in globals). */
export const pageHeadingClassName =
  'page-header-headline display-tight text-5xl font-medium text-foreground sm:text-6xl lg:text-7xl xl:text-[84px]'

/** Inline mono accent mark (`/ 01`, PageHeader kicker). */
export const monoMarkAccentClassName =
  'font-mono text-[10px] uppercase tracking-[0.3em] text-accent'

/** Accent kicker in PageHeader top row (no `mb`; sits beside meta). */
export const pageHeaderKickerAccentClassName = monoMarkAccentClassName

/** Right meta label in PageHeader top row. */
export const pageHeaderMetaClassName =
  'font-mono text-[10px] uppercase tracking-[0.25em] text-muted'

/** Intro paragraph directly under page `h1`. */
export const pageIntroClassName =
  'mt-8 max-w-2xl text-base leading-[1.75] text-muted lg:text-lg'

/** `h1` — home hero stack (V3 hero builds its own lockup; kept for compat). */
export const heroHeadingClassName =
  'hero-title-tight flex max-w-[1320px] flex-col gap-0 text-[52px] font-medium text-foreground sm:text-[clamp(60px,9vw,140px)]'

/** Hero supporting paragraph under `h1`. */
export const heroIntroClassName =
  'mt-8 max-w-[48ch] text-balance text-[15px] font-normal leading-[1.7] text-muted sm:text-base lg:text-[17px]'

/** `h2` — closing CTA masthead. */
export const footerCtaHeadingClassName =
  'display-mega flex max-w-5xl flex-col gap-[0.02em] pb-[0.1em] text-[40px] font-medium text-foreground sm:text-[clamp(52px,8vw,116px)]'

/** Lead line under section eyebrow (`<p>`, not a heading). */
export const sectionLeadClassName =
  'display-tight text-xl font-medium leading-[1.3] text-foreground sm:text-2xl lg:text-[28px]'

/** `h3` — case study steps, decisions, project / work cards. */
export const sectionSubheadingClassName =
  'display-tight text-xl font-medium leading-tight text-foreground sm:text-2xl lg:text-3xl'

/** `h3` — principle rows on About (grid column span on the heading). */
export const sectionPrincipleTitleClassName =
  'display-tight col-span-10 text-2xl font-medium sm:col-span-5 sm:text-3xl lg:text-[34px]'

/** `h3` — home differentiator tiles. */
export const sectionFeatureTitleClassName =
  'display-tight text-3xl font-medium text-foreground sm:text-4xl lg:text-[38px]'

/** `h3` — home expertise strip row titles. */
export const sectionTileTitleClassName =
  'display-tight text-3xl font-medium text-foreground sm:text-5xl lg:text-6xl'

/** Blockquote body — toolchain band. */
export const sectionBlockquoteClassName =
  'display-tight text-2xl font-medium leading-[1.25] text-foreground sm:text-3xl lg:text-4xl'

/** Large statement line inside a blockquote (workflow page). */
export const sectionStatementClassName =
  'display-tight text-2xl font-medium leading-[1.2] text-foreground sm:text-3xl lg:text-4xl'

/** Step / list index prefix (`/01`). */
export const monoIndexAccentClassName =
  'font-mono text-[10px] uppercase tracking-[0.25em] text-accent'

/** Step index with top padding when aligned to multi-line titles. */
export const monoIndexAccentPaddedClassName =
  'col-span-2 pt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent sm:col-span-1'

/** Step index — expertise strip rows (extra top padding). */
export const monoIndexAccentExpertiseClassName =
  'col-span-2 pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent sm:col-span-1'

/** Step index in grid rows without top padding (decision lists). */
export const monoIndexGridClassName =
  'col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent sm:col-span-1'

/** Contact masthead aside — availability line. */
export const contactAvailabilityClassName =
  'display-tight text-xl font-medium leading-snug text-foreground sm:text-2xl'

/** Primary mail link styling in Contact aside. */
export const contactEmailLinkClassName =
  'block break-all display-tight text-xl font-medium leading-tight text-foreground transition-colors hover:text-accent sm:text-2xl'

/** Muted mono kicker without bottom margin (side columns, meta). */
export const monoKickerMutedClassName =
  'font-mono text-[10px] uppercase tracking-[0.3em] text-muted'

/** Muted mono meta line (periods, captions). */
export const monoMetaMutedClassName =
  'font-mono text-[10px] uppercase tracking-[0.25em] text-muted'

/** “Back to work” / “All work” link above case studies. */
export const navBackLinkClassName =
  'inline-flex items-center gap-2 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground'

/** “Next case study” / related work link (no vertical padding). */
export const navRelatedLinkClassName =
  'inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground'

/** Marquee item caption (decorative; not a heading). */
export const marqueeItemClassName =
  'display-tight flex items-center gap-6 px-4 text-xl font-medium text-foreground sm:gap-8 sm:px-6 sm:text-2xl lg:text-3xl'
