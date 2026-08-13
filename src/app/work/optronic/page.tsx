import type { Metadata } from 'next'
import Image from 'next/image'
import CaseStudyContext from '@/components/work/case-study/CaseStudyContext'
import CaseStudyShell, {
  CaseStudySection,
} from '@/components/work/case-study/CaseStudyShell'
import DecisionBlock, {
  DecisionSection,
  type Decision,
} from '@/components/work/case-study/DecisionBlock'
import StructureCompare from '@/components/work/case-study/StructureCompare'
import {
  CaseComplication,
  CaseOutcome,
  CaseProblem,
  CaseReflection,
  CaseRole,
} from '@/components/work/case-study/CaseNarrative'
import ArrowLink from '@/components/ui/ArrowLink'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'Optronic — Technical Product Platform',
  description:
    'How a complicated industrial catalogue became a coherent bilingual system: two entry paths into one product set, one template for nine families, and technical documents modelled as product data.',
  alternates: { canonical: '/work/optronic' },
}

const nav = getCaseStudyNav('optronic')

const META = [
  { label: 'Type', value: 'Client work · Designed and built' },
  { label: 'Year', value: '2024' },
  { label: 'Role', value: 'Product design + implementation' },
  { label: 'Domain', value: 'Swiss industrial manufacturing' },
  { label: 'Scope', value: 'IA · templates · component system · build' },
  { label: 'Output', value: 'Live bilingual platform' },
]

function Screen({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string
  alt: string
  caption: string
  priority?: boolean
}) {
  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden border border-stroke bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-top"
          priority={priority}
        />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {caption}
      </figcaption>
    </figure>
  )
}

const DECISIONS: Decision[] = [
  {
    title: 'Two doors into one catalogue',
    tension:
      'Two kinds of visitor arrive at an industrial catalogue and they have almost nothing in common. An engineer replacing a part knows the exact designation and wants the page in one step. A buyer specifying a new machine knows only the application — a size, a tolerance, a position in a production line — and cannot name a single product. A navigation optimised for either one quietly fails the other.',
    options: [
      {
        label: 'Organise strictly by product family',
        note: 'Works for the engineer who already knows the name, and leaves the buyer guessing which of nine families their problem belongs to.',
      },
      {
        label: 'Organise strictly by application',
        note: 'Inverts the failure — now the engineer browses categories to reach a part they could have typed.',
      },
      {
        label: 'Direct access and application-led discovery, both resolving to the same product pages',
        chosen: true,
      },
    ],
    reasoning:
      'The two journeys do not need two catalogues; they need two doors into one. Keeping a single canonical page per product means neither path can go stale relative to the other, because there is only one page to update.',
    tradeoff:
      'Every new product has to be reachable both ways. That is an editorial rule the client team has to keep holding, not something the layout enforces on its own.',
    enabled:
      'Nine product families stayed navigable without a mega-menu: the families collapse into one carousel and a Products menu, so the homepage stays short without hiding depth.',
    visual: (
      <Screen
        src="/work/optronic/cover.webp"
        alt="Optronic homepage with product carousel and primary navigation"
        caption="Homepage — nine families, one short page"
        priority
      />
    ),
  },
  {
    title: 'One product template for all nine families',
    tension:
      'The nine families carry genuinely different technical content. Each one could justify its own layout — and nine layouts means nine things to maintain, nine ways for the site to contradict itself, and a platform that feels like nine small websites sharing a logo.',
    options: [
      {
        label: 'A bespoke layout per family',
        note: 'Nine templates to design, build, and maintain, and no consistency for a visitor comparing across families.',
      },
      {
        label: 'A lowest-common-denominator page that fits everything',
        note: 'Strips out exactly the technical depth that makes an industrial product page worth visiting.',
      },
      { label: 'One template with optional blocks each family switches on', chosen: true },
    ],
    reasoning:
      'The families differ in which sections they need, not in how a product should be read. Specification, gallery, documents, and the route back to the category behave the same everywhere; the optional blocks absorb the variation.',
    tradeoff:
      'A family with genuinely unusual content has to be expressed in the template’s vocabulary instead of getting bespoke treatment.',
    enabled:
      'New products slot in without new design or new code, which is what allows routine catalogue updates to happen without a developer.',
    visual: (
      <Screen
        src="/work/optronic/product-detail.webp"
        alt="Optronic product detail page for the LVMC digital light screen"
        caption="Product detail — the same template every family fills"
      />
    ),
  },
  {
    title: 'Manuals and firmware are product data, not a file dump',
    tension:
      'The technical documents were simultaneously the most valuable content on the site and the hardest to reach — scattered across third-party links. A downloads page is the obvious fix, and it recreates the original problem in a tidier form: you can only find a file if you already know what it is called.',
    options: [
      {
        label: 'One downloads page listing every file',
        note: 'Findable only by someone who already knows the filename and version — which is not the person who needs it.',
      },
      {
        label: 'Documents on product pages only',
        note: 'Breaks the most common return visit, which starts from “I need the current firmware”, not from a product.',
      },
      {
        label: 'Documents modelled as product data, surfaced on the product and in one searchable library',
        chosen: true,
      },
    ],
    reasoning:
      'Attaching a document to the product it belongs to means it inherits that product’s structure — family, designation, language — so one record can be reached from either direction without being maintained in two places.',
    tradeoff:
      'Someone has to keep versions accurate. The structure does not prevent a stale document; it makes a stale document more visible.',
    enabled:
      'A visitor already on a product page finds the manual in context, and a returning customer who only wants firmware searches the library — both reading the same records.',
    visual: (
      <Screen
        src="/work/optronic/downloads.webp"
        alt="Optronic downloads library with searchable technical documentation"
        caption="Downloads library — the same records, entered from the other direction"
      />
    ),
  },
  {
    title: 'Bilingual as one system, not two websites',
    tension:
      'EN and DE had to reach parity across navigation, URLs, and metadata. The pragmatic route is a duplicated German site: faster to launch, and guaranteed to drift the first time someone updates one language and not the other.',
    options: [
      {
        label: 'A parallel DE site',
        note: 'Every future change becomes two changes. Drift is not a risk, it is a schedule.',
      },
      {
        label: 'Machine translation layered over one site',
        note: 'Technical terminology is precisely where this fails, and the entire catalogue is technical terminology.',
      },
      {
        label: 'One route and component system with language as a parameter',
        chosen: true,
      },
    ],
    reasoning:
      'If both languages are the same system, a structural change lands in both by construction rather than by discipline. The language toggle preserves position for the same reason — someone comparing terminology switches mid-page, not from the homepage.',
    tradeoff:
      'Every component has to be language-aware from the first commit. No shortcuts with hardcoded strings, including in the parts nobody expects to translate.',
    enabled:
      'Full EN/DE structure across nine families with one system to maintain, and per-product-line metadata that serves real search intent in both languages instead of generic brand keywords.',
    visual: (
      <StructureCompare
        before={{
          label: 'Two sites',
          caption:
            'The route not taken. Each language owns its own pages, so parity depends on somebody remembering.',
          nodes: [
            { label: '/en/*  — pages, nav, metadata' },
            { label: '/de/*  — the same pages again', problem: 'duplicated' },
            { label: 'Documents maintained per language', problem: 'duplicated' },
            { label: 'Parity depends on memory', problem: 'drifts' },
          ],
        }}
        after={{
          label: 'One system',
          caption:
            'Language is a parameter on one route tree. Structure exists once; only content is localised.',
          nodes: [
            {
              label: 'One route tree',
              children: ['locale as parameter', 'context-preserving toggle'],
            },
            {
              label: 'One component set',
              children: ['language-aware from the start'],
            },
            { label: 'One document record', children: ['localised fields'] },
          ],
        }}
        consequence="Adding a product family after launch meant adding it once. Both locales inherited the structure, and the client team could not accidentally ship an English-only page."
      />
    ),
  },
]

export default function OptronicCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Designed and built"
      title={
        <>
          Optronic
          <br />
          <span className="accent-gradient-text">a technical product platform.</span>
        </>
      }
      intro={
        <>
          A Swiss industrial manufacturer’s catalogue — nine product families,
          two languages, and a library of manuals and firmware — restructured
          into one coherent system. I designed it and I built it.
        </>
      }
      topRightLabel="2024"
      previous={nav.previous}
      next={nav.next}
      links={[{ label: 'View live site', href: 'https://optronic-v2.vercel.app' }]}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="An industrial catalogue is a database that has to read like a website."
          body="Optronic makes optical sensing equipment for industrial production lines. The technical information — specifications, manuals, firmware — is the reason customers visit, and it was spread across an ageing site and third-party links. The work was to turn a complicated technical catalogue into a system that stays coherent as it grows, in two languages, and that the client team can run themselves."
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseRole
          summary="I structured it, designed it, and implemented it."
          points={[
            'Owned the information architecture: how nine product families, their applications, and their technical documents relate to each other.',
            'Designed the page templates and the component set — one product template, one document model, one navigation system across both languages.',
            'Built the site in React myself, as reusable layout and typography rules rather than one-off pages.',
            'Ran stakeholder review on working preview deployments instead of static PDFs, so feedback landed against real behaviour.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseProblem
          lead="The complexity was in the catalogue, not in the visual design."
          points={[
            'Nine product families, each needing a different depth of technical detail, all needing to feel like one manufacturer.',
            'EN/DE parity required across navigation, URLs, and metadata — not just translated body copy.',
            'Manuals, datasheets, and firmware scattered across third-party links, versioned inconsistently.',
            'Two incompatible ways of looking for a product: by designation, and by application.',
            'The structure had to absorb new products and new families without a redesign each time.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseComplication
          statement="The real constraint was not launch. It was the year after launch."
          body="The client team needed to add products, publish a new firmware revision, and correct a specification without a developer — in both languages. That single requirement invalidated the fastest version of almost every decision below. No bespoke pages, because bespoke pages need a developer. No duplicated German site, because parity would depend on somebody remembering. No downloads folder, because an unstructured file list decays the moment versions change. The architecture had to be something a non-technical team could operate correctly by default."
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <DecisionSection
          title="Four decisions that made the catalogue a system."
          intro="Each decision was shaped by the same constraint: the client team has to be able to run this afterwards without breaking it."
        >
          {DECISIONS.map((decision, index) => (
            <DecisionBlock key={decision.title} decision={decision} index={index} />
          ))}
        </DecisionSection>
      </CaseStudySection>

      <CaseStudySection>
        <CaseOutcome
          points={[
            'Shipped and live, with full EN/DE structure across nine product families.',
            'Technical documents integrated into the products that need them and searchable in one library, replacing scattered third-party links.',
            'A component architecture the client team extends for routine content without a developer.',
            'Stakeholder sign-off ran against working previews rather than static documents, so each round reviewed real behaviour.',
          ]}
          aside={
            <>
              <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-accent">
                Verifiable
              </p>
              <p className="mt-4 text-base leading-[1.75] text-muted sm:text-[18px]">
                The site is public, so this case study can be checked directly
                rather than taken on trust. Traffic and commercial results sit
                with the client and are not claimed here.
              </p>
              <ArrowLink
                href="https://optronic-v2.vercel.app"
                className="mt-6 text-foreground hover:text-accent"
              >
                Open the live site
              </ArrowLink>
            </>
          }
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseReflection
          items={[
            {
              label: 'What I would improve',
              body: 'Application-led discovery is currently a navigation path. It would be stronger as a real parametric filter — dimension, range, mounting — for buyers who cannot name a family.',
            },
            {
              label: 'What it taught me',
              body: 'Designing and building the same thing changes the decisions. Several of these trade-offs only became visible once I had to implement them.',
            },
            {
              label: 'What I would test next',
              body: 'Whether returning customers reach firmware faster through the library or through the product page — the two doors should not be equally busy.',
            },
          ]}
        />
      </CaseStudySection>
    </CaseStudyShell>
  )
}
