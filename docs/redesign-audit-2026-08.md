# Portfolio redesign — audit and proposed IA

Source of truth: the repository (`main` @ `fd99464`). The live deployment could not
be fetched from this environment (egress-blocked), so every verdict below is taken
against the committed code that produces the live site.

Positioning target: **Senior Product Designer / Product Builder who takes complex
software from ambiguity to a clear, buildable product.** Signal priority is
*complex product thinking → systems thinking → visual craft → implementation
awareness*. Explicitly **not** visual-only designer, not generalist, not
AI-tools enthusiast, not freelance gallery.

---

## Part 1 — Homepage audit

Current order: `Hero → CaseRows(01) → Capabilities(02) → Differentiators(03) → ExperienceIndex(04) → FooterCTA`

| # | Section | Verdict | Reasoning |
|---|---------|---------|-----------|
| — | **Hero** (`v3/Hero.tsx`) | **SIMPLIFY** | Headline is already right (`I design complex software that ships.`). Two problems: the support paragraph is a four-clause keyword run ("untangling… building… prototyping… staying close"), which the brief forbids; and the base rail (`Currently at Space Inch · Building WorkLight`) is a fifth competing message inside the hero. Three motion systems overlap here — `ParticleField`, `CursorDot`, `Magnetic`. |
| 01 | **Selected work** (`v3/CaseRows.tsx`) | **KEEP layout / REWRITE copy** | Editorial alternating rows are strong and already correctly named. But cards carry only `project.description` (dense) plus a `delivery` stack line in accent mono. Missing the two things the brief requires per card: *what I personally owned* and *one important decision*. Section intro leaks NDA industries (see Part 3). |
| 02 | **Core expertise** (`v3/Capabilities.tsx`) | **REWRITE** | Four tiles, but framed as service lines rather than capabilities. Tile 02 is four sentences. Tile 04 (`Product Builder & AI`) puts AI in the identity slot, directly against the brief. Replace with the four the brief specifies: Product architecture / Complex UX / Systems / Prototype to implementation. |
| 03 | **How I work** (`home/Differentiators.tsx`) | **REMOVE from home → MERGE into About** | Titled "How I work" but is actually four dense claim rows (token architecture, code prototypes, implementation review, governance), each 2–3 sentences. It conceptually duplicates Capabilities, leads with tool names (Cursor, Vercel, Figma), and gives no sense of *sequence*. The brief wants this slot to be a visual, concise spine: Understand → Structure → Decide → Prototype → Ship. The genuinely differentiating claims move to About principles. |
| 04 | **Experience** (`v3/ExperienceIndex.tsx`) | **SIMPLIFY + REWRITE** | Compact and correctly subordinate already — good. Copy leaks NDA industries. Renumber. |
| — | **About / personal note** | **ADD (missing)** | The brief asks for a short human section on the evolution: communication design → web → digital products → complex software → product builder. The homepage currently has no such section; it exists only on `/about`. |
| — | **How I work (process)** | **ADD (missing)** | No process spine anywhere on the homepage. |
| 05 | **Contact** (`home/FooterCTA.tsx`) | **KEEP** | Strong ending — poster headline, email as the primary action, quiet meta rail. Minor copy tune only. |

### Density findings (brief §8)
- Homepage renders **four consecutive card/row grids** (cases → 2×2 tiles → 4 claim rows → 4 experience rows). Grid after grid, exactly what §8 warns against.
- `Differentiators` alone is ~600 words of body copy in one band.
- Every section uses the same `eyebrow → h2 → grid` rhythm, so nothing feels like a bigger moment than anything else.

### Hierarchy findings (brief §9)
- `delivery` metadata renders in **accent colour** on case cards (`text-accent`), giving supporting metadata the same visual weight as the product story. Metadata should recede.
- `TOOLS` array (Figma, Cursor, Claude, ChatGPT, Figma Make…) exists in `lib/data.ts` but is **rendered nowhere** — dead code. Leave unrendered; delete the array.

---

## Part 2 — Case-study audit

### OriginChains (`/work/originchains`) — 6 sections
| Section | Verdict | Reasoning |
|---|---|---|
| Context | **SIMPLIFY** | Good lead line, keep. Body slightly over-long. |
| What I owned (5 bullets) | **SIMPLIFY** | Genuinely strong evidence. Bullet 1 ("Framed the problem *with* product and stakeholders") softens ownership — the brief wants no vague we-language in the role section. |
| Selected screens | **KEEP** | Only two real images exist (`cover.png`, `screen-feed.png`). Keep both. |
| The challenge (5 items) | **MERGE → "The real problem" + "The problem got harder"** | Currently a flat list of five difficulties with no escalation. Split so tension builds. |
| Decisions (4 one-liners) | **REWRITE — the core fix** | This is precisely what brief §4 targets. Each decision is a single sentence with no options, no trade-off, no consequence. "Navigation split by people and organisations" is named in the brief as the example to rebuild: expose the competing contexts (personal identity, company workspace, administration), show before → decision → after → consequence. |
| Outcome | **KEEP** | Already metric-free and verifiable. Good model for the other cases. |
| Reflection | **ADD (missing)** | |

### Optronic (`/work/optronic`) — 6 sections
| Section | Verdict | Reasoning |
|---|---|---|
| Context | **KEEP** | |
| `ProblemSolution` (4 problems vs 4 solutions) | **REWRITE** | A two-column delivery matrix. Solves the reporting instinct, not the reasoning. |
| `UXProcessFlow` "From IA to production" (5 steps) | **REMOVE** | Generic delivery ladder (audited → mapped → designed → built → deployed). This is the "project delivery report" framing the brief rejects. |
| Selected screens (4 real images) | **KEEP — strongest asset here** | Each screen already carries a `decision` line. Genuinely good raw material; promote these into the decision narrative rather than a gallery. |
| `CaseStudySystemNote` | **MERGE into decisions** | Two orphan paragraphs about shared components and SEO. |
| Outcome | **KEEP** | Metric-free. |

Note: the current Optronic page contains **no AI/Cursor/Claude mentions at all** (verified by grep and by `git log -S"AI-assisted"` — never present in this repo). Brief §5's "reduce AI emphasis" is therefore already satisfied; the actionable half is the structural rewrite. Nothing AI-flavoured gets added.

### WorkLight (`/work/worklight`) — 6 sections
| Section | Verdict | Reasoning |
|---|---|---|
| Context | **KEEP** | |
| `ProblemSolution` | **REWRITE** | Same two-column matrix problem. |
| Product model (3-column diagram) | **KEEP + UPGRADE** | The single best visual idea on the site. Sources → decision layer → daily operator. Make it a real diagram. |
| `SOURCES` (10 inline tags) | **SIMPLIFY** | Tag soup; ten mono chips reading as a logo wall. |
| Important decisions (4 one-liners) | **REWRITE + EXPAND** | Good decisions, no reasoning. The brief's themes — how the system knows what matters to one person, how conflicting sources get prioritised, how notes/Jira/email/calendar become one view without overwhelming — are the missing spine. |
| `UXProcessFlow` | **REMOVE** | Delivery ladder again. |
| Outcome | **KEEP** | Honest ("active personal product, not a commercial one"). |

**Hard constraint discovered: WorkLight has zero image assets.** `public/work/worklight/` does not exist. OriginChains has two. So the brief's "use visuals alongside the explanation" cannot be met with screenshots for the flagship cases.

Resolution: build the visuals **as code** — SVG/CSS diagrams of structure I can state truthfully (before/after IA trees, decision diagrams, the ranking pipeline, conflict resolution). Brief §3 explicitly lists these as acceptable visual types ("architecture diagram, information hierarchy, decision diagram, system rules"). No fabricated screenshots, no invented product UI.

### Lower-priority pages
| Page | Verdict |
|---|---|
| `/work/design-systems` (capability) | **KEEP** — supporting evidence, not a flagship. |
| `/work/healthcare-crm`, `/work/soundscope` | **KEEP, labelled Concept** — correctly separated from production work already. |
| `/expertise` | **KEEP** — the deep version of Capabilities. Retitle tile 04 away from AI-first framing. |
| `/about` | **SIMPLIFY** — absorb the strongest Differentiator claims as principles. |
| Orphaned assets | `public/work/{cecconis,devrev,galaxy-cash,matchlink,spotify-admin-enterprise}` have no routes. Leave on disk (harmless); do not surface. |

---

## Part 3 — Confidentiality violations (brief §7, strict)

No `Hydra` or `ASC` references exist anywhere in the repo — clean. But the current
copy **does** expose client industries and internal workflow detail, which §7
forbids ("Do not expose industries, workflows, products, internal
responsibilities, or client details unless they are clearly safe/public").

| Location | Current text | Action |
|---|---|---|
| `lib/data.ts` `NDA_PRACTICE_NOTE` | "…enterprise product design under NDA — **healthcare, fintech, and B2B SaaS**" | Strip industries. Rendered on home + `/work`. |
| `lib/data.ts` `COMPANIES[0].scope` | "Lead design on NDA B2B products — **healthcare, fintech, enterprise SaaS**" | Reduce to "Current commercial work is confidential." |
| `lib/data.ts` `COMPANIES[0].note` | Enumerates internal responsibilities: "information architecture, high-density operational UI, design systems, AI and agentic workflows, development-ready delivery" | Reduce to a high-level, publicly safe line. |
| `lib/data.ts` `RESUME_EXPERIENCE[0].summary` | Same internal-workflow enumeration | Same reduction. |
| `app/about/page.tsx` | "Today I lead end-to-end design on complex B2B products under NDA" | Keep at this altitude; drop industry inference. |
| `public/Milos-Dostanic-Resume.pdf` | Contains a live link to `dostanic.net/work/spaceinch` (route deleted) | Flag — binary PDF, regenerate outside this change. |

Space Inch may still be **named as employer** — the brief permits that explicitly.
What goes is the industry list and the workflow enumeration.

---

## Part 4 — Proposed information architecture

### Homepage
```
Hero                  one headline · one sentence · one primary CTA · one restrained visual
  ↓
01 Selected work      3 cases · per card: problem → what I owned → one decision
  ↓
02 What I'm good at   4 capabilities, one short line each
  ↓
03 How I work         Understand → Structure → Decide → Prototype → Ship  (visual spine)
  ↓
04 Experience         compact rows — supporting evidence only
  ↓
05 A short note       communication design → web → products → complex software → builder
  ↓
Contact               poster close (unchanged)
```
Pacing: dark hero → light work → **dark capabilities slab** → light process → light
experience → light note → dark contact. Three dark chapters, not four, so the
rhythm alternates instead of strobing.

### Case study (shared narrative spine)
```
Context            what was being built, why it mattered
My role            first-person ownership, no "we"
The real problem   what made it genuinely difficult
It got harder      the complication that broke the obvious solution
Key decisions      3–4 × { problem · options · why this · trade-off accepted · what it enabled }
                   each paired with a visual where one can be built truthfully
Outcome            verifiable consequences — never invented numbers
Reflection         short, what I'd test next
```

### Per-case decision spine
- **OriginChains** — competing contexts (person / company / admin) · one repeatable
  profile module · search-first entry · system foundations before screens.
- **Optronic** — two incompatible ways users look for a product · one product
  template for nine families · downloads as product data, not a file dump ·
  bilingual as one system rather than two sites.
- **WorkLight** — rank deterministically before generating · evidence attached to
  every claim · conflicts surfaced instead of resolved silently · read-only by
  default.

### Components to build
`DecisionBlock` (the spine), `BeforeAfter` (structural, no screenshots),
`StructureDiagram` (IA trees), `ProcessSpine` (homepage), `PipelineDiagram`
(WorkLight), `Reflection`, `HomeNote`.

### Components to retire from the homepage
`Differentiators` (→ About), `UXProcessFlow` (→ deleted from Optronic/WorkLight),
`ProblemSolution` (→ replaced by `DecisionBlock`), `CaseStudySystemNote` (→ merged).

---

## Part 5 — Verification plan (brief §15)

Re-read the site as a hiring manager at three depths and fix what blocks the
intended perception:

- **10 seconds** — hero + first case row only. Must land: senior, complex
  software, ships. Nothing else competing.
- **60 seconds** — skim to contact. Must land: three hard problems with a named
  decision each, four capabilities, a visible process, quiet seniority.
- **3 minutes** — one full case study. Must land: he found the real problem, chose
  between real options, accepted a trade-off, and knows what it enabled.

---

## Part 6 — Post-implementation review

Reviewed against the built pages (production build, 1440px and 390px, reduced
motion), not against the source.

### 10 seconds — hero only
**Passes.** Eyebrow, one headline, one sentence, two CTAs, one motion element.
The competing base rail is gone; nothing else is on screen. Positioning reads as
senior without arguing for it.

### 60 seconds — skim to contact
**Passes.** Every beat carries one message and the process spine gives the page a
visual centre it did not have. Three fixes made during review:

| Found | Fix |
|---|---|
| Rejected options in `DecisionBlock` were struck through at `decoration-stroke` (12% opacity) — invisible, so the argument read as a plain list | Raised to `decoration-foreground/35` |
| `StructureCompare` hardcoded the flag word “ambiguous”, mislabelling Optronic (duplication) and WorkLight (fragmentation) | Flag word is now per-node: “means two things”, “duplicated”, “siloed”, “the actual problem” |
| WorkLight cover left a large void mid-column (`justify-between` with only four items) | Top-aligned the column, added the `+ 6 more` source count |

### 3 minutes — one full case study
**Passes for reasoning.** Each case now runs context → role → real problem →
complication → 3–4 argued decisions → outcome → reflection, and each decision
shows what it cost. Ownership is first-person throughout; OriginChains keeps one
explicit note about what the client team owned rather than blurring it into “we”.

### Remaining gaps — content, not code

1. **Visual evidence is the weakest link.** WorkLight has no product
   screenshots at all, and OriginChains has two. The diagrams carry the thinking
   honestly, but a hiring manager assessing *visual craft* at the three-minute
   mark sees mostly type and hairlines on two of three flagships. This is the
   highest-value thing to add, and it needs real assets — inventing product UI
   was not an option. Optronic is currently doing the visual-craft work alone.
2. **Concept pages diverge from the flagships.** `/work/healthcare-crm` and
   `/work/soundscope` still use the older `ProblemSolution` / `UXProcessFlow`
   structure. Left deliberately: they are labelled explorations, the brief
   prioritised the three flagships, and their evidence is worth keeping. Worth
   aligning later, or leaving as a visible tier distinction.
3. **`public/Milos-Dostanic-Resume.pdf` is stale** — it links to
   `dostanic.net/work/spaceinch`, a route that now redirects to `/about`. The PDF
   is a binary and needs regenerating via `scripts/generate-resume-pdf.py`, which
   also carries the old NDA industry copy.
4. **Sanity is unused at runtime.** Every page reads from `src/lib/data.ts`; the
   schemas and `queries.ts` are dead weight until wired up. Not touched here, but
   it means the CMS is not a second place copy can drift from.
