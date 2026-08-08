# portfolio-content-harness: Harness Progress

## Goal

A system of agents, rules, tools, and guards that reliably turns raw project
material into portfolio copy which shows a prospective client — usually an IT
company — exactly what this designer does and how, without every sentence
having to be steered by hand.

---

## Progress

| # | Module | Status | Harness Artifact |
|---|---|---|---|
| 0 | Intake | 🔄 in progress | — (feeds every module below) |
| 1 | Context Engineering | ⬜ open | `harness/AGENTS.md` |
| 2 | Rule Files & Skills | ⬜ open | `harness/skills/` |
| 3 | Tools & MCP | ⬜ open | `harness/tools/` |
| 4 | Multi-Agent Design | ⬜ open | `harness/agents/` |
| 5 | Hooks & Guards | ⬜ open | `harness/hooks/` |
| 6 | Evals | ⬜ open | `harness/evals/` |
| 7 | Observability | ⬜ open | `harness/observability/` |
| 8 | Observability Dashboard (Bonus) | ⬜ open, only after 5+ real session logs | `index.html` |

**Legend:** ⬜ open · 🔄 in progress · ✅ done

---

## Domain facts settled so far

These are answers from the intake. Later modules use this vocabulary rather
than generic placeholders.

**What the harness produces.** Portfolio copy — the text on dostanic.net that
tells a visitor what this designer does. Not visuals, not layout.

**Who reads the output.** Prospective clients, typically IT companies
evaluating whether to hire. The bar: after one pass over the site it must be
unambiguous what the work is, how it is done, and what was actually owned.

**Source of truth.** `src/lib/data.ts` — single, authoritative. Sanity CMS was
removed as dead code (commit `13a5241`); no CMS layer exists any more. Copy
changes are code changes.

**Existing convention.** `ux-ui-portfolio-creation-rule.md` is current and
binding. It already carries the positioning (Senior Product / UX/UI Designer,
complex digital products) and an explicit anti-fabrication stance. Module 1
builds on it rather than replacing it.

**Content building blocks.** `Project`, `ExpertiseTile`, `Differentiator`,
`ResumeExperience`, plus the taxonomies `portfolioGroup`
(Selected / Capability / Exploration), `projectType`
(Client work / Personal product / Concept / Capability), and `delivery`.
*Derived from the code, not yet confirmed in conversation — see HANDOUT.md.*

**Known defect that motivated this work.** Copy across the site collapses into
one template: `[Type] — [noun], [noun], [noun].` It runs in 9 of 9 project
descriptions, the hero paragraph, and most company notes. It reads as machine
output and communicates nothing specific about the work. The `DIFFERENTIATORS`
entries add a second failure mode: rhetorical claims with invented precision.

**Language.** Harness artifacts and site copy in English; workshop
conversation in Serbian.

---

## Tooling in place

| Tool | Location | Role |
|---|---|---|
| `build-harness` | `.agents/skills/build-harness/` | Runs this workshop |
| `ux-writing` | `.agents/skills/ux-writing/` | Writes and audits the copy |

Both are symlinked into `.claude/skills/`. That directory is gitignored, so a
fresh clone needs the symlinks recreated — the same as the thirteen skills
already in `.agents/skills/`.

---

## How Sessions Work

Every session:
1. Read this file first: where does progress stand?
2. Continue at the first module that isn't ✅ yet
3. Answer the questions from the matching `reference/0X-*.md` file in the
   `build-harness` skill, in chat
4. Build the harness artifact together
5. Mark the module as ✅

---

## Reference

This project was set up with the `build-harness` skill, a generalized version
of a course on building a multi-agent harness. The lessons live in
`.agents/skills/build-harness/reference/`.
