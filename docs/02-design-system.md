# Purpose of This Specification

This document defines the visual language, semantic roles, token direction, and reusable design foundations for nattapong.dev. It translates the approved identity, experience, content, and layout requirements into rules that can support projects, research, notes, experiments, learning, coursework, background, and contact content.

The system should make hierarchy, state, evidence, interaction, and authorship consistent without forcing all content into the same appearance. It provides a basis for later design and implementation decisions while keeping unresolved choices open for testing with real material.

This specification does not define component implementation, final page layouts, routes, frameworks, production code, or token files. It does not select final colors, typefaces, dimensions, breakpoints, libraries, or animation timings.

# Design System Goals

- Create strong hierarchy that supports both rapid scanning and sustained reading.
- Preserve calm reading conditions around technically dense material.
- Establish technical credibility through legible, contextual evidence rather than visual imitation of developer products.
- Provide personal character through authorship, content relationships, and selective variation.
- Let real projects and artifacts introduce variation within a stable shared system.
- Make accessibility a property of every semantic role and state.
- Keep visual and interactive behavior meaningful across screen sizes and input methods.
- Minimize asset, effect, and font costs so the core experience remains fast and stable.
- Keep the system understandable and maintainable at the current content volume.
- Support long-term consistency as new content types and evidence appear.
- Present status, maturity, verification, limitations, and technical artifacts clearly.
- Resist generic portfolio, AI-template, SaaS, agency, and trend-driven aesthetics.

# System Principles

- **Semantic roles before visual values:** Define what a value communicates before choosing how it looks.
- **Function before decoration:** Styling must improve hierarchy, reading, evidence, orientation, feedback, or control.
- **Content before branding effects:** Real work and writing should carry identity; effects must not compensate for weak content.
- **Consistency without uniformity:** Shared rules should reduce learning cost while content type and evidence determine emphasis.
- **Evidence-aware styling:** Technical artifacts must reveal their source, function, conditions, and supported claim.
- **Accessible by default:** Contrast, focus, state, text scaling, noncolor meaning, and input equivalence belong in the foundation.
- **Responsive by default:** Roles must adapt without losing meaning, hierarchy, or readability.
- **Minimal visual debt:** Add roles and variants only when a recurring, documented need exists.
- **Bounded project variation:** Projects may vary within shared typography, state, navigation, evidence, and accessibility rules.
- **No copied reference motifs:** Reference principles may inform decisions, but recognizable palettes, grids, glow, gradients, illustrations, or interaction signatures must not be reproduced.

# Visual Foundation Direction

The visual foundation should be restrained but not sterile, technical but not theatrical, personal but not informal, modern but not trend-dependent, structured but not rigid, and expressive only when content benefits.

Restraint means that typography, space, grouping, and evidence establish priority before decorative treatment. Technical character should emerge from precise language, actual code, verified diagrams, system relationships, and careful metadata—not fake terminals or tiny labels. Personal character should come from Nattapong's writing, artifact selection, learning history, and recurring interests rather than casual inconsistency.

The shared foundation should remain quiet enough for CourtFit interfaces, Booking API evidence, research sources, hardware, coursework, and long-form notes to retain their own character. Controlled departures may emphasize a project or content mode, but they must not fragment the website. Final themes, colors, fonts, logos, and motifs remain unresolved.

# Theme Strategy

Theme choice must follow reading, artifact, identity, accessibility, and performance testing rather than the assumption that technical work should appear dark.

- A **light foundation** may support long-form reading, research material, diagrams, and broad accessibility, but must avoid generic editorial or corporate neutrality.
- A **dark foundation** may support some interfaces and technical artifacts, but must not rely on low-contrast gray, glow, or a generic developer aesthetic.
- **User-selectable themes** may be appropriate if both receive equal design, testing, and maintenance; a toggle is not justified merely as a conventional feature.
- **Context-specific technical surfaces** may contrast with the page foundation for code, terminal output, diagrams, or media without changing the entire theme.
- **System preference** may provide a default if multiple themes exist, while preserving a clear user choice and predictable persistence.
- **Theme consistency** requires semantic roles to retain purpose across themes.
- **Theme parity** requires equivalent hierarchy, contrast, focus, status meaning, diagram clarity, code readability, and artifact legibility; one theme must not be a secondary recoloring.

Every supported theme must preserve personal identity through structure, typography roles, writing, evidence treatment, and authored detail. The primary-theme strategy remains unresolved until tested with real Thai and English text, project screenshots, code, diagrams, focus states, and media.

# Color Role System

| Role | Function |
| --- | --- |
| Page background | Establishes the outer reading environment and broad theme foundation. |
| Primary surface | Holds main content without unnecessary separation from the page. |
| Secondary surface | Distinguishes supporting or grouped material at lower emphasis. |
| Elevated surface | Separates temporary, overlapping, or priority interaction layers. |
| Primary text | Carries essential headings, body copy, and critical information. |
| Secondary text | Carries supporting explanation while remaining comfortably readable. |
| Muted text | Carries genuinely lower-priority metadata; never essential information at weak contrast. |
| Inverse text | Maintains readable text on strongly contrasting surfaces. |
| Border | Defines subtle structure where spacing alone is insufficient. |
| Strong border | Marks important boundaries, active regions, or evidence separation. |
| Accent | Provides controlled identity or emphasis with a consistent semantic purpose. |
| Accent contrast | Ensures readable content placed on the accent role. |
| Link | Gives links a visible, consistent affordance distinct from ordinary text. |
| Focus | Makes keyboard focus prominent across all surfaces and themes. |
| Selection | Marks selected text or chosen items without obscuring content. |
| Code background | Supports syntax and extended code reading without decorative theming. |
| Diagram background | Provides a stable field for labels, connectors, legends, and states. |
| Overlay | Supports temporary foreground content while preserving readable hierarchy. |
| Scrim | Reduces background competition and clarifies modality without erasing context. |

Color roles must be tested together, not chosen as isolated swatches. Avoid low-contrast atmosphere, decorative gradients as a default surface, excessive accents, copied palettes, and color without a semantic purpose. Project artifacts may introduce additional color, but the system must frame them coherently.

# Status, Maturity, and Verification Colors

Status, maturity, and verification describe different concepts and must not share a single ambiguous badge language.

Status may use a small set of semantic families rather than one color per value:

- **Prospective:** Planned and Researching.
- **Active or changing:** In progress and Experimental.
- **Functioning or scope-achieved:** Functional MVP, Core complete, Completed, and Maintained, with wording preserving their differences.
- **Inactive:** Paused.
- **Historical or ended:** Archived and Abandoned, without treating abandonment as an error.

Maturity should use a mostly ordered, neutral treatment that does not imply quality through brighter color: Learning exercise, Guided implementation, Educational prototype, Experimental application, Functional MVP, Production-oriented, and Production-validated. Production-oriented and Production-validated must remain visually and textually distinct.

Verification may use confidence families:

- **Direct evidence:** Verified from repository, deployment, manual testing, automated tests, or measurement; the exact method remains visible.
- **Personal account:** Self-reported.
- **Unresolved:** To be verified and Unknown.
- **Absent:** Not implemented.

No unique color is required for every value. Text is mandatory; shape, icon, placement, or structure may reinforce meaning. Color alone must never communicate status, maturity, verification strength, or change. Strong positive styling must not imply production quality merely because work is complete.

# Typography Roles

| Role | Purpose and behavior | Misuse to avoid |
| --- | --- | --- |
| Display | Rare identity or major editorial statement with highest emphasis and short measure. | Long copy, repeated marketing slogans, or competing displays. |
| Page title | Identifies the page or content item clearly at entry. | Styling every project name like an advertisement. |
| Section title | Marks major changes in subject and supports long-page orientation. | Decorative headings that do not describe content. |
| Subsection title | Organizes related detail within a section at moderate emphasis. | Excessive nesting or replacing grouping with type alone. |
| Body | Primary extended-reading role with calm rhythm and high legibility. | Wide measures, weak contrast, or compressed spacing. |
| Lead | Summarizes context or direction above normal body emphasis. | Repeating the title or using long promotional copy. |
| Small body | Supports secondary explanations where space is constrained. | Essential long-form content at an uncomfortable size. |
| Metadata | Communicates status, role, dates, certainty, and verification compactly. | Tiny decorative technical labels or unprioritized data dumps. |
| Caption | Explains an artifact, source, condition, or claim relationship. | Generic labels such as “screenshot” without meaning. |
| Label | Names a field, state, category, or control relationship. | Using labels as visual texture or all-uppercase noise. |
| Navigation | Supports predictable wayfinding with steady emphasis. | Competing with page titles or becoming overly compact. |
| Button or control text | States an action directly and remains legible in all states. | Vague actions or lengthy marketing copy. |
| Quote | Distinguishes attributable source language or personal reflection. | Using quotation styling to inflate ordinary statements. |
| Code | Preserves syntax, alignment, and distinction from prose. | Decorative inline code or unreadably small blocks. |
| Terminal | Separates commands, prompts, output, and states. | Simulating terminal aesthetics without real output. |
| Numerical data | Supports measurements, units, comparisons, and scanning. | Oversized numbers without method or context. |
| Table content | Balances row scanning, column comparison, and dense reading. | Compressing complex prose into tiny cells. |

The roles define purpose, hierarchy, and density; they do not require a different family or style for every row.

# Typeface Direction

Future typeface selection must evaluate readability, distinctive but restrained personality, technical clarity, extended-reading comfort, Thai and English support, code compatibility, variable-font availability, file and rendering cost, robust fallbacks, cross-platform consistency, and licensing.

Thai and Latin text must feel intentional together in headings, body copy, metadata, controls, tables, and mixed technical sentences. Selection must be tested with real bilingual CourtFit examples, personal writing, long-form notes, research citations, and technical terminology. Thai marks, line height, punctuation, numerals, and fallback transitions must remain clear.

A code face, if separate, should distinguish ambiguous characters and remain readable in excerpts, terminal output, JSON, and tables. Variable fonts are useful only if their range and loading cost serve actual roles. No final family is selected here.

# Type Scale Direction

Use a limited hierarchy whose levels remain distinct through size, weight, spacing, and role rather than constant dramatic scale changes. Display treatment should be rare and restrained. Page and section titles should remain strong without dominating evidence or producing oversized marketing compositions.

Body text must remain comfortable for extended reading. Small body, captions, labels, and metadata must remain readable and should not be reduced to imitate technical interfaces. Editorial prose and technical content may differ in density and rhythm while retaining a coherent hierarchy.

Scale should compress responsively where necessary, but relationships among roles must remain clear. Avoid both flat hierarchy and excessive steps that are difficult to maintain. Final sizes and responsive formulas require prototypes with real content.

# Line Length and Text Rhythm

- Body prose should maintain a controlled measure for sustained reading.
- Lead text may use a distinct, usually shorter measure to preserve emphasis.
- Technical prose may widen only when definitions, inline code, or structured explanation require it.
- Captions should remain close to artifacts and readable as explanation rather than microcopy.
- Metadata should wrap or regroup rather than compress below legibility.
- Code should preserve meaningful indentation and line structure, using a wider surface or safe overflow when necessary.
- Lists should support scanning without fragmenting every paragraph into bullets.
- Paragraph spacing should separate ideas while maintaining narrative continuity.
- Heading spacing should associate each heading with the content that follows and clearly close the preceding section.
- Thai text rhythm must accommodate script-specific height, wrapping, word segmentation, and punctuation.
- Mixed Thai and English content must avoid disruptive fallback metrics, uneven baselines, and unexplained language switching.

Exact line lengths and spacing remain unresolved until bilingual and technical-content prototypes are tested.

# Spacing System

Spacing roles should describe relationships rather than arbitrary size names:

- **Micro spacing:** Separates tightly related marks, icons, or status details.
- **Control spacing:** Supports readable labels, icons, and usable interaction areas.
- **Inline spacing:** Separates text, inline code, links, and small metadata without breaking flow.
- **Content spacing:** Structures paragraphs, lists, captions, and related textual elements.
- **Component spacing:** Organizes a reusable control or content group internally and against peers.
- **Section spacing:** Separates major changes in subject or narrative phase.
- **Major transition spacing:** Signals a change in page family, evidence mode, or broad context.
- **Evidence spacing:** Keeps claim, artifact, caption, source, verification, and limitation visually connected.
- **Dense technical spacing:** Supports code, tables, output, and diagrams without crowding labels or states.
- **Responsive compression:** Reduces large transitions before reducing control usability or reading clarity.

Use a coherent progression and a limited set of relationships. Avoid arbitrary values, luxury emptiness, uniform gaps everywhere, overly dense evidence, and excessive card padding. Numeric tokens will be established later through layout prototypes.

# Sizing and Proportion

- Controls must be large enough for their label, state, keyboard focus, and touch use without adopting oversized conversion styling.
- Touch targets must remain usable even when the visible icon or text is compact.
- Icons should be subordinate to labels and sized consistently by function.
- Avatars or identity images, if used, should support personal context rather than dominate engineering content.
- Thumbnails should communicate a recognizable artifact or state, not provide generic decoration.
- Project media should scale according to evidentiary detail and available context.
- Code blocks and diagrams must prioritize readable content over fitting a predetermined box.
- Tables should allocate space by comparison need and reorganize responsively.
- Status markers should remain compact but never replace readable status text.
- Navigation elements should remain easy to identify without competing with page content.

Final dimensions require real artifacts, zoom, touch, and responsive testing.

# Surface System

- **Page surface:** The broad environmental foundation for reading and orientation.
- **Reading surface:** A quiet region for sustained prose; it may merge with the page rather than become a card.
- **Technical evidence surface:** Frames code, output, requests, tests, benchmarks, or dense technical material.
- **Interactive surface:** Signals a region that responds to input or changes state.
- **Raised surface:** Separates temporary or priority content when overlap or depth is functional.
- **Inset surface:** Groups subordinate detail, caveats, or nested evidence without claiming equal priority.
- **Code surface:** Supports syntax, selections, highlights, captions, and overflow.
- **Terminal surface:** Supports prompt, command, output, environment, and status distinctions.
- **Diagram surface:** Supports nodes, connectors, labels, legends, and text alternatives.
- **Status surface:** Groups status, maturity, certainty, or verification when their relationship needs emphasis.
- **Overlay surface:** Supports menus, dialogs, expanded media, or other temporary layers with clear modality.

Surfaces should be introduced by semantic need. Spacing and alignment should handle ordinary grouping; every content block must not become a card.

# Border System

- Structural borders may establish major regions or alignment where background and spacing are insufficient.
- Dividers may separate peer items or narrative transitions, but should not create a box around every section.
- Interactive boundaries should clarify click or input areas and become stronger in relevant states.
- Evidence framing should distinguish artifact boundaries and remain connected to captions.
- Table boundaries should support row and column reading without overwhelming content.
- Code boundaries should clarify the excerpt surface and controls.
- Focus rings must be prominent, consistent, and independent of ordinary borders.
- Status markers may use borders as one reinforcing signal, never the only meaning.

Borders may be subtle for passive structure, strong for active or critical boundaries, and absent where spacing already communicates grouping. Avoid decorative fine-line grids or crosshair treatments borrowed from technical product sites.

# Radius System

Use a limited radius vocabulary tied to function. Controls may use a familiar moderate treatment; small containers and media should use consistent but not identical behavior; technical evidence may be squarer when structure and alignment benefit; overlays may use a distinct but related treatment; pills should be reserved for compact states, filters, or values whose shape communicates containment.

Do not make every region heavily rounded, mix many unrelated radii, or place ordinary prose in pill shapes. Radius must not become the primary source of identity. Final values remain unresolved.

# Shadow and Elevation System

Shadows or elevation are justified for overlays, floating controls, temporary layers, focused interactive surfaces, or separation that borders and contrast cannot communicate adequately. Elevation must correspond to interaction or spatial hierarchy.

Reject decorative depth, permanent heavy shadows, glassmorphism as a default, shadow-heavy card galleries, and elevation used to imply premium quality. Static reading and evidence regions should generally rely on surface, spacing, alignment, and borders.

# Iconography Direction

Icons must communicate functional meaning with consistent visual weight and familiar symbols. Use text labels when an icon is not universally clear, when the action is important, or when status could be misunderstood. Icons need accessible names when interactive and should not duplicate spoken information unnecessarily.

Status icons may reinforce text; external destinations should be identifiable when opening behavior or context matters; repository, source, navigation, and control icons should use predictable conventions. Do not create decorative icon walls, brand-icon skill lists, icon-only unexplained actions, mixed visual styles, or copied signature motifs. A final icon library is not selected.

# Imagery and Media Direction

- Project screenshots should show a meaningful, legible state and be cropped or annotated for the claim they support.
- Browser and mobile views should demonstrate verified behavior, responsiveness, or context rather than device decoration.
- Hardware photos should reveal components, setup, connections, scale, or observed state.
- Architecture diagrams and research figures should prioritize labels, relationships, source, and interpretation.
- Portrait or personal imagery, if used, should add relevant identity and remain optional rather than function as a corporate profile device.
- Decorative imagery should be rare and derived from authentic content or personal context, not stock or generic technical scenes.
- Video and animated demonstrations must explain behavior that static evidence cannot communicate as well.

Every asset requires purpose, context, legibility, caption, source, accessibility support, responsive variants, and performance justification. Reject generic stock imagery, decorative code, abstract AI imagery, fake device scenes, and unreadable interface mosaics.

# Technical Artifact Styling

Code excerpts, terminal output, API requests and responses, JSON, logs, build results, test results, benchmarks, diagrams, tables, and research citations should share a functional grammar: clear artifact type, source context, verification, caption, readable content, and an explicit relationship to a claim.

Requests and responses must be distinguishable; logs must expose severity and sequence without relying on color; build and test results must show relevant outcome and conditions; benchmarks must keep units, method, baseline, and limits together; diagrams must label relationships; tables must align comparable fields; research citations must distinguish source findings from interpretation.

Technical surfaces may be denser than prose but must not imitate an IDE, terminal, or infrastructure dashboard merely to look technical. Decorative filenames, commands, status dots, or line numbers are prohibited when they add no meaning.

# Code Styling Direction

- Syntax highlighting should use a restrained semantic set with sufficient contrast across themes.
- Long lines should wrap only when meaning remains clear; otherwise provide contained horizontal access without widening the entire page.
- Line numbers should appear only when referenced in explanation, review, or comparison.
- Highlighted lines require an accompanying explanation and noncolor indicator.
- File names and language labels should appear when they provide necessary source context.
- Copy controls should be discoverable, keyboard accessible, provide feedback, and avoid crowding short excerpts.
- Captions should explain why the excerpt appears and which claim it supports.
- Mobile treatment should preserve indentation, selection, and readable type while avoiding page-level overflow.
- Visual noise from excessive colors, chrome, shadows, filenames, or controls should be minimized.

No syntax theme or highlighting library is selected here.

# Terminal Styling Direction

Terminal treatment is reserved for real commands and output. Commands, prompts, output, warnings, errors, and success states must be distinguishable through text and structure as well as color. Prompt visibility should provide environment context without publishing private machine details.

Truncation must be marked and must not alter the result being claimed. Secrets, personal paths, identifiers, and irrelevant output must be redacted transparently. Captions should state command purpose, environment, source, and verification where relevant.

On narrow screens, terminal content should preserve reading through safe wrapping or contained overflow. Screen readers need a logical text sequence and state labels. Reject fake terminal decoration, simulated typing used only for atmosphere, and success output detached from its command or conditions.

# Diagram System Direction

Architecture, sequence, data-flow, hardware, research, and comparison diagrams should use stable semantic roles for entities, boundaries, connections, states, and emphasis. Labels should name nodes and relationships directly. Legends are required when symbols or colors are not self-evident.

Each diagram needs an intended reading order, a concise purpose, a text alternative, a source and verification note, and a responsive strategy. Position, connector style, or color alone must not carry essential meaning. Complexity should be limited to the question being answered; split diagrams when one view cannot remain legible.

Compact variants may reorder, sequence, or simplify content while preserving the same conclusion. Unverified architecture must not be converted into a polished diagram. No diagram library is selected.

# Data Visualization Direction

Charts are appropriate only when real data and a visual comparison reveal a relationship more clearly than prose or a table. Every chart requires a source, measurement method, units, baseline where relevant, conditions, accessible labels, a clear conclusion, honest uncertainty, and responsive treatment.

Axes, scales, aggregation, omissions, and comparison periods must not mislead. Values should be available in text or tabular form when necessary for access and precision. Experimental or small-sample results must display their limits. Do not create charts to fill space, imply progress, or manufacture metrics from repository activity, learning streaks, or unverified project behavior.

# Link System

- Inline links should remain visibly distinguishable in prose and understandable outside color alone.
- Navigation links should communicate location and destination without looking like repeated primary actions.
- Repository links should identify the repository destination and visibility status.
- Live application links should appear only when deployment is verified and should not imply production readiness.
- Source links should make attribution and evidence origin clear.
- Related-content links should explain the relationship, not behave as opaque recommendations.
- External links should indicate external context when that affects expectation or behavior.
- Download links, if later supported, should identify file type, purpose, and relevant size or risk when needed.

All link roles require visible affordance, keyboard focus, destination clarity, and considered visited-state behavior. Not every link should become a button.

# Control System Direction

- **Primary:** The single strongest action in a local context; use sparingly.
- **Secondary:** A meaningful alternative with lower visual weight.
- **Tertiary:** Low-emphasis action that remains clearly interactive.
- **Destructive:** Action with material negative consequence, explicit language, and appropriate confirmation.
- **Quiet:** Repeated utility action such as copy, expand, or dismiss that should not compete with content.

Buttons should represent actions; text links should represent navigation unless behavior requires otherwise. Icon buttons need accessible labels and adequate targets. Disclosure controls must state what they reveal. Tabs require a justified peer relationship and must not hide essential content. Filters, search, media controls, copy controls, and theme controls should appear only when their function is supported by real content.

Avoid multiple primary actions, repeated SaaS-style calls to action, and promotional button styling throughout project pages. This section defines hierarchy and behavior, not component APIs.

# Form Direction

Future contact, search, filter, or settings forms require persistent visible labels, concise instructions, input purpose, and clear required-field indication. Validation should occur without erasing user input or relying on color. Errors must identify the field, problem, and recovery; success states must state what happened and any next step.

Forms should support keyboard use, logical focus, appropriate autofill, touch targets, understandable disabled states, and loading states that prevent duplicate action without trapping the user. Privacy context must appear before sensitive submission, and collection should be limited to demonstrated need.

A contact form is not assumed. Confirmed direct contact methods may be simpler, safer, and more maintainable.

# State System

The system must define coherent treatment for Default, Hover, Focus, Active, Selected, Disabled, Loading, Success, Warning, Error, Empty, Incomplete, To be verified, Unavailable, and Archived states.

Default establishes the resting affordance. Hover may reinforce but never introduce essential information. Focus must be stronger and independently visible. Active describes current interaction; Selected describes a chosen value or location. Disabled must explain unavailability when necessary and must not substitute for a missing feature without context. Loading preserves layout and communicates progress. Success, warning, and error require text and structural cues. Empty and incomplete states explain reality and a relevant next action. To be verified communicates uncertainty; unavailable communicates access failure or absence; archived communicates historical status without implying deletion.

Every state must remain understandable without animation or color alone and must preserve keyboard, touch, zoom, and theme behavior.

# Motion Foundation

Design-system motion roles are limited to state change, feedback, navigation continuity, disclosure, comparison, technical sequence, and media control. Motion should clarify origin, destination, causality, sequence, or completion.

Essential information must exist before or after motion in a readable state. Reduced-motion behavior should remove decorative movement and replace explanatory movement with immediate states, stepped views, or static sequences. Motion must not delay navigation, interrupt reading, or become necessary to identify state.

Final timing, easing, choreography, and libraries are not defined here. Detailed rules belong in `docs/06-animation-spec.md`.

# Responsive Design-System Behavior

- Typography should compress while preserving semantic hierarchy and readable small roles.
- Spacing should reduce major transitions before compromising reading or control usability.
- Control sizing should preserve touch and focus needs even when surrounding layout becomes compact.
- Metadata should wrap, regroup, or move near relevant content rather than shrink into unreadable rows.
- Evidence surfaces should adapt their framing and controls without losing captions or context.
- Code and diagrams should use responsive variants, contained overflow, sequence views, or text alternatives as appropriate.
- Navigation density should reduce without hiding essential global or local orientation.
- Touch behavior must replace hover assumptions and preserve the same information.
- Media may be cropped, substituted, simplified, or deferred when the original asset does not serve the smaller context.

Final breakpoints require content-driven prototypes.

# Accessibility Requirements

- All color combinations and states must provide sufficient contrast, including muted text, borders that carry meaning, focus, code, and diagrams.
- Focus must be clearly visible and must not be confused with hover, active, or selection states.
- Typography and surfaces must support text scaling and reflow without clipping, overlap, or lost controls.
- All controls and disclosures must be keyboard operable with logical state communication.
- Touch targets must remain usable independently of compact visual styling.
- Status, maturity, verification, chart, and diagram meaning must not depend on color alone.
- Icons require labels or accessible names when meaning is not already clear in adjacent text.
- Diagrams, figures, screenshots, and media require appropriate alternatives and descriptions.
- Motion roles must respect user preference and retain equivalent meaning without motion.
- Form errors must be identifiable, associated with fields, and explain recovery.
- Media controls must be available for playback, pause, repetition, and time-dependent inspection where relevant.

Numeric thresholds and final testing tools will be defined later; accessibility behavior is still mandatory in all prototypes.

# Performance Requirements

- Font selection and loading must justify family count, weights, scripts, and variable ranges while providing immediate robust fallbacks.
- Icons should use a consistent, efficient delivery approach and avoid loading unused brand collections.
- Images need purpose-specific dimensions, responsive variants, and formats appropriate to their evidence role.
- Video and animated demonstrations should be optional, deferred, controllable, and paired with static alternatives.
- Animation, shadows, blur, and filters must remain limited and should not create persistent rendering cost.
- Syntax highlighting should not require disproportionate client work for static excerpts.
- Diagrams should balance clarity with asset and script cost; static output may be preferable to interactive rendering.
- Third-party embeds must not block core content and require stable fallbacks and privacy review.
- Optional enhancements must fail without removing reading, evidence context, navigation, or contact information.

No implementation technology or numeric budget is selected here.

# Project-Specific Variation

Rust Booking API and CourtFit may emphasize different evidence without becoming separate websites.

The Rust Booking API may emphasize verified architecture, API behavior, data relationships, registration-only authentication scope, Redis role, code, requests and responses, tests, and limitations. Its current lack of automated tests, incomplete authentication, unverified deployment, and non-production-ready maturity should shape evidence treatment rather than be hidden.

CourtFit may emphasize verified interface behavior, conversation flow, streaming, provider switching, responsive states, API-key flow, and recommendation uncertainty. It must remain educational and experimental, and its visual polish must not obscure missing product data, prices, stock, persistent history, authentication, verified recommendation quality, or unresolved key behavior.

Both projects retain shared typography hierarchy, status and maturity treatment, metadata behavior, accessibility, navigation, evidence standards, and content honesty. Project-specific color variation remains unresolved and, if adopted, must preserve semantic roles and theme parity.

# Research, Learning, and Coursework Variation

Research treatment should emphasize sources, citations, evidence strength, interpretation, uncertainty, and future work. Research preparation must look structurally unresolved rather than imitate completed findings; graduation-project content must state that no final topic is selected.

Learning treatment should emphasize progression, mistakes, current level, remaining gaps, and later revision. Coursework treatment should emphasize assignment or laboratory context, constraints, role, evidence, and connection to current direction without appearing professional. Technical notes should optimize extended reading, examples, caveats, references, verification, and review dates. Experiments should keep conditions, observation, result, limits, and what cannot be concluded close together.

Historical revision should distinguish earlier understanding from later reflection without visually shaming outdated work. All families use the shared typography, states, evidence grammar, accessibility behavior, and token roles.

# Token Architecture Direction

The conceptual dependency should flow from general values toward contextual use:

- **Primitive tokens:** Raw reusable value scales such as color candidates, type metrics, spacing, radius, border, and motion primitives. Components should rarely consume these directly.
- **Theme tokens:** Theme-specific mappings that provide available foundations and contrast relationships.
- **Semantic tokens:** Meaning-based roles such as text, surface, border, link, focus, accent, and interaction states. These should be the normal foundation for use.
- **State tokens:** Semantic mappings for hover, focus, selected, disabled, loading, success, warning, error, incomplete, and unavailable behavior.
- **Evidence tokens:** Roles for code, terminal, diagrams, tables, measurements, captions, highlights, and verification context.
- **Data-visualization tokens:** Roles for series, baseline, uncertainty, comparison, emphasis, axes, and annotations.
- **Contextual tokens:** Controlled adaptations for reading, dense technical material, research, learning, or an approved project context.
- **Component-level aliases:** Narrow mappings that express a component's semantic needs without embedding raw values or page identity.

Primitive and theme values feed semantic roles; state, evidence, visualization, and contextual roles refine semantics; component aliases consume those roles. Components should use semantic roles rather than raw values wherever possible. Additional layers are justified only by recurring needs.

# Naming Principles

Future names should describe meaning, role, state, and context. Names should remain understandable when visual values or themes change and should distinguish concepts such as text emphasis, interactive state, verification, evidence, or surface purpose.

Avoid names based only on raw appearance, specific pages, project names without a reusable reason, reference brands, or temporary trends. Names such as a literal color or “homepage-card” couple use to current styling and structure; future naming should instead describe the semantic responsibility. This document does not create the final catalogue.

# Design-System Anti-Patterns

- Copying Apple, Linear, Vercel, Raycast, Stripe, Notion, Figma, or Aristide Benoist surface styles.
- A generic developer dark theme used as the primary signal of engineering.
- Excessive black-and-white minimalism that removes warmth, hierarchy, or distinction.
- Gradient and glow overload.
- Glassmorphism as a default surface system.
- Skill-logo walls or brand icons presented as evidence.
- Tiny technical labels and weak secondary text.
- Too many badges for ordinary metadata.
- Every group framed as a card.
- Every action styled as a button.
- Decorative terminal windows, fake code, or inferred diagrams.
- Arbitrary token values without a semantic role or tested relationship.
- Too many radii, shadows, or elevation levels.
- Low-contrast muted text used to create atmosphere.
- Color-only status, maturity, verification, or chart meaning.
- Project-specific themes that fragment navigation, typography, states, or accessibility.
- Tokens named after pages, temporary campaigns, or reference brands.
- A system more complex than the current content volume and maintenance capacity justify.

# Design-System Acceptance Criteria

- **Identity:** The system supports a calm, precise, thoughtful, honest personal engineering website rather than a generic portfolio or product brand.
- **Hierarchy:** Semantic roles clearly distinguish identity, titles, prose, metadata, evidence, states, and actions.
- **Reading quality:** Thai and English prose, technical text, captions, lists, and references remain comfortable and coherent.
- **Technical evidence:** Artifacts appear functional, legible, contextual, sourced, and connected to claims.
- **Semantic consistency:** Equivalent meanings use equivalent roles across page families, projects, themes, and states.
- **Accessibility:** Contrast, focus, scaling, reflow, noncolor meaning, input access, alternatives, and reduced motion are foundational.
- **Responsive behavior:** Typography, spacing, controls, metadata, evidence, navigation, and media adapt without losing meaning.
- **Performance:** Fonts, icons, imagery, video, effects, highlighting, diagrams, and embeds remain proportionate to value.
- **Maintainability:** Roles, variants, and token layers are limited, documented, reusable, and understandable.
- **Content variation:** Projects, research, learning, notes, experiments, and coursework can differ without fragmenting the system.
- **Personal character:** Authorship emerges from real writing, artifacts, relationships, and restrained details.
- **Originality:** The system avoids copied motifs, generic developer styling, template conventions, and artificial product marketing.
- **Theme parity:** Every supported theme preserves hierarchy, focus, evidence, status, diagrams, code, and identity.
- **State clarity:** All interaction, content, verification, and availability states are understandable without color or motion alone.
- **Token discipline:** Implementations can consume semantic roles without frequent raw values, page-specific names, or unnecessary aliases.

# Open Design-System Questions

The following decisions require real Thai and English content, typography prototypes, color and contrast testing, representative project screenshots, real code and terminal output, verified architecture diagrams, mobile prototypes, theme testing, accessibility testing, performance testing, and implementation constraints:

- Should the primary foundation be light, dark, user-selectable, or a tested combination with context-specific technical surfaces?
- Which typefaces provide the required personality, bilingual reading quality, technical clarity, fallback behavior, licensing, and performance?
- How many accent roles are necessary for identity, interaction, evidence, and data without creating visual noise?
- How much project-specific color variation can the Booking API and CourtFit use while preserving semantic consistency and theme parity?
- Which code, terminal, request, response, log, test, benchmark, and citation treatments work with real content?
- How compact can metadata become before status, maturity, verification, dates, and roles lose readability?
- Which surfaces require background contrast, borders, or elevation, and where are spacing and alignment sufficient?
- What spacing progression supports both calm prose and dense evidence without empty luxury or crowding?
- Which token layers and aliases are justified for the project's current size and likely growth?
- Which visual motifs, if any, emerge naturally from real projects, learning history, research preparation, or working practices?
- Can supported themes render CourtFit screenshots, Booking API artifacts, diagrams, Thai text, and code with equivalent clarity?
- Which state families need distinct structural or icon reinforcement beyond text and color?
- What responsive substitutions are required for real diagrams, tables, code, terminal output, and interface media?

No unresolved choice should be decided from a reference site's appearance, a trend, or invented content. Final values require evidence and testing.
