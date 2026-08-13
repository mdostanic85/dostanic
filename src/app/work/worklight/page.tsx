import type { Metadata } from 'next'
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
import SignalPipeline from '@/components/work/worklight/SignalPipeline'
import TaskAnatomy from '@/components/work/worklight/TaskAnatomy'
import ArrowLink from '@/components/ui/ArrowLink'
import { getCaseStudyNav } from '@/lib/caseStudyRoutes'

export const metadata: Metadata = {
  title: 'WorkLight — Daily Work Operator',
  description:
    'A product-design and product-builder case study: how WorkLight decides what matters to one person, what it does when sources disagree, and why the ranking happens before any model writes a word.',
  alternates: { canonical: '/work/worklight' },
}

const nav = getCaseStudyNav('worklight')

const META = [
  { label: 'Type', value: 'Personal product' },
  { label: 'Status', value: 'Working product · Active development' },
  { label: 'Role', value: 'Product designer and builder' },
  { label: 'Scope', value: 'Definition · UX · system behaviour · code' },
  { label: 'Stack', value: 'Next.js · PostgreSQL · Drizzle · Inngest' },
  { label: 'Output', value: 'Running product · public repository' },
]

const DECISIONS: Decision[] = [
  {
    title: 'Rank the work before any model writes a word',
    tension:
      'The obvious build is to gather everything, hand it to a model, and ask what matters today. It demos beautifully. It also makes the priority order a model output — unstable between runs on identical input, impossible to explain, and confidently wrong when a source came back empty. In something you open every morning, “why is this first?” cannot be answered with “the model said so”.',
    options: [
      {
        label: 'Let the model rank and explain in one pass',
        note: 'The same inputs produce a different order on a second run, and no part of the order is auditable.',
      },
      {
        label: 'Pure rules, no model at all',
        note: 'Rules can rank perfectly well and produce a brief nobody wants to read. The explanation is most of the value.',
      },
      {
        label: 'Deterministic ranking first; the model explains an order it did not choose',
        chosen: true,
      },
    ],
    reasoning:
      'Split the two jobs by what each is actually good at. Scoring is arithmetic — testable, replayable, debuggable. Prose is what a language model is for. Keeping the model downstream of the decision means it can be wrong about wording without being wrong about priority.',
    tradeoff:
      'The ranking logic is hand-maintained and cannot infer nuance a model might have caught. When the ranking is wrong, it is wrong reproducibly — which is easier to fix and more visibly rigid.',
    enabled:
      'Every position in the list traces back to its inputs, the same day’s data always yields the same order, and “How we decide” could become a real surface in the product instead of a marketing claim.',
    visual: <SignalPipeline />,
  },
  {
    title: 'Surface conflicts instead of resolving them quietly',
    tension:
      'Sources disagree constantly. A meeting says a piece of work was dropped while its ticket is still open. Two people each believe they own it. A calendar invite implies a deadline the ticket never mentions. A system that silently picks a winner is easier to build — and it teaches you to distrust the whole product, because the one time it picks wrong you have no way of knowing it did.',
    options: [
      {
        label: 'Trust a fixed source priority order',
        note: 'Authority varies by field, not by source. A ticket is authoritative about status; a meeting is authoritative about intent.',
      },
      {
        label: 'Take the most recent value',
        note: 'Recency is not authority. A routine ticket edit can post-date the meeting that cancelled the work entirely.',
      },
      { label: 'Make the conflict a first-class state', chosen: true },
    ],
    reasoning:
      'Ambiguity is real information about the data, and hiding it is a small lie told with total confidence. An item sitting in Unclear tells you something true. An item silently promoted into your day tells you something possibly false, and tells it convincingly.',
    tradeoff:
      'The user does resolution work the system could have guessed at, and Unclear accumulates if it is ignored. The product is slower in exchange for being honest.',
    enabled:
      'A daily plan can be truthful about its own gaps, and a status the user set by hand is never overwritten by a later ingest.',
  },
  {
    title: 'Read-only connectors by default',
    tension:
      'A daily operator that cannot act on your tools feels half-finished. Writing back — closing the ticket, sending the reply — is the natural next feature and the demo everybody asks for. It is also the exact point where a wrong inference stops being a bad suggestion and becomes a change to somebody else’s system.',
    options: [
      {
        label: 'Bidirectional sync with every connector',
        note: 'An incorrect merge or a misranked item becomes an irreversible action in a tool other people depend on.',
      },
      {
        label: 'Write, but offer undo',
        note: 'Undo is a promise the external tool has to keep, and most of them cannot keep it.',
      },
      {
        label: 'Read-only ingest; any write is separate and explicitly confirmed',
        chosen: true,
      },
    ],
    reasoning:
      'The product’s value is deciding, not doing. Ingestion can be wrong and stay recoverable; a write cannot. Holding connectors read-only means the worst available failure is a bad suggestion I can ignore.',
    tradeoff:
      'Genuine friction: you still close your own tickets. The product does not get to claim it saves that step, and it never will by default.',
    enabled:
      'New connectors can be added without a per-source risk review, and the privacy position is structural rather than promised — a local-first product that only ever reads.',
  },
  {
    title: 'One task model, with evidence attached to every claim',
    tension:
      'Ten sources produce ten different shapes of thing. The easy path is a view per source — Jira here, mail there — which produces a launcher, not a plan, and leaves the merging to the person who already could not do it. Flattening everything into one list solves that and loses the reason each item exists, and a task list without its reasons decays inside a week.',
    options: [
      {
        label: 'A pane per source',
        note: 'That is a launcher. The user still performs the merge, which was the original problem.',
      },
      {
        label: 'One flat merged list',
        note: 'Loses provenance. A claim you cannot check is a claim you eventually stop believing.',
      },
      { label: 'One task model where every field links to its source evidence', chosen: true },
    ],
    reasoning:
      'A task has to carry why it exists, the single next action, its done criteria, and its ownership — each linked to the immutable source item it came from. Keeping the reason visible is what lets the plan survive a change of context two days later.',
    tradeoff:
      'A heavier data model, and an interface that has to keep evidence one tap away without making every task look like an audit log.',
    enabled:
      'Priority, ownership, and done criteria can each be questioned independently and traced. A failed sync shows up as missing evidence rather than as a list that is quietly shorter than it should be.',
    visual: <TaskAnatomy />,
  },
]

export default function WorkLightCaseStudy() {
  return (
    <CaseStudyShell
      meta={META}
      eyebrow="Case study / Product design and build"
      title={
        <>
          WorkLight
          <br />
          <span className="accent-gradient-text">a daily work operator.</span>
        </>
      }
      intro={
        <>
          Ten tools hold pieces of your work and none of them agree. WorkLight
          decides what deserves attention today, shows why, and stays honest
          about what it does not know. I defined it, designed it, and built it.
        </>
      }
      topRightLabel="2026 · Active"
      previous={nav.previous}
      next={nav.next}
      links={[{ label: 'View repository', href: 'https://github.com/mdostanic85/morning' }]}
    >
      <CaseStudySection alt>
        <CaseStudyContext
          lead="The hard problem is not summarising your work. It is deciding what deserves attention now."
          body="Meetings, mail, tickets, documents, designs, and repositories each hold part of the picture, in different structures, with different levels of authority. Summarising them is a solved and largely useless trick. Deciding between them — and being able to defend the decision — is the actual product. I am building WorkLight as one thing: definition, interaction design, trust model, data model, and implementation evolving together in the same repository."
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseRole
          summary="I own all of it — the product decisions and the code."
          points={[
            'Defined the product: what problem it solves, what it refuses to do, and what has to be true for a daily plan to be trustworthy.',
            'Designed the system behaviour — ranking, confidence, conflict handling, ownership, and sync states — before designing the surfaces that expose it.',
            'Designed the data model for tasks, source items, evidence, people, projects, and conflicts.',
            'Built it: connectors, the decision layer, the interface, and the tests that keep the ranking honest.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseProblem
          lead="Ten sources, different authority, and no agreement about what matters."
          points={[
            'Important work arrives through tools with different structures, owners, and levels of authority — and none of them know about each other.',
            'A generic AI summary sounds equally certain whether the evidence behind it is complete, partial, or contradictory.',
            'Task lists lose the reason, the next action, and the definition of done as soon as context shifts.',
            'One failed integration can make an apparently complete daily plan quietly misleading.',
            'Anything reading across a person’s whole working life has to earn that access rather than assume it.',
          ]}
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseComplication
          statement="Importance is not a property of the item. It is a property of its relationship to you."
          body="This is what broke the first version of the model. The same ticket is urgent for the person who owns it and pure noise for everybody else, and nothing in the source data says which case you are in. So ranking could not be a function of the item — it had to be a function of how the item relates to you: whether you committed to it out loud in a meeting, whether you are named on it, whether it blocks something you own, whether you have touched the files. That moved the hard part of the product away from summarising text and into modelling commitment and ownership, which is a design problem before it is an engineering one."
        />
      </CaseStudySection>

      <CaseStudySection alt>
        <div className="mb-16 max-w-[46ch] lg:mb-20">
          <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.3em] text-accent">
            Information model
          </p>
          <h2 className="display-tight mt-5 text-3xl font-medium sm:text-4xl">
            Ten sources, one view, no soup.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-muted sm:text-base">
            The structural question behind the product: how do meeting notes,
            tickets, mail, calendar, and project knowledge become one useful
            daily view without becoming an inbox with extra steps?
          </p>
        </div>

        <StructureCompare
          before={{
            label: 'A pane per source',
            caption:
              'The route not taken. Everything is present and the person still has to do the merging themselves.',
            nodes: [
              { label: 'Meetings', problem: 'siloed' },
              { label: 'Mail and calendar', problem: 'siloed' },
              { label: 'Tickets and documents', problem: 'siloed' },
              { label: 'Designs and repositories', problem: 'siloed' },
              { label: 'You, doing the merge', problem: 'the actual problem' },
            ],
          }}
          after={{
            label: 'One decision surface',
            caption:
              'Sources feed a single ranked view. The source becomes evidence rather than a destination.',
            nodes: [
              {
                label: 'Today',
                children: ['ranked work', 'why it matters', 'next action'],
              },
              { label: 'Unclear', children: ['conflicts awaiting a person'] },
              { label: 'Projects · Knowledge', children: ['context on demand'] },
              { label: 'How we decide', children: ['the ranking, made inspectable'] },
            ],
          }}
          consequence="Sources stop being places to visit and become evidence behind a claim. That is what keeps the daily view short: an item earns a place by its relationship to you, not by having arrived recently."
        />
      </CaseStudySection>

      <CaseStudySection>
        <DecisionSection
          title="Four decisions that define the product."
          intro="These are the decisions that make WorkLight defensible rather than impressive. Each one costs something real, and the cost is the reason it works."
        >
          {DECISIONS.map((decision, index) => (
            <DecisionBlock key={decision.title} decision={decision} index={index} />
          ))}
        </DecisionSection>
      </CaseStudySection>

      <CaseStudySection alt>
        <CaseOutcome
          points={[
            'A working product, in daily use, that ingests from ten read-only sources and ranks the work before anything is generated.',
            'Every task on the list can show why it exists, its next action, and its done criteria, each traced to an immutable source item.',
            'Conflicts and partial syncs are visible states in the interface rather than silent omissions.',
            'The decision layer is inspectable inside the product itself, so the ranking can be argued with instead of trusted.',
          ]}
          aside={
            <>
              <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-accent">
                Public proof
              </p>
              <p className="mt-4 text-sm leading-[1.75] text-muted sm:text-base">
                This is an active personal product, not a commercial one, and the
                case study describes what exists today rather than a finished
                market outcome. The repository documents the architecture, task
                model, and integration boundaries.
              </p>
              <ArrowLink
                href="https://github.com/mdostanic85/morning"
                className="mt-6 text-foreground hover:text-accent"
              >
                Open WorkLight on GitHub
              </ArrowLink>
            </>
          }
        />
      </CaseStudySection>

      <CaseStudySection>
        <CaseReflection
          items={[
            {
              label: 'What I would improve',
              body: 'Unclear is honest but passive. It needs to ask a better question than “these disagree” — ideally the single question that would resolve the conflict.',
            },
            {
              label: 'What it taught me',
              body: 'Deciding where the model is not allowed to act turned out to be more of the design work than any interface in the product.',
            },
            {
              label: 'What I would test next',
              body: 'Whether people trust the ranking enough to work top-down, or keep scanning the whole list — which would mean the explanation is not doing its job.',
            },
          ]}
        />
      </CaseStudySection>
    </CaseStudyShell>
  )
}
