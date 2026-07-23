# Purpose of This Task List

This document converts `docs/08-implementation-plan.md` into assignable, reviewable, and maintainable work items for building, validating, publishing, and maintaining nattapong.dev.

It is not production code, an implementation specification, a replacement for the implementation plan, a final repository map, a release schedule, a time estimate, or `AGENTS.md`. Each task should be executed through a separate authorized prompt or work session where practical. The execution prompt supplies final file scope, available evidence, and any decisions required for that task.

# Task-List Authority

Tasks derive from `reference/design-dna.md`, documents `00` through `08`, the personal/project/learning inventories, and future authorized repository, deployment, test, measurement, research, and user evidence.

This list may organize and sequence work but cannot override governing specifications or stronger direct evidence. If a task conflicts with upstream authority, stop, report the conflict, and update the task only after the governing decision is resolved.

# How to Use This Document

- Select one bounded task at a time where practical.
- Read the task's required sources and applicable local instructions.
- Confirm authorized files and systems before mutation.
- Confirm blockers, dependencies, and decision gates.
- Preserve unrelated and user-owned work.
- Complete applicable validation before marking a task Done.
- Report changed files, validation performed, and checks not performed.
- Update status and retain relevant history rather than deleting records.
- Create or split tasks only when approved scope, evidence, a discovered blocker, or maintenance need justifies it.

A task ID remains stable after creation, including after completion, cancellation, splitting, or wording refinement.

# Task Status Model

- **Now:** Approved immediate direction with enough readiness to seek or execute its separate authorization.
- **Next:** Expected after named current dependencies pass.
- **Later:** Valid planned work not yet ready for execution.
- **Blocked:** Cannot proceed until a named decision, authorization, artifact, or verification exists.
- **Deferred:** Deliberately outside current scope until demonstrated need exists.
- **Done:** Completed and validated; retained for history.
- **Cancelled:** No longer required; reason retained.

Every status change should record its reason when the dependency or outcome is not obvious. No status carries a date or estimate.

# Priority Model

- **P0 — Integrity or safety:** Prevents data loss, secret exposure, unsupported publication, or a blocking accessibility failure.
- **P1 — Current delivery path:** Required for the current coherent implementation path.
- **P2 — Planned expansion:** Valuable after the current path is stable.
- **P3 — Optional:** Requires demonstrated value before entering delivery scope.

Priority does not override dependencies, authorization, evidence, or the source-of-truth hierarchy.

# Task Identification

- `GOV` — Governance and agent instructions
- `AUD` — Repository and evidence audit
- `DEC` — Decision gates and records
- `CON` — Content and editorial readiness
- `PRJ` — Project verification and experiences
- `RES` — Research Preparation
- `LRN` — Learning, notes, experiments, and coursework
- `FND` — Content, visual, and technical foundations
- `NAV` — Navigation and direct-entry behavior
- `VRT` — First vertical experience
- `CMP` — Shared components
- `EVD` — Technical evidence systems
- `STA` — States and resilience
- `MOT` — Motion and optional enhancement
- `RWD` — Responsive and bilingual validation
- `A11Y` — Accessibility
- `PERF` — Performance
- `PRV` — Privacy and security
- `QA` — Quality and documentation
- `REL` — Deployment and release
- `OPS` — Post-release and maintenance

Identifiers use a stable sequential form such as `AUD-01`. Decorative or speculative work does not receive an actionable ID.

# Task Record Format

Every actionable task contains:

- **ID and title, Status, Priority**
- **Source:** Governing phase and documents.
- **Objective and why now:** One bounded outcome and its current justification.
- **Required reading:** Minimum authority and evidence needed.
- **Authorized files or systems:** Exact scope from the execution prompt; unknown paths use “Requires Phase 0 repository audit.”
- **Inputs:** Decisions, content, artifacts, and verification required.
- **Boundaries:** Included responsibility and explicit exclusions.
- **Deliverables:** Reviewable outputs.
- **Acceptance and validation:** What must be true and how it is checked.
- **Dependencies, gates, and blockers**
- **Prohibited work**
- **Documentation impact**
- **Completion report:** Changed files, checks performed/not performed, unresolved issues, and follow-ups.

Unknown implementation scope must say “Authorized files to be specified in the execution prompt” and “No implementation mutation until workspace state is confirmed.”

# Global Execution Rules

- Stay within the selected task and edit only authorized files.
- Do not perform unrelated cleanup or overwrite user-owned work.
- Do not invent facts, content, evidence, paths, behavior, or results.
- Preserve To be verified, Unknown, Self-reported, and Not implemented states.
- Do not resolve open decisions or add dependencies silently.
- Verify applicable changes and preserve accessibility and content integrity.
- Report changed files and checks not performed.
- Stop and report when a blocker prevents safe progress.

`docs/07-project-rules.md` remains the full operational authority.

# Current Focus

The operational governance instructions, local audit scope, workspace audit, recoverable Git baseline, DEC-01 stack/rendering decision, DEC-02 content direction, CON-01 public-profile verification, PRJ-01/PRJ-02 commit-scoped static project audits, GOV-04/GOV-05 project-governance synchronizations, and CON-02's bounded internal representative content/evidence set are complete. Both major projects have synchronized static evidence, and representative English, Thai, and mixed-language material now exists for internal comparison. No sample is approved final public copy, no artifact is approved for publication, and no implementation decision is resolved.

The next preparation candidates are:

1. Prepare `DEC-03 — Decide theme and asset-handling direction` when representative bilingual content and artifacts are sufficient.
2. Prepare `DEC-04 — Decide testing, quality, and supported-environment approach` when its evidence and decision-owner scope are ready.
3. Prepare `DEC-05 — Decide deployment, analytics, and privacy direction` without deploying or selecting unneeded services.
4. Prepare a separately authorized Booking API runtime-evidence scope only after the historical environment-file risk and safe test resources are addressed.

These are candidates, not silently activated tasks. Final public wording, exact collection/schema design, public-ready artifacts, package-manager choice, testing, routes/navigation, deployment, and the first vertical path remain unresolved. CourtFit build, provider compatibility, operational privacy, browser/accessibility behavior, artifacts, deployment, and publication remain unresolved. Booking API build, test, migration, runtime, authorization, concurrency, Redis, container, deployment, secret-history, redaction, and publication questions also remain unresolved. FND-01, FND-02, NAV-01, VRT tasks, component/page work, and motion must remain inactive until their documented dependencies, decisions, evidence, and separate authorizations pass.

# Now — Immediate Tasks

The Now queue is empty. Completing DEC-01, DEC-02, CON-01, CON-02's internal representative-set scope, the static scopes of PRJ-01 and PRJ-02, and governance synchronizations GOV-04 and GOV-05 does not authorize implementation, runtime verification, publication, or automatic promotion of any Next task.

# Next — Decision and Evidence Tasks

These tasks follow the immediate queue or require additional evidence and authorization.

## Decision Gates

**DEC-03 — Decide theme and asset-handling direction**  
**Status:** Next · **Priority:** P1

- **Source:** Phase 1; Design system, layout, accessibility, performance.
- **Objective / why now:** Establish only the visual/asset decisions blocking the foundation.
- **Reading:** Design system, layout, real bilingual content and representative artifacts.
- **Authorization:** Prototype/decision files specified later.
- **Inputs:** Theme tests, project screenshots, code/diagram needs, asset and performance constraints.
- **Boundaries:** Decide theme strategy and asset handling; do not select final fonts, values, motifs, or project themes without separate evidence.
- **Deliverable:** Decision record with parity, fallback, cost, and reversibility.
- **Acceptance / validation:** Supported themes preserve contrast, evidence, focus, and identity; asset path supports responsive alternatives.
- **Dependencies / blockers:** Real samples; DEC-01 where tooling matters.
- **Prohibited:** Dark theme by convention or copied palette.
- **Documentation / report:** Update authorized design decisions and open questions.

**DEC-04 — Decide testing, quality, and supported-environment approach**  
**Status:** Next · **Priority:** P1

- **Source:** Phases 1, 14–17; Project Testing and Accessibility rules.
- **Objective / why now:** Establish applicable checks before foundation implementation expands.
- **Reading:** Project rules, implementation plan, audit capabilities, accessibility/responsive requirements.
- **Authorization:** Decision/config files only when separately authorized.
- **Inputs:** Existing tools, stack decision, target content and interaction risks.
- **Boundaries:** Define categories and support policy; do not select extra tools without justified need.
- **Deliverable:** Quality/test/support decision record with local and future CI implications.
- **Acceptance / validation:** Covers bilingual, long content, keyboard, reflow, states, and real artifacts.
- **Dependencies / blockers:** AUD-02 findings and DEC-01.
- **Prohibited:** Treating tool presence as passing validation.
- **Documentation / report:** Record omitted categories and future gates.

**DEC-05 — Decide deployment, analytics, and privacy direction**  
**Status:** Next · **Priority:** P1

- **Source:** Phases 1, 16, and 18; Privacy, Performance, and Dependency rules.
- **Objective / why now:** Define operational direction before release-sensitive architecture is fixed.
- **Reading:** Project rules, audit, implementation plan, public-content/privacy needs.
- **Authorization:** Decision records only; no deployment in this task.
- **Inputs:** Approved stack, domain needs, third-party/privacy consequences, maintenance and recovery needs.
- **Boundaries:** Decide direction and whether analytics is needed; do not select extras by default.
- **Deliverable:** Deployment/analytics/privacy decision records with reversibility and consent implications.
- **Acceptance / validation:** No private data or unsupported operational claim is required.
- **Dependencies / blockers:** AUD-02 findings, DEC-01, and a decision owner.
- **Prohibited:** Deploying, enabling tracking, or choosing provider from familiarity alone.
- **Documentation / report:** Record authorized decisions and deferred operations.

# Next — Foundation and First Vertical Experience

All tasks here remain dependent on audit, blocking decisions, and content readiness.

## Content Foundation

**FND-01 — Implement and validate the semantic content foundation**  
**Status:** Blocked · **Priority:** P1

- **Source:** Phase 3; content/component rules.
- **Objective / why now:** Represent approved content semantics before repeated page construction.
- **Reading:** DEC-01/DEC-02, content/component specs, CON-02 samples.
- **Authorization:** Requires Phase 0 audit; files specified in execution prompt.
- **Inputs:** Approved storage direction and real samples from both projects, Research Preparation, and one non-project item.
- **Boundaries:** Preserve classification, status, maturity, verification, limitations, contribution, dates, visibility, relationships, bilingual content, missing/archived/incomplete fields, and internal/public separation.
- **Deliverable:** Implementation-compatible model and validated examples; no final CMS/schema invented here.
- **Acceptance / validation:** Components cannot infer claims; missing fields remain honest; examples validate without fake data.
- **Dependencies / blockers:** DEC-01, DEC-02, CON-02. No mutation before audit.
- **Prohibited:** General publishing platform or speculative taxonomy.
- **Documentation / report:** Changed files, validation, schema decisions, unresolved gaps.

## Visual and Technical Foundation

**FND-02 — Implement the smallest shared visual and technical foundation**  
**Status:** Blocked · **Priority:** P1

- **Source:** Phase 4; design-system and accessibility rules.
- **Objective / why now:** Create semantic reading and control foundations for real content.
- **Reading:** Design system, layout, component, motion specs; DEC-01/03/04; CON-02.
- **Authorization:** Requires audit; files specified in execution prompt.
- **Inputs:** Approved stack/theme/assets/quality direction and bilingual samples.
- **Boundaries:** Semantic structure, typography roles after decision, color/surface roles, spacing, borders/radius/elevation, focus, links/controls, artifact reading, reduced motion, responsive foundation. No full component library.
- **Deliverable:** Minimal foundation demonstrated with real long bilingual prose, metadata, code, terminal content, and controls.
- **Acceptance / validation:** Keyboard focus, reflow, mixed language, contrast relationships, long content, and reduced motion work.
- **Dependencies / blockers:** AUD, DEC-01/03/04, FND-01.
- **Prohibited:** Copied motif, arbitrary values, decorative tech styling.
- **Documentation / report:** Decisions established, files, checks, and deferred roles.

## Navigation and Direct Entry

**NAV-01 — Implement global orientation and direct-entry behavior**  
**Status:** Blocked · **Priority:** P1

- **Source:** Phase 5; layout/component/accessibility specs.
- **Objective / why now:** Provide identity, landmarks, skip access, current/parent context, and reliable history before the vertical path.
- **Reading:** Layout, components, project rules, approved navigation decision and content structure.
- **Authorization:** Requires audit; exact files/routes/labels set in execution prompt.
- **Inputs:** Approved information/navigation gate and initial content destinations.
- **Boundaries:** Site identity, landmarks, skip link, global/mobile behavior if justified, footer, current location, parent context, direct entry, deep links, back/forward, keyboard/focus. Validate statically first.
- **Deliverable:** Shared orientation shell.
- **Acceptance / validation:** Works without motion across narrow layouts, direct links, keyboard, and browser history.
- **Dependencies / blockers:** FND-01/FND-02 and navigation decision.
- **Prohibited:** Inventing final labels/routes, mega menus, or page transitions.
- **Documentation / report:** Changed files, destinations tested, unresolved sitemap issues.

## First Vertical Experience

**VRT-01 — Select the first vertical content path**  
**Status:** Blocked · **Priority:** P1

- **Source:** Phase 6; validation gates.
- **Objective / why now:** Choose a real path complex enough to expose system weaknesses before broad implementation.
- **Reading:** CON-02, FND decisions, implementation plan, layout/content/component specs.
- **Authorization:** Decision record only.
- **Inputs:** Candidate content/evidence readiness and audience value.
- **Boundaries:** Compare candidates against metadata, evidence, limitations, bilingual, responsive, access, optional fields, and failure needs. Do not implement.
- **Deliverable:** Selection record, scope, required content, blockers, and acceptance cases.
- **Acceptance / validation:** Choice is evidence-based and does not imply final homepage prominence.
- **Dependencies / blockers:** CON-02, FND-01 direction, content readiness gate.
- **Prohibited:** Selecting from visual polish alone.
- **Documentation / report:** Decision target and downstream task updates.

**VRT-02 — Implement and validate the first static vertical experience**  
**Status:** Blocked · **Priority:** P1

- **Source:** Phase 6; VRT-01.
- **Objective / why now:** Validate the full content-to-presentation path before expansion.
- **Reading:** All governing specs relevant to the selected path and VRT-01 scope.
- **Authorization:** Requires audit; exact files specified in execution prompt.
- **Inputs:** Approved content, foundation, navigation, artifacts, and acceptance cases.
- **Boundaries:** Implement one static path with introduction, hierarchy, metadata, status/maturity/verification, limitation, evidence, relationships, responsive/bilingual/access behavior, and applicable unavailable/error states.
- **Deliverable:** End-to-end representative experience and review findings.
- **Acceptance / validation:** Direct entry, long reading, claim/evidence proximity, missing fields, keyboard, focus, touch, reflow, privacy, and optional failure pass.
- **Dependencies / blockers:** FND-01/FND-02, NAV-01, VRT-01.
- **Prohibited:** Broad page-family buildout or motion before static acceptance.
- **Documentation / report:** Changed files, checks, discovered structural problems, and authorized decision updates.

# Later — Shared System Expansion

**CMP-01 — Extract and document recurring shared components**  
**Status:** Later · **Priority:** P2

- **Source:** Phase 7; component specification.
- **Objective / why now:** Reuse only responsibilities demonstrated by VRT-02 and confirmed upcoming content.
- **Reading:** VRT review, component/design-system specs, real variants.
- **Authorization:** Files set after audit and vertical review.
- **Inputs:** At least two real uses per abstraction or a strong accessibility/state responsibility.
- **Boundaries:** Metadata, status/maturity/verification, figures/captions, callouts, disclosures, related content, documentation, and realistic tests as recurring need proves.
- **Deliverable:** Lean components with contracts, states, bilingual/responsive/access behavior, misuse notes.
- **Acceptance / validation:** No universal card, boolean explosion, or page-specific duplicate without reason.
- **Dependencies / blockers:** VRT-02 Done.
- **Prohibited:** Full speculative inventory.
- **Documentation / report:** Components added/removed, evidence of recurrence, test coverage.

**EVD-01 — Implement recurring technical-evidence components**  
**Status:** Later · **Priority:** P2

- **Source:** Phases 7 and 11; evidence specifications.
- **Objective / why now:** Standardize only real evidence needs across projects/content.
- **Reading:** Verified artifacts, evidence/content/component/design specs.
- **Authorization:** Files specified later.
- **Inputs:** Real code, terminal, API, figure, diagram, table, or comparison artifacts.
- **Boundaries:** Evidence frames, source/verification/captions, code/terminal/API, diagrams, tables/comparisons, responsive alternatives, redaction.
- **Deliverable:** Artifact treatments validated with real evidence.
- **Acceptance / validation:** Evidence remains readable, sourced, accessible, contextual, and nondecorative.
- **Dependencies / blockers:** VRT-02; PRJ evidence where project-specific.
- **Prohibited:** Invented diagrams, benchmarks, terminal output, or library choice without gate.
- **Documentation / report:** Artifacts tested, redactions, limitations, changed files.

**STA-01 — Implement shared resilience and content states**  
**Status:** Later · **Priority:** P1

- **Source:** Phase 12; state rules.
- **Objective / why now:** Make confirmed components/pages honest under nonideal conditions.
- **Reading:** Component, content, layout, accessibility rules and real state needs.
- **Authorization:** Files specified later.
- **Inputs:** Applicable Loading, Empty, Error, Success, Warning, Incomplete, To be verified, Unknown, Not implemented, Unavailable, Archived, broken media, and enhancement failure cases.
- **Boundaries:** Implement only states relevant to existing scope with stable layout, announcements, and recovery.
- **Deliverable:** State coverage matrix and implementations.
- **Acceptance / validation:** No fake loading/success or color-only meaning; core context survives failure.
- **Dependencies / blockers:** VRT-02 and relevant components.
- **Prohibited:** Placeholder features disguised as states.
- **Documentation / report:** State scenarios, checks, missing recovery paths.

# Later — Major Project Experiences

## Rust Booking API

**PRJ-03 — Implement and review the Rust Booking API experience**  
**Status:** Later · **Priority:** P1

- **Source:** Phase 8; Booking project/content/rules.
- **Objective / why now:** Publish a verified, honest Major Project experience after shared foundations exist.
- **Reading:** PRJ-01 evidence; relevant specs/rules.
- **Authorization:** Project content and implementation files specified later.
- **Inputs:** PRJ-01's commit-scoped six-route source evidence, individual-project context, educational/non-production-ready maturity, partial registration/login/JWT coverage, source-level ownership checks, PostgreSQL integration, Redis availability-cache role and inconsistencies, seven unexecuted tests, concurrency limitations, historical environment-file risk, and unverified deployment state.
- **Boundaries:** Introduction, capabilities, metadata, API/repository evidence, limitations, test/deployment status, responsive/access/privacy behavior.
- **Deliverable:** Project experience with evidence and direct-entry context.
- **Acceptance / validation:** Static source claims remain tied to PRJ-01's audited commit; no build, passing-test, runtime, security, concurrency, cache-correctness, or deployment claim appears without separate evidence; limitations remain prominent.
- **Dependencies / blockers:** PRJ-01 static evidence, unresolved runtime/secret-history/publication blockers, FND/NAV/VRT, and CMP/EVD as needed.
- **Prohibited:** Production, scale, security, or conflict-correctness claims without evidence.
- **Documentation / report:** Claims published, sources, tests, changed files, unresolved items.

## CourtFit

**PRJ-04 — Implement and review the CourtFit experience**  
**Status:** Later · **Priority:** P1

- **Source:** Phase 8; CourtFit project/content/rules.
- **Objective / why now:** Publish a verified educational/experimental Major Project experience on the shared foundation.
- **Reading:** PRJ-02 evidence; relevant specs/rules.
- **Authorization:** Project content and implementation files specified later.
- **Inputs:** PRJ-02's commit-scoped one-page/one-route source evidence, browser → CourtFit server → provider key path, full-history behavior, buffered provider-stream consumption, source-level Stop/Retry/switching evidence, bilingual/responsive/dark source patterns, absent catalog/commerce/test/deployment evidence, and privacy/runtime limitations.
- **Boundaries:** Introduction, role, source evidence, qualified API-key explanation, recommendation limits, repository/deployment destinations, access/responsive/privacy behavior, mobile action limitation, and plain-text message rendering.
- **Deliverable:** Distinct CourtFit composition sharing common semantics and navigation.
- **Acceptance / validation:** No database/price/stock/spec/auth/checkout/history/accuracy overclaim; key and live-link language matches PRJ-02.
- **Dependencies / blockers:** PRJ-02 static evidence is Done; its runtime/privacy/artifact blockers remain separate. FND/NAV/VRT and CMP/EVD are required as needed.
- **Prohibited:** Security, compatibility, professional-advice, or commercial claims.
- **Documentation / report:** Published claims, privacy checks, artifacts, changed files, unresolved items.

# Later — Research and Other Content Families

## Research Preparation

**RES-01 — Implement Research Preparation experience**  
**Status:** Later · **Priority:** P1

- **Source:** Phase 9; content/layout/research component rules.
- **Objective / why now:** Support the current research direction without false completion.
- **Reading:** Verified research preparation records and relevant specs.
- **Authorization:** Content/implementation scope set later.
- **Inputs:** Real exploration areas, candidate problems, paper reviews, source findings, interpretations, criteria, constraints, hardware if verified, open questions.
- **Boundaries:** Distinguish source/interpretation/hypothesis/evidence and show next investigation/current decision.
- **Deliverable:** Research Preparation path with visible no-final-topic state.
- **Acceptance / validation:** No completed research, selected topic, hardware, or finding is inferred.
- **Dependencies / blockers:** Real research sources, FND/NAV/VRT; content-family decision.
- **Prohibited:** Scientific decoration used as evidence.
- **Documentation / report:** Sources, uncertainty, changed files, open questions.

## Learning Progress

**LRN-01 — Implement curated Learning Progress foundation**  
**Status:** Later · **Priority:** P2

- **Source:** Phase 10; learning inventory/specification.
- **Objective / why now:** Show meaningful change in understanding after representative entries exist.
- **Reading:** Learning inventory, content/layout/component rules.
- **Authorization:** Selected content/implementation files later.
- **Inputs:** Starting point, exercises, mistakes, changed understanding, current level, gaps, connections, revisions, evidence.
- **Boundaries:** Curated milestones and relationships; retain guided/independent context.
- **Deliverable:** One or more representative learning paths.
- **Acceptance / validation:** No skill bars, percentages, streaks, raw feed, or mastery claim.
- **Dependencies / blockers:** CON-02, FND/VRT, selected entries.
- **Prohibited:** Every exercise as a standalone card.
- **Documentation / report:** Entries used, evidence, revisions, changed files.

## Technical Notes

**LRN-02 — Implement Technical Note reading experience**  
**Status:** Later · **Priority:** P2

- **Source:** Phase 10; note/content/layout rules.
- **Objective / why now:** Support bounded explanations once public-ready notes exist.
- **Reading:** Note requirements and selected source material.
- **Authorization:** Files specified later.
- **Inputs:** Scope, audience, prerequisites, explanation, examples, caveats, references, verification, review date, revisions.
- **Boundaries:** Long reading and artifacts; not a project landing page.
- **Deliverable:** Direct-entry note experience with references and revision context.
- **Acceptance / validation:** Incomplete knowledge is scoped; examples verified; bilingual/long reading works.
- **Dependencies / blockers:** At least one ready note, foundation/navigation.
- **Prohibited:** Authoritative tone without evidence or filler notes.
- **Documentation / report:** Sources, verification, review date, changed files.

## Experiments

**LRN-03 — Implement Experiment content pattern**  
**Status:** Later · **Priority:** P2

- **Source:** Phase 10; experiment/content/layout rules.
- **Objective / why now:** Present focused tests without overstating conclusions.
- **Reading:** Experiment requirements and real experiment record.
- **Authorization:** Files specified later.
- **Inputs:** Question, setup, conditions, procedure, observation, result, interpretation, limitations, nonconclusions, next step, evidence.
- **Boundaries:** Keep result and limitations close; support responsive evidence.
- **Deliverable:** One validated experiment experience.
- **Acceptance / validation:** Conditions and conclusion bounds are explicit.
- **Dependencies / blockers:** Real completed experiment and evidence.
- **Prohibited:** Generalizing single observations or fabricating results.
- **Documentation / report:** Conditions, evidence, changed files, unresolved questions.

## Coursework

**LRN-04 — Implement selected Coursework treatment**  
**Status:** Later · **Priority:** P2

- **Source:** Phase 10; coursework/content rules.
- **Objective / why now:** Connect selected academic evidence to current direction without implying professional work.
- **Reading:** Learning inventory, coursework requirements, approved assignment material.
- **Authorization:** Files and publication rights specified later.
- **Inputs:** Academic context, constraints, role/contribution, provided material, result, evidence, learning outcome, relationship.
- **Boundaries:** A small curated set; clear academic labels.
- **Deliverable:** Representative coursework content treatment.
- **Acceptance / validation:** Individual/group role and guidance are explicit; publication is permitted.
- **Dependencies / blockers:** Selected evidence and privacy/rights review.
- **Prohibited:** Course-list filler or assignments presented as Major Projects.
- **Documentation / report:** Evidence, attribution, changed files, exclusions.

# Later — Validation, Release, and Maintenance

## Responsive and Bilingual Validation

**RWD-01 — Validate responsive and bilingual behavior across release scope**  
**Status:** Later · **Priority:** P1

- **Source:** Phase 14; responsive/layout rules.
- **Objective / why now:** Systematically validate after representative pages/components exist.
- **Reading:** Responsive requirements and release scope.
- **Authorization:** Release implementation/test systems specified later.
- **Inputs:** Long Thai/English/mixed content, metadata, navigation, code, terminal, tables, diagrams, touch/zoom/orientation cases.
- **Boundaries:** Reflow, regroup, substitute, or contain; no unrelated redesign.
- **Deliverable:** Findings and corrected behavior.
- **Acceptance / validation:** No unreadably shrunk desktop evidence; semantic/focus order remains correct; optional-media failure works.
- **Dependencies / blockers:** Representative scope complete.
- **Prohibited:** Testing only ideal short English content.
- **Documentation / report:** Cases, fixes, unresolved limitations, files.

## Accessibility Validation

**A11Y-01 — Complete accessibility validation and blocker remediation**  
**Status:** Later · **Priority:** P0

- **Source:** Phase 15; all accessibility requirements.
- **Objective / why now:** Gate release after the coherent scope exists while accessibility has been integrated throughout.
- **Reading:** Accessibility rules, component/motion contracts, release scope.
- **Authorization:** Implementation and chosen test systems specified later.
- **Inputs:** Landmarks, headings, keyboard, focus, names, states, color, tables, figures, diagrams, forms/media if present, motion, zoom/reflow, touch, direct entry.
- **Boundaries:** Validate and remediate blockers; tools/thresholds require DEC-04.
- **Deliverable:** Findings, blocker fixes, residual limitations.
- **Acceptance / validation:** No known blocking access barrier remains.
- **Dependencies / blockers:** Representative release; DEC-04.
- **Prohibited:** Deferring known blockers to post-release.
- **Documentation / report:** Methods, cases, fixes, omitted checks, files.

## Motion and Optional Enhancement

**MOT-01 — Add only demonstrated motion and optional enhancement**  
**Status:** Later · **Priority:** P3

- **Source:** Phase 13; animation/component rules.
- **Objective / why now:** Improve verified feedback or explanation only after static behavior is stable.
- **Reading:** Motion specification, real interaction need, accessibility/performance constraints.
- **Authorization:** Files specified later; library gate separate.
- **Inputs:** Demonstrated local feedback, disclosure, mobile nav, media, or verified technical sequence need.
- **Boundaries:** Static baseline, reduced-motion equivalent, interruption/fallback, real evidence.
- **Deliverable:** Minimal semantic motion implementation and tests.
- **Acceptance / validation:** Meaning survives without motion; cost is justified; user control exists where needed.
- **Dependencies / blockers:** Static acceptance, verified behavior, accessibility/performance baseline.
- **Prohibited:** Routine reveals, ambient motion, polish-only animation, unverified sequences.
- **Documentation / report:** Purpose, mappings, checks, files, removed motion.

## Performance, Privacy, and Security

**PERF-01 — Review performance and progressive enhancement**  
**Status:** Later · **Priority:** P1

- **Source:** Phase 16; performance rules.
- **Objective / why now:** Confirm core content and interaction remain efficient and resilient.
- **Reading:** Performance rules, decided stack/assets, release scope.
- **Authorization:** Test systems specified later.
- **Inputs:** Images/media/fonts/client behavior/embeds/third parties/failure cases.
- **Boundaries:** Observe and remediate applicable cost; numeric budgets require a gate.
- **Deliverable:** Findings, asset/behavior decisions, fallback validation.
- **Acceptance / validation:** Core content works without optional scripts; cost aligns with value.
- **Dependencies / blockers:** Representative release and chosen measurement approach.
- **Prohibited:** Unsupported performance claims.
- **Documentation / report:** Observations, changes, omitted measures, files.

**PRV-01 — Complete privacy, secrets, and public-readiness review**  
**Status:** Later · **Priority:** P0

- **Source:** Phase 16; Privacy/Security rules.
- **Objective / why now:** Prevent secret or personal-data exposure before release.
- **Reading:** Privacy rules, PRJ verification, deployment/analytics decisions.
- **Authorization:** Repository/config/media/network/public-content scope specified later.
- **Inputs:** Keys, environment files, logs, screenshots, test data, contact info, third-party requests, analytics/consent.
- **Boundaries:** Review/redact/withdraw; do not disclose secret values in reports.
- **Deliverable:** Public-readiness record and blocker remediation.
- **Acceptance / validation:** No secret, real user data, private location, or unapproved contact is exposed; CourtFit key claims match evidence.
- **Dependencies / blockers:** PRJ-02 and release candidate.
- **Prohibited:** Security claims based on absence of observed failure.
- **Documentation / report:** Redacted findings, fixes, approvals, files.

## Quality Gate

**QA-01 — Run release quality and documentation gate**  
**Status:** Later · **Priority:** P0

- **Source:** Phase 17; Definition of Done and Review rules.
- **Objective / why now:** Confirm implementation, content, evidence, documentation, and scope are release-ready.
- **Reading:** Project rules, acceptance criteria, DEC-04, release scope.
- **Authorization:** Approved checks and files.
- **Inputs:** Build/type/lint/render checks as applicable, real/long/bilingual content, keyboard/focus, responsive/reflow, motion, states, theme parity, evidence, privacy, docs, diff.
- **Boundaries:** Run applicable checks; document omissions and consequences.
- **Deliverable:** Quality record, resolved blockers, file list, open-issue list.
- **Acceptance / validation:** No mandatory-rule blocker or hidden omitted check.
- **Dependencies / blockers:** RWD-01, A11Y-01, PERF-01, PRV-01 and release scope.
- **Prohibited:** Marking release-ready from visual inspection alone.
- **Documentation / report:** Full check/result summary and changed files.

## Deployment and Release

**REL-01 — Prepare, deploy, and validate an approved release**  
**Status:** Later · **Priority:** P1

- **Source:** Phases 18–19; DEC-05 and release rules.
- **Objective / why now:** Publish only after quality, privacy, and deployment gates pass.
- **Reading:** Deployment decision, quality record, release scope and limitations.
- **Authorization:** Deployment target and commands explicitly authorized.
- **Inputs:** Build/environment/domain/public destinations/metadata/fallback/contact/recovery configuration.
- **Boundaries:** Confirm and deploy approved scope; record release, verification date, and known limitations; validate navigation, links, media, responsive/access behavior, contacts, third-party requests, and source consistency.
- **Deliverable:** Public release and post-release validation record.
- **Acceptance / validation:** Critical failures resolved or affected content withdrawn; deployment is not called production-validated without evidence.
- **Dependencies / blockers:** DEC-05 and QA-01 Done.
- **Prohibited:** Provider selection inside execution, secret exposure, or hidden observed defects.
- **Documentation / report:** Release state, observed issues, files/config changed, rollback/recovery result.

## Post-Release and Maintenance

**OPS-01 — Establish and perform sustainable maintenance reviews**  
**Status:** Later · **Priority:** P2

- **Source:** Phase 20; maintenance/documentation rules.
- **Objective / why now:** Keep a one-person personal engineering website accurate after release.
- **Reading:** Maintenance rules, release record, content verification history.
- **Authorization:** Each maintenance session defines scope.
- **Inputs:** Public navigation/links/media/contact, project/research/learning changes, dependencies, access/performance/privacy observations, docs/rules.
- **Boundaries:** Review and correct verified needs; preserve history; no invented schedule.
- **Deliverable:** Dated maintenance findings, updates, archive/correction decisions, and follow-up tasks.
- **Acceptance / validation:** Status, maturity, limitations, links, evidence, and docs reflect current truth; regressions are handled.
- **Dependencies / blockers:** REL-01.
- **Prohibited:** Silent historical rewrite or broad redesign during routine maintenance.
- **Documentation / report:** Changes, checks, verification renewal, deferred issues.

# Blocked Tasks

The active workspace, local read-only scope, audited scaffold state, and recoverable Git baseline are resolved through AUD-01, AUD-02, and GOV-02. AUD-03 is not an unresolved prerequisite because its current-scope questions were answered by AUD-02.

The stack/rendering blocker is resolved through approved DEC-01: Astro is the framework, static HTML is the default, and client JavaScript is limited to separately justified local islands. This resolution does not authorize implementation or resolve the remaining gates.

The content-storage, authoring, internal/public-separation, and bilingual-direction blocker is resolved through approved DEC-02: repository-local Astro build-time content collections use the current Content Layer API; plain Markdown is the default long-form format; structural, referential-integrity, and project-specific semantic validation remain distinct responsibilities; public-ready content uses a separate allowlisted source; and translations are optional, explicit siblings. This resolution does not authorize collection, schema, content, route, or page implementation.

The general public-profile confirmation blocker is resolved through CON-01. The internal record confirms approved public fields while preserving the Thai name, LinkedIn, Facebook, contact-purpose statement, precise location, phone number, private accounts, credentials, university identifiers, and private documents within their recorded restrictions. External account behavior and ownership remain unverified.

The Booking API static repository-evidence question is resolved only for audited branch `main` at commit `d2f754fdd2fd5581ecca9f9e16539504020f6361` through PRJ-01. The audit verified source and configuration facts and corrected internal records; it did not resolve build, test, migration, runtime, security, concurrency, Redis correctness, container, deployment, secret-history, artifact-redaction, or publication questions.

The CourtFit static repository-evidence and source privacy-boundary questions are resolved only for audited branch `main` at commit `3c9cc65d00622731b4a381ddb785edc3713f8c46` through PRJ-02. The audit established one page route and one POST API route; browser → CourtFit server → selected provider key flow; full non-empty retained-history transmission each turn; server-buffered provider streams with one assembled browser event; source-level Stop, Retry, and provider-switching paths; absent structured catalog/commerce and automated tests; partial disclaimer and responsive/dark source evidence; and documentation-only Vercel context. It did not resolve build, provider compatibility, operational key/privacy controls, runtime behavior, incremental streaming, cancellation, retry, mobile correctness, browser/accessibility behavior, recommendation quality, artifacts, deployment, or publication.

The stale CourtFit-governance inconsistency is resolved through GOV-05: `AGENTS.md`, `docs/07-project-rules.md`, and `docs/08-implementation-plan.md` now use the committed PRJ-02 evidence and preserve its runtime, provider, privacy, mobile, accessibility, Markdown, recommendation, testing, artifact, deployment, licensing, author-email, and publication blockers. This synchronization adds no new verification or implementation authority.

The following unresolved blockers govern activation:

| Blocking condition | Required resolution | Related tasks | Work that must not proceed |
| --- | --- | --- | --- |
| Exact content model, collection boundaries, schema, and implementation scope unresolved | Use the completed CON-02 representative set to decide the exact model/schema separately, then separately authorize FND-01 implementation | FND-01 | Collection, schema, validation-code, or public-content implementation |
| Theme/asset direction unresolved | Approve DEC-03 where blocking | FND-02 | Final theme/assets or motif |
| Package manager and implementation scope unresolved | Approve them through a separate bounded implementation decision or prompt | FND-01, FND-02 | Scaffolding, manifests, lockfiles, or dependency installation |
| Booking API historical `.env` not privately reviewed | Owner reviews history without publishing values and rotates any potentially affected credential when appropriate | PRJ-03, EVD-01, PRV-01 | Prominent repository/history promotion or artifact publication |
| Booking API build, tests, migrations, routes, and cross-user behavior not runtime-verified | Separately authorize safe build/test/runtime work with isolated PostgreSQL and Redis resources | PRJ-03, QA-01 | Passing, runtime-correctness, persistence, or authorization-isolation claims |
| Booking API concurrency integrity and Redis correctness unresolved | Establish an integrity design, correct cache keys/invalidation, and verify both under authorized runtime conditions | PRJ-03, EVD-01, technical motion | Concurrent-safety, correct-conflict, or correct-cache claims/demonstrations |
| Booking API Docker, Render/Vercel, and public artifacts unverified | Verify container/deployment evidence separately and complete artifact redaction/public-readiness review | PRJ-03, EVD-01, PRV-01 | Active-deployment claims, repository promotion, or public evidence use |
| CourtFit runtime, provider compatibility, and operational privacy remain unverified | Separately authorize safe build/provider/runtime work and review deployed HTTPS, middleware, logs, observability, memory, provider retention, and whether raw BYOK through the server should remain | PRJ-04, PRV-01, QA-01 | Successful-provider, secure-key, complete-privacy, or runtime-correctness claims |
| CourtFit streaming, Stop/Retry, mobile, accessibility, Markdown, recommendation, and test behavior remain unresolved | Decide incremental forwarding and message formatting; correct mobile action parity; verify cancellation/retry/responsive/accessibility/language behavior; obtain a verified shoe-data source where required; add an approved automated-test approach | PRJ-04, DEC-04, QA-01, A11Y-01, RWD-01 | Incremental-streaming, correct cancellation/retry, full responsive/accessibility, formatted-product, recommendation-accuracy, or passing-test claims |
| CourtFit deployment and public artifacts remain unverified | Verify active deployment and source equivalence separately; review screenshots/artifacts, commit-author email, license/reuse terms, redaction, and publication approval | PRJ-04, EVD-01, PRV-01, REL-01 | Active-deployment claims, prominent repository/history use, artifact publication, or public project content |
| No public-ready artifact set | Select actual artifacts, verify source/context, and complete redaction, rights, accessibility, and publication review | VRT-01/VRT-02/EVD-01/PRV-01 | Artifact-dependent implementation, repository promotion, or public evidence use |
| Routes and navigation unresolved | Establish verified content destinations and separately authorize NAV-01 | NAV-01, VRT-02 | Final routes, language URLs, labels, or navigation implementation |
| First vertical path unselected | Complete VRT-01 | VRT-02/CMP-01 | Broad page/component implementation |
| Testing and supported-environment direction unresolved | Complete DEC-04 | FND-02, QA-01 | Final quality tooling or support claims |
| Deployment direction unresolved | Complete DEC-05 | REL-01 | Deployment or public operational claims |

Blocked means a named prerequisite is absent, not merely low priority.

# Deferred Tasks

Deferred categories are complex search/filtering, large archives, contact form, analytics, comments, nattapong.dev authentication, personalization, content-management interface, interactive diagram system, heavy animation, ambient effects, multiple themes, complex project-specific visual systems, real-time data, recommendation algorithms, and automated content generation.

Reconsider only when real content volume, visitor tasks, verified behavior, accessibility and performance benefit, privacy implications, maintenance capacity, and a decision owner justify the change. Deferred does not mean permanently rejected.

# Done and Historical Tasks

Done and Cancelled records retain stable ID, completion/cancellation reason, validation summary, changed files, known limitations, follow-up tasks, and relevant documentation updates. Do not delete history merely to shorten the queue.

## Completed Governance and Audit Baseline

**GOV-01 — Create concise implementation `AGENTS.md`**  
**Status:** Done · **Priority:** P1

- **Completion reason:** `AGENTS.md` was created as a concise operational derivative of the approved specifications and project rules.
- **Validation:** Its authority hierarchy, scope, factual-accuracy, verification, testing, privacy, completion-report, and stop rules were reviewed. It did not select unresolved technology or replace governing documents.
- **Files changed:** `AGENTS.md` only.
- **Known limitations:** It requires later review when stable implementation-specific rules exist.
- **Follow-up:** Use it with the relevant governing documents during every authorized task.

**AUD-01 — Confirm audit target, permissions, and exclusions**  
**Status:** Done · **Priority:** P0

- **Completion reason:** The active target was confirmed as `/home/nattapaong/Project/Web/nattapong-dev-template` and bounded read-only local inspection was authorized.
- **Validation:** Paths outside the workspace, external repositories, deployments, network access, and secret-value inspection were explicitly excluded.
- **Files changed:** None.
- **Known limitations:** External project and deployment inspection still require separate authorization.
- **Follow-up:** Its local scope enabled AUD-02. PRJ-01 later completed a separately authorized static Booking API audit; Booking runtime/deployment work and PRJ-02 remain governed by separate prompts.

**AUD-02 — Audit workspace structure and preserve existing work**  
**Status:** Done · **Priority:** P0

- **Completion reason:** The approved workspace was inspected read-only before implementation mutation.
- **Validation:** The audit found completed planning/reference material, empty implementation-oriented directories, and no source files, manifests, lockfiles, framework/tool configuration, tests, deployment configuration, environment files, or Git repository. Public/private boundaries and secret-path risks were reviewed without mutation.
- **Files changed:** None.
- **Known limitations:** Runtime, deployment, and external project behavior were outside scope and remain unverified.
- **Follow-up:** The audit supported GOV-02, DEC-01, and future evidence tasks.

**GOV-02 — Establish recoverable Git baseline**  
**Status:** Done · **Priority:** P0

- **Objective / why required:** Make later changes observable and recoverable before implementation, tooling, environment, or dependency work begins.
- **Authorized mutations:** Create `.git/` metadata and one root `.gitignore`, stage the approved baseline, and create one local commit using the existing Git identity.
- **Deliverables:** Technology-neutral `.gitignore`; local Git repository on the observed `main` branch; one root baseline commit containing `.gitignore`, `AGENTS.md`, `CLAUDE.md`, `README.md`, `docs/`, and `reference/`.
- **Validation:** Existing project-file checksums and modes remained unchanged; exactly 34 approved files were committed; final status was clean; no unexpected or sensitive path was staged.
- **Commit:** `73244b0` — `Establish initial nattapong.dev planning baseline`.
- **Filesystem files changed:** Created `.gitignore`; no existing project file changed.
- **Git metadata:** Created under `.git/`; no remote, branch rename, tag, or additional commit was created.
- **Network:** No network action occurred.
- **Known limitation:** Git does not track empty `.agents/`, `.codex/`, `src/`, `public/`, `reference/decisions/`, `reference/screenshots/`, or `reference/wireframes/` directories.
- **Follow-up:** Use the clean baseline to review every later diff; do not add placeholders merely to track empty directories.

**GOV-04 — Synchronize stale Booking API governance summaries with committed PRJ-01 evidence**

**Status:** Done · **Priority:** P0

- **Completion reason:** Booking API summaries in `AGENTS.md`, `docs/07-project-rules.md`, and `docs/08-implementation-plan.md` were synchronized with the committed PRJ-01 evidence, and this task list was updated to close the governance inconsistency.
- **Evidence:** `reference/audits/PRJ-01-booking-api-evidence.md`, covering branch `main` at audited commit `d2f754fdd2fd5581ecca9f9e16539504020f6361` only.
- **Completed scope:** Corrected route methods, authentication, source-level authorization, PostgreSQL, Redis, concurrency, automated-test, Docker/CI, deployment, and historical environment-file summaries without repeating the full audit.
- **Validation:** The four authorized governance files were reviewed for stale statements, unsupported runtime claims, privacy or secret exposure, and commit-scoped evidence language.
- **Files changed:** `AGENTS.md`, `docs/07-project-rules.md`, `docs/08-implementation-plan.md`, and `docs/09-task-list.md`.
- **External boundary:** No external repository or deployment was accessed, and no new verification occurred.
- **Known limitations:** Build, migration, test execution, runtime behavior, cross-user isolation, concurrency integrity, Redis correctness, Docker operation, Render/Vercel status, historical credential safety, artifact redaction, and publication approval remain unresolved.
- **Follow-up:** Use the synchronized summaries for later authorized work while treating the PRJ-01 audit record as the detailed authority.

**GOV-05 — Synchronize stale CourtFit governance summaries with committed PRJ-02 evidence**

**Status:** Done · **Priority:** P0

- **Completion reason:** CourtFit summaries in `AGENTS.md`, `docs/07-project-rules.md`, and `docs/08-implementation-plan.md` were synchronized with committed PRJ-02 evidence, and this task list was updated to close the governance inconsistency.
- **Evidence:** `reference/audits/PRJ-02-courtfit-evidence.md`, covering branch `main` at audited commit `3c9cc65d00622731b4a381ddb785edc3713f8c46` only.
- **Completed scope:** Corrected the browser → CourtFit server → selected provider API-key and conversation-data flow; corrected server-buffered provider-stream behavior; corrected source-level maturity and non-commerce framing; corrected Stop, Retry, switching, responsive/theme, Markdown, testing, and deployment summaries; and preserved privacy, runtime, accessibility, recommendation, artifact, licensing, author-email, and publication boundaries.
- **Evidence boundary:** Used committed PRJ-02 evidence and the already corrected internal CourtFit records only. No external access or new verification occurred.
- **Files changed:** `AGENTS.md`, `docs/07-project-rules.md`, `docs/08-implementation-plan.md`, and `docs/09-task-list.md`.
- **Validation:** The four authorized governance files were reviewed for stale CourtFit statements, unsupported runtime/provider/privacy claims, key/history flow, buffered streaming, absent catalog/tests/deployment evidence, mobile/Markdown/accessibility limits, privacy or secret exposure, and commit-scoped evidence language.
- **Implementation and publication:** No source, public content, dependency, route, provider, key, browser, build/check/test, deployment, or publication action occurred.
- **Known limitations:** Whether the audited commit is canonical; build/lint/format/type-check execution; provider/model compatibility and successful calls; operational key/log/HTTPS/provider-retention behavior; raw server-mediated BYOK direction; incremental forwarding; Stop/Retry runtime behavior; mobile parity; browser/responsive/accessibility behavior; Markdown/product formatting; verified shoe data and recommendation quality; automated tests; artifacts/screenshots; deployment/source equivalence; author-email privacy; licensing; and publication approval remain unresolved.
- **Follow-up:** Use synchronized governance as an input to later evidence/content work without treating it as public-page, runtime, privacy, provider, or implementation authorization.

**DEC-01 — Decide stack and rendering strategy**  
**Status:** Done · **Priority:** P1

- **Completion reason:** Decision owner Nattapong explicitly approved Astro as the nattapong.dev framework and closed the stack/rendering gate.
- **Decision:** Generate static HTML by default. Add client JavaScript only through separately justified local islands. No request-time renderer, server adapter, or continuously running application server is approved.
- **Reconsideration:** Introducing request-time server rendering, a server adapter, or an application server requires reopening or superseding DEC-01 through a separately approved decision.
- **Decision record:** `reference/decisions/DEC-01-stack-and-rendering.md`.
- **Validation:** The record retains the audited baseline, alternatives, tradeoffs, risks, reversibility, official sources, and deferred decisions. Approval was explicit and did not itself resolve DEC-02 through DEC-05; DEC-02 was approved later through its own decision.
- **Implementation:** No Astro project was scaffolded, no dependency was selected or installed, and no implementation or configuration was created.
- **Known limitations:** Content-model implementation, package manager, styling, testing, deployment, routes, assets, themes, and other deferred choices remain unresolved. DEC-02 later resolved the content direction only.
- **Follow-up:** Use DEC-01 as an approved dependency for later decision records while keeping implementation blocked until the remaining required evidence, decisions, and authorization exist.

**DEC-02 — Decide content storage, authoring, and bilingual behavior**  
**Status:** Done · **Priority:** P1

- **Completion reason:** Decision owner Nattapong explicitly approved the repository-local content, authoring, validation, internal/public-boundary, and bilingual direction.
- **Storage and API direction:** Use Astro build-time content collections through the current Content Layer API for repository-local public content.
- **Authoring:** Use plain Markdown by default for long-form content and structured, schema-validated metadata for recurring content state and relationships.
- **Validation responsibilities:** Treat structural schema validation, explicit referential-integrity validation, and project-specific semantic validation as separate responsibilities. Required broken relationships fail the static build; optional relationships may be absent only when their approved content model permits absence.
- **Internal/public boundary:** Public-ready content must use a separate allowlisted source. `docs/` and `reference/` remain internal and must not be imported wholesale into public output.
- **Bilingual direction:** Use one primary language per entry. Thai-only, English-only, and mixed-language entries are allowed; separately authored translated siblings are optional. Translation is neither mandatory nor automatic, and language switching is suppressed when no public-ready sibling resolves.
- **Deferred:** MDX and an external CMS remain deferred until a verified need justifies a new decision. Exact collections, paths, schemas, routes, language URLs, tooling, and other recorded implementation choices remain unresolved.
- **Decision record:** `reference/decisions/DEC-02-content-storage-authoring-bilingual.md`.
- **Decision owner and evidence:** Nattapong; explicit user confirmation.
- **Implementation and publication:** No content collection, schema, content migration, public entry, route, page, package-manager choice, dependency selection, installation, or publication occurred.
- **Known limitations:** Representative verified entries, project evidence, public-ready artifacts, exact collection/schema design, translation review workflow, testing, navigation, first vertical, and deployment remain gated.
- **Follow-up:** Use DEC-02 as an approved input to later content-readiness, foundation, navigation, validation, and vertical tasks without treating it as implementation authority.

## Completed Content Verification

**CON-01 — Verify public profile and contact content**  
**Status:** Done · **Priority:** P0

- **Completion reason:** Nattapong explicitly confirmed the public, withheld, private, and not-stated profile boundaries, and the internal synthesis was updated and reviewed against them.
- **Confirmed public:** Public name `Nattapong Sangsana`; title `Computer Engineering Student`; university and approved wording `Computer Engineering student at Nakhon Phanom University.`; country-level location `Thailand`; email `zpoloa0@gmail.com`; and GitHub destination `https://github.com/nattapong18-en`.
- **Interest boundaries:** Software Engineering, Embedded Systems and IoT, and Systems Programming are confirmed primary interests. Network and Infrastructure and Cybersecurity are confirmed secondary interests. They remain interests and learning directions, not expertise, specialization, employment, mastery, professional authority, or seniority.
- **Withheld and private:** The Thai name is withheld; LinkedIn and Facebook are Not public-ready; contact purpose is Not stated. Precise location, phone number, private accounts, credentials, API keys and tokens, university IDs, private university documents, and other private documents remain private.
- **Verification:** Evidence is explicit user confirmation from Nattapong. No legal identity, official enrollment, employment, external-account ownership or behavior, repository safety, verification date, or publication date was established.
- **Internal record:** `reference/synthesis/personal-profile.md`.
- **Publication and implementation:** No content was published, no account was inspected or modified, and no page or implementation was created.
- **Known limitations:** Public readiness may change; GitHub ownership and current behavior remain externally unverified; no opportunity or availability wording is approved.
- **Follow-up:** Use the verified fields as input to later content readiness work while preserving the remaining project-evidence, account-readiness, authoring, artifact, testing, deployment, and first-vertical gates.

**CON-02 — Assemble the internal representative content and evidence set**
**Status:** Done · **Priority:** P1

- **Completion reason:** One bounded internal record now provides real, varied material for later content-model, decision, layout, component, responsive, bilingual, accessibility, evidence, and privacy comparison without creating public content or implementation.
- **Sources used:** CON-01 boundaries; the corrected personal profile, project inventory, and learning inventory; committed PRJ-01 and PRJ-02 audit records; existing Research Preparation context in local records; governing content/layout/component/rules/plan/task documents; DEC-01 and DEC-02.
- **Output:** `reference/content/CON-02-representative-content-and-evidence.md`.
- **Review date:** 2026-07-23.
- **Completed scope:** Created eight internal entries covering About in independently authored English and Thai, the Booking API in English, CourtFit in Thai, mixed-language Research Preparation, guided Rust HTTP/thread-pool learning, mixed-language Linux workflow learning, and an honest unavailable Coursework state.
- **Editorial/evidence coverage:** Recorded status, maturity, role, contribution context, verification, visibility, evidence sources, limitations, redaction, candidate artifacts, readiness, blockers, review triggers, and representative text or an unavailable state. Evidence/redaction and missing/blocker registers cover profile, projects, learning, research, coursework, bilingual review, artifacts, and implementation decisions.
- **Evidence boundaries:** Used the fixed PRJ-01 and PRJ-02 audited commits only for repository-native project claims. Preserved non-production/runtime/privacy/deployment limitations, guided-learning attribution, assisted Linux troubleshooting, the no-final-graduation-topic state, and absent coursework evidence.
- **Validation:** Reviewed all eight IDs and content-family/language coverage; checked claim-to-source boundaries, audit qualifications, missing states, privacy/redaction rules, no-final-topic wording, guided/assisted attribution, prohibited decisions/claims, Markdown structure, duplicate IDs, and changed paths.
- **Files changed:** `reference/content/CON-02-representative-content-and-evidence.md` and `docs/09-task-list.md`.
- **External/network boundary:** No external repository, deployment, provider, network destination, source application, or runtime system was accessed.
- **Implementation/publication boundary:** No public copy, artifact, schema, collection, field requiredness, route, component, package manager, theme, test tool, first vertical, deployment, or graduation-project topic was created, selected, or approved.
- **Known limitations:** Final public wording, translation relationships, initial public scope, exact content model/schema/collections, routes/navigation, package manager, theme/assets, testing/support policy, project runtime evidence, actual screenshots/artifacts, research sources/hardware/scope/topic, coursework selection, deployment, and publication approval remain unresolved.
- **Downstream readiness:** Real English/Thai/mixed samples and honest evidence states are available for separately authorized DEC-03 and DEC-04 preparation, later FND-01 planning, and VRT-01 comparison. No downstream task is activated; FND-01 and VRT tasks retain their existing gates and require separate authorization.

## Completed Project Evidence

**PRJ-01 — Verify Rust Booking API implementation and evidence**

**Status:** Done · **Priority:** P0

- **Completed scope:** Static read-only repository implementation and evidence audit only. This status does not include build, test, migration, runtime, database, Redis, API, container, deployment, or public-artifact verification.
- **Repository snapshot:** `https://github.com/nattapong18-en/booking_api`, audited on default branch `main` at commit `d2f754fdd2fd5581ecca9f9e16539504020f6361`.
- **Audit record:** `reference/audits/PRJ-01-booking-api-evidence.md`.
- **Static result:** Six routes were verified in the router for public registration, public login, public room availability, authenticated booking creation, authenticated current-user listing, and authenticated cancellation. The registered methods are GET, POST, and PATCH—not PUT.
- **Authentication correction:** Source includes registration, login, bcrypt password hashing/verification, JWT issuance, JWT validation/claims extraction, and protected create/list/cancel handlers. The lifecycle remains partial, and runtime/security behavior is unverified.
- **Authorization evidence:** Authenticated user identity associates new bookings and constrains current-user listing and cancellation lookup/update. These source-level ownership checks are not runtime cross-user verification or proof of complete authorization security.
- **Persistence and concurrency:** PostgreSQL source integration covers all six handlers and the users/rooms/bookings schema. Booking overlap check and insert use one transaction, but no current database overlap constraint, row lock, serializable isolation request, optimistic concurrency, Redis lock, or idempotency mechanism establishes concurrent safety.
- **Redis correction:** Redis is a 60-second room-availability response cache, not session, JWT, lock, rate-limit, idempotency, or booking-record storage. Key construction and invalidation are inconsistent, and Redis failure can affect request paths.
- **Test correction:** Seven automated test functions are tracked—five availability tests and two registration-handler tests. They were not run; passing status and coverage remain unverified. The handler tests depend on PostgreSQL and Redis, and GitHub Actions configuration does not prove intended tests run or pass.
- **Deployment evidence:** A Dockerfile and GitHub Actions workflow are present as configuration only. Render and Vercel are README claims; no active deployment or Vercel role in this backend tree was verified.
- **Sensitive-history boundary:** A tracked `.env` path existed in history and was later deleted. Values were not inspected or reproduced. Private owner review and any appropriate credential rotation remain required before prominent repository/history promotion.
- **Internal records:** Corrected `reference/synthesis/project-inventory.md` and the Rust Booking API portion of `reference/synthesis/personal-profile.md` using the audit's commit-scoped evidence and qualifications.
- **Validation:** Audit findings, internal corrections, runtime-claim boundaries, privacy/secret language, and the four-file staged scope were reviewed. No external repository mutation or execution occurred.
- **Implementation and publication:** No source implementation, public content, deployment, repository promotion, build, test, migration, database, Redis, API, container, or runtime verification occurred.
- **Known limitations:** Current canonical commit, runtime behavior, test results/coverage, cross-user isolation, concurrency integrity, Redis correctness, container behavior, deployments, historical credential state, and artifact public readiness remain unresolved. GOV-04 later synchronized the previously stale governance summaries without adding new verification.
- **Follow-up:** Use this static evidence as an input to CON-02 and later project-content work only after preserving all blockers. PRJ-01 alone does not authorize a public project page or stronger claim.

**PRJ-02 — Verify CourtFit implementation, privacy, and evidence**

**Status:** Done · **Priority:** P0

- **Completed scope:** Static read-only CourtFit repository implementation, evidence, and privacy-boundary audit only. This status does not include build, provider calls, runtime, browser/device, accessibility, testing, deployment, public-artifact, privacy-security, or publication verification.
- **Repository snapshot:** `https://github.com/nattapong18-en/chat-bot-test`, audited on default branch `main` at commit `3c9cc65d00622731b4a381ddb785edc3713f8c46`.
- **Audit record:** `reference/audits/PRJ-02-courtfit-evidence.md`.
- **Architecture and routes:** Next.js App Router source defines one page route (`/`) and one dynamic Node API route (`POST /api/chat`) across a browser client, CourtFit server route, and server-only OpenAI/Google GenAI adapters.
- **API-key correction:** The user key is held temporarily in React state and sent with every request and retry through the CourtFit server to the selected request-scoped provider client. No direct project persistence in localStorage, sessionStorage, cookies, a database, chat-message state, or analytics and no project key logging were found. Operational infrastructure, transport, memory, logging, provider retention, and privacy security remain unverified.
- **Conversation privacy:** Chat history is React-memory-only in inspected project source. Every turn sends all current non-empty retained user and assistant messages through the CourtFit server to the selected provider. Provider or key changes clear conversation and key state.
- **Provider and streaming correction:** OpenAI and Gemini server adapters, system instructions, history transformation, provider-stream consumption, and abort-signal paths are present. The server route buffers provider deltas and emits one assembled text event; incremental assistant display during provider generation is not established. Provider calls and current model/API compatibility were not tested.
- **Stop and Retry:** Stop is wired from browser fetch through the route to both adapters, and Retry reuses an error-message slot, resends relevant history with the current provider/key, and makes a new request. Provider-side cancellation, partial preservation, races, billing effects, Retry success, and duplicate prevention remain runtime-unverified.
- **Provider switching:** OpenAI and Gemini are selectable; provider/key change clears connection, key, draft, and history, so prior conversation is not intentionally retransmitted. No user model picker exists. Desktop controls are wired, while the mobile drawer's New Chat action is inert and provider/key action parity is incomplete.
- **Product and disclaimer boundary:** No structured catalog, product database/API/images/cards/details, verified-product search/filter, live price/stock feed, cart, checkout, or commerce exists. Recommendations are model-generated and accuracy-unverified. Rendered source says guidance is simulated and real-time price/stock data are unavailable, but lacks an explicit educational-use/not-an-official-store disclaimer and a full AI-inaccuracy warning.
- **Responsive, theme, and formatting:** Responsive classes, desktop/mobile shell, Radix drawer, adaptive widths, overflow handling, dynamic viewport height, and light/dark/system themes exist in source. No visual/device/browser testing occurred, mobile action parity is incomplete, and messages render as plain pre-wrapped text without Markdown support.
- **Testing and deployment:** No automated test source, runner/framework, test script, coverage configuration, or CI workflow was found. Lint, type-check, format, and build configuration exists but was not run. Chrome/Firefox/Safari testing is self-reported and undocumented. Vercel is documentation context only; no live URL, Vercel configuration, workflow, or deployment result was found.
- **Sensitive-history boundary:** No candidate credential value was found in the current tree or four available commits using the bounded method; `.env.example` is the only environment-named tracked path. One commit-author email differs from the confirmed public contact and requires owner privacy review before prominent history use. No value is reproduced, and the bounded review does not prove secrets never existed elsewhere.
- **Internal records:** Corrected the CourtFit portions of `reference/synthesis/project-inventory.md` and `reference/synthesis/personal-profile.md` while preserving unrelated project and CON-01 boundaries.
- **Validation:** The audit-to-record mapping, key flow, conversation history, buffered streaming, runtime/provider limits, privacy/secret language, and four-file staged scope were reviewed. No external repository was accessed during closure.
- **Implementation and publication:** No code, public content, source implementation, dependency, provider, key, browser, test, build, deployment, or publication action occurred.
- **Known limitations:** Whether the audited commit is canonical; build/tool execution; provider/model compatibility; successful calls; operational key/log/HTTPS/provider-retention behavior; raw BYOK architecture; incremental forwarding; Stop/Retry races; mobile parity; browser/responsive/accessibility behavior; Markdown; verified shoe data and recommendation quality; automated tests; deployment/source equivalence; artifacts/screenshots; author-email privacy; license/reuse; and publication approval remain unresolved.
- **Follow-up:** Use the static record as an input to CON-02 and later representative-content, schema, and first-vertical work without treating it as public-page authorization or runtime/privacy proof.

## Cancelled Audit History

**AUD-03 — Audit capabilities, public boundaries, and privacy risks**  
**Status:** Cancelled · **Priority:** P0

- **Original objective:** Identify build/type/lint/test/format/deploy capabilities, framework/tooling evidence, environment and secret risks, and public/private boundaries.
- **Cancellation reason:** AUD-02 already inspected these areas sufficiently for the current empty scaffold and found no implementation, tooling, configuration, environment files, or deployment behavior. A duplicate read-only audit would add no current evidence.
- **Execution history:** No separate AUD-03 execution occurred.
- **Files changed:** None.
- **Known limitation:** The findings describe the pre-implementation scaffold only.
- **Follow-up:** Re-audit capabilities and privacy after tooling, implementation, dependencies, environment files, deployment configuration, or public behavior exists.

The approved planning documents `reference/design-dna.md` and `docs/00` through `docs/08` exist and support this history. Their existence does not imply implementation completion.

# Task Dependency Map

```text
GOV-01 (Done) ──────────────────────────────► governed agent work
AUD-01 (Done) ─► AUD-02 (Done) ─► GOV-02 (Done) ─► DEC-01 (Done)
AUD-02 (Done) ─► AUD-03 (Cancelled: current scope covered by AUD-02)
DEC-01 (Done) ─► DEC-02 (Done); DEC-03 / DEC-04 / DEC-05 remain separately gated
authorized PRJ-01 static audit (Done) ─► corrected internal Booking evidence ─► GOV-04 (Done) ─► synchronized governance summaries
PRJ-01 runtime / secret-history / publication requirements ─► remain separately blocked
authorized PRJ-02 static audit (Done) ─► corrected internal CourtFit evidence ─► GOV-05 (Done) ─► synchronized CourtFit governance summaries
PRJ-02 runtime / provider / privacy / artifact / publication requirements ─► remain separately blocked
DEC-02 (Done) + CON-01 (Done) + PRJ-01/PRJ-02 static evidence (Done) + GOV-04/GOV-05 synchronized governance (Done) + research/learning context ─► CON-02 representative set (Done)
CON-02 representative set (Done) ─► inputs available for separately authorized DEC-03 / FND-01 planning / VRT-01 comparison; no public-page authorization
DEC-01 (Done) + DEC-02 (Done) + CON-02 (Done) + unresolved exact model/schema/package-manager decisions + separate implementation authorization ─► FND-01 ─┐
DEC-01 + DEC-03 + DEC-04 + FND-01 ─► FND-02 ─────┼─► NAV-01 ─► VRT-02
VRT-01 (separately authorized after existing gates) ──────────┘
VRT-02 ─► CMP-01 / EVD-01 / STA-01 ─► PRJ-03 / PRJ-04 / RES-01 / LRN-01..04
stable static scope + verified behavior ─► MOT-01
representative release ─► RWD-01 + A11Y-01 + PERF-01 + PRV-01 ─► QA-01
QA-01 + DEC-05 ─► REL-01 ─► OPS-01
```

The Now queue is empty. CON-02 is complete only for its internal representative-set scope. DEC-03, DEC-04, and DEC-05 remain separately authorized decision candidates, and a separately scoped Booking API runtime-evidence task remains inactive. The representative set supplies real language/content/evidence states for later decision and planning work, but actual public-ready artifacts, final wording, exact content model/schema, package manager, routes/navigation, first vertical, testing, deployment, and publication remain unresolved. FND-01, FND-02, NAV-01, and VRT tasks retain their existing dependencies and require separate authorization. CON-02 and the completed audits/governance tasks do not authorize a public page, artifact publication, repository promotion, runtime/provider/privacy claims, or implementation.

# Validation and Completion Rules

A task may be marked Done only when its objective is satisfied, authorized scope is respected, deliverables exist, acceptance criteria pass, applicable validation is complete, no unsupported claim or hidden blocker exists, changed files and checks not run are reported, documentation impact is handled, and follow-up tasks are recorded.

Generating files, rendering an ideal example, or receiving no tool error is not completion by itself.

# Task-List Maintenance Rules

- Preserve stable task IDs and update status when evidence or scope changes.
- Do not silently delete tasks; retain cancellation reason and historical outcome.
- Split tasks when one authorization or review cannot reasonably cover the scope.
- Merge only when responsibilities and validation are genuinely identical.
- Add tasks only from approved scope, evidence, discovered blockers, or maintenance need.
- Keep Now intentionally small and move speculative work to Deferred.
- Keep wording aligned with governing documents and update dependencies when decisions change.
- Put implementation-specific commands, paths, and tactics in the authorized execution prompt, not this list.

# Task Anti-Patterns

- Every phase marked Now or hundreds of microtasks.
- Tasks without deliverables, acceptance criteria, or authorized scope.
- Tasks that silently choose technology or invent paths.
- Tasks combining unrelated decisions, design, implementation, and release.
- Vague tasks such as “make it better.”
- Accessibility postponed to a final cleanup task.
- Responsive work treated as desktop shrinking.
- Motion before static behavior or search before content volume.
- Placeholder-content tasks or unverified project publication.
- Deployment treated as production validation.
- Deleting completed records and losing history.
- Using this list as a substitute for a concrete authorized execution prompt.

# Task-List Acceptance Criteria

- **Traceability:** Every task names governing authority or evidence.
- **Actionability:** One session can pursue a bounded outcome without deciding hidden product questions.
- **Scope clarity:** Authorized and prohibited work are explicit.
- **Stable identity:** IDs survive status and wording changes.
- **Dependencies:** Gates and safe parallel work are accurate.
- **Small immediate queue:** The Now queue is empty after completion of DEC-01, DEC-02, CON-01, CON-02's bounded internal representative set, PRJ-01's and PRJ-02's static audit scopes, and GOV-04/GOV-05 governance synchronization; recommended next candidates remain inactive until separately authorized and ready.
- **Decision preservation:** Unknown technology and product choices remain blocked gates.
- **Evidence and factual integrity:** Verification precedes publication.
- **Accessibility, responsive, performance, and privacy integration:** These appear within delivery tasks and dedicated gates.
- **Maintainability:** The list remains proportionate to one maintainer.
- **Project, research, learning, and coursework compatibility:** Each content family retains its documented status and needs.
- **AGENTS.md compatibility:** The completed operational derivative remains subordinate to governing documents.
- **One-task-at-a-time compatibility:** Records supply enough context for separate Codex prompts.
- **Complexity resistance:** Optional systems remain Deferred until justified.

# Open Task-List Questions

- Which recurring content families justify distinct collection boundaries, and which should share a model?
- Which exact metadata, requiredness rules, schema constraints, and semantic checks are justified by real content?
- How should translated siblings be reviewed when shared status, limitations, evidence, or corrections change?
- Which compact public records, if any, should use structured repository data rather than Markdown bodies?
- Is CourtFit commit `3c9cc65d00622731b4a381ddb785edc3713f8c46` still the canonical state for later runtime verification and publication review?
- Should CourtFit forward provider deltas incrementally, or retain one assembled client event?
- Are the source-selected OpenAI and Gemini models/APIs currently compatible, and do provider calls succeed?
- Is a CourtFit deployment active and source-equivalent?
- Which deployed transport, middleware, process-memory, logging, observability, and other operational systems can access user keys or conversation content?
- What retention and use policies apply to conversation content at each selected provider?
- Should raw user-provided keys continue to pass through the CourtFit server?
- How should mobile New Chat, provider selection, and key actions reach parity with desktop controls?
- Should provider-specific error headings replace the current generic error label?
- Should CourtFit add Markdown/product formatting, or keep plain-text messages?
- Which automated and manual test matrix should cover providers, streaming, Stop/Retry, responsive behavior, browsers, and failure states?
- Which accessibility standard and supported-environment policy should CourtFit verify?
- Which verified basketball-shoe data source, if any, should support factual product claims?
- Which CourtFit screenshots and source-derived artifacts are accurate, redacted, and public-ready?
- Is the CourtFit commit-author email safe for prominent public history use?
- What license and reuse terms apply to CourtFit source and derived artifacts?
- Is Booking API commit `d2f754fdd2fd5581ecca9f9e16539504020f6361` still the canonical state for later runtime verification and publication review?
- Does the Booking API build, migrate, and run with safe isolated PostgreSQL and Redis resources?
- Which tracked Booking API tests run and pass, and what coverage remains absent?
- Do runtime cross-user checks confirm the source-level ownership restrictions?
- Which integrity design will prevent concurrent overlapping bookings?
- How should Redis key construction, overlapping-range invalidation, and failure behavior be corrected and verified?
- Did the historical Booking API `.env` contain any usable credential, and has any affected credential been rotated?
- Are the README's Render destination and externally referenced Vercel frontend current, source-corresponding, and safe to present?
- Which implementation-specific rules, if any, should later be added to `AGENTS.md` after they become stable?
- When, if ever, will LinkedIn or Facebook become public-ready?
- Should a public contact-purpose statement be approved later, and what evidence or intent would support it?
- What separate evidence, if needed, should verify ownership and current behavior of the confirmed public GitHub destination?
- Which project artifacts are safe and public-ready?
- Which first vertical content path should be selected?
- Which routes, language URL behavior, default site language, and navigation model should be approved?
- What verified content need, if any, would justify MDX?
- Which components recur after vertical validation?
- Which content families belong in the first release?
- Which motion needs are real and verified?
- Which checks belong locally and in continuous integration?
- Which deployment and recovery strategy will be approved?
- Who approves scope changes and rule exceptions?
- How should Done/Cancelled history be maintained as this list grows?
- Which Deferred features may later gain sufficient evidence and maintenance capacity?

These questions remain blockers, decision gates, or Deferred work until resolved through an authorized task.
