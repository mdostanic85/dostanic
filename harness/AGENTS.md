# AGENTS.md — Portfolio Content Harness

Persistent context for any agent working on dostanic.net portfolio copy.
Load this in full; it is deliberately short. Anything task-specific belongs
in the prompt, not here.

## 1. Stack & Tools

- **Source of truth:** `src/lib/data.ts` — `Project`, `ExpertiseTile`,
  `Differentiator`, `ResumeExperience`. There is no CMS. Editing copy means
  editing this file (and the case-study components that read from it).
- **Binding style rule:** `ux-ui-portfolio-creation-rule.md` (repo root) —
  the pre-existing content standard this harness enforces. Don't restate it
  here; read it.
- **Writing support:** `ux-writing` skill
  (`.agents/skills/ux-writing/SKILL.md`) — apply its purposeful / concise /
  conversational / clear standard when drafting or auditing copy.
- **Verification:** `npm run build` — must pass (types + static generation)
  after any content change.

## 2. Conventions

- **Language:** all site copy in English. Workshop/planning conversation
  with the owner in Serbian.
- **Taxonomy vocabulary — use these terms exactly, invent no new categories:**
  - `portfolioGroup`: `Selected` · `Capability` · `Exploration`
  - `projectType`: `Client work` · `Personal product` · `Concept` · `Capability`
  - `delivery`: free text, but always a fact about what shipped (e.g.
    "Designed and built · Live"), never a vibe.
- **Naming:** slugs are kebab-case; titles follow `Name | Short descriptor`.

## 3. Hard Rules — an agent must NEVER

1. Invent metrics, research findings, user/client quotes, or validation data
   not present in the provided source material.
2. Publish a Space Inch client name, screenshot, product detail, or business
   result without explicit NDA review.
3. Blur `projectType` — a `Concept` never reads like `Client work`.
4. Claim AI made a design decision or replaced senior design ownership.
5. Publish a number (years of experience, award count, etc.) that is
   inconsistent with the résumé, LinkedIn, or Behance.
6. Ship the pattern `[Type] — noun, noun, noun.` — a list of nouns with no
   verb and no reason. This is the specific defect the harness exists to
   kill; treat it as a hard rule, not a style preference.

## 4. Workflow

Fixed three-stage pipeline — see `harness/agents/` (Module 4) for the full
handoff spec:

1. **Extract** — pull facts only from the material actually provided (notes,
   screenshots, transcripts, existing case studies). Flag gaps; never fill
   them with plausible-sounding invention.
2. **Draft** — facts → prose, structured per the case-study sections in
   `ux-ui-portfolio-creation-rule.md` §6, styled per its §18. This is where
   the `ux-writing` skill applies.
3. **Review** — adversarial pass against Section 3's Hard Rules and against
   the noun-listing template specifically. Rejects, doesn't just flags.

## 5. Scope

**IN:** portfolio copy sourced from `src/lib/data.ts` — project descriptions,
expertise tiles, differentiators, résumé summaries, hero and homepage copy.

**OUT:** visual design, layout, component code, analytics, and any content
on LinkedIn / Behance / GitHub (external profiles this repo cannot edit).
