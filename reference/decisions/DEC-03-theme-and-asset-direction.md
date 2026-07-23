# DEC-03 — Theme and Asset-Handling Direction

# Status

- **Decision ID:** DEC-03
- **Preparation stage:** DEC-03A completed
- **Approval stage:** DEC-03B completed
- **Status:** Approved
- **Decision owner:** Nattapong
- **Review basis date:** 2026-07-23
- **Approved direction:** Alternative A + D
- **Implementation authorized:** No
- **Asset creation authorized:** No
- **Public-content or publication authorization:** No
- **Task-list update:** Authorized only for this DEC-03B closure

DEC-03A prepared the Proposed comparison and recommendation package. DEC-03B records Nattapong's explicit approval of the direction-level Alternative A + D decision and the associated asset policy. The approval does not approve a visual value, asset, dependency, delivery mechanism, public-content item, or implementation task.

# Decision Questions

1. Which initial page-foundation strategy best supports calm long-form English, Thai, and mixed-language reading, evidence-heavy content, honest unavailable states, accessibility, static-first behavior, and one-person maintenance?
2. Should technical evidence use context-specific contrasting surfaces within the shared foundation?
3. Is a selectable light/dark pair justified for the initial foundation, or should it remain deferred until parity and maintenance needs are demonstrated?
4. Which direction-level rules should govern screenshots, diagrams, code, terminal output, structured evidence, research/coursework material, Linux configuration, personal media, and decorative assets?
5. How should missing, blocked, private, broken, or unverified assets affect editorial claims and later presentation?

# Authority and Inputs

- `reference/design-dna.md` governs durable identity, originality, evidence-led variation, reading conditions, and the rule that reference websites contribute principles rather than surface language.
- `docs/00-project-vision.md` governs the calm, precise, thoughtful, honest, content-led personal engineering identity and its accessibility, performance, and maintainability requirements.
- `docs/01-design-spec.md` through `docs/06-animation-spec.md` govern hierarchy, semantic visual roles, layout, component responsibilities, evidence treatment, responsive behavior, accessibility, technical surfaces, motion, and static alternatives.
- `docs/07-project-rules.md`, `docs/08-implementation-plan.md`, and `docs/09-task-list.md` preserve scope, evidence, privacy, decision, dependency, and implementation gates.
- DEC-01 approves Astro with static HTML by default and client JavaScript only through separately justified local islands. It does not require a theme control.
- DEC-02 approves repository-local build-time content, plain Markdown for long-form writing, a strict public/internal boundary, one primary language per entry, optional translated siblings, mixed-language entries, and structured artifact relationships. It does not choose asset locations or tooling.
- `reference/content/CON-02-representative-content-and-evidence.md` is the authority for the eight representative editorial stress cases and current asset readiness.
- PRJ-01 applies only to Booking API repository evidence at commit `d2f754fdd2fd5581ecca9f9e16539504020f6361`.
- PRJ-02 applies only to CourtFit repository evidence at commit `3c9cc65d00622731b4a381ddb785edc3713f8c46`.

No external source, repository, deployment, image, paper, asset, or runtime behavior was inspected for DEC-03A. Reference-site influence is limited to already approved principles; it supplies no asset, motif, palette, layout, or implementation choice.

# Current Evidence Readiness

CON-02 supplies real text and honest evidence states, but not a complete visual-asset set:

| Representative entry | Stress case available now | Evidence/artifact readiness relevant to DEC-03 |
| --- | --- | --- |
| `about-direction-en` | Long English personal-direction prose | Text is available for internal comparison; no profile media is selected or required |
| `about-direction-th` | Long Thai prose with English institutional and technical terms | Text is available; it is not an approved translation; Thai editorial and typography behavior remain untested |
| `booking-api-en` | Long English project prose plus dense maturity, verification, and limitation context | Fixed commit and audit-derived route/evidence descriptions are internally usable; screenshots, excerpts, diagrams, runtime output, and history promotion remain conditional or blocked |
| `courtfit-th` | Thai project prose containing routes, provider names, API terms, privacy flow, and limitations | Fixed commit and audit-derived architecture are internally usable; no public screenshot exists, and provider, runtime, privacy, browser, accessibility, deployment, and history-use questions remain |
| `research-preparation-mixed` | Mixed Thai/English research terminology and an explicit no-final-topic state | Scope questions are available; paper list, figures, notes, comparison matrix, hardware record, baseline, and results are missing |
| `rust-http-threadpool-en` | Guided-learning prose and possible code evidence | Text is available; source excerpts, tests, benchmarks, and extension boundaries have not been reviewed |
| `linux-terminal-workflow-mixed` | Mixed Thai/English tool names and assisted-troubleshooting context | Text is available; configuration excerpts, terminal evidence, reproducibility, and screenshots remain conditional or missing |
| `coursework-selection-unavailable` | Dense unavailable/To be verified state without a polished story | No assignment or artifact is selected; the state itself is a required design stress case |

Current evidence supports comparing reading foundations, semantic evidence surfaces, missing states, and direction-level asset rules. It does not support judging real screenshot color interaction, final theme parity, image treatment, typography, visual motifs, implementation performance, or browser behavior.

# Non-Goals

DEC-03A does not:

- Approve any recommendation.
- Select colors, color values, typefaces, font loading, type scale, dimensions, spacing values, radii, shadows, motifs, logos, breakpoints, project themes, or CSS tokens.
- Select an icon set, syntax highlighter, diagram library, screenshot tool, image format, optimization system, CDN, loader, build plugin, media host, or dependency.
- Define an asset pipeline, directory structure, public filename convention, schema, component, route, Astro file, or CSS architecture.
- Create, copy, transform, fabricate, approve, or publish screenshots, diagrams, code excerpts, terminal output, research figures, coursework artifacts, personal media, or decorative assets.
- Resolve actual artifact selection, public-content approval, first-vertical selection, package-manager choice, testing tools, supported environments, deployment, or runtime verification.
- Treat the theme behavior found in CourtFit source as evidence for the theme needs or runtime behavior of nattapong.dev.

# Evaluation Criteria

The alternatives are assessed qualitatively using:

- Identity fit
- Long-form English readability
- Long-form Thai readability
- Mixed-language readability
- Technical-evidence clarity
- Screenshot and diagram compatibility
- Status and limitation visibility
- Focus and interaction clarity
- Reduced-motion and static-fallback compatibility
- Responsive robustness
- Accessibility risk
- Performance cost
- JavaScript dependency
- Asset-variant burden
- Testing burden
- One-maintainer maintenance cost
- Reversibility
- Current evidence readiness
- Risk of generic developer-template appearance
- Risk of copying reference-site surface appearance

Classifications mean:

- **Strong fit:** Directly aligned with current governing requirements and representative evidence.
- **Viable with conditions:** Plausible, but requires explicit safeguards or later validation.
- **Weak under current evidence:** Current material does not justify the cost or risk.
- **Deferred pending evidence:** Cannot be responsibly selected until missing artifacts, tests, or owner priorities exist.

These classifications are not scores and do not claim tested visual performance.

# Theme Alternatives

## Alternative A — Single light-first foundation

**Direction:** Establish one quiet, light-first shared reading environment. Technical evidence may still use purpose-specific contrasting surfaces.

- **Long English reading:** **Strong fit.** `about-direction-en`, `booking-api-en`, and `rust-http-threadpool-en` need sustained reading and adjacent limitations. A calm light-first foundation is consistent with the governing preference for prose-first clarity.
- **Long Thai reading:** **Viable with conditions.** A light field can support Thai paragraph and mark clarity, but real typography, contrast, line rhythm, zoom, and reflow must be tested later.
- **Mixed-language reading:** **Strong fit.** A stable shared field avoids unnecessary context changes around Thai/English technical terms.
- **Metadata and status density:** **Viable with conditions.** Semantic hierarchy, readable low-emphasis text, and noncolor labels must prevent dense evidence from becoming washed out.
- **Research and coursework:** **Strong fit.** Paper-like source material, comparison tables, unresolved research, and the Coursework unavailable state can sit naturally in a reading-led foundation without imitating completed findings.
- **Code, terminal, API, and diagrams:** **Viable with conditions.** Context-specific surfaces are needed so technical material remains distinct without turning the full site into a technical interface.
- **Focus and contrast:** **Viable with conditions.** Visible focus and readable secondary text must be designed as first-class roles rather than relying on pale neutrals.
- **Images and screenshots:** **Viable with conditions.** Light screenshots may integrate easily; dark interfaces need deliberate framing and boundaries. No actual project screenshot has been reviewed.
- **Identity risk:** A restrained light field fits the calm identity but could become impersonal if authorship, content rhythm, and evidence relationships are weak.
- **Generic editorial/corporate-neutral risk:** Material. It must be resisted through Nattapong-specific writing, honest status, content-led variation, and authored evidence—not decorative branding.
- **Performance and no-JavaScript behavior:** **Strong fit.** One static foundation needs no theme-selection script or duplicated theme assets.
- **Maintenance and reversibility:** **Strong fit.** One foundation minimizes parity work and can later gain another theme if semantic roles remain implementation-independent.

## Alternative B — Single dark-first foundation

**Direction:** Establish one dark shared page environment, with lighter or otherwise contrasting technical and media surfaces where required.

- **Technical-interface and terminal presentation:** **Viable with conditions.** Some terminal and interface evidence may feel contextually familiar, but familiarity is not proof of clearer evidence.
- **Long-form fatigue:** **Weak under current evidence.** The representative set is text-heavy, and no reading test establishes that a dark field supports prolonged English, Thai, and mixed-language reading better.
- **Thai glyph and paragraph readability:** **Deferred pending evidence.** Thai mark clarity, fallback rendering, paragraph rhythm, contrast, and user preference have not been tested.
- **Low-contrast-gray risk:** High. A dark-first direction could encourage muted gray text that weakens status, captions, limitations, and long-form reading.
- **Generic developer-aesthetic risk:** High. Glow, gradients, black interfaces, terminal framing, and cinematic darkness are explicitly rejected as default engineering signals.
- **Research papers, diagrams, tables, and light screenshots:** **Viable with conditions.** These may require nested light surfaces or asset variants, increasing contrast transitions and maintenance.
- **Focus and status visibility:** **Viable with conditions.** Strong focus and noncolor status cues are possible but must be tested across every surface.
- **Image framing:** **Deferred pending evidence.** No reviewed screenshots or figures establish whether dark framing improves or harms current assets.
- **Performance and no-JavaScript behavior:** **Strong fit** if it remains the single static theme.
- **Maintenance and reversibility:** **Viable with conditions.** A single theme is maintainable, but later migration may expose assumptions embedded in artifacts or semantic-role mappings.
- **Overall current fit:** **Weak under current evidence.** Engineering subject matter alone does not justify dark-first selection.

## Alternative C — User-selectable light and dark themes

**Direction:** Supply equally supported light and dark page themes with a user choice, typically informed by system preference.

- **Theme parity obligations:** Every text, surface, focus state, status, evidence frame, diagram, code block, screenshot, control, and unavailable state must preserve equivalent meaning in both themes.
- **Semantic-role consistency:** **Strong in principle, conditional in practice.** Semantic roles could support parity, but no visual implementation or token set exists.
- **System-preference default:** Plausible, but it would require a predictable initial state and must not override explicit user choice.
- **Persistence and no-JavaScript fallback:** **Deferred pending implementation evidence.** Persistence is optional client behavior under DEC-01; the static document still needs an honest stable fallback.
- **Flash/incorrect-theme risk:** Material. Initial rendering, stored preference, system preference, and script failure can disagree.
- **Testing scope:** At least doubles visual-state review and expands keyboard, focus, contrast, status, diagram, screenshot, reduced-motion, no-script, and regression cases.
- **Asset variants:** May be required for diagrams, transparent media, annotations, screenshots, and technical figures. Current assets are too limited to justify this burden.
- **One-maintainer maintenance:** **Weak under current evidence.** Two complete themes introduce recurring review cost before the first foundation exists.
- **Accessibility and regression risk:** Higher because one theme can silently become secondary or less legible.
- **Performance and JavaScript:** Theme choice may require a small local script or island, but no client behavior is justified merely because a toggle is conventional.
- **Reversibility:** **Viable with conditions.** Semantic roles can make adding or removing a theme manageable, but authored theme-specific assets increase migration cost.
- **Overall current fit:** **Deferred pending evidence.** A selectable pair may be reconsidered after one foundation and real assets demonstrate a user need and sustainable parity.

## Alternative D — Quiet shared foundation with contrasting technical surfaces

**Direction:** Keep reading, navigation, status, and orientation in one quiet shared system, while code, terminal, API, diagram, media, and interface evidence receive context-specific surfaces whose contrast serves comprehension.

Alternative D is both a standalone direction-level strategy and a composable surface strategy. It is partly orthogonal to choosing a light, dark, or selectable page theme: D can be combined with A, B, or C.

- **Shared reading foundation:** **Strong fit.** All eight CON-02 entries retain consistent prose, metadata, status, limitation, and orientation treatment.
- **Context-specific technical surfaces:** **Strong fit in principle.** Code, terminal, API, diagrams, screenshots, and interface evidence can signal function without making unrelated prose resemble a developer tool.
- **Project character:** **Strong fit.** Booking API and CourtFit may retain authentic artifact character inside a stable site frame without becoming full-page project themes.
- **Avoidance of full-page project themes:** **Strong fit.** Navigation, typography roles, evidence semantics, and accessibility stay shared.
- **Evidence hierarchy:** **Strong fit.** Contrast marks a real evidence responsibility rather than decoration.
- **Contrast transitions:** **Viable with conditions.** Moving between reading and technical surfaces must not create glare, low contrast, or unclear hierarchy.
- **Nested-surface complexity:** Material risk. Evidence should not become a stack of boxes, browser frames, cards, or panels.
- **Responsive behavior:** **Viable with conditions.** Technical surfaces need wrapping, contained overflow, sequencing, alternate diagrams, summary tables, or text equivalents rather than proportional shrinking.
- **Print/text-equivalent behavior:** **Strong fit in principle.** Meaning can remain in semantic text and captions even if surface contrast or interactive enhancement disappears.
- **Maintenance:** **Viable with conditions.** A small recurring set of semantic evidence roles is maintainable; per-project theme systems are not.
- **Reversibility:** **Strong fit.** Context-specific roles can survive a later page-theme change if their meaning is separated from raw visual values.

# Theme Comparison

## Qualitative comparison

| Criterion | A — Light-first | B — Dark-first | C — Selectable light/dark | D — Contrasting technical surfaces |
| --- | --- | --- | --- | --- |
| Identity fit | Strong fit, with authored-character safeguards | Weak under current evidence | Viable with conditions | Strong fit |
| Long English readability | Strong fit | Weak under current evidence | Viable only with full parity | Inherits page foundation; supports evidence separation |
| Long Thai readability | Viable with later testing | Deferred pending evidence | Deferred pending two-theme testing | Inherits page foundation; technical labels still need testing |
| Mixed-language readability | Strong fit | Deferred pending evidence | Viable with full parity | Strong fit for stable reading plus bounded evidence |
| Technical-evidence clarity | Viable with D-like surfaces | Viable with conditions | Viable with doubled review | Strong fit in principle |
| Screenshot/diagram compatibility | Viable; actual assets missing | Viable; actual assets missing | Deferred; variant burden unknown | Viable with per-asset framing |
| Status/limitation visibility | Strong if low-emphasis text stays readable | Higher muted-text risk | Requires parity in both themes | Strong if shared semantics stay visible |
| Focus/interaction clarity | Viable with later testing | Viable with later testing | Higher parity/regression burden | Must remain consistent across surfaces |
| Reduced-motion/static fallback | Strong | Strong | Viable; theme control adds a state | Strong |
| Responsive robustness | Strong directionally | Viable with conditions | Higher test burden | Viable with purpose-built alternatives |
| Accessibility risk | Lower relative complexity, still untested | Higher contrast/fatigue risk, untested | Highest parity burden | Moderate nested-surface/transition risk |
| Performance cost | Lowest directionally | Low directionally | Higher client and variant risk | Low if surfaces remain semantic/static |
| JavaScript dependency | None for theme | None for theme | Possible for selection/persistence | None inherently |
| Asset-variant burden | Low | Conditional | Potentially high | Low to moderate by evidence need |
| Testing burden | One foundation | One foundation | Two complete foundations plus switching/failure | Cross-surface testing within chosen foundation |
| One-maintainer cost | Strong fit | Viable | Weak under current evidence | Viable if roles stay few |
| Reversibility | Strong | Viable | Viable, but theme-specific assets cost more | Strong |
| Current evidence readiness | Viable with conditions | Weak | Deferred | Viable with conditions |
| Generic developer-template risk | Low to moderate | High | Moderate to high if dark mode drives identity | Low if artifacts are real and surfaces restrained |
| Reference-copying risk | Low if not reduced to corporate editorial styling | High around known dark/glow/product patterns | Higher surface scope to police | Low if roles come from real evidence rather than reference motifs |

## Representative stress cases and evidence boundary

| Stress case | Supported by current evidence | Design inference being evaluated | Remains untested | Required before implementation or stronger approval |
| --- | --- | --- | --- | --- |
| `about-direction-en` | Real long English internal draft exists | One quiet page field should support sustained reading | Actual measure, hierarchy, contrast, focus, and device behavior | Foundation prototype and accessibility/responsive review |
| `about-direction-th` | Real Thai draft with English terms exists | A stable light-first field may reduce reading disruption | Thai font rendering, line rhythm, marks, zoom, reflow, and user preference | Bilingual typography and device/browser testing |
| `booking-api-en` | Dense project status, evidence, and limitation text exists; commit-scoped candidates are known | Contrasting technical surfaces can separate code/API/diagram evidence from prose | No actual code excerpt, diagram, terminal output, screenshot, or runtime result was reviewed | Select and review real artifacts; retain commit, claim, limitation, rights, and redaction context |
| `courtfit-th` | Thai project prose and source-derived browser/server/provider boundaries exist | A shared page plus bounded interface/flow surfaces can preserve project character | No public screenshot, rendered interface review, provider behavior, browser test, or operational privacy evidence | Artifact review, safe synthetic states, privacy review, runtime qualifications, and responsive/accessibility testing |
| `research-preparation-mixed` | Mixed terminology and no-final-topic state exist | Reading-led treatment should prevent research preparation from resembling completed results | Papers, figures, comparison matrix, hardware, and visual hierarchy are absent | Verified sources and separately reviewed research artifacts |
| `rust-http-threadpool-en` | Guided learning narrative exists | Semantic code surfaces could support a focused change in understanding | Exact source, excerpt, extensions, tests, and code presentation | Source/attribution/license review and a real excerpt |
| `linux-terminal-workflow-mixed` | Assisted workflow narrative exists | A restrained terminal/configuration surface could clarify evidence without decoration | Actual configuration, command, output, environment, reproducibility, and privacy | Sanitized reviewed evidence and assisted-attribution context |
| `coursework-selection-unavailable` | Honest unavailable state and required evidence list exist | Essential meaning should survive without any asset | Visual and screen-reader treatment of unavailable content | Later semantic/state prototype; no artifact should be invented |
| Diagram/screenshot candidates | Audit-derived candidate types and privacy limits exist | Context-specific framing can handle varied aspect, brightness, and density | Actual crop, legibility, theme interaction, rights, metadata, and mobile behavior | Select real reviewed assets and test responsive/text alternatives |
| Missing assets | CON-02 records missing, conditional, and blocked states | Text-first content can remain complete without decorative placeholders | Final editorial presentation | Approve missing/unavailable policy and validate it in later prototypes |

# Approved Direction

## Approved primary page foundation

Use **Alternative A: one single light-first shared page foundation** for the initial system. The same foundation is the static and no-JavaScript fallback.

This direction prioritizes sustained English, Thai, and mixed-language reading; dense evidence and limitation text; honest unavailable states; accessibility; static-first behavior; reversibility; and a scope proportionate to one maintainer. It does not establish that a light-first foundation is universally more readable or accessible. Actual typography, focus, contrast, reflow, browser, device, and accessibility behavior remain to be tested with real content.

## Approved technical-surface direction

Use **Alternative D: contrasting semantic technical surfaces** as a shared direction for real:

- Code
- Terminal output
- API evidence
- Diagrams
- Screenshots
- Media
- Interface evidence

Contrast must express a real evidence, reading, orientation, or comparison responsibility. Technical surfaces remain bounded by the shared page, navigation, typography-role, status, evidence, accessibility, responsive, and privacy system.

They must not become full-page project themes, generic dark developer dashboards, decorative card grids, nested panel systems, fake browser frames, fake terminal interfaces, fabricated interface chrome, or fabricated technical evidence. Every individual surface still requires later validation with real content, responsive behavior, focus, contrast, text alternatives, and applicable accessibility checks.

## Selectable-theme decision

User-selectable light/dark themes are **Deferred for the initial foundation** and are not permanently rejected. Alternative B, dark-first, is not approved for the initial page foundation. Alternative C, selectable dual themes, is not approved for initial implementation.

No theme toggle, preference persistence, system-preference behavior, flash handling, theme-specific asset, or theme-parity implementation is approved. Reconsideration requires:

- A complete single foundation
- Real reviewed assets
- Theme-parity prototypes
- Accessibility testing
- No-JavaScript and failure analysis
- A demonstrated user need
- A sustainable maintenance and regression plan

## Maintenance decision

Optimize for one minimal initial foundation maintained by one person. Avoid parallel theme systems, duplicate theme assets, per-project visual systems, and optional variants without demonstrated value. This direction selects no implementation architecture, tool, token, or testing command.

## Screenshot decision

Project screenshots are optional evidence. A Major Project is not incomplete merely because it has no screenshot.

A screenshot may be used only when it:

- Supports a clear claim or materially improves understanding
- Represents a reviewed project state
- Retains source, revision, build, or environment context when known
- Passes privacy and redaction review
- Passes rights and provenance review
- Includes a useful caption
- Preserves the supported claim and its limitation
- Has alt text or an equivalent description
- Has an appropriate narrow-screen treatment

Missing screenshots remain honestly missing. Do not create mockups or placeholders that appear to prove implementation.

## Local and remote asset decision

Prefer lawful, reviewed local copies when practical and justified. Local storage does not remove requirements for rights, license review, provenance, update responsibility, repository cost, privacy, redaction, version context, or maintenance.

Remote embeds and hotlinks are case-by-case exceptions rather than the default. Later justification must address reader value, privacy, availability, accessibility, failure behavior, rights, performance, and a static fallback.

This decision selects no CDN, media provider, loader, folder structure, file format, responsive width, compression setting, or optimization system.

## Missing and unavailable-asset decision

Essential text and context must remain complete when no asset exists. Honest states may include **Missing**, **Unavailable**, **Conditional**, **Blocked**, **Private**, **Rights-restricted**, **To be verified**, and **Not implemented**.

Do not use decorative placeholders that could be interpreted as evidence. Preserve the intended evidence purpose, source context, reason unavailable, limitation, and review trigger when useful. When a claim materially requires unavailable evidence, weaken, defer, qualify, or omit the claim.

## Rationale retained from DEC-03A

- CON-02 is dominated by long English, Thai, and mixed-language reading, dense evidence/limitation metadata, and honest missing states rather than reviewed image-led pages.
- A single foundation is proportionate to one maintainer and DEC-01's static-first, minimal-client boundary.
- The light-first direction is compatible with research, tables, prose, and unavailable states while leaving real technical artifacts room to contrast.
- Alternative D preserves technical clarity and project character without using a generic full-page developer theme or separate project themes.
- Deferring dual themes avoids approving parity, asset variants, persistence, flash handling, and doubled regression work before real artifacts or user need establish value.
- Both choices remain reversible when semantic responsibilities stay independent from final visual values.

Main risks remain:

- The light-first foundation could drift into generic editorial or corporate neutrality.
- Technical surfaces could multiply into nested cards or fake interface chrome.
- Dark-native screenshots or diagrams may transition poorly against a light page.
- Deferring a theme toggle may conflict with a later strong owner preference or demonstrated visitor need.
- Actual Thai reading, focus, contrast, screenshot framing, responsive behavior, and no-script behavior remain untested.

Reconsider the direction if real Booking API, CourtFit, research, learning, or coursework assets expose persistent legibility problems; accessibility testing finds another strategy materially better; an authentic recurring visual or audience need emerges; or a sustainable parity and regression plan supports a demonstrated need for two themes.

# Asset-Handling Principles

1. **Evidence before decoration:** An asset must answer a reader question or support orientation, not fill space.
2. **Local control where lawful and practical:** Prefer stable reviewed local copies when rights, update responsibility, repository cost, and provenance are acceptable. Remote embeds and hotlinks are not the default evidence strategy.
3. **Context travels with evidence:** Preserve source, revision or environment when known, purpose, supported claim, caption, verification, conditions, limitations, rights, and review state.
4. **Privacy before public use:** Redaction and publication review precede inclusion.
5. **Semantic representation before screenshot-only evidence:** Prefer selectable text, tables, descriptions, and structured relationships when they communicate the claim.
6. **Static alternatives:** Interactive or time-based evidence requires a complete static equivalent.
7. **Responsive alternatives:** When scaling destroys comprehension, stack, sequence, crop with integrity, use contained access, substitute a compact diagram, or provide a summary/table/text equivalent.
8. **No fabrication:** Do not invent screenshots, diagrams, terminal output, data, requests, results, research findings, or coursework evidence.
9. **No layout-filling assets:** Absence remains missing, unavailable, conditional, blocked, or omitted.
10. **Bounded variation:** Project character may appear through real artifacts inside shared status, evidence, navigation, typography-role, accessibility, and privacy rules.
11. **No maturity inflation:** Asset polish must not imply successful runtime, deployment, testing, security, accuracy, production readiness, or commerce.
12. **Generated material is not evidence:** It requires independent source review before it can support a claim.
13. **References are methodological only:** Reference websites supply principles, never copied assets, motifs, palettes, or recognizable surface combinations.

These are direction-level principles, not an implementation pipeline.

# Asset-Class Direction

| Asset class | Approved direction |
| --- | --- |
| **Project screenshots** | Use only reviewed project states tied to source/build/environment when known. Review browser chrome, tabs, notifications, accounts, API keys, messages, file paths, hostnames, identifiers, private data, metadata, and background content. Preserve crop integrity, caption, supported claim, source/status/limitation, and alt text or equivalent description. On narrow screens, crop only without changing the claim, sequence key regions, provide contained viewing, or substitute a description. No Booking API or CourtFit screenshot is assumed to exist. Missing screenshots remain missing rather than becoming a decorative mockup. |
| **Architecture and data-flow diagrams** | Derive every relationship from verified source or recorded behavior and label source-level versus runtime-unverified relationships. Include purpose, reading order, labels, version/commit context, limitation, and text equivalent. Use a compact sequence, alternate layout, or summary table when the original cannot reflow. Reject decorative pseudo-architecture. A generated diagram is not evidence until independently compared with its authoritative source. |
| **Code excerpts** | Prefer selectable semantic text, not images. Record source file, symbol, revision, purpose, supported claim, and limitation. Use the smallest excerpt that explains the decision or behavior. Review secrets, personal data, context, attribution, and license. Keep text usable without client JavaScript through wrapping or contained overflow. DEC-03A selects no syntax-highlighting dependency or theme. |
| **Terminal output** | Prefer reviewed text/transcripts over image capture. Record the real command, environment, purpose, result, and limitation when verified. Remove usernames, hostnames, private paths, tokens, keys, and unrelated private data without changing evidentiary meaning. Never fabricate output or use fake terminal styling as decoration. Wide lines need safe wrapping, contained access, and a logical accessible reading sequence. |
| **API and structured evidence** | Use safe synthetic or separately approved test data only. Show request/response structure without credentials and identify source plus verification scope. Prefer semantic text, tables, or step lists with alternatives for diagrams. Do not imply a live endpoint, passing response, provider success, deployment, or runtime correctness without matching evidence. |
| **Research papers and figures** | Preserve citation, attribution, source finding, Nattapong's interpretation, uncertainty, rights, and reuse review. Prefer original summaries, comparison tables, or independently created reviewed diagrams. Do not copy an unreviewed paper figure. The missing verified paper-list state remains visible. |
| **Coursework material** | Require assignment/provided-material context, individual/group role, exact contribution, academic framing, and university/instructor/peer/privacy/publication-rights review. Do not present it as professional work, independent problem ownership, or independent research. Keep the entry unavailable until one item and its evidence are selected and approved. |
| **Linux and configuration artifacts** | Use sanitized excerpts with version/environment when known, reproducibility qualification, and guided/assisted troubleshooting attribution. Remove tokens, usernames, hostnames, private paths, accounts, notifications, and private configuration. Do not imply independent operating-system engineering or expert administration. |
| **Profile or personal media** | No image is assumed or required. Any future media requires separate owner approval and identity, metadata, precise-location, background, third-party, rights, and privacy review. The text-first experience must remain complete without it. |
| **Icons and decorative assets** | Require a real function such as action, status reinforcement, or orientation. Keep text labels primary where meaning matters. Reject decorative technology-logo walls and copied brand motifs. DEC-03A selects no icon library, icon set, licensing model, logo, or decorative system. |

# Responsive and Accessibility Direction

- Assets must preserve semantic reading order and must not reorder source, caption, limitation, and conclusion into a misleading sequence.
- Screenshots and diagrams must not be proportionally shrunk below legibility.
- Valid later responses include stacking, sequencing, integrity-preserving cropping, contained overflow, alternate diagrams, summary tables, and text equivalents.
- Caption, source, status, limitation, verification, and supported claim must remain associated with the asset at every presentation size.
- Color cannot be the only carrier of status, maturity, verification, relationship, selection, or diagram meaning.
- Every interactive, animated, or time-based asset needs a complete static equivalent; reduced motion must preserve meaning and control.
- Technical evidence must remain available without hover, precise pointing, autoplay, or successful client JavaScript.
- Keyboard, touch, focus, screen-reader reading order, zoom, text enlargement, reflow, orientation, and virtual-keyboard needs remain part of later validation.
- Light/dark transitions inside technical surfaces must not obscure focus, captions, borders that carry meaning, or low-emphasis text.
- DEC-03A selects no breakpoint, contrast threshold, testing tool, browser matrix, conformance target, or supported environment.

# Privacy, Rights, and Redaction Direction

- The Booking API historical `.env` path remains **Sensitive — do not publish**. Values must not be inspected or reproduced; owner review and any appropriate credential rotation remain prerequisites for prominent history use.
- CourtFit API keys, request headers, provider credentials, real conversations, request captures, and the private commit-author email must never be reproduced.
- Profile media must not expose a precise location, private account, private document, background identifier, or metadata that exceeds the approved public boundary.
- Screenshots require review of metadata, browser chrome, tabs, notifications, accounts, paths, hostnames, identifiers, messages, third-party content, and physical background.
- Research and coursework require citation, attribution, contribution, ownership, institutional/privacy, and reuse review.
- Third-party logos, interfaces, screenshots, paper figures, typefaces, and other media require rights and license review.
- Presence in a public repository does not automatically approve reuse, redistribution, prominent history promotion, or publication on nattapong.dev.
- Internal provenance may be retained without exposing sensitive repository, environment, identity, or account details.
- Redaction reduces exposure; it does not establish privacy, security, provider retention, transport safety, or operational controls.

No private value is included in this decision record.

# Performance and Maintenance Direction

- Use a text-first, static-first baseline consistent with DEC-01.
- Require an asset to justify its reading, orientation, or evidence value before inclusion.
- Reserve stable intrinsic dimensions when actual media dimensions are later known so loading does not disrupt reading.
- Create responsive variants only when a real asset cannot remain comprehensible through ordinary reflow or contained access.
- Avoid duplicate theme assets unless theme parity demonstrates a real need.
- Avoid large, unreviewed screenshots and media whose evidentiary detail is unreadable at intended sizes.
- Prefer static semantic code, terminal transcripts, tables, captions, and descriptions over client-rendered substitutes.
- External embeds require separate value, privacy, failure, accessibility, and fallback justification.
- Remote hotlinking should not be the default evidence strategy. Local reviewed copies may improve stability, but rights, revision/update responsibility, repository size, and invalidation must be considered.
- Asset provenance and version context need durable future handling independent of delivery location.
- Every supported theme, surface role, media variant, crop, alternate diagram, and interactive representation creates continuing review and regression cost.
- Image optimization, formats, widths, loaders, CDNs, build plugins, numeric budgets, and processing systems remain deferred.

# Failure and Unavailable-Asset Direction

- A missing asset must not block essential identity, project context, status, limitation, or explanatory text.
- Do not create a decorative placeholder that could be mistaken for evidence.
- Where useful, preserve an honest title, intended evidence purpose, caption context, availability status, reason, and next review trigger.
- Broken media must leave the supported claim, source context, caption, and text alternative understandable.
- A removed, private, rights-restricted, or unavailable artifact may be represented by an explicit unavailable state.
- Failure of optional external media must not remove the text that explains the supported claim.
- When a claim materially depends on unavailable evidence, weaken it, defer it, mark it unresolved, or omit it.
- Missing research papers, coursework artifacts, project screenshots, deployment captures, tests, or runtime results must remain missing; visual completeness is not a reason to fabricate them.

This direction defines editorial behavior only. It does not design a component or user interface.

# Reversibility and Future Migration

Cheap-to-reverse choices:

- Selecting one initial page foundation rather than two.
- Deferring a theme toggle.
- Keeping technical surfaces semantic and independent from final visual values.
- Treating screenshots as optional evidence rather than required layout slots.
- Preferring text and captions that survive asset removal.

Choices that create migration cost:

- Theme-specific diagrams, screenshots, transparent illustrations, or annotations.
- Hardcoded visual assumptions in authored content.
- Remote-only embeds without local context or fallback.
- Asset filenames or paths embedded as editorial identity.
- Per-project themes, copied interface frames, or a large decorative system.
- Assets whose captions, rights, provenance, or privacy state are stored separately or not retained.

A single foundation can later gain another theme if semantic roles, evidence meaning, focus/status behavior, and technical surfaces are not coupled to raw visual values. Technical surfaces can remain stable across a page-theme change because their responsibilities—code, terminal, diagram, API, media, evidence—do not depend on one palette.

Local reviewed assets could later move to another delivery mechanism while keeping the same editorial meaning if captions, provenance, source revision, supported claim, alternatives, rights, privacy state, and limitations remain portable. Those records reduce migration risk and make asset replacement auditable.

Final asset fields, directories, file names, transforms, theme mappings, and delivery integrations remain deferred because choosing them now would turn a direction decision into an unsupported implementation design.

# Approved-Direction Consequences

The approved DEC-03 direction is an input to later work but does not activate these tasks:

- **DEC-04:** Must account for the single initial foundation, technical-surface states, unavailable/broken media, no-JavaScript fallback, responsive alternatives, and any later theme-parity reconsideration.
- **FND-01:** May later preserve direction-level artifact semantics and missing-state meaning, but DEC-03 does not define fields, schema, or collections.
- **FND-02:** May later translate the approved foundation and surface strategy into separately authorized visual roles and prototypes without assuming final values.
- **EVD-01:** Must select real evidence and retain source, revision, claim, caption, limitation, redaction, rights, and accessible alternatives.
- **RWD-01:** Must validate actual assets through reflow, stacking, sequencing, contained access, alternate diagrams, cropping integrity, and text equivalents.
- **A11Y-01:** Must validate contrast, focus, semantics, alternatives, language behavior, keyboard/touch access, zoom/reflow, screen-reader reading order, and reduced-motion equivalence.
- **PERF-01:** Must review actual media, fonts, variants, embeds, dimensions, loading, failure, and maintenance cost.
- **PRV-01:** Must review secrets, accounts, identifiers, metadata, private history, user data, third-party content, operational privacy, and rights before public use.
- **VRT-01:** May compare first-vertical candidates using the approved direction, but first-vertical selection remains separate.

DEC-03 alone does not unblock FND-02. DEC-04, FND-01, exact implementation decisions, and separate implementation authorization remain required. This decision changes no downstream task status.

# Deferred Decisions

The following remain explicitly unresolved:

- Final colors and values
- Final typefaces
- Font sourcing and loading
- Typography scale
- Final spacing
- Motif
- Logo
- Icon set
- Project-specific visual variation
- Theme tokens
- Theme-persistence implementation
- CSS architecture
- Breakpoints
- Asset directory structure
- Public asset naming
- Image formats
- Responsive widths
- Compression settings
- Image-processing or optimization library
- CDN or external media provider
- Syntax highlighting
- Diagram library
- Screenshot tooling
- Video
- Embeds
- Final artifact selection
- Final captions and alt text
- Public-content approval
- First vertical
- Package manager
- Implementation files

DEC-03B leaves all of these items unresolved.

# Decision-Owner Answer Record

Nattapong supplied these explicit DEC-03B answers:

1. **Primary foundation — Alternative A + D approved.** Use one light-first shared foundation with contrasting semantic technical surfaces. Consequence: the initial system has one reading foundation while real technical evidence may use bounded functional contrast.
2. **Selectable themes — Deferred.** Consequence: no initial dual-theme parity, switching, persistence, flash handling, or theme-specific asset burden is approved; a later decision may reconsider it after the recorded evidence gates.
3. **Technical surfaces — Approved as a shared semantic strategy.** Consequence: code, terminal, API, diagram, screenshot, media, and interface evidence may receive purpose-specific surfaces without becoming project themes or decorative interface systems.
4. **Maintenance — One minimal foundation.** Consequence: the initial direction is optimized for one maintainer and excludes parallel theme systems or unjustified variants.
5. **Screenshots — Optional reviewed evidence.** Consequence: no Major Project requires a screenshot; every used screenshot must support a claim and pass context, privacy, rights, caption, limitation, alternative, and responsive review.
6. **Local/remote direction — Prefer lawful reviewed local copies; remote use is case by case.** Consequence: stable local control is preferred when justified, while every local or remote use retains rights, privacy, provenance, accessibility, performance, maintenance, and fallback obligations.
7. **Missing/unavailable behavior — Honest text-first states approved.** Consequence: essential meaning remains complete without assets, and unavailable evidence is labeled, qualified, deferred, or omitted rather than replaced with decorative or fabricated proof.

# Approved Decision and Implementation Boundary

DEC-03 is **Approved** at the direction level only.

Approval does not authorize:

- Implementation
- CSS
- Astro source
- A theme toggle
- Visual prototypes
- Final colors
- Fonts
- A logo
- Motifs
- Tokens
- Breakpoints
- Dependencies
- Asset creation
- Final asset selection
- Public content
- Publication
- Deployment

Every implementation, prototype, asset-selection, public-content, and publication task still requires separate authorization.

# Validation Record

## DEC-03A preparation validation

- Reviewed the required design DNA, vision, design, design-system, layout, component, content, animation, project-rule, implementation-plan, task-list, DEC-01, DEC-02, CON-02, PRJ-01, and PRJ-02 records.
- Compared all four requested theme alternatives using qualitative classifications without numerical scores.
- Treated Alternative D as both a comparable direction and a partly orthogonal strategy composable with A, B, or C.
- Applied all eight CON-02 representative IDs to reading, evidence-density, bilingual, technical-artifact, and unavailable-state analysis without reproducing their full samples.
- Covered screenshots, diagrams, code, terminal output, API/structured evidence, research, coursework, Linux/configuration artifacts, personal media, icons/decorative assets, responsive alternatives, captions/text equivalents, privacy, rights, performance, and missing/broken media.
- Preserved PRJ-01 and PRJ-02 commit boundaries, runtime unknowns, sensitive-history restrictions, and publication limitations.
- Selected no final value, typeface, motif, logo, breakpoint, token, format, dimension, tool, pipeline, dependency, component, route, or implementation file.
- Added no external fact, image, screenshot, diagram, code excerpt, terminal output, research source, coursework artifact, or private value.
- Validation is static document review only. No prototype, rendering, contrast measurement, browser/device check, accessibility test, performance test, source execution, external access, or asset inspection occurred.
- Final workspace validation confirmed Markdown integrity, the exact single changed path, no staging, no task-list modification, no remote, and no network action.

## DEC-03B closure validation

- Nattapong supplied explicit owner approval for all seven decision questions.
- The complete Proposed DEC-03A record was reviewed before approval and its four-alternative analysis remains preserved.
- Alternative D remains recorded as partly orthogonal and composable with A, B, or C.
- No visual prototype, screenshot, diagram, code excerpt, terminal output, or other actual asset was created or evaluated.
- No final visual value, implementation detail, asset pipeline, tool, package manager, or dependency was selected.
- No external source, repository, deployment, or network was accessed.
- Only this decision record and `docs/09-task-list.md` were authorized for DEC-03B closure.
- Implementation, asset selection, public content, publication, deployment, and downstream task activation remain separately gated.
