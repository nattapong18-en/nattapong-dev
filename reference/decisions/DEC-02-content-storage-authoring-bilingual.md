# Decision Record

**ID:** DEC-02  
**Scope:** Content storage, authoring, validation, internal/public separation, and bilingual behavior for nattapong.dev  
**Decision owner:** Nattapong  

This record evaluates and records the approved content direction for the personal engineering website. Approval does not authorize implementation, content migration, public copy, schemas, routes, dependencies, or configuration.

# Decision Status

Approved

- **Approved by:** Nattapong
- **Approval method:** Explicit user confirmation
- **Approval wording:** “Use repository-local Astro build-time content collections through the current Content Layer API for public content; use plain Markdown as the default long-form format; use structured metadata with structural, referential-integrity, and project-specific semantic validation treated separately; keep public-ready content in an allowlisted source separate from internal `docs/` and `reference/` material; support one primary language per entry with optional translated siblings and mixed-language content without mandatory or automatic translation; and defer MDX and an external CMS until a verified need justifies a new decision.”

# Decision Question

Which content-storage, authoring, validation, internal/public separation, and bilingual-content model provides the smallest maintainable foundation for the approved scope of nattapong.dev?

# Approved Inputs

- DEC-01 approves Astro with static HTML generation by default, client JavaScript only through separately justified local islands, and no request-time renderer, server adapter, or continuously running application server.
- CON-01 confirms a bounded set of public profile and contact fields. It also withholds the Thai name, LinkedIn, Facebook, contact-purpose language, precise location, phone number, private accounts, credentials, university identifiers, and private documents.
- The workspace audit found no implementation, package manifest, lockfile, package manager, Astro scaffold, content source, or established implementation path. Empty directories do not establish an architecture.
- The repository is intended to preserve reviewable history for one primary maintainer. Generated or AI-assisted text is not evidence until checked against an authorized source.
- Project claims remain constrained by the current inventories and later PRJ-01 and PRJ-02 verification. Research Preparation must continue to state that no final graduation-project topic has been selected.

# Content Requirements

The model must support:

- Personal background and approved public contact destinations.
- Major Projects, project evidence, Research Preparation, Technical Notes, Experiments, Learning Progress, and selected Coursework.
- Long-form prose alongside structured status, maturity, verification, role, contribution, limitations, and evidence context.
- Thai-only, English-only, and mixed Thai-English entries without treating technical language mixing as invalid by default.
- Optional translations and explicit relationships among content without requiring every entry to exist in both languages.
- Code excerpts, terminal transcripts, API evidence, figures, screenshots, diagrams, tables, comparisons, citations, and external references.
- Direct-entry page generation from a static build while keeping content meaning separate from presentation.
- Explicit visibility and public/private boundaries, including honest incomplete, archived, unknown, unavailable, and To be verified states.
- Build-time validation that rejects structurally invalid public content and broken required relationships.
- Readable Git diffs, human review, manual editing by one maintainer, and bounded Codex assistance.
- A migration path if later content volume or editorial needs justify a different authoring system.

# Non-Requirements

The current scope does not justify:

- A content-management user interface, content database, or continuously running CMS.
- Multiple editors, collaborative approval workflows, preview accounts, or remote editing.
- Real-time publishing or request-time content retrieval.
- User authentication, comments, personalization, or user-generated content.
- Automatic translation, AI-generated publication, or automatic completion of missing fields.
- Complex search, filtering, or large archive infrastructure.
- A requirement that every content item have both Thai and English versions.
- A route, URL-prefix, default-site-language, navigation, media-tooling, or deployment decision.

# Evaluation Criteria

- Compatibility with DEC-01's Astro static-output boundary.
- Suitability for long-form authoring and structured metadata.
- Build-time validation, relationship integrity, and explicit missing states.
- Git history, diff clarity, content review, and Codex-assisted editing.
- Safe separation of internal planning material from public build inputs.
- Accurate preservation of status, maturity, verification, limitations, role, contribution, and evidence.
- Thai, English, mixed-language, and optional-translation behavior.
- References to technical artifacts and media without binding content to presentation tooling.
- Direct-entry static page generation and portability.
- Dependency surface, local complexity, upgrade burden, and maintenance by one person.
- Reversibility and the ability to add a CMS later only after a demonstrated need.
- Risk of hardcoded duplication, presentation logic leaking into content, or speculative infrastructure.

# Options Considered

1. **Astro content collections using the current Content Layer API, with local Markdown and schema-validated metadata.** Related repository-local content is loaded at build time, validated as collections, queried through content APIs, and rendered into static output.
2. **Repository-local structured TypeScript, JSON, or YAML data with separate templates.** Content is held primarily as structured records while templates render prose and evidence.
3. **Content hardcoded directly in Astro pages and components.** Page modules contain both content and presentation.
4. **An external headless CMS.** Content is edited and stored outside the repository and fetched into the site.

# Option 1 — Astro Content Collections with Markdown

**Storage model:** Astro's current documentation calls the feature content collections and implements local build-time content through the Content Layer API. Built-in loaders can load local Markdown and structured files, while an optional schema supplies validation, editor assistance, and type safety. For this project, the relevant form is a build-time collection; live collections are inconsistent with DEC-01 and unnecessary for the approved content.

**Authoring:** Markdown is well suited to long-form project narratives, notes, research preparation, experiments, learning records, and coursework. Frontmatter can carry structured metadata while the body remains readable prose. This keeps most editorial changes independent from templates and produces focused text diffs.

**Validation:** A schema can require or constrain structured metadata by content family, provide type safety and editor assistance, and validate the representation of relationship fields. Astro also provides reference metadata between collections and retrieval through entry APIs. These capabilities do not by themselves guarantee that every referenced target exists: reference resolution occurs when entries are retrieved, and an invalid target can resolve to `undefined`. Required translation, evidence, artifact, and related-content integrity must therefore be enforced by a separately designed explicit check during the static build, with a broken required relationship failing that build. An optional relationship may remain absent only when the later approved content model permits that state. The final schema and validation design remain deferred.

**Long-form suitability:** Strong. Markdown is designed for text-heavy material and keeps headings, lists, tables, code fences, quotations, and links legible in source form. Complex evidence should normally be referenced through metadata or bounded content conventions rather than encoded as large presentation-specific blocks.

**Git and Codex workflow:** Strong. Repository-local text is versioned with the implementation, can be reviewed as a diff, and can be edited without a remote service. Codex can assist within an authorized file scope, but source verification and human approval remain necessary.

**Internal/public separation:** Strong when collection inputs are explicitly public-ready and separate from `reference/` and `docs/`. The build can query only approved public sources. This is a project boundary, not an automatic property of collections, so implementation must prevent broad filesystem imports and implicit publication.

**Bilingual behavior:** Strong. Each entry can carry a primary language and, where applicable, an explicit translation relationship. Thai-only, English-only, and mixed-language entries can coexist without duplicate placeholders. The content relationship can remain separate from later route and navigation decisions.

**Artifact references:** Strong. Structured metadata can associate artifacts, citations, evidence, and related entries while Markdown supplies the explanation. The exact representation and asset paths remain deferred.

**Maintenance:** Proportionate to a content-led Astro site. It introduces an Astro-specific collection configuration and schema that must be maintained, but avoids a separate service, account, database, and synchronization layer.

**Portability:** Markdown and ordinary structured metadata are broadly portable. Collection configuration and references are Astro-specific, so future migration would require an adapter or transformation, but the authored prose need not be rewritten if framework-specific constructs are restrained.

**Risks:** Too many collections, overly rigid schemas, implementation-specific frontmatter, and premature taxonomies could make a small site cumbersome. Markdown can also become difficult to review if presentation directives or large opaque data blocks accumulate.

**Becomes unsuitable when:** Content must be edited by several nontechnical contributors, requires real-time external publishing, depends on complex editorial workflow, or grows beyond a repository-based workflow. None of those conditions currently exists.

# Option 2 — Structured Repository Data Files

**Storage model:** TypeScript, JSON, or YAML records can keep metadata and relationships explicit and can be loaded into Astro at build time. Astro's content collections can also load some structured local data, so structured files are not necessarily an alternative to the Content Layer; the option here means making structured records the primary authoring form instead of Markdown bodies.

**Authoring:** Strong for compact facts, repeated records, registries, or small data sets. Weaker for long-form narrative because prose becomes quoted values, multiline scalars, or code-like structures. That reduces natural writing flow and makes headings, citations, and technical explanations more cumbersome.

**Validation:** Potentially strong. TypeScript can provide static types, while collection schemas or other build-time checks can validate JSON or YAML. However, choosing among these formats and validation mechanisms would add decisions not needed to select the overall direction.

**Git and Codex workflow:** Good for bounded structured changes. JSON can be noisy, YAML can have syntax and scalar-formatting hazards, and TypeScript mixes content with executable syntax. Long passages often produce less readable diffs than Markdown.

**Internal/public separation:** Achievable through explicitly separate public data sources and visibility rules, but not inherently safer than collections. Importing a private or synthesis data module can still publish it accidentally.

**Bilingual behavior:** Explicit language and translation relationships are straightforward. Keeping large parallel translations inside aggregate data files can increase merge conflict and review difficulty.

**Artifact references:** Strong for normalized relationships and metadata, although verbose records may distance evidence from explanatory prose.

**Maintenance and portability:** JSON and YAML are broadly portable; TypeScript is more implementation-coupled. A structured-only model risks creating a bespoke content system and templates for concerns that Markdown plus collections already handles.

**Best use:** A supporting format for compact, genuinely data-shaped public records may be justified later. It is not preferred as the default for long-form content.

# Option 3 — Content Hardcoded in Astro Pages

This option has the lowest initial setup for a very small number of unique pages. Astro's official guidance notes that individual pages can be reasonable when there are only a few pieces of unlike content.

For nattapong.dev, the approved scope already includes recurring content families, structured state, evidence relationships, optional translations, archives, and incomplete states. Hardcoding these across page and component files would duplicate metadata rules, make content review depend on template code, and weaken build-time guarantees. It would also encourage public copy, visibility logic, and presentation to become inseparable.

Git would still record changes, but content diffs would be mixed with imports, layout, and component behavior. Codex-assisted editorial work would require broader implementation-file authorization. Missing fields could be silently handled by template logic rather than honestly represented in content.

Hardcoding remains reasonable for small fixed interface text or truly unique structural copy once routes and pages are approved. It is not a suitable primary content store for the planned content families.

# Option 4 — External Headless CMS

An external CMS could provide remote editing, editorial interfaces, multiple contributors, drafts, scheduled publishing, and APIs. Astro can load remote sources at build time, and a CMS could later feed a build-time collection.

Those capabilities are not current requirements. A CMS would introduce an external account, service availability, authentication, schema synchronization, API credentials, privacy review, network-dependent builds, export concerns, and provider maintenance. It would weaken the current advantage of local reviewable content and expand the secret and operational surface.

A CMS does not inherently solve factual verification, translation quality, visibility safety, or evidence integrity. Those still require project rules and review. Live CMS fetching would additionally conflict with the approved no-request-time-server boundary.

This option becomes preferable only if demonstrated multi-editor, nontechnical editing, remote workflow, or publishing-frequency needs outweigh repository-local simplicity. No provider should be selected before such evidence exists.

# Markdown and MDX Analysis

**Markdown as the default:** Preferred. It is built into Astro, remains readable outside the framework, supports frontmatter and common long-form structures, and keeps prose diffs clear. Structured metadata should carry classification, visibility, language, state, verification, and relationships; Markdown should carry the authored explanation.

**MDX as the default:** Not preferred. Astro's official MDX integration allows variables, JSX expressions, and components inside Markdown, but it requires an additional integration and permits presentation or interactive behavior to enter content files. That increases dependency, review, accessibility, and migration costs without a demonstrated recurring need.

**MDX as an exception-only format:** Potentially valid later, but only through a separate justified decision or task. A real content item would need to demonstrate that an embedded component materially improves understanding and cannot be represented through Markdown, structured artifact references, or a page-level composition. Any interactive evidence would still require a useful static and reduced-motion alternative.

**Current decision:** Defer MDX and do not select or install its integration. Deferral is preferable to pre-approving exceptions before representative content exists.

# Comparative Analysis

| Criterion | Astro collections + Markdown | Structured repository data | Hardcoded Astro pages | External CMS |
| --- | --- | --- | --- | --- |
| Astro static-output fit | **Strong:** build-time content and static route generation align directly | **Strong:** local data can be consumed at build time | **Strong:** pages render statically | **Conditional:** build-time fetching can fit; live fetching does not |
| Long-form authoring | **Strong:** natural prose format | **Weak to conditional:** awkward for substantial prose | **Conditional:** capable, but mixed with implementation | **Strong:** editor-dependent |
| Structured metadata and validation | **Strong:** collection schemas are designed for related entries | **Strong:** requires a selected validation approach | **Weak:** duplicated local checks are likely | **Strong, conditional:** remote and local schemas must remain aligned |
| Git history and diff quality | **Strong** | **Strong for compact data; conditional for prose** | **Conditional:** content and code are mixed | **Weak:** history primarily lives outside the repository |
| One-maintainer operation | **Strong:** no additional service | **Strong:** no additional service, but more custom modeling | **Conditional:** simple start, costly expansion | **Weak:** added service and credentials |
| Internal/public boundary | **Strong when sources are explicitly separated** | **Strong when sources are explicitly separated** | **Weak to conditional:** easy to import internal values into pages | **Conditional:** requires remote permissions plus build boundaries |
| Optional bilingual content | **Strong:** per-entry metadata and explicit siblings | **Strong:** explicit records, less friendly for long translations | **Conditional:** duplicated page logic is likely | **Strong, conditional:** CMS localization model may impose structure |
| Content/presentation separation | **Strong** | **Strong** | **Weak** | **Strong, but provider-shaped** |
| Dependency and upgrade surface | **Low to moderate:** Astro-native configuration | **Low to moderate:** depends on chosen format and checks | **Low initially; maintenance grows with duplication** | **High:** service, SDK/API, credentials, and synchronization |
| Portability | **Strong:** Markdown is portable; collection setup is not fully portable | **Strong:** especially JSON/YAML | **Conditional:** content is coupled to Astro templates | **Conditional:** depends on export and provider model |
| Over-engineering risk now | **Low if collections and schemas stay bounded** | **Moderate:** bespoke structures can expand | **Moderate:** under-structured initially, costly later | **High** |

# Approved Content Storage Model

Use repository-local **Astro build-time content collections through the current Content Layer API** for recurring public content families. Use Markdown bodies for long-form entries and schema-validated structured metadata for identity, classification, language, visibility, state, evidence, limitations, and relationships.

Structured repository data may support compact public records when a real data-shaped need is established, but it should not replace Markdown for long-form material or become a parallel content architecture. The exact collection boundaries, file locations, and formats remain implementation decisions.

Do not use live content collections, remote runtime sources, or a CMS under this decision. All approved content should be available during the static build.

# Approved Authoring Model

- Author long-form content in plain Markdown by default.
- Keep recurring metadata structured and separate from prose while maintaining proximity in the same entry where practical.
- Treat content changes as reviewable repository changes subject to factual, privacy, and publication checks.
- Allow Codex to assist only within authorized files and sources. Generated content remains unverified until reviewed; it must never manufacture facts or fill missing values.
- Keep templates responsible for presentation and content entries responsible for meaning. Do not place page layout, component imports, or interaction logic into ordinary content.
- Represent optional information as absent or explicitly unresolved according to the approved model; do not generate filler or infer defaults that change meaning.
- Defer MDX until representative content proves a need for components within authored prose.

# Approved Validation Model

Build-time validation should distinguish three responsibilities rather than treating schema validation as a complete integrity guarantee:

- **Structural schema validation** checks each entry's data shape, allowed values, relationship-field representation, and required metadata. It supports editor assistance and type safety but does not prove that referenced targets exist.
- **Referential-integrity validation** explicitly retrieves or otherwise resolves every required translation, evidence, artifact, and related-content target. Because Astro's documented reference resolution can return `undefined` for an invalid target, a required unresolved target must fail the static build. An optional relationship may be absent only when its approved content-family rules allow absence; it must not produce a broken destination or invented fallback.
- **Project-specific semantic validation** enforces rules that go beyond data shape and target existence, including publication visibility, translation consistency, evidence restrictions, known limitations, project verification boundaries, and Research Preparation's no-final-topic state. These checks are project responsibilities and must not be attributed automatically to Astro.

Together, those layers should verify the following conceptual responsibilities:

- Every publishable entry has stable identity, a recognized content family, a title, a primary language, and explicit visibility.
- Status, maturity, and verification values are appropriate to the content family and remain distinct concepts.
- Role and contribution are present where a project or coursework claim requires them.
- Limitations and uncertainty are retained where the source record requires them; validation must not turn optional prose into permission to omit known limitations.
- Required evidence and related-content references explicitly resolve to known public-ready entries or approved artifacts; optional relationships follow the absence rules approved for their content family.
- Translation relationships are explicit, reciprocal or otherwise consistently resolvable. A language switch is presented only after the public-ready sibling has been explicitly resolved.
- Date or review context is validated only when provided; absence must not trigger an invented date.
- Archived, incomplete, unknown, unavailable, and To be verified states remain representable and reviewable.
- Private, internal, or not-public-ready records cannot pass into the publishable query merely because other fields are complete.
- Research Preparation cannot be represented as a selected or validated graduation-project topic without new verified evidence.
- Project claims that require PRJ-01 or PRJ-02 evidence cannot be promoted by metadata alone.

The later implementation must decide exact schemas, requiredness by family, diagnostics, reference-resolution checks, and semantic cross-entry checks using representative content. This decision does not define field names, interfaces, enums, validation functions, or test tools.

# Approved Internal and Public Boundary

- `reference/synthesis/` remains internal planning material. Governing documents and decision records also remain internal project documentation.
- Public-ready content must be authored in a separate, explicitly approved source that is designed as a build input. This record does not choose its path.
- Public pages must not import whole synthesis, inventory, governance, or decision documents. Verified facts must be deliberately transferred into a public content record with their publication state and evidence context intact.
- Visibility must be explicit. Missing visibility is a validation failure, not permission to publish.
- Private and not-public-ready fields must not be copied into public entries, bundled as unused public data, or exposed through generated metadata.
- Internal editorial notes and verification instructions must remain outside rendered public output. If editorial state is needed during authoring, implementation must ensure it cannot be emitted accidentally.
- Absence of a field must remain absence, Unknown, To be verified, or another approved honest state. Templates and content tooling must not infer public claims.
- Project content must remain within the evidence permitted by the inventories and later PRJ-01/PRJ-02 reviews.
- A public build should consume an allowlisted public source rather than filter a broad mixed private/public source after import. This reduces the impact of a visibility mistake but does not replace review.

# Approved Bilingual Model

- Each content entry declares one primary language for its authored body.
- Thai-only and English-only entries are valid first-class content. Every entry is not required to have a translation.
- Mixed Thai-English entries are valid where the writing genuinely mixes languages or technical terms. The primary language should describe the dominant reading context, while meaningful language changes in rendered text should be marked appropriately.
- A translation is a separately authored sibling entry connected through an explicit translation relationship. It is not a second body hidden inside the same record by default.
- A language switch is offered only after explicit resolution confirms that a real, public-ready translated sibling exists. Missing or `undefined` translation resolution must suppress the switch rather than create an empty page, a disabled destination presented as available, or mislabeled fallback content.
- Direct entry must render the requested entry in its declared language with complete context. If no translated sibling exists, the page remains in its authored language and states no false translation availability.
- Translation relationships are content metadata; final routes, prefixes, default site language, and navigation labels remain deferred.
- No automatic machine translation is approved. Machine-assisted drafts, if ever authorized, require human review and must not be treated as verified publication.
- Status, maturity, verification, role, contribution, limitations, evidence, and meaningful corrections must stay semantically consistent across translated siblings. A translation may use natural phrasing but must not strengthen or omit claims.
- Browser-language detection must not automatically redirect visitors under this decision. Any such behavior requires a separate routing decision and must preserve direct entry and user choice.
- Rendered pages should declare their overall language, and distinct language runs should be identified where meaningful. This follows W3C language guidance and supports pronunciation, processing, and accessibility.

# Approved Artifact and Evidence References

Content entries should refer to artifacts through structured, reviewable relationships rather than embedding large opaque payloads into prose. A reference should be able to preserve the artifact type, purpose, source, supported claim, verification state, caption or explanation, accessibility alternative, conditions, limitations, and redaction context where applicable.

Relationship metadata can validate the structure of an artifact or evidence reference, but the static build must explicitly resolve every required target and reject required references that are missing, invalid, private, or not public-ready. Optional references may be omitted only under the later approved content-family rules. This cross-entry behavior is a project validation responsibility, not an automatic guarantee of Astro's collection schema.

Markdown may contain small code examples, tables, citations, and links when they are integral to the explanation. Larger screenshots, terminal transcripts, API exchanges, diagrams, comparison data, and media should remain separable assets or evidence records when that improves reuse, validation, responsive alternatives, and privacy review.

This direction does not select asset locations, image processing, syntax highlighting, diagram generation, media hosting, or component behavior. External references must remain distinguishable from locally verified evidence, and unavailable evidence must not be replaced with decorative substitutes.

# Approved Content Decision

Adopt repository-local **Astro build-time content collections using the current Content Layer API**, with **plain Markdown as the default long-form authoring format** and **schema-validated structured metadata** for public content state and relationships.

Maintain a strict allowlisted boundary between public-ready content sources and internal `reference/` or `docs/` material. Support a primary language per entry, optional separately authored translation siblings, and valid Thai-only, English-only, and mixed-language entries. Defer MDX and any external CMS until a verified need justifies their cost.

This decision is **Approved**. Approval establishes the content direction only; it is not implementation or publication authority.

# Why This Direction Fits

- It matches Astro's approved static-first model and keeps content available at build time.
- It treats long-form writing as content rather than component code.
- It gives recurring content families enough structure to preserve status, maturity, verification, limitations, evidence, role, and contribution.
- It produces readable repository history for one maintainer and supports bounded Codex assistance without treating generated output as evidence.
- It permits bilingual growth entry by entry rather than imposing duplicate work before translations exist.
- It creates a deliberate public source instead of exposing internal synthesis material to rendering.
- It supports content relationships and technical artifacts without selecting their final components, routes, or tools.
- It avoids the operational and privacy surface of a CMS while keeping Markdown and structured metadata portable.
- It can begin with a small number of collections and expand only after recurring content demonstrates the need.

# Why the Alternatives Are Not Preferred

**Structured files as the primary model** are strong for compact records but make long-form project, research, experiment, and learning prose harder to author and review. They remain a possible supporting format, not the default.

**Hardcoded pages** are suitable for a few unique fixed pages but would mix content with implementation, duplicate state rules, and make bilingual and evidence relationships difficult to validate consistently across the approved content families.

**An external CMS** solves editorial and remote-work needs that have not been demonstrated. It adds service, credential, synchronization, availability, privacy, and migration concerns while weakening the simple repository review path.

**MDX by default** would add component and expression capability inside content before a recurring need exists. That increases coupling and review surface and risks turning authored material into page implementation.

# Accessibility Consequences

- Primary language metadata must reach the rendered document language, and meaningful language changes should be identifiable in markup.
- Structured content must not weaken semantic headings, lists, tables, captions, citations, code labeling, or figure alternatives.
- Translated siblings must retain limitations, status, evidence, and other context rather than presenting a simplified but misleading version.
- Artifact references must support text alternatives and static explanations independently of optional interactive components.
- Markdown does not guarantee accessible output; authored structure, renderer behavior, templates, and resulting HTML require validation with real Thai, English, and mixed-language content.
- MDX deferral reduces the chance that uncontrolled component use introduces inaccessible interaction inside prose.

# Responsive and Long-Form Consequences

Markdown keeps long-form source independent from visual widths and responsive composition. Templates can adapt prose, metadata, code, tables, figures, and evidence without rewriting the content record. Structured artifact references permit alternate presentations or text equivalents when media cannot scale safely.

The model must tolerate long Thai and English titles, mixed-language wrapping, substantial limitations, metadata reflow, wide technical artifacts, and missing optional fields. Content validation should not impose layout-driven length limits before prototypes establish a real requirement.

# Maintenance Consequences

The maintainer must own collection definitions, validation rules, content review, translation relationships, and framework upgrades. Schema changes can affect many entries and therefore require migration review rather than silent relaxation. Bilingual siblings can drift and need review when shared claims change.

In return, no CMS service, remote database, credentials, or synchronization process is required. Most writing remains ordinary Markdown, and the repository preserves decisions and history. The system should begin with only collections justified by real recurring content; a collection for every possible family would recreate the over-engineering this decision is intended to avoid.

# Testing and Validation Consequences

Later implementation should validate:

- Collection loading and schema failures during the approved build process.
- Required and optional metadata using real representatives from both Major Projects, Research Preparation, and at least one non-project family.
- Explicit visibility and exclusion of internal/private sources from public output.
- Missing required related-content, evidence, artifact, and translation references, including documented `undefined` resolution behavior.
- Build failure when a required relationship cannot be resolved.
- Missing optional references, including honest omission when an optional relationship is absent and that absence is permitted by the approved content model.
- Suppression of a language switch when no public-ready translated sibling resolves.
- Honest rendering of missing, incomplete, archived, unavailable, and To be verified states.
- Thai, English, mixed-language, and untranslated direct-entry content.
- Parity of material status, limitations, and evidence across translated siblings.
- Markdown output semantics, headings, code, links, tables, citations, and artifact alternatives.
- Failure behavior when optional media or client-side enhancement is unavailable.

This decision does not choose test tools, commands, or continuous-integration behavior.

# Risks and Mitigations

- **Over-structured schemas:** Requiring every possible field can make authoring brittle. Mitigate by validating meaning per content family, using representative entries, and preserving honest optional or unresolved states.
- **Under-structured claims:** Free prose can hide status or limitations. Mitigate by requiring key semantic metadata and keeping evidence near claims.
- **Internal content leakage:** A broad import could expose private planning data. Mitigate through separate allowlisted public sources, explicit visibility, no direct synthesis imports, and public-output review.
- **Translation drift:** Siblings may diverge on facts. Mitigate with explicit relationships, shared semantic checks, and review whenever material claims change.
- **Markdown presentation leakage:** Custom directives or embedded structures can couple content to templates. Mitigate by using ordinary Markdown and structured artifact references; defer MDX.
- **Collection proliferation:** Too many content types increase maintenance. Mitigate by adding collections only for recurring structures and composing shared semantics rather than mirroring every page family.
- **Astro API coupling:** Collection configuration can change across framework versions. Mitigate by relying on current documented build-time APIs, keeping authored content portable, and reviewing upgrades.
- **AI-assisted inaccuracies:** Efficient editing can produce unsupported claims. Mitigate by requiring source evidence, human review, and explicit unverified states; AI output is never verification.
- **CMS migration pressure later:** Repository editing may become limiting. Mitigate by keeping prose and metadata portable and reconsidering a CMS only after actual editorial needs are documented.

# Reversibility and Migration

Markdown bodies, ordinary media, and implementation-neutral metadata concepts are the most portable parts. Astro collection configuration, schemas, loader choices, and reference mechanics are framework-specific and would require adaptation during migration. The content model should therefore avoid embedding Astro components, route assumptions, or generated identifiers into prose wherever practical.

A move to structured files could extract frontmatter and relationships while retaining Markdown bodies. A future CMS could import the same content if the provider supports the required fields and preserves evidence, visibility, language, and revision context. Returning from a provider to repository-local files is easier when no provider-only presentation logic is embedded.

Reconsider this direction if multiple nontechnical editors need independent access, repository review becomes a demonstrated publishing bottleneck, content must update independently of builds, or content volume makes local relationships unmanageable. Request-time content would also require reopening or superseding DEC-01, not merely changing this record.

# Decisions Explicitly Deferred

- Exact collection names and number of collections.
- Exact directories, paths, and public-source location.
- Final schema, field names, requiredness rules, enums, and TypeScript interfaces.
- Slug and identifier rules.
- Final routes and route-generation structure.
- URL language prefixes and localized URL behavior.
- Default site language.
- Navigation labels and language-switcher presentation.
- Final content taxonomy and archive organization.
- Styling, components, and content presentation.
- MDX integration or any other authoring integration.
- Syntax highlighting, diagram tooling, image tooling, and media hosting.
- Exact artifact file locations and transformation behavior.
- Search and filtering.
- Any CMS provider.
- Deployment provider.
- Package manager.
- Testing tools and continuous integration.
- Automated translation.
- AI content generation or publication workflow.

# Official Sources Consulted

- [Astro: Content collections](https://docs.astro.build/en/guides/content-collections/) — confirms the current Content Layer model, build-time and live collection distinction, local loaders for Markdown and structured formats, schemas for data-shape validation and type safety, reference metadata, retrieval APIs such as `getEntry()` and `getEntries()`, and static route generation. Current documented reference resolution can return `undefined` for an invalid target, so project-required referential integrity needs a separate explicit validation layer during the static build. The recommendation uses only build-time behavior.
- [Astro: Markdown in Astro](https://docs.astro.build/en/guides/markdown-content/) — confirms built-in Markdown support, frontmatter, content-collection querying, and the suitability of collections for related Markdown sharing a schema.
- [Astro: MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/) — confirms that MDX is a separate integration enabling JSX expressions, variables, and components in Markdown. This supports deferring it until embedded component behavior is justified.
- [Astro: Internationalization routing](https://docs.astro.build/en/guides/internationalization/) — confirms that Astro offers locale, fallback, link, and browser-language routing capabilities. These capabilities are not adopted here; final routing, default language, fallback, and redirect behavior remain deferred.
- [W3C Internationalization: Declaring language in HTML](https://www.w3.org/International/questions/qa-html-language-declarations) — supports declaring the document's primary language and marking meaningful language changes within content.

# Consequences of Decision

Approval establishes the direction needed to prepare later, separately authorized work for:

- A bounded implementation-compatible public content model.
- Representative Markdown entries and metadata prototypes using verified content.
- Build-time validation design for content states and relationships.
- A safe public/internal source boundary.
- Bilingual prototypes using Thai-only, English-only, mixed-language, and translated-sibling cases.
- Evidence and artifact reference prototypes.
- DEC-03 through DEC-05, foundation, navigation, and first-vertical decisions that need a stable content direction.

This approval does not authorize Astro scaffolding, content collection creation, schema or validation-code creation, package-manager selection, dependency installation, public content migration, MDX integration, CMS selection, routes, pages, public copy, or publication.

# Approval Record

Nattapong explicitly approved this decision through user confirmation:

> Use repository-local Astro build-time content collections through the current Content Layer API; use plain Markdown as the default long-form format with schema-validated structured metadata; keep public-ready content in a separate allowlisted source from internal `reference/` and `docs/` material; support one primary language per entry with optional separately authored translation siblings and valid mixed-language content; defer MDX and an external CMS until a verified need justifies a new decision.

The approved validation model treats structural schema validation, explicit referential-integrity validation, and project-specific semantic validation as separate responsibilities. Required broken relationships fail the static build; optional relationships may be absent only when the later approved content model permits that state. No approval date is recorded.

The approval closes the content-storage, authoring, internal/public-boundary, and bilingual-direction question only. It does not authorize implementation, migration, dependency selection, or publication and does not resolve any explicitly deferred decision.

# Open Questions

- Which representative verified entries should be used to test the first content model without prematurely defining the first release?
- Which recurring content families share enough structure to justify separate collections, and which should share a broader model?
- Which metadata is required for every public entry versus required only for particular content families?
- How should changes to shared facts be reviewed across translated siblings without creating a complex workflow?
- Which compact public records, if any, are better represented as structured data rather than Markdown?
- What evidence and asset references are public-ready after PRJ-01 and PRJ-02?
- What routes, URL language behavior, default site language, and navigation behavior should later be approved?
- What concrete content need, if any, would justify MDX rather than page-level composition and static artifact references?
