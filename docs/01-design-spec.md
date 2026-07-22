# Purpose of This Specification

This specification translates the approved project vision and design DNA into practical experience and design requirements for nattapong.dev. It defines how the personal engineering website should feel, communicate, organize attention, present evidence, support different audiences, and remain useful as its content grows.

The requirements in this document should guide later design decisions without prescribing their final visual or technical form. They are criteria for evaluating proposed structures and prototypes, not a final sitemap, page composition, visual system, or implementation plan.

Later documents will define the design system, page layouts, components, content details, motion behavior, implementation approach, and task planning. Those documents must remain consistent with this specification and should resolve open choices using real content, representative artifacts, prototypes, accessibility testing, performance testing, and technical constraints.

# Experience Goals

- **Quick understanding:** A visitor should rapidly identify nattapong.dev as Nattapong's personal engineering website, understand the broad direction of his work, and know where deeper evidence or contact information can be found.
- **Technical credibility:** Engineering ability should be demonstrated through relevant artifacts, reasoning, accurate terminology, and verifiable outcomes rather than decorative technical styling.
- **Calm reading:** The experience should give writing and evidence enough space to be understood without making the website empty, slow, or theatrically minimal.
- **Progressive depth:** General visitors should receive useful summaries first, while engineers, interviewers, and research readers can continue into architecture, methods, decisions, tests, limitations, and related material.
- **Personal authorship:** Selection, framing, writing, and relationships among content should make the site feel maintained by a specific person over time rather than generated from an interchangeable portfolio structure.
- **Honest representation:** Work should be described at its actual level of completion, maturity, ownership, scale, and impact. Uncertainty and unfinished work should remain visible when relevant.
- **Long-term usefulness:** The experience should accommodate new projects, notes, experiments, research, and reflections without requiring a new identity or structural redesign for every stage of growth.
- **Clear orientation:** Visitors should understand where they are, what kind of content they are reading, how it relates to other material, and what meaningful actions are available next.
- **Meaningful discovery:** Connections among projects, research, notes, experiments, learning, and open-source work should support exploration without turning the site into an unfiltered archive or recommendation feed.

# Experience Principles

- **Clarity before decoration:** Every visual or interactive choice must strengthen hierarchy, comprehension, orientation, or evidence.
- **Evidence before claims:** Statements about capability, quality, scale, or outcome should be supported by appropriate context and artifacts.
- **Concise overview before technical depth:** Establish what something is, why it matters, Nattapong's role, and its status before exposing detailed implementation material.
- **Familiar navigation before experimentation:** Primary wayfinding should use recognizable behavior; expressive interaction may appear within content only when it remains optional and understandable.
- **Content-led visual variation:** Projects and research may introduce different artifacts and emphasis, while a shared editorial structure preserves coherence.
- **Honest project status:** Finished, ongoing, experimental, paused, and abandoned work must be distinguishable without requiring visitors to infer maturity from presentation polish.
- **Accessibility and performance by default:** The core experience must be readable, operable, stable, and responsive before optional enhancement is considered.
- **Purposeful interaction:** Interaction should reveal relationships, compare evidence, demonstrate behavior, or support navigation—not reward movement for its own sake.
- **Maintainable growth:** Repeated experience patterns should be consistent enough to scale while allowing content types and levels of evidence to remain meaningfully different.

# Brand and Personality Direction

nattapong.dev should feel calm, precise, thoughtful, technically credible, curious, honest, personal, and carefully authored.

- **Calm** means attention is not competed for by constant motion, excessive calls to action, or dense decoration. Calm must still provide clear hierarchy and useful content density.
- **Precise** means labels, claims, status, relationships, and visual alignment communicate deliberate choices. Precision should not become tiny text, rigid sterility, or unnecessary technical ornament.
- **Thoughtful** means the website exposes reasoning, alternatives, lessons, and limitations rather than presenting outcomes without context.
- **Technically credible** means real evidence supports engineering language. Interfaces, code, diagrams, output, and measurements appear only when they help a reader evaluate the work.
- **Curious** means research, experiments, open questions, and learning are treated as valuable parts of development, not as lesser versions of finished projects.
- **Honest** means uncertainty, incomplete results, constraints, and actual contribution remain visible.
- **Personal** means the perspective and framing belong to Nattapong rather than a company, agency, or generic professional persona.
- **Carefully authored** means content is selected, structured, edited, and connected with intent. It does not require every item to look equally polished or complete.

The experience should avoid feeling corporate, artificially luxurious, overly promotional, generic, trend-driven, visually noisy, impersonal, overconfident, or AI-generated. It should not imitate enterprise-software messaging, premium-product campaigns, creative-agency spectacle, or recognizable motifs from the reference websites. Final branding, colors, typefaces, logos, and visual motifs remain outside this specification.

# Communication Style

- First-layer headings and summaries should use plain language that identifies the subject, relevance, contribution, and status without assuming specialist knowledge.
- Technical terminology should be accurate and introduced where it improves precision. Unfamiliar terms should receive enough context to prevent them from becoming barriers or signals of expertise without meaning.
- A direct personal voice should be used where Nattapong describes ownership, decisions, learning, uncertainty, or reflection. Neutral explanatory language may be used where the subject benefits from it.
- Ownership and contribution must be explicit. Collaborative work should distinguish Nattapong's role from team outcomes, external work, and reused systems.
- Status labels and nearby summaries should distinguish finished, ongoing, experimental, paused, and abandoned work. Status should be understandable in text and not rely on color alone.
- Uncertainty should be stated directly. Unknowns, assumptions, hypotheses, incomplete validation, and intended next steps must not be written as established results.
- Generic marketing claims such as claims of innovation, excellence, passion, seamlessness, scale, or impact should be replaced by specific explanations or omitted.
- Unsupported metrics, inflated maturity, vague social proof, or implied production use must not appear.
- **Facts** should be verifiable statements; **observations** should describe what was noticed; **hypotheses** should state what is being proposed or tested; **results** should identify outcomes and conditions; **reflections** should be clearly personal interpretation or learning.
- Metadata should help readers judge context and relevance. It should not become a dense strip of labels added to make content look technical.
- Case studies should explain the problem and reasoning, research should distinguish method from finding, and notes should communicate their intended scope and certainty.

This section governs tone and information quality; it does not supply final website copy.

# Information Hierarchy

Content should support movement through six conceptual levels:

1. **Identity and direction:** Establish whose website this is, that it is a personal engineering website, and what broad work or inquiry it represents.
2. **Context and relevance:** Explain why a subject matters, who or what it affects, Nattapong's relationship to it, and its current state.
3. **Selected evidence:** Present the strongest artifact, outcome, observation, or example needed to make the summary credible.
4. **Technical depth:** Provide architecture, methods, implementation decisions, alternatives, tests, measurements, limitations, or extended reasoning for readers who need it.
5. **Related material:** Connect projects, research, notes, experiments, open-source work, and later reflections when the relationship is meaningful and explainable.
6. **Next actions:** Offer context-appropriate continuation, such as reading deeper material, viewing source when available, inspecting related work, returning to a parent context, or making contact.

These levels describe attention and disclosure, not a final homepage sequence, sitemap, or page template. A content item may not require every level, but it must not lead with unexplained technical detail before establishing context.

Scanning should reveal content type, subject, significance, contribution, status, and available depth through clear headings, short summaries, purposeful metadata, and recognizable grouping. Sustained reading should use a stable hierarchy, comfortable line length, coherent section transitions, and orientation cues that do not interrupt the narrative. Headings should communicate meaning rather than function only as visual dividers.

# Content Presentation Principles

- **Engineering projects:** Present the problem, relevant context, Nattapong's contribution, current status, main system or approach, and supported result. A project should offer enough evidence to judge applied engineering, not merely an image and technology list.
- **Case studies:** Explain a bounded story of requirements, constraints, exploration, decisions, implementation, tradeoffs, validation, results, limitations, and lessons. Depth should follow a concise overview, and the narrative should not turn every decision into a success.
- **Research:** State the question, method, evidence, findings, uncertainty, limitations, and status. Clearly separate established findings from hypotheses, interpretation, and future investigation.
- **Technical notes:** Identify the subject, intended scope, prerequisites when necessary, and what the note explains or preserves. Notes should favor accuracy and usefulness over publication frequency or artificial authority.
- **Experiments:** State what was tested, why it was tested, the setup or constraints necessary to interpret it, what happened, and whether the result led to further work. Experimental findings must not be generalized beyond their evidence.
- **Learning progress:** Highlight meaningful changes in understanding, milestones, mistakes, and reflection. Avoid raw activity feeds, streaks, or volume-based signals that imply progress without context.
- **Open-source work:** Identify the repository or external context when available, Nattapong's exact contribution, the state of the work, and relevant decisions or outcomes. Do not imply sole ownership of collaborative results.
- **Personal and professional background:** Provide only context that helps readers understand engineering direction, experience, interests, and development. It should support the work rather than become an unsupported personal brand narrative.
- **Contact information:** Make appropriate contact paths direct, current, and easy to recognize. Contact should feel like a practical continuation, not a conversion funnel or repeated sales prompt.

The visual importance and depth of each item should follow its relevance, maturity, and available evidence. These requirements do not establish exact templates, routes, or page divisions.

# Engineering Evidence Presentation

Every artifact must have a clear reason to appear, an explanation of what it shows, and enough context for its meaning to be evaluated. Decorative evidence is not evidence.

- **Architecture:** Show only the components, boundaries, responsibilities, dependencies, and flows needed to understand the relevant decision or system behavior. Accompany diagrams with explanatory text.
- **Constraints:** State the conditions that materially shaped the work, such as scope, resources, time, devices, compatibility, data, or current knowledge. Connect constraints to their consequences.
- **Decisions:** Explain the requirement or observation behind an important choice and what the choice enabled or limited.
- **Alternatives:** Include alternatives when they clarify the decision. Explain why they were considered and why they were not selected without constructing false comparisons.
- **Tradeoffs:** Present both benefit and cost. Avoid language that reframes every compromise as a feature.
- **Tests:** Explain what behavior was checked, the relevant scenario, and what confidence the result provides. Test counts or coverage alone are insufficient evidence.
- **Benchmarks:** State what was measured, the method and conditions, the baseline or comparison when relevant, and the limits of the conclusion. Display only verified values.
- **Results:** Distinguish completed outcomes and measured effects from observations, expected benefits, and future goals.
- **Limitations:** Place important limits close to the claims they qualify. Do not hide them at the end of a long narrative.
- **Code excerpts:** Use focused excerpts that illuminate an interface, decision, algorithm, or constraint. Introduce the excerpt, explain the relevant part, preserve readability, and link to fuller source when available.
- **Terminal output:** Use real, curated output only when it proves building, testing, deployment, measurement, reproduction, or another meaningful operation. Identify the command or context and explain the significance of the output.
- **Diagrams:** Give each diagram a specific question to answer. Use labels, captions, reading order, and a text description; do not depend on spatial position or color alone.
- **Screenshots:** Select and crop the meaningful state, explain what matters in it, and keep text or controls readable. Full-interface screenshots should not be used as atmospheric backgrounds.
- **Hardware images:** Show relevant physical context, assembly, setup, scale, or state. Use captions or annotations when the engineering significance is not self-evident.
- **Work status:** Display status near the first meaningful description and repeat it where ambiguity could arise. Finished, ongoing, experimental, paused, and abandoned work should remain distinguishable in language as well as appearance.

Prototypes, experiments, unfinished systems, and abandoned work must be labeled accurately. Their evidence can be valuable, but presentation polish must never imply production maturity, validated scale, complete reliability, or results that were not established.

# Visual Hierarchy Direction

- **Scale** should distinguish page purpose, major ideas, supporting explanation, evidence, and metadata without making every section compete at display size.
- **Spacing** should separate different ideas and bring related claims and artifacts together. Large empty areas must have a communicative purpose rather than imitate premium marketing.
- **Alignment** should establish dependable reading and comparison paths. Misalignment should never make technical relationships ambiguous.
- **Contrast** should establish priority and interaction while preserving readability. It must not depend on low-contrast secondary text or dramatic visual effects.
- **Grouping** should make the relationship among title, context, status, evidence, caption, and next action explicit.
- **Content density** should respond to function. Explanatory areas should feel calm and readable; code, diagrams, results, and interfaces may be denser when organized and introduced clearly.
- **Visual evidence** should become prominent when it carries understanding, not merely because it is visually impressive.
- **Typography roles** should distinguish display statements, headings, body explanation, metadata, captions, status, and technical material consistently. Small type must remain readable and functional.

Calm explanatory areas and denser technical evidence should create a deliberate rhythm: explanation prepares the reader, evidence supports the claim, and reflection or navigation restores orientation. Exact sizes, spacing values, colors, fonts, and tokens remain for later specifications.

# Layout Behavior

- Prose should use a comfortable reading width that supports extended attention without forcing evidence into the same constraint.
- Diagrams, interfaces, comparisons, code, tables, and media may use wider regions when width materially improves comprehension.
- A consistent alignment system should make content relationships and hierarchy predictable across different content types.
- Long-form content should maintain stable orientation through meaningful headings, visible section boundaries, contextual metadata, and access to relevant continuation or return paths.
- Deliberate asymmetry or overlap may be used only when it strengthens emphasis, sequence, comparison, or personal authorship without weakening reading order.
- Repeated generic card grids should not be the default representation of projects, research, notes, and experiments. Layout should reflect differences in importance, type, status, depth, and evidence.
- Dense technical material should be broken into interpretable groups rather than placed in uninterrupted walls of interfaces, diagrams, or output.
- Responsive layouts should reorganize, stack, simplify, or substitute content according to meaning and available space.
- Evidence must remain readable. Detailed desktop screenshots, diagrams, and code must not be proportionally reduced until their content becomes decorative texture.

This behavior does not prescribe grid columns, container dimensions, breakpoints, or final page layouts.

# Navigation and Orientation

- Primary navigation should be compact, visually subordinate to content, and built from familiar interaction patterns.
- Labels should use language visitors can predict from the content. Internal terminology should not be exposed when a clearer visitor-facing concept exists.
- Current location should be perceivable through more than color and remain clear within deeply nested or related material.
- Visitors should have predictable ways to return to a broader context and move to genuinely related content without relying on browser history alone.
- Deep content should expose enough context to remain understandable when entered directly from search, an external link, or a shared URL.
- Related-content links should state the relationship or destination rather than behave as opaque recommendations.
- Search, indexes, filters, or local section navigation should be considered only when content volume and visitor tasks justify them.
- Product-scale mega menus, large ecosystem directories, hidden global navigation, and experimental navigation as the primary model should be avoided.
- Wayfinding must remain keyboard-accessible, touch-friendly, stable across screen sizes, and understandable without motion.

Final navigation labels, routes, sitemap, and hierarchy remain unresolved until the content inventory and wireframes establish what is necessary.

# Interaction Principles

Interaction should reduce effort or reveal meaning that would otherwise be difficult to communicate.

Appropriate uses include:

- Revealing optional technical detail after a useful summary remains visible.
- Comparing before-and-after states, alternatives, results, or system conditions.
- Exploring a diagram while preserving its complete explanation and reading order.
- Demonstrating a bounded workflow, state transition, or cause-and-effect relationship.
- Viewing related evidence, annotations, source context, or media without losing orientation.
- Controlling playback, sequencing, zoom, or other media behavior needed for comprehension.

Interaction must not hide essential content, require hover, depend on precise pointer movement, exist only for novelty, interrupt reading, delay navigation, or force visitors through a demonstration before reaching information. It must work with keyboard, touch, zoom, and reduced-motion preferences where applicable.

Motion should be used only when behavior, sequence, causality, or change is clearer through movement. When motion carries meaning, a static or simplified equivalent must preserve that meaning. Final animations, timing, transition patterns, and libraries are not defined here.

# Responsive Experience

- Identity, content type, context, contribution, status, key evidence, and next actions must remain understandable at every supported size.
- Content may reorder or stack when the resulting reading sequence preserves the intended hierarchy and relationships.
- Complex diagrams, interfaces, screenshots, tables, and media should receive purpose-built compact variants when cropping, reformatting, or simplification communicates better than scaling.
- Code and terminal output should remain readable and navigable without forcing the whole page beyond the viewport.
- Controls must provide touch-friendly targets and must not require hover or desktop-specific input assumptions.
- A desktop interface or diagram must never be shrunk below meaningful readability simply to preserve its original composition.
- Zoom, text enlargement, and reflow must preserve access to content and controls without clipping, overlap, or lost relationships.
- Responsive changes should remove decorative complexity before removing explanatory context or evidence.
- Differences across devices should preserve meaning even when exact composition, media, or interaction changes.

Final breakpoints and device-specific layouts should be determined later using representative content and testing.

# Accessibility Requirements

- Use semantic document structure, meaningful landmarks, and a logical heading hierarchy that matches the visible organization.
- Ensure all navigation, controls, disclosures, media, and demonstrations are operable by keyboard with a predictable focus order.
- Provide clearly visible focus that remains distinguishable across visual contexts.
- Maintain sufficient contrast for primary and secondary text, controls, states, diagrams, borders that carry meaning, and focus indicators.
- Use descriptive link and control text that communicates destination or action outside its surrounding paragraph when practical.
- Give meaningful images appropriate alternative text; mark purely decorative images so they do not add noise.
- Pair diagrams and complex visual evidence with captions and text descriptions that communicate purpose, relationships, and conclusions.
- Respect reduced-motion preferences. Remove decorative motion and replace explanatory motion with an immediate state, stepped presentation, or static sequence that preserves meaning.
- Provide accessible controls for media that plays, repeats, changes automatically, or requires time to inspect.
- Support zoom, text enlargement, and reflow without loss of content, functionality, or logical reading order.
- Never use color alone, motion alone, spatial position alone, or sound alone to communicate essential meaning.
- Do not expose essential content only on hover; pointer, keyboard, touch, and assistive-technology users must receive equivalent information.

Final testing tools, conformance targets, and numeric thresholds will be defined later. Prototypes must nevertheless demonstrate these experience requirements before implementation approval.

# Performance Experience

- Visitors should reach identity, primary context, reading content, selected evidence, and contact paths without waiting for decorative media or optional enhancement.
- Visual effects, transitions, analytics, demonstrations, and third-party content must not block core content or navigation.
- Scripts, media, fonts, and interactive dependencies should be included only when their value is clear and proportionate to their loading, execution, privacy, and maintenance costs.
- Layout should remain stable as content and media load; late changes must not displace reading position or interaction targets.
- Progressive loading may be used for secondary media and deeper evidence when placeholders, dimensions, labels, and fallbacks preserve context.
- Interactive demonstrations must justify their cost by explaining behavior or evidence more effectively than a static alternative.
- The core experience should remain functional and understandable when optional scripts, media, embeds, analytics, or enhancements fail or are unavailable.
- Responsive variants should avoid transferring unnecessary desktop assets or effects to constrained devices.

Frameworks, delivery architecture, optimization techniques, and numeric performance budgets remain implementation decisions to be established later through representative pages and testing.

# Originality Requirements

Originality must come from real work, real writing, engineering reasoning, honest status, meaningful content relationships, carefully selected artifacts, recurring personal interests, and consistent authorship over time.

- Project and research framing should reveal why the work exists, what Nattapong contributed, how decisions developed, and what remains unresolved.
- Writing should sound specific to the subject and experience rather than interchangeable with another engineer's website.
- Artifacts should be chosen because they reveal the work, not because they resemble a popular technical aesthetic.
- Connections among projects, notes, experiments, research, and later reflections should expose a cumulative path of development.
- Repeated visual or editorial motifs should emerge from patterns in the real body of work and remain subordinate to clarity.

Reject generic hero claims, skill-logo walls, repeated identical project cards, decorative terminal windows, trend-driven gradients and glow, copied reference motifs, fake metrics, and artificial product marketing. The website must not present Nattapong as a product, fabricate customer-style proof, or combine recognizable surfaces from the reference sites into a new template.

# Experience Anti-Patterns

- Too much information or specialist detail before identity, relevance, contribution, and status are established.
- Visually impressive screenshots whose meaningful content cannot be read or explained.
- Excessive animation, autoplay, parallax, repeated reveals, or transitions that compete with reading.
- Generic project grids that make different work appear interchangeable.
- Hidden, unpredictable, or experimental primary navigation.
- Unsupported claims about ownership, maturity, scale, reliability, expertise, collaboration, or impact.
- Technology lists and logo collections without explanation of their role in a real system.
- Unclear work status or presentation polish that implies completion beyond reality.
- Overly technical language without a plain-language entry point.
- Long pages without location, section, progress, return, or continuation cues.
- Empty minimalism that removes useful context or depends on exceptional imagery to communicate anything.
- Decorative complexity such as fake terminals, meaningless diagrams, arbitrary grids, excessive labels, or effects that signal engineering without evidence.
- Multiple competing actions that make every section feel promotional.
- Essential information available only through hover, motion, media playback, or successful client-side enhancement.
- Uniform visual treatment that erases meaningful differences among projects, research, notes, experiments, and learning.

# Design Acceptance Criteria

Later designs and prototypes are ready to proceed toward implementation only when they satisfy all of the following qualitative criteria:

- **Identity clarity:** The experience clearly reads as Nattapong's living personal engineering website, not primarily as a portfolio, SaaS landing page, agency showcase, or generic template.
- **Audience understanding:** Both quick evaluators and depth-oriented readers can identify appropriate entry points without the experience splitting into disconnected versions.
- **Technical evidence:** Claims are paired with relevant context and evidence, and artifacts remain legible, explained, and proportionate to what they prove.
- **Scannability:** Visitors can identify subject, relevance, contribution, status, evidence, and next action without reading every paragraph.
- **Reading quality:** Long-form text supports sustained attention through clear hierarchy, comfortable measure, coherent rhythm, and stable orientation.
- **Honest status:** Finished, ongoing, experimental, paused, and abandoned work are clearly distinguished, and claims match contribution, maturity, scale, and results.
- **Personal character:** Writing, framing, artifact selection, and content relationships feel specific to Nattapong and remain credible without inflated branding.
- **Responsive meaning:** Hierarchy, evidence, controls, and relationships remain understandable when composition and interaction change across screen sizes and input methods.
- **Accessibility:** Core content and navigation are semantically structured, keyboard-operable, perceivable without color or motion alone, and supported by equivalent descriptions and controls.
- **Performance:** Core understanding and navigation remain fast and stable, optional enhancement does not block content, and failure states preserve a functional experience.
- **Maintainability:** The proposed system can accept new and evolving content without one-off redesigns, growing inconsistency, or unnecessary complexity.
- **Originality:** The design is led by real content and authorship and does not depend on generic portfolio conventions, artificial product marketing, or copied reference aesthetics.

# Open Design Questions

The following questions must remain open until the named evidence is available:

- **Content inventory:** Which work best communicates the current engineering direction, how much mature content exists in each type, and which distinctions among projects, case studies, research, experiments, notes, and learning remain useful?
- **Content inventory and real artifacts:** What status, contribution, architecture, tests, results, limitations, source material, and visual evidence can be supported for each candidate item?
- **Wireframes:** What information architecture, navigation depth, overview behavior, and long-form orientation patterns best serve the actual content without fixing a product-scale structure?
- **Wireframes and real artifacts:** Which content deserves first-layer prominence, and where should summaries transition into deeper evidence for different audiences?
- **Real artifacts:** What content-led visual variation and recurring personal motifs emerge naturally from the work?
- **Prototypes:** Which layout behaviors, degrees of asymmetry, evidence presentations, disclosures, comparisons, and interactive demonstrations improve understanding?
- **Prototypes:** Which interactions genuinely require motion, and which are clearer as static views or user-controlled sequences?
- **Accessibility testing:** Which representations, reading orders, labels, alternatives, focus behavior, media controls, and responsive transformations provide equivalent access?
- **Performance testing:** Which media, fonts, diagrams, embeds, and interactive demonstrations provide enough value to justify their cost, and what budgets should govern them?
- **Combined prototype evidence:** Which visual foundation, typography, hierarchy, and project-specific variation support calm reading, technical density, personal character, and long-term coherence?

No open question should be resolved from reference-site appearance, trend preference, or invented content. Final choices require evidence from the website's real material and constraints.
