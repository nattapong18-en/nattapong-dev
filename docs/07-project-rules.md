# Purpose of This Document

This document defines enforceable working rules for designing, implementing, reviewing, and maintaining nattapong.dev. It converts the approved vision and domain specifications into requirements that protect factual accuracy, content integrity, design coherence, accessibility, performance, privacy, and long-term maintainability.

This document is not final website copy, a design specification, an implementation plan, a task list, an architecture document, production code, or `AGENTS.md`. It governs how work is performed without deciding the unresolved technology or product choices.

`AGENTS.md` may later summarize the most operational rules for coding agents. It must remain a concise derivative of this document and the authoritative specifications, not a replacement for them.

# Rule Language

- **Must:** Mandatory. Work is noncompliant if the rule is not satisfied or an approved exception is not recorded.
- **Must not:** Prohibited. A violation blocks acceptance unless an approved exception exists.
- **Should:** Recommended default supported by current evidence. A different choice requires a documented reason when material.
- **Should not:** Discouraged. Use requires evidence that the alternative better serves the project.
- **May:** Permitted but not required. Permission does not establish priority or justify speculative work.
- **Requires verification:** No factual or implementation conclusion may be published or treated as established until the named evidence is checked.
- **Unresolved:** Deliberately undecided. Work must preserve the decision boundary instead of choosing silently.

Every mandatory rule must be testable by a check or reviewable through a diff, artifact, evidence record, or documented decision. Recommendations must not be rewritten as requirements without new authority.

# Source-of-Truth Hierarchy

Authority depends on the kind of decision:

- **`docs/00-project-vision.md`:** Highest authority for identity, purpose, audiences, non-goals, and long-term direction.
- **`reference/design-dna.md`:** Authority for durable design principles, reference interpretation, originality, and unresolved visual tensions.
- **`docs/01-design-spec.md`:** Authority for experience requirements and qualitative design acceptance.
- **`docs/02-design-system.md`:** Authority for visual semantics, role systems, token direction, state styling, and technical-artifact treatment.
- **`docs/03-layout-spec.md`:** Authority for page families, layout behavior, orientation, reading, and responsive transformation.
- **`docs/04-component-spec.md`:** Authority for component responsibilities, boundaries, composition, variants, and states.
- **`docs/05-content-spec.md`:** Authority for content classification, editorial fields, status, maturity, evidence, verification, privacy, and maintenance.
- **`docs/06-animation-spec.md`:** Authority for motion roles, boundaries, technical sequences, media behavior, and reduced-motion equivalence.
- **Personal, project, and learning inventories:** Internal planning sources for current facts, known uncertainty, and candidate content. They are not final public copy.
- **Source repositories and Git history:** Strong evidence for code, dependencies, configuration, changes, and repository-visible documentation; they do not prove runtime correctness.
- **Deployed applications:** Strong evidence for observed behavior at a recorded time; they do not prove source equivalence, security, reliability, or production quality.
- **Manual and automated tests:** Evidence for the scenarios, environments, and assertions actually tested.
- **Measurements:** Evidence only within the documented method, conditions, units, baseline, and uncertainty.
- **Research documents:** Authority for cited source claims, methods, findings, and research history; source findings remain separate from Nattapong's interpretation.
- **User confirmation:** Authority for personal intent, public readiness, privacy choices, and unresolved product decisions.

When documents conflict, apply the upstream document for intent and the most specific approved specification for its domain. For factual behavior, stronger and more current direct evidence overrides weaker planning assumptions, but the discrepancy must be reported and the appropriate source document updated only when authorized. Implementation must not silently rewrite inventories or specifications to match code, nor silently change code to match an uncertain document.

# Required Reading Order

- **Content work:** Read the project vision, content specification, relevant inventory, and evidence source; read design and layout requirements when presentation is involved.
- **Visual design work:** Read the project vision, design DNA, design specification, design system, and relevant real content.
- **Layout work:** Read the project vision, design specification, layout specification, content specification, and representative artifacts.
- **Component work:** Read the design system, layout specification, component specification, content specification, and relevant page-family content.
- **Motion work:** Read the design specification, design system, component specification, animation specification, and verified behavior being animated.
- **Project-specific work:** Read the project inventory, content specification, relevant project rules, repository evidence if review is authorized, and affected design-domain documents.
- **Implementation planning:** Read the vision, all specifications relevant to planned scope, these project rules, and known implementation constraints.
- **Coding:** Read these rules, the approved plan or task, relevant domain specifications, existing code and local instructions, and tests or contracts affected.
- **Review:** Read the task authorization, changed files, relevant sources of truth, acceptance criteria, and verification evidence.

Agents must read only the documents relevant to the task while respecting upstream authority. They must not use selective reading to bypass a governing requirement.

# Scope Control

- Work **must** stay within the requested objective and authorization.
- Only requested files or systems **may** be changed.
- Unrelated cleanup, refactoring, formatting, dependency updates, and documentation rewrites **must not** be bundled into a task.
- Speculative features, placeholder systems, and premature abstractions **must not** be added.
- Existing approved design direction **must not** be replaced by an unrequested redesign.
- New features, integrations, data collection, public contact methods, and content categories require explicit approval or an approved plan.
- Unresolved questions **must** remain unresolved unless the task supplies authority and evidence to decide them.
- Work **should** choose the smallest coherent change that satisfies the task.

When required information, authority, content, evidence, or a decision is missing and a safe bounded assumption cannot preserve intent, work **must stop and report** the blocker rather than invent an answer.

# File Modification Rules

- Edit only files explicitly authorized by the task.
- Reference and synthesis files must not be modified unless requested.
- Source inventories must not be overwritten with inferred or generated information.
- Files and directories must not be renamed or moved without approval.
- Duplicate specifications, copies, or alternate sources of truth must not be created.
- Generated, lock, configuration, and environment files must be changed intentionally and only when required.
- Unrelated files must not be reformatted.
- Historical documentation and evidence must not be deleted without approval and an assessed preservation need.
- Existing user work must be preserved and unrelated dirty-worktree changes must not be overwritten.
- Completion reports must identify every created, modified, renamed, or deleted file and confirm the scope check.

# Factual Accuracy Rules

The project must not invent project details, dates, metrics, endpoints, architecture, test results, deployment state, research findings, experience, user needs, technologies, contribution, ownership, scale, security, performance, or impact.

Unsupported information must retain one of the established labels:

- **To be verified:** A plausible claim requiring direct review.
- **Unknown:** Current sources do not establish an answer.
- **Self-reported:** Based on Nattapong's account without stronger retained evidence.
- **Not implemented:** Confirmed absent from current work.

Generated examples must not be mistaken for project facts. When a statement cannot be supported or honestly labeled, it must be omitted from public content and recorded as an open question if relevant.

# Verification Rules

Acceptable verification includes authorized repository review, deployment review, documented manual testing, automated tests, measurement, Git history, research sources, and user confirmation.

Verification records should include the claim, source or artifact, relevant revision or environment, method, scope, result, limitations, and date when practical. Publication language must match verification strength.

- Repository presence does not prove runtime behavior, deployment, correctness, security, or maturity.
- A deployment does not prove production quality, scale, source equivalence, or long-term availability.
- Manual browser checks do not prove full compatibility or accessibility.
- Completed scope does not prove production maturity.
- Visual polish does not prove correctness, safety, or evidence quality.
- AI output, generated tests, generated diagrams, and generated explanations do not count as verification until independently checked.

# Content Integrity Rules

Public content must preserve applicable status, maturity, role, contribution, verification, limitations, uncertainty, evidence, and last-reviewed context. High-consequence limitations must appear near related claims, not only in deep content.

Content must not use generic marketing filler, unsupported expertise, fake social proof, or vague claims of innovation. Planned work must not be presented as complete. Guided work must not be presented as fully original. Coursework must not be presented as professional experience. Interest must not be presented as specialization. Experimental or educational work must not be presented as production-ready.

Plain-language context should precede specialist depth. Technologies must be connected to verified roles rather than displayed as isolated badges.

# Project Classification Rules

The current classifications are mandatory until reclassification is supported and approved:

- Rust Booking API: **Major Project**.
- CourtFit: **Major Project**.
- Rust web server: **Learning Progress / Technical Evidence**.
- Thread pool: **Learning Progress / Technical Evidence**.
- LearnCpp work: **Learning Progress**.
- Linux configuration: **Learning Progress / Technical Note / Experiment**, according to the specific content purpose.
- Coursework and laboratories: **Coursework / Learning Progress**.
- Graduation-project exploration: **Research Preparation**.

Reclassification requires changed scope and evidence, not improved presentation. A major project requires meaningful independent scope, identifiable contribution, a current result, sustained engineering depth, and sufficient evidence. A case study requires decision history, constraints, alternatives, validation, limitations, and reflection. Guided or academic origins must remain disclosed after reclassification.

# Rust Booking API Rules

Booking API repository-native claims must use `reference/audits/PRJ-01-booking-api-evidence.md`, which covers `https://github.com/nattapong18-en/booking_api`, branch `main`, commit `d2f754fdd2fd5581ecca9f9e16539504020f6361`. The evidence applies to that commit only and must not be generalized to later source, builds, runtime behavior, or deployments.

Content must classify the project as an individual educational backend learning project from Nattapong's confirmed internal record and a coherent source-level functional-MVP candidate. It must remain explicitly non-production-ready with build, test, migration, runtime, deployment, security, and operational behavior unverified.

The audited router has six source-level routes for public registration, public login, public room availability, authenticated booking creation, authenticated current-user listing, and authenticated cancellation. Current methods are GET, POST, and PATCH; content must not claim PUT or DELETE.

Authentication wording may state that source implements registration, login, bcrypt password hashing/verification, JWT issuance, Bearer-token extraction/validation, and JWT-protected create/list/cancel handlers. It must also state that the lifecycle is incomplete and runtime security is unverified. Source-level authenticated-user ownership checks associate bookings and restrict listing and cancellation lookup/update, but content must not infer runtime cross-user isolation, complete authorization, or a role/permission system.

PostgreSQL wording may state that all six handlers integrate it at source level and that the current users/rooms/bookings schema includes username uniqueness and relational foreign keys. Booking creation performs an application-level overlap check and insert in one transaction. Runtime persistence and migrations were not executed, and no current overlap constraint, row lock, serializable-isolation guarantee, optimistic concurrency, Redis lock, or idempotency mechanism establishes concurrent safety.

Redis must be described specifically as a 60-second room-availability response cache. It is not session, JWT, lock, rate-limit, idempotency, or booking-record storage in the audited source. Cache key construction and invalidation are inconsistent, Redis acquisition failure affects some request paths, and correct cache behavior is not established.

Testing wording must state that seven automated test functions are tracked—five availability tests and two registration-handler tests—but were not run; passing status and coverage remain unverified, and handler tests depend on PostgreSQL and Redis. A Dockerfile and GitHub Actions workflow are configuration evidence only. Render and Vercel are README documentation claims only, and current deployment remains To be verified.

A historical tracked `.env` path must remain an internal publication blocker. Its values were deliberately not inspected or reproduced; private owner review and any appropriate credential rotation are required before prominent repository-history publication.

The project must not claim successful build or tests, runtime endpoint correctness, secure or complete authentication, complete authorization, correct cache invalidation, concurrent-booking safety, scalability, production readiness, monitoring, or active deployment without separate evidence appropriate to that claim.

Any new claim requires repository, runtime, test, deployment, or measurement evidence appropriate to that claim. Limitations must remain visible beside capability summaries.

# CourtFit Rules

Content must describe CourtFit as an individual full-stack and AI integration project, an educational and experimental basketball shoe recommendation chatbot. Current technologies are Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, OpenAI integration, and Google Gemini integration. Current described capabilities include streaming responses, provider switching, Stop and Retry controls, Thai and English interaction, responsive behavior, dark mode, and a BYOK workflow. Current testing is manual in Chrome, Firefox, and Safari. Vercel is the deployment platform; the live URL is To be verified.

Every meaningful overview must state that CourtFit has no verified product database, real-time prices, real-time stock, verified current product specifications, authentication, checkout, persistent chat history, or guaranteed recommendation accuracy.

The project must not claim API-key security, exact key storage, direct provider request behavior, full browser compatibility, professional footwear advice, injury prevention, commercial readiness, or a live URL before verification. Recommendations must remain informational model output requiring independent verification.

# Design Integrity Rules

The website must remain calm, precise, thoughtful, technically credible, personal, honest, content-led, and maintainable. Design decisions should strengthen identity, hierarchy, reading, orientation, evidence, or control.

The website must not adopt generic portfolio aesthetics, SaaS landing-page structure, agency spectacle, copied reference motifs, trend-driven effects, artificial luxury, generic developer dark themes, or AI-template appearance. Project-specific expression may exist only within the stable shared system and must follow real content.

# Design-System Rules

- Semantic roles must be defined before raw values.
- Components must consume semantic roles rather than invent local raw styling where possible.
- Visual vocabulary must remain limited and justified by recurring meaning.
- Interaction and content states must be accessible in every supported theme.
- Multiple themes, if adopted, must preserve parity for hierarchy, focus, evidence, status, diagrams, code, and identity.
- Status, maturity, verification, and other meaning must not depend on color alone.
- Technical artifacts must be real, sourced, contextual, readable, and evidence-bearing.
- Typography must support tested Thai, English, and mixed-language content.
- Radius, border, accent, and elevation vocabularies must remain limited.
- Evidence surfaces must preserve caption, source, verification, limitation, and alternatives.

Arbitrary raw values, page-specific token names, card treatment for every group, badge overload, tiny low-contrast metadata, decorative terminals or diagrams, skill-logo walls, excessive gradients, glow overload, default glassmorphism, and fragmenting project themes are prohibited.

# Layout Rules

- Layout must follow content type, maturity, evidence, and reader need.
- Reading alignment and orientation must remain stable.
- Evidence must stay near the claim it supports.
- Technical depth must follow sufficient first-layer context.
- Direct-entry pages must provide identity, classification, status, and parent context.
- Long pages must include orientation when their length or structure justifies it.
- Responsive design must reorganize, substitute, or simplify rather than shrink desktop layouts below readability.
- Empty and incomplete states must communicate reality without filler.
- Status, maturity, role, and important limitation must appear in the first layer when omission could mislead.

Universal card grids, a final homepage order before content review, repeated identical page structures, empty luxury spacing, excessive simultaneous columns, full-width media without explanatory need, long pages without orientation, hidden essential content, and product landing-page rhythm are prohibited.

# Component Rules

- Each reusable component must have one clear responsibility.
- A recurring semantic, interaction, accessibility, or state need is required before abstraction.
- Focused composition is preferred to excessive variants.
- Applicable default, interaction, loading, error, empty, incomplete, and unavailable states must be explicit.
- Accessibility and responsive behavior must be part of the component contract.
- Components must handle realistic long Thai, English, and mixed-language content.
- Empty and incomplete behavior must remain honest.
- Evidence components must preserve context, source, verification, supported claim, limitation, and alternative.

A universal card model, boolean-option explosion, page-specific copies without semantic reason, decorative components, speculative search/filter/form/overlay/archive systems, components based only on appearance, hover-only behavior, color-only meaning, and components that fail with long content are prohibited.

# Motion Rules

- Motion must communicate meaning before movement.
- Core static content must exist before enhancement.
- Use the lowest intensity that communicates the change.
- Spatial movement must match actual structure and relationship.
- Time-based evidence must provide user control.
- Reduced-motion behavior must preserve equivalent meaning, feedback, and orientation.
- Transitions must be interruptible and leave a valid state.
- Explanatory motion must have a static alternative.
- Technical animation requires verified behavior.

Animation on every section, generic fade-up reveals, typewriter and split-text effects, scroll hijacking, forced global smooth scrolling, parallax, cursor followers, magnetic buttons, marquees, fake terminal typing, code rain, motion-only meaning, animation of unverified architecture, and copied motion signatures are prohibited.

# Accessibility Rules

Accessibility is part of acceptance, not a later enhancement.

- Use semantic structure and a logical heading hierarchy.
- All navigation, controls, disclosures, forms, overlays, and media must be keyboard accessible.
- Focus must be clearly visible and stable.
- Interactive elements and nontext content must have accessible names and descriptions.
- Color must not be the only source of meaning.
- Status, maturity, verification, and state must appear in text.
- Controls must support touch and must not require precise pointer movement.
- Content must support zoom, text enlargement, and reflow without loss.
- Thai, English, and mixed text must remain readable.
- Images, media, diagrams, and technical artifacts must have appropriate alternatives.
- Diagrams require text descriptions; data tables require meaningful headers.
- Form errors must be associated with fields and explain recovery.
- Reduced-motion preferences must be respected with equivalent behavior.
- Time-based media requires controls, captions, transcripts, or appropriate equivalents.
- Essential content must not be hover-only.

Final numeric standards and testing tools remain Unresolved.

# Responsive Rules

- Semantic reading order must remain correct across layouts.
- Reflow must follow real content failures rather than predetermined device assumptions.
- Regions must stack when simultaneous columns no longer support comprehension.
- Metadata must regroup or wrap instead of shrinking below readability.
- Controls must remain touch-friendly and keyboard usable.
- Code and terminal blocks must remain readable through safe wrapping or contained overflow.
- Diagrams require responsive variants, sequencing, or text alternatives when scaling fails.
- Evidence may be substituted when the original asset is unsuitable for the context.
- Focus, navigation, captions, status, and limitations must remain stable.
- Nonessential chrome must reduce before essential content or evidence.

Simply shrinking desktop layouts is prohibited.

# Performance Rules

- Core identity, content, navigation, status, and limitations must remain available without optional enhancements.
- Media must be justified by evidence or comprehension value.
- Images and media should use context-appropriate responsive assets.
- Media regions should preserve stable dimensions where their structure is known.
- Font count, variants, and script cost must remain limited and justified.
- Animation cost must remain proportionate to meaning and stop when unnecessary.
- Optional embeds require static context and failure fallbacks.
- Expensive interactions require a static alternative.
- Client-side behavior must provide real interaction or comprehension value.
- Progressive enhancement must preserve core use when optional scripts fail.

Numeric budgets and implementation libraries remain Unresolved.

# Privacy and Security Rules

API keys, tokens, environment variables, repository secrets, logs, screenshots, user data, personal information, location, research data, and third-party information must be protected.

- Public material requires redaction review and public-readiness confirmation.
- Examples must use safe test data; real user data must not appear.
- Secrets must not be committed, logged, shown in screenshots, embedded in examples, or exposed through error output.
- Personal location and unapproved accounts must remain private.
- Research data requires applicable consent, ownership, privacy, and publication review.
- Security and privacy claims require direct supporting evidence.

CourtFit API-key storage, persistence, logging, request flow, and backend involvement require source review before publication or security claims.

# Dependency Rules

A new dependency requires a recurring need, a clear advantage over platform capabilities or existing code, acceptable accessibility and performance, maintenance viability, license compatibility, stack compatibility, and a fallback or removal path when practical.

Libraries must not be installed before requirements are understood. Multiple libraries must not solve the same responsibility without an approved reason. Animation libraries must not be added before verified motion needs exist. Component libraries must not be added for isolated visual effects. Large dependencies must not be added for trivial behavior or because reference sites appear to use them.

No library is selected by this document.

# Code Quality Rules

Future implementation must use clear names, small focused modules, semantic markup, explicit state, type safety where the selected stack supports it, and predictable error handling. Dead code, unexplained constants, and duplicated business or presentation logic must be removed or avoided.

Comments should explain reasons, constraints, evidence, or nonobvious tradeoffs rather than repeat syntax. Client-side code should be avoided when static or platform behavior serves the requirement. Premature optimization and abstraction should be avoided. Refactoring must preserve content meaning, accessibility, states, and verified behavior.

Framework-specific rules remain Unresolved until a stack is approved.

# Content and Code Separation Rules

- Content meaning, status, maturity, verification, and evidence must remain separate from visual appearance.
- Project facts must come from approved content sources and direct evidence, not component defaults.
- Components must not invent fallback claims, dates, links, technologies, limitations, or metrics.
- Missing optional fields must be omitted or represented honestly, never filled with fake copy.
- Editorial updates should not require rewriting unrelated component logic where practical.
- Verification labels and status must be explicit content data, not inferred from styling or repository presence.
- Internal publication notes, private contacts, verification tasks, and editorial warnings must not appear publicly.

The final CMS, file format, and schema remain Unresolved.

# Error and State Rules

Applicable loading, empty, error, success, warning, incomplete, To be verified, unavailable, archived, optional-enhancement-failure, and broken-media states must be designed and implemented.

Every state must use honest text, stable layout, accessible state communication, and a recovery or return path when action is possible. State must not rely on color, motion, or icons alone. Failure of optional media or interaction must not remove the surrounding claim or core content. Fake loading, false success, disabled controls for nonexistent features, and empty filler are prohibited.

# Testing Rules

Future work must run the checks applicable to its scope. Categories include build, type checking, linting, rendering, content variation, long content, Thai, English, mixed-language content, keyboard use, focus, responsive behavior, zoom and reflow, reduced motion, empty/error/loading states, theme parity where applicable, real project artifacts, optional-enhancement failure, and privacy or secret review.

Tests must use representative content and states, not only ideal placeholders. Project claims require evidence-specific tests before publication. If a category is not applicable or cannot be run, completion notes must state that fact and its consequence. Testing libraries remain Unresolved.

# Review Rules

Reviewers must check task scope, changed files, source-of-truth compliance, factual accuracy, unverified claims, status and maturity, limitations, accessibility, responsive behavior, performance implications, privacy, dependency additions, unrelated changes, documentation changes, and unresolved questions.

Review findings must distinguish blocking issues from recommendations. Mandatory-rule violations, unsupported claims, secret exposure, inaccessible essential behavior, hidden blocking failures, and out-of-scope changes are blocking. Preferences without governing evidence should be recommendations, not invented requirements.

# Git and Change Discipline

- Changes should be small, coherent, and attributable to one task.
- Unrelated changes must not be included.
- The diff and file list must be reviewed before completion.
- Secrets and private data must never be committed.
- Shared history must not be rewritten without explicit approval.
- Historical evidence and documentation must not be deleted casually.
- Commit messages, when commits are requested, should explain the meaningful change.
- Documentation must change when behavior, status, evidence, or a governing decision changes.
- Generated files must be handled intentionally and identified.
- Existing user work must be preserved.
- Completion reports must list changed files and disclose incomplete checks.

No branch model or commit format is established here.

# Documentation Rules

Relevant documentation must be updated when project status, maturity, verification, features, limitations, deployment, repository visibility or behavior, public contact information, finalized design-system decisions, dependencies, or implemented behavior changes.

Updates must preserve historical integrity. Corrections, changed understanding, removed features, and downgraded verification should be recorded meaningfully rather than silently rewritten when they affect the development story. Documentation must not be marked current when its links, evidence, or behavior were not reviewed.

# AI-Assisted Work Rules

AI agents must read relevant sources, stay within scope, avoid invented facts, preserve unresolved decisions, verify code changes and generated claims, explain material assumptions, attribute external guidance where relevant, and report incomplete work honestly.

Agents must not replace user intent with generic best practices, claim generation as verification, infer project maturity from visual polish, or hide tests and reviews that were not performed. AI output is not evidence. Material AI assistance must be attributed when omission would misrepresent authorship or independence.

# Definition of Ready

Before an implementation task begins, it should have:

- A clear objective and explicit scope.
- Authorized files or systems.
- Relevant source documents and local instructions.
- Known qualitative acceptance criteria.
- Known constraints and unresolved decisions.
- Required content, artifacts, or evidence.
- Justified dependencies, if any.
- Identified privacy and security concerns.
- Applicable testing and review expectations.

A task is not ready if implementation would require inventing content, behavior, architecture, or a product decision. Explicitly labeled exploratory tasks may use a smaller Definition of Ready when their purpose is to gather evidence without committing to a solution.

# Definition of Done

A task is complete only when:

- Requested work is implemented or documented within scope.
- Only authorized files were changed.
- No unsupported claim was introduced.
- Relevant acceptance criteria and mandatory rules are satisfied.
- Applicable interaction, content, loading, error, empty, and incomplete states are handled.
- Accessibility was considered and tested in proportion to the change.
- Responsive behavior and performance impact were considered.
- Privacy and secrets were reviewed.
- Applicable tests and checks passed, or omissions were reported with impact.
- Governing documentation was updated when authorized and necessary.
- Unresolved issues and known limitations were reported.
- Every changed file was reported.
- No known blocking issue was hidden.

# Rule Exceptions

Every exception requires an explicit reason, precise scope, owner or decision maker, temporary or permanent status, risk assessment, review date when temporary, and documentation location. Exceptions must not be inferred from precedent or visual convenience.

Temporary exceptions must define their exit condition. Permanent exceptions must identify which governing rule or source is superseded and by whose authority. Silent exceptions are prohibited.

# Rule Enforcement

Rules should be applied through task prompts, implementation plans when requested, review checklists, tests, documentation, later `AGENTS.md` instructions, and human judgment.

Not every qualitative rule needs automation. Automated checks should target stable, objective conditions; review should handle content integrity, design judgment, evidence, and exceptions. Violations must remain observable through diffs, artifacts, test output, evidence records, or review notes. Passing automation does not override a documented manual requirement.

# Project Rule Anti-Patterns

- Restating entire specifications instead of extracting operational rules.
- Rules too vague to test or review.
- Rules that prescribe an unsupported framework, tool, architecture, or content volume.
- Rules based on copied reference appearance.
- Rules that assume future search, archive, content, or team needs.
- Rules that force unnecessary libraries or abstraction.
- Rules that silently resolve open decisions.
- Conflicting rules without an authority hierarchy.
- Rules with no exception mechanism.
- Turning every recommendation into a mandatory requirement.
- A document so broad or repetitive that operational rules are ignored.
- Rules written only for coding agents rather than the whole project lifecycle.
- Stale rules that no longer match approved specifications or verified behavior.

# Project Rule Acceptance Criteria

- **Authority:** Each rule follows an approved source or verified fact.
- **Traceability:** Reviewers can identify the governing document, evidence, or decision type.
- **Clarity:** Requirement language and scope are unambiguous.
- **Enforceability:** Mandatory rules are testable or reviewable.
- **Scope control:** Rules prevent unauthorized and speculative work.
- **Factual integrity:** Claims, classifications, statuses, and limitations remain evidence-based.
- **Design integrity:** Rules preserve the approved identity without fixing unresolved visuals.
- **Accessibility:** Access is mandatory throughout design and implementation.
- **Responsive behavior:** Meaning and function survive reflow and input changes.
- **Performance:** Optional enhancement never displaces core content or unjustified cost.
- **Privacy:** Sensitive information and public readiness receive explicit review.
- **Maintainability:** Requirements remain proportionate to current size and long-term growth.
- **Testing:** Applicable checks and omitted checks are visible.
- **Reviewability:** Blocking violations can be separated from recommendations.
- **AGENTS.md compatibility:** Operational rules can later be summarized without changing authority.
- **Resistance to complexity:** Rules do not create speculative systems, dependencies, or processes.

# Open Project-Rule Questions

The following remain Unresolved until the final implementation stack, repository structure, build and testing tools, deployment strategy, content storage strategy, design tokens, accessibility standards, performance budgets, branch and release workflow, code ownership, automation, continuous integration, analytics and privacy choices, and content-review responsibility are established:

- Which rules should later be copied or summarized into `AGENTS.md`?
- Which rules can be enforced automatically without encoding unstable design judgment?
- Which checks belong in continuous integration?
- Which source documents must be read for each concrete implementation-task category?
- Which rules depend on the final framework, rendering model, or content system?
- Which accessibility, performance, media, and quality rules need numeric thresholds later?
- Who may approve temporary and permanent exceptions?
- How often should project rules and their source documents be reviewed?
- Which Rust Booking API rules may change after build, migration, runtime, test, concurrency, Redis, historical-secret, and deployment verification extends the completed static repository audit?
- Which CourtFit rules may change after source, deployment, API-key, browser, device, accessibility, and recommendation review?
- Who owns public-content verification, correction, and last-reviewed updates?
- What release, rollback, incident, backup, or monitoring rules become necessary after deployment architecture is chosen?

Open questions must not be converted into implementation requirements without evidence and approval.
