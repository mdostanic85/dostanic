import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import FooterCTA from '@/components/home/FooterCTA'
import { cn } from '@/lib/utils'
import {
  monoIndexAccentClassName,
  monoIndexAccentPaddedClassName,
  navBackLinkClassName,
  navRelatedLinkClassName,
  sectionEyebrowAccentClassName,
  sectionHeadingClassName,
  sectionStatementClassName,
  sectionSubheadingClassName,
} from '@/lib/headings'
import { titleWithAccentGradient } from '@/lib/titleWithAccentGradient'

export const metadata: Metadata = {
  title: 'AI-Connected Design System Workflow — Milos Dostanic',
  description:
    'A documented workflow connecting Figma design systems, token architecture, AI-assisted prototyping, and engineering delivery — reducing the gap between design intent and production output.',
}

const PROBLEMS = [
  'Tokens defined in Figma with no corresponding CSS variables — engineers re-create values from screenshots',
  'Components that look consistent in Figma but have no agreed API — implementation diverges across the codebase',
  'Designs assuming Figma-perfect rendering, never tested with real data, edge cases, or viewport behaviour',
  'Feedback arriving after production deploy, when changing it is expensive',
  'Design systems shipping without governance — forked, ignored, or silently abandoned within a year',
]

const STEPS = [
  {
    number: '01',
    title: 'Token architecture as the foundation',
    description:
      'Before any screens are opened, the token layer is established: primitive (raw values), semantic (role-based), component (context-specific). In Figma, these map to variables. In code, to CSS custom properties. The parity is explicit and version-controlled.',
    tools: ['Figma Variables', 'CSS custom properties', 'Style Dictionary'],
  },
  {
    number: '02',
    title: 'Components with engineering-ready APIs',
    description:
      'Components are designed with their code API in mind — variant props, states, responsive behaviour, edge cases — documented in the Figma component rather than left to engineering to infer. Documentation is written for the team that inherits it.',
    tools: ['Figma', 'Storybook', 'Code Connect'],
  },
  {
    number: '03',
    title: 'AI-assisted prototyping when Figma is not enough',
    description:
      'When an interaction, data-heavy view, or responsive layout cannot be validated in Figma, I prototype it in code with Cursor and Claude. The only way to confirm a design works with real data, real viewport behaviour, real edge cases.',
    tools: ['Cursor', 'Claude', 'Next.js', 'Tailwind'],
  },
  {
    number: '04',
    title: 'Design-to-code parity at every gate',
    description:
      'At feature branch, staging, and production milestones I compare the implementation against design intent in Vercel preview. Typography, spacing, hover states, breakpoints, animation timing — annotated and fed back as specific engineering tasks.',
    tools: ['Vercel Previews', 'GitHub', 'BugHerd', 'Ruttl'],
  },
  {
    number: '05',
    title: 'Rapid variant and copy exploration with AI',
    description:
      'Claude and ChatGPT for structured content exploration — copy direction, error message review, onboarding structure. Figma Make for rapid visual variant generation. AI compresses exploration; senior judgment evaluates and selects.',
    tools: ['Claude', 'ChatGPT', 'Figma Make'],
  },
  {
    number: '06',
    title: 'Governance — components alone are not a system',
    description:
      'A design system without a contribution model, deprecation policy, and versioning strategy will be forked and abandoned within a year. Governance is designed alongside the components, not after.',
    tools: ['Notion', 'GitHub', 'Linear'],
  },
]

export default function AIWorkflowPage() {
  return (
    <main>
      <div className="pt-16">
        <Container size="wide">
          <Link
            href="/work"
            className={navBackLinkClassName}
          >
            <span aria-hidden="true">←</span> Back to work
          </Link>
        </Container>
      </div>

      <PageHeader
        eyebrow="Capability / Workflow"
        title={
          <>
            AI-Connected
            <br />
            Design System
            <br />
            <span className="accent-gradient-text">Workflow.</span>
          </>
        }
        intro={
          <>
            Not a client project. A documented way of working — connecting Figma design
            systems, token architecture, AI-assisted prototyping, and engineering
            delivery to reduce the gap between design intent and what actually ships.
          </>
        }
        topRightLabel="Capability"
      />

      {/* The problem */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                The problem
              </p>
              <h2 className={sectionHeadingClassName}>
                Predictable
                <br />
                failure modes
                <br />
                <span className="text-accent">on every project.</span>
              </h2>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                AI does not fix these automatically. But used correctly, in the right
                order, it compresses the time it takes to close them.
              </p>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6 lg:pt-2">
              {PROBLEMS.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-5 py-5"
                >
                  <span className={monoIndexAccentClassName}>
                    /{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base leading-[1.65] text-muted lg:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* The workflow */}
      <Section padding="lg">
        <Container size="wide">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className={sectionEyebrowAccentClassName}>
                The workflow
              </p>
              <h2 className={sectionHeadingClassName}>
                Six steps.
                <br />
                <span className="text-accent block w-fit">In order.</span>
              </h2>
            </div>
          </div>

          <ul>
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="group relative grid grid-cols-12 gap-4 py-12 lg:gap-12 lg:py-16"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full"
                />
                <span className={monoIndexAccentPaddedClassName}>
                  {step.number}
                </span>
                <div className="col-span-10 sm:col-span-5">
                  <h3 className={sectionSubheadingClassName}>
                    {titleWithAccentGradient(step.title, {
                      leadClassName: 'transition-colors duration-300 group-hover:text-accent',
                    })}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <p className="text-base leading-[1.7] text-muted lg:text-lg">
                    {step.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.tools.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-surface px-3 py-1 font-mono text-[12px] uppercase tracking-[0.18em] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Pull quote */}
      <Section padding="md" className="bg-surface/40">
        <Container size="wide">
          <blockquote className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <p className={cn(sectionStatementClassName, 'lg:col-span-9')}>
              &ldquo;AI compresses the cost of exploration.{' '}
              <span className="text-accent">
                Senior judgment is still the thing that determines what gets built.
              </span>
              &rdquo;
            </p>
            <cite className="lg:col-span-3 lg:self-end font-mono text-[11px] not-italic uppercase tracking-[0.2em] text-muted">
              — Milos Dostanic
            </cite>
          </blockquote>
        </Container>
      </Section>

      <Section padding="sm">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className={navRelatedLinkClassName}
            >
              <span aria-hidden="true">←</span> All work
            </Link>
            <ArrowLink href="/expertise" className="text-foreground hover:text-accent">
              See full expertise
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
