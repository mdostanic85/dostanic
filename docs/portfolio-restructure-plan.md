# Portfolio restructure — audit & implementation plan

**Date:** 2026-08-08  
**Scope:** Working tree at `/Users/milosdostanic/Documents/Dostanic.net` (includes uncommitted hierarchy changes)  
**Live reference:** https://dostanic-2.vercel.app/  
**Canonical production URL in code:** `https://www.dostanic.net` (`src/lib/site.ts`)  
**Method:** Full codebase review against the Master Prompt (positioning, hierarchy, evidence, case-study storytelling, conversion). No visual redesign proposed.

---

## Executive verdict

The site already has a **strong senior visual system** (editorial ICE/INK chapters, mega type, hairline layout, restrained motion, clear CTAs). Positioning copy is largely pointed in the right direction.

The gap is **evidence hierarchy and case-study judgment**:

1. The homepage no longer leads with real enterprise product proof.
2. Case studies still lean on generic UX-process scaffolding.
3. Flagship product UI is under-shown (WorkLight uses an abstract cover; OriginChains exposes portfolio TODOs).
4. Selected work still mixes capability pages and explorations into the same “senior work” surface.

**Do not redesign the look.** Make the evidence catch up with the presentation.

---

## Current state snapshot

### Routes & nav

| Area | Status |
|------|--------|
| Home, Work, About, Expertise, Contact, Résumé | Present |
| Nav (`src/lib/nav.ts`) | Work · Expertise · About · Contact · Résumé |
| Case study routes (working tree) | worklight, originchains, soundscope, matchlink, healthcare-crm, galaxy-cash, ai-design-system-workflow, optronic, cecconis |
| **Deleted in working tree (still in last commit)** | `spaceinch`, `devrev`, `spotify-admin-enterprise` |
| Assets still on disk | `public/work/devrev/*`, `public/work/spotify-admin-enterprise/*` |

### Homepage flagship order (working tree)

`FLAGSHIP_PROJECT_SLUGS` in `src/lib/data.ts`:

1. WorkLight  
2. OriginChains  
3. Optronic  
4. **AI-Connected Design System Workflow** (capability, treated as flagship)

**Last committed order was stronger for enterprise:** WorkLight → DevRev → Space Inch → OriginChains.

The current WIP **worsens Problem 1** by removing enterprise cases from Selected Work and promoting the AI workflow into the primary sequence.

### Project inventory vs target hierarchy

| Project | Current group | Target | Notes |
|---------|---------------|--------|-------|
| Space Inch | Was treated as project | **Employer only (NDA)** | Not a case study; credibility via experience strip |
| WorkLight | Selected + home #1 | **#1 FLAGSHIP** (until other enterprise publishable) | Strong copy; weak product visuals; still uses `UXProcessFlow` |
| OriginChains | Selected + home #2 | **#2 FLAGSHIP/STANDARD** | Placeholder copy removed in hygiene pass |
| Optronic | Selected + home #3 | **#3 STANDARD** | Live proof exists; process section too generic |
| AI design-system workflow | Selected + home #4 | **Capability / How I work** | Must leave primary project hierarchy |
| SoundScope | Exploration | Visual project (secondary) | Keep short; not equal weight to flagships |
| MatchLink, Galaxy Cash, Cecconi’s | Exploration (+ live pages) | Archive / Behance | Demote or unlink from main portfolio |
| HealthCare CRM | Exploration | Keep as exploration only if useful | Concept — do not present as client work |

---

## Audit against Master Prompt problems

### PROBLEM 1 — Portfolio does not lead with strongest enterprise work — FAIL

- Working tree deleted Space Inch, DevRev, and Spotify Admin routes and removed them from `PROJECTS` / `CASE_STUDY_SLUGS`.
- Homepage Selected Work opens with personal AI product + climate SaaS + marketing site + AI workflow.
- Claims (“complex B2B products”) are not matched by the first proof a visitor sees.
- DevRev still has real screens in `public/work/devrev/` — unused by current routes.
- Prior Space Inch page was NDA-safe but abstract (no product UI). Useful as scaffolding, not as sole flagship proof.

### PROBLEM 2 — Process over judgment — PARTIAL FAIL

- Shared primitive `UXProcessFlow` + `buildProcessSteps()` encodes Research → … → Handoff theater (`src/lib/caseStudyDefaults.ts`, eyebrow “UX process”).
- Used on WorkLight, Optronic, explorations, and previously enterprise pages.
- WorkLight already has good decision content (ranking, evidence, uncertainty) but still ends in a five-step process block.
- OriginChains is closer to decisions, but challenges are listed as bullets rather than Challenge → trade-off → decision → solution → shipped.

### PROBLEM 3 — Ownership not explicit enough — PARTIAL FAIL

- OriginChains has a solid “What I owned” list.
- Most cases lack clear Product / Engineering / other-designer boundaries.
- Vague collaboration language still appears in older shells and Space Inch HEAD copy (“partnered with product and engineering”).

### PROBLEM 4 — What shipped unclear — PARTIAL FAIL

- WorkLight and Optronic status signals are relatively clear.
- OriginChains delivery reads “Product design · Figma system” — fine if honest, but must not imply live product without proof.
- Explorations are labelled, but still sit in the same case-study nav chain as primary work.
- **Public internal notes on OriginChains** violate “never show portfolio TODOs.”

### Homepage architecture vs recommended 9 sections — PARTIAL

| Recommended | Current | Gap |
|-------------|---------|-----|
| 1 Hero | Strong headline + CTAs | Supporting copy under-emphasizes IA/workflows/edge cases → implementation |
| 2 Credibility strip | Base rail: 20 / 12 years | Missing quiet Space Inch / delivery signals |
| 3 Flagship enterprise | Missing | Critical |
| 4 Selected work (2–3) | 4 mixed cases | Wrong set + AI capability included |
| 5 What I can own | Capabilities (good) | Refine Product Builder wording; avoid “AI engineer” drift |
| 6 How I work | Present (good) | Align principle titles to Master Prompt language |
| 7 Selected experience | Full `COMPANIES` list | Too CV-like; Freelance + TheBrendz compete with Space Inch |
| 8 Short about | Absent on home | Only on About |
| 9 Contact CTA | Strong (“Have something complex?”) | Keep; optional product-problem headline tweak |

### Visual identity — KEEP

Premium editorial / product-focused direction, chapter-dark slabs, mega display type, hairline grids, magnetic CTAs, particle hero, reduced-motion support — all appropriate. Do not replace with a template look.

### Motion — AUDIT LATER (Phase 4)

Particle field, parallax numerals, reveal staggers, Lenis, cursor dot, route transitions — enough already. Tune only after content hierarchy is fixed. Keep `usePrefersReducedMotion`.

---

## 1. Keep

### Visual & layout system

- ICE/INK chapter model (`.chapter-dark`, grain, tokens in `globals.css`)
- Typography: `display-mega`, `display-tight`, mono metadata language
- Layout primitives: `Container`, `Section`, `PageHeader`, max-width `1500px` rhythm
- Nav overlay pattern + frosted header behavior
- Motion primitives with reduced-motion: `Reveal`, `Magnetic`, `ParallaxY`, `ParticleField`, Lenis
- Project presentation: editorial `CaseRows` (not card grids), Work index table pattern
- Case study shell primitives: `CaseStudyShell`, `CaseStudyMeta`, `CaseStudySection`, `ProblemSolution`, `CaseStudyScreens`, `CaseStudyOutcome`
- Footer conversion model (email primary, no lead forms)

### Content / positioning already aligned

- Hero headline: **I design complex B2B products teams can build.**
- Primary / secondary CTAs: View selected work · Contact me
- Capability groups roughly matching Complex Product UX / Design Systems / Product Delivery / Product Builder & AI
- About principles direction (structure, constraints, implementation, team)
- Contact framing around product problems
- Project typing fields: `projectType`, `delivery`, `portfolioGroup`
- Evidence rules already encoded in `ux-ui-portfolio-creation-rule.md` and prior content TODOs

### Pages to retain (structure)

- `/`, `/work`, `/about`, `/contact`, `/resume`, `/expertise` (evaluate merge later — not Phase 1)
- `/work/worklight`, `/work/originchains`, `/work/optronic` as rewrite targets
- `/work/soundscope` as minimal visual project
- `/work/ai-design-system-workflow` as capability destination (not Selected flagship)

---

## 2. Change

### Positioning & metadata

- Site title / JSON-LD / nav subtitle: keep **Senior Product Designer** primary; treat “Product Builder” as differentiator, not co-equal title everywhere.
- Hero supporting paragraph → closer to Master Prompt (workflows, data, roles, edge cases → engineering through implementation; 12+ / 20 years).
- Homepage section story: enterprise proof first, then curated selected work.
- Experience on home: curated high-signal rows (Space Inch, Polyrific, Quantox, optional Heineken note) — full chronology stays on Résumé.
- About principles copy: refine toward “Structure before visuals”, “Constraints are product inputs”, “Decisions should survive implementation”, “Done means shipped”.

### Project hierarchy (`src/lib/data.ts`, `FLAGSHIP_PROJECT_SLUGS`, `caseStudyRoutes.ts`)

Target Selected / home sequence:

1. **Enterprise flagship** (NDA-safe Space Inch product *or* DevRev *or* approved equivalent)  
2. **WorkLight**  
3. **OriginChains**  
4. **Optronic** (standard length)

AI workflow → not in `FLAGSHIP_PROJECT_SLUGS`; link from How I work / Expertise / Product Delivery.

### Case study storytelling

Rewrite flagships around **2–4 product challenges** (Challenge → Context → Options → Decision → Solution → What shipped), not identical process templates.

- Deprecate or narrowly scope `UXProcessFlow` / `buildProcessSteps` for flagships.
- Add reusable blocks: Ownership matrix, Executive summary, Challenge chapter, What shipped.
- Shorten Optronic; deepen WorkLight + enterprise; clean OriginChains.

### Project cards (`CaseRows`, Work index copy)

Each card should answer “why open this?” with:

- Product name  
- One-line challenge/value  
- Role/category  
- One proof/status signal  
- Strong visual  

Cut multi-paragraph descriptions on homepage rows (`line-clamp-4` of long blurbs).

### WorkLight

- Lead with real product UI (screenshots / crops / short recording), not only the abstract signal cover.
- Restructure to proposed challenges (priority trust, task model, explainability, failure/uncertainty).
- Keep builder honesty: active development + repository proof.

### OriginChains

- Remove all public placeholder / unfinished-export language.
- Replace `ImagePlaceholder` with real frame or omit the slot.
- Tighten to trust / IA / public vs signed-in / system scalability story.
- Clarify shipped vs design deliverable status.

### Optronic

- Standard case: problem → ownership → 1–2 decisions → live proof.
- Remove generic process ladder; keep EN/DE, taxonomy, component architecture, live URL.

### Work index

- Default “Selected” should be ~3–4 senior projects.
- Explorations behind filter only; consider unlinking MatchLink / Galaxy Cash / Cecconi’s from in-site case routes (Behance only).

---

## 3. Remove / demote

| Item | Action | Priority |
|------|--------|----------|
| AI workflow from homepage flagships | Remove from `FLAGSHIP_PROJECT_SLUGS` | CRITICAL |
| OriginChains public TODO / placeholder copy | Delete copy + placeholder UI or replace with real screen | CRITICAL |
| MatchLink, Galaxy Cash, Cecconi’s as peer case studies | Demote: archive filter only, or Behance-only (remove routes later) | CRITICAL |
| Generic `UXProcessFlow` on flagships | Remove from WorkLight / Optronic / enterprise rewrites | CRITICAL |
| Spotify Admin as primary enterprise claim | Do not restore as Project #1 unless ownership/client naming is verified | HIGH (content gate) |
| HealthCare CRM process theater length | Keep concept label; shorten or leave exploration | MEDIUM |
| Duplicate home/résumé timeline density | Curate home experience | HIGH |
| Invented metrics / identical AI handoff blocks on explorations | Strip if still present | HIGH |

**Note on deleted enterprise pages:** Restoring DevRev/Space Inch blindly is not enough — they must be rewritten to decision/ownership/shipped structure and only publish verified facts. Spotify claims need verification before any restore.

---

## 4. Create

| Deliverable | Purpose |
|-------------|---------|
| **Enterprise flagship case study** | Project #1 proof of complex B2B ownership |
| Homepage **enterprise spotlight** section (optional variant of CaseRows first item) | Proof before generic grid scanning |
| **Executive summary** block component | Recruiter 70% understanding |
| **Ownership matrix** component | Designer / Product / Engineering / others |
| **Challenge chapter** component | Decision-driven narrative unit |
| **What shipped** block | Prefer over unsupported “Impact” |
| WorkLight **real product visual set** | Replace abstract cover as primary evidence |
| Quiet **credibility strip** (optional) | Space Inch · 12+ · 20 · design→implementation |
| Redirects for removed case slugs | Preserve SEO if routes stay deleted |
| Content update to `docs/portfolio-content-needed.md` | Track enterprise evidence gates |

Reuse existing tokens/components; extend `CaseStudyShell` family rather than inventing a second design system.

---

## 5. Missing evidence (do not invent)

Blocked or gated until you provide / approve:

### Enterprise Project #1 (CRITICAL gate)

Choose one publishable path:

**A. NDA-safe Space Inch engagement**  
Need: approved neutral title (e.g. “Enterprise Engineering Platform”), 2–4 real challenge themes, ownership boundaries, production status language, and **sanitized visuals** (or honest no-screenshot framing that still feels concrete).

**B. DevRev**  
Need: confirmation of role, dates, what you personally owned vs team, what shipped, which `public/work/devrev` screens are publishable, whether naming “DevRev” is allowed.

**C. Another Space Inch client product**  
Same as A with better visuals if available.

Until one path is approved, do **not** fabricate enterprise screens, metrics, or client names.

### WorkLight

- Real UI screenshots / crops from the working app (Today, task detail, evidence, source health, failure states).
- Accurate list of connectors that exist vs planned.
- What is implemented vs in progress (keep honest).

### OriginChains

- Clean single-frame exports for densest surfaces (search/compare) or omit.
- Confirm delivery status (design-only vs implemented).
- Team ownership split if others contributed.

### Optronic

- Confirm live URL is the preferred public proof.
- Confirm bilingual + build ownership claims.

### Cross-profile consistency (content maintenance)

Align website / résumé PDF / LinkedIn / GitHub / Behance on:

- Title (Senior Product Designer)
- Location wording
- Employment dates (especially overlapping TheBrendz / Freelance / Space Inch)
- Positioning (not AI engineer / not generic UI freelancer)

Do not change external accounts without explicit authorization.

### Explicitly out of scope until provided

- Testimonials, fake metrics, award counts, confidential UI, unverified Spotify internal tooling claims.

---

## 6. File-by-file implementation plan

### Phase 1 — CRITICAL strategy

| File / area | Work | Priority |
|-------------|------|----------|
| `src/lib/data.ts` | Rebuild `PROJECTS` order/groups; shorten card blurbs; fix `FLAGSHIP_PROJECT_SLUGS` to enterprise → WorkLight → OriginChains → Optronic; demote AI workflow + explorations | CRITICAL |
| `src/lib/caseStudyRoutes.ts` | Reorder prev/next; drop or archive weak slugs; add enterprise slug | CRITICAL |
| `src/app/sitemap.ts` | Follow route registry (auto via `CASE_STUDY_SLUGS`) | CRITICAL |
| `src/components/v3/CaseRows.tsx` | Card format (one-liner + status); optional first-row enterprise treatment | CRITICAL |
| `src/components/v3/Hero.tsx` | Refine supporting copy; keep headline + CTAs | CRITICAL |
| `src/components/v3/ExperienceIndex.tsx` | Curate high-signal companies only | CRITICAL |
| `src/app/page.tsx` | Wire section order (credibility → enterprise → selected → capabilities → how → experience → about blurb? → CTA) | CRITICAL |
| `src/app/work/originchains/page.tsx` | **Remove placeholder/TODO public copy** immediately | CRITICAL |
| `src/components/work/ImagePlaceholder.tsx` | Stop using on public OriginChains; keep for draft-only if needed | CRITICAL |
| New: `src/app/work/[enterprise-slug]/page.tsx` | Create/restore flagship after evidence gate | CRITICAL |
| Restore candidates from git: `spaceinch`, `devrev` | Use as draft source only; rewrite before publish | CRITICAL |
| `src/app/work/ai-design-system-workflow/page.tsx` | Retitle/reframe as delivery capability; remove from Selected | CRITICAL |
| `src/app/work/WorkClient.tsx` | Selected default = curated set; explorations clearly secondary | CRITICAL |
| `src/app/work/matchlink/page.tsx`, `galaxy-cash`, `cecconis` | Unlink from Selected; later remove routes or add archive note | CRITICAL |
| `next.config.ts` / redirects | 301 deleted enterprise URLs if permanently removed, or restore pages | CRITICAL |
| `scripts/seed-sanity.ts`, `src/sanity/schemaTypes/caseStudy.ts` | Align CMS fields with ownership / what-shipped / challenge model (if Sanity used in prod) | HIGH |

### Phase 2 — Case studies (CRITICAL content)

| File | Work | Priority |
|------|------|----------|
| Enterprise case page | Challenge-driven flagship | CRITICAL |
| `src/app/work/worklight/page.tsx` | Decision challenges; real UI; drop process theater | CRITICAL |
| `src/app/work/originchains/page.tsx` | Trust/IA/system story; executive summary; ownership; what shipped | CRITICAL |
| `src/app/work/optronic/page.tsx` | Standard length; remove `UXProcessFlow`; emphasize live proof | CRITICAL |
| New components under `src/components/work/case-study/` | `CaseStudyExecutiveSummary`, `CaseStudyOwnership`, `CaseStudyChallenge`, `CaseStudyShipped` | CRITICAL |
| `src/lib/caseStudyDefaults.ts` | Stop using generic 5-step as flagship default; keep only if useful for concepts | HIGH |
| `src/components/work/case-study/UXProcessFlow.tsx` | Retire from flagships or rename for concepts only | HIGH |
| `src/components/work/ProjectSignalCover.tsx` | WorkLight → real cover/screenshot when assets ready | CRITICAL |
| `public/work/worklight/*` | Add real product assets | CRITICAL |
| `public/work/originchains/*` | Add/replace dense screens | HIGH |
| Explorations (`soundscope`, etc.) | Minimal visual treatment; no fake process depth | MEDIUM |

### Phase 3 — UX / UI hierarchy (HIGH)

| File | Work | Priority |
|------|------|----------|
| `CaseStudyMeta` / heroes | Reduce equal-weight metadata grids; emphasize role, ownership, status | HIGH |
| `CaseRows` + covers | Evidence hierarchy; screenshot readability | HIGH |
| Mono metadata sizing | Bump critical status/proof text where too small | HIGH |
| Mobile pass: hero, case meta, screenshots, nav | Preserve story hierarchy | HIGH |
| `src/components/home/HowIWork.tsx` | Add link into design↔implementation capability | HIGH |
| `src/components/v3/Capabilities.tsx` + `EXPERTISE_TILES` | Align labels/copy to Master Prompt groups | HIGH |
| `src/app/about/page.tsx` | Judgment-forward story; principles rename; less tool/hobby drift | HIGH |
| `src/app/expertise/page.tsx` | Deduplicate vs home/about or keep as deep dive | MEDIUM |
| `src/app/resume/page.tsx` + PDF script | Consistency with site positioning | HIGH |
| `src/app/layout.tsx` metadata / JSON-LD | Senior Product Designer primary | HIGH |

### Phase 4 — Polish (MEDIUM / LOW)

| Area | Work | Priority |
|------|------|----------|
| Motion tuning (particles, parallax, magnetic) | Reduce competition with evidence | MEDIUM |
| Product video for WorkLight / enterprise | Only with real footage | MEDIUM |
| Image crops / browser chrome | Inspectable UI | MEDIUM |
| Microcopy pass (500-portfolio test) | Final | LOW |
| External profile sync checklist | Manual | MEDIUM |

---

## 7. Priority task backlog

### CRITICAL — do first (strategy + credibility)

1. **Decide enterprise flagship path** (A Space Inch NDA / B DevRev / C other) — content gate.  
2. **Fix hierarchy data**: Selected = 3–4 projects; AI workflow out of flagships.  
3. **Strip OriginChains public placeholder/TODO language** (can ship without new assets by omitting the empty slot).  
4. **Demote MatchLink / Galaxy Cash / Cecconi’s** from peer portfolio weight.  
5. **Rewrite homepage storytelling**: hero support copy → credibility → enterprise → selected → capabilities → how → curated experience → contact.  
6. **Scaffold enterprise case** only with approved facts (or restore + rewrite draft behind incomplete content checklist).  
7. **Shorten project card copy** to scan format.

### HIGH — case studies + ownership

8. Restructure WorkLight around 2–4 challenges + real UI.  
9. Restructure OriginChains around trust/IA/system decisions + what shipped.  
10. Shorten Optronic to standard case + live proof.  
11. Add Executive summary + Ownership + What shipped components; remove flagship `UXProcessFlow`.  
12. Curate home experience list; align About/Résumé.  
13. Metadata / title consistency (Senior Product Designer primary).

### MEDIUM

14. Expertise page keep-or-merge decision.  
15. SoundScope as minimal visual project.  
16. Motion audit; hero height vs “proof appears sooner.”  
17. External profile consistency TODOs.  
18. Sanity schema/seed alignment if CMS is active.

### LOW

19. Micro-interactions, crop polish, optional product video.  
20. Final copy pass.

---

## Recommended implementation sequence (execution)

```text
Week logic (not calendar-binding):

1. CRITICAL content hygiene
   - OriginChains placeholder removal
   - data.ts hierarchy + flagship list
   - demote AI workflow + weak explorations

2. CRITICAL homepage structure
   - Hero support copy
   - CaseRows card format + order
   - Experience curation
   - Credibility strip (quiet)

3. CRITICAL enterprise gate
   - You supply: which project, ownership, status, publishable visuals
   - Then build Project #1 case study

4. CRITICAL/HIGH case rewrites
   - WorkLight → OriginChains → Optronic
   - New case-study section components

5. HIGH UX hierarchy + mobile
6. MEDIUM/LOW polish only after above
```

---

## Design review checklist (after each major change)

For every changed page, answer:

- [ ] **Positioning** — More senior Product Designer, not AI/FE/visual freelancer?  
- [ ] **Evidence** — Does this prove something factual?  
- [ ] **Hierarchy** — Understood in a few seconds?  
- [ ] **Product thinking** — Why the solution exists is clear?  
- [ ] **Ownership** — My work vs team is distinguishable?  
- [ ] **Craft** — Product UI is inspectable?  
- [ ] **Credibility** — No unsupported claims / no public TODOs?  
- [ ] **Conversion** — Reason to continue or contact?

If a change only makes the page “cooler,” reject it.

---

## Success criteria (definition of done)

A Design Director should conclude: *strong when products become complicated.*  
A Head of Product: *owns difficult B2B workflows and makes them buildable.*  
An engineering-minded founder: *reduces design/dev gaps.*  
A recruiter: *Senior Product Designer, 12+ years digital, B2B/enterprise, visual craft, technically aware.*  
A peer designer: *polish is real; judgment is the value.*

Optimize for: **“Look at the level of problems Miloš can be trusted to solve.”**

---

## Most important five outcomes (trade-off order)

1. Real enterprise project becomes strongest proof.  
2. WorkLight becomes decision-driven Designer + Builder case.  
3. Main portfolio is ~3–4 curated projects.  
4. Case studies show decisions, ownership, constraints, shipped evidence — not UX theater.  
5. Existing premium visual identity stays intact.

---

## Decision log

**2026-08-08 — Space Inch is employer, not a case study.**  
All Space Inch client work is NDA. Do **not** create or restore a Space Inch project page. Treat Space Inch as current company on experience / résumé / quiet credibility only. Former `/work/spaceinch` already 301s to `/about`.

Enterprise Project #1 (if pursued later) must be a **different** publishable product (e.g. DevRev or other non-NDA work) — or the portfolio leads with WorkLight → OriginChains → Optronic until one exists.

### Still useful from you (non-blocking for hygiene)

1. **Optional Project #1** beyond the current three — DevRev or other?  
2. **WorkLight screens:** 4–8 real UI frames when ready.
