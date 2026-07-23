# DEC-04 — Testing, Quality, and Supported-Environment Direction

# Status

- **Decision ID:** DEC-04
- **Preparation stage:** DEC-04A completed
- **Approval stage:** DEC-04B completed
- **Status:** Approved
- **Decision owner:** Nattapong
- **Review basis date:** 2026-07-23
- **Approved testing approach:** Alternative C — Layered hybrid validation
- **Approved supported-environment direction:** E3 — Tiered capability-based support
- **Implementation authorized:** No
- **Tool or dependency selection authorized:** No
- **Configuration or CI creation authorized:** No
- **Check execution authorized:** No
- **Public-content, release, or deployment authorization:** No
- **Task-list update:** Authorized only for this DEC-04B closure

DEC-04A prepared the Proposed comparison and recommendation package. DEC-04B records Nattapong's explicit approval of the direction-level testing, quality-gate, omission, and supported-environment policy. Approval does not select or authorize a tool, package, command, configuration, environment matrix, threshold, executable check, implementation, release, or deployment, and it is not evidence that an application check has run or passed.

# Decision Questions

1. Which testing approach provides useful confidence without creating speculative infrastructure before implementation exists?
2. Which responsibilities belong to deterministic checks, manual review, conditional feature checks, release review, and post-deployment verification?
3. Which approved deterministic checks should run locally and later in CI?
4. How should omitted, failed, flaky, unavailable, and not-applicable checks be classified and reported?
5. Which capability classes should define supported environments before exact browser, device, and assistive-technology combinations are selected?
6. Which findings should block a task, scope expansion, release, or publication?
7. How can the policy stay proportionate and replaceable for one maintainer?

# Authority and Inputs

- `AGENTS.md` governs task scope, evidence, validation, privacy, completion reporting, and the rule that omitted checks and their consequences remain visible.
- `reference/design-dna.md` and `docs/00-project-vision.md` govern evidence-led decisions, sustained reading, originality, accessibility, performance, responsive meaning, and one-maintainer durability.
- `docs/01-design-spec.md` through `docs/06-animation-spec.md` govern semantic structure, direct entry, real-content reading, responsive transformations, interaction, focus, technical evidence, states, reduced motion, static alternatives, and acceptance.
- `docs/07-project-rules.md`, `docs/08-implementation-plan.md`, and `docs/09-task-list.md` govern testing applicability, review, release gates, task dependencies, unresolved tools, and honest omission reporting.
- DEC-01 approves Astro, complete static HTML by default, optional separately justified local islands, static fallbacks, and no default request-time server.
- DEC-02 approves repository-local build-time content, plain Markdown direction, structured metadata, separate structural/referential/semantic validation responsibilities, public/internal separation, and optional bilingual siblings.
- DEC-03 approves one light-first shared foundation, bounded contrasting semantic technical surfaces, deferred selectable themes, optional reviewed screenshots, lawful reviewed local assets where justified, and honest unavailable states.
- CON-02 supplies eight representative English, Thai, mixed-language, evidence-heavy, sensitive, missing, and unavailable stress cases.
- PRJ-01 and PRJ-02 are commit-scoped evidence showing that source, configuration, workflows, scripts, and test files do not establish build, runtime, deployment, provider, privacy, or passing-test results.

No external source, repository, deployment, provider, browser, or application was accessed. Missing implementation evidence remains missing.

# Current Quality-Tooling Baseline

Static inspection of the local tree found 40 tracked files, all serving documentation, governance, decisions, synthesis, audits, representative content, inspiration analysis, or repository administration. The classifications below describe presence only.

| Baseline item | Classification | Static evidence and qualification |
| --- | --- | --- |
| Implementation source | Not found | No tracked application or library source path exists |
| Package manifest | Not found | No tracked package manifest exists |
| Lockfile | Not found | No tracked dependency lockfile exists |
| Package-manager configuration | Not found | No tracked package-manager configuration exists |
| Build configuration | Not found | No tracked Astro or other build configuration exists |
| Test configuration | Not found | No tracked test-runner configuration exists |
| Test source | Not found | No tracked unit, component, integration, browser, or end-to-end test source exists |
| Lint configuration | Not found | No tracked lint configuration exists |
| Type-check configuration | Not found | No tracked type-check configuration exists |
| Formatting configuration | Not found | No tracked formatter configuration exists |
| Browser-test configuration | Not found | No tracked browser-automation configuration exists |
| Accessibility-test configuration | Not found | No tracked accessibility-scanner configuration exists |
| CI workflow | Not found | No tracked CI workflow exists |
| Deployment configuration | Not found | No tracked deployment configuration exists |
| Build output | Not found | No local or tracked generated site output was found |
| Astro/static-build direction | Documentation mention only | DEC-01 approves the future direction; implementation is absent |
| Content validation responsibilities | Documentation mention only | DEC-02 separates structural, referential, and semantic responsibilities; no schema or check exists |
| Testing, review, and release requirements | Documentation mention only | Governing specifications and task records define future responsibilities; no passing result exists |

At the current planning stage, executing application checks is **Not applicable** because the application, manifest, configuration, and commands do not exist. Tooling, commands, generated output, and execution results remain **To be verified** after separately authorized implementation.

# Current Representative Risks

| CON-02 stress case | Current textual risk | Future visual, interaction, or runtime risk |
| --- | --- | --- |
| `about-direction-en` | Long English prose, restrained identity claims, private/public boundaries | Reading measure, heading hierarchy, direct entry, zoom, reflow, and focus remain untested |
| `about-direction-th` | Long Thai prose with English institutional and technical terms; not an approved translation | Thai glyphs, line rhythm, fallback behavior, language metadata, zoom, and device rendering remain untested |
| `booking-api-en` | Dense status, maturity, limitations, commit-scoped claims, and sensitive history blocker | Code, routes, tables, diagrams, links, runtime evidence, screenshots, and privacy-reviewed artifacts remain conditional |
| `courtfit-th` | Thai/English technical terms, browser/server/provider privacy flow, runtime qualifications | Technical surfaces, wide flow diagrams, absent screenshots, provider behavior, responsive/accessibility behavior, and operational privacy remain unverified |
| `research-preparation-mixed` | Mixed terminology, unknowns, To be verified states, and no-final-topic requirement | Papers, figures, comparison tables, hardware evidence, and research results are missing |
| `rust-http-threadpool-en` | Guided-work attribution and supporting-evidence classification | Code overflow, exact excerpts, tests, reproducibility, and public-ready evidence are unreviewed |
| `linux-terminal-workflow-mixed` | Mixed tool names and assisted troubleshooting attribution | Terminal overflow, sanitized configuration, environment context, reproducibility, and screenshots remain conditional |
| `coursework-selection-unavailable` | Honest unavailable state with optional and missing fields | Missing-artifact presentation, rights context, recovery path, and screen-reader comprehension remain untested |

Cross-cutting risks include dense evidence/status/limitation metadata; optional bilingual siblings; required and optional relationships; sensitive or private artifact blockers; code and terminal overflow; wide tables and diagrams; missing screenshots; broken media; direct-entry routes; static core behavior without JavaScript; future local islands; technical surfaces against the approved light-first page; keyboard, focus, touch, zoom, reflow, orientation, virtual-keyboard, and reduced-motion behavior; and privacy, secrets, rights, attribution, and publication review.

The present evidence supports textual and policy analysis only. It does not establish rendered reading quality, generated output, browser behavior, interaction correctness, accessibility, responsive behavior, performance, privacy safety, or release readiness.

# Non-Goals

DEC-04A does not:

- Select a test framework, unit-test library, integration-test library, browser-automation library, accessibility scanner, link checker, formatter, linter, type checker, visual-regression system, coverage service, or performance tool.
- Select a CI provider, deployment provider, package manager, exact command, script, workflow, or configuration path.
- Select exact browser names or versions, device models, operating-system versions, assistive-technology combinations, or support duration.
- Set coverage percentages, numeric performance budgets, retry counts, or other numeric quality thresholds.
- Claim accessibility conformance, responsive correctness, browser support, performance, privacy, security, or release readiness.
- Define implementation structure, manifests, lockfiles, source, tests, configuration, public content, or deployment.
- Run a build, check, test, formatter, linter, type checker, browser, scanner, server, or deployment.
- Approve any recommendation or release.

# Quality Principles

1. **Evidence before confidence.**
2. **Presence is not success:** A tool, script, test, workflow, or configuration does not prove a passing check.
3. **Automation and manual review differ:** Each covers responsibilities the other cannot replace.
4. **Early deterministic failure:** Structural failures should be detected as early as practical once matching implementation exists.
5. **Human judgment remains necessary:** Reading, interaction, accessibility, responsive composition, evidence truthfulness, rights, and privacy context require review.
6. **Applicability follows scope:** A check applies only when its requirement, content, artifact, or feature is in the authorized scope.
7. **No fake tests:** An absent optional feature does not require speculative coverage.
8. **No silent pass:** A missing required check is reported with reason and consequence.
9. **Static core:** Essential content and navigation must be assessable without optional JavaScript.
10. **Representative content:** Ideal short English filler is insufficient.
11. **Separate validity from truth:** Content structure does not verify factual claims.
12. **Build is one layer:** Build success does not prove runtime, accessibility, responsive, privacy, performance, or publication quality.
13. **Proportionate gates:** Quality work must remain sustainable for one maintainer.
14. **Traceable blockers:** Release blockers derive from approved requirements and affected scope.
15. **Transparent tool failure:** Flaky or unavailable tooling cannot silently become green.
16. **Persistent limitations:** A passing check does not erase known limitations.
17. **Replaceable methods:** Checks should be reversible without changing content meaning.
18. **Privacy-preserving evidence:** Quality review must not reproduce secrets or private values.

# Evaluation Criteria

Alternatives are assessed qualitatively through:

- Coverage breadth
- Content-integrity confidence
- Static-build and generated-output confidence
- Accessibility, responsive, bilingual, interaction, privacy, secret, and performance coverage
- False-confidence risk
- Reproducibility and feedback speed
- Local and future-CI suitability
- Manual-review burden
- Setup and one-maintainer maintenance cost
- Failure and omitted-check transparency
- Applicability before implementation
- Reversibility
- Risk of speculative tooling
- Risk of testing implementation details instead of user outcomes

Classifications mean:

- **Strong fit:** Directly supports current requirements and evidence.
- **Viable with conditions:** Useful with explicit ownership, scope, and later validation.
- **Weak under current evidence:** Cost or confidence is not justified now.
- **Deferred pending implementation:** Cannot be responsibly established before matching implementation exists.

No numerical score or measurement is implied.

# Testing-Approach Alternatives

## Alternative A — Manual-only or documentation-led validation

- **Reading, claims, and evidence:** **Strong fit** for editorial truth, status, limitations, artifact meaning, rights, and privacy context.
- **Keyboard, responsive, and accessibility judgment:** **Viable with conditions** when real implementation and recorded scenarios exist.
- **Repeatability and regression detection:** **Weak** for structural, generated-output, route, relationship, and repeated defect detection.
- **Generated output and links:** **Weak after implementation grows** because forgotten steps and false negatives are likely.
- **Feedback speed:** Fast for a small document review, slower and inconsistent across a growing release surface.
- **One-maintainer cost:** Low setup cost but increasing recurring memory and checklist burden.
- **Before implementation:** **Strong fit** for policy and representative-content review.
- **After implementation grows:** **Weak as the sole approach.**
- **Reversibility:** Strong; later deterministic automation can be added.

Manual validation is indispensable for meaning and context. Its weakness is using human memory for deterministic repetition.

## Alternative B — Automation-heavy validation from the foundation stage

- **Deterministic content/build/output/link checks:** **Strong fit in principle** after implementation exists.
- **Generated HTML, browser automation, scanning, visual comparison, performance, and CI:** **Deferred pending implementation** and separately selected tools.
- **Early tooling setup:** **Weak under current evidence** because there is no manifest, source, schema, route set, first vertical, or executable baseline.
- **Maintenance:** High relative cost for one maintainer; upgrades, configuration, environment variance, snapshots, and brittle selectors can dominate.
- **False confidence:** High if scans and passing builds are treated as proof of truth, useful reading, responsive meaning, rights, privacy context, or real assistive-technology behavior.
- **Brittleness:** Tests may bind to implementation details before stable user outcomes exist.
- **Environment variance:** Browser and performance results can vary without a defined environment policy.
- **Reversibility:** Viable, but early framework-specific infrastructure creates migration cost.

Automation is valuable for repeatable deterministic responsibilities. Professional appearance alone is not justification for adopting it early or broadly.

## Alternative C — Layered hybrid validation

- **Fast deterministic local checks:** **Strong fit** once matching content and implementation exist.
- **Future CI:** **Viable with conditions** when it mirrors approved non-interactive deterministic checks.
- **Representative manual review:** **Strong fit** for reading, evidence, artifacts, privacy, accessibility judgment, and responsive composition.
- **Interaction checks:** Conditional on a real island or feature.
- **Release review:** Combines recorded automated, manual, conditional, omitted, and residual evidence.
- **Progressive adoption:** Adds a method only after a quality responsibility and implementation surface exist.
- **One-maintainer cost:** **Strong fit** if the baseline stays small and task-specific checks expand only with risk.
- **Ownership risk:** Automated and manual responsibilities can become ambiguous unless the check matrix and reports identify method and owner.
- **Reversibility:** Strong because quality categories remain independent from tools.

Alternative C is an approach, not authorization to select or create tooling.

# Testing-Approach Comparison

| Alternative | Current usefulness | Future usefulness | Best-covered responsibilities | Poorly covered responsibilities | Main false-confidence risk | Setup / maintenance | CI / manual implication | Reversibility | Evidence needed before adoption |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A — Manual/documentation-led | Strong for present policy and content review | Weak as sole growing regression system | Truth, reading, artifacts, rights, privacy context | Deterministic repetition, generated output, links, routes | A remembered checklist is treated as complete | Low setup; rising repeated effort | No reliable CI; substantial manual burden | Strong | Real scenarios and recorded review format |
| B — Automation-heavy | Weak under current evidence | Strong for selected deterministic risks | Structure, build, output, repeated interaction mechanics | Truth, useful reading, real accessibility, rights/privacy context | Green automation is treated as complete quality | High setup and upgrade burden | Broad CI; manual work still necessary | Viable with migration cost | Stable implementation, outcomes, environments, and tool decision |
| C — Layered hybrid | Strong directionally | Strong and scalable if kept proportionate | Deterministic checks plus representative human judgment | Can leave gaps if ownership is unclear | Each layer assumes another covered the risk | Moderate, progressively adopted | CI mirrors deterministic checks; manual review remains explicit | Strong | Approved layers, applicability, reporting, and later tool evidence |

# Approved Direction

**Alternative C — layered hybrid validation is approved.**

- **Distinct responsibilities:** Deterministic checks, representative manual review, conditional feature validation, release review, and post-deployment handoff remain separate responsibilities.
- **Automation boundary:** Automation targets repeatable deterministic responsibilities after matching implementation and reliable methods exist.
- **Manual boundary:** Human review remains mandatory wherever reading, interaction, accessibility, responsive composition, evidence meaning, rights, privacy context, or release coherence requires judgment.
- **Conditional boundary:** A conditional check exists only when its feature, behavior, artifact, or environment exists in the authorized scope.
- **Release model:** Release review consolidates executed, failed, blocked, omitted, not-applicable, advisory, and residual evidence.
- **Maintenance:** The policy remains proportionate to one maintainer and does not require speculative infrastructure.
- **Implementation boundary:** No quality tool, method implementation, command, configuration, environment matrix, or executable check is selected.

Main risks remain ownership ambiguity between layers, checklist growth, excessive automation, undocumented manual validation, vague supported-environment tiers, flaky or ceremonial gates, and hidden differences between local and CI definitions.

Reconsider the direction if implementation becomes substantially interactive or server-side, contributor count grows, repeated regressions expose a missing layer, local/CI definitions diverge, gate reliability becomes a bottleneck, support tiers cannot be made concrete for release, or measured maintenance cost becomes disproportionate.

# Quality-Layer Direction

Layers 0–8 are approved as responsibility categories. Their approval selects no schema, tool, package, command, configuration, environment, threshold, or implementation file.

## Layer 0 — Authority and factual integrity

Responsibilities include authorization, source hierarchy, public/private boundaries, commit-scoped claims, review context, status, maturity, verification, limitations, and prohibition of fabricated evidence. This layer is primarily manual/editorial, with deterministic validation only where later semantics make it reliable.

## Layer 1 — Content and structural validation

Responsibilities include content shape, metadata and allowed states, one primary language, optional translation relationships, referential integrity, project semantic rules, honest missing/unavailable fields, and the public/internal allowlist. It does not define schema, fields, or commands.

## Layer 2 — Static generation and generated-output validation

Responsibilities include static build completion; approved direct-entry generation; expected HTML destinations; required metadata and language information; landmarks and heading structure; internal links and relationships; missing destinations and not-found behavior; asset references; and complete required content without optional JavaScript. Build success alone is insufficient.

## Layer 3 — Representative reading and responsive validation

Responsibilities include long English, long Thai, mixed-language text, dense metadata, status/limitation text, code and terminal overflow, tables, diagrams, captions, missing/broken media, narrow/wide layouts, zoom, text enlargement, reflow, touch, orientation, and virtual-keyboard behavior when relevant. This is primarily manual, later assisted by justified automation.

## Layer 4 — Interaction and progressive-enhancement validation

This layer applies only when a client island or interactive feature exists. It covers static fallback, enhancement success and failure, keyboard behavior, focus management/restoration, state announcements, touch equivalence, interruption/cancellation, reduced-motion equivalence, and isolation from unrelated static content. With no interaction it is **Not applicable**, not Passed.

## Layer 5 — Accessibility validation

Responsibilities include landmarks, headings, keyboard access, visible focus, names/descriptions, state announcements, color-independent meaning, tables/figures, diagram and media alternatives, reduced motion, zoom/reflow, touch, direct-entry orientation, and representative assistive-technology review. Automation may assist but cannot establish accessibility independently. No conformance target is selected; that choice remains unresolved for a later separately authorized decision.

## Layer 6 — Privacy, rights, and evidence-safety validation

Responsibilities include secrets, environment data, private contact details, screenshots, browser chrome, notifications, paths, hostnames, conversations, API keys, request headers, repository history, third-party rights, research/coursework attribution, the public allowlist, and exclusion of private values from reports.

## Layer 7 — Performance and resilience validation

Responsibilities include core content without optional scripts, JavaScript necessity, media/font cost, responsive assets, layout stability where dimensions are known, embeds/third parties, broken media, enhancement failure, direct-entry reliability, and generated-output or asset-size observations. No numeric budget is selected.

## Layer 8 — Release and post-deployment handoff

Responsibilities include completion of required automated/manual checks, resolution or withdrawal of blocked scope, documented limitations, public destinations, deployment/source equivalence, links, media, metadata, contact, privacy, and fallbacks after deployment. DEC-05 governs deployment direction; no provider is selected or accessed here.

# Check-Category Matrix

| Category | Main risk | When applicable | Approved validation mode | Approved stage | Approved blocking direction | Evidence to retain | Current executability | Deferred requirement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Content and metadata | Missing or invalid public meaning | Public entry exists | Hybrid | Authoring/local, Future CI | Required invalid data blocks affected scope | Diagnostic and reviewed entry | Not applicable now | Schema and method |
| Schema/structure | Invalid shape or state | Content model exists | Automated | Authoring/local, Future CI | Required structural failure blocks | Safe diagnostic | Not applicable now | Exact schema |
| Referential integrity | Broken required target | Relationships exist | Automated | Authoring/local, Future CI | Required unresolved target blocks | Source/target identifiers | Not applicable now | Resolution method |
| Project semantic claims | Metadata promotes unsupported claim | Project content exists | Hybrid | Authoring/local, Release | Unsupported public claim blocks | Claim-to-evidence review | Manual policy only | Semantic rules |
| Internal/public separation | Private/internal data emitted | Public build exists | Hybrid | Authoring/local, Future CI, Release | Any leak blocks | Allowlist result without private value | Not applicable now | Public source/query |
| Static build | Generation fails | Implementation exists | Automated | Authoring/local, Future CI | Required build failure blocks | Revision and safe summary | Not applicable now | Build method |
| Generated HTML | Missing/invalid expected document | Routes exist | Automated | Future CI, First vertical | Required output failure blocks | Destination and finding | Not applicable now | Output inspection |
| Direct routes | Direct entry lacks page/context | Routes exist | Hybrid | First vertical, Release | Required destination/context failure blocks | Route/scenario result | Not applicable now | Route set |
| Internal links | Broken navigation/relationship | Links exist | Hybrid | Future CI, Release | Required link failure blocks | Safe source/destination | Not applicable now | Link policy |
| Missing destinations/not-found | Misleading or trapped failure | Routing exists | Hybrid | First vertical, Release | Missing required recovery blocks | Scenario and observed state | Not applicable now | Not-found design |
| Language metadata | Wrong language exposed | Pages exist | Hybrid | Authoring/local, Future CI | Required mismatch blocks | Entry/page language result | Not applicable now | URL/default language |
| Thai content | Broken reading or marks | Thai sample/page exists | Manual | First vertical, Release | Meaning/access loss blocks | Sample and environment class | Text sample only | Rendered validation |
| English content | Poor sustained reading | English sample/page exists | Manual | First vertical, Release | Meaning/access loss blocks | Sample and observation | Text sample only | Rendered validation |
| Mixed-language content | Script/term disruption | Mixed sample/page exists | Manual | First vertical, Release | Meaning/access loss blocks | Sample and observation | Text sample only | Rendered validation |
| Long content | Lost orientation/readability | Long page exists | Manual | First vertical, Release | Essential access loss blocks | Scenario and findings | Text sample only | Layout |
| Metadata wrapping | Hidden/colliding trust context | Dense metadata exists | Manual | First vertical, Release | Lost status/limitation blocks | Content and viewport class | Text sample only | Layout |
| Status/limitation visibility | Maturity or uncertainty obscured | Trust metadata exists | Hybrid | Authoring/local, Release | Misleading omission blocks | Content/output observation | Manual policy only | Rendering |
| Code | Overflow or inaccessible excerpt | Real excerpt exists | Hybrid | First vertical, Release | Unreadable required evidence blocks | Excerpt context and result | Not applicable now | Actual excerpt |
| Terminal output | Overflow or private data | Real output exists | Hybrid | First vertical, Release | Exposure or unreadable evidence blocks | Sanitized context/result | Not applicable now | Actual output |
| Tables | Lost headers/relationships | Table exists | Hybrid | First vertical, Release | Essential relationship loss blocks | Table/scenario result | Representative need only | Actual table |
| Diagrams | Meaning lost or no alternative | Diagram exists | Hybrid | First vertical, Release | Missing required alternative blocks | Diagram, text equivalent, findings | Not applicable now | Actual diagram |
| Screenshots/media | Privacy, rights, crop, alt failure | Reviewed media exists | Hybrid | First vertical, Release | Exposure/rights/access failure blocks | Provenance and safe review | Not applicable now | Actual asset |
| Missing/broken assets | Claim disappears or fake placeholder | Asset optional/fails | Hybrid | First vertical, Release | Essential meaning loss blocks | Failure scenario | Policy only | Implemented state |
| Keyboard | Inoperable navigation/control | Interactive/control scope exists | Conditional | First vertical, Release | Essential operation failure blocks | Scenario/environment/result | Not applicable now | Implemented controls |
| Focus | Lost/invisible focus | Focusable UI exists | Conditional | First vertical, Release | Essential focus barrier blocks | Path and result | Not applicable now | Implemented controls |
| Touch | Pointer-only or small interaction | Touch-relevant UI exists | Conditional | First vertical, Release | Essential touch barrier blocks | Scenario/environment/result | Not applicable now | Implemented controls |
| Zoom/text enlargement | Clipping or lost meaning | Rendered page exists | Manual | First vertical, Release | Essential content loss blocks | Scenario and findings | Not applicable now | Implemented layout |
| Reflow | Horizontal loss/overlap | Rendered page exists | Manual | First vertical, Release | Essential content loss blocks | Scenario and findings | Not applicable now | Implemented layout |
| Orientation | Lost content/control after change | Relevant device class exists | Conditional | Release | Essential loss blocks | Scenario and result | Not applicable now | Device scope |
| Reduced motion | Meaning/control depends on motion | Motion exists | Conditional | First vertical, Release | Missing equivalent blocks | Preference scenario | Not applicable now | Authorized motion |
| No-JavaScript core | Essential content unavailable | Implementation exists | Hybrid | First vertical, Future CI | Core dependency blocks | Page/scenario result | Not applicable now | Static implementation |
| Optional-enhancement failure | Static core breaks | Island exists | Conditional | First vertical, Release | Essential regression blocks | Failure scenario | Not applicable now | Actual island |
| Interactive islands | Broken state/focus/isolation | Island exists | Conditional | Authoring/local, Future CI, Release | Required behavior failure blocks | Behavior and fallback result | Not applicable now | Actual interaction |
| Accessibility | Exclusion despite green scans | Release scope exists | Hybrid | First vertical, Release | Known blocking barrier blocks | Automated/manual method and limitation | Not applicable now | Target and methods |
| Privacy and secrets | Private value exposed | Any public output/artifact | Hybrid | Authoring/local, Future CI, Release | Exposure blocks | Category/path only where sensitive | Manual policy only | Safe method |
| Rights and attribution | Unauthorized or misleading reuse | Third-party/academic material exists | Manual | First vertical, Release | Unapproved use blocks | Source, rights, contribution review | Conditional now | Actual artifact |
| Performance | Slow/unstable core or excess cost | Implementation/assets exist | Hybrid | First vertical, Release | Approved blocking requirement only | Method/environment/observation | Not applicable now | Tool and budget |
| Release verification | Incomplete gate or hidden omission | Release candidate exists | Hybrid | Release | Unresolved required blocker blocks | Consolidated quality record | Not applicable now | Release scope |
| Post-deployment verification | Deployment differs or fails | Deployment exists | Conditional | Post-deployment | Critical public failure blocks/withdraws scope | Dated safe observation | Not applicable now | DEC-05 and deployment |

# Local-Check Direction

**Approved direction:** When relevant implementation exists, divide local validation into:

- **Fast deterministic baseline:** Use a small baseline for content structure, metadata, relationships, static generation, expected output existence, and required destinations/links after matching implementation exists. Formatting and type consistency join only after their methods are separately selected.
- **Bounded-task checks:** Add task-specific checks for the content, route, asset, state, interaction, or risk affected by the bounded task.
- **Affected manual scenarios:** Run the reading, keyboard, focus, zoom, reflow, touch, language, privacy, rights, or artifact scenarios implicated by the change rather than unrelated full-site scenarios.
- **Full applicable review:** Complete the applicable quality layers before the first vertical is completed and again before release.

No command or executable local check is selected, and no current check is reported as passing.

# Future-CI Direction

DEC-04A compared:

1. **Mirror all approved deterministic checks:** Strong consistency with local quality; higher runtime and maintenance.
2. **Run a smaller deterministic build/content/link baseline:** Faster, but task-specific deterministic failures may remain local only.
3. **Defer CI until after the first vertical:** Avoids speculative infrastructure; temporarily leaves regression repetition manual/local.

**Approved direction:** Future CI mirrors all approved reliable deterministic non-interactive local checks, but only after those checks have matching implementation, run reliably in the local workflow, are deterministic enough to act as gates, produce safe output/logging, and have separately approved tooling and configuration.

- CI must not contain a hidden alternative definition of quality.
- CI repeats rather than replaces local checks.
- CI cannot replace reading, responsive, accessibility, artifact, privacy, or rights review.
- Gate checks must be deterministic enough to act on.
- Flaky checks must not be silently retried until green.
- Absent conditional features do not require fake tests.
- Logs must not print secrets or private content.
- CI provider, workflow, caching, retention, commands, tooling, and configuration remain deferred and require separate authorization.

# Manual-Validation Direction

**Approved cadence:** Manual validation is required for relevant affected changes, first-vertical validation, and release validation.

Mandatory human responsibilities include, when applicable:

- Claim/evidence truthfulness and known limitations
- Thai, English, and mixed-language reading
- Dense metadata comprehension
- Keyboard and focus flow
- Zoom, text enlargement, and reflow
- Touch, orientation, and responsive substitutions
- Screenshot, diagram, code, terminal, and caption meaning
- Screen-reader reading order and representative assistive-technology experience
- Reduced-motion equivalence
- Privacy context, rights, attribution, and unavailable states
- Overall release coherence

Examples of affected review include:

- A Thai-content change requires representative Thai reading review.
- An interactive-control change requires applicable keyboard, focus, and touch review.
- A layout change requires applicable zoom, text-enlargement, reflow, and responsive review.
- A screenshot or artifact change requires meaning, caption, privacy, rights, and alternative review.
- An accessibility-relevant change requires the applicable manual accessibility scenarios.
- Release requires a coherent full-scope review.

Each later manual record identifies scenario, environment category, content or artifact, expected result, observed result, severity, omitted portions, reviewer, and review date or revision. DEC-04B records no fabricated result.

# Conditional-Check Direction

**Approved direction:** Checks become required only when the authorized scope contains the related feature, artifact, behavior, or environment:

- Client islands
- Mobile navigation
- Forms
- Search or filtering
- Theme selection
- Motion or animation
- Video or audio
- Interactive diagrams
- External embeds
- Analytics
- Contact processing
- Dynamic routes
- Authentication
- Server-side behavior

Absence is **Not applicable**, not Passed. Adding a feature expands the quality surface. Every included conditional feature requires applicable static fallback, failure behavior, keyboard, focus, touch, privacy, accessibility, performance, and release review. Deferred features receive no speculative tests.

# Supported-Environment Alternatives

## Environment Alternative E1 — Broad standards-first best effort

- **Simplicity:** Strong; the promise is short.
- **Clarity/testability:** Weak because standards-capable and best effort do not define representative conditions.
- **Bug priority:** Ambiguous.
- **One-maintainer cost:** Low immediate cost, but uncertain release confidence.
- **Reversibility:** Strong; tiers can be added later.
- **Overall:** Viable only as a baseline principle, not a sufficient support policy.

## Environment Alternative E2 — Broad fixed browser/device matrix from the start

- **Clarity and coverage:** Strong in appearance.
- **Current evidence:** Weak; no implementation, tool direction, browser results, devices, or maintenance evidence exists.
- **Maintenance:** High exact-version and device churn for one maintainer.
- **False completeness:** High because a named matrix cannot represent every input, zoom, language, assistive-technology, or failure condition.
- **Reversibility:** Viable, but published commitments and tooling create cost.
- **Overall:** Weak under current evidence.

## Environment Alternative E3 — Tiered capability-based support

Potential classes:

- **Primary supported:** Representative environments covering required capability and input classes, validated for the release scope.
- **Secondary / best effort:** Standards-capable environments expected to retain core content but not fully evaluated.
- **Not evaluated:** No result or support claim.
- **Explicitly unsupported obsolete capability sets:** Only after separately justified evidence and a maintained fallback boundary.

Representative capabilities include desktop keyboard/pointer; narrow/touch; unavailable optional JavaScript; zoom/text enlargement; reflow; reduced motion; high-contrast/forced-color behavior where relevant; representative screen-reader/assistive-technology review; direct entry/history; and print/static extraction only when later relevant.

- **Clarity:** Strong if each tier records actual testing.
- **Flexibility:** Strong; exact examples can be added later.
- **Maintenance:** Proportionate to one maintainer.
- **Testability:** Viable with recorded capability scenarios.
- **Risk:** Tiers can remain vague unless actual environments and results accompany release claims.
- **Reversibility:** Strong.
- **Overall:** Strong proposed fit.

# Approved Supported-Environment Direction

**E3 — tiered capability-based support is approved.**

## Primary supported

Representative environments covering approved capability and input classes that were actually validated for the release scope.

## Secondary / best effort

Standards-capable environments expected to retain core content but not fully evaluated.

## Not evaluated

No result or support claim exists.

## Explicitly unsupported obsolete capability sets

Use only after separate justification, recorded limitations, and a maintained fallback boundary exist.

Representative capability categories include keyboard/pointer; narrow layout/touch; optional JavaScript unavailable or enhancement failure; zoom/text enlargement; reflow; reduced motion; high-contrast or forced-color behavior where applicable; representative assistive technology; direct entry/browser history; and print/static extraction only when later relevant.

Exact browser names/versions, devices, operating systems, assistive-technology combinations, and support durations remain deferred. “Supported” means tested within the recorded release scope; it does not mean every browser/device combination. Every support claim identifies what was actually evaluated, and the tiers must become concrete before a release claim uses them.

Main risks are vague tiers, insufficient representative hardware/access, inconsistent manual execution, and overgeneralizing from a small sample.

# Release-Gate Direction

The following risk-based gates are approved only when relevant to the approved release scope.

## Integrity blockers

- Invalid required content or broken required relationships
- Missing required direct-entry pages
- Unsupported factual claims
- Internal/private content leaking to public output
- Fabricated evidence

## Build and generated-output blockers

- Required static build failure
- Required page, destination, or internal link not generated or resolvable
- Essential content dependent on optional JavaScript
- Invalid required metadata or language metadata

## Accessibility blockers

- Essential content/navigation inaccessible by keyboard
- Invisible, lost, or obstructed focus
- Meaning carried only by color
- Required content unreadable under approved zoom/reflow scenarios
- Missing required text alternative
- Any known blocking access barrier

No conformance standard is selected here.

## Privacy and safety blockers

- Secret or private value exposed
- Unapproved contact, location, account, or identity information
- Real conversation, API key, request credential, or sensitive header exposed
- Sensitive history promoted without review
- Rights-restricted content published without approval

## Responsive and evidence blockers

- Essential content unreadable or misleading
- Required evidence loses caption, source, limitation, or meaning
- Technical evidence merely shrunk below comprehension
- Missing evidence replaced with fabricated proof

## Conditional feature blockers

Apply only when the feature exists and is included in release scope.

## Nonblocking observations

- Cosmetic differences without meaning loss
- Advisory optimization opportunities without an approved budget
- Missing optional assets when complete text remains
- Deferred optional enhancement
- Documented best-effort differences

These directions approve classification responsibilities, not a passing release result or executable gate.

# Failure, Severity, and Omission Policy

Approved non-numeric severity states:

- **Blocking:** Violates an approved requirement for the affected task or release scope.
- **Required before scope expansion:** Current bounded scope may remain, but broader use waits for resolution.
- **Advisory:** Improvement or observation without current requirement failure.
- **Not applicable:** Related feature or condition is absent, with reason recorded.
- **Not evaluated / omitted:** No result exists; reason and consequence are explicit.

Policy:

- Documentation alone cannot turn a required blocker into Passed.
- Every omitted required check records check, reason, affected scope, consequence, risk, required follow-up, and whether task completion, scope expansion, release, or publication is blocked.
- Tool failure is not a passing product result.
- A flaky check remains unresolved until repaired or honestly replaced.
- A check that did not run cannot be described as passing.
- Manual and automated evidence identify their methods.
- Not applicable explains why the feature is absent.
- Known limitations survive passing results.
- A release may withdraw affected content rather than hide a blocker.
- No secret or private value appears in quality records.

# Validation Evidence and Reporting Direction

Later quality records should include, as applicable:

- Check category
- Scope and triggering task/release
- Content or artifact used
- Method
- Environment category
- Expected and actual result
- Pass, fail, blocked, omitted, not applicable, or advisory status
- Finding severity
- Safe files or destinations involved
- Remediation and residual limitation
- Reviewer or automated source
- Date or reviewed revision
- Safe evidence link
- Omitted checks and consequences

Sensitive logs and raw private data are neither required nor acceptable evidence.

# Maintenance and Reversibility

A layered policy can begin before tool selection because responsibilities, applicability, evidence, and blocking meaning are tool-independent.

Cheap-to-reverse choices include changing a method inside a layer, adding an exact environment example, adjusting manual cadence, moving a reliable deterministic check into or out of CI, and marking an absent conditional layer Not applicable.

Migration cost comes from framework-specific test helpers, brittle selectors/snapshots, duplicated local/CI definitions, provider-specific workflows, theme/browser asset baselines, unpublished environment assumptions, and reports coupled to proprietary output.

Local checks can later be mirrored in CI while retaining one definition of expected behavior. A replacement tool should preserve the category, trigger, expected result, severity, and evidence rather than forcing content semantics to change. Capability tiers can gain exact tested environments without rewriting their meaning. Manual scenario records remain portable because they describe user conditions and outcomes.

Conditional checks prevent speculative infrastructure. Numeric thresholds should wait for actual implementation, measurement, and an approved consequence. One maintainer should keep a small deterministic baseline, add affected-scope checks, consolidate release review, and remove or replace abandoned/flaky checks honestly rather than retaining ceremonial gates.

# Approved-Direction Consequences

The approved DEC-04 direction provides input without activating tasks:

- **FND-01:** Define structural, referential, semantic, and public/internal validation responsibilities.
- **FND-02:** Demonstrate approved quality cases with representative content.
- **NAV-01:** Validate direct entry, landmarks, keyboard, focus, and history behavior.
- **VRT-01:** Compare candidates against the approved policy.
- **VRT-02:** Retain a representative quality record.
- **EVD-01:** Validate evidence readability, source context, alternatives, rights, and redaction.
- **STA-01:** Validate unavailable, broken, failure, and recovery states.
- **MOT-01:** Gain conditional checks only if motion is authorized.
- **RWD-01:** Perform systematic responsive and bilingual validation.
- **A11Y-01:** Perform release-scope accessibility validation.
- **PERF-01:** Apply the approved performance direction without invented budgets.
- **PRV-01:** Apply privacy, secret, rights, and evidence-safety gates.
- **QA-01:** Consolidate approved checks, results, omissions, and limitations.
- **REL-01:** Verify deployment only after DEC-05 and QA gates.

The decision record changes no downstream task status and does not authorize implementation.

# Deferred Decisions

The following remain unresolved:

- Package manager
- Test framework
- Unit-test and integration-test libraries
- Browser-automation library
- Accessibility scanner
- Link checker
- Formatter, linter, and type checker
- Visual-regression and screenshot tooling
- Performance-measurement tooling
- CI provider and workflow
- Coverage tool and percentage
- Numeric performance budget
- Exact accessibility conformance target
- Exact browser names and versions
- Exact device models and operating-system versions
- Exact assistive-technology combinations
- Exact support duration
- Commands and scripts
- Configuration paths
- Manifest and lockfile
- Caching and parallelization
- Retry policy
- Artifact and build-output retention
- Deployment-verification tooling and release provider
- Implementation files

DEC-04A did not resolve these choices, and DEC-04B leaves all of them unresolved.

# Decision-Owner Answer Record

Nattapong supplied these explicit DEC-04B answers:

1. **Overall approach — Layered hybrid.** Consequence: deterministic, manual, conditional, release, and post-deployment responsibilities remain distinct.
2. **Local checks — Smaller fast baseline plus task-specific checks.** Consequence: bounded tasks run applicable checks for affected risks, with full applicable reviews before first-vertical completion and release.
3. **Future CI — Mirror approved deterministic non-interactive local checks.** Consequence: CI waits for reliable matching local implementation and may not define quality differently.
4. **Manual cadence — Relevant changes plus first vertical and release.** Consequence: human review occurs when risk changes and at both milestone gates.
5. **Supported environments — E3 tiered capability-based support.** Consequence: support is recorded by capability and actual evaluation while exact environments remain deferred.
6. **Failure model — Risk-tiered classes.** Consequence: Blocking, Required before scope expansion, Advisory, Not applicable, and Not evaluated / omitted communicate non-numeric action.
7. **Omitted checks — Explicit record for every omitted required check.** Consequence: no missing required validation can silently become Passed.

# Approved Decision and Implementation Boundary

- DEC-04 is **Approved** at the direction level only.
- No tool, dependency, package manager, command, configuration, CI, environment matrix, threshold, test, implementation, release, or deployment is authorized.
- Tool selection requires later implementation evidence and separate authorization.
- Check execution requires separately authorized executable scope.
- Every later task remains subject to its own dependencies and authorization.

# Validation Record

## DEC-04A preparation validation

- Reviewed the required governing, design, implementation-plan, task-list, DEC-01, DEC-02, DEC-03, CON-02, PRJ-01, and PRJ-02 records.
- Inspected the local tracked and present file tree without executing project tooling.
- Classified the current baseline as documentation/reference only; no application source or quality configuration was found.
- Compared all three testing approaches and E1, E2, and E3 environment policies qualitatively.
- Applied all eight CON-02 stress cases without reproducing their complete samples.
- Covered Layers 0–8 and every requested check-matrix category.
- Distinguished automated, manual, hybrid, conditional, local, future-CI, first-vertical, release, and post-deployment responsibilities.
- Selected no tool, dependency, provider, command, version, device, percentage, numeric budget, configuration, workflow, or implementation.
- Ran no application, build, test, lint, format, type, browser, accessibility, performance, server, or deployment check.
- Added no external fact, private value, credential, asset, source, test, configuration, or public content.
- Validation was limited to static source comparison, heading/table/status/deferred/privacy review, Markdown diff integrity, changed-path review, and final Git-state inspection.

## DEC-04B closure validation

- Nattapong explicitly approved the approach, Layers 0–8, local/CI/manual/conditional policies, E3 environment direction, release gates, severity states, and omission policy.
- All seven bounded owner questions were resolved.
- Layers 0–8, all testing alternatives, all environment alternatives, and the complete check matrix remain preserved.
- No application check was run and no check was described as passing.
- No tool, command, package, provider, version, device, threshold, configuration, or workflow was selected.
- No external source, deployment, provider, or network was accessed.
- Only this DEC-04 record and `docs/09-task-list.md` were authorized.
- Implementation, check execution, public content, publication, release, and deployment remain separately gated.
