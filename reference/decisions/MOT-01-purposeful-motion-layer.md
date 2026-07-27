# MOT-01 — Purposeful Motion Layer

# Status

- **Decision ID:** MOT-01
- **Status:** Approved
- **Decision owner:** Nattapong
- **Scope:** A minimal, CSS-only feedback layer for the existing static public routes
- **Implementation authorized:** Yes — bounded CSS-only scope recorded below
- **Owner approval required:** No — recorded below

This proposal builds on the Approved [VIS-01 visual direction](VIS-01-nattapong-visual-direction.md), Approved [VIS-02 refined visual identity direction](VIS-02-refined-visual-identity-direction.md), [Design DNA](../design-dna.md), and [animation specification](../../docs/06-animation-spec.md). It does not alter the current visual identity, content, routes, or static-first architecture.

# Owner Approval Record

Nattapong approved the CSS-only motion scope with these constraints:

- **Tokens:** fast `140ms`, standard `180ms`, `ease-out`, and a maximum translation of `1px`.
- **Primary feedback:** underline, color, and border feedback for existing navigation and text links.
- **Evidence Trace:** a persistent, restrained `:target` emphasis after intentional fragment navigation.
- **Translation:** permitted only on a clearly interactive bounded surface, never ordinary text links, never above `1px`, and not required by the first implementation.

This approval does not authorize browser JavaScript, packages, page transitions, content changes, route changes, a visual-identity redesign, deployment, or any broader motion system.

# Context

The published site is complete and usable without motion or browser JavaScript. VIS-02 approves only minimal CSS-only feedback: a transition may clarify an existing link, focus state, or Evidence Trace relationship, but meaning must already be present in the static document. This proposal defines the smallest next implementation slice rather than treating motion as a new expressive layer.

# Existing Motion Baseline

- Global links already transition color, underline thickness and offset, background, border, and shadow using `140ms` `ease-out` feedback.
- Hover strengthens an existing link underline without changing link purpose or layout.
- Keyboard focus is an immediate, visible amber outline; it is not motion-dependent.
- The skip link is visually off-screen until focused, then uses a transform to enter its usable position. It is an orientation affordance, not content animation.
- Evidence Trace has semantic claim and support fragment links, but no animated target emphasis. Its claim → evidence/source → limitation relationship is fully present in normal HTML order.
- `prefers-reduced-motion: reduce` makes CSS transitions effectively immediate and disables smooth scrolling behavior.

These are the current approved feedback defaults, not evidence for a broader animation system.

# Motion Principles

1. **Static state first.** Every destination, focus state, relationship, and limitation remains understandable before any transition begins and when transitions do not run.
2. **Feedback, not spectacle.** Motion may acknowledge an already available interaction or fragment target; it must not create a new reading sequence, hierarchy, or narrative pacing.
3. **Local and reversible.** Use only short transitions on existing interactive elements and non-layout properties. Do not move document regions or delay content.
4. **Keyboard-equivalent.** Pointer hover may enhance feedback, but focus receives an equally clear final state and no interaction depends on hover.
5. **Reduced motion is complete.** Reduced motion reaches the same final visual states immediately, with no lost orientation or information.

# Approved Behaviors

These behaviors are approved only for the bounded MOT-01B implementation. They remain optional feedback; static document meaning and focus visibility remain the source of truth.

| Area | Candidate behavior | Purpose | Static requirement |
| --- | --- | --- | --- |
| Navigation | Transition an existing underline, border, or text-color treatment on hover and focus for a real navigation link. Current-page state remains visibly marked with text/state and shape even without a transition. | Confirm an available destination and retain orientation. | Navigation labels and `aria-current` remain sufficient. |
| Text links | Refine the existing underline thickness or offset response only; do not change line box dimensions or move surrounding text. | Confirm that linked prose, source links, and record titles are actionable. | Underlines and understandable link text remain present before hover. |
| Evidence Trace | Add a single restrained `:target` background or border emphasis when an existing “Applies to” fragment link reaches its claim or support target. No pulse, flash, repeat, or automatic trigger. | Help a visitor retain orientation after intentional in-page navigation. | Claim labels, support headings, and explicit applicability text remain complete in DOM order. |
| Existing interactive surfaces | Where an actual existing link has a bounded surface or border, allow a color or border response. Translation is not a default behavior and must never make static evidence look clickable. | Confirm a real action without creating dashboard-like controls. | No static content receives an interactive appearance solely through motion. |

# Proposed Shared Motion Tokens

The first implementation should retain the existing feedback tempo and introduce no broad animation vocabulary:

```css
--motion-fast: 140ms;
--motion-standard: 180ms;
--motion-easing: ease-out;
--motion-translation-max: 1px;
```

- `140ms` aligns with the current `--duration-feedback` value for small link and navigation feedback.
- `180ms` is reserved for a one-time local Evidence Trace target emphasis; it remains within VIS-02's proposed `160–220ms` range.
- `ease-out` retains the existing feedback character rather than importing a branded timing curve.
- `1px` is a strict ceiling, not a default: navigation and text links should use no translation. Any use must be limited to an existing interactive surface and must not shift layout, obscure focus, or alter reading order.

# Reduced-Motion Contract

- Under `prefers-reduced-motion: reduce`, proposed transitions become effectively immediate (`0.01ms` or the existing equivalent) with no delay.
- The same hover, focus, current-page, and fragment-target final states remain visible; no state is removed to satisfy reduced motion.
- No smooth scrolling, repeated animation, automatic replay, or time-based content reveal is introduced.
- Skip-link access, keyboard focus, normal fragment navigation, and no-JavaScript rendering remain complete independently of transition support.

# Prohibited Motion

- Routine page-entry, section-entry, masked, fade-up, staggered, or split-text animation.
- Page, route, or index-to-detail transitions; client-side navigation; loading screens; or content held back until animation completes.
- Scroll reveal, scroll-triggered animation, parallax, inertial scrolling, scroll hijacking, animated backgrounds, continuous decorative movement, and ambient effects.
- Custom cursors, cursor replacement, WebGL, Canvas decoration, animation libraries, browser JavaScript, client directives, and motion runtimes.
- Flashing, pulsing, or repeated Evidence Trace emphasis; motion-only meaning; or translation that creates layout shift or makes noninteractive content look actionable.

# MOT-01B File Boundary

The approved implementation is CSS-only:

- `src/styles/global.css` — shared motion tokens, existing link/navigation feedback, target emphasis, and reduced-motion behavior.

Only if a verified semantic target hook is absent, MOT-01B may additionally modify:

- `src/components/EvidenceTrace.astro` — a bounded existing-target class or ID hook only; no content, relationship, or reading-order change.

`src/components/SiteHeader.astro` should remain unchanged unless a narrowly necessary existing-state class hook cannot be expressed by its present link and `aria-current` markup. No page, route, content, package, configuration, asset, or JavaScript file belongs in the proposed boundary.

# Validation Requirements

A separately authorized implementation must verify:

- `npm run sync`, `npm run check`, and static build continue to pass without adding browser JavaScript.
- The five approved public routes, semantic landmarks, headings, normal navigation, and no-JavaScript output remain unchanged.
- Keyboard Tab and Shift+Tab show visible focus on page, evidence, limitation, and navigation surfaces.
- Hover is optional; links and current-page state remain identifiable without it.
- Evidence Trace fragment navigation has a persistent, readable target state without flashing or repeated motion.
- Desktop, 320px, and 200%–400% reflow preserve wrapping, focus visibility, and no ordinary horizontal overflow.
- Reduced motion reaches all final states immediately and loses no content, relationship, or focus information.

# Implementation Record

MOT-01B implemented the approved shared CSS feedback in `src/styles/global.css`. Existing claim-heading fragment IDs were sufficient, so `src/components/EvidenceTrace.astro` remained unchanged. Translation was not used. Astro sync, check, and static build passed; local browser checks covered direct routes, 1440px and 320px reflow, visible keyboard focus, fragment targets, reduced motion, and JavaScript-disabled static output.

# Deferred Motion

Coordinated page continuity, any index-to-detail transition, scroll-independent section choreography, richer relationship visualization, and all browser-JavaScript or runtime-driven motion remain deferred. They require separate evidence of visitor value, accessibility and performance review, and a future owner decision; they are not MOT-01B candidates.

# Consequences

The approved implementation preserves the calm editorial system by making motion a local confirmation mechanism rather than a visual identity redesign. Richer motion remains deferred and requires a future owner decision.
