# Purpose of This Specification

This document defines reusable component responsibilities, boundaries, variants, composition rules, states, content expectations, and accessibility behavior for nattapong.dev. It translates the approved content model, layout behavior, and semantic design-system direction into a practical component inventory for a long-term personal engineering website.

Components should preserve content accuracy, evidence context, readable hierarchy, and consistent interaction while allowing projects, research, notes, experiments, learning, coursework, background, and contact content to differ where their needs differ.

This specification does not define implementation code, framework APIs, prop names, file structure, CSS, tokens, final routes, or page layouts. It does not require every listed possibility to be implemented; actual components must be justified by recurring content, wireframes, prototypes, or interaction needs.

# Component System Goals

- Reuse recurring responsibilities without flattening different content types.
- Give each component a clear, testable purpose.
- Preserve the fidelity, uncertainty, maturity, and evidence of source content.
- Consume semantic design-system roles consistently.
- Make accessibility part of every component contract.
- Define responsive behavior with the component, not as an afterthought.
- Keep the inventory maintainable and proportional to current content.
- Keep technical evidence functional, contextual, and readable.
- Allow bounded project and content-family variation.
- Prefer low component complexity and straightforward composition.
- Resist generic cards, SaaS patterns, and component-library-demo aesthetics.
- Allow long-term extension when real content establishes a recurring need.

# Component Principles

- **One clear responsibility:** A component should solve one coherent content, interaction, evidence, or orientation problem.
- **Content model before appearance:** Shared fields and editorial meaning determine abstraction before visual similarity.
- **Composition before excessive variants:** Combine focused components instead of creating a configurable all-purpose block.
- **Semantic roles before raw styling:** Components consume meaning-based typography, surface, color, state, and spacing roles.
- **Accessibility as part of the contract:** Semantics, names, focus, keyboard behavior, alternatives, and announcements are required behavior.
- **Responsive behavior as part of the contract:** Each component specifies reflow, wrapping, overflow, simplification, and touch behavior.
- **Evidence near claims:** Artifact components retain their explanation, source, verification, supported claim, and limitation.
- **Explicit states:** Default, interactive, loading, error, empty, incomplete, and unavailable states are deliberate.
- **Honest empty and incomplete states:** Missing evidence remains missing; placeholders never imply completion.
- **No universal card abstraction:** Projects, research, notes, experiments, and learning do not share one conceptual card merely because each can occupy a rectangle.
- **No speculative inventory:** Do not implement search, forms, overlays, viewers, or filters until real use justifies them.
- **No page-specific duplication without evidence:** Prefer shared responsibility or composition; accept project-specific structure when semantics truly differ.

# Component Classification

- **Foundation components:** Semantic text, action, grouping, surface, focus, and media primitives.
- **Navigation components:** Global, local, parent-context, return, and related wayfinding.
- **Content-structure components:** Introductions, headings, sections, reading groups, and long-page orientation.
- **Metadata components:** Status, maturity, verification, role, dates, technology roles, and review context.
- **Evidence components:** Figures, code, terminal output, API examples, diagrams, tables, tests, and measurements.
- **Editorial components:** Notes, callouts, citations, disclosures, reflection, revisions, and references.
- **Project components:** Project summaries and project-specific evidence compositions.
- **Research components:** Questions, source findings, interpretations, methods, uncertainty, and preparation states.
- **Learning components:** Milestones, mistakes, changes in understanding, current level, and remaining gaps.
- **Coursework components:** Academic context, constraints, contribution, evidence, and learning outcomes.
- **Feedback and state components:** Loading, success, warning, error, empty, incomplete, unavailable, and archived states.
- **Overlay and disclosure components:** Temporary layers and optional depth when inline presentation is insufficient.
- **Form and control components:** Fields, selections, search, filters, media controls, and settings when justified.

Classification clarifies responsibility, documentation, and reuse. It should not create mandatory code layers or parallel abstractions for every class. A simple element may serve more than one family when its semantic contract stays clear.

# Shared Component Contract

Every reusable component should document:

- **Purpose:** The recurring problem it solves.
- **Required content:** Minimum meaningful and accessible input.
- **Optional content:** Additions that may be omitted without breaking meaning.
- **Variants:** Semantically justified differences only.
- **States:** Applicable content, interaction, availability, and feedback states.
- **Responsive behavior:** Reflow, wrapping, ordering, overflow, substitution, and touch behavior.
- **Accessibility behavior:** Element semantics, accessible name, focus, keyboard model, announcements, alternatives, and reduced motion.
- **Semantic role:** Design-system roles it consumes and meaning it communicates.
- **Evidence or source context:** Required provenance and verification when the component presents evidence.
- **Empty behavior:** Whether it is omitted, replaced by honest text, or displays an explicit empty state.
- **Error behavior:** How failure is described and recovered from.
- **Loading behavior:** Whether loading is necessary and how layout and core meaning remain stable.
- **Interaction behavior:** Trigger, outcome, state visibility, cancellation, and fallback.
- **Related-content behavior:** Whether and why it may connect to another item.
- **Maintenance notes:** Content freshness, verification, ownership, or review concerns.

# Composition Rules

- Prefer small meaningful composition over large components with many modes.
- Avoid deeply nested wrappers and surfaces that obscure semantic structure.
- Keep DOM and visual content order aligned with reading order.
- Preserve identity, content type, parent context, status, and orientation on direct-entry pages.
- Allow Rust Booking API and CourtFit to compose shared evidence and metadata differently.
- Avoid components that require knowledge of or state from distant siblings to function.
- Keep essential status, limitations, evidence, and navigation outside optional interactions.
- Limit variant combinations to a set that can be explained, rendered, and tested.
- Compose evidence frame, artifact, caption, source, verification, and explanation as one meaningful unit.
- Keep status, maturity, and verification close to the claim or item they qualify.
- Use ordinary semantic content inline when reuse, state, or behavior does not justify abstraction.

# Primitive and Foundation Components

- **Text:** Provides semantic body, lead, small, metadata, caption, or label roles. It must preserve document semantics and text scaling; avoid a visual-only wrapper for every sentence.
- **Heading:** Maps visible hierarchy to the correct document heading level and supports deep links when needed. Avoid choosing level from appearance or using headings decoratively.
- **Link:** Represents navigation with clear destination, visited and focus behavior, and external context when needed. Do not use it for action-only behavior.
- **Button:** Performs an action with primary, secondary, tertiary, destructive, or quiet emphasis. It needs keyboard activation, visible focus, disabled and loading behavior; avoid using it for ordinary navigation.
- **Icon button:** Supports compact, familiar actions only, with an accessible name, adequate target, and state. Avoid unexplained icons.
- **Label:** Names data, control, category, or state in readable text. Avoid decorative uppercase micro-labels.
- **Divider:** Separates meaningful peer regions when spacing is insufficient. It must not create visual grids around every group.
- **Surface:** Applies a semantic reading, evidence, interactive, inset, raised, or overlay context. Avoid turning all content into cards.
- **Stack:** Establishes semantic vertical relationships and consistent spacing. It should not dictate content type or add unnecessary markup.
- **Inline group:** Groups closely related text, metadata, icons, or controls with wrapping behavior. Avoid compressing too many fields into one row.
- **Container:** Constrains or permits content width according to reading or evidence needs. Avoid page-specific size names.
- **Visually hidden text:** Supplies names or context needed by assistive technology without concealing information sighted users also require.
- **Focus boundary:** Manages entry, containment, or return focus only where an interaction such as an overlay requires it. Never trap focus in ordinary content.
- **Aspect-ratio media wrapper:** May reserve stable media dimensions when real recurring assets justify it. It must permit intrinsic or content-specific proportions and must not crop evidence blindly.

# Global Navigation Components

- **Site header:** Carries site identity, primary wayfinding, and only essential controls. It stays compact and recognizable across page families.
- **Primary navigation:** Uses familiar structure, current-location feedback, keyboard access, and readable labels supplied later from the sitemap.
- **Current-location indicator:** Communicates active context through text or structure as well as visual state.
- **Mobile navigation:** Reorganizes the same necessary destinations for touch and narrow space, with explicit open state, focus management, closing behavior, and no desktop-only assumptions.
- **Theme control:** Exists only if multiple tested themes are supported. It needs a clear label, current state, system-preference behavior, and persistence expectations.
- **Skip link:** Provides immediate keyboard access to primary content and becomes clearly visible on focus.
- **Footer navigation:** Offers a limited set of relevant global continuations and confirmed contact context; it is not an ecosystem directory.
- **Contextual return link:** Returns from deep content to a meaningful parent such as a project, research area, or collection.

Direct entry must still expose site identity, content classification, and parent context. Final labels and routes remain unresolved.

# Breadcrumb and Parent-Context Components

Parent context is useful when a case study belongs to a project, a note or experiment derives from work, a research item belongs to preparation, coursework connects to a learning area, or a learning entry is reached directly.

Use the shortest chain that restores orientation. A compact parent link may be clearer than a full breadcrumb. Breadcrumbs require ordered semantic navigation, a clear current item, responsive wrapping, and keyboard-visible links. Do not duplicate global navigation, display every taxonomy layer, or create depth unsupported by the content model.

# Page Introduction Components

The page-introduction family may compose a content-type label, page title, summary, status, maturity, role, verification, date, updated date, primary limitation, and verified repository or live destination.

Title and summary are generally required. Status and maturity are required for work whose completion or rigor could be misunderstood. Role is required for projects, collaborative work, coursework, and contributions. Verification is required for evidence-bearing claims. Dates appear only when known and meaningful. A primary limitation belongs in the first layer when omission would overstate the work. Repository and live actions appear only when verified, public, and current.

The family should allow compact, editorial, project, research, and learning compositions instead of one oversized hero. It must handle long titles, Thai and English, missing optional fields, and direct entry without empty slots.

# Section Heading Components

A section-heading family may contain a section title, concise supporting summary, optional identifier, optional related action, and deep-link affordance. It should establish the following region and support long-page orientation.

Identifiers should aid sequence or reference, not decorate. Related actions must be secondary to the section content. Deep links require accessible naming and stable targets. Keep variants limited to hierarchy and context; avoid campaign-like statements, repeated marketing copy, or headings whose only purpose is visual rhythm.

# Metadata Components

- **Metadata group:** Organizes a small set of fields by reader task and reflows without shrinking.
- **Metadata item:** Pairs a readable label with a value and optional explanation.
- **Status label:** Shows lifecycle state in text.
- **Maturity label:** Shows independence and validation level separately from status.
- **Verification label:** Identifies evidence strength and method.
- **Date display:** Distinguishes creation, event, publication, update, and review dates.
- **Role display:** States Nattapong's ownership or contribution.
- **Technology-role list:** Connects verified technologies to responsibilities rather than logos.
- **Reading-depth indicator:** May help selection when content depth varies enough to justify it.
- **Last-reviewed display:** Communicates freshness for notes, evidence, and changing information.
- **Visibility indicator:** May support internal editorial tooling but should not appear publicly without need.

All metadata uses readable text and noncolor meaning. Omit irrelevant fields rather than display empty badges. Avoid dense badge strips and repeated metadata that does not help evaluation.

# Status, Maturity, and Verification Components

These concepts require separate component contracts even if they share foundation styling.

- **Compact usage:** Short text plus optional shape or icon near an item summary.
- **Expanded usage:** Adds a plain-language explanation, source, date, or consequence where unfamiliar terms could mislead.
- **Disclosure:** A tooltip may clarify supplementary terminology but cannot contain essential status or evidence. Keyboard and touch users need equivalent access.
- **Unknown / To be verified:** Must appear explicitly unresolved and must not inherit positive completion styling.
- **Not implemented:** States confirmed absence; it is not a disabled teaser.
- **Archived:** Communicates historical value and inactive maintenance without implying failure.
- **Production-oriented / Production-validated:** Must remain textually distinct; the former does not imply real production evidence.

Do not reduce all three concepts to one generic Badge model. Their labels, grouping, help text, and placement must preserve different meanings.

# Link and Action Components

- **Inline link:** Navigates from prose with visible affordance.
- **Navigation link:** Supports global or local wayfinding and current state.
- **Repository link:** Identifies the repository destination and public availability.
- **Live application link:** Appears only for a verified deployment and does not imply production maturity.
- **Source link:** Identifies evidence, citation, or external guidance.
- **External link:** Clarifies destination context or new-window behavior when relevant.
- **Related-content link:** States both destination and relationship.
- **Download link:** If later supported, states file purpose, type, and material size or risk.
- **Primary action:** One strongest local action, used sparingly.
- **Secondary action:** A meaningful alternative at lower emphasis.
- **Tertiary action:** A low-emphasis action that remains discoverable.
- **Quiet utility action:** Repeated utility such as copy, expand, or close.
- **Destructive action:** Uses explicit consequence, confirmation where warranted, and recovery context.

Every component requires destination or action clarity, focus, keyboard behavior, and applicable states. Do not make every link a promotional button.

# Related Content Components

Related-content components may connect project to case study, note, experiment, or learning; research preparation to paper review; coursework to later work; earlier learning to revision; and limitation to future improvement.

Each relationship requires destination title, content type, a short explanation of why it matters, and relevant status when ambiguity is possible. Compact links may appear near a claim; grouped relationships may close a section or page. Do not infer relationships from shared tags alone, use recommendation algorithms, or use generic “You may also like” language.

# Major Project Summary Components

A project-summary family should support project name, plain-language summary, role, status, maturity, main result, important limitation, strongest evidence preview, technology roles when space permits, and verified repository or live destinations.

Entry, index, and related-content uses may vary in depth. Compact forms must retain status, maturity, and a limitation when necessary for honesty. Evidence previews must remain legible and purposeful or be omitted.

Rust Booking API may emphasize system or repository evidence; CourtFit may emphasize verified interface behavior. They do not require identical composition, image placement, or action availability. Reject the generic thumbnail-title-tags card as the only representation.

# Major Project Detail Components

Project detail is primarily a composition of content regions rather than a widget inventory. Regions may include context, problem and motivation, intended use, role and contribution, current capabilities, architecture, decisions, alternatives, tradeoffs, validation, result, limitations, lessons, evidence, open questions, and internal publication notes.

Create a reusable region only when its semantic structure, state, or behavior recurs. Plain narrative sections should remain editorial content. Architecture, comparison, validation, limitations, evidence, and open questions may compose shared diagram, table, callout, metadata, and evidence components. Internal publication notes must not leak into public presentation.

# Rust Booking API Components

Potential project-specific needs, subject to repository review, include an API-operation summary, verified endpoint evidence, request-response example, verified database-relationship diagram, authentication-scope summary, Redis-role explanation, test-status summary, limitation summary, deployment-status display, and repository evidence.

Every composition must state that current authentication-related implementation is registration-only, no automated tests currently exist, status is Functional MVP, and maturity is educational and non-production-ready. Deployment remains To be verified. Exact endpoints, schema, password hashing, JWT behavior, authorization, transactions, booking-conflict handling, Redis expiration and role, architecture, and deployment must not be inferred.

Unverified items should use explicit unresolved states or remain absent. Project-specific pieces should reuse evidence frames, status, callouts, diagrams, and API components rather than create a separate visual system.

# CourtFit Components

Potential project-specific needs include chat-interface evidence, a conversation example, provider comparison, streaming-state demonstration, Stop and Retry explanation, responsive-state gallery, API-key flow explanation, browser-testing summary, recommendation-limitation summary, repository link, and deployment status.

Every composition must identify CourtFit as educational and experimental. It must state that there is no verified product database, real-time price or stock, authentication, checkout, or persistent chat history. API-key storage and direct request behavior still require verification; the live URL remains To be verified. Browser testing may state manual testing in Chrome, Firefox, and Safari only, with versions, devices, and full compatibility unresolved.

Do not invent provider behavior, security guarantees, recommendation accuracy, or deployment. Recommendations remain model output requiring independent verification. Shared evidence, media, comparison, state, and limitation components should carry CourtFit-specific content without fragmenting the site.

# Evidence Frame Components

An evidence-frame family may contain screenshots, code, terminal output, diagrams, tables, benchmarks, API exchanges, build or test results, hardware images, and research figures.

Every frame requires artifact type, purpose, context, caption, source, verification, supported claim, relevant limitation, accessibility alternative, and responsive behavior. Optional controls may include copy, expansion, media control, or alternate view only when justified.

The frame should keep evidence and explanation together and remain useful when optional media fails. It must not turn artifacts into decorative tiles, imply verification through polished framing, or force unrelated evidence types into identical chrome.

# Figure and Media Components

- **Figure:** Semantically binds visual evidence, caption, source, and description.
- **Image:** Presents purposeful visual content with appropriate alternative text and intrinsic sizing.
- **Screenshot:** Shows a verified state with readable crop and explanatory caption.
- **Browser frame:** Adds browser context only when URL, viewport, browser behavior, or environment is relevant; no fake chrome.
- **Mobile-view evidence:** Shows a real responsive or device state without generic device mockups.
- **Hardware photo:** Communicates setup, component, connection, scale, or state.
- **Video / animated demonstration:** Explains sequence or behavior and includes controls, transcript or equivalent, and reduced-motion/static fallback.
- **Caption and source note:** State meaning, provenance, verification, and limitations.
- **Media fallback:** Preserves the claim and explanation if media cannot load.

Decorative screenshots, stock images, and fake device frames are not supported.

# Code Components

- **Inline code:** Identifies short syntax, values, commands, or identifiers without disrupting prose.
- **Code block:** Preserves formatting, selection, and readable overflow.
- **File excerpt:** Adds verified filename or source context when relevant.
- **Highlighted lines:** Identify explained lines through structure as well as color.
- **Code caption:** States purpose, source, claim, and limitation.
- **Language or filename context:** Appears only when useful and verified.
- **Copy action:** Provides accessible feedback and copies only the intended content.
- **Expand action:** Exists only when a longer view materially aids inspection; essential explanation stays outside.
- **Mobile behavior:** Uses safe wrapping or contained overflow without page-level breakage.

Syntax styling should be restrained and readable. No syntax library or theme is selected.

# Terminal Components

Terminal components may compose a command block, prompt, command, output, success, warning, error, truncation indicator, redaction indicator, environment note, and copy action.

Only real content is permitted. Commands and output must remain distinct; state uses text or symbols as well as color. Truncation and redaction must be explicit. Environment context should support reproduction without exposing private machine data. Copy behavior should distinguish command-only from full transcript when both are offered. Narrow views require safe wrapping or contained overflow and a logical assistive-technology reading order.

# API Evidence Components

API evidence may include request, response, safe and relevant headers, body, status code, verified endpoint label, example context, error response, authentication context, and redaction.

Request and response must be structurally distinct, correlated when part of one exchange, and accompanied by purpose, environment, verification, and expected or observed interpretation. Headers and bodies must exclude keys, tokens, personal data, and secrets. Endpoint labels appear only after verification. Authentication context must not imply complete authorization or security. Error examples should explain the tested condition rather than decorate the page.

# Diagram Components

Diagram responsibilities may include architecture, sequence, data flow, hardware, research, comparison, legend, description, and responsive alternative.

Every diagram requires a verified or explicitly provisional scope, title or purpose, labeled entities and relationships, reading order, legend where symbols need explanation, source, verification, text alternative, and compact strategy. Meaning cannot depend on position or color alone. Complex diagrams should split rather than shrink. No diagramming library is selected.

# Table and Comparison Components

Supported forms include data, metadata, and comparison tables; before-and-after, alternative, browser, benchmark, and research comparisons.

All require clear labels, shared criteria, conditions, units where relevant, accessible headers, responsive behavior, an explicit conclusion, and limitations. Stacked views must repeat semantic labels rather than depend on left-right position. Browser comparisons must retain versions and environments when known; benchmarks retain method and baseline; research comparisons retain attribution. Avoid decorative tables and side-by-side layouts without a genuine comparison.

# Callout Components

Limited callout roles are important context, limitation, warning, verification note, To be verified, Not implemented, research uncertainty, personal reflection, and historical correction.

Each role needs a clear text label and semantic treatment, not one generic colored box. Callouts should place high-consequence information near relevant content. Personal reflection and historical correction must not resemble warnings. Repeated ordinary information should stay in prose; callouts must not interrupt every section or become the dominant page rhythm.

# Disclosure Components

Disclosure is suitable for optional technical depth, long evidence, full logs, additional methodology, secondary references, or historical detail when the collapsed state remains useful.

It requires a descriptive label, visible expanded state, keyboard operation, state announcement, logical focus, and a sensible default. Deep linking or persistent state may be needed when disclosed content is a destination. Essential context, limitations, status, and critical evidence must remain outside collapsed regions. Do not use disclosure merely to make a visually clean first layer.

# Research Components

Research components may express a research question, status, source finding, Nattapong's interpretation, hypothesis, evidence, method, finding, limitation, uncertainty, future work, citation, paper metadata, open question, and candidate direction.

Source findings, personal interpretation, hypotheses, and original evidence require structural labels and attribution that remain clear without color. Findings and limitations stay close. Citations connect claims to sources; paper metadata should be sufficient for identification without becoming decorative. Candidate directions must not look like selected topics or completed research.

# Research-Preparation Components

Research-preparation components may include exploration area, candidate problem, paper-review link, decision criterion, available hardware when verified, scope constraint, open question, current decision state, and next investigation step.

They should emphasize comparison, uncertainty, and decision readiness rather than results. Hardware and candidate problems require verification labels. Every graduation-project preparation composition must include visible text stating that no final graduation-project topic has been selected.

# Technical Note Components

A note composition may include note introduction, scope, intended audience, prerequisites, explanation blocks, examples, caveats, references, verification status, last-reviewed information, and revision notes.

These pieces should optimize reading and direct entry. Caveats stay near affected instructions; examples compose code, terminal, diagram, or figure components; references distinguish sources from interpretation. Revision notes preserve changed understanding. Notes should not use project actions, promotional media, or project-landing-page structure by default.

# Experiment Components

An experiment composition includes question, setup, conditions, procedure, observation, result, interpretation, limitation, what cannot be concluded, next step, and evidence list.

Observation and interpretation must remain distinct. Result and limitations must remain adjacent in reading order and presentation. Setup and conditions should be inspectable before a conclusion. Small experiments should use ordinary editorial composition instead of a complex dashboard.

# Learning Progress Components

Learning components may include learning-area introduction, starting point, concept studied, practical exercise, difficulty, mistake, change in understanding, current level, remaining gaps, project connection, later revision, milestone, and evidence group.

They should support meaningful progression and distinguish guided, coursework, assisted, and independent work. Later revision remains linked to earlier understanding. Evidence groups should curate related exercises rather than create a card per activity.

Skill bars, percentage proficiency, daily streaks, raw activity feeds, and a standalone component for every small exercise are prohibited.

# Coursework Components

Coursework composition may include course or laboratory context, assignment constraints, individual or group role, Nattapong's contribution, provided materials, evidence, result, learning outcome, connection to current direction, and an academic-context label.

The academic label and contribution should be visible early. Evidence must identify guidance and permitted publication. The visual system must not imply professional production, original problem ownership, or independent research where these do not exist.

# About and Background Components

Background components may express current role, education, engineering direction, current priority, areas of interest, learning approach, working preferences, values, career possibilities, and contact context.

Current evidence, developing interest, possible direction, and future ambition must remain distinct through text and grouping. The current role must remain accurate at publication, and unsupported titles such as “Full-Stack Systems Engineer” must not appear. Background elements should connect to verified work rather than become a feature or logo grid.

# Contact Components

- **Contact method:** Pairs a confirmed public channel with purpose and readable destination.
- **Email link:** Uses only the approved public address and clearly indicates email behavior.
- **GitHub link:** Uses the confirmed profile and does not imply repository claims beyond current evidence.
- **LinkedIn placeholder:** Internal only until identity and public readiness are confirmed; no public empty action.
- **Facebook-page placeholder:** Internal only until a page exists and is approved.
- **Contact-context text:** Explains appropriate contact without marketing language.
- **Availability or response expectation:** Appears only when explicitly confirmed and maintainable.

Public-readiness confirmation is required. A contact form is not assumed.

# Index and Archive Components

Possible components are curated content list, grouped index, filter, search, result count, empty result, archived indicator, and a sort control when justified.

Complex search, filters, counts, and sorting require real content volume, dependable metadata, and a reader task. Empty results need a clear reason, reset path, or related grouping. Archived items retain historical status. Avoid empty taxonomies, excessive tags, infinite feeds, and controls that imply a larger collection than exists.

# Form Components

Future form responsibilities may include field, label, description, input, text area, select, checkbox, radio group, search input, validation message, error summary, success message, loading state, disabled state, and privacy note.

Only components required by confirmed contact, search, filter, or settings needs should be built. Labels remain visible, descriptions provide necessary context, validation associates errors with fields, error summaries support navigation, and success states state the outcome. Keyboard, autofill, touch, privacy, and state behavior belong in each contract. No form library or API is defined.

# Feedback and State Components

Supported state responsibilities include loading indicator, justified skeleton, empty, error, success, warning, incomplete, To be verified, unavailable, archived, broken-media fallback, and optional-enhancement fallback.

Language must describe the real state, consequence, and available next step. Layout should remain stable. Skeletons are appropriate only when structure is known and waiting is unavoidable; fake loading and decorative shimmer are rejected. Broken media and enhancement failures preserve captions and core meaning. Incomplete and verification states must not be styled as errors or completion.

# Overlay Components

Potential overlays include dialog, menu, popover, tooltip, expanded media viewer, and mobile navigation layer. Inline presentation is preferred when it provides equal clarity.

Every overlay requires a clear trigger, accessible name, focus entry and containment where appropriate, Escape behavior, deliberate outside-interaction behavior, return focus, scroll management, and reduced-motion behavior. Tooltips contain supplementary information only. Expanded media needs a meaningful close action and alternative access to the evidence. Do not build overlays speculatively.

# Responsive Component Behavior

Components may adapt through stacking, reordering, wrapping, simplifying, reducing nonessential chrome, evidence substitution, code or diagram overflow, and metadata regrouping. Semantic and focus order must remain coherent.

Hover behavior must gain touch and keyboard equivalents. Targets stay usable. Wide tables, code, terminal output, diagrams, and screenshots use contained access or purpose-built alternatives instead of shrinking below readability. Optional controls and repeated metadata may reduce before essential content. Final breakpoints remain content-driven and unresolved.

# Accessibility Component Requirements

- Use the correct semantic element and preserve heading and landmark structure through composition.
- Define complete keyboard interaction and visible focus behavior.
- Provide accessible names, descriptions, relationships, and state announcements.
- Associate validation errors and instructions with form controls.
- Give tables real headers and figures associated captions.
- Provide diagram, screenshot, media, and technical-artifact alternatives.
- Keep status, maturity, verification, state, and chart meaning independent of color.
- Maintain usable touch targets, text scaling, zoom, and reflow.
- Replace or simplify motion according to user preference without losing meaning.
- Provide controls for time-based or animated media.

Accessibility is part of acceptance, not a later variant.

# Performance Component Requirements

- Image and video components should request only evidence-appropriate assets and support stable placeholders and fallbacks.
- Icons and fonts should consume the shared efficient system rather than add per-component assets.
- Syntax highlighting and diagrams should avoid disproportionate client-side cost for static evidence.
- Tables should remain semantic without duplicating large datasets solely for presentation.
- Overlays and optional embeds should load only when their function is used or justified.
- Client-side interaction should be limited to behavior that cannot be delivered clearly as static content.
- Loading states should preserve layout and never delay already available text.
- Progressive enhancement should keep core content, evidence context, links, and navigation functional when optional behavior fails.

No libraries or numeric budgets are chosen here.

# Component Naming Principles

Names should describe responsibility, content role, interaction role, semantic meaning, and legitimate reuse. A name should remain accurate if styling, theme, location, or implementation changes.

Avoid names based on a specific page, visual appearance alone, reference brand, temporary campaign, arbitrary abbreviation, or technical implementation detail. Project-specific names are acceptable only when the content responsibility is truly unique. The final catalogue will follow implementation evidence.

# Component Boundaries

- **Create a new component** when a meaningful structure, interaction, accessibility contract, or state recurs.
- **Extend an existing component** when the new need shares its responsibility and requires a small semantic variant.
- **Compose existing components** when several focused responsibilities form a larger content region.
- **Keep content inline** when ordinary semantic markup is clearer and reuse provides no benefit.
- **Create a project-specific component** when real evidence has unique structure that shared composition cannot express honestly.
- **Avoid abstraction** when only visual similarity exists or content needs are still unknown.
- **Remove an unused component** when the supporting content or interaction no longer exists and no near-term verified need remains.

Recurring meaningful need—not a desire for library completeness—is required before abstraction.

# Variant Rules

Acceptable variant dimensions include emphasis, density, content type, interaction state, evidence type, and context. Each variant must change meaning, behavior, or a recurring content requirement and remain compatible with the base contract.

Prevent boolean-option explosion, page-specific variants, visual variants without semantic differences, combinations too numerous to test, and variants that conceal content-model problems. Prefer composition or a separate responsibility when options create contradictory states. Prop names and final variant catalogues are not defined here.

# Component Documentation Requirements

Later implementation documentation should include purpose, appropriate usage, required and optional content, variants, states, responsive behavior, accessibility contract, real examples, misuse, related components, testing notes, and maintenance owner or review notes when necessary.

Examples should include realistic long content, missing optional fields, status uncertainty, and evidence rather than idealized placeholder text. Documentation tooling such as Storybook is not selected.

# Component Testing Direction

Future testing should cover rendering, semantic output, realistic content variation, empty and incomplete states, long text, Thai and English text, mixed-language content, keyboard behavior, focus order and return, assistive-technology announcements, responsive behavior, zoom and reflow, reduced motion, loading, errors, theme parity, and real artifacts.

Project components need Booking API and CourtFit content cases without inventing missing evidence. Evidence components need real code, terminal output, diagrams, tables, and media. Tests must cover combinations permitted by the contract and confirm prohibited combinations cannot silently produce misleading output. No testing library is selected.

# Component Anti-Patterns

- A universal card component used for all content.
- Large components with unrelated editorial, evidence, navigation, and interaction responsibilities.
- Boolean-prop explosion and untestable variant combinations.
- Page-specific copies of shared responsibilities.
- Components created for one decorative effect or reference-inspired composition.
- Names borrowed from reference websites.
- Excessive wrappers, nested surfaces, and boxes.
- Essential content hidden in disclosure, tabs, carousels, hover, or overlays.
- Unclear icon-only controls.
- Metadata badge overload.
- Decorative terminal, code, diagram, or status components.
- Fake browser and device frames.
- Treating every content region as a component.
- Empty abstractions with no recurring content contract.
- Premature search, filtering, and archive systems.
- Components unable to handle Thai, English, mixed language, or long text.
- Components that break under zoom, reflow, or narrow width.
- Hover-dependent or color-only meaning.
- Project styling that fragments shared navigation, typography, states, or evidence rules.
- A component library more complex than the current site and maintenance capacity require.

# Component Acceptance Criteria

- **Responsibility:** The component solves one understandable recurring problem.
- **Content accuracy:** Required fields, uncertainty, limitations, and evidence preserve the source content.
- **Reusability:** Reuse is supported by shared semantics, not visual coincidence.
- **Composition:** The component combines cleanly without deep nesting or hidden dependencies.
- **Semantic consistency:** It consumes shared design-system roles and uses correct document semantics.
- **Accessibility:** Names, keyboard behavior, focus, states, alternatives, reflow, and motion behavior are complete.
- **Responsive behavior:** Real content remains readable and meaningful across widths and inputs.
- **State completeness:** Empty, incomplete, loading, error, unavailable, and interactive states are honest and stable where applicable.
- **Evidence readability:** Artifacts retain context, source, verification, claim, limitation, and accessible alternatives.
- **Performance:** Assets and interaction are proportionate to value and fail without removing core meaning.
- **Maintainability:** Variants, dependencies, and documentation remain limited and understandable.
- **Bounded variation:** Project and content-family differences do not fragment the shared system.
- **Thai and English support:** Both scripts and mixed content work without clipping, broken rhythm, or fallback inconsistency.
- **Project compatibility:** Shared components can represent both major projects accurately, including unresolved states.
- **Originality:** The result reflects real content and authorship rather than generic portfolio or copied reference patterns.

# Open Component Questions

The following require real content, wireframes, design-system prototypes, representative artifacts, real code and terminal output, verified diagrams, mobile prototypes, accessibility testing, performance testing, and implementation constraints:

- Which structures recur across enough page families to justify abstraction?
- Which Booking API and CourtFit evidence components should remain project-specific?
- Does the entry experience require a distinct project-summary composition, or can shared summary parts compose it?
- Which metadata belongs in compact versus expanded forms for each page family?
- Which technical artifacts need shared copy, expand, annotation, comparison, or source controls?
- Which evidence is long or complex enough to justify disclosure or expanded viewing?
- Which page families actually require local navigation or current-section components?
- Which contact, search, filter, or settings forms are necessary, if any?
- Is a theme control justified after theme testing and maintenance assessment?
- Which dialogs, popovers, tooltips, media viewers, or mobile layers can remain inline and be avoided?
- How do real Thai and English titles, labels, metadata, code explanations, and mixed sentences affect sizing and composition?
- Which variants are supported by real content rather than imagined flexibility?
- Which index, filter, result-count, archive, and search components should not exist until content volume grows?
- What verified Booking API endpoints, architecture, schema, Redis behavior, test evidence, and deployment state need specialized presentation?
- What verified CourtFit conversation, streaming, provider, API-key, responsive, browser, accessibility, and deployment evidence needs specialized presentation?

No unresolved component should be added to make the inventory appear complete.
