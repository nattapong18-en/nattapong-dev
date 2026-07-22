# Purpose of This Specification

This document translates the approved project vision, experience requirements, and content model into practical layout rules for nattapong.dev. It defines page families, content regions, reading behavior, evidence placement, orientation, responsive transformation, and the conditions under which layouts may vary.

Layout must express nattapong.dev as a living personal engineering website. It should make real work, research preparation, learning, technical writing, experiments, coursework, and development over time understandable without turning them into a conventional portfolio, product landing page, or uniform gallery.

This specification does not define final colors, fonts, components, code, routes, navigation labels, breakpoints, grid counts, container sizes, or exact pixel values. It also does not establish a final sitemap or homepage sequence. Those decisions require real content, representative artifacts, wireframes, prototypes, and testing.

# Layout Goals

- **Quick understanding:** First-layer regions should establish identity, direction, content type, relevance, role, status, and a meaningful continuation without requiring a full-page read.
- **Clear orientation:** Visitors should always understand where they are, what kind of material they are viewing, how deep it is, and how to return or continue.
- **Calm reading:** Prose should have stable rhythm, useful whitespace, and limited competition from navigation, decoration, and unrelated evidence.
- **Progressive technical depth:** Layout should move from approachable context to selected proof and then deeper architecture, reasoning, validation, and limitations.
- **Legible evidence:** Code, diagrams, interfaces, tables, output, and images should receive the space and explanation required to function as evidence.
- **Content-led variation:** Project, research, note, experiment, learning, coursework, and background layouts should reflect different reader needs and maturity.
- **Responsive meaning:** Reorganization across widths must preserve hierarchy, reading order, status, claims, evidence, and next actions.
- **Long-term growth:** New material and relationships should fit without forcing immediate redesign or premature archive complexity.
- **Maintainable structure:** Shared orientation and reading patterns should remain consistent while allowing bounded variation.
- **Personal authorship:** Selection, pacing, relationships, reflection, and artifact treatment should feel deliberately authored rather than generated from a generic template.

# Layout Principles

- **Content before decoration:** Regions exist to communicate meaning, evidence, orientation, or action.
- **Reading before spectacle:** Visual impact must not interrupt comprehension, obscure text, or delay access to content.
- **Evidence near claims:** Place an artifact beside or immediately after the statement it supports, with context and limitations.
- **Stable alignment:** Use dependable reading and comparison axes so variation does not become disorder.
- **Variable content density:** Keep explanation calm; allow technical evidence to become denser when its internal organization remains legible.
- **Bounded asymmetry:** Use asymmetry only to clarify emphasis, sequence, comparison, or authored character while preserving reading order.
- **Progressive disclosure:** Keep essential context visible and move optional depth into later regions or accessible disclosures.
- **Responsive reorganization:** Stack, reorder, simplify, crop, or substitute according to meaning rather than scaling desktop compositions.
- **Clear return paths:** Deep and directly entered content must expose parent context and a predictable route onward or back.
- **No generic card-grid default:** Content type, maturity, evidence, and reader need should determine presentation; cards are not a universal solution.

# Page Families

Page families describe layout responsibilities, not final pages, names, URLs, or required routes.

- **Entry or overview page:** Its primary purpose is rapid orientation to Nattapong, current direction, and the available body of work. First-layer information must identify the personal engineering website and provide selected, evidence-backed entry points. Expected evidence is a small number of representative artifacts or supported summaries rather than a catalog. Reading depth is shallow to moderate with optional continuation. Orientation must remain obvious and global. Related content should expose distinct pathways without pretending all categories have equal volume.
- **Major project overview:** Its purpose is accurate evaluation of a substantial project. First-layer information requires name, summary, role, status, maturity, main result, important limitation, and verified destinations. Evidence should include the strongest available project artifact. Reading depth ranges from concise overview to technical sections. Orientation must distinguish overview from deeper case-study or note material. Related links should explain project-to-note, experiment, source, or case-study relationships.
- **Project case study:** Its purpose is to explain development and decision history. The first layer requires context, scope, role, status, and the question the narrative answers. Evidence should support constraints, alternatives, revisions, validation, and results. Reading depth is high. Long-page orientation and deep links are necessary when length warrants them. Related content should return to the project overview and connect only to evidence that advances the narrative.
- **Research or research-preparation page:** Its purpose is to document inquiry without overstating certainty. First-layer information requires classification, question or exploration area, status, source basis, uncertainty, and current decision state. Evidence may include papers, notes, candidate problems, methods, or findings appropriate to maturity. Depth varies from a paper review to an extended research record. Orientation must distinguish source findings, interpretation, hypotheses, and open questions. Related material should show explicit research relationships.
- **Technical note:** Its purpose is to preserve or teach a bounded concept. The first layer requires topic, scope, intended audience, prerequisites when necessary, verification, and review date. Evidence may include code, diagrams, commands, examples, or references. Depth depends on the topic, not a product-story pattern. Orientation should support headings, references, and direct entry. Related content should explain where the note was applied or revised.
- **Experiment:** Its purpose is to document a focused test. First-layer information requires question, status, setup context, result, and main limitation. Evidence should expose conditions, procedure, observations, and artifacts. Depth should remain proportionate to the experiment. Orientation must keep result and limits connected. Related content may point to the project, research question, note, or next experiment it informs.
- **Learning progress page:** Its purpose is to show development in understanding over time. First-layer information requires learning area, current level, strongest evidence, and remaining gaps. Evidence may include selected exercises, mistakes, revisions, notes, and project connections. Depth may be chronological, thematic, or reflective based on real material. Orientation should make earlier and later understanding distinguishable. Related content should connect learning to application, not merely shared tags.
- **Coursework page:** Its purpose is to present selected academic foundations relevant to current engineering direction. First-layer information requires course or laboratory context, assignment constraints, role, and learning outcome. Evidence may include permitted reports, code, diagrams, simulations, or results. Depth should remain focused and clearly academic. Orientation must preserve the distinction from independent or professional work. Related links should explain how coursework informed later learning, projects, or research preparation.
- **About or background page:** Its purpose is to provide relevant personal, educational, and professional context. First-layer information should establish current role, education, direction, and priority without claiming a fixed specialization. Evidence is primarily verified factual context and links to representative work. Depth should remain selective. Orientation should guide visitors back into engineering content or confirmed contact options. Relationships should distinguish current evidence from interests and ambitions.
- **Contact page:** Its purpose is to provide approved public contact methods with context. First-layer information should state why contact may be appropriate and which channels are confirmed. Evidence is public readiness and current ownership of each method. Reading depth is minimal. Orientation should offer a clear return to the broader site. Related content should not become promotional recommendations.
- **Index or archive page:** Its purpose is discovery once content volume makes direct curation insufficient. First-layer information should explain scope, available classification, and current filters or grouping. Evidence is the actual indexed content and reliable metadata. Reading depth is shallow and selection-oriented. Orientation must preserve filter state and destination clarity. Related behavior should prioritize understandable grouping rather than algorithmic feeds.

# Entry and Overview Layout

An entry experience should make identity and current direction clear before exposing depth. It may surface selected work, research or current focus, learning progression, meaningful recent writing, and a contact path, but these are content responsibilities rather than a prescribed order or set of sections.

First-layer prominence should follow current relevance, maturity, verification, evidence quality, and audience value. The Rust Booking API and CourtFit are the only current major projects, but neither is automatically entitled to equal or permanent prominence. The Booking API may support backend and systems direction when repository evidence is verified; CourtFit may provide stronger user-facing evidence when its deployment and behavior are verified. Graduation-project preparation may deserve visibility because it is the current priority, but it must remain labeled as research preparation with no selected topic.

Learning should appear through meaningful progression or connections to work, not a large skills inventory. Writing should appear when it provides useful technical or reflective value, not to fill a section. Contact should be easy to locate without repeated conversion prompts.

Avoid a generic hero followed by repeated project cards, oversized empty sections, product-marketing progression, repeated calls to action, skill-logo walls, and equal visual weight for every content category. When little verified content exists, show less with more context rather than manufacturing volume.

# Major Project Overview Layout

Rust Booking API and CourtFit overview layouts must share evaluation logic without being forced into identical visual compositions.

The first meaningful region must expose:

- Project name and plain-language summary.
- Current status and maturity in text.
- Nattapong's role and individual contribution.
- Main verified result or current capability.
- An important limitation that prevents overreading the result.
- The strongest available evidence.
- Repository or live link only when verified, public, and current.

For the Rust Booking API, layout should support backend evidence such as verified architecture, request behavior, data relationships, authentication scope, Redis role, manual validation, and source material when these are documented. Its Functional MVP and educational, non-production-ready status must remain visible. Missing automated tests, incomplete authentication, unverified authorization, deployment, transactions, and booking-conflict handling must not be hidden in a distant footer.

For CourtFit, layout may use verified interface behavior, responsive states, provider interaction, streaming, or API-key flow as primary evidence. It must remain labeled educational and experimental. Recommendation uncertainty, absence of a verified product database, missing real-time prices and stock, and the unverified live URL and key behavior should remain close to relevant claims.

Deeper regions may cover context, architecture, decisions, alternatives, tradeoffs, validation, results, limitations, lessons, and related notes or experiments. Their sequence should follow the project's strongest explanatory narrative and available evidence rather than a fixed template. Unsupported sections should be omitted or marked unresolved, not filled with inference.

# Case Study Layout

A case study should create a readable progression from original context through decisions and later reflection. It should distinguish what was known at the time from what became clear afterward.

The layout should support constraints, decision history, real alternatives, failures, revisions, validation, results, limitations, and lessons. Explanatory prose should introduce each stage; evidence should then appear close to the claim or turning point it supports. Dense sequences of screenshots, commits, code, or output should be divided by interpretation so readers understand why the artifact matters.

The narrative may move chronologically, by decision, or by problem phase depending on the retained evidence. It must not invent a smooth process when the work was exploratory. Results and limitations should remain adjacent, and later reflection should be dated or otherwise separated from contemporaneous reasoning.

Long case studies need visible location, meaningful section headings, deep-linkable regions, a predictable parent-project path, and a way to continue to related evidence without returning to the top. Local navigation is justified only when it reduces disorientation rather than adding a decorative sidebar.

# Research and Research-Preparation Layout

Different stages of inquiry require visibly different structures:

- **Research item:** Center the research question, scope, method, evidence, findings, interpretation, limitations, uncertainty, and future work. Findings and their limits should remain close.
- **Research preparation:** Center the exploration area, sources reviewed, existing work, candidate problems, available constraints or hardware when verified, open questions, and current decision status. It must not borrow the visual certainty of completed research.
- **Paper review:** Keep bibliographic source and the paper authors' question, method, findings, and limitations distinguishable from Nattapong's summary, interpretation, critique, and relevance notes.
- **Open research question:** Present context, why the question matters, current evidence, assumptions, unknowns, and what investigation would be required. Do not create an empty results region.
- **Graduation project exploration:** Show candidate directions, decision criteria, research activity, constraints, and unresolved questions. A visible text statement must say that no final graduation-project topic has been selected.

Source findings, Nattapong's interpretation, hypotheses, current evidence, uncertainty, and future work must use structural labels, prose, or grouping that remains understandable without color. Citations and research figures should stay near the claims they support. Layout must not imply that paper review equals original research or that areas such as Edge AI and TinyML are established specializations.

# Technical Note Layout

A technical note should begin with topic, purpose, scope, intended audience, prerequisites when relevant, verification status, and last reviewed date. This first layer should help readers decide whether the note addresses their question and whether its information may be incomplete or time-sensitive.

The body should prioritize explanation, then use examples, code, diagrams, terminal output, caveats, and references where they improve understanding. Examples should sit close to the concept they illustrate. Caveats should qualify the relevant instruction rather than being collected only at the end. References should distinguish source material from Nattapong's interpretation or adaptation.

Notes must support long-form reading, direct links to sections, legible technical blocks, and related project or learning context. A note about Rust, backend, HTTP, databases, Linux, networking, computer architecture, embedded systems, or AI integration should follow the subject's needs rather than resemble a product page. Incomplete notes should display their scope and verification state instead of using polished layout to imply authority.

# Experiment Layout

An experiment layout should expose the question before the procedure and make its conditions visible before the result is interpreted. Required regions are question, motivation when necessary, setup, conditions, procedure, observation, result, interpretation, limitations, what cannot be concluded, next step when known, and evidence.

The result and limitations must remain close enough to be read together. Observation should be visually and structurally distinct from interpretation. Comparisons must identify inputs and conditions, and evidence must be tied to the exact run or environment where relevant.

Experiments involving Linux configuration, API behavior, browser compatibility, model behavior, embedded prototypes, networking, or performance may use different artifacts, but none should imply broader validity than tested. A short experiment should remain short rather than being expanded into a project layout.

# Learning Progress Layout

Learning layout should reveal change over time rather than display a static inventory of technologies. It should support starting point, concept studied, practical exercise, difficulty, mistake, change in understanding, current level, remaining gaps, connection to projects or research, evidence, and later revision.

Chronology may be used when dates and meaningful milestones are known. Otherwise, organize around concepts and documented changes rather than inventing a timeline. Later corrections should remain connected to the earlier understanding without silently replacing it.

Rust, backend, HTTP server and thread pool learning, Linux workflow, C and C++, coursework, networking, cybersecurity, embedded systems, AI integration, and research preparation should receive depth proportional to evidence. Guided Rust work, LearnCpp exercises, configuration troubleshooting, and laboratories must remain visibly distinct from independent major projects.

Reject skill bars, percentage proficiency, daily streaks, raw activity feeds, and a card for every exercise. Group small evidence around a meaningful learning transition; omit routine activity that adds no understanding.

# Coursework Layout

Selected coursework should establish course or laboratory context, assignment constraints, date or academic context when verified, individual or group role, evidence, learning outcome, and connection to current engineering direction.

Evidence may include permitted code, logic diagrams, reports, network configurations, simulations, hardware images, or results. Layout should identify provided requirements and external guidance so assignment completion is not mistaken for original problem definition. Group work must make Nattapong's contribution explicit.

Digital logic, computer architecture, networks, data communication, embedded systems, microcontrollers, programming, discrete mathematics, probability, automata, and algorithms are eligible areas, not a required public catalog. A course list without reflection is insufficient, and every laboratory should not become its own project-style page. Visual treatment must not imply professional production deployment or independent research.

# About and Background Layout

Background layout should provide enough context to interpret the engineering work without becoming a personal-brand campaign. It may include current role, education, engineering direction, current priority, areas of interest, learning approach, working preferences, values, and possible career directions.

Current evidence, developing interest, possible career direction, and future ambition must be grouped or labeled distinctly. The current role is an undergraduate Computer Engineering student preparing for graduation projects, subject to publication-time verification. Backend work has the strongest current project evidence; embedded systems, networking, cybersecurity, systems programming, AI for engineering, and several career possibilities remain developing or exploratory.

The layout should connect factual background to representative work, learning, or research preparation rather than list unsupported qualities. It must not use “Full-Stack Systems Engineer” as a formal current title. Personal information and contact methods should appear only when confirmed for public use.

# Index and Archive Layout

Indexes, archives, filters, and search become justified when content volume or visitor tasks make curated links insufficient. The current presence of two major projects does not justify a large project catalog or product-scale navigation.

Discovery may eventually use content type, topic, status, maturity, date, verification, or explicit relationship. Each dimension should exist only when metadata is reliable, distinctions help selection, and enough items produce meaningful results. Default views should prioritize understandable grouping and current relevance rather than endless chronology.

Prevent empty indexes, excessive filters, tag overload, combinations that routinely produce no results, infinite feeds, and categories created in anticipation of content. Empty or small categories may remain embedded in a broader curated view until growth justifies separation. Archive states should preserve historical context and clearly distinguish unmaintained material.

# Content Width Strategy

- **Long-form prose:** Remain in a controlled reading measure that supports sustained attention and predictable eye movement.
- **Code:** Stay readable at its natural indentation; use a wider region or contained horizontal access when wrapping would damage meaning.
- **Tables:** Use the width needed for comparison. On constrained screens, restructure, prioritize fields, or provide accessible overflow rather than compressing text beyond readability.
- **Diagrams:** Size to keep labels and relationships legible. Break out from prose when complexity requires it, with a compact or textual alternative.
- **Screenshots:** Remain narrow when one detail is relevant; become wide only when the surrounding interface or spatial relationship is evidence.
- **Hardware images:** Size according to the physical context, connection, annotation, or detail being explained.
- **Comparisons:** Use enough shared width and alignment to support fair comparison without forcing too many simultaneous columns.
- **Full-width evidence:** Reserve for artifacts whose system-level relationship cannot be understood within the reading column. Full width is an explanatory exception, not a visual reward.

Content may temporarily break out of the reading column, but captions, explanation, and the return to prose should preserve continuity. Width must follow information needs, not content prestige.

# Grid and Alignment Direction

Use a stable alignment system that establishes a primary reading column and predictable edges for headings, prose, media, and navigation. A secondary metadata region may support status, maturity, role, dates, verification, or local orientation when it remains readable and does not compete with the main narrative.

Evidence may break out from the primary column when labels, relationships, or comparison require space. Breakouts should retain an obvious connection to the originating claim and return cleanly to the reading flow. Sections with related purposes should share alignment; comparison items should align equivalent labels, baselines, or states.

Deliberate asymmetry may express emphasis or project-specific material, but it must preserve semantic reading order and visual stability. Nested content such as notes within a case study or evidence within a decision should use depth sparingly and avoid accumulating boxes within boxes.

Long pages should maintain continuity through recurring heading alignment, consistent caption relationships, and predictable evidence transitions. Final column counts, gutters, and container values remain unresolved.

# Section Rhythm and Density

Pages should alternate among introductory explanation, dense technical evidence, interpretation or reflection, related material, navigation, and breathing room according to the content's argument.

Explanation prepares the reader; evidence supports the claim; reflection explains significance or change; related material offers optional continuation; navigation restores orientation. Breathing room should separate ideas, not inflate their perceived importance.

Avoid overcrowding by limiting simultaneous messages, grouping evidence, and moving optional depth later. Avoid empty minimalism by ensuring spacious regions still communicate useful identity, context, status, or evidence. Dense regions should be followed by interpretation or a clear transition rather than another unrelated dense block. Repetition should establish rhythm only when the underlying content genuinely repeats.

# Visual Evidence Placement

- **Architecture diagrams:** Place beside the system claim or decision they explain, with verified scope and textual description.
- **Code excerpts:** Place after the concept or decision that makes the excerpt relevant, followed by explanation of the important lines.
- **Terminal output:** Keep next to the command, test, build, deployment, or failure claim it supports; remove irrelevant noise without changing meaning.
- **Screenshots:** Place near the capability, state, error, or responsive behavior shown. Crop for meaning and preserve readability.
- **Browser demonstrations:** Identify browser, environment, scenario, and verification limits close to the demonstration.
- **Hardware images:** Pair with setup, component, connection, scale, or observed-state explanation.
- **Tables:** Use for structured comparisons or repeated metadata when shared fields are meaningful.
- **Benchmarks:** Keep method, environment, baseline, result, and limitation together.
- **Research figures:** Keep source, caption, interpretation, and rights or attribution context close to the figure.

Every artifact requires purpose, context, caption or explanation, supported claim, source, verification level, and accessibility support. Evidence detached from explanation, used as atmosphere, or too small to inspect should be removed or replaced.

# Metadata Placement

Status, maturity, role, date, verification, and other trust-critical metadata should appear near the first substantial description when relevant. Updated date and last reviewed date should remain distinguishable from original creation or publication date.

Technology roles belong near the system or project context where they can be explained, not in an isolated logo wall. Reading depth may appear near entry links or article introductions when it helps selection. Secondary metadata may repeat near evidence only when it prevents misunderstanding.

Metadata should be grouped by reader task and presented in readable language. Do not create dense ribbons of tiny labels, repeat identical values across every region, or use status and maturity as decorative badges. Visibility and meaning must not depend on color alone.

# Navigation and Wayfinding Layout

- **Global navigation:** Remain compact, familiar, and available without dominating content.
- **Current location:** Make page family, title, and active context perceptible without color-only indication.
- **Parent context:** Deep items should identify their broader project, research area, learning area, or collection.
- **Local section navigation:** Use only for long or structurally complex content where it materially reduces disorientation.
- **Back paths:** Provide predictable contextual return paths rather than relying solely on browser history.
- **Related content:** Place after or near the reason for the relationship and describe why the destination matters.
- **Long-page orientation:** Support meaningful headings, deep links, and current-section awareness when length requires it.
- **Direct-entry pages:** Include enough identity, classification, status, and context to work when reached from an external link.
- **Footer or closing navigation:** Offer a small number of relevant continuations, return options, or confirmed contact paths without becoming an ecosystem directory.

Final labels and routes remain unresolved. Avoid hidden primary navigation, experimental primary wayfinding, product-scale mega menus, and navigation depth unsupported by real content.

# Responsive Layout Strategy

- Stack multi-region layouts into a logical reading sequence rather than preserve desktop adjacency at all costs.
- Reorder only when semantic and visual reading order remain consistent and relationships stay clear.
- Simplify secondary decoration, repeated metadata, and nonessential controls before removing context or evidence.
- Create responsive evidence variants for diagrams, interfaces, screenshots, comparisons, tables, and hardware annotations when scaling would fail.
- Keep code and terminal content readable through focused excerpts, safe wrapping where valid, or accessible contained overflow.
- Substitute a complex diagram with a sequence, smaller diagram, or text explanation when a compact version communicates better.
- Make controls touch-friendly and ensure disclosures, media, and comparisons do not depend on hover or precise pointer movement.
- Preserve heading hierarchy, captions, status, limitations, and claim-to-evidence proximity.
- Reduce decorative media and effects on constrained screens when they add cost without meaning.
- Never shrink a desktop layout, interface, or diagram until text and relationships become unreadable.

Final breakpoints should emerge from real content failures in prototypes, not from predetermined device categories.

# Long-Form Reading Behavior

Long-form pages should use a comfortable reading width, meaningful heading hierarchy, and visible continuity between sections. Paragraphs, lists, examples, and evidence should form a deliberate rhythm rather than a succession of isolated modules.

Progress and orientation may use local navigation, section labels, deep links, or contextual return controls when content length justifies them. Footnotes and references should be reachable without losing the reader's place and should provide a practical path back. Code and media interruptions should be introduced, captioned, and followed by interpretation before prose continues.

Direct links to deep sections must retain page identity and parent context. Readers should be able to return to a project overview, research context, learning area, or relevant index without restarting navigation. Mobile reading must preserve line length, heading distinction, reference behavior, code access, and stable scroll position without persistent controls consuming excessive space.

# Comparison Layouts

Comparisons may address before and after states, alternatives, benchmarks, architecture options, model behavior, browser behavior, or research approaches.

Every comparison must identify the items, shared criteria, conditions, evidence source, and conclusion. Equivalent information should align where practical, but semantic labels must remain available when columns stack. Differences must not depend only on left-versus-right position, color, animation, or visual emphasis.

Before-and-after views should define what changed and what remained constant. Benchmarks require method and limits. Architecture alternatives should not imply implementation when an option was only considered. Model and browser comparisons must record relevant conditions and avoid generalizing from undocumented tests. Research comparisons must preserve source attribution and distinguish source findings from Nattapong's interpretation.

# Empty, Loading, and Incomplete States

- **No content yet:** State that no publishable content is available in the category and offer a relevant return path; do not display an empty grid.
- **Planned content:** Label it planned and describe only confirmed intent. Do not show a finished-content shell.
- **To be verified:** Keep the claim explicitly unresolved or omit it from public capability summaries until checked.
- **Missing deployment:** Show repository or project context when available and state that deployment is unverified or unavailable; do not create a false live action.
- **Unavailable repository:** Explain current visibility or unavailability without displaying a dead link or implying public source access.
- **Incomplete case study:** Publish only if the available overview remains useful and the incomplete depth is clearly labeled; otherwise keep it internal.
- **Broken media:** Preserve caption, alternative explanation, and surrounding claim so meaning survives; remove the broken artifact if it adds no value.
- **Loading evidence:** Reserve stable space and keep the claim understandable without waiting for optional evidence.
- **Optional enhancement failure:** Preserve navigation, text, status, evidence description, and static alternatives when interactive or media enhancement fails.

Never create fake projects, placeholder metrics, fabricated screenshots, generic cards, or filler copy to make a layout appear complete.

# Accessibility Layout Requirements

- Visual order and semantic reading order must agree, including after responsive reorganization.
- Heading levels, regions, lists, tables, figures, captions, and navigation must express the visible hierarchy.
- All navigation, local orientation, disclosures, comparisons, and media controls must be keyboard accessible.
- Focus must remain visible and must follow a predictable order through main and breakout regions.
- Zoom, reflow, and text enlargement must not cause overlap, clipping, missing controls, or lost claim-to-evidence relationships.
- Captions and diagram descriptions must remain associated with their artifacts.
- Meaning must not depend only on position, alignment, size, color, or motion.
- Hover must not be the only way to access metadata, explanations, relationships, or controls.
- Motion-based diagrams or sequences require reduced-motion equivalents that preserve states and conclusions.
- Sticky navigation, side regions, and wide evidence must not cover content or trap focus on narrow or enlarged views.

Numeric thresholds and testing tools belong to later accessibility planning, but wireframes and prototypes must demonstrate these layout behaviors.

# Performance Layout Requirements

- Prioritize identity, headings, prose, status, limitations, and primary navigation before optional media or interactive evidence.
- Choose responsive assets according to the displayed evidence need rather than sending full desktop media to every context.
- Reserve stable dimensions or meaningful placeholders for media so loading does not shift reading position or targets.
- Lazy-load secondary or below-context evidence only when captions and surrounding content remain useful before it arrives.
- Prioritize the strongest evidence; do not load multiple redundant screenshots, videos, or diagrams merely to fill wide regions.
- Treat embeds as optional and provide a stable explanatory or static alternative.
- Consider font cost as part of reading performance; typography choices must not delay access to legible core content.
- Keep core content available when optional scripts, media, demonstrations, analytics, or third-party services fail.

This specification does not select loading techniques, asset tooling, frameworks, or numeric budgets. Layout proposals should still account for media cost and stability before implementation.

# Layout Anti-Patterns

- Generic project-card grids as the default for all work.
- Every section centered regardless of reading or evidence needs.
- Excessive full-width media without a system-level reason.
- Tiny, low-priority, or unreadable metadata used to look technical.
- Decorative sidebars that compete with prose or remain empty.
- Overlapping content without explanatory or authored purpose.
- Long pages without headings, location, deep links, or return paths.
- Desktop layouts simply scaled down for small screens.
- Diagrams, screenshots, code, or output detached from the explanation they support.
- Too many simultaneous columns for prose, metadata, evidence, navigation, and related content.
- Empty luxury spacing used to inflate ordinary content.
- Product landing-page rhythm built from repeated claims, demonstrations, and calls to action.
- Essential content hidden inside hover, animation, tabs, carousels, or optional enhancement.
- Repeated identical page structures that erase differences among projects, notes, experiments, research, and learning.
- Visual prominence based on polish rather than relevance, maturity, verification, and evidence.

# Layout Acceptance Criteria

- **Identity clarity:** The layout reads as a living personal engineering website, not a generic portfolio or product campaign.
- **Content hierarchy:** Identity, context, role, status, evidence, depth, relationships, and next actions appear in a coherent order.
- **Evidence readability:** Artifacts are legible, explained, close to supported claims, and not reduced to decoration.
- **Orientation:** Visitors can identify location, parent context, available depth, and return or continuation paths, including on direct entry.
- **Scannability:** First-layer information allows readers to judge relevance, maturity, verification, and reading commitment quickly.
- **Long-form reading:** Prose, evidence, references, and navigation support sustained attention without fragmentation.
- **Responsive meaning:** Reorganization preserves hierarchy, reading order, evidence, limitations, and controls across widths and inputs.
- **Accessibility:** Semantic and visual order agree; focus, reflow, descriptions, captions, and nonvisual meaning remain usable.
- **Performance:** Core content is stable and available before optional enhancement, and media cost is proportionate to evidentiary value.
- **Content variation:** Page families and project presentations reflect content type, maturity, evidence, and reader need without losing shared orientation.
- **Maintainability:** Layout patterns can accept future content and metadata without one-off exceptions or premature navigation complexity.
- **Originality:** Authorship comes from real content, pacing, relationships, and artifacts rather than copied reference motifs or template conventions.

# Open Layout Questions

The following questions require real content, a completed content inventory, wireframes, representative project artifacts, research material, screenshots, code samples, mobile prototypes, accessibility testing, or performance testing:

- Which verified content deserves first-layer prominence for current audiences and direction?
- How much navigation depth is justified by the actual volume and relationships of publishable material?
- Which pages are long or complex enough to need local navigation, current-section feedback, or persistent orientation?
- Which architecture diagrams, interfaces, comparisons, code samples, hardware images, or research figures genuinely need full-width treatment?
- Which page families or major projects need project-specific layout variation, and which orientation patterns must remain shared?
- How should an entry or project view behave while only two major projects exist, without implying an empty catalog or forcing equal prominence?
- How should learning content grow through milestones and relationships without becoming a feed, streak, or exercise grid?
- Which real artifacts require stacking, cropping, sequence views, textual alternatives, or purpose-built mobile variants?
- Does the Rust Booking API have verified architecture, endpoint, deployment, schema, authentication, Redis, testing, or conflict-handling evidence suitable for layout?
- Which CourtFit interface states, API-key flow, provider behavior, responsive views, browser tests, and live deployment evidence are verified and safe to show?
- What research-preparation material and paper reviews exist, and how should their uncertainty and source relationships be displayed?
- Which coursework, Linux, C++, Rust, networking, embedded, cybersecurity, and AI-learning items have enough evidence and reflection to justify dedicated pages rather than grouped entries?
- How should references, footnotes, long code, wide tables, and complex diagrams behave in real mobile and zoom prototypes?
- Which media and interactive evidence remain worthwhile after accessibility and performance testing?

No unresolved layout choice should be answered from reference-site appearance, invented content volume, or a desire to make the website look complete.
