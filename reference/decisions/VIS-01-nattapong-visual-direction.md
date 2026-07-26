# VIS-01 — Nattapong Visual Direction

# Status

- **Decision ID:** VIS-01
- **Status:** Approved
- **Decision owner:** Nattapong
- **Decision date:** 2026-07-27
- **Scope:** Visual direction and boundaries
- **Nature:** Governing documentation decision
- **Implementation authorized:** No

# Context

nattapong.dev is a personal engineering website: a calm, structured public record of Projects, Research, Learning, and engineering direction. It is not merely a portfolio or a professional product-marketing site. Its visual direction must make evidence, uncertainty, limitations, and next questions understandable without presenting student work as professional authority.

VIS-01 records the approved direction prepared through VIS-01A and reviewed through VIS-01A-R. Those were preparation and review tasks, not separate governing decisions.

# Governing Center and Related Decisions

Nattapong is the governing center of the visual direction. The design must be controlled by approved public identity and content, evidence boundaries, project limitations, student context, lifecycle and review state, accessibility requirements, and the rendering and routing decisions below. Reference websites may influence bounded responsibilities, but may not replace this governing center or be expressed as design-influence percentages.

This decision is informed by:

- [DEC-01 — Framework and Rendering Strategy](DEC-01-stack-and-rendering.md): static HTML remains the default.
- [DEC-02 — Content Model and Authoring Direction](DEC-02-content-storage-authoring-bilingual.md): content, translation, review, and evidence boundaries.
- [DEC-03 — Theme and Visual Evidence Direction](DEC-03-theme-and-asset-direction.md): light-first shared foundation and evidence-led technical surfaces.
- [DEC-04 — Testing and Quality Direction](DEC-04-testing-quality-and-supported-environments.md): quality and accessibility responsibilities.
- [DEC-05 — Deployment, Analytics, and Privacy Direction](DEC-05-deployment-analytics-and-privacy-direction.md): privacy and deployment boundaries.
- [DEC-06 — URL and Language Routing Direction](DEC-06-url-and-language-routing-direction.md): static route and language constraints.
- [FND-01 — Semantic Content Foundation Scope](FND-01-semantic-content-foundation-scope.md): structured content, review, verification, and limitation semantics.
- [Design DNA](../design-dna.md): durable design principles and originality constraints.

# Decision

## Primary visual model

The primary visual model is **Evidence-led editorial engineering journal**.

The site uses a calm, structured visual system to document Projects, Research, Learning, and engineering direction. It must help readers distinguish evidence, uncertainty, limitations, and next questions rather than relying on portfolio spectacle or product-marketing presentation.

## Visual thesis

> “A calm engineering field journal where a visitor first understands who Nattapong is and what he is learning, then can follow each statement through evidence, limitations, and the next open question. Disciplined editorial space conveys seriousness; visible uncertainty conveys honesty; restrained system annotations make the record personal without pretending professional mastery.”

## Personality

The primary personality is:

- Honest
- Precise
- Curious

Supporting personality is:

- Calm
- Human

The anti-personality is:

- Promotional
- Performative
- Authoritative

“Human” may appear through authored rhythm, selection, proportion, and rare asymmetry. It must not depend on fake personality, cinematic spectacle, or casual claims unsupported by evidence.

## Reference responsibility map

Reference research informs bounded responsibilities only:

| Reference | May inform | Must not become |
| --- | --- | --- |
| Apple | clarity, content isolation, hierarchy, restraint, and whitespace discipline | product-page imitation or cinematic product marketing |
| Linear | system precision, structured metadata, state clarity, and bounded technical density | an application-shell or dark SaaS-dashboard imitation |
| Vercel | developer-facing communication, readable technical presentation, and structured evidence surfaces | a deployment-dashboard or corporate developer-brand imitation |
| Aristide Benoist | restrained authorship: controlled asymmetry, editorial rhythm, selective expressive scale, and a future optional criterion for coordinated interaction | a template for claims, information architecture, evidence standards, accessibility, routes, visibility, status, or professional positioning |

Aristide Benoist also informs awareness of mobile recomposition, semantic-link preservation, no-JavaScript risk, motion and interaction restraint, and anti-copy boundaries. It does not authorize cinematic presentation or experimental navigation.

> “Aristide Benoist informs restrained authorship: controlled asymmetry, editorial rhythm, selective expressive scale, and a future optional criterion for coordinated interaction. It must not determine claims, information architecture, evidence standards, accessibility, routes, visibility, status, or professional positioning.”

Figma remains a research reference where already supported. This decision gives it no new governing responsibility.

## Composition and layout

The site uses a shared light-first foundation, editorial reading structure, clear page purpose before expression, a stable underlying grid, and normal semantic reading order for essential content. Technical surfaces are inset only when they contain genuine reviewed evidence. All content families share one visual grammar.

> “Controlled asymmetry may frame nonessential orientation or project rhythm only; essential content remains in normal reading order. Coordinated timing is a future review criterion, not a required v0.1 feature; no index-to-detail transition belongs in the First Visual Vertical.”

Controlled asymmetry may be considered only for nonessential homepage orientation, nonessential Project-index rhythm, selective large editorial type, or rare grid crossing that does not affect comprehension. It must not affect public navigation, evidence, sources, limitations, unavailable states, verification, body-copy reading order, keyboard order, or screen-reader order.

Off-screen essential text, unreadable overlap, gesture-dependent composition, fake dashboards, fake terminals, professional control-room styling, and decorative engineering theatre are not allowed.

## Surface strategy

Use a light-first shared visual environment with calm editorial surfaces for orientation and prose. Use restrained contrasting technical surfaces only for genuine evidence; those surfaces must communicate content role rather than decoration. Project imagery must not dominate when reviewed imagery does not exist, and a project must not become an independent visual theme or microsite.

Exact colors are deferred. Dark mode remains deferred.

## Typography direction

The direction combines a restrained editorial voice, a readable technical sans-serif, and a compatible monospace for authentic technical material. Thai, English, and mixed-language readability are required. Selective expressive scale is allowed while body copy and metadata remain comfortably readable.

Monospace may be used for authentic commands, code, identifiers, technical labels, and structured evidence. It must not be decorative “developer” styling. Exact font families, weights, sizes, and line-height values are deferred.

## Spacing and density

Use broad space for identity, major questions, reflective prose, and major section transitions. Use compact density for evidence, sources, verification, metadata, limitations, and technical relationships.

Spacing follows information role rather than forcing every section into the same component rhythm. Exact spacing tokens and grid measurements are deferred.

## Content-family expression

About, Projects, Research, and Learning share navigation, typography, surface grammar, state language, evidence grammar, accessibility behavior, and responsive principles. They may differ only by information emphasis and must not become separate brands, visual themes, or microsites.

- **About** emphasizes identity, direction, and boundaries.
- **Projects** emphasize purpose, implementation context, verification, and limitations.
- **Research** emphasizes open questions, uncertainty, possible directions, and evidence boundaries.
- **Learning** emphasizes the studied concept, exercise or implementation, current understanding, and remaining gaps.

## Evidence strategy

The interface must distinguish claim, current state, verification, evidence or source, limitation, and next question. Evidence should remain adjacent to the statement it supports where practical.

The visual hierarchy must never imply that source review is runtime validation, an unfinished project is complete, an exploration is a final research topic, learning is expertise, a private or unavailable repository is publicly accessible, or a screenshot proves functionality not otherwise verified.

## Signature motif: Evidence Trace

**Evidence Trace** is the approved signature motif: the restrained semantic and visual relationship:

> claim → evidence/source → limitation or next question

It must work without JavaScript, animation, or images; remain understandable in semantic HTML; remain usable with keyboard and screen reader; avoid color-only meaning; and not become a decorative diagram or imitate a terminal, dashboard, control panel, or system monitor.

Aristide’s “experience as evidence” principle reinforces care in execution, but visual performance must never replace factual evidence. Layer Boundary and State Transition Ledger remain explored alternatives, not the approved primary motif.

## Motion and interaction

No motion is required for v0.1. Any future motion requires separate approval and may serve only local feedback, orientation, meaningful state change, or short optional continuity. Coordinated timing is a future review criterion, not a current feature requirement.

The following remain deferred: index-to-detail transition, page-transition continuity, masked reveals, text-splitting animation, animation libraries, motion durations, easing values, and client-side navigation.

The following remain prohibited unless a future governing decision explicitly reconsiders them: long loaders, cinematic introductions, custom cursor replacement, inertial scrolling, scroll hijacking, parallax, continuous decorative motion, hidden gesture navigation, essential content hidden behind reveals, copied timing or choreography, routine page-entry animation, and WebGL or Canvas used as visual decoration.

No index-to-detail transition belongs in the First Visual Vertical.

## Accessibility and performance

The baseline constraints are semantic HTML first; full keyboard access; visible focus; no hover-only meaning; readable contrast; semantic links; meaningful document order; complete core content and navigation without JavaScript; complete reduced-motion behavior; mobile recomposition rather than desktop shrinking; no unnecessary client-side runtime; no unnecessary heavy media; and no essential information communicated only through animation or color.

The corrected Aristide reference reinforces the risks of heavy JavaScript dependence, weak static fallback, nonstandard navigation, small metadata, excessive motion, unpredictable interaction, and reduced performance on lower-powered devices. These are guardrails, not features to reproduce.

## Anti-copy boundaries

Do not copy exact layouts, branded visual devices, typography, colors, spacing values, transitions, timing, easing, cursor behavior, motion choreography, image effects, project microsite fragmentation, or marketing language from any reference.

Specifically, do not copy creative-agency positioning, award-oriented theatre, cinematic project presentation, client-conversion framing, WebGL-heavy presentation, hidden interaction discovery, project-specific independent themes, Apple product-page imitation, Linear application-shell imitation, Vercel deployment-dashboard imitation, or fake technical interfaces.

The design must remain recognizably Nattapong’s through truthful content, evidence structure, restrained authorship, and consistent editorial rhythm.

# First Visual Vertical Boundary

The approved First Visual Vertical is a future implementation boundary, not implementation authorization.

| Route | Content responsibility |
| --- | --- |
| `/` | Bounded About orientation |
| `/projects/` | Editorial Project index |
| `/projects/booking-api-source-review/` | Booking API source-review project detail |

It must prove the shared light-first foundation, homepage orientation, editorial Project index, Project detail, Evidence Trace, structured evidence surfaces, visible limitations, responsive recomposition, keyboard access, visible focus, reduced-motion completeness, no-JavaScript use, and one shared visual grammar.

Controlled asymmetry may appear only in nonessential orientation or Project-index framing.

The boundary excludes `/about/` detail implementation, Research pages, Learning pages, screenshots, unreviewed or fabricated diagrams, custom cursor, WebGL, Canvas, cinematic transitions, index-to-detail transition, motion demonstration, project-specific visual themes, invented evidence, unsupported repository links, and client-side navigation added only for visual continuity.

These routes are not implemented. They remain the approved boundary for a separately authorized implementation task.

# Consequences and Trade-offs

Positive consequences:

- Coherent identity across content families.
- Truthful hierarchy and explicit evidence boundaries.
- Room for restrained authorship within static and accessible constraints.
- Clear implementation guardrails and reduced risk of reference imitation.
- Reduced risk of presenting student work as professional authority.

Accepted trade-offs:

- Less visual spectacle in v0.1.
- Limited imagery until reviewed assets exist.
- No motion-led portfolio identity at the foundation stage.
- Expression comes primarily from typography, rhythm, evidence structure, and carefully bounded asymmetry.
- Advanced interaction requires a future separate decision.

# Deferred Decisions

The following remain deferred: exact fonts, exact type scale, final colors, dark mode, exact spacing tokens, final grid values, detailed responsive breakpoints, imagery, illustrations, screenshots, diagrams, project-specific accents, animation values, easing, animation libraries, page transitions, client-side navigation, advanced interaction, WebGL, Canvas, and visual implementation details.

# Non-Authorization

VIS-01 does not authorize routes, pages, layouts, components, CSS, design tokens, fonts, assets, images, screenshots, diagrams, animation, client-side navigation, package installation, deployment, analytics, content changes, schema changes, validator changes, public claims, or repository publication.

All implementation remains Blocked until separately authorized.
