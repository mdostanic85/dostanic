# Open items

Things that surfaced during the workshop and still need a decision, a fact, or
a follow-up. Logged as they come up; nothing here is invented.

## Unconfirmed intake answers

Both were derived from the code because the question went unanswered. They are
being used as working assumptions — correct them and the affected modules
change.

- **Content building blocks.** `Project`, `ExpertiseTile`, `Differentiator`,
  `ResumeExperience` plus the `portfolioGroup` / `projectType` / `delivery`
  taxonomies. Read out of `src/lib/types.ts` and `src/lib/data.ts`. Is anything
  missing, and is anything in that list no longer used?
- **Typical task.** Working definition: *"rewrite the project descriptions in
  `data.ts` so they stop repeating one template."* If the real recurring task is
  something else — a new case study from scratch, a résumé rewrite, a landing
  section — Module 4's pipeline should be shaped around that instead.

## Facts needed before copy can ship

- **Years claim.** The hero rail reads `12+ years digital · 20 years design`.
  `RESUME_EXPERIENCE` starts at Freelance, June 2008 (18 years) with graphic
  design from 2013. Nothing in the repo supports 20. Decide the number and make
  it identical on site, résumé, LinkedIn, and Behance before publishing.
- **Per-project ownership.** For each of the 9 projects: exact role, what was
  personally owned versus contributed to, team size, and implementation status.
  Copy cannot get specific without this, and specificity is the entire point.
- **NDA boundary.** Space Inch client work needs explicit review before any
  client name, screenshot, product data, or business result appears. Carried
  over from `docs/portfolio-content-needed.md`.
- **Testimonials, portrait, award count.** Still open from
  `docs/portfolio-content-needed.md`; unchanged by this workshop.

## Repo follow-ups

- **Stale Sanity references.** `docs/portfolio-restructure-plan.md`,
  `docs/audit-2026-08.md`, and `.cursor/rules/ux-ui-portfolio-creation.mdc`
  still describe Sanity as part of the stack. The two docs are historical
  records and were deliberately left alone; the Cursor rule is a live document
  and probably should be cleaned.
- **`build-harness` missing from `skills-lock.json`.** The skills CLI refuses to
  install it: its upstream `SKILL.md` has an unquoted `description` containing
  `Domain-independent:`, which makes the YAML frontmatter unparseable. Fixed in
  our copy, not upstream. Until a fixed version is published, the skill stays
  outside the lock. Worth an issue or PR against `Jeromski62/build-harness`.
- **`computedHash` is not reproducible by hand.** Not a plain sha256 of
  `SKILL.md` — verified against both `brandkit` and `ux-writing`. Only the
  skills CLI can write valid lock entries.
