# FND-01 — Semantic Content-Foundation Scope

This record preserves the FND-01A semantic content-foundation comparison and records Nattapong’s FND-01B direction-level approval. It does not authorize a package manager, schema, implementation, or public content.

# Status

| Metadata | Value |
| --- | --- |
| Decision ID | FND-01 |
| Preparation stage | FND-01A completed |
| Approval stage | FND-01B completed |
| Status | Approved |
| Decision owner | Nattapong |
| Review basis date | 2026-07-23 |
| Approved content-model direction | M3 — Hybrid shared semantic contract |
| Approved family topology | About / Projects / Research / Learning |
| Approved bilingual direction | B2 — Stable translation-group relationship |
| Approved public-root direction | P1 — One dedicated allowlisted public-content root |
| Approved package-manager direction | PM3 — Defer selection until implementation preflight |
| Content-model direction approved | Yes |
| Collection-boundary direction approved | Yes |
| Bounded path direction approved | Yes |
| Package manager selected | No |
| Schema implementation authorized | No |
| Dependency installation authorized | No |
| Public-content creation authorized | No |
| Implementation authorized | No |
| Task-list update | Authorized only for this FND-01B closure |
| Commit | Authorized only for the decision record and Task List |

FND-01A prepared the Proposed comparison package. FND-01B records Nattapong’s explicit approval of the direction and bounded scope. Approval remains direction and scope preparation only: no collection, public root, schema, fixture, configuration, validation implementation, or package-manager choice now exists because of this decision.

# FND-01A Decision Questions History

FND-01A asked FND-01B to decide:

1. Whether the content model should be universal, fully separated, or hybrid.
2. Which content-family boundaries should govern later collections.
3. Which semantic responsibilities should be shared and which must remain family-specific.
4. How independently authored language siblings should relate.
5. How claims, evidence, sources, and limitations should be represented.
6. Whether to propose npm, pnpm, or a deferred package-manager decision for implementation preflight.
7. Whether the exact bounded implementation-file proposal and non-public fixture strategy are acceptable.

FND-01B answered these questions as recorded in the owner-answer section. The historical questions did not and do not authorize implementation by themselves.

# Authority and Inputs

This proposal uses only local sources and their recorded authority:

- `AGENTS.md` for operational, evidence, privacy, content, and completion rules.
- `reference/design-dna.md` for durable design principles and originality constraints.
- `docs/00-project-vision.md` through `docs/06-animation-spec.md` for identity, experience, visual, layout, component, content, and motion responsibilities.
- `docs/07-project-rules.md`, `docs/08-implementation-plan.md`, and `docs/09-task-list.md` for execution rules, sequence, dependencies, blockers, and current task state.
- `reference/decisions/DEC-01-stack-and-rendering.md` for Astro, static HTML by default, and separately justified local islands.
- `reference/decisions/DEC-02-content-storage-authoring-bilingual.md` for repository-local build-time content, Astro’s recorded Content Layer direction, plain Markdown by default, structured metadata, separate validation responsibilities, a dedicated public allowlist, one primary language per entry, and optional explicitly authored translation siblings.
- `reference/decisions/DEC-03-theme-and-asset-direction.md` for honest missing or unavailable states and evidence-oriented asset handling.
- `reference/decisions/DEC-04-testing-quality-and-supported-environments.md` for layered hybrid validation, omitted-check records, and Not applicable treatment for absent features.
- `reference/decisions/DEC-05-deployment-analytics-and-privacy-direction.md` for provider-neutral meaning, no initial analytics, no runtime secret for the static core, and no third parties by default.
- `reference/content/CON-02-representative-content-and-evidence.md` for eight internal stress cases, not final public copy.
- `reference/synthesis/personal-profile.md`, `reference/synthesis/project-inventory.md`, and `reference/synthesis/learning-inventory.md` for internal planning context whose unsupported or stale claims remain subordinate to stronger evidence.
- `reference/audits/PRJ-01-booking-api-evidence.md` and `reference/audits/PRJ-02-courtfit-evidence.md` for commit-scoped project claims, qualifications, limitations, and publication blockers.

No external documentation or current framework or package-manager information was accessed. Exact Astro API, loader, configuration, and path behavior not established by these local authorities remains **To be verified**.

# Current Repository and Content Baseline

The baseline is based on the tracked tree plus a bounded directory inspection. Empty directories are not treated as implementation, and documentation is not treated as source.

| Baseline item | Classification | Basis |
| --- | --- | --- |
| Astro implementation source | Not found | No tracked Astro implementation files |
| `src/` directory | Present | Directory scaffold exists; no tracked implementation source was found |
| Content configuration | Not found | No content configuration file was found |
| Content collection directories | Not found | No implemented content-collection directory was found |
| Public content source | Not found | Empty `public/` scaffold is not an authored public-content source |
| Internal content source | Present | `docs/` and `reference/` contain internal governance, evidence, and planning records |
| Package manifest | Not found | No manifest was found |
| Lockfile | Not found | No lockfile was found |
| Package-manager configuration | Not found | No manager-specific configuration was found |
| TypeScript configuration | Not found | No TypeScript configuration was found |
| Astro configuration | Not found | No Astro configuration was found |
| Validation helpers | Not found | No validation implementation was found |
| Content fixtures | Not found | CON-02 is an internal representative-content record, not executable fixtures |
| Test source | Not found | No test implementation was found |
| Scripts | Not found | No application or validation scripts were found |
| Public routes | Not found | No route implementation was found |
| Generated output | Not found | No generated application output was found |
| Astro and content-model direction | Documentation mention only | Approved decisions describe direction but do not constitute implementation |
| Current local package-manager availability | To be verified | No tool command was authorized or run |
| Feature-specific runtime validation | Not applicable at the current stage | The corresponding implementation is absent |

This baseline supports a decision-only task. It does not establish an executable Astro project.

# Non-Goals

FND-01A does not:

- Create a general publishing platform, CMS, external CMS, content API, database, request-time behavior, or content-management interface.
- Create speculative taxonomies, audience personas, public copy, public entries, fixtures, collections, schema code, validation code, or framework configuration.
- Select final routes, URL language strategy, navigation labels, the first vertical, a final public release set, or public artifact selection.
- Select MDX, a package manager, versions, a registry, workspace mode, dependencies, test tools, or commands.
- Create search, filtering, comments, authentication, personalization, feeds, analytics, routes, pages, layouts, components, CSS, assets, scripts, CI, or deployment configuration.
- Publish `docs/`, `reference/`, internal audits, representative content, profiles, inventories, or synthesis records.
- Claim that a schema validates, a build passes, a runtime works, or a deployment exists.

# Evaluation Criteria

Alternatives are evaluated qualitatively using:

- Fit with DEC-02 and static generation.
- Author clarity and one-maintainer maintenance cost.
- Separation of shared meaning from family-specific meaning.
- Prevention of unsupported claims and proximity of evidence and limitations.
- Thai, English, and mixed-language support, including optional translation siblings.
- Referential-integrity clarity and family-specific semantic validation.
- Honest missing and unavailable states.
- Internal/public separation, privacy, rights, and publication safety.
- Component-inference risk.
- Ease of adding a real content family without speculative taxonomy.
- Duplicate-field, duplicate-schema, and universal optional-field risks.
- Migration cost, reversibility, and suitability for all eight CON-02 cases.

The classifications used are **Strong fit**, **Viable with conditions**, **Weak under current evidence**, and **Deferred pending implementation**. They are not numeric scores.

# Content-Model Alternatives

## Alternative M1 — One universal collection with a content-type discriminator

M1 would define one shared schema and use `contentType` or an equivalent discriminator for About, projects, research, learning, notes, experiments, and coursework.

- **Fit:** Viable only for genuinely shared discovery metadata; weak for the complete semantic model.
- **Author simplicity:** One entry location and one query surface appear simple initially.
- **Cross-family querying:** Strong, because all entries share one collection.
- **Family boundaries:** Weak. A large optional-field surface would be needed to express unrelated responsibilities.
- **Validation:** Conditional rules would multiply around the discriminator, making family obligations harder to see and maintain.
- **Component inference:** High risk. Renderers could begin guessing meaning from optional-field presence or a generic page type.
- **Content integrity:** High risk that About behaves like a project and that coursework, experiments, and projects become variants of a universal page.
- **Migration and reversibility:** Easy to start, but later separation becomes costly once queries, references, and components rely on universal fields.

M1 is **Weak under current evidence** because CON-02 demonstrates materially different evidence, attribution, publication, and limitation duties.

## Alternative M2 — Separate collection for every content family

M2 would create distinct collections for About, Major Projects, Research Preparation, Learning Progress, Technical Notes, Experiments, and Coursework.

- **Family contracts:** Strong and explicit.
- **Shared metadata:** Stable identity, language, visibility, dates, review state, evidence references, and relationships would be repeated or composed into every collection.
- **Validation:** Family rules are clear, but common structural and referential validation could be duplicated.
- **Relationships:** Cross-collection and translation references would require a reliable shared ID registry.
- **Translation behavior:** Clear per family, but identical sibling rules could be repeated seven times.
- **Maintenance:** Seven small collections and repeated wiring are heavy for one maintainer at the current scale.
- **Adding a family:** Straightforward when a real semantic difference is proven, but encourages premature splitting.
- **Migration and reversibility:** Family separation is durable; consolidation later is possible but requires mapping duplicated metadata and queries.

M2 is **Viable with conditions**, especially if future volume and validation differences justify every boundary. It is presently more structure than the evidence requires.

## Alternative M3 — Hybrid shared semantic contract with bounded family-specific collections

M3 defines shared semantic responsibilities once and uses a small number of bounded collections for real differences. Family-specific validation owns claims that shared structure cannot prove.

- **Shared consistency:** Strong for identity, language, visibility, review, relationships, and evidence vocabulary.
- **Family clarity:** Strong when About, Projects, Research, and Learning keep explicit contracts.
- **Related learning families:** Learning Progress, Technical Note, Experiment, and Coursework may share a collection only if an explicit kind preserves their distinct obligations and forbidden implications.
- **About:** It is not forced to behave like a project.
- **Projects:** They do not expose unsupported coursework or learning fields.
- **Body and metadata:** Plain Markdown remains long-form authored content; bounded structured metadata carries identity, states, relationships, and evidence duties.
- **Querying and relationships:** Shared identity and relationship rules provide cross-family consistency without a universal page model.
- **Translation siblings:** One common language relationship can apply without requiring identical bodies or fields.
- **Maintenance:** Lower duplication than M2 and less optional-field sprawl than M1.
- **Migration:** Bounded collections can split later if an explicit learning kind develops distinct volume or behavior.
- **Risk:** Under-splitting can recreate M1 inside Learning; over-splitting can recreate M2.

M3 is a **Strong fit** with current local evidence. FND-01B supplies direction-level approval; implementation verification remains required later.

# Content-Model Comparison

| Criterion | M1 universal | M2 fully separate | M3 hybrid |
| --- | --- | --- | --- |
| Shared-field consistency | Strong initially | Viable through deliberate composition | Strong through one semantic contract |
| Family-specific clarity | Weak | Strong | Strong with bounded discriminators |
| Optional-field growth | High risk | Low | Controlled if family fields stay local |
| Duplicate schema risk | Low code duplication, high conditional duplication | High | Moderate and controllable |
| Referential-integrity complexity | One registry, simpler lookup | Many collection boundaries | One stable-ID registry across bounded families |
| Semantic-validation clarity | Weak conditional ownership | Strong but repeated | Strong and separately owned |
| Bilingual relationships | Simple storage, weak family nuance | Clear but repeated | Shared rule with family-aware resolution |
| Evidence/limitation support | Risks generic evidence fields | Strong per family | Strong shared vocabulary plus family obligations |
| Internal/public separation | Possible but not inherent | Possible but repeated | Clear through one allowlisted root |
| CON-02 coverage | Weak across dissimilar cases | Strong but over-partitioned | Strong with four bounded families and explicit learning kinds |
| Author burden | Low at first, high ambiguity later | High navigation and repetition | Moderate, explicit, and teachable |
| Component-inference risk | High | Low | Low if kind and family contracts stay explicit |
| One-maintainer maintenance | Degrades with optional sprawl | Heavy at current scale | Best balance under current evidence |
| Extensibility | Easy but semantically loose | Explicit but costly | Explicit additions after evidence |
| Reversibility | Costly after universal coupling | Moderate consolidation cost | Strongest bounded split/merge path |
| Main failure mode | One generic page with many optional fields | Seven tiny duplicated systems | Learning under-splitting or unjustified later splitting |

# Approved Content-Model Direction

**Approved direction: M3 — Hybrid shared semantic contract with bounded family-specific collections.**

The approved direction-level topology is:

- **About**
- **Projects**
- **Research**
- **Learning**, with only these explicit initial kinds:
  - Learning Progress
  - Technical Note
  - Experiment
  - Coursework

The topology approval does not create collections or finalize their exact names.

About is approved directionally as a **singleton-like authored entry within a bounded About collection**, not hard-coded page copy. A collection preserves language siblings, visibility, review, dates, and publication checks. A separately authored public record outside the content foundation would fragment validation and relationships. Hard-coded page copy would couple meaning to a route and make factual, language, privacy, and review state harder to inspect. This direction does not imply an Astro singleton API; exact framework behavior is **To be verified**.

The approved direction preserves shared meaning without a universal optional-field schema, explicit family differences, structured metadata plus Markdown, claim/evidence/limitation proximity, optional translated siblings, honest unavailable states, a dedicated public allowlist, static generation, and one-maintainer scope. It does not imply a universal page, card, component, publishing platform, or speculative taxonomy.

Main risks are an oversized shared contract, an overloaded Learning collection, duplicated validation between structure and semantics, and author confusion between maturity and review state. Reconsider M3 if real entries show irreducible learning-kind schemas, cross-family querying proves unnecessary, the About singleton cannot be expressed safely with the approved Astro direction, or maintenance evidence shows the bounded model is harder than explicit separation.

# Content-Family Boundaries

## About

Responsibility: public identity and current direction, carefully bounded education wording, interests, and an owner-approved public contact destination.

Must not imply employment, seniority, job availability, professional authority, verified specialization, or opportunity-seeking. Private identity or contact values must never be inferred from internal records.

## Major Project

Responsibility: project identity; role and contribution; verified capabilities; evidence; lifecycle status; maturity; limitations; and an audited revision when applicable.

Must not imply runtime correctness, security, production readiness, deployment, complete authorization, recommendation accuracy, or operational success without corresponding evidence. PRJ-01 and PRJ-02 qualifications remain revision-scoped.

## Research Preparation

Responsibility: exploration area, candidate question, explicit separation of source/interpretation/hypothesis, current decision state, and next investigation.

Must not imply completed research, results, a selected final topic, or validated conclusions when none exists.

## Learning Progress

Responsibility: starting point, exercise or guided context, mistakes, changed understanding, and current gaps.

Must not imply mastery, employment experience, a streak, completion percentage, or independent authorship when guidance was material.

## Technical Note

Responsibility: audience, scope, prerequisites, explanation, examples, caveats, sources, and review state.

Must not imply universal applicability, professional authority, or factual certainty beyond reviewed evidence.

## Experiment

Responsibility: question, setup, conditions, procedure, observation, result, interpretation, limitations, and non-conclusions.

Must not fabricate measurements, generalize beyond conditions, convert observations into proof, or hide missing artifacts.

## Coursework

Responsibility: academic context, constraints, individual or group role, guidance, result, learning outcome, rights, and publication readiness.

Must not present coursework as professional experience or a Major Project, erase group or instructional contribution, or publish restricted material.

# Shared Semantic Contract

The semantic responsibilities in this section are approved directionally. Their candidate classifications preserve deferred implementation requiredness; they are not final field names, syntax, or requiredness.

| Responsibility | Candidate classification | Direction-level boundary |
| --- | --- | --- |
| Stable identity | Shared required candidate | Internal relationship key independent of route and title |
| Human-readable slug | Shared required candidate | Route-facing candidate; route use remains deferred |
| Primary language | Shared required candidate | One primary language for every entry |
| Translation relationship | Shared optional candidate | Explicit relationship only; no inferred or automatic translation |
| Content family | Shared required candidate | Selects a bounded semantic contract |
| Classification | Family-required candidate | Expresses family meaning or approved Learning kind |
| Title | Shared required candidate | Authored, language-specific display identity |
| Summary | Shared required candidate | Bounded context, not marketing copy |
| Status | Family-required candidate | Lifecycle or availability meaning appropriate to family |
| Maturity | Family-required candidate | Nature/readiness, separate from lifecycle |
| Verification | Family-required candidate | Evidence strength; not truth by schema |
| Visibility | Shared required candidate | Internal/candidate/public-ready/withheld boundary |
| Relevant dates | Family-optional candidate | Present only when evidenced and meaningful |
| Review state | Shared required candidate | Editorial/publication workflow responsibility |
| Claims | Family-optional candidate | Required only where a family makes bounded factual claims |
| Evidence | Family-optional candidate | Must support identified claims within scope |
| Limitations | Family-optional candidate | Required when a claim needs qualification |
| Sources | Family-optional candidate | Authored references with review and publication boundaries |
| Relationships | Shared optional candidate | Stable-ID references; semantics remain explicit |
| Missing or unavailable state | Family-optional candidate | Honest reason/state without placeholder fabrication |
| Route path | Derived only | Later route generation; not semantic identity |
| Display labels | Derived only | Components may format known values, not invent meaning |
| Universal technology badges | Forbidden for the family | Forbidden as shared semantic responsibility |
| Final enum syntax | Deferred | Requires later implementation decisions and evidence |

# Family-Specific Field Responsibilities

The following family-specific responsibility direction is approved. These responsibilities must remain inside their bounded contract rather than becoming universal optional fields.

| Family | Candidate responsibilities | Why they remain local |
| --- | --- | --- |
| About | Education wording, interests, direction, contact-purpose approval | These are identity/publication concerns, not project or learning metadata |
| Major Project | Role, contribution, audited revision, capability claims, evidence scope, operational limitations | Only project claims need commit/runtime/deployment boundaries |
| Research Preparation | Candidate question, source/interpretation/hypothesis separation, decision state, next investigation | Research preparation has epistemic states unlike project maturity |
| Learning Progress | Starting point, guidance attribution, mistakes, changed understanding, gaps | Progress evidence must not become authority or mastery |
| Technical Note | Audience, prerequisites, examples, caveats, review state | Instructional usefulness and scope need note-specific review |
| Experiment | Setup, conditions, procedure, observations, result, interpretation, limitations, non-conclusions | Experimental claims require bounded conditions and non-generalization |
| Coursework | Academic context, constraints, individual/group contribution, guidance, rights, publication readiness | Rights and role boundaries are specific and publication-critical |

# Field Responsibility Matrix

Candidate requiredness below remains unapproved.

| Semantic purpose | Shared or family-specific | Candidate requiredness | Allowed families | Validation owner | May be derived? | Public-safety implication | CON-02 examples | Deferred implementation question |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Identity | Shared | Shared required candidate | All | V1 + V2 | No | Prevents title/path coupling | All eight | ID syntax |
| Slug | Shared | Shared required candidate | All | V1 + V2 | No | Must not expose private data | All eight | Scope of uniqueness |
| Title | Shared | Shared required candidate | All | V1 + V4 | No | Public wording needs review | All eight | Length and normalization |
| Summary | Shared | Shared required candidate | All | V1 + V4 | No | Must preserve qualifications | All eight | Bounded length |
| Language | Shared | Shared required candidate | All | V1 | No | Supports correct language behavior | All eight | Allowed language representation |
| Translation group or sibling | Shared | Shared optional candidate | All | V1 + V2 + V4 | No | Switch only to public-ready sibling | About pair | Group-key syntax |
| Family | Shared | Shared required candidate | All | V1 | No | Prevents generic rendering | All eight | Collection versus field representation |
| Classification | Family-specific | Family-required candidate | All by family | V1 + V3 | No | Prevents category inflation | Learning and project cases | Final kind values |
| Status | Family-specific | Family-required candidate | All | V1 + V3 + V4 | No | Must represent current lifecycle honestly | Project, research, coursework | Family-specific states |
| Maturity | Family-specific | Family-required candidate | Projects, Research, Learning | V1 + V3 + V4 | No | Prevents production/mastery claims | Both projects, research, learning | Final values |
| Verification | Family-specific | Family-required candidate | All where claims appear | V1 + V3 + V4 | No | Schema cannot assert truth | Projects and learning | Evidence-strength vocabulary |
| Visibility | Shared | Shared required candidate | All | V1 + V2 + V4 | No | Controls eligibility, not publication alone | All eight | Final review workflow |
| Created date | Shared | Shared optional candidate | All | V1 + V4 | No | Must not be invented | None guaranteed | Whether needed |
| Updated date | Shared | Shared optional candidate | All | V1 + V4 | No | Must reflect real update evidence | Audited projects may use revision instead | Whether source control may inform it |
| Reviewed date | Shared | Shared optional candidate | All | V1 + V4 | No | Public-ready records need accountable review | Project audits | Requiredness by review state |
| Role | Family-specific | Family-required candidate where a role claim is made | Projects, Coursework | V1 + V3 + V4 | No | Prevents ownership inflation | Both projects, coursework | Controlled wording versus prose |
| Contribution | Family-specific | Family-required candidate where contribution is claimed | Projects, Coursework | V1 + V3 + V4 | No | Distinguishes evidence from self-report | Both projects, coursework | Structure depth |
| Claims | Family-specific | Family-optional candidate; required when structured claims are used | Projects, Notes, Experiments, Research, About | V1 + V3 + V4 | No | Unsupported claims weaken, omit, or block | Projects, research, learning | Claim record granularity |
| Evidence | Family-specific | Family-optional candidate; required by claim policy | Projects, Research, Learning | V1 + V2 + V3 + V4 | No | Existence does not prove fit | Both project audits | Reference versus embedded record |
| Limitations | Family-specific | Family-required candidate where evidence has material limits | Projects, Research, Learning | V1 + V3 + V4 | No | Must stay near affected claims | Both projects and missing artifacts | Proximity representation |
| Sources | Family-specific | Family-optional candidate | Research, Notes, Projects, Learning | V1 + V2 + V4 | No | Rights, accuracy, and scope review | Research and guided learning | Internal/external source taxonomy |
| Related content | Shared | Shared optional candidate | All | V1 + V2 | No | No inference from tags/titles | Project-to-learning cases | Directionality |
| Review state | Shared | Shared required candidate | All | V1 + V4 | No | Public-ready requires human decision | All eight | Workflow values |
| Missing reason | Family-specific | Family-optional candidate | All | V1 + V3 + V4 | No | Must not leak private facts | Research, learning, coursework | Safe reason vocabulary |
| Unavailable reason | Family-specific | Family-optional candidate | All | V1 + V3 + V4 | No | Explains absence without fabrication | Coursework | Public/internal wording split |
| Archive state | Shared | Shared optional candidate | All | V1 + V2 + V4 | No | Retains historical truth | Potential future records | Supersession behavior |
| Audited revision | Family-specific | Family-required candidate for audit-bound project claims | Projects | V1 + V2 + V3 + V4 | No | Prevents scope drifting to later code | Booking API, CourtFit | Revision representation |
| Research question | Family-specific | Family-required candidate | Research | V1 + V3 + V4 | No | Must remain candidate when not selected | Research preparation | Syntax versus body |
| Guidance attribution | Family-specific | Family-required candidate when guided | Learning Progress, Coursework | V1 + V3 + V4 | No | Prevents independent-mastery inference | Rust learning, coursework | Attribution structure |
| Experiment non-conclusions | Family-specific | Family-required candidate | Experiment | V1 + V3 + V4 | No | Prevents broad generalization | Terminal workflow if classified experiment | Structured versus body |

# Identity, Slug, and Stable-Reference Direction

| Alternative | Renaming | Translation siblings | Relationships | Archive/route change | Author clarity | Migration |
| --- | --- | --- | --- | --- | --- | --- |
| File path as identity | Breaks or complicates references | Couples language to layout | Fragile across moves | Route and archive structure become identity | Simple initially | Costly after moves |
| Slug as identity | Editorial rename changes identity | Language-specific slugs complicate pairing | Route changes affect references | Archive and URL policy become coupled | Familiar but ambiguous | Requires alias/mapping later |
| Explicit stable ID plus independent slug | ID survives rename | Stable grouping independent of language slug | Clear stable references | Route and archive may change independently | One extra authored responsibility | Lowest long-term migration risk |

**Approved direction:** use an explicit stable internal ID as relationship identity and an independent human-readable slug as a route-facing candidate. A slug must not be the only permanent identity. Titles, filenames, and file paths must not be identity. Route selection, slug normalization, uniqueness scope, redirects, and language URL behavior remain deferred.

# Language and Translation-Sibling Alternatives

## B1 — Direct sibling reference

Each entry points to its translated sibling.

- Simple for an English/Thai pair.
- Reciprocal consistency must be checked when both sides point.
- More than two languages creates multiple references or chaining ambiguity.
- An absent sibling is naturally representable, but a rename must preserve the referenced stable ID.
- Author clarity is good for a pair, weaker for a group.

Classification: **Viable with conditions**.

## B2 — Shared translation-group key

Separately authored entries share a stable translation-group identifier.

- Optional siblings and more than two languages fit without changing entry shape.
- Group validation can prevent duplicate primary-language members and identify unresolved or orphan groups.
- Switch generation can resolve only eligible public-ready entries.
- Author clarity depends on meaningful stable group keys and validation output.
- A group does not imply equivalent coverage or translation parity.

Classification: **Strong fit**.

## B3 — Path or filename convention only

Translation relationships are inferred from folders or filenames.

- Low initial authoring overhead.
- Fragile under refactoring, slug changes, and route strategy changes.
- Missing siblings and mixed-language entries are less transparent.
- Validation behavior becomes implicit and path-coupled.

Classification: **Weak under current evidence**.

# Approved Bilingual Relationship Direction

**Approved direction: B2 — a stable translation-group relationship.**

- Every entry has one explicit primary language.
- Every language version is explicitly authored; no automatic translation is created.
- Translation siblings are optional; no equivalent entry is mandatory.
- Referential validation resolves eligible siblings through a stable translation group rather than path inference.
- A language switch is not offered when no public-ready sibling resolves.
- Thai, English, and mixed-language entries are valid. A mixed-language entry still declares one primary language.
- A sibling’s existence does not imply translation parity, equivalent claims, identical dates, equal evidence, equal limitations, or identical publication readiness.
- Route-language behavior remains deferred.

This approval does not establish field syntax, Astro behavior, or route-language strategy.

# Relationship Model

Approved relationship responsibilities:

- Translation siblings share a stable group and resolve to stable entry IDs.
- Related content uses explicit stable-ID references with named semantics.
- Project-to-learning relationships may express “learning informed project” or another approved meaning; a renderer must not infer the direction.
- Research-to-source relationships distinguish authored content from cited source material and do not convert a source into public content.
- Evidence and source references identify scope, type, and review boundary; they do not prove claims automatically.
- Superseded or archived entries retain stable identity and historical truth, with explicit replacement relationships only when known.
- Required references that are broken block applicable validation.
- Optional absent references remain absent; they do not generate placeholder content.
- Reciprocal relationships are required only when the relationship’s approved semantics require reciprocity.
- Components must not infer relationships from titles, tags, paths, filenames, adjacency, visual similarity, shared presentation, or a shared translation group alone.

This is a bounded content-reference model, not a graph database or general knowledge graph.

# Claims, Evidence, Sources, and Limitations

| Approach | Strength | Main risk | Current fit |
| --- | --- | --- | --- |
| Freeform prose only | Natural authoring and close narrative context | Claims and evidence scope are difficult to validate or query | Weak for audited projects |
| Fully structured claim/evidence records | Explicit linkage and machine checks | Heavy author burden; fragments long-form explanation | Weak under current one-maintainer evidence |
| Hybrid Markdown plus bounded structured records | Natural narrative plus explicit high-risk claim boundaries | Requires clear rules for what must be structured | Strong fit |

**Approved direction:** retain plain Markdown for long-form explanation and use bounded structured claim, evidence, source, and limitation records where family risk requires them. Structured claim records are not universally required; their use remains risk- and family-dependent.

Direction-level responsibilities are:

- A **claim** states one bounded assertion.
- **Claim status** distinguishes supported, qualified, self-reported, To be verified, or another later-approved evidence state.
- An **evidence reference** links the claim to a reviewed evidence record.
- **Evidence type** identifies what kind of support exists.
- **Evidence scope or revision** limits support to the inspected conditions or revision.
- **Verification state** records what was actually checked.
- A **limitation** stays close to the affected claim.
- A **source** identifies origin without automatically making it public-ready.
- A **review trigger** records what change or missing check requires renewed review.

Evidence existence does not prove every claim. A repository URL does not prove runtime behavior or deployment. When evidence is unavailable, claims must be omitted, weakened, marked To be verified, or blocked. Raw internal audit text must not be published wholesale. Project-specific semantic validation must preserve all PRJ-01 and PRJ-02 commit scopes, qualifications, privacy boundaries, and limitations.

# Visibility and Internal-Public Boundary

The approved visibility direction distinguishes:

- **Internal source record:** evidence, planning, governance, or editorial material not eligible for public loading.
- **Candidate public content:** authored for possible publication but not approved.
- **Public-ready content:** passed applicable factual, privacy, rights, and content review and explicitly approved.
- **Withheld/private content:** intentionally excluded; its reason must not disclose the private value.
- **Archived public content:** historically public content retained with its historical state and current archive meaning.

Boundary rules:

- `docs/` and `reference/` are internal and remain outside public loading.
- Public output may load only from the approved direction’s dedicated allowlisted root after that root is compatibly implemented and separately authorized.
- Broad globbing or recursive imports must not reach internal paths.
- File location alone never grants public-ready status.
- Factual, privacy, rights, and content approval remain required.
- A public Git repository does not make every related claim, artifact, email, screenshot, or internal record public-ready.
- Private values must not be copied into fixtures, validation output, errors, or reports.
- Public content must preserve evidence limits without exposing internal notes wholesale.

P1 is approved directionally: one dedicated allowlisted public-content root with bounded family subdirectories. No public-content root or entry is created by this record.

# Status, Maturity, Verification, and Review States

These are approved as separate semantic axes and must not collapse into one generic `status`.

## Status

Status describes current lifecycle or availability. Candidate meanings to evaluate include Active, In progress, Paused, Completed, Archived, and Unavailable. Family rules must determine which are coherent.

## Maturity

Maturity describes the nature or readiness of work. Candidate meanings to evaluate include Learning exercise, Educational project, Experiment, Functional-MVP candidate, Research preparation, Not selected, and Not implemented. These are not proof of runtime quality.

## Verification

Verification describes evidence strength. Candidate meanings to evaluate include User confirmed, Static source verified, Runtime verified, Deployment verified, Self-reported, and To be verified. One entry may have claim-specific verification rather than one universal value.

## Review state

Review state describes publication/editorial readiness. Candidate meanings to evaluate include Internal only, Candidate, Needs factual review, Needs privacy review, Needs rights review, Public-ready, and Withdrawn.

The candidate values are not final enums. Collapsing these axes would allow, for example, “Completed” to be mistaken for production maturity, source verification to be mistaken for public approval, or “Archived” to erase whether claims were ever verified.

# Missing, Unavailable, Archived, and Incomplete States

The explicit treatment of the following states is approved directionally; final enum syntax remains deferred:

- **Missing optional data:** an optional responsibility is absent; it is not an empty string.
- **Unknown:** the value is not known; it is not false.
- **To be verified:** a claim awaits an identified check.
- **Not implemented:** the feature or behavior does not exist.
- **Unavailable:** content or evidence cannot currently be supplied, with a safe reason and possible review trigger.
- **Private or withheld:** a value exists or may exist but is intentionally not public; the reason must not reveal it.
- **Rights-restricted:** publication rights are absent, unclear, or restricted.
- **Archived:** historical content is retained without implying current activity.
- **Incomplete:** required work or evidence is unfinished and must not be presented as complete.
- **Withdrawn:** a candidate or previously available entry is intentionally removed from publication eligibility.

Not applicable does not mean Passed. Unavailable content may retain a safe reason and review trigger. Archived content preserves historical truth. Components must not fabricate placeholders. When required evidence is unavailable, affected claims must be weakened, omitted, or blocked.

# Validation Responsibility Model

V1–V4 are approved as separate responsibilities. No validation implementation or result follows from this approval.

## V1 — Structural validation

Potential responsibilities:

- Shape and value types.
- Allowed semantic states.
- Primary-language presence.
- Required family discriminator and family metadata.
- Valid date representation when a date exists.
- Structurally expressible impossible combinations.

V1 does not establish factual truth, relationship resolution, public safety, or runtime behavior.

## V2 — Referential-integrity validation

Potential responsibilities:

- Unique stable IDs.
- Unique route-facing slugs within the later-approved scope.
- Translation-group and related-content resolution.
- Source and evidence reference resolution.
- Required reciprocal relationships where their semantics require them.
- No public reference to internal-only content.
- Applicable failure for required broken relationships.

V2 does not establish that a claim is true or that a source may be published.

## V3 — Family-specific semantic validation

Potential responsibilities:

- Project claims retain role, contribution, evidence scope, audited revision when applicable, and limitations.
- Research Preparation does not imply a selected or completed topic.
- Guided learning retains guidance attribution and current gaps.
- Coursework retains academic, contribution, rights, and publication context.
- Experiments retain conditions, limitations, and non-conclusions.
- About does not infer employment, seniority, availability, or professional authority.

V3 may require code later, cannot approve public wording, and this record creates none.

## V4 — Factual and publication review

Human/editorial responsibilities:

- Source accuracy and claim/evidence fit.
- Commit or revision scope.
- Privacy, redaction, rights, and attribution.
- Public wording and contact-purpose approval.
- Review date and actual public-ready decision.

V4 cannot be replaced by schema success, a clean build, a public repository, or generated copy. Schema or build success cannot establish publication readiness.

# Validation Responsibility Matrix

| Responsibility | Structural validation | Referential validation | Family semantic validation | Factual/publication review | Blocking direction | Evidence retained | Current executability | Deferred implementation detail |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Required metadata | Shape/presence | Not applicable | Family completeness | Meaning and wording | Block missing family-required data | Validation result and omission record | Deferred pending implementation | Schema syntax |
| Allowed states | Allowed value/combination | Not applicable | Family coherence | Current truth | Block impossible state | State and review basis | Deferred pending implementation | Final values |
| Unique IDs | Format/presence | Repository-wide uniqueness | Not applicable | Ownership if sensitive | Block duplicates | Conflicting IDs without private values | Deferred pending implementation | Registry scope |
| Slug uniqueness | Format/presence | Approved-scope uniqueness | Not applicable | Public safety | Block collisions | Conflicting paths | Deferred pending implementation | Route scope |
| Language | Primary language required | Group language uniqueness | Mixed-language semantics | Authored-language review | Block missing primary language | Declared language | Deferred pending implementation | Representation |
| Translation siblings | Optional group shape | Resolve eligible siblings | No parity inference | Translation/public-ready review | Required rules block; optional absence allowed | Group and resolution result | Deferred pending implementation | Group-key syntax |
| Related content | Reference shape | Stable-ID resolution | Relationship meaning | Public relevance | Broken required reference blocks | Relationship type and target | Deferred pending implementation | Directionality |
| Project audit revision | Revision shape | Evidence-record resolution | Claims bounded to revision | Audit suitability | Block audit-dependent claim without scope | Revision and audit reference | Deferred pending implementation | Revision format |
| Claims | Record shape when used | Evidence linkage | Family claim obligations | Truth and wording | Unsupported required claim blocks or weakens | Claim, state, scope | Deferred pending implementation | Granularity |
| Evidence | Evidence-reference shape | Target resolution | Fit to family obligation | Evidence sufficiency | Broken required evidence blocks | Type, source, conditions | Deferred pending implementation | Evidence registry |
| Sources | Source-reference shape | Target resolution when internal | Source role by family | Accuracy, rights, attribution | Required source failure blocks | Citation metadata, not private value | Deferred pending implementation | Source types |
| Limitations | Shape/presence when required | Claim linkage | Required proximity and scope | Adequacy | Missing material limitation blocks | Limitation and affected claim | Deferred pending implementation | Link syntax |
| Role/contribution | Shape when claimed | Evidence linkage if used | Project/coursework obligation | Owner confirmation and wording | Block unsupported ownership claim | Evidence state and qualification | Deferred pending implementation | Structured depth |
| Research state | Allowed candidate state | Source links | No selected/completed inference | Current owner decision | Block contradictory state | Decision state and review | Deferred pending implementation | Final values |
| Guided-learning attribution | Attribution shape | Source/guidance resolution | Required when guided | Rights and accuracy | Block independent-work implication | Guidance type and source | Deferred pending implementation | Attribution model |
| Coursework rights | Rights-state presence | Artifact/source resolution | Academic/publication context | Rights owner decision | Block public-ready without rights | Review state, not private material | Deferred pending implementation | Rights vocabulary |
| Privacy | No prohibited value shape where detectable | No public-to-private reference | Family-sensitive rules | Human privacy/redaction review | Block public-ready on unresolved risk | Review outcome and safe reason | Partly human only | Pattern checks and workflow |
| Public readiness | Required review-state shape | All public references resolve safely | Family obligations complete | Explicit owner/editor decision | Block publication until all applicable checks | Review record and omissions | Human decision required | Workflow |
| Missing/unavailable state | Valid explicit state/reason | Optional missing target rules | Family effect on claims | Safe wording | Block when required meaning is lost | State, safe reason, trigger | Deferred pending implementation | Reason representation |
| Archive state | Valid state | Supersession resolution | Historical family truth | Archive/publication review | Block contradictory current claim | Prior/current state and review | Deferred pending implementation | Redirect behavior |

No row is currently executable as project validation because no manifest, schema, loader, validation code, fixture, or approved command exists. “Not applicable” is used only where a responsibility truly does not belong to that layer.

# Representative CON-02 Stress Cases

All eight records below are approved as pressure sources for later non-public, synthetic, or redacted fixtures. Later fixtures must remain outside public loaders, avoid complete internal records and private values, avoid becoming public copy, exercise only applicable V1–V3 responsibilities, and never constitute factual or V4 publication proof. No fixture is created by this decision.

| CON-02 ID | Content family | Language mode | Main schema pressure | Relationship pressure | Evidence pressure | Missing/unavailable pressure | Privacy/publication pressure | Family-specific validation need | Model must not infer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `about-direction-en` | About | English | Identity/direction without professional title | Possible optional language group | Owner-confirmed facts versus editorial direction | No artifact | Contact and identity approval | No employment, seniority, authority, or availability implication | Final public copy or professional status |
| `about-direction-th` | About | Thai | Independent Thai authorship | Possible group with English entry without parity | Owner confirmation | Withheld private identity value | Strong identity/privacy review | No inferred equivalence or hidden private value | That it is a direct translation |
| `booking-api-en` | Major Project | English | Role, maturity, audited revision, qualified capabilities | Project-to-learning/evidence references | Commit-scoped static audit only | Runtime, deployment, cache, concurrency, and security evidence absent | Historical sensitive-path blocker | Preserve all PRJ-01 limitations and ownership scope | Build, tests, security, deployment, or production readiness |
| `courtfit-th` | Major Project | Thai | Provider-neutral project meaning plus technical boundaries | Evidence and related learning | Commit-scoped static audit only | Runtime, provider, accessibility, test, and deployment evidence absent | Key-flow, conversation, and author-metadata review | Preserve server key flow, buffered response, no commerce, and all PRJ-02 limits | Client-only keys, secure privacy, incremental display, verified recommendations |
| `research-preparation-mixed` | Research Preparation | Mixed; one primary language | Source/interpretation/hypothesis and decision state | Research-to-source references | Sources and eventual investigation not yet reviewed | No final topic, result, hardware, or method evidence | Source rights and wording | Preserve “no final topic selected” and next investigation | Completed research or a selected topic |
| `rust-http-threadpool-en` | Learning Progress | English | Guidance, mistakes, changed understanding, gaps | Guidance/source and related project | Book-guided context; implementation not reviewed | Source excerpts and runtime checks missing | Attribution and excerpt rights | Retain guided-learning attribution | Mastery or independent original design |
| `linux-terminal-workflow-mixed` | Learning Progress, Note, or Experiment candidate | Mixed; one primary language | Boundary test among learning kinds | Assisted troubleshooting and possible related note | Self-report plus unverified configuration/artifacts | Reproduction conditions and artifacts missing | Avoid exposing system/private details | Preserve assisted context and avoid fabricated reproducibility | Professional operations expertise or a completed experiment |
| `coursework-selection-unavailable` | Coursework | Language remains entry-specific | Honest unavailable state and academic context | Possible course/source references only if approved | No selected item or reviewed artifact | Role, rights, artifact, and publication readiness unavailable | Rights and group privacy blockers | Require academic/role/rights context before publication | A Major Project, professional work, or public-ready coursework |

Together the cases test independently authored translation siblings; English, Thai, and mixed-language entries; commit-scoped project evidence; runtime and deployment limitations; guided learning; assisted troubleshooting; absence of a final research topic; honest unavailable coursework; missing artifacts; and privacy/publication blockers.

# Collection and Path Alternatives

## P1 — One dedicated allowlisted public-content root with family subdirectories

One content-configuration entry point would load only one approved root, with bounded family directories and shared/family schema responsibilities. Internal fixtures remain outside every loader.

- Public/internal safety: Strong if the loader cannot traverse outside the allowlist.
- Author clarity: Strong through one public boundary and explicit families.
- Family boundaries: Strong without spreading roots across the repository.
- Loader scope: Small, but exact Astro behavior is To be verified.
- Migration: Moderate and reversible.

Classification: **Strong fit** and the approved P1 direction; exact API and file compatibility remain deferred.

## P2 — Separate top-level public roots for every family

- Isolation: Strong per family.
- Configuration: Repeated loader and path responsibilities.
- Repository shape: Broad for the current scale.
- Public/internal clarity: Clear if every root is explicit.
- Maintenance: Higher for one maintainer.

Classification: **Viable with conditions**, but presently over-separated.

## P3 — Content distributed near pages or features

- Co-location: Convenient for a single route.
- Route coupling: High; page implementation begins to define content semantics.
- Reuse and translation: Cross-page relationships and siblings become harder to resolve.
- Public/internal risk: Multiple loaders or broad imports may blur the allowlist.
- Migration: Costly after routes become identity.

Classification: **Weak under current evidence**.

# Approved Implementation Path Direction

**Approved direction: P1**, with one dedicated allowlisted public-content root and family subdirectories. No root or directory is created now. Exact Astro loader/configuration behavior is **To be verified** locally during a separately authorized implementation preflight.

The following literal paths are approved as bounded direction for later compatibility review and separately authorized implementation:

| Approved direction-level path | Purpose and why needed | Later action | Inputs | Public-output status | Validation responsibility | Package/tooling effect | Must not contain |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `src/content.config.ts` | One Astro content-configuration entry point and explicit allowlist boundary | Create later | Approved collections, root, and Astro API | Configuration only; not public content | Wires V1; loader boundary | Astro/package versions affect exact API | Entries, public copy, internal-document globbing, business semantics |
| `src/content/schema/shared.ts` | Shared semantic responsibilities composed by families | Create later | Approved shared contract | Not public output | V1 shared structure | Schema API/version affects syntax | Family-only optional-field sprawl, routes, components |
| `src/content/schema/families.ts` | Bounded About, Projects, Research, and Learning responsibilities | Create later; split only if evidence requires | Approved topology and field duties | Not public output | V1 family structure | Schema API/version affects syntax | Universal page model, rendering logic, speculative families |
| `src/content/validation/referential-integrity.ts` | Stable-ID, slug-scope, translation, relationship, evidence, and source resolution | Create later | Parsed entries and approved reference semantics | Not public output | V2 | Runtime/tool invocation remains to be selected | Factual truth decisions, private values, route rendering |
| `src/content/validation/family-semantics.ts` | Family-specific claim, state, attribution, rights, and limitation checks | Create later | Parsed entries, approved family rules, PRJ boundaries | Not public output | V3 | Invocation remains to be selected | Public-copy generation, V4 approval, generic utilities |
| `content/public/about/` | Direction-level allowlisted About family boundary | Create later only under separate implementation authorization; no entry without separate content authorization | Approved public-root and About direction | Future public loader input | V1–V3 input; V4 gate | Loader API affects wiring | Internal audits, fixtures, private contact values |
| `content/public/projects/` | Direction-level allowlisted Projects boundary | Same authorization condition | Approved project boundary | Future public loader input | V1–V3 input; V4 gate | Loader API affects wiring | Audit reports wholesale, unreviewed claims |
| `content/public/research/` | Direction-level allowlisted Research boundary | Same authorization condition | Approved research boundary | Future public loader input | V1–V3 input; V4 gate | Loader API affects wiring | Internal notes, invented findings |
| `content/public/learning/` | Direction-level allowlisted Learning boundary | Same authorization condition | Approved learning kinds | Future public loader input | V1–V3 input; V4 gate | Loader API affects wiring | Generic uncategorized posts, professional claims |
| `fixtures/content/fnd-01/` | Non-public fixtures derived minimally from CON-02 pressures | Create later only with exact fixture authorization | Approved synthetic/redacted cases, never copied private values | Excluded from every public loader and build output | Exercises V1–V3; not V4 truth proof | Test/validation tooling affects file syntax | Public copy, full internal records, secrets, personal data |

A narrowly scoped validation entry point is deliberately not approved as an exact path until package manager, invocation model, and approved validation commands exist. It must not be added silently. If one becomes necessary, a later task must authorize its exact path separately.

The approved paths are not created by this decision. A discovered Astro/API or path incompatibility requires stopping and owner review; paths must not be silently renamed, relocated, combined, or expanded. Public directories receive no entries without separate content authorization. The later task must not add routes, pages, layouts, components, CSS, assets, deployment configuration, CI, public entries, general utilities, or unrelated cleanup. The source and fixture paths above are small enough for one bounded implementation only after package, API, root, and command decisions are explicit.

# Package-Manager Alternatives

## PM1 — npm

- Bootstrap simplicity: Directionally conventional for a minimal Node-based scaffold.
- Availability: Current local availability is **To be verified**; no command was run.
- Lockfile: Would require its manager-specific lockfile only after approval.
- Maintenance: Familiar single-manager responsibility may suit one maintainer.
- Reproducibility: Depends on an approved manifest, lockfile, versions, and commands.
- Astro fit: **Deferred pending implementation** because no local executable evidence was gathered.

## PM2 — pnpm

- Availability: Requires a separately available tool; current local availability is **To be verified**.
- Lockfile: Would require its manager-specific lockfile only after approval.
- Dependency use: Directionally stricter dependency-use behavior may expose undeclared assumptions, but exact behavior is not established here.
- Maintenance and learning: Adds an explicit tool choice for one maintainer.
- Reproducibility: Depends on approved manifest, lockfile, versions, and commands.
- Astro fit: **Deferred pending implementation**.

## PM3 — Defer package-manager selection until the implementation preflight

- Avoids claiming a repository convention or installed tool that does not exist in current evidence.
- Delays reproducible scaffold, manifest, lockfile, and command decisions.
- Kept FND-01A executable as a decision task while making implementation not ready.
- Requires a separate explicit owner choice before any manifest creation or installation.

Classification: **Strong fit for the present decision-only stage**.

# Package-Manager Comparison

| Criterion | PM1 npm | PM2 pnpm | PM3 defer |
| --- | --- | --- | --- |
| Current repository convention | Not found | Not found | Accurately preserves absence |
| Current local evidence | To be verified | To be verified | No availability assumption |
| Bootstrap friction | Directionally low | Separate availability requirement | Deferred |
| Lockfile responsibility | Manager-specific after approval | Manager-specific after approval | No lockfile until choice |
| Reproducibility | Viable after approved lockfile | Viable after approved lockfile | Delayed |
| Astro implementation fit | Deferred pending implementation | Deferred pending implementation | Requires later comparison |
| One-maintainer cost | Directionally modest | Tool-specific maintenance/learning | Decision cost moved to preflight |
| Learning cost | Directionally lower if already familiar; not evidenced | Potentially higher; not evidenced | No immediate tool learning |
| Migration cost | Non-zero if changed later | Non-zero if changed later | Avoids premature migration |
| Risk of unsupported assumptions | Medium | Medium to high without availability evidence | Lowest now |
| Readiness for FND-01 implementation | Not ready without evidence/approval | Not ready without evidence/approval | Explicitly not ready until preflight |

# Approved Package-Manager Direction

**Approved direction: PM3 — defer package-manager selection until the implementation preflight.**

PM3 best fits the minimal first decision stage because the repository has no manifest, lockfile, manager configuration, or authorized tool-availability check. Before implementation, local evidence must establish the owner-approved manager’s availability and the later task must specify exact commands, version/resolution policy, manifest scope, dependency set, and validation commands.

Only after approval would the selected manager’s own lockfile be expected; its exact filename and contents remain deferred. If the approved command or tool is unavailable, implementation must stop and report rather than switch managers, create a different lockfile, or improvise installation. A different manager must never be used silently because that would change repository convention and reproducibility.

PM3 is approved as a decision to defer selection. No package manager is selected. PM1 and PM2 remain alternatives for a later preflight, which must provide local evidence. Implementation cannot begin until an exact manager and exact commands are separately approved. PM3 is not permission to execute any manager.

# Implementation Task Boundary

FND-01B approved direction for:

- Content-model direction.
- Collection boundaries.
- Field-responsibility direction.
- Language-relationship direction.
- Validation-responsibility model.
- Dedicated public-allowlist direction.
- Package-manager deferral direction.
- Exact bounded implementation paths.
- This FND-01B closure’s Task List update and decision commit, limited to the two authorized records.

This FND-01B closure does not authorize implementation.

A later separately authorized FND-01 implementation task must specify:

- Exact package manager.
- Exact authorized paths.
- Exact scaffold and installation commands.
- Dependency versions or resolution policy.
- Exact fixture scope.
- Exact validation commands and checks.
- Commit authorization.
- Stop conditions.

# Approved Consequences

- **FND-01 implementation:** Receives direction for only the approved content configuration, semantic schemas, validation responsibilities, and non-public fixtures under a separately authorized scope.
- **FND-02:** Receives explicit semantic states and tokens to support, without deciding content meaning itself.
- **NAV-01:** May later consume approved titles, language availability, visibility, and relationships; it must not infer missing siblings or routes.
- **VRT-01 and VRT-02:** Gain concrete family and state pressures for vertical-slice content architecture and foundation validation.
- **Shared components:** Must consume explicit semantic states rather than infer them from optional fields or presentation.
- **Project experiences:** Must retain role, contribution, revision, evidence, and limitations.
- **Research and learning experiences:** Must preserve epistemic state, guidance, conditions, gaps, rights, and non-conclusions by family.
- **Responsive/bilingual validation:** Must exercise Thai, English, mixed-language, long metadata, missing siblings, and unavailable states.
- **Privacy/publication review:** Remains a human gate; schema success cannot publish content.

No downstream task is activated by this record.

# Deferred Decisions

The approved direction does not resolve:

- Final field names, schema syntax, requiredness, and exact enum values.
- Exact collection names and whether any Learning kind later deserves a separate collection.
- Exact Astro loader/configuration API, exact loader behavior, exact file compatibility, and whether the approved direction-level paths match the eventual approved Astro version.
- Package-manager selection, version, registry, workspace mode, commands, and availability.
- Astro version, dependency versions, manifest contents, lockfile, scripts, and validation-tool implementation.
- Test framework and exact test or validation commands.
- Route paths, language URL strategy, redirects, and slug normalization.
- Navigation labels, final public entries, final public wording, and public artifact selection.
- First vertical, components, layouts, styling, and deployment.

The literal paths are approved as bounded direction only. Their implementation compatibility, creation, contents, and use remain deferred to an authorized preflight and implementation task.

# FND-01B Owner Answer Record

1. **Content model — M3.** Shared semantics and bounded family contracts are approved; universal optional-field and generic page/card models remain prohibited.
2. **Family boundary — About / Projects / Research / Learning with explicit Learning kinds.** This balances current semantic differences and one-maintainer scope; exact collection names remain deferred.
3. **Shared semantic contract — Approved as proposed, with implementation details deferred.** Later schemas may compose the approved responsibilities without turning candidate requiredness into final requiredness.
4. **Bilingual relationship — B2 stable translation group.** Optional independently authored siblings resolve explicitly; route-language behavior remains deferred.
5. **Claims/evidence — Hybrid Markdown and bounded structured records.** Readable long-form content is preserved while family-risk claims remain inspectable.
6. **Package manager — PM3 defer to implementation preflight.** Deferral is approved; no manager is selected, and implementation remains blocked.
7. **Implementation boundary — Approved bounded path direction and non-public fixture strategy.** A later task may cite the paths but cannot create or change them without compatibility review and separate authorization.

# Approval and Implementation Boundary

- FND-01 direction and scope are Approved.
- FND-01A and FND-01B are complete.
- FND-01 implementation remains Blocked.
- No package manager is selected.
- No implementation file exists because of this decision.
- No manifest, lockfile, dependency, source, configuration, schema, validation code, fixture, entry, route, page, component, build, or test is authorized.
- A separate implementation preflight is required.
- A separate implementation authorization is required after the preflight.

# Validation Record

Preparation validation is limited to Markdown and repository inspection:

- Required local authorities and evidence records were read.
- The repository, branch, required history, clean initial working tree, and absent output path were confirmed before creation.
- FND-01A prepared the Proposed package and preserved its comparison history.
- Nattapong explicitly approved all fourteen FND-01B owner directions.
- M1, M2, and M3 remain preserved; M3 is Approved.
- B1, B2, and B3 remain preserved; B2 is Approved.
- P1, P2, and P3 remain preserved; P1 is Approved.
- PM1, PM2, and PM3 remain preserved; PM3 deferral is Approved.
- About, Major Project, Research Preparation, Learning Progress, Technical Note, Experiment, and Coursework are covered.
- Shared and family-specific responsibilities are separated.
- Identity/slug, bilingual, relationship, evidence, visibility, state, and missing/unavailable alternatives are recorded without final schema syntax.
- V1 structural, V2 referential, V3 family-semantic, and V4 factual/publication responsibilities are distinct.
- All eight CON-02 IDs are included without copying complete representative text.
- The public allowlist excludes wholesale `docs/` and `reference/` loading.
- The non-public synthetic/redacted fixture direction is Approved; no fixture was created and it does not establish V4 proof.
- The literal bounded paths are Approved as direction only; no implementation compatibility is claimed.
- No package manager was selected or executed.
- No implementation check was run, and no validation result is described as Passed.
- No private value or public copy was added.
- Only the decision record and Task List were authorized for FND-01B closure.
- No runtime, framework, package-manager, build, lint, type, test, browser, deployment, remote, or network check is represented as successful.
- Feature checks that cannot apply to an absent implementation remain Not applicable, not Passed.

FND-01A’s original diff, Markdown, heading, table, status, alternative, representative-ID, deferred-choice, sensitive-pattern, and changed-path history remains part of its completion record. FND-01B closure validation is recorded in its commit and completion report; neither validation history proves implementation behavior.
