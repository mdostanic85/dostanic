import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ArrowLink from '@/components/ui/ArrowLink'
import { cn } from '@/lib/utils'
import { PROJECTS } from '@/lib/data'
import ProjectCover from '@/components/work/ProjectCover'
import {
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'
import CaseStudyTileLink from '@/components/work/CaseStudyTileLink'
import { hasCaseStudyPage } from '@/lib/caseStudyRoutes'

const DEFAULTS = {
  eyebrow: 'Best Cases / Selected Work',
  titleLine1: 'The work,',
  titleAccentLine: 'not the pitch.',
  viewAllLabel: 'View all work',
} as const

/** Homepage featured row — includes HealthCare CRM case study. */
const HOMEPAGE_FEATURED_SLUGS = [
  'devrev',
  'originchains',
  'healthcare-crm',
  'soundscope',
] as const

type SelectedWorkProps = {
  eyebrow?: string
  titleLine1?: string
  titleAccentLine?: string
  viewAllLabel?: string
}

export default function SelectedWork({
  eyebrow,
  titleLine1,
  titleAccentLine,
  viewAllLabel,
}: SelectedWorkProps = {}) {
  const cases = HOMEPAGE_FEATURED_SLUGS.map((slug) =>
    PROJECTS.find((p) => p.slug === slug),
  ).filter((p): p is (typeof PROJECTS)[number] => Boolean(p))

  return (
    <Section id="work" padding="lg">
      <Container size="wide">
        <div className="mb-16 flex flex-col gap-8 sm:mb-20 sm:flex-row sm:items-end sm:justify-between lg:mb-24">
          <div>
            <p className={sectionEyebrowAccentClassName}>
              {eyebrow ?? DEFAULTS.eyebrow}
            </p>
            <h2 className={sectionHeadingClassName}>
              {titleLine1 ?? DEFAULTS.titleLine1}
              <br />
              <span className="text-accent block w-fit">
                {titleAccentLine ?? DEFAULTS.titleAccentLine}
              </span>
            </h2>
          </div>
          <ArrowLink
            href="/work"
            className="text-foreground hover:text-accent shrink-0 self-start sm:self-end"
          >
            {viewAllLabel ?? DEFAULTS.viewAllLabel}
          </ArrowLink>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-20 lg:gap-x-12 lg:gap-y-28">
          {cases.map((project, idx) => {
            const isOffset = idx % 2 === 1
            const linked = hasCaseStudyPage(project.slug)
            return (
              <article
                key={project.slug}
                className={[
                  'group relative',
                  isOffset ? 'sm:translate-y-20 lg:translate-y-28' : '',
                ].join(' ')}
              >
                <CaseStudyTileLink
                  slug={project.slug}
                  title={project.title}
                  className={cn('block', linked ? 'cursor-pointer' : 'cursor-default')}
                >
                  {/* Top mark row */}
                  <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <span>/ {String(idx + 1).padStart(2, '0')}</span>
                    <span className="flex items-center gap-3">
                      <span>{project.domain}</span>
                      <span aria-hidden="true" className="h-px w-6 bg-stroke" />
                      <span>{project.year || 'Capability'}</span>
                    </span>
                  </div>

                  <ProjectCover
                    project={project}
                    labelClassName="text-xs"
                  />

                  {/* Caption */}
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <h3
                        className={cn(
                          sectionSubheadingClassName,
                          'transition-colors duration-200 group-hover:text-accent',
                        )}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-[1.7] text-muted">
                        {project.discipline}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke text-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-foreground"
                    >
                      →
                    </span>
                  </div>
                </CaseStudyTileLink>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
