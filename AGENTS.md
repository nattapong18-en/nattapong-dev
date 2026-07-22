# Project Identity

nattapong.dev is a living, long-term personal engineering website. It should remain calm, precise, thoughtful, honest, technically credible, personal, content-led, accessible, and maintainable.

Do not reshape it into a generic portfolio, SaaS landing page, project-card gallery, personal blog only, agency showcase, component-library demo, AI-generated template, or clone or mixture of reference websites.

# Governing Documents

Use the following sources for their documented domains:

- `docs/00-project-vision.md`: purpose, identity, audience, and non-goals.
- `reference/design-dna.md`: durable design principles and originality.
- `docs/01-design-spec.md`: experience requirements.
- `docs/02-design-system.md`: semantic visual foundations.
- `docs/03-layout-spec.md`: page families and layout behavior.
- `docs/04-component-spec.md`: component responsibilities and boundaries.
- `docs/05-content-spec.md`: content, status, maturity, evidence, and verification.
- `docs/06-animation-spec.md`: motion and reduced-motion rules.
- `docs/07-project-rules.md`: full operational rules.
- `docs/08-implementation-plan.md`: phased sequence and decision gates.
- `docs/09-task-list.md`: current task IDs, dependencies, blockers, and status.
- `reference/synthesis/`: internal planning sources, not final public copy.
- Authorized repositories, deployments, tests, measurements, research documents, and user confirmation: direct evidence within their recorded scope.

This file is an operational derivative and does not override those sources. When sources conflict, follow upstream intent and the most specific governing specification for the domain. For factual behavior, stronger and more current direct evidence takes priority. Report conflicts; do not silently rewrite specifications, inventories, or implementation.

# Task Execution Workflow

1. Identify the selected Task ID or explicit objective.
2. Read its record in `docs/09-task-list.md` when applicable.
3. Read only the governing documents relevant to the work.
4. Read local instructions applying to the target path.
5. Confirm authorized files and systems.
6. Confirm dependencies, blockers, evidence, and unresolved decisions.
7. Make the smallest coherent change.
8. Validate proportionately using approved existing capabilities.
9. Review the diff or final content and changed-file list.
10. Report results, omitted checks, blockers, limitations, and follow-ups.

Handle one bounded task at a time where practical. A task's presence in the list does not authorize execution; the prompt must authorize the work and its files or systems.

# Required Reading by Work Type

- **Content:** Vision, content specification, relevant inventory, and supporting evidence.
- **Visual design:** Vision, design DNA, design specification, design system, and real content.
- **Layout:** Design specification, layout specification, content specification, and representative artifacts.
- **Components:** Design system, layout, component and content specifications, and real use cases.
- **Motion:** Animation specification, relevant component contract, and verified behavior.
- **Project-specific:** Relevant project inventory, content and project rules, verification evidence, and task record.
- **Coding:** Project rules, implementation plan/task, relevant specifications, existing code, local instructions, and affected tests.
- **Review:** Task authorization, diff, acceptance criteria, governing sources, and validation evidence.

Do not require every project document for every small task, but do not omit a governing source needed to interpret the work safely.

# Scope and File Safety

- Edit only explicitly authorized files.
- Do not perform unrelated cleanup, formatting, refactoring, or dependency updates.
- Do not rename, move, or delete files without approval.
- Do not overwrite unrelated or user-owned dirty work.
- Preserve historical documentation and evidence.
- Do not create duplicate sources of truth.
- Do not modify reference or synthesis files unless explicitly requested.
- Do not change governing documents merely to make implementation appear compliant.
- Report every file created, modified, renamed, or deleted.

When workspace state is unknown, inspect it only through an authorized audit task before mutation.

# Factual Accuracy

Do not invent project details, dates, metrics, endpoints, architecture, dependencies, tests, deployment state, research findings, user needs, experience, contribution, security, performance, or impact.

Unsupported information must remain **To be verified**, **Unknown**, **Self-reported**, or **Not implemented**. Generated copy, code, tests, diagrams, and explanations are not evidence until independently checked. Omit unsupported public claims when an honest label is insufficient.

# Verification and Evidence

Acceptable evidence includes authorized repository review, Git history, deployment review, documented manual testing, automated tests, measurements, research sources, and user confirmation.

Publication language must match evidence strength:

- Repository presence does not prove runtime correctness.
- Deployment does not prove production readiness.
- Manual browser checks do not prove complete compatibility.
- Visual polish does not prove correctness or maturity.
- Completion does not prove production validation.
- AI output is not verification.

Technical artifacts must retain source, purpose, conditions, supported claim, verification, limitations, accessibility context, and redaction where applicable.

# Project Content Guardrails

## Rust Booking API

Current approved wording:

- Major Project; individual backend project.
- Functional MVP; educational and non-production-ready.
- Rust and Axum; PostgreSQL; Redis used for temporary data.
- Registration-related authentication only.
- GET, POST, and PUT operations.
- No automated tests.
- Deployment To be verified.

Do not claim exact endpoints, complete authentication or authorization, password hashing, JWT behavior, Redis expiration, transactions, conflict correctness, scalability, security, production readiness, or deployment without verification.

## CourtFit

Current approved wording:

- Major Project; individual full-stack and AI integration project.
- Educational and experimental basketball shoe recommendation chatbot.
- Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
- OpenAI and Gemini integration; streaming responses; provider switching; Stop and Retry.
- Thai and English interaction; responsive behavior; dark mode; BYOK workflow.
- Manual Chrome, Firefox, and Safari testing.
- Vercel platform context; Live URL To be verified.

Preserve these limitations: no verified product database, real-time prices, real-time stock, verified current product specifications, authentication, checkout, persistent chat history, or guaranteed recommendation accuracy.

Do not claim API-key security, exact storage, request path, full browser compatibility, professional advice, injury prevention, commercial readiness, or live deployment without verification.

# Content and Design Integrity

- Keep status, maturity, role, contribution, verification, limitations, and uncertainty visible where relevant.
- Put plain-language context before specialist depth and evidence near supported claims.
- Connect technologies to verified roles instead of decorative badges.
- Preserve correct classification among Major Projects, research preparation, learning, notes, experiments, guided work, and coursework.
- Research Preparation must state that no final graduation-project topic has been selected.
- Make components and layouts follow real content, not placeholders.

Do not use generic marketing filler, unsupported professional titles or expertise, coursework as professional work, interests as specialization, plans as completed features, or experimental work as production-ready.

Avoid universal card grids, skill-logo walls, decorative terminals/code/diagrams/metrics, copied motifs, generic developer dark-theme styling, excessive gradients or glow, default glassmorphism, and agency spectacle.

# Implementation Discipline

- Prefer semantic HTML and platform behavior when sufficient.
- Prefer small focused modules, clear naming, and explicit state.
- Prefer composition over large configurable components.
- Abstract only recurring semantic, interaction, state, or accessibility responsibilities.
- Keep content meaning separate from presentation and internal editorial notes out of public output.
- Preserve predictable errors and honest loading, empty, incomplete, unavailable, and failure states.
- Avoid unnecessary client-side code, premature abstraction, premature optimization, and oversized infrastructure.
- Preserve content integrity and accessibility during refactoring.

Do not invent framework-specific conventions before repository state and the stack are approved.

# Dependencies

A dependency may be added only when the task authorizes it, a recurring need exists, it clearly improves on platform or existing capabilities, accessibility and performance are acceptable, maintenance and licensing are viable, it fits the approved stack, and fallback or removal implications are understood.

Do not install libraries before requirements are understood, add multiple libraries for one responsibility, add large dependencies for trivial behavior, add animation libraries before verified motion needs, or choose libraries because reference sites appear to use them.

# Accessibility and Responsive Behavior

Accessibility is part of acceptance. Applicable work must preserve semantic structure, logical headings, keyboard access, visible focus, accessible names and state communication, color-independent meaning, touch access, zoom and reflow, Thai/English/mixed-language readability, table headers, figure and diagram alternatives, form error association, media controls/captions/transcripts, reduced-motion equivalence, and access to essential information without hover.

Responsive behavior must reorganize, wrap, stack, simplify, substitute, or contain content rather than merely shrink a desktop layout. Code, terminal output, diagrams, tables, metadata, navigation, captions, status, and limitations must remain usable on narrow screens.

# Motion

Require static content before enhancement, meaning before movement, the lowest useful intensity, truthful spatial logic, interruptible transitions, user control for time-based evidence, static and reduced-motion alternatives, and verified behavior before technical animation.

Do not use routine section reveals, generic fade-ups, typewriter or split-text effects, scroll hijacking, forced global smooth scrolling, parallax, cursor followers, magnetic buttons, infinite marquees, fake terminal typing, unverified architecture animation, motion-only meaning, or copied motion signatures.

Do not select or add an animation library without a separate approved decision.

# Privacy and Secrets

Protect API keys, tokens, environment variables, repository secrets, logs, screenshots, user data, personal information, location, research data, and third-party information.

Use safe test data, redact before publication, keep secrets out of source control/examples/logs/screenshots/errors, confirm public readiness for contact information, and make no privacy or security claim without evidence. CourtFit's API-key flow requires source review before public claims. Never reproduce secret values in reports.

# Testing and Validation

Run only checks applicable to the task and available through approved existing tooling. Categories may include build, type checking, linting, rendering, real and long content, Thai/English/mixed text, keyboard/focus, responsive behavior, zoom/reflow, reduced motion, content states, theme parity, real artifacts, enhancement failure, and privacy/secret review.

Do not invent commands or tools before repository audit. Do not claim a check passed unless it was run and its result inspected.

When a check cannot be run, report which check was omitted, why, the consequence, and the follow-up needed.

# Completion Requirements

Before reporting completion:

- Confirm the objective is satisfied and only authorized files changed.
- Review the diff or final file content.
- Confirm no unsupported claim was introduced.
- Confirm applicable acceptance criteria and mandatory rules are satisfied.
- Address relevant accessibility, responsive, performance, and privacy concerns.
- Record checks actually performed and those omitted.
- Record unresolved issues, limitations, blockers, and follow-ups.
- Do not hide a known blocking issue.

A generated file alone does not make a task Done.

# Completion Report

Report:

- Task ID or objective.
- Exact files created, modified, renamed, or deleted.
- Concise summary.
- Validation and checks performed.
- Checks omitted and why.
- Material assumptions or evidence used.
- Remaining blockers, limitations, and unresolved decisions.
- Suggested follow-up task when applicable.

Do not claim verification from generation alone.

# Stop Conditions

Stop and report when authorization is missing; the workspace or target is uncertain; a path is outside scope; required content or evidence is missing; governing sources materially conflict; progress requires silently deciding an Unresolved choice; a change would overwrite unrelated work; a secret or privacy risk appears; a project claim cannot be supported; mandatory validation fails; a dependency or architecture choice needs approval; or safe progress requires invented content, behavior, paths, or results.

Do not bypass a blocker with a convincing assumption.
