# Aristide Benoist Portfolio — Visual and Interaction Design Research

> **Reference:** Aristide Benoist
> **Document type:** Visual and interaction design research
> **Status:** Reference material only; not an approved design decision for `nattapong.dev`
> **Evidence basis:** User-provided analysis containing source-reported observations, secondary-source context, inferences, and estimates
> **Observation date:** Not recorded in the source document
> **Measurement note:** All dimensions are estimates, not official specifications
> **Verification note:** Time-sensitive claims and linked sources were not reverified during this revision
> **Usage rule:** Reuse principles, not layouts, brand devices, copy, typography, colors, or interaction sequences

## Evidence Labels

This document uses the following labels:

- **Source-reported observation:** A behavior or characteristic described as observed in the original analysis.
- **Secondary-source context:** Background information attributed to an external profile or indexed page.
- **Inference:** A reasoned interpretation that was not directly verified.
- **Estimate:** An approximate visual measurement.
- **Recommendation:** A transformed lesson for `nattapong.dev`, constrained by its approved direction.

# Website Overview

Aristide Benoist’s portfolio is presented as a highly experimental showcase for an independent creative developer working with motion, interaction, and bespoke digital experiences.

The site is not framed as a conventional résumé or detailed engineering archive. Its interface acts as part of the work sample: the visitor experiences the type of motion-led frontend craft that the portfolio is intended to represent.

The portfolio prioritizes:

- Selected projects
- Motion and interaction craftsmanship
- Large-format art direction
- Minimal biographical information
- Professional credibility
- Direct paths to project exploration and contact

**Source-reported observation:** At the time of the original review, the site relied heavily on JavaScript, while the static fallback exposed very little usable content. This suggests that transitions, animation, and client-side rendering were treated as central parts of the experience rather than optional enhancement. ([aristidebenoist.com][1])

**Secondary-source context:** The original analysis describes Benoist as an independent developer with long-term experience creating bespoke websites. This context helps explain the site’s confident positioning, but it is not itself evidence about layout, interaction quality, or technical implementation. Any reuse of this biographical claim should be reverified. ([LinkedIn][2])

# Design Philosophy

The strongest design principle is **experience as evidence**.

Instead of relying only on claims about creative-development ability, the portfolio attempts to demonstrate that ability through:

- Unusual navigation
- Cinematic transitions
- Custom pointer behavior
- Large responsive typography
- Continuous visual movement
- Image distortion and masking
- Precise timing
- Coordination between design and engineering

The site treats layout, motion, input behavior, loading, and transitions as one art-directed system.

Its aesthetic is deliberately less neutral than conventional product or documentation websites. It favors personality, rhythm, tension, and surprise over immediate familiarity.

A second principle is selective presentation. The portfolio does not attempt to explain every project or expose every technical detail. It presents a curated body of work designed to establish a distinctive creative identity.

## Principle to Extract

For `nattapong.dev`, the reusable lesson is not “add more effects.” The useful principle is:

> Let the interface demonstrate the same care, structure, and engineering judgment that the content describes.

For Nattapong’s site, this demonstration must remain compatible with static HTML, honest evidence, readable technical detail, and complete no-JavaScript access.

# Target Audience

**Inference from the original analysis:** The portfolio appears oriented toward audiences such as:

- Creative agencies
- Art directors
- Digital design studios
- Production teams
- Brands seeking custom interactive work
- Designers seeking a development partner
- Award-oriented creative-web audiences

The site assumes visitors already understand the value of creative frontend work.

It is not primarily optimized for:

- Visitors scanning a technology checklist
- Learners seeking tutorials
- Readers looking for detailed engineering documentation
- Users who need immediate access to structured factual content

Its primary goal appears to be emotional impact and specialist differentiation.

**Secondary-source context:** The source document references professional recognition to explain this positioning. Such recognition is contextual and time-sensitive; it should not be treated as a reusable design requirement for `nattapong.dev`. ([LinkedIn][2])

# Information Architecture

The portfolio is described as having a deliberately shallow structure:

1. Introductory identity
2. Selected work
3. Individual project experiences
4. About or professional information
5. Recognition
6. Contact and social links

Projects act as the primary navigation objects.

Instead of dividing work into many categories, the experience encourages movement directly between selected projects.

**Source-reported observation:** Indexed project pages under Benoist’s domain include examples such as Canals, Jenny Johannesson, TM, and earlier portfolio versions. ([aristidebenoist.com][3])

## Principle to Extract

A shallow structure can reduce clutter when the content set is carefully curated.

For `nattapong.dev`, this should be transformed into:

- A clear global structure
- Predictable family routes
- Editorial indexes rather than a card wall
- Distinct detail pages that still share one visual foundation

Projects, Research, Learning, and About must not become separate microsites with unrelated navigation or visual systems.

# Layout and Grid

The original analysis describes a flexible editorial grid rather than a conventional card-based portfolio.

**Estimates from the source:**

- Maximum visual canvas: approximately `1,400–1,800 px`
- Outer margins: approximately `24–60 px`
- Conceptual grid: approximately `8–12 columns`
- Main text width: approximately `500–750 px`
- Project imagery width: often `70–100%` of the viewport
- Major section spacing: approximately `120–240 px`

Elements may cross grid boundaries. Oversized text, cropped imagery, asymmetrical alignment, and off-screen composition create visual tension.

The grid supplies discipline, but it may remain visually hidden because motion alters scale, position, clipping, and depth.

## Principle to Extract

The reusable principle is **controlled freedom inside a stable underlying grid**.

For `nattapong.dev`:

- Use a stable reading structure.
- Permit rare asymmetry only when it clarifies hierarchy, evidence, or sequence.
- Do not let text overlap or off-screen composition reduce access to factual content.
- Do not copy Benoist’s estimated dimensions as design tokens.

# Visual Hierarchy

The source describes a hierarchy dominated by:

1. Project imagery
2. Oversized project names
3. Motion
4. Current navigation state
5. Small metadata
6. Supporting copy

Motion itself becomes a hierarchy tool. An active project may enlarge, move toward the center, sharpen, reveal more color, or displace surrounding elements.

Typography and imagery may intentionally compete, producing a poster-like composition.

Small labels provide contrast against the expressive content and may identify years, roles, project numbers, or categories.

## Principle to Extract

For `nattapong.dev`, motion and scale must never outrank the factual record.

The transformed hierarchy should be:

1. Page purpose
2. Supported claim or question
3. Current status and verification
4. Evidence or source context
5. Limitation or next question
6. Optional expressive detail

# Navigation

**Inference from the source:** Navigation appears interaction-led rather than based only on a conventional persistent header.

Patterns associated with the reviewed portfolio include:

- Full-screen menus
- Project-to-project navigation
- Drag- or wheel-based browsing
- Animated transitions
- Custom cursor states
- Minimal persistent labels
- Index-based project selection

An earlier secondary source describes full-page navigation and a strong focus on the work collection. ([img1.wsimg.com][4])

This approach can increase memorability, but it also increases the cost of learning the interface.

## Principle to Extract

For `nattapong.dev`:

- Keep global navigation conventional and immediately understandable.
- Preserve semantic links beneath any optional enhancement.
- Never require gestures to discover core routes.
- Use focus and hover feedback as reinforcement, not as the only explanation.
- Do not replace the standard cursor.
- Do not introduce client-side routing merely to imitate continuity.

# Hero Section

**Inference from the original analysis:** The hero likely functions as both an introduction and an immediate demonstration of creative direction.

Possible characteristics described in the source include:

- Minimal identity statement
- Independent-developer positioning
- Large animated typography
- Project preview or abstract visual
- Invitation to explore
- Cursor or scroll feedback

**Estimates from the source:**

- Primary headline: approximately `72–160 px` on desktop
- Mobile headline: approximately `42–76 px`
- Supporting labels: approximately `11–15 px`
- Hero height: approximately `90–100vh`

These values are not official and should not be reused directly.

## Principle to Extract

For `nattapong.dev`, the first screen should establish:

- Nattapong’s identity as a Computer Engineering Student
- The site’s purpose as a record of Projects, Research, and Learning
- One clear path into substantive content
- A restrained signature, not a cinematic introduction

The hero must not imply professional status, software-developer employment, client availability, or expertise beyond the approved content.

# Key Components

## Project Preview

The source describes a project preview combining image, title, metadata, and interaction state.

A restrained default state may reveal additional imagery or scale during hover, drag, or scroll.

### Adaptation Boundary

For `nattapong.dev`, project previews should remain semantic links and must work without hover, animation, or imagery.

Use:

- Title
- Purpose
- Current state
- Verification
- Limitation
- Optional reviewed evidence

Do not require screenshots or decorative motion.

## Full-Screen Transition

The source describes transitions that connect an index preview to a project page, creating spatial continuity.

### Adaptation Boundary

A future transition may be considered only when:

- The static navigation already works
- Reduced motion is supported
- The transition is short and optional
- It does not delay content
- It is not copied from Benoist
- It proves an engineering purpose rather than decorative ambition

No such transition is approved for the current v0.1 implementation.

## Custom Cursor

The original analysis describes cursor states such as:

- View
- Open
- Drag
- Next
- Close

### Adaptation Boundary

Do not replace the standard cursor on `nattapong.dev`.

A standard pointer, visible focus, text labels, and semantic controls must communicate actions directly.

## Project Index

The source describes a compact editorial index using project names, numbers, dates, and metadata.

### Adaptation Boundary

This is one of the most relevant reusable principles.

For `nattapong.dev`, the Project index may become an edited record list with varied information depth rather than a wall of identical cards.

Only approved metadata should appear. Do not invent project numbers, dates, roles, or technologies when the content model does not support them.

## Recognition Summary

The source discusses awards as evidence of Benoist’s professional standing.

### Adaptation Boundary

This is not applicable to `nattapong.dev` v0.1.

Do not create awards, achievement, milestone, testimonial, or credibility sections without approved evidence.

## Project Microsite

The source describes project pages that may adopt distinct art direction. ([mank.aristidebenoist.com][5])

### Adaptation Boundary

Do not make each Nattapong project a separate visual system.

Variation may occur in evidence density or approved media, but typography, navigation, state language, accessibility, and the shared page foundation must remain consistent.

# Typography

The source presents typography as expressive and structural.

Reported characteristics include:

- Large sans-serif display text
- Tight line-height
- Strong contrast between display and metadata
- Uppercase labels
- Deliberate letter spacing
- Text used as a moving visual surface

**Estimates from the source:**

- Display titles: approximately `72–160 px`
- Section titles: approximately `40–80 px`
- Body copy: approximately `16–22 px`
- Navigation: approximately `12–16 px`
- Metadata: approximately `10–13 px`

## Principle to Extract

For `nattapong.dev`:

- Use typography to establish editorial rhythm.
- Keep body text and metadata readable.
- Use expressive scale selectively.
- Do not use text motion as a substitute for hierarchy.
- Preserve Thai, English, and mixed-language readability.
- Use monospace only for authentic technical material.
- Do not copy Benoist’s typefaces, proportions, or exact scale.

# Color System

The source describes a restrained foundation that allows project imagery to dominate.

Possible characteristics include:

- Warm white or off-white
- Near-black
- Neutral gray
- Muted borders
- Project-specific accent colors

**Inference:** The environment may change color when a project becomes active.

## Principle to Extract

For `nattapong.dev`:

- Preserve the approved light-first foundation.
- Use contrasting technical surfaces only for genuine structured evidence.
- Do not let every project create a separate theme.
- Do not depend on screenshots for color.
- Do not copy a monochrome creative-portfolio identity.
- Final color values remain a later decision.

# Spacing and White Space

The source describes whitespace as a tool for pacing and suspense.

**Estimates from the source:**

- Outer viewport padding: approximately `24–60 px`
- Major vertical gaps: approximately `120–240 px`
- Metadata gaps: approximately `8–20 px`
- Project sequence separation: approximately `80–180 px`

In Benoist’s work, empty space may create room for movement, reveals, or objects entering and leaving the viewport.

## Principle to Extract

For `nattapong.dev`, whitespace should serve comprehension rather than spectacle.

Use broad space around:

- Identity
- Section transitions
- Reflective prose
- Major questions

Use compact density for:

- Metadata
- Verification
- Sources
- Evidence
- Limitations

Do not copy the estimated spacing values directly.

# Motion and Interaction

Motion is presented as the defining feature of the reviewed portfolio.

The source lists possible techniques such as:

- Smooth or inertial movement
- Image displacement
- WebGL or canvas effects
- Masked image reveals
- Text splitting
- Scale interpolation
- Parallax
- Page-transition choreography
- Hover distortion
- Animated cursor states

The strongest principle is coordination: navigation, typography, images, and transitions follow one timing system rather than behaving as unrelated effects.

**Source-reported risk:** Heavy JavaScript dependence can leave little meaningful fallback content. ([aristidebenoist.com][1])

## Principle to Extract

For `nattapong.dev`:

- Motion may support feedback, orientation, or a verified sequence.
- Content must appear immediately.
- No long loader or cinematic intro.
- No scroll hijacking.
- No global forced smooth scrolling.
- No custom cursor.
- No continuous decorative motion.
- No essential information hidden behind reveals.
- Reduced-motion behavior must be complete.
- No-JavaScript behavior must preserve all content and navigation.
- Do not reproduce Benoist’s timing, easing, masks, transitions, or choreography.

# Responsive Strategy

**Inference from the source:** Mobile likely preserves the concept while reducing simultaneous complexity.

Possible adaptations include:

- Simplified transitions
- Fewer image layers
- Touch alternatives to hover
- Reduced typography scale
- Single-column sequences
- Shorter movement distances
- No custom cursor
- Lower media complexity

The important principle is that mobile layouts should be recomposed rather than merely scaled down.

## Principle to Extract

For `nattapong.dev`:

- Preserve semantic order: title, status, claim, evidence, limitation.
- Stack or simplify before shrinking readable content.
- Do not rely on hover.
- Remove nonessential motion on mobile.
- Do not make mobile users download effects intended only for desktop.

# Accessibility

The original analysis identifies several risks:

- Heavy JavaScript dependence
- Weak static fallback
- Large amounts of motion
- Nonstandard navigation
- Custom cursor behavior
- Small metadata
- Possible low contrast
- Visual previews without sufficient description

Responsible safeguards include:

- Reduced-motion support
- Keyboard-accessible navigation
- Visible focus
- Semantic links
- Descriptive alternative text
- Screen-reader-friendly summaries
- Functional non-WebGL fallback
- Standard cursor behavior where required

## Principle to Extract

For `nattapong.dev`, accessibility is a governing constraint, not an optional correction after visual design.

Core content must remain available without JavaScript, animation, imagery, or color interpretation.

# UX Strengths

Source-derived strengths include:

- The interface demonstrates creative-development ability directly.
- Motion and interaction are coordinated.
- The portfolio has a memorable identity.
- Projects receive strong visual focus.
- The shallow structure reduces informational clutter.
- Transitions create continuity.
- The site differentiates its author from conventional portfolios.

## Relevance to nattapong.dev

The most useful strengths are:

- Interface quality can become evidence of care.
- A shallow and deliberate structure can improve focus.
- One restrained signature can improve memorability.
- Motion is strongest when coordinated and purposeful.

# UX Weaknesses

Source-derived weaknesses include:

- Navigation may require learning.
- Animation may delay project information.
- JavaScript failure may leave weak fallback content.
- Performance may vary across devices.
- Motion-sensitive users may be uncomfortable.
- Custom interactions may reduce predictability.
- Visuals may overshadow technical contribution.
- Mobile cannot reproduce every desktop interaction.
- The experience may be excessive for visitors seeking quick facts.

## Relevance to nattapong.dev

These weaknesses are especially important because Nattapong’s site must communicate:

- Evidence boundaries
- Student context
- Technical decisions
- Research uncertainty
- Learning progress
- Limitations

Any visual treatment that delays or obscures those facts should be rejected.

# Principles to Adapt Carefully for nattapong.dev

Adapt these principles:

- Let interface quality demonstrate care and engineering judgment.
- Use one coordinated motion language rather than unrelated effects.
- Keep global navigation conventional and immediately understandable.
- Build editorial indexes rather than a wall of identical cards.
- Use expressive scale selectively to establish rhythm.
- Recompose layouts for mobile rather than shrinking desktop structures.
- Include reduced-motion behavior from the beginning.
- Preserve complete semantic links and content beneath any optional enhancement.
- Use project-detail pages for architecture, trade-offs, evidence, and limitations.
- Allow one restrained interaction or transition only after it proves a real navigational or explanatory benefit.
- Keep essential content visible before any interaction.
- Treat no-JavaScript completeness as a baseline requirement.

Do not adapt these source-specific patterns:

- Custom cursor replacement
- Hidden gesture-based navigation
- Heavy WebGL or canvas effects
- Cinematic project presentation
- Project-specific visual systems
- Image-led hierarchy without approved imagery
- Award or prestige framing
- Client-oriented conversion language
- Interaction designed primarily for creative-industry juries

# Things Not to Copy

- Do not reproduce Benoist’s transitions, typography, cursor style, navigation, or motion signature.
- Do not make the site unusable without JavaScript.
- Do not hide links behind gestures.
- Do not apply visual effects to every technical surface.
- Do not prioritize awards-style experimentation over engineering clarity.
- Do not omit architecture, responsibility, constraints, evidence, or limitations.
- Do not make mobile users load unnecessary desktop effects.
- Do not use long intro animations.
- Do not reduce body text or metadata below comfortable reading sizes.
- Do not make every project a different interface.
- Do not imitate creative-agency language.
- Do not present learning as expertise.
- Do not present static source review as runtime proof.
- Do not create awards, client, metric, or professional-credibility theatre.
- Do not use large imagery when no reviewed image exists.
- Do not let animation become the evidence.

# Recommendations for nattapong.dev

Use Aristide Benoist’s portfolio as a reference for **authorship and coordinated interaction**, but transform those ideas through Nattapong’s approved evidence-led, static-first direction.

Recommendations:

- Keep global navigation conventional and immediately understandable.
- Identify Nattapong as a **Computer Engineering Student** using only approved wording.
- Let the homepage demonstrate care through hierarchy, rhythm, typography, and truthful content—not cinematic effects.
- Use the approved Project index and Booking API detail as the first visual vertical.
- Present purpose, current state, verification, evidence, and limitations before optional expression.
- Use an editorial project index rather than identical cards.
- Keep the site primarily typographic until reviewed imagery or diagrams exist.
- Use a light shared foundation across About, Projects, Research, and Learning.
- Reserve contrasting technical surfaces for genuine evidence.
- Advance the **Evidence Trace** idea—claim → evidence/source → limitation or next question—as the site’s restrained signature motif.
- Consider at most one short, optional, nonessential transition after static navigation and reduced-motion behavior are complete.
- Ensure every enhanced link remains a standard semantic link.
- Recompose project layouts for mobile.
- Keep technical depth readable and adjacent to the claim it supports.
- Preserve the same navigation, state language, accessibility, and evidence grammar across all content families.
- Reject project-specific themes, fake interfaces, fake terminals, decorative screenshots, and invented metrics.
- Keep all final choices for fonts, colors, spacing, motion values, assets, and implementation in later approved decisions.

# Reference Notes

The following links were present in the source document. They were cleaned of tracking parameters where applicable but were not reverified during this revision.

[1]: https://aristidebenoist.com/ "Aristide Benoist — Independent developer"
[2]: https://www.linkedin.com/in/aristide-benoist "Aristide Benoist — LinkedIn"
[3]: https://aristidebenoist.com/jenny-johannesson "Aristide Benoist — Jenny Johannesson"
[4]: https://img1.wsimg.com/blobby/go/abb37b31-7c6a-4872-8e73-693e95a1ebb5/downloads/web_developer_website_examples.pdf "Web developer website examples"
[5]: https://mank.aristidebenoist.com/actors "Mank the Unmaking — Actors"
