import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import ArrowLink from '@/components/ui/ArrowLink'
import CaseStudyMeta from '@/components/work/CaseStudyMeta'
import ImagePlaceholder from '@/components/work/ImagePlaceholder'
import FooterCTA from '@/components/home/FooterCTA'

export const metadata: Metadata = {
  title: 'Optronic — Website Redesign · Milos Dostanic',
  description:
    'Full website redesign and rebuild for Optronic — multilingual EN/DE structure, 9 product pages, SEO content architecture, and Vercel-based delivery.',
}

const META_FIELDS = [
  { label: 'Client', value: 'Optronic' },
  { label: 'Year', value: '2024' },
  { label: 'Role', value: 'Design + Build' },
  { label: 'Domain', value: 'Industrial / Web' },
  { label: 'Tools', value: 'Figma · Next.js · Vercel' },
  { label: 'Deliverable', value: 'Full redesign + build' },
]

const CHALLENGES = [
  'A coherent EN/DE multilingual architecture with consistent navigation and SEO structure',
  '9 product categories needing dedicated pages with appropriate technical depth',
  'Hosted manuals and firmware previously scattered across third-party links',
  'A scalable content model the client team could maintain without a developer',
  'A live preview workflow allowing real-time review and annotation rather than static PDFs',
]

const DECISIONS = [
  {
    title: 'Multilingual-first navigation',
    body: 'Designed from scratch with EN/DE parity as a constraint — consistent URL patterns, per-language meta, and a language toggle that does not disrupt the user\'s product context.',
  },
  {
    title: 'Product discovery, not just listing',
    body: 'IA structured for both users who know the product they want and users finding the right product by application — measurement type, precision range, or use case.',
  },
  {
    title: 'Hosted downloads as a first-class feature',
    body: 'Manuals and firmware brought into the product page structure directly — findable in context, versioned, consistently formatted.',
  },
  {
    title: 'SEO-friendly content structure',
    body: 'Each product page designed with proper heading hierarchy and structured metadata — supporting product-specific search intent, not generic brand SEO.',
  },
]

const OUTCOMES = [
  'Shipped to production with full EN/DE structure and all 9 product pages',
  'Content-managed structure — routine updates without developer involvement',
  'Live preview + annotation workflow reduced design-to-sign-off round-trip time',
  'Component architecture built around maintainability, not bespoke layouts',
]

export default function OptronicCaseStudy() {
  return (
    <main>
      <div className="border-b border-stroke pt-16">
        <Container size="wide">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span> Back to work
          </Link>
        </Container>
      </div>

      <PageHeader
        eyebrow="Case Study / Web & Digital"
        title={
          <>
            Optronic —
            <br />
            Website
            <br />
            <span className="accent-gradient-text">Redesign.</span>
          </>
        }
        intro={
          <>
            Complete redesign and rebuild of the Optronic website — from information
            architecture and multilingual structure to implementation and live delivery
            via Vercel.
          </>
        }
        topRightLabel="2024"
      />

      {/* Cover + meta */}
      <Section padding="sm">
        <Container size="wide">
          <CaseStudyMeta fields={META_FIELDS} className="mb-12" />
          <ImagePlaceholder
            label="Optronic — Website Hero"
            aspectClass="aspect-[16/8]"
          />
        </Container>
      </Section>

      {/* Context */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Project context
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="display-tight text-xl font-medium leading-[1.35] text-foreground sm:text-2xl lg:text-[27px]">
                Optronic is an industrial optics manufacturer offering precision
                measurement products across European markets. Their existing site had
                grown organically — inconsistent content, difficult product discovery,
                no coherent multilingual structure.
              </p>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                The project was a ground-up redesign and rebuild — not a reskin, but a
                structural rethink of how the company presents products, communicates
                technical specifications, and supports customers finding the right
                product.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge */}
      <Section padding="lg">
        <Container size="wide">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                The challenge
              </p>
              <h2 className="display-tight text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                Structural,
                <br />
                <span className="accent-gradient-text">not cosmetic.</span>
              </h2>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6 lg:pt-2">
              {CHALLENGES.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-5 border-b border-stroke py-5 first:border-t"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
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

      {/* Key decisions */}
      <Section padding="lg" className="bg-surface/40">
        <Container size="wide">
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                IA & UX decisions
              </p>
              <h2 className="display-tight text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                Four calls
                <br />
                that shaped
                <br />
                the site.
              </h2>
            </div>
          </div>

          <ul className="border-t border-stroke">
            {DECISIONS.map((d, idx) => (
              <li
                key={d.title}
                className="group grid grid-cols-12 gap-4 border-b border-stroke py-10 lg:gap-12 lg:py-14"
              >
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:col-span-1">
                  /{String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="display-tight col-span-10 text-xl font-semibold leading-tight text-foreground sm:col-span-5 sm:text-2xl lg:text-3xl">
                  {d.title}
                </h3>
                <p className="col-span-12 text-base leading-[1.7] text-muted sm:col-span-6 lg:text-lg">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Outcome */}
      <Section padding="lg">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Outcome
              </p>
              <h2 className="display-tight text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
                Shipped.
                <br />
                <span className="accent-gradient-text">Maintained.</span>
              </h2>
              <p className="mt-8 text-base leading-[1.7] text-muted lg:text-lg">
                Live with full multilingual structure, all 9 product pages, download
                hosting, and a component architecture the client team can maintain
                without developer involvement.
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-6 lg:col-start-7 lg:pt-2">
              {OUTCOMES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-stroke pb-5"
                >
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-base leading-[1.6] text-foreground lg:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section padding="sm" className="bg-surface/40">
        <Container size="wide">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
            >
              <span aria-hidden="true">←</span> All work
            </Link>
            <ArrowLink
              href="/work/ai-design-system-workflow"
              className="text-foreground hover:text-accent"
            >
              Next: AI Design System Workflow
            </ArrowLink>
          </div>
        </Container>
      </Section>

      <FooterCTA />
    </main>
  )
}
