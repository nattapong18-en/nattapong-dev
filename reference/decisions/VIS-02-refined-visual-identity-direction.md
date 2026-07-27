# VIS-02 — Refined Visual Identity Direction

# Status

- **Decision ID:** VIS-02
- **Status:** Approved
- **Decision owner:** Nattapong
- **Scope:** Refined visual identity direction for the completed First Visual Vertical
- **Implementation authorized:** No
- **Owner approval required:** No — recorded below

This decision refines, but does not replace, the Approved [VIS-01 visual direction](VIS-01-nattapong-visual-direction.md). It approves direction and bounded reversible implementation values only. It does not authorize a color, type, spacing, motion, component, route, or asset change.

# Owner Approval Record

Nattapong approved the refined direction with these selections:

- **1A — Palette:** Warm paper page foundation; mineral teal as the primary evidence, link, navigation, and technical signal; and amber as the limitation and verification-boundary signal.
- **2B — Technical accent:** **Medium**. Technical labels, dividers, metadata hierarchy, and Evidence Trace differentiation may be clearly visible, but content remains editorial and technical styling must not become dashboard chrome, terminal visuals, dense control surfaces, decorative grids, excessive badges, neon styling, project-specific themes, or ornamental engineering diagrams.
- **3B — Motion:** **Minimal CSS-only feedback**. Short, restrained feedback may clarify an existing link, focus state, or Evidence Trace relationship without JavaScript, hover-only meaning, delay, movement, reordering, or content loss.
- **4B — Typography:** **Refined system-font stack**. Local system fonts may receive clearer role assignment while Thai/English readability, static rendering, and the external-font boundary remain intact.

This approval does not authorize implementation, new routes, broader product scope, content changes, packages, configuration, assets, or deployment. A separate bounded implementation authorization remains required.

# Context and Evidence Boundary

The completed First Visual Vertical remains limited to `/`, `/projects/`, and `/projects/booking-api-source-review/`; its completion state is recorded in the [Task List](../../docs/09-task-list.md). The current implementation is readable, calm, static-first, responsive, and evidence-led. Owner feedback accepts that direction, retains `nattapong.dev` as the shared header identity, and retains `Nattapong Sangsana` in the homepage introduction.

This proposal is governed by [VIS-01](VIS-01-nattapong-visual-direction.md), the [Design DNA](../design-dna.md), the [design system](../../docs/02-design-system.md), [layout specification](../../docs/03-layout-spec.md), [component specification](../../docs/04-component-spec.md), and [motion specification](../../docs/06-animation-spec.md). Reference research is a source of bounded lessons, not a source of copyable visual material.

# Decision Summary

The approved refinement is a **warm, measured editorial signal system**: long-form pages keep their quiet paper-like field and generous reading rhythm, while a single mineral-teal signal and a restrained amber boundary make navigation, evidence, and uncertainty easier to recognize. This adds a distinct authored character beyond the neutral initial foundation while preserving VIS-01's semantic order, static completeness, Evidence Trace, and honest student context.

# Refined Identity Thesis

`nattapong.dev` should feel like a carefully kept engineering fieldbook: warm enough to be personal, precise enough to make each claim traceable, and deliberately quiet enough that limitations remain as legible as accomplishments.

# Personality Hierarchy

## Primary

- **Honest** — evidence, verification, and limits remain more prominent than polish.
- **Precise** — type, spacing, borders, and accent use explain information roles.
- **Curious** — the presentation leaves room for learning directions and open work without staging certainty.

## Supporting

- **Calm** — light surfaces, controlled measure, and low visual noise protect sustained reading.
- **Human** — authorship appears through selection, proportion, and edited rhythm rather than invented personality.
- **Grounded** — warm material cues and visible boundaries keep technical detail connected to the actual record.

## Explicit anti-traits

- Promotional
- Performative
- Authoritative
- Agency-like
- Dashboard-like

“Grounded” is an approved supporting trait. It reinforces the existing Honest, Calm, and Human direction; it must not turn the site toward luxury, corporate polish, or professional-status signalling.

# Reference Contribution Matrix

| Reference | Lesson used | Proposed application | Adaptation for nattapong.dev | Must not copy | Influence |
| --- | --- | --- | --- | --- | --- |
| [Apple research](../inspiration/apple/analysis.md) | Hierarchy and whitespace can isolate one message at a time. | Protect the homepage lead, page introductions, and quiet navigation. | Use editorial prose and evidence rather than product launches or image-led promotion. | Product-page composition, signature blue, product marketing, cinematic pacing. | Structural, visual |
| [Linear research](../inspiration/linear/analysis.md) | Labels, state, and bounded technical density can make complex information scannable. | Sharpen metadata, Evidence Trace labels, dividers, and information-role spacing. | Keep labels readable and attached to actual content; use a light, personal field. | Dark application shell, glowing product frames, tiny technical labels, SaaS authority. | Structural, visual |
| [Vercel research](../inspiration/vercel/analysis.md) | Structural restraint can make engineering relationships legible. | Use one evidence-specific surface and one restrained signal color for real reviewed material. | Evidence remains source-bounded; no deployment or infrastructure implication is added. | Monochrome grid branding, terminal panels, deployment-dashboard language, corporate developer posture. | Structural, visual |
| [Aristide Benoist research](../inspiration/aristide-benoist/analysis.md) | Authorship can come from controlled asymmetry, scale, and coordinated restraint. | Use selective expressive heading scale and nonessential editorial framing. | Collapse to normal reading flow on narrow screens; retain conventional navigation and complete static links. | Cursor replacement, cinematic transitions, creative-agency framing, image-led hierarchy, motion signatures. | Structural, visual, motion restraint |

[Figma](../inspiration/figma/analysis.md), [Notion](../inspiration/notion/analysis.md), [Raycast](../inspiration/raycast/analysis.md), and [Stripe](../inspiration/stripe/analysis.md) were inventoried but add no separate active visual role for this three-route scope. Their useful system-consistency, modularity, workflow, and relationship lessons are already bounded by the shared grammar, Evidence Trace, and static content requirements; their product, dark, gradient, or asset-led patterns are not adopted.

# Approved Color Direction

The following exact values are **approved, reversible implementation values** for the next separately authorized bounded implementation. They are not permanent immutable design-system tokens, do not create dark-mode equivalents, and still require accessibility validation after implementation.

| Semantic token | Proposed value | Intended use | Reason and contrast relationship |
| --- | --- | --- | --- |
| `--color-page` | `#F4F1E8` | Page field | Warm paper-like base gives the editorial system a personal material cue without adding imagery. |
| `--color-surface` | `#FFFDF8` | Header active state and quiet raised reading surfaces | Separates orientation from the page field with a small, calm value shift. |
| `--color-evidence-surface` | `#E5F0EA` | Genuine reviewed-evidence grouping only | A pale mineral surface distinguishes support without making a dashboard panel. |
| `--color-limitation-surface` | `#F8EDE2` | Limitation grouping only | A restrained warm boundary keeps uncertainty visible without treating it as an error state. |
| `--color-text` | `#1D2924` | Primary prose and headings | Calculated against `--color-page`: **13.33:1**. |
| `--color-text-secondary` | `#4B5C54` | Context labels and secondary metadata | Calculated against `--color-page`: **6.29:1**; metadata remains readable rather than faint. |
| `--color-border` | `#C8D1CA` | Dividers and ordinary grouping | Provides structure without card-wall density; never carries meaning alone. |
| `--color-accent` | `#126A59` | Links, current route indicator, evidence edge rule | Calculated against `--color-page`: **5.75:1** and against `--color-evidence-surface`: **5.56:1**. |
| `--color-focus` | `#A84708` | Visible keyboard focus outline | Calculated against `--color-page`: **5.21:1**; use with a non-color focus shape. |
| `--color-limitation-text` | `#7A3E12` | Limitation heading or strong label only | Calculated against `--color-limitation-surface`: **7.21:1**; labels and prose still state the limit in words. |

These local contrast calculations check important foreground/background pairs only; they are design inputs, not a claim of formal WCAG conformance. Links, focus, evidence, and limitations must retain labels, underline/border treatment, or semantic structure so no relationship depends on color alone. The palette intentionally avoids Apple blue, Linear's dark treatment, Vercel monochrome, Stripe gradients, and project-specific accents.

# Approved Technical-Accent Level

The approved level is **Medium**. The next separately authorized implementation may use restrained technical labels, stronger Evidence Trace differentiation, precise dividers and metadata hierarchy, selective mineral-teal accent, and limited monospace or technical text roles when they are semantically useful. These accents must support the editorial engineering journal; they must not become dashboard chrome, fake terminals, dense control surfaces, decorative grids, excessive badges, neon styling, project-specific themes, or ornamental engineering diagrams.

# Approved Typography Direction

The approved direction is a **refined system-font stack**. The next separately authorized implementation may adjust local stack ordering, role assignment, weight, line height, letter spacing, responsive scale, and a local monospace stack for semantically useful technical identifiers. No external family, font download, remote font request, commercial-font assumption, or font dependency is approved.

| Role | Proposed character and implementation direction |
| --- | --- |
| Display / H1 | Use the readable system sans at selective expressive scale, medium-to-bold weight, tight but safe line rhythm, and no ornamental display face. The scale establishes orientation, not professional authority. |
| Section heading | Use the same family with a clear step down from H1, strong weight contrast, and consistent alignment so a long record remains skimmable. |
| Body | Retain a neutral system sans stack with Thai-capable fallbacks; use a controlled reading measure and generous line-height for English, Thai, and mixed content. |
| Metadata | Use smaller but still comfortable text, a measured weight, and a muted color that preserves readable contrast. It may be compact, never tiny or badge-like. |
| Technical identifier / code | Retain a compatible system monospace only for authentic identifiers, commands, technical labels, and evidence references; it must not become decorative developer texture. |
| Link | Keep visible underlines or an equally persistent non-color affordance; accent color reinforces, rather than creates, link recognition. |

The next implementation may use a refined system stack such as `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Tahoma, sans-serif`, with a compatible `ui-monospace` stack. This does not guarantee that every fallback is installed. External fonts remain deferred and require a separate owner decision; final values remain bounded implementation decisions.

# Spatial and Composition Direction

- Keep the current owner-approved whitespace. Space separates an orientation, a claim, and its evidence; it must not be filled with decorative content.
- Preserve a controlled prose measure for sustained reading and permit a wider evidence measure only where Evidence Trace labels or source relationships need it.
- Use a stable left alignment and recurring section edges. A thin divider or restrained edge rule may introduce a technical relationship; it should not produce an application-grid background.
- Keep section rhythm asymmetric by information role: broad around identity and major questions; compact within evidence, metadata, and limitations.
- Allow controlled asymmetry only for nonessential homepage or Project-index framing, such as a heading occupying more visual weight than its adjacent orientation material. Essential text, links, facts, limitations, and source order remain normal semantic flow.
- At tablet, mobile, and 200% zoom, collapse every nonessential multi-region composition to a single predictable reading sequence. No identity cue may depend on a wide screen or hover.

# Surface and Component Treatment

| Area | Proposed treatment | Technical accents allowed | Technical accents prohibited |
| --- | --- | --- | --- |
| Shared header | Keep `nattapong.dev` as the compact, calm home link; make current route recognition use text, shape, and accent together. | Thin divider and restrained current-route edge. | Product navigation, extra destinations, logo spectacle, hiding header on scroll. |
| Homepage orientation | Keep the name in the introductory prose; give the page title and public-record scope more editorial rhythm than decoration. | One small context label and a clear Projects link. | Résumé modules, metrics, social-control cluster, hero media. |
| Projects index | Keep an editorial list with purpose before metadata; use spacing and one divider to make the record legible with one or more projects. | Underlined title links and quiet facts. | Equal card wall, decorative badges, project-specific color themes. |
| Project introduction | Lead with purpose, current result, and verification boundary before narrative depth. | Context label, readable fact grouping. | Product launch framing, fake runtime status, dashboard layout. |
| Evidence Trace | Retain its semantic claim → support → limitation sequence; use mineral surface and an accent edge only for actual reviewed support. | Evidence surface, clear source links, limitation boundary. | Terminal frame, pipeline graphic, status-console density, color-only mapping. |
| Limitations and focus | Limitations remain warm but plain-language; focus is immediately visible on every surface. | Amber label/outline plus text labels. | Warning theatrics, pulsing, low-contrast focus, color-only warning. |

# Motion and Interaction Direction

Static document completeness remains the default. The approved motion level is **Minimal CSS-only feedback**. A later separately authorized implementation may use short CSS transitions on color, border, underline, opacity, or similarly reversible non-layout properties only. It does not authorize motion implementation and does not change VIS-01's prohibition on routine page-entry animation.

## Permitted now: static state treatment

| Pattern | Trigger and purpose | Motion | No-JavaScript and reduced-motion behavior | Information requirement |
| --- | --- | --- | --- | --- |
| Focus and current-route state | Keyboard focus or current location; orient a visitor. | Immediate state change; no delayed or animated focus. | Identical semantic link and visible focus state. | Focus and current location remain recognizable without color or movement. |
| Evidence relationship | Normal document reading; explain the relationship through headings and order. | None. | Identical static Evidence Trace. | Claim, support/source, and limitation remain complete in HTML. |

## Permitted in a later separately authorized implementation

| Pattern | Trigger and purpose | Proposed duration and easing character | No-JavaScript and reduced-motion behavior | Information requirement |
| --- | --- | --- | --- | --- |
| Link underline or border response | Pointer hover or keyboard focus; confirm an available destination. | 120–160 ms, quiet ease-out, no layout shift. | Link remains visibly identifiable; reduced motion makes the final state immediate. | Link purpose and focus must already be clear in the static state. |
| Local Evidence Trace target emphasis | An existing in-page claim/support anchor, if a real navigation need is established. | 160–220 ms, single ease-out emphasis, no repeat. | Normal fragment navigation and a persistent target outline remain sufficient; reduced motion is immediate. | The applies-to relationship remains text-labelled and adjacent without emphasis. |

## Prohibited or deferred

- Section-entry reveals, route or page transitions, index-to-detail transitions, masked or split-text reveals, scroll-triggered effects, animated backgrounds, and cinematic introductions remain prohibited or deferred under VIS-01.
- The header must not hide, chase scroll position, or require interaction for navigation.
- Browser JavaScript, client directives, custom cursor replacement, parallax, inertial scrolling, scroll hijacking, continuous movement, WebGL, Canvas decoration, and animation libraries remain prohibited or deferred.
- Any future coordinated timing is a separate owner decision and must preserve normal links, static content, no-JavaScript use, reduced-motion equivalence, and document order.

# Responsive Identity

The identity is carried by hierarchy, tone, spacing roles, and semantic accents at every width. Wide screens may give an introduction or index a little more compositional tension; tablet, mobile, and 200% zoom resolve that tension into one column without changing reading order. Long identifiers, source locators, Thai/English text, and limitation statements must wrap or contain safely. The header wraps in document order rather than becoming a JavaScript menu.

# Accessibility Safeguards

- Preserve semantic headings, landmarks, standard links, and one normal reading order.
- Maintain readable body size, line-height, measure, and contrast; review mixed Thai/English rendering with real content before any final type choice.
- Make focus immediate, high-contrast, and shape-based as well as color-based.
- Keep links recognisable without hover and make limitation/evidence relationships explicit in text and headings.
- Keep Evidence Trace complete without CSS or JavaScript; never use accent color, borders, position, or motion as its sole explanation.
- Preserve no-JavaScript navigation, reduced-motion completeness, reflow, and long-string handling before any optional enhancement.

# Proposed Token Categories

Keep a later implementation small and semantic:

1. **Color:** page, surface, evidence, limitation, text, secondary text, border, accent, focus.
2. **Typography:** display, body, metadata, technical; a small responsive type scale and line-height roles.
3. **Spacing and measure:** content, component, section, major; reading and evidence measures.
4. **Border and radius:** divider, evidence edge, limitation boundary, restrained shared radius.
5. **Focus:** color, outline thickness, offset, and persistent link treatment.
6. **Motion:** only the approved small CSS-only feedback duration/easing category.

These categories are proposed to avoid arbitrary one-off values. They do not authorize a complete token system, dark mode, or a design-library expansion.

# Rejected Alternatives

1. **Dark technical dashboard.** It would make the personal record feel like a product console, compete with long-form reading, and invite unsupported runtime or operational authority.
2. **Monochrome Vercel-style developer brand.** It would erase the warm personal quality and risk copying a corporate infrastructure aesthetic rather than clarifying actual evidence.
3. **Apple-style product marketing.** It would depend on imagery, launch pacing, and polished claims the current approved content neither needs nor supports.
4. **Aristide-style motion-first portfolio.** It would make interaction the proof, increase no-JavaScript and reduced-motion risk, and shift the site toward agency or award-oriented presentation.
5. **Colorful card-based developer portfolio.** It would fragment the shared editorial grammar into generic visual modules and make limited real content appear inflated.

# Approved First Implementation Boundary

After a separate bounded implementation authorization, the first application slice must remain inside the completed three-route vertical. Likely candidates are:

- `src/styles/global.css` for the small semantic color, type, spacing, focus, and responsive-default layer.
- `src/components/SiteHeader.astro` only if static active-route or identity markup needs a semantic adjustment.
- `src/components/EvidenceTrace.astro` only if its existing semantic structure needs a bounded visual hook.
- `src/pages/index.astro`, `src/pages/projects/index.astro`, and `src/pages/projects/[slug].astro` only when a real markup change is necessary; no content copy may be duplicated or rewritten.

That future task must not add routes, content, assets, screenshots, diagrams, dark mode, external fonts, browser JavaScript, framework integrations, a page-transition router, analytics, deployment, or a visual redesign. This record authorizes none of those changes.

# Owner Review Outcome

The owner selected 1A warm paper/mineral teal/amber, 2B Medium technical accent, 3B Minimal CSS-only feedback, and 4B refined system-font stack. The current three-route website remains unchanged pending a separately authorized implementation task.

# Non-Authorization

VIS-02 is Approved direction only. It does not authorize CSS, components, pages, routes, design tokens, fonts, motion, assets, content, packages, configuration, deployment, analytics, or public claims. A separate implementation authorization is required before any visual change.
