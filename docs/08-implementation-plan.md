# Purpose of This Plan

This document defines the phased implementation sequence for building, validating, publishing, and maintaining nattapong.dev. It converts the approved vision, design direction, content model, layout and component behavior, motion boundaries, and project rules into an incremental delivery strategy.

The plan explains what each phase accomplishes, why it occurs at that point, what it depends on, what it produces, how it is validated, and what remains deferred. It keeps unresolved choices visible as decision gates rather than hidden assumptions.

This is not production code, a detailed task checklist, a final technical architecture, a final sitemap, a final content schema, a deployment runbook, or `AGENTS.md`. `docs/09-task-list.md` will later translate approved phases and gates into actionable work items.

# Planning Authority

This plan derives its authority from the project vision, design DNA, design specification, design system, layout specification, component specification, content specification, animation specification, project rules, and the personal, project, and learning inventories. Future repository inspection, deployments, tests, measurements, research documents, prototypes, and user decisions may supply stronger direct evidence.

The plan may order and gate work, but it must not override governing documents. Identity and non-goals remain controlled by the vision; each domain specification controls its subject; project rules control working discipline; direct evidence controls factual implementation claims. When later evidence conflicts with planning assumptions, record the discrepancy and update governing documents only with authorization.

# Planning Principles

- Evidence before claims.
- Content before decorative presentation.
- Shared foundations before optional variants.
- Real examples before broad abstraction.
- Small coherent phases with reviewable outcomes.
- Vertical validation before horizontal expansion.
- Accessibility and responsive behavior throughout, not only before release.
- Progressive enhancement from a reliable static baseline.
- Decision gates before expensive or difficult-to-reverse choices.
- Documentation alongside established decisions and behavior.
- No speculative systems for imagined content volume.
- No premature optimization or abstraction.
- No artificial dates, durations, estimates, or deadlines.

# Current Planning Baseline

- nattapong.dev is a living personal engineering website, not primarily a portfolio, product landing page, gallery, blog, agency showcase, or template.
- Rust Booking API and CourtFit are the two current Major Projects.
- PRJ-01 completed a static read-only audit of the Booking API at repository `https://github.com/nattapong18-en/booking_api`, branch `main`, commit `d2f754fdd2fd5581ecca9f9e16539504020f6361`; `reference/audits/PRJ-01-booking-api-evidence.md` governs commit-scoped source claims only.
- Graduation-project Research Preparation is an important current direction; no final topic is selected.
- Learning, technical notes, experiments, and coursework require distinct but related treatment.
- Governing documents `00` through `07` are complete as planning authority.
- The final stack, repository structure, rendering, content storage, deployment strategy, tools, theme, typography, tokens, routes, and many concrete visual values may remain unresolved.
- Project and personal claims still require the repository, deployment, testing, measurement, research, privacy, or user verification recorded in the source documents.

# Assumptions and Unresolved Decisions

**Approved assumptions:** The website serves multiple reading depths; content and evidence drive layout; Thai, English, and mixed-language content must work; accessibility, performance, privacy, and maintenance are foundational; the initial implementation should remain proportionate to one maintainer.

**Requires verification:** Public identity details and contact methods where not already confirmed; Booking API build, migration, test execution, runtime routes, cross-user isolation, concurrency integrity, Redis correction/runtime behavior, Docker operation, Render/Vercel status, historical environment-file risk, and artifact publication readiness; CourtFit deployment, API-key behavior, request flow, browser/device/accessibility testing, and recommendation evaluation; publishable artifacts; coursework and learning evidence; research sources and available hardware. Booking API route registration, static authentication coverage, source-level ownership checks, PostgreSQL integration, Redis cache role, transaction presence, and test-function presence are resolved only for the PRJ-01 audited commit.

**Technical decisions not made:** Stack, rendering strategy, repository organization, content storage and authoring, asset pipeline, internationalization behavior, testing and quality tools, analytics, deployment, operational monitoring, and supported-environment policy.

**Editorial decisions not made:** Initial public content scope, first vertical path, prominence, exact navigation model, public contact set, bilingual publication strategy, content review ownership, and which learning or coursework items are ready.

**Visual decisions not made:** Primary theme, number of themes, typefaces, exact roles and values, motifs, project-specific variation, final component variants, and specific motion behavior.

**Deployment and operational decisions not made:** Provider, environments, domain setup, analytics and consent, release and rollback process, backups, monitoring, incident response, and maintenance cadence.

Every unresolved matter must become a documented decision gate when implementation depends on it. Defaults may be temporary only when they are reversible, explicit, and do not publish unsupported claims.

# Delivery Strategy

Build the smallest coherent semantic and content foundation, then validate it with real bilingual content and representative Booking API and CourtFit evidence. Do not implement every page family at once. Establish one complete vertical content path that exercises identity, metadata, evidence, limitations, responsive behavior, accessibility, and navigation before expanding shared abstractions.

Extract components only after recurring responsibilities appear. Extend to the two Major Projects, Research Preparation, then selected learning, notes, experiments, and coursework. Add technical-evidence systems as real artifacts require them. Introduce motion, media enhancement, search, filtering, forms, or other optional behavior only after the static experience is trustworthy and the need is demonstrated.

At each phase, update authorized documentation when a decision or verified fact becomes established. No particular development methodology or team process is prescribed.

# Phase Structure

Every phase should record:

- **Objective:** The outcome the phase exists to achieve.
- **Why now:** Why dependencies and evidence make this the correct point.
- **Inputs:** Approved documents, decisions, content, artifacts, or earlier deliverables.
- **Main work areas:** A bounded group of concerns, not a low-level task dump.
- **Expected deliverables:** Reviewable outputs or decisions.
- **Dependencies:** What must already be true.
- **Decision gates:** Choices that block or materially shape work.
- **Validation:** Qualitative checks and representative scenarios.
- **Exit criteria:** Conditions required to proceed.
- **Risks:** Likely integrity, scope, technical, or maintenance failures.
- **Deferred work:** Explicitly excluded later concerns.
- **Documentation impact:** Sources that may require an authorized update.

Phases may overlap only when dependencies, ownership, and validation remain clear. Parallel work must not use an undecided gate as an assumed requirement.

# Phase 0 — Workspace, Repository, and Evidence Audit

**Objective:** Establish a trustworthy baseline before any implementation mutation.

**Why now:** The current code, repository structure, configuration, dependencies, assets, dirty changes, build capability, and deployment state are not established by the planning documents.

**Main work:** When implementation inspection is authorized, confirm the nattapong.dev workspace; identify code, configuration, assets, dependencies, documentation, existing implementation, generated files, public/private boundaries, and user-owned changes. Read `AGENTS.md`, `CLAUDE.md`, and other local instructions without modifying them. Identify current build, lint, type-check, test, and deployment capabilities. Confirm which external project repositories and deployments may be reviewed. Audit secrets, personal information, logs, screenshots, and other privacy risks. Record facts separately from assumptions and list missing content or evidence.

**Deliverables:** A baseline report, preserved-change inventory, capability matrix, evidence inventory, privacy risks, and unresolved constraints.

**Validation and exit:** Findings are traceable to inspected files or authorized evidence; no existing work was overwritten; unknowns remain labeled. Exit when implementation scope can be planned without guessing repository state.

**Risks and deferred work:** Primary risks are accidental overwrite, secret exposure, and mistaking planning files for implementation. No code changes, dependency installation, or external repository inspection occur during this documentation-writing task.

**Documentation impact:** Update planning or inventory documents later only when authorized and supported by findings.

# Phase 1 — Technical and Product Decision Gates

**Objective:** Resolve only decisions required to build the initial foundation safely.

**Why now:** Foundation choices depend on repository reality, content needs, maintenance capacity, and deployment constraints.

**Decision categories:** Implementation stack, rendering strategy, content storage, authoring workflow, asset handling, bilingual behavior, theme strategy, deployment strategy, analytics and privacy, testing approach, formatting and quality tools, and supported environments.

For every decision, record the governing requirement, options considered, evidence and constraints, decision owner, consequences, reversibility, and documentation target. Prefer the smallest reversible option that supports the first vertical path.

**Deliverables:** Approved decision records for blocking choices and an explicit list of choices safely deferred.

**Validation and exit:** Decisions do not contradict specifications, invent future scale, or introduce unjustified dependencies. Exit when Phase 3 and Phase 4 can begin without silent technical assumptions.

**Risks and deferred work:** Risks include tool-driven design, over-engineering, and choosing from reference-site appearance. This plan does not select any option.

# Phase 2 — Content and Evidence Readiness

**Objective:** Prepare real, safe, representative content before broad UI construction.

**Why now:** Content fields, components, evidence surfaces, and responsive behavior cannot be validated with idealized placeholders.

**Main work:** Verify personal profile details, public name presentation, and contact readiness. Use the committed PRJ-01 record for Booking API static facts rather than re-accessing its repository without new authorization; preserve its runtime, historical-secret, redaction, and publication blockers. Review separately authorized CourtFit evidence; confirm repository and deployment destinations; collect representative screenshots, code, terminal evidence, and records; identify artifacts that cannot be published. Record status, maturity, role, contribution, limitations, certainty, verification, and last-reviewed context. Prepare Thai, English, and mixed-language samples. Prepare Research Preparation content without selecting a graduation topic. Curate a small number of learning and coursework examples. Complete redaction and privacy review and identify content gaps.

**Deliverables:** A public-ready candidate content set, internal verification record, artifact set, redaction decisions, and a blocking-gap list.

**Dependencies and gates:** Requires authorized evidence access and user confirmation for personal/public information. Publication scope and artifact safety are gates.

**Validation and exit:** Claims match evidence; uncertainty and limitations remain visible; at least one content path has sufficient real complexity for vertical implementation. Gaps that prevent honest validation remain explicit.

# Phase 3 — Content Model and Editorial Foundation

**Objective:** Translate the approved content specification into an implementation-compatible model without committing to a particular CMS or schema beyond the chosen gate.

**Why now:** Rendering and component work need stable semantics before presentation abstractions.

**Main work:** Represent classification, status, maturity, verification, certainty, limitations, role, contribution, dates, review context, visibility, related content, and sources. Preserve public versus internal separation. Support Thai, English, mixed content, missing optional fields, archived and incomplete content, and explicit relationships. Prevent presentation components from creating fallback claims.

**Deliverables:** A validated content contract, example records drawn from both project and non-project content, and editorial validation behavior.

**Dependencies and gates:** Content storage and authoring direction must be sufficiently decided. Exact fields may remain extensible if semantics are preserved.

**Validation and exit:** Real Booking API, CourtFit, Research Preparation, and one learning/note/coursework example can be represented without invented values or forced empty fields.

**Risks and deferred work:** Avoid building a generalized publishing platform, migration system, or taxonomy for imagined volume.

# Phase 4 — Visual and Technical Foundation

**Objective:** Implement the smallest shared semantic and visual foundation.

**Why now:** Content semantics and blocking stack decisions are available, but broad components have not yet been justified.

**Main work:** Establish semantic document structure, typography roles, theme foundation after its gate, semantic color roles, spacing relationships, surfaces, border/radius/elevation foundations, focus, links, controls, technical-artifact surfaces, code and terminal reading behavior, reduced-motion mapping, and responsive foundations.

**Deliverables:** A small foundation demonstrated with real headings, prose, metadata, links, controls, code, terminal content, and evidence captions.

**Validation and exit:** Test Thai, English, mixed language, long content, focus, contrast relationships, reflow, and reduced motion. No decorative motif or full component library is required. Exit when representative content can be read and operated reliably.

**Risks:** Generic developer styling, premature tokens, too many roles, expensive fonts, and visual polish detached from content.

# Phase 5 — Global Structure, Navigation, and Direct Entry

**Objective:** Establish consistent site identity, landmarks, wayfinding, and direct-entry context.

**Main work:** Implement site identity, semantic landmarks, skip navigation, primary navigation, current-location behavior, mobile navigation if justified, footer context, parent context, direct-entry orientation, deep links, history expectations, responsive navigation, keyboard behavior, and focus management.

**Why now and dependencies:** The foundation exists and initial content structure is known. Final route names and navigation labels require the relevant content and sitemap decision gate.

**Deliverables:** A static navigation shell and direct-entry behavior that can host the first vertical experience.

**Validation and exit:** Validate keyboard use, focus, browser back/forward, deep links, narrow layouts, and operation without motion. Exit when a user can identify the site, current content, parent context, and meaningful return path.

**Deferred work:** Product-scale menus, search, large indexes, and page transitions.

# Phase 6 — First Vertical Content Experience

**Objective:** Build one complete representative path before scaling page families.

**Why now:** A vertical slice exposes content-model, layout, component, bilingual, accessibility, and evidence problems earlier than parallel page construction.

**Selection gate:** Choose a real content path with enough verified complexity to exercise page introduction, hierarchy, metadata, status, maturity, verification, limitation, evidence, related content, navigation, responsive behavior, Thai and English, optional fields, and error/unavailable states. This plan does not select the page.

**Deliverables:** One end-to-end static content experience using production-intent content and artifacts.

**Validation and exit:** Test direct entry, scanning, long reading, claim-to-evidence relationships, missing fields, keyboard, focus, reflow, touch assumptions, privacy, and optional failure. Exit only after design and content-model weaknesses are corrected or explicitly deferred.

**Documentation impact:** Record established component, layout, content, and visual decisions in authorized governing documents.

# Phase 7 — Shared Component Expansion

**Objective:** Extract reusable components demonstrated by the vertical experience and upcoming confirmed content.

**Main work:** Validate boundaries; establish shared metadata, status/maturity/verification, evidence frames, figures and captions, code and terminal, callouts, disclosures, related content, states, and fallbacks. Document purpose, content contract, variants, responsive behavior, accessibility, misuse, and realistic examples.

**Why now:** Real composition has shown which responsibilities recur.

**Deliverables:** A lean shared component set with tested realistic variants.

**Validation and exit:** Each abstraction has recurring semantic need and handles long bilingual content, empty optional fields, and applicable states. Exit when the two Major Projects can compose shared foundations without a universal template.

**Prohibited/deferred:** Universal cards, boolean-option explosion, unjustified page copies, and the complete speculative inventory.

# Phase 8 — Major Project Experiences

**Objective:** Implement honest, distinct experiences for the two current Major Projects on the shared foundation.

**Why now:** Core content, layout, navigation, and recurring components have been validated vertically.

## Rust Booking API

Use the PRJ-01 evidence record for the audited commit only. Plan the project as an individual educational backend learning project from Nattapong's confirmed internal record and a coherent source-level functional-MVP candidate, not a production-ready system. Build, migration, test, runtime, deployment, security, and operational behavior remain unverified.

The source-level overview may cover six routes for public registration, public login, public room availability, authenticated booking creation, authenticated current-user listing, and authenticated cancellation. Methods are GET, POST, and PATCH. Registration, login, bcrypt password handling, JWT issuance/validation, and protected create/list/cancel handlers are present in source, but the authentication lifecycle and runtime security remain incomplete and unverified.

Present source-level ownership checks for booking association, listing, and cancellation only with the limitation that runtime cross-user isolation, broader authorization, and any role/permission system are unverified. Present PostgreSQL integration, the users/rooms/bookings schema, uniqueness and foreign keys, and the booking-creation transaction as static evidence; do not imply runtime persistence or migration success.

Describe Redis only as a 60-second room-availability response cache with known key/invalidation inconsistencies and request-path sensitivity to acquisition failure. Do not describe it as generic temporary booking storage or claim correct caching. Explain that the overlap check and insert share one transaction while no current database overlap constraint, row lock, serializable guarantee, optimistic concurrency, Redis lock, or idempotency mechanism establishes concurrent double-booking safety.

Record seven tracked but unexecuted tests—five availability tests and two registration-handler tests whose setup depends on PostgreSQL and Redis. Treat the Dockerfile and GitHub Actions workflow as unverified configuration, and Render/Vercel as README claims only; deployment remains To be verified.

Before any repository/history promotion, require private review of the historical tracked `.env` path and any appropriate credential rotation without reproducing values. Build, migration, test execution, runtime routes, cross-user authorization, concurrency integrity, Redis correction, Docker behavior, deployment, artifact redaction, and publication approval remain explicit gates.

## CourtFit

Plan a project overview with individual full-stack and AI integration role, educational and experimental wording, verified interface evidence, streaming, provider switching, Stop/Retry, Thai and English behavior, responsive behavior, dark mode, BYOK, manual Chrome/Firefox/Safari testing, Vercel context, and Live URL To be verified.

Keep limitations visible: no verified product database, real-time price/stock, verified current specifications, authentication, checkout, persistent history, or guaranteed recommendation accuracy. Present API-key behavior only after source verification.

**Deliverables:** Two project experiences with shared typography, metadata, evidence, accessibility, and navigation but composition driven by each project's real material.

**Validation and exit:** All public claims map to evidence or explicit uncertainty; limitations remain close to claims; neither visual polish nor deployment implies production maturity.

# Phase 9 — Research Preparation Experience

**Objective:** Implement a trustworthy space for current inquiry without presenting preparation as completed research.

**Main work:** Support exploration areas, candidate problems, paper reviews, source findings, Nattapong's interpretation, decision criteria, verified hardware, scope constraints, open questions, next investigation, and current decision state.

**Deliverables:** A research-preparation experience and at least one representative source or open-question treatment when real material exists.

**Validation and exit:** Source findings, interpretation, hypothesis, evidence, uncertainty, and future work are structurally distinct. Visible wording states that no final graduation-project topic has been selected.

**Risks:** Invented findings, implied research contribution, unverified hardware, and scientific styling that creates false certainty.

# Phase 10 — Learning, Notes, Experiments, and Coursework

**Objective:** Extend the site to selected non-project content using distinct content-family behavior.

**Order:** Start with the family having the strongest publishable material, then add others incrementally; no fixed family order is imposed.

**Main work:** Learning shows progression and revision; notes support focused reading and references; experiments keep setup, observation, result, and limitations together; coursework retains academic context, constraints, contribution, and evidence. Connect items to projects or research only when the relationship is real. Preserve guided-versus-independent context.

**Deliverables:** A small curated set that validates each implemented family and its relationships.

**Validation and exit:** Content remains distinct, useful, evidence-based, and accessible. Reject skill bars, activity feeds, every exercise as a card, or coursework styled as production work.

**Deferred work:** Complex archive, filters, and taxonomy until volume justifies them.

# Phase 11 — Technical Evidence Systems

**Objective:** Expand artifact presentation only where real content demonstrates recurring needs.

**Main work:** Support verified code excerpts, terminal transcripts, API exchanges, screenshots, browser/mobile evidence, diagrams, tables, comparisons, build and test results, measured benchmarks, hardware evidence, and research figures.

Every artifact requires source, purpose, verification, supported claim, conditions, limitations, accessibility alternative, responsive behavior, and redaction.

**Deliverables:** Reusable evidence treatments validated by actual artifacts, not decorative demos.

**Validation and exit:** Artifacts remain readable, contextual, responsive, safe, and useful without optional enhancement. Unverified evidence is not polished into apparent certainty.

# Phase 12 — State, Error, and Resilience Coverage

**Objective:** Complete honest behavior for non-ideal conditions.

**Main work:** Implement applicable Loading, Empty, Error, Success, Warning, Incomplete, To be verified, Unknown, Not implemented, Unavailable, Archived, broken-media, optional-enhancement-failure, invalid/missing content, and missing-destination states.

**Deliverables:** State coverage mapped to components and page families with stable layout, text, announcements, and recovery.

**Validation and exit:** No state relies only on color, motion, or icons; no fake loading or success; failures preserve core context; direct destinations fail safely.

# Phase 13 — Motion and Optional Enhancement

**Objective:** Add only motion and richer interaction that improve verified understanding or control.

**Prerequisites:** Stable static content and layout, verified interaction need, accessible baseline, designed reduced-motion equivalent, performance justification, interruption behavior, and real evidence.

**Possible work:** Local feedback, disclosures, mobile navigation, media viewing, verified technical sequences, CourtFit demonstrations, or Booking API sequences after verification.

**Deliverables:** A small set of semantic motion roles and optional enhancements with static and reduced-motion alternatives.

**Validation and exit:** Motion communicates a documented purpose, remains controllable and interruptible, and is removable without content loss. Routine section animation, polish-only motion, unsupported page transitions, and unauthentic ambient motion are rejected.

**Decision gate:** Do not select an animation library until recurring implementation needs prove one necessary.

# Phase 14 — Responsive and Bilingual Validation

**Objective:** Systematically validate real content across widths, inputs, scripts, and failure conditions.

**Main work:** Test narrow and wide layouts, touch, keyboard, long Thai and English titles, mixed sentences, metadata wrapping, code and terminal overflow, diagram alternatives, tables, navigation, direct entry, zoom, text enlargement, orientation change, and optional-media failure.

**Deliverables:** Corrected layouts/components, recorded responsive substitutions, and documented bilingual issues and decisions.

**Validation and exit:** Meaning survives reflow, substitution, simplification, and contained access. No desktop composition is merely shrunk below readability.

# Phase 15 — Accessibility Validation

**Objective:** Validate the implemented release scope as an accessible experience.

**Main work:** Review landmarks, headings, keyboard access, focus order and visibility, names, announcements, status text, color independence, forms if present, tables, figures, diagram alternatives, media controls, captions/transcripts, reduced motion, zoom/reflow, touch access, and direct-entry context.

**Deliverables:** Accessibility findings, resolved blockers, documented residual limitations, and updated specifications or implementation records when authorized.

**Validation and exit:** Blocking accessibility problems are resolved before release. Final tools and numeric thresholds are selected only through the appropriate decision gate.

# Phase 16 — Performance, Privacy, and Security Review

**Objective:** Confirm that the release remains fast, resilient, and safe in its actual configuration.

**Main work:** Test core content without optional scripts, asset necessity, responsive images, font and motion cost, client behavior, embeds, third-party requests, progressive enhancement, secrets, API keys, environment variables, logs, screenshots, personal information, test data, links, analytics/consent decisions, and failure behavior.

**Deliverables:** Review findings, resolved blockers, redaction confirmation, approved third-party behavior, and documented limitations.

**Validation and exit:** No secret or unapproved private data is exposed; CourtFit key claims match evidence; optional failure preserves content; security and privacy claims are supported rather than assumed.

# Phase 17 — Quality and Documentation Gate

**Objective:** Establish pre-release consistency across implementation, content, and governing documents.

**Checks:** Apply build, type checking, linting, rendering, real/long content, Thai, English, mixed language, keyboard, focus, responsive behavior, zoom/reflow, reduced motion, states, theme parity if applicable, project evidence, broken enhancements, privacy, secrets, documentation consistency, changed-file scope, and open-issue review as applicable.

**Deliverables:** Quality record, documented omitted checks and consequences, resolved blockers, verified file list, and updated authorized documentation.

**Exit:** All release-blocking rules and acceptance criteria pass; any omission is explicit and does not hide a blocker.

# Phase 18 — Deployment and Release Readiness

**Objective:** Prepare an approved build for public release without choosing a provider in this plan.

**Main work:** Confirm deployment target, build and environment configuration, public destinations, metadata/sharing behavior, domain behavior, errors/fallbacks, absence of sensitive data, repository/deployment links, public contact readiness, rollback or recovery expectations, release state, verification date, and known limitations.

**Deliverables:** Release candidate, deployment decision records, public-content verification, and known-limitations record.

**Validation and exit:** The deployment target and operational responsibilities are approved; the release can be recovered or rolled back according to the selected strategy; public claims remain accurate.

This phase is not a deployment runbook and does not select a platform.

# Phase 19 — Post-Release Validation

**Objective:** Verify public behavior in the deployed environment.

**Main work:** Check navigation, direct/project links, media, responsive behavior, keyboard use, forms if present, error pages, external destinations, public contact, performance observations, privacy and third-party requests, deployment-source consistency, status, and limitation accuracy.

**Deliverables:** Dated production observation record, documented defects, corrected content where authorized, and follow-up scope.

**Validation and exit:** Critical public failures and inaccurate claims are resolved or the affected feature/content is withdrawn. Observed problems must be documented, not hidden.

# Phase 20 — Maintenance and Evolution

**Objective:** Keep the personal engineering website accurate, useful, accessible, and maintainable as work changes.

**Main work:** Review content, links, verification, status, maturity, limitations, projects, research, learning revisions, contact details, dependencies, accessibility regressions, performance, privacy, documentation, archive behavior, historical corrections, project rules, and later `AGENTS.md` alignment.

**Deliverables:** Updated content and verification records, corrections, archive decisions, dependency decisions, and scoped improvement proposals.

**Validation:** Maintenance changes preserve history and current truth; new features re-enter appropriate decision and validation gates.

No schedule is invented here. Cadence must match content volatility, risk, and one-person maintenance capacity.

# Cross-Phase Dependencies

Evidence audit precedes public claims. Technical decision gates precede foundation choices. Content semantics precede repeated page construction. Real content precedes broad component abstraction. The shared foundation precedes project-specific variation. A reliable static experience precedes motion. Verified behavior precedes technical animation. Privacy review precedes publication. The quality gate precedes release, and release precedes post-release validation.

Content verification, privacy review, bilingual sample preparation, and decision research may progress in parallel when their sources are independent. Foundation prototypes and content-model examples may overlap after blocking stack/content decisions are explicit. Accessibility, responsive behavior, performance reasoning, documentation, and evidence review run through all phases rather than waiting for their systematic gates.

Parallel activity must not assume an unresolved gate, publish unverified evidence, or create competing sources of truth.

# Decision Gates

Decision gates cover implementation stack, repository structure, content storage, theme, typography, token values, navigation structure, initial vertical experience, project-evidence publication, motion, forms, search/filtering, analytics, deployment, testing/CI, and later `AGENTS.md` content.

Every gate must record:

- The exact question.
- Governing requirements.
- Evidence and constraints required.
- Decision owner.
- Real alternatives considered.
- Consequences, risks, and maintenance cost.
- Documentation target.
- Reversibility and migration implications.

A gate may conclude “defer” when the need is not established. This plan does not decide any gate.

# Validation Gates

- **Evidence readiness gate:** Representative claims and artifacts are verified, safe, and labeled.
- **Content readiness gate:** At least one complete path and required bilingual/uncertain states can be represented honestly.
- **Foundation gate:** Semantic, visual, responsive, focus, and reading roles work with real content.
- **First vertical experience gate:** One path works end to end and exposes no unresolved structural blocker.
- **Shared component gate:** Every abstraction has recurring need and complete state/accessibility behavior.
- **Major project gate:** Both project experiences preserve current facts, evidence, maturity, and limitations.
- **Content-family gate:** Each implemented family retains its distinct editorial and evidence purpose.
- **Optional-enhancement gate:** Static behavior is complete; enhancement has verified value, fallback, and reduced-motion mapping.
- **Accessibility gate:** No blocking barrier remains in the release scope.
- **Performance and privacy gate:** Core use is stable; costs are justified; sensitive information and third-party behavior are reviewed.
- **Release gate:** Quality, content, deployment, recovery, documentation, and known limitations are approved.

Gates define what must be true, not specific commands or tools.

# Risk Management

- **Invented or overstated content:** Prevent through source fields and labels; detect through claim review; respond by removing, correcting, or downgrading verification.
- **Unverified project behavior:** Prevent with evidence gates; detect through repository/deployment/test comparison; respond by retaining uncertainty or withdrawing claims.
- **Premature choices and over-engineering:** Prevent with reversible decision gates and vertical delivery; detect through unused abstraction/dependency review; respond by simplifying or deferring.
- **Too many components:** Prevent through recurrence rules; detect through one-use variants and duplication; respond by composing, inlining, or removing.
- **Generic template appearance:** Prevent through real content and semantic foundations; detect through originality review; respond by removing borrowed or generic patterns.
- **Excessive motion:** Prevent with static-first delivery; detect through purpose/reduced-motion review; respond by reducing or removing.
- **Insufficient bilingual testing:** Prevent with early real samples; detect through wrap, fallback, and reading tests; respond by correcting typography, content, or layout.
- **Hidden limitations or weak evidence context:** Prevent through required first-layer fields; detect in content review; respond by relocating and clarifying evidence and limits.
- **Privacy leakage and API-key misunderstanding:** Prevent through redaction and source review, including the unresolved private review of the Booking API's historical `.env` path; detect through authorized repository/network/media audit; respond by removing exposure, rotating potentially affected credentials when appropriate, correcting claims, and reassessing release.
- **Dependency growth:** Prevent through dependency gates; detect through inventory and bundle/runtime review; respond by removing, consolidating, or documenting.
- **Incomplete accessibility or mobile evidence failure:** Prevent throughout phases; detect with real artifacts and systematic validation; respond by blocking release or substituting accessible evidence.
- **Documentation drift and maintenance burden:** Prevent with concurrent updates and limited systems; detect during quality/maintenance review; respond with corrections, archive decisions, and simplification.

No probability or severity scores are invented.

# Documentation Update Strategy

Implementation should update authorized inventories and content records when facts or verification change; design-system, layout, component, and motion documents when decisions become approved; project rules when governing practice changes; this plan when phase strategy changes; and `docs/09-task-list.md` when actionable scope is created or reordered.

Later `AGENTS.md` updates should summarize stable operational rules only when explicitly requested. Public content and verification records should change alongside published behavior. Governing documents require authorization before modification.

Material corrections must preserve historical context rather than silently rewriting earlier status, uncertainty, failure, or understanding. Documentation changes should identify their evidence and decision owner where relevant.

# Incremental Release Direction

Partial releases may use a limited verified content scope and explicit incomplete or unavailable states. They must provide stable direct links, clear known limitations, and only confirmed public contacts and destinations.

Do not publish placeholder projects, fake navigation destinations, empty archives, invented metrics, or disabled “coming soon” features without a real reason. Missing content should remain absent or honestly described. Incremental release reduces scope, not quality or truth requirements.

No release dates, versions, or deadlines are defined.

# Deferred Work

Defer complex filtering, search, large archive systems, contact forms, analytics, comments, authentication, personalization, content-management interfaces, interactive diagrams, heavy motion, ambient effects, multiple themes, complex project-specific visual systems, real-time data, recommendation algorithms, and automated content generation until content, visitor, operational, and maintenance evidence justifies them.

Deferred means not required for the current coherent release. It does not mean permanently rejected. Each category must pass its own decision and validation gates before entering scope.

# Implementation Anti-Patterns

- Coding before auditing repository state.
- Choosing tools or visuals from reference-site appearance.
- Building the full component inventory before real content.
- Treating this plan as a low-level task dump.
- Designing every page before validating one vertical experience.
- Creating placeholder content to fill layouts.
- Deferring accessibility or responsive behavior until the end.
- Adding motion before stable content and interaction.
- Adding search or filters before content volume.
- Hiding unresolved decisions in defaults.
- Inventing deadlines, durations, or effort estimates.
- Rewriting governing documents without authorization.
- Publishing unverified project behavior.
- Building infrastructure larger than current needs.
- Treating deployment as production validation.
- Treating visual completion as project completion.

# Implementation Plan Acceptance Criteria

- **Authority alignment:** Every phase follows approved documents and project rules.
- **Clear sequencing:** Each phase has a justified place and bounded outcome.
- **Dependency accuracy:** Blocking relationships and safe parallel work are explicit.
- **Decision preservation:** Unresolved choices remain gates rather than assumptions.
- **Evidence readiness:** Claims and artifacts enter implementation through verification.
- **Content integrity:** Status, maturity, role, limitations, and uncertainty remain intact.
- **Incremental delivery:** One vertical path validates the system before broad expansion.
- **Validation gates:** Progress depends on qualitative truth, usability, and safety conditions.
- **Accessibility, responsive, performance, and privacy integration:** These operate throughout and receive systematic gates.
- **Maintainability:** Scope and infrastructure remain proportionate to one maintainer.
- **Project compatibility:** Both current Major Projects can differ while sharing a foundation.
- **Research compatibility:** Preparation remains visibly unresolved and source-aware.
- **Learning/coursework compatibility:** Non-project work retains distinct context and maturity.
- **Long-term evolution:** Maintenance, history, verification, and re-entry gates are defined.
- **Task-list compatibility:** Phases can become bounded tasks in `docs/09-task-list.md` without inventing decisions.
- **AGENTS.md compatibility:** Stable operational requirements can later be summarized without replacing authority.
- **Complexity resistance:** Optional systems wait for evidence.

# Open Implementation Questions

The following require repository audit, code inspection, stack decisions, content verification, real artifacts, wireframes, prototypes, accessibility and responsive testing, performance review, privacy review, deployment decisions, and sustainable maintenance decisions:

- What implementation currently exists in the nattapong.dev repository?
- Which framework and rendering strategy should be approved?
- How should content be stored, validated, and edited?
- Which page or content path should become the first vertical experience?
- Which project artifacts are safe and public-ready?
- Is the PRJ-01 audited Booking API commit still canonical, and what separate evidence can verify buildability, migrations, test results and coverage, runtime routes, cross-user isolation, concurrency integrity, corrected Redis behavior, Docker operation, Render/Vercel status, historical credential safety, and public-ready artifacts?
- Which CourtFit capabilities, deployment, API-key flow, browser/device behavior, accessibility, and recommendation limits can be verified?
- Which content families belong in the first release?
- Is more than one theme justified by real content and maintenance capacity?
- Which components recur enough to implement?
- Which motion needs are real and evidence-backed?
- Are search, filtering, archives, or forms justified by current content and visitor tasks?
- What deployment and recovery strategy should be approved?
- Which checks belong in local work and continuous integration?
- What maintenance and content-review process is sustainable for one person?
- Which stable parts of this plan and the project rules should later be summarized in `AGENTS.md`?

Open questions must remain gates or deferred work until the required evidence and authority exist.
