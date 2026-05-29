# UX/UI Portfolio Creation Rule

> **Reusable AI rule** for creating and updating a professional Senior Product / UX/UI Designer portfolio from mixed input material: screenshots, previous portfolio visuals, notes, transcripts, Figma exports, project context, and related artifacts.

---

## 1. Purpose of the Rule

This rule guides an AI agent to produce **consistent, senior-level UX/UI portfolio pages and case studies** from heterogeneous source material.

The agent must:

- **Analyze** provided images, text, transcripts, exports, and notes
- **Extract** product context, user goals, workflows, and UX problems from screenshots
- **Identify** UX challenges, design responses, and system-level patterns
- **Infer** realistic design decisions only where context is missing—and label inferences clearly
- **Structure** each case study using the same narrative and layout framework
- **Apply** the same UI system across the entire portfolio
- **Avoid** fake claims, unsupported metrics, invented research, or decorative gallery framing
- **Present** the designer as a senior product practitioner with strong system thinking and implementation awareness

The portfolio is **not** a generic visual gallery. It is evidence of product thinking, UX reasoning, design system maturity, structured workflow, developer collaboration, and practical senior-level decision-making.

---

## 2. Portfolio Positioning

**Position:** Senior Product / UX/UI Designer focused on complex digital products.

**Primary domains:**

- Complex SaaS products
- Enterprise workflows
- Healthcare
- Fintech
- Data-heavy interfaces
- Design systems
- AI-assisted design-to-development collaboration

**Emphasize:**

- Product clarity and problem framing
- Workflow simplification
- Scalable UI architecture
- Design system thinking
- Close collaboration with developers
- Practical implementation awareness
- Clean, professional visual execution

**Avoid:**

- Presenting work as decorative UI only
- Vague “visual design” framing without product or UX substance
- Impressive-sounding language disconnected from visible decisions

The portfolio must communicate that the designer can:

- Understand complex digital products
- Simplify complicated UX flows
- Design scalable UI systems
- Work with reusable components and tokens
- Collaborate closely with developers
- Use AI intelligently to improve design-to-development handoff
- Explain UX decisions professionally
- Turn messy requirements, screenshots, transcripts, and stakeholder feedback into clear product experiences

---

## 3. Core Portfolio Principles

1. **Every project tells a clear UX story** — problem, role, process, decisions, outcome.
2. **Screenshots are evidence, not decoration** — each visual supports a decision or insight.
3. **Do not show too many screens without explanation** — curate for storytelling, not volume.
4. **Reuse the same case study structure** across all projects.
5. **Reuse the same visual system** across the entire portfolio.
6. **Explain design decisions clearly** — what changed, why, and what improved (without fake metrics).
7. **Present AI as a workflow accelerator**, not as the designer.
8. **Do not invent** fake metrics, client quotes, research findings, validation data, or business results.
9. **When context is missing**, make careful professional assumptions and label them as **inferred**.
10. **Build around the strongest stories**, not around the number of screenshots available.

---

## 4. Global UI and Component Rules

The portfolio must feel like **one coherent product**. Apply strict UI consistency across every page and case study.

### Shared system (must not vary by project)

| Element | Rule |
|--------|------|
| Grid system | Single grid logic across all pages |
| Typography scale | One hierarchy; no per-project type scales |
| Spacing rhythm | Consistent spacing tokens / rhythm |
| Color logic | Semantic, restrained palette; no random accents |
| Card components | Reuse the same card pattern |
| Metadata badges | Same badge component and semantics |
| CTA components | Same primary/secondary CTA treatment |
| Image containers | Same framing, radius, and aspect handling |
| Section headers | Same header pattern and hierarchy |
| Navigation | Same nav structure and behavior |
| Case study layout | Same template for all case studies |
| Screenshot framing | Same device/frame/annotation treatment |
| Visual hierarchy | Same content → support → meta weighting |

### Agent behavior

- **Reuse existing core UI components** wherever possible in the codebase or design system.
- **Do not** create different visual styles per project.
- **Do not** invent one-off treatments, decorative gradients, inconsistent colors, or ad hoc layouts unless explicitly requested.
- **Prefer rebuilding** weak or inconsistent screens as live portfolio UI over embedding low-quality flat images.

---

## 5. Screenshot and Context Extraction Rules

When screenshots, Figma exports, previous portfolio visuals, product screens, diagrams, or UI states are provided, treat them as **primary source material**. Analyze before writing.

### Per-screenshot extraction checklist

For each image, extract and document (internally or in draft notes):

| Dimension | What to identify |
|-----------|------------------|
| Product area | Module, feature, or surface |
| User goal | What the user is trying to accomplish |
| Main user task | Primary action on this screen |
| Visible workflow | Steps, states, or path implied |
| Main UX problem | Friction, ambiguity, or inconsistency visible |
| Design response | How the UI addresses (or fails) the problem |
| Information hierarchy | What is emphasized vs. de-emphasized |
| Available actions | Primary, secondary, destructive, navigation |
| Components used | Buttons, tables, cards, forms, etc. |
| Repeated patterns | Recurring layouts or interactions |
| Visible states | Default, selected, empty, error, etc. |
| Potential edge cases | Missing states, dense data, multi-role |
| Design system relevance | Component reuse vs. one-off styling |
| Developer handoff relevance | Clarity of specs, tokens, states |
| Best portfolio placement | Where this image best supports the story |

### Image placement decision

Assign each asset one primary role (do not use every image equally):

| Role | Use when |
|------|----------|
| Cover visual | Strongest, clearest hero representation |
| Hero mockup | High-fidelity product moment |
| Case study visual | Supports a specific decision or flow |
| Process evidence | Workshops, flows, IA, iterations |
| Before/after comparison | Clear improvement narrative |
| UI detail | Component, state, or pattern close-up |
| Design system example | Tokens, components, documentation |
| Workflow explanation | Steps, diagrams, user paths |
| Developer handoff example | Specs, comments, implementation notes |
| Supporting visual | Secondary proof |
| Reference only | Inform writing; do not publish |
| Rebuild as live UI | Weak, outdated, or off-brand as flat image |

**Selection rule:** Choose the strongest visuals for storytelling. If a screenshot is visually weak, outdated, compressed, or better represented as a live component, **rebuild it** using portfolio UI components instead of embedding it as an image.

---

## 6. Case Study Structure

Every case study must follow this structure in order.

### Cover section

Include:

- Project name
- Short one-line description
- My role
- Industry or product type
- Platform (web, mobile, admin, etc.)
- Timeline (if available)
- Key contribution tags
- Strong visual from provided screenshots or rebuilt UI

**Suggested tags:** Product Design, UX Strategy, UI Design, Design System, Tokenization, AI-Assisted Workflow, Developer Collaboration, Prototyping, Complex SaaS, Healthcare, Fintech, Enterprise UX, Data-Heavy UI, Admin Tools, Mobile UX

### Project context

- What the product is
- Who the users are
- What problem the product solves
- Why the work mattered

Keep concise and strategic.

### My role

Specify:

- What I owned
- What I designed or improved
- Who I collaborated with
- How I contributed to UX, UI, design system, implementation, or handoff

**Avoid:** vague phrases such as “I worked on the design.”

### Challenge

Describe the actual UX/UI challenge: complex logic, legacy UI, unclear flows, inconsistent patterns, weak hierarchy, dense data, multiple roles, technical constraints, poor handoff, design system gaps—as relevant.

### Process

Workflow from understanding to delivery (see Section 9).

### Design decisions

Major UX and UI decisions in Decision / Why / Result format (see Section 10).

### Design system / tokenization

Alignment with reusable components, spacing, typography, semantic colors, states, and token logic (see Section 11).

### AI + developer collaboration

How AI and dev collaboration improved handoff and alignment (see Sections 12–13).

### Screens / visual evidence

Screenshots used intentionally to support the narrative (see Section 14).

### Outcome

Realistic outcomes without invented metrics (see Section 15).

### Reflection

Mature, honest learnings (see Section 16).

---

## 7. 60-Second Case Study Summary

Place **at the top of every case study** — scannable for hiring managers.

```markdown
## 60-Second Summary

- **Product:**
- **Problem:**
- **My role:**
- **Main UX challenge:**
- **Key design decision:**
- **System contribution:**
- **AI/dev collaboration:**
- **Outcome:**
```

This section must stand alone: a reader should understand project value in under one minute.

---

## 8. UX Problem-Solving Layer

When details are missing, the agent may **infer realistic senior-level UX problems and solutions** from screens, project type, and product context.

### Allowed

- Professional narrative expansion grounded in visible UI
- Design rationale described as approach, not proof
- Labeled inferences (see Section 21)

### Forbidden (unless explicitly provided in source material)

- Fake metrics
- Fake company or business results
- Fake research findings
- Fake user or client quotes
- Fake business numbers
- Fake validation data

### Preferred phrasing (design rationale)

- “The design approach focused on…”
- “The proposed solution improved clarity by…”
- “The flow was structured to reduce ambiguity…”
- “The UI was designed to support…”
- “The system was prepared to scale across similar use cases…”
- “Based on the available screens, the main UX challenge appears to be…”

### Avoid (unless data is explicitly provided)

- “Increased conversion by 40%”
- “Reduced task time by 60%”
- “Validated with 100 users”
- “The client reported major revenue growth”

### Specific UX problems to cover when relevant

#### Unclear entry points

**Problem:** Users lack a clear first action or do not know where to start.

**Design response:** Stronger primary actions; separate primary, secondary, and advanced actions; reduce competing choices.

#### Too many decisions too early

**Problem:** Users must make structural or technical decisions before understanding the task.

**Design response:** Progressive disclosure; break flows into steps; reveal complexity at the right moment.

#### Inconsistent patterns across similar screens

**Problem:** Similar screens use different layouts, buttons, spacing, labels, or interaction models.

**Design response:** Reusable patterns, shared components, predictable behavior.

#### Weak visual hierarchy

**Problem:** Actions, status, metadata, and content share the same visual weight.

**Design response:** Typography, spacing, grouping, section headers, semantic color, contextual action placement.

#### Poor developer handoff

**Problem:** Design intent is visible in Figma but unclear for implementation.

**Design response:** Structured annotations, Figma comments, component references, state explanations, token guidance, AI-assisted implementation notes.

#### Missing empty, loading, error, and disabled states

**Problem:** Design covers only the happy path.

**Design response:** Define empty, loading, error, disabled, success, and confirmation states.

#### Complex data presentation

**Problem:** Dense tables, dashboards, reports, analytics, or multi-layered data.

**Design response:** Grouping, scanning, filtering, comparison, status indicators, progressive disclosure, row-level actions.

#### Unclear relationship between objects

**Problem:** Users cannot see how projects, reports, tasks, files, modules, users, or records relate.

**Design response:** Object hierarchy, breadcrumbs, contextual headers, metadata, linked records, persistent context indicators.

#### Repetitive manual work

**Problem:** Users repeat the same action across screens or modules.

**Design response:** Reusable flows, saved context, smarter defaults, templates, bulk actions, prefilled information.

#### Design system drift

**Problem:** Screens look similar but are not systematically built.

**Design response:** Core components, reusable tokens, shared layout rules, consistent states.

---

## 9. Workflow / Process Section

Each case study must include a clear, believable workflow. Adapt steps to the project; omit only what truly does not apply.

### Standard workflow (use when relevant)

1. **Understanding the source material**  
   Reviewed transcripts, requirements, existing Figma screens, product context, and stakeholder feedback.

2. **UX analysis**  
   Identified unclear flows, duplicated patterns, missing states, hierarchy issues, usability risks, and implementation ambiguity.

3. **Structure and flow definition**  
   Reorganized the experience into clearer screens, steps, entry points, decision points, and user paths.

4. **UI execution**  
   Designed the interface using existing core components and consistent visual rules.

5. **Design system alignment**  
   Checked spacing, typography, semantic colors, component usage, states, and token logic.

6. **AI-assisted dev collaboration**  
   Used AI to structure requirements, compare design intent against implementation logic, prepare Figma comments, and create clearer handoff notes.

7. **Validation**  
   Manually reviewed UX quality, UI consistency, edge cases, stakeholder requests, and implementation constraints.

The workflow must sound **real, practical, and senior-level** — not a generic double-diamond template copied without project specifics.

---

## 10. Design Decisions Section

Include **multiple** decision blocks per case study. Use this format consistently:

```markdown
### Decision
[What was changed — specific and observable.]

### Why
[UX or product reason — tied to user behavior, flow, or constraint.]

### Result
[Realistic product benefit — qualitative unless metrics are provided.]
```

**Example:**

**Decision:** Replaced scattered actions with a single contextual entry point.

**Why:** The previous flow forced users to understand product structure before completing the task.

**Result:** Reduced ambiguity and made the primary action easier to discover without restructuring the entire product.

Every decision block must connect to something visible in the work or clearly inferred from context.

---

## 11. Design System and Tokenization Section

Include a concise, high-level section on system thinking. Professional and clear — not overly technical.

**Cover when relevant:**

- Reusable components and shared patterns
- Tokenized spacing and typography hierarchy
- Semantic color usage and component states
- Layout consistency and design-to-code parity
- Avoiding raw one-off values
- Reducing design debt
- Improving developer handoff
- Scaling UI across similar screens

**Suggested tone:**

> The UI was structured around reusable core components and consistent design tokens. Instead of treating each screen as a separate visual composition, I approached the interface as a scalable product system — using shared spacing, typography, semantic colors, and interaction states to keep the experience consistent and easier to implement.

Tailor examples to the project (tables, forms, dashboards, admin shells, etc.).

---

## 12. AI-Assisted Design-to-Development Collaboration

Include in **every relevant case study**. AI is a **workflow amplifier**, not the designer.

**Explain AI was used to:**

- Review transcripts and stakeholder notes
- Structure messy requirements
- Compare requested changes against existing screens
- Prepare implementation notes
- Generate or refine Figma comments
- Support design-to-development translation
- Maintain context across iterations
- Explain component usage and constraints
- Reduce ambiguity in handoff
- Align Figma decisions with repository or implementation behavior where known

**Suggested wording:**

> I used AI as a bridge between design and development. After manually reviewing the requirements, screens, and product logic, I used AI to structure implementation notes, compare decisions against the repo, and prepare clearer comments for developers. This helped reduce ambiguity in handoff and kept design intent closer to the actual implementation.

**Never write** that AI made the design, generated the UI without human judgment, or replaced senior design ownership.

---

## 13. Developer Handoff Rules

Case studies must show that senior product design **does not stop at mockups**.

**Present collaboration through:**

- Component references and variant logic
- State definitions (empty, loading, error, disabled, success)
- Token usage (spacing, type, color semantics)
- Layout behavior (responsive rules, truncation, overflow)
- Edge cases and interaction rules
- Figma comments and structured implementation notes
- Design QA and iteration with engineering
- Repo or codebase awareness when relevant
- Clearer, lower-ambiguity communication with developers

Portfolio copy should demonstrate **implementation-aware** design choices, not only visual polish.

---

## 14. Visual Evidence and Screenshot Usage

Screenshots and visuals must **support the story**.

| Rule | Detail |
|------|--------|
| Covers | Use the strongest, clearest product moments |
| Decisions | Pair detailed screens with Decision / Why / Result |
| Process | Use flow diagrams, IA, or iteration evidence where available |
| Design system | Show components, tokens, or documentation when they prove scalability |
| Annotations | Add when they clarify hierarchy, flow, or handoff |
| Volume | Do not dump screens; curate |
| Quality | Do not use weak visuals just because they exist |
| Confidentiality | Anonymize sensitive data (see Section 20) |
| Live rebuild | Prefer portfolio components over poor flat images |

**Every visual must answer:**

1. What does this show?
2. Why is it important?
3. What UX decision does it support?
4. What does it prove about the work?

If an image cannot answer these four questions, remove it or replace it.

---

## 15. Outcome and Impact Rules

Every case study requires an **Outcome** section.

| Situation | Approach |
|-----------|----------|
| Exact metrics provided | Use them accurately with context |
| Metrics not provided | Use qualitative, defensible impact |

**Qualitative outcomes (examples):**

- Clearer flow and reduced ambiguity
- Stronger information hierarchy
- Improved design system consistency
- Better developer handoff and implementation path
- More scalable UI structure
- Easier future maintenance and module extension
- Improved stakeholder alignment
- Better support for repeated workflows

**Never invent numbers, percentages, or revenue claims.**

---

## 16. Reflection / Learnings Section

End each case study with a short **Reflection** — mature and honest, not self-promotional.

**Address:**

- What was difficult
- What trade-offs were made
- What improved meaningfully
- What could be improved next
- What the project demonstrates about design approach

Avoid hollow closing lines (“This was a rewarding project”). Prefer specific, forward-looking insight.

---

## 17. Page Types to Generate

The portfolio includes these page types. Use the same global UI system for all.

### Homepage

**Must include:**

- Strong intro headline
- Short positioning statement (Senior Product / UX/UI, complex products, systems, dev collaboration)
- Selected projects with project cards
- Skills / expertise section
- Workflow overview (high level)
- Contact CTA

### Case study page

Full structure per Sections 6–16, opening with the 60-Second Summary.

### About / profile section

**Establish experience in:**

- SaaS products, web and mobile applications
- Healthcare, fintech, enterprise tools
- Design systems, Figma, tokenization
- AI-assisted workflows and developer collaboration
- Implementation-aware product design

Tone: specific and credible, not generic biography filler.

### Workflow page or section

**General process (adapt to site IA):**

1. Understand product context  
2. Review requirements, transcripts, screens, and stakeholder feedback  
3. Map flows and UX issues  
4. Define structure and hierarchy  
5. Design with core components and tokens  
6. Validate against design system  
7. Use AI to improve documentation and dev handoff  
8. Review implementation logic and iterate  

---

## 18. Writing Style Rules

Write in **polished professional English**.

### Tone

- Senior, clear, practical, confident, honest  
- Product-focused and implementation-aware  
- Not overhyped, not generic, not academic  

### Avoid

- “I crafted delightful experiences”
- “Pixel-perfect magic”
- “Passionate designer”
- Empty buzzwords and fake metrics
- Long generic paragraphs
- Decorative language without substance

### Prefer

- Clear reasoning and concrete examples  
- Short paragraphs and strong section titles  
- Balance of user, business, and design concerns  
- Practical senior-level language  

### Rewrite generic → specific

| Weak | Strong |
|------|--------|
| “I redesigned the dashboard.” | “I restructured the dashboard around clearer information hierarchy, helping users understand status, priority, and next actions without scanning every section.” |
| “I created new cards.” | “I introduced a reusable card pattern to group related information consistently and make future modules easier to scale.” |
| “I improved the table.” | “I redesigned the table for scanning: key identifiers stayed visible, secondary metadata was reduced, and row-level actions became easier to discover.” |

---

## 19. Visual Style Rules

Portfolio visual direction:

- Clean, premium, minimal, spacious  
- Systematic and product-focused  
- High contrast where needed for clarity  
- Strong typography and clear hierarchy  
- Easy to scan; mature and professional  

**Principle:** UI supports content; it does not compete with it. No visual novelty that breaks the shared system.

---

## 20. Confidentiality Rules

When source material contains sensitive information:

- Do not expose confidential data in copy or visuals  
- Blur, crop, anonymize, or generalize as needed  
- Avoid private client identifiers, internal names, or unreleased features unless approved  
- Focus on process, structure, decisions, and system thinking when specifics cannot be shown  
- Do not invent confidential backstory or client context  

---

## 21. Missing Context Handling

When information is incomplete:

1. Make **careful professional assumptions** grounded in screens and product type.  
2. Label uncertainty with explicit inference language.  
3. Do not present assumptions as confirmed facts.

**Approved inference phrases:**

- “Based on the available screens…”
- “The interface suggests…”
- “This project can be framed around…”
- “The main UX challenge appears to be…”
- “The design approach likely focused on…”

If a claim cannot be supported by source material or reasonable inference from UI, **remove or soften it**.

---

## 22. No Fake Seniority Rule

Do not sound senior through vague buzzwords. **Every senior claim** must connect to at least one of:

- A real or visible UX problem  
- A specific design decision  
- A system-level improvement  
- A clearer product flow  
- A component or tokenization choice  
- A collaboration or handoff improvement  
- A practical implementation constraint  

**Test:** If a statement does not explain *what* changed, *why* it changed, or *how* it helped the product, rewrite it.

---

## 23. Portfolio Quality Checklist

Before finalizing any portfolio page or case study, verify:

- [ ] Clear UX problem is stated  
- [ ] My role is specific and obvious  
- [ ] Project context is understandable quickly  
- [ ] Workflow is believable and project-specific  
- [ ] Design decisions use Decision / Why / Result  
- [ ] Screenshots are evidence, not decoration  
- [ ] Global UI system is consistent  
- [ ] Design system / tokenization thinking is visible  
- [ ] AI/dev collaboration is included where relevant  
- [ ] Outcomes are realistic (no invented metrics)  
- [ ] No fake quotes, research, or validation claims  
- [ ] Writing is specific enough for a senior designer  
- [ ] 60-Second Summary delivers value alone  
- [ ] Portfolio feels like one coherent product  
- [ ] Confidentiality handled where needed  
- [ ] Inferences are labeled where context was missing  

**If any item fails, revise before publishing.**

---

## 24. Final Output Requirements

When executing this rule, the agent must be capable of producing:

| Deliverable | Requirement |
|-------------|-------------|
| Portfolio structure | Consistent IA and templates across pages |
| Reusable UI components | Same cards, badges, CTAs, headers, media frames |
| Case study templates | Full structure per Section 6 |
| Project cards | Strong cover visual, title, one-liner, tags |
| Case study writing | Senior-level, specific, honest |
| Cover sections | Best visual or rebuilt UI per project |
| Context extraction | Screenshot analysis per Section 5 |
| Workflow sections | Per Section 9 |
| UX narratives | Problem → response per Section 8 |
| Design decisions | Per Section 10 |
| Design system sections | Per Section 11 |
| AI/dev collaboration | Per Sections 12–13 |
| Outcomes and reflections | Per Sections 15–16 |
| Homepage | Per Section 17 |
| About / profile | Per Section 17 |
| Quality gate | Checklist per Section 23 |

Output format (unless otherwise specified): **Markdown** for content; implementation in code should map to existing portfolio components and tokens.

---

## 25. Final Portfolio Direction

**Build around the strongest stories, not screenshot count.**

The portfolio must communicate:

| Message | How it is shown |
|---------|------------------|
| I understand complex products | Context, challenges, domain-aware UX |
| I can simplify workflows | Flow structure, progressive disclosure, clearer entry points |
| I design with systems, not isolated screens | Design system sections, tokens, reusable patterns |
| I work close to developers | Handoff, states, components, implementation notes |
| I use AI intelligently | Workflow acceleration, not replacement of design judgment |
| I explain decisions like a senior designer | Decision blocks, rationale, honest outcomes |

Every page, case study, screenshot, section, and UI component should reinforce that positioning.

---

*End of rule — `ux-ui-portfolio-creation-rule.md`*
