# Purpose of This Specification

This document defines motion roles, transition behavior, interaction feedback, spatial and navigation continuity, technical-sequence rules, media behavior, reduced-motion requirements, and animation boundaries for nattapong.dev.

Motion must support the identity and content of a calm, precise, thoughtful personal engineering website. It should explain change, confirm action, preserve orientation, or reveal a verified relationship while remaining subordinate to reading and evidence.

This specification does not define implementation code, final timing values, easing curves, libraries, framework APIs, routes, or page layouts. Motion decisions that depend on real behavior remain unresolved until supported by content, verified artifacts, prototypes, accessibility testing, and performance testing.

# Motion Goals

- Clarify what changed and why.
- Preserve orientation during navigation, disclosure, and responsive reorganization.
- Make cause and effect understandable.
- Confirm that input was recognized and communicate its result.
- Reveal optional depth without withholding essential information.
- Explain verified technical or editorial sequences.
- Support fair comparison between states or alternatives.
- Respect reading pace, selection, focus, and scroll position.
- Maintain an equivalent accessible experience without motion.
- Protect loading, rendering, battery, and interaction performance.
- Remain visually restrained and proportionate to importance.
- Avoid generic portfolio, SaaS-demo, agency, and copied motion aesthetics.

# Motion Principles

- **Meaning before movement:** Every animation must answer what it explains or confirms.
- **Content available before animation:** Core text, state, and navigation cannot wait for enhancement.
- **Motion proportional to importance:** Small local changes receive less motion than rare explanatory sequences.
- **Shortest useful motion:** Stop once the relationship or feedback is understandable.
- **Stable spatial logic:** Movement must match real origin, destination, hierarchy, and causality.
- **User control:** Time-based evidence and media require pause, replay, stop, or direct state selection when relevant.
- **Interruption safety:** Navigation, new input, focus change, and cancellation must leave a valid stable state.
- **Reduced motion as an equivalent experience:** Preserve meaning, feedback, and orientation rather than merely disabling effects.
- **No motion-only meaning:** Text, structure, state, or a static alternative must communicate the same information.
- **No constant ambient motion:** Reading should have a stable resting environment.
- **No animation added only for polish:** Visual finish alone is insufficient justification.
- **No copied signature transitions:** Reference-site motion patterns must not become the identity of nattapong.dev.

# Motion Classification

- **State transition — generally appropriate:** Clarifies a control, selection, expansion, validation, or status change.
- **Interaction feedback — generally appropriate:** Confirms input, completion, failure, or reversibility.
- **Navigation continuity — conditional:** Useful only when it preserves origin and destination without delaying access.
- **Disclosure — conditional:** Appropriate for manageable optional depth when critical content remains visible.
- **Content insertion and removal — conditional:** May identify what changed while protecting layout and focus.
- **Comparison — conditional:** Useful when a controlled transition clarifies differences better than static presentation.
- **Technical sequence — conditional and evidence-dependent:** Appropriate only for verified behavior with user control and a static baseline.
- **Media playback — conditional:** Appropriate when time or movement is part of the evidence.
- **Scroll-linked behavior — strongly discouraged:** Allowed only for a verified sequence or relationship that cannot be communicated as clearly otherwise.
- **Ambient motion — highly restricted:** Requires authentic relevance, low cost, no reading competition, and a stable alternative.
- **Decorative motion — not part of the default system:** Requires exceptional evidence of value and full review.

# Motion Intensity Model

- **None:** Static presentation. Default for prose, metadata, status, most evidence, and any interaction where motion adds no understanding.
- **Minimal:** Immediate or nearly imperceptible feedback that reinforces affordance, focus, or a small state change.
- **Functional:** Clearly visible local transition used for disclosure, selection, insertion, navigation feedback, or control state.
- **Explanatory:** User-controlled sequence that teaches workflow, causality, comparison, or technical behavior.
- **Prominent:** Rare motion that temporarily becomes a primary explanatory focus because the content genuinely depends on sequence or transformation.

Choose the lowest intensity that communicates the meaning. Prominent motion requires strong verified content, a user goal, a static overview, reduced-motion equivalence, and performance justification. Intensity does not imply duration, distance, or visual drama.

# Temporal Hierarchy

Immediate feedback has first priority because it confirms input. Local state changes follow and should settle before unrelated motion begins. Section-level transitions should remain subordinate to current reading. Page-level navigation should never delay destination access. Multi-step technical sequences require deliberate initiation and control. Long-running processes need persistent status rather than continuous attention-demanding movement. Background loading should remain ignorable.

When events overlap, prioritize user input, focus, error or completion state, navigation, then optional explanation. Pause, cancel, shorten, or skip lower-priority motion. Multiple unrelated regions must not animate simultaneously, and background motion must not compete with a newly changed state.

# Spatial Continuity

- Motion should reveal a truthful origin and destination.
- Shared-element continuity may be used only when the same item genuinely persists between contexts and testing shows improved orientation.
- Expansion and collapse should remain anchored to the trigger or content boundary.
- Parent-to-child movement may reinforce hierarchy but must not imply ownership that the content model does not support.
- Overlays should appear from a stable contextual layer rather than seem to move from unrelated content.
- Media enlargement should retain a visible relationship to its source and return focus there on close.
- Navigation changes should preserve stable site identity and destination context.
- Responsive reorganization should not animate large structural movement merely because viewport geometry changed.

Reject movement between visually similar but unrelated items, morphing that implies false continuity, and spatial effects that contradict semantic or focus order.

# Navigation Motion

Global navigation may use minimal state feedback but should remain visually stable. Page changes need no transition by default; any transition must preserve destination identity and load content immediately. Direct-entry pages must work without prior animation context. Parent and back navigation should preserve predictable browser behavior rather than simulate a custom history.

Mobile navigation may use functional opening and closing motion with immediate focus management and a reduced-motion state. Local navigation and deep links should move or jump predictably while keeping the destination heading visible. Section jumps must not disorient users or hide content behind persistent controls. Related-content transitions should not imply a stronger relationship than the accompanying text.

Navigation remains fast, keyboard-accessible, and fully understandable when motion is unavailable. Final page-transition behavior remains optional and unresolved.

# Page Entry and Exit Behavior

Page-level entry or exit motion is justified only when it materially preserves navigation continuity or identifies a meaningful context change. Core content must never wait for decorative animation. Site navigation and page identity must be stable and immediately available.

Entry motion should not replay on every revisit, history movement, or restored tab without a reason. Direct entry must show the complete destination without depending on an origin animation. Browser back and forward behavior must restore expected context and scroll. Reduced-motion users receive immediate content and state.

Reject full-screen reveal sequences, forced intros, unnecessary loading screens, delayed headings, route-blocking transitions, and large branded page wipes.

# Scroll Behavior

Native scrolling is the default. Anchor navigation, deep links, history restoration, and back navigation must preserve predictable browser behavior. Long-form reading should remain freely scrollable and should not be divided into forced scenes.

Sticky elements may support orientation only when they do not cover content, trap focus, or consume excessive mobile space. Horizontal evidence should use a clear contained region, visible access, and a nonhorizontal alternative when necessary. Mobile scroll must remain stable around media, controls, disclosures, and browser viewport changes.

Enhanced scrolling requires a specific accessibility and comprehension benefit, must respect user preferences, remain interruptible, and preserve destination focus. Reject scroll hijacking, forced snapping in long-form content, reading-disruptive parallax, content visibility dependent on scroll animation, and global forced smooth scrolling.

# Scroll-Triggered Motion

Scroll-triggered motion may be considered only when it clarifies a verified sequence, reveals a relationship, supports a controlled comparison, or explains technical behavior. Content must already be accessible, the motion must not delay reading, and it should run once when repetition adds no value.

Reverse scrolling must not produce unstable or contradictory states. A static overview and reduced-motion equivalent are required. Triggers should not fire repeatedly near thresholds or animate several sections at once. Generic fade-up, scale-in, or stagger animation on every section is rejected.

# Section Reveal Behavior

Sections should be available in the document before enhancement. A reveal must not change meaning, reading order, focus, or linkability. Headings cannot be temporarily hidden from keyboard, search, assistive technology, or direct links.

Repeated sections should not all receive identical entrance motion merely to create rhythm. Long pages should favor stable reading over entrance effects. If prototypes show a useful reveal role, it should be minimal, limited, and easy to skip. Routine section-reveal behavior remains unresolved rather than assumed.

# Interaction Feedback

- **Buttons and icon buttons:** Confirm press and completion without moving nearby layout.
- **Links:** Reinforce hover, focus, active, and visited state without becoming animated buttons.
- **Copy controls:** Confirm success or failure with persistent text/state long enough to understand.
- **Theme controls:** Communicate chosen theme and avoid a disruptive full-page flash if themes are supported.
- **Media controls:** Show play, pause, stop, progress, and unavailable states immediately.
- **Disclosure triggers:** Expose expanded state before or alongside content change.
- **Filters and search:** Identify pending, applied, empty, and failed results while preserving focus.
- **Form submission:** Confirm recognition, prevent accidental duplicate action, and communicate success or error.
- **Destructive actions:** Make consequence and reversibility clear without theatrical warning motion.

Feedback must communicate recognition, current state, completion, failure, and reversibility where relevant through text and structure. Motion only reinforces those signals.

# Hover Motion

On hover-capable inputs, subtle motion may reinforce interactivity, direction, selection, relationship, or media inspection. The same information and state must be available through keyboard focus and touch behavior.

Reject large translations, bounce, constant icon movement, tilt, magnetic attraction, layout-changing scale, hidden hover-only information, and animation on noninteractive content. Hover effects must stop when hover ends and must not make targets move away from the pointer.

# Focus Motion

Focus visibility must be immediate. Motion may gently reinforce focus arrival but cannot delay, replace, fade out, or obscure the focus indicator. Focus changes must not shift layout or cause unrelated movement.

Keyboard traversal should remain calm and predictable, including through navigation, disclosures, evidence controls, and overlays. Reduced-motion behavior must preserve the same or stronger focus clarity without transition.

# Active and Selected States

Pressed controls, current navigation, filters, tabs, chosen options, expanded content, and current media may use minimal or functional transition into a stable resting state. The final state must remain visible after motion completes and be communicated through text, semantics, shape, or structure as well as color.

Motion must not be the only indication of selection, nor should selected items continuously pulse. State changes should preserve target position and focus.

# Disclosure Motion

Expand and collapse motion may support optional technical depth, long logs, additional methodology, secondary references, historical details, or future FAQs when justified.

The trigger must state its current expansion state. Direction and content origin should be predictable. Focus must remain stable unless the user explicitly enters the revealed content. Height changes should not move the trigger out of reach or lose the reader's place. Large long-form regions should open immediately or with minimal transition rather than animate through their full height.

Critical status, limitations, verification, and evidence remain outside collapsed regions. Reduced-motion behavior uses immediate state change. Deep-linked disclosed content should open directly when necessary.

# Overlay Motion

Dialogs, menus, popovers, tooltips, expanded media, and mobile navigation layers may use minimal motion to clarify their temporary layer and origin. Focus management happens immediately and independently of animation. Background content and scroll remain stable.

Escape, dismissal, and return focus must work whether motion completes, is interrupted, or is disabled. Reduced-motion behavior uses immediate or minimal state change. Avoid exaggerated scale, blur, elastic movement, and long fades. Inline presentation is preferred when an overlay adds no clear interaction or space benefit.

# Content Insertion and Removal

Loading results, search or filter results, form feedback, chat examples, dynamic evidence, removed items, validation messages, and errors should change in a way that makes the affected region identifiable without moving unrelated targets.

Reserve space where the structure is known, place messages close to their cause, and preserve focus or announce the change as appropriate. Removal should not cause the next target to jump under the pointer or focus before intent is clear. Animation must not obscure which content arrived, changed, or disappeared. A stable immediate state is the reduced-motion baseline.

# Loading Motion

Loading states may apply to technically necessary page data, media, evidence, search, forms, optional embeds, or dynamic data. Core identity, text, navigation, status, captions, and limitations should appear before optional media.

- **Static placeholder:** Preferred when dimensions and context are known and progress motion adds no value.
- **Spinner:** Suitable for short indeterminate action local to a control or small region, with text when delay matters.
- **Progress indicator:** Suitable only when real progress can be measured or meaningful stages can be reported.
- **Skeleton:** Conditional; use only when the final structure is known, the wait is real, and it reduces instability rather than simulating activity.

Use honest progress language, stable reserved space, and ignorable motion. Reject fake progress, decorative loading over available content, and endless animated placeholders. Reduced motion uses static or minimally changing indicators.

# Success, Warning, and Error Motion

Success, warning, error, incomplete, To be verified, unavailable, and archived states require readable labels and structural treatment. Motion may draw attention to a new result once, but it should settle immediately.

Ordinary validation errors must not shake fields or flash. Warnings and verification gaps must not pulse. Archived and incomplete content should not animate as failure. Repeated or alarming motion is reserved for no ordinary state in this website. Screen-reader announcements and focus placement communicate changes independently of motion.

# Empty and Incomplete States

No content, missing deployment, unverified evidence, empty search results, incomplete case studies, unavailable repositories, broken media, and planned content should be communicated statically first with an honest explanation and relevant next step or return path.

Motion may confirm a filter reset or media fallback transition, but it must not make empty regions appear active or substantial. Do not animate placeholder projects, invented progress, or planned features.

# Evidence Motion

Motion may support screenshots, browser or mobile demonstrations, code, terminal output, API exchanges, diagrams, hardware evidence, tables, benchmarks, and research figures only when actual behavior, sequence, comparison, or change is the subject.

Every animated artifact requires purpose, verified source behavior, supported claim, conditions, user control, stable labels, caption, limitation, accessible alternative, and reduced-motion presentation. Tables, screenshots, and static research figures should not move merely because animation is available. Simulated technical evidence and unsupported sequences are prohibited.

# Code Motion

Appropriate code motion is limited to highlighting a referenced line, showing a small before-and-after change, stepping through a short verified execution sequence, or revealing explanation tied to specific code.

Code must remain readable in a stable state. Do not auto-scroll without explicit control, simulate typing, continuously animate syntax, or move line numbers and indentation. Sequences need step controls, a static alternative, reduced-motion mapping, and user-controlled replay.

# Terminal Motion

Terminal motion is allowed only for a real command sequence or process that cannot be understood as well from a transcript. It requires real commands and output, command-output distinction, explicit environment context, redaction, controllable playback, pause, replay, and a static transcript.

Fake typing, decorative blinking cursors, looping output, invented build success, and terminal motion used as atmosphere are prohibited. Reduced-motion users receive the transcript and final states directly.

# API Sequence Motion

Animation may explain a verified request, server handling, database interaction, Redis interaction, response, error path, or authentication context when sequence materially improves understanding. Every step and relationship must be confirmed from source or direct evidence.

The static baseline is a labeled diagram or step list with source, verification, and limitations. No Rust Booking API flow may be animated until exact endpoints, architecture, authentication behavior, database relationships, and Redis role relevant to that flow are verified. Animation must not fill evidence gaps.

# Diagram Motion

Architecture, sequence, data-flow, hardware, research, and comparison diagrams may animate a step-by-step sequence, flow direction, state change, controlled comparison, or layer reveal.

All require user control, stable labels, static overview, text alternative, reduced-motion step sequence, and a valid final state. Continuous particles, flowing decorative lines, position-only meaning, and inferred architecture are prohibited. Complex animation should be replaced by smaller controlled steps when clarity improves.

# Comparison Motion

Before-and-after, alternatives, benchmarks, browser behavior, model behavior, architecture choices, and research approaches may use motion only when shared criteria and controlled transition make a difference clearer.

Labels, conditions, units, sources, conclusions, and limitations remain visible. Users control the state or replay. Morphing must not imply equivalence, causality, or measured improvement that evidence does not support. A stable side-by-side or sequential alternative is required.

# Research Motion

Motion may distinguish sequence in a verified method or controlled comparison, but it must not imply certainty, causality, progress, or discovery beyond the research evidence. Source finding, Nattapong's interpretation, hypothesis, evidence, uncertainty, finding, and future work remain structurally labeled without depending on animation.

Graduation-project exploration must remain visibly unresolved, with no final topic selected. Animated scientific interfaces, model visualizations, or network effects must not make research preparation appear completed or validated.

# Learning Progress Motion

Motion may support earlier-versus-later understanding, a documented revision, a real milestone, or a verified connection to a project or research activity. Chronology and relationships must be supported by dates, artifacts, or retained reflection.

Reject animated skill bars, counters, streaks, gamified progress, constant timeline movement, and motion implying continuous improvement or mastery without evidence. A static progression or comparison is the default.

# Coursework Motion

Coursework simulations, diagrams, and laboratory evidence may use motion only when it explains an actual process, state transition, simulation, or measured result and the source permits publication.

The animation must retain course context, assignment constraints, role, and evidence. Motion must not make guided or academic work resemble a commercial product or independent production system.

# Rust Booking API Motion Direction

Possible later motion uses include a verified API request-response sequence, registration-related flow, temporary-data explanation, database interaction, error behavior, build or test result, and architecture sequence after verification.

Every use must preserve Functional MVP wording, educational and non-production-ready status, the absence of automated tests, registration-only authentication wording, and Deployment To be verified. Do not animate unverified endpoints, schema, password hashing, JWT behavior, authorization, Redis expiration or exact role, transactions, booking conflicts, deployment, or architecture.

Motion should explain bounded evidence, never simulate a complete running production system.

# CourtFit Motion Direction

Possible uses include verified streaming-response behavior, Stop and Retry behavior, provider-switching state, responsive interface change, chat interaction, and API-key flow after verification.

Every use must preserve educational and experimental wording and the absence of a verified product database, real-time price or stock, authentication, checkout, and persistent chat history. API-key storage and request behavior remain To be verified; the live URL remains To be verified. Browser evidence is currently limited to manual Chrome, Firefox, and Safari testing without confirmed versions, devices, or full compatibility.

Do not animate provider internals, key flow, security behavior, recommendation accuracy, or deployment until verified from source and direct testing.

# Media Playback

Video, screen recordings, animated demonstrations, and GIF-like media need a clear explanatory purpose, poster image, accessible controls, pause, replay, captions, transcript or equivalent description, and playback-speed control when the content density makes it useful.

Autoplay with sound is prohibited. Autoplaying or looping motion near long-form reading is strongly discouraged and must stop or remain user-controlled. GIF-like media should be implemented or presented in a way that permits pause and avoids uncontrolled repetition. Prefer static evidence whenever time-based media does not add understanding.

# Ambient Motion

Ambient motion is highly restricted. A subtle identity or background behavior may be considered only if it has authentic relevance to Nattapong's work, does not compete with reading, stops or becomes static, remains inexpensive, respects reduced motion, and avoids generic developer effects.

Particle fields, constant gradients, floating blobs, infinite marquees, cursor followers, code rain, decorative network graphs, animated noise, glow pulses, and moving grid backgrounds are prohibited.

# Decorative Motion

Decorative motion is not part of the default system. It may be considered only if a real recurring visual motif emerges from Nattapong's work and passes content, accessibility, performance, originality, and maintenance review.

No motif is established or invented in this specification.

# Motion and Typography

Headings, body text, numbers, metadata, language changes, and mixed Thai-English content should remain readable and stable. Text updates may use minimal transition only when it helps identify a real change without delaying access.

Reject per-character title animation, split-text reveals, typewriter effects, scrambled text, rapid counters, moving metadata, and variable-font animation used as spectacle. Motion must not damage Thai mark placement, segmentation, line rhythm, or mixed-language rendering. Text animation must not cause reflow or make copy temporarily inaccessible.

# Motion and Layout Stability

Controls, focus targets, headings, and reading position should remain stable during motion. Reserve dimensions for loading images, videos, demonstrations, and dynamic evidence where structure is known. Insert messages near their cause without shifting unrelated targets.

Expanded evidence should retain trigger position or provide deliberate scroll adjustment. Font and image loading must not create animated-looking layout shifts. Navigation and responsive changes should settle into a predictable final layout. Interrupted animation must always resolve to a valid state.

# Motion and Performance

Prefer visual changes that do not repeatedly recalculate layout, but choose implementation only after constraints are known. Large media, video, scroll listeners, continuous motion, filters, and complex client-side sequences require strong explanatory value.

Motion should stop in background tabs, avoid unnecessary battery and graphics cost, and degrade on low-powered or constrained devices without losing content. Optional enhancement failure must leave stable state, feedback, navigation, and evidence. Remove motion whenever its rendering, loading, maintenance, or battery cost exceeds its explanatory value.

No numeric budget or implementation technique is selected here.

# Reduced-Motion Strategy

Reduced motion is an equivalent design mode, not the absence of feedback.

- Use immediate state changes as the default substitute.
- Use a restrained crossfade only when it does not create discomfort and provides useful continuity.
- Convert explanatory animations into static sequences or user-controlled steps.
- Remove parallax, spatial page transitions, automatic smooth scrolling, looping motion, and ambient movement.
- Keep overlays stable with immediate open and close states.
- Simplify navigation transitions without removing location feedback.
- Present diagrams and evidence statically with the same labels, conclusions, and limitations.
- Preserve success, error, selection, loading, and focus feedback through text and structure.
- Preserve scroll position, destination orientation, and state announcements.

Reduced-motion behavior must be designed and tested independently for every component that uses motion.

# Motion Accessibility Requirements

- Respect the user's motion preference without requiring a site-specific opt-out.
- Ensure all interactive sequences are keyboard controllable.
- Provide pause, stop, replay, and direct state selection where time-based content matters.
- Communicate no essential meaning through motion alone.
- Avoid unexpected movement, focus relocation, scroll movement, and target displacement.
- Preserve focus and scroll stability when content changes.
- Minimize cognitive load and provide stable resting states.
- Avoid motion patterns likely to cause vestibular discomfort, including large spatial movement and parallax.
- Avoid flashing, rapid alternation, and repeated attention-demanding change.
- Announce relevant dynamic states to assistive technology without redundant noise.
- Provide captions, transcripts, descriptions, and static alternatives for media.
- Give touch users the same control and information as hover and pointer users.

# Responsive Motion Behavior

On narrow screens and touch devices, reduce movement distance, sequence complexity, and simultaneous animation. Responsive reordering should generally happen without theatrical motion and must preserve semantic reading order.

Mobile navigation requires simple stable transitions and immediate focus. Wide technical evidence should use step views, static variants, or contained user control rather than animated scaling. Rotation and viewport changes should settle without replaying entry animation. Low-powered devices may receive simplified or no motion while retaining meaning. Final breakpoints remain unresolved.

# Motion Token Direction

Conceptual motion-token categories are:

- **Duration roles:** Immediate, local feedback, functional transition, explanatory step, and longer process communication.
- **Delay roles:** Usually none; limited sequencing delay only when it clarifies order.
- **Easing roles:** Feedback, entry, exit, spatial continuity, and direct state change.
- **Distance roles:** Minimal local movement, bounded structural movement, and no-movement mapping.
- **Opacity roles:** Reinforcement or layer transition without hiding essential content.
- **Scale roles:** Restricted overlay or control feedback, never general page spectacle.
- **Sequence roles:** Ordered explanatory steps and interruption behavior.
- **Feedback roles:** Recognition, completion, warning, failure, and reversal.
- **Navigation roles:** Context continuity and immediate destination behavior.
- **Disclosure roles:** Expand, collapse, and large-content immediate mapping.
- **Reduced-motion mappings:** Equivalent immediate, static, or stepped treatment for every motion role.

Components should consume semantic roles rather than raw values. Final values and curves require prototypes and testing.

# Motion Naming Principles

Future names should describe purpose, relationship, state, context, and intensity. A name should remain accurate if duration, curve, implementation, or page location changes.

Avoid names based on specific pages, reference brands, raw duration, visual trends, project names without reusable meaning, or animation libraries. Do not create names such as “Apple reveal,” “hero-fast,” or framework-specific transitions. The final catalogue is not defined here.

# Motion Testing Direction

Future testing should evaluate whether motion communicates intended meaning, feels proportionate, can be interrupted, preserves keyboard and focus behavior, supports touch, respects reduced motion, announces state correctly, preserves scroll restoration, handles direct entry and browser history, adapts responsively, works on low-powered devices, and fails safely.

Tests require real Booking API and CourtFit artifacts, verified technical sequences, real code and terminal output, diagrams, Thai and English content, long pages, overlays or disclosures that are actually justified, and optional enhancement failure. No testing tools are selected.

# Motion Anti-Patterns

- Animation on every section or generic fade-up reveals.
- Scroll hijacking, forced global smooth scrolling, or forced long-page snapping.
- Typewriter, split-text, scrambled-title, or rapid counter effects.
- Parallax backgrounds, cursor followers, magnetic buttons, and infinite marquees.
- Looping decorative motion, code rain, particles, glow pulses, and moving grids.
- Fake terminal typing or looping command output.
- Pulsing status, maturity, or verification badges.
- Excessive spring physics, large hover translations, and layout-shifting hover effects.
- Navigation or selection state communicated only through motion.
- Content hidden while waiting for an animation.
- Animation of unverified architecture, behavior, results, or research.
- Separate project motion languages that fragment the website.
- Copied motion signatures from reference websites.
- Selecting an animation library before motion needs are verified.
- Motion too complex for the current content and maintenance capacity.

# Motion Acceptance Criteria

- **Purpose:** Every motion has a documented content, state, feedback, orientation, or evidence responsibility.
- **Meaning:** The movement accurately represents the relationship or change.
- **Orientation:** Origin, destination, focus, scroll, and final state remain understandable.
- **Feedback:** Input and outcomes are recognized immediately through persistent signals.
- **Reading continuity:** Motion does not delay, interrupt, obscure, or repeatedly compete with content.
- **Evidence clarity:** Animated evidence is real, verified, controlled, captioned, limited, and statically understandable.
- **Interruption safety:** New input, navigation, cancellation, and preference changes leave a valid state.
- **User control:** Time-based and explanatory motion provides necessary pause, stop, replay, or state selection.
- **Reduced-motion equivalence:** Meaning, feedback, and orientation remain complete in the reduced mode.
- **Accessibility:** Keyboard, focus, announcements, captions, touch, cognitive load, and vestibular safety are addressed.
- **Responsive behavior:** Motion simplifies appropriately without changing semantic order.
- **Performance:** Cost remains proportional to explanatory value and optional failure preserves content.
- **Maintainability:** Roles and sequences remain few, documented, reusable, and testable.
- **Project compatibility:** The same foundation supports both projects without animating unknown behavior.
- **Thai and English support:** Text and mixed-language content remain stable and readable.
- **Originality:** Motion follows authentic content rather than templates or reference signatures.
- **Restraint:** The stable resting experience remains primary.

# Open Motion Questions

The following require real content, wireframes, interactive prototypes, representative artifacts, verified technical sequences, real code and terminal output, diagrams, mobile prototypes, reduced-motion testing, accessibility testing, performance testing, and implementation constraints:

- Does the website need any page-transition motion, or is immediate navigation clearer?
- Should ordinary sections reveal at all after testing with long-form content?
- Which existing components need state-transition motion beyond immediate feedback?
- Which disclosures contain enough content to justify transition rather than immediate change?
- Which verified technical diagrams benefit from a user-controlled sequence?
- Which CourtFit streaming, Stop, Retry, provider-switching, responsive, chat, and API-key behaviors are verified, safe, and useful to demonstrate?
- Which Booking API request, registration, data, Redis, error, build, test, or architecture flows can be animated after repository verification?
- Is any ambient motion justified by an authentic recurring motif in the real work?
- Which videos, screenshots, diagrams, code examples, and terminal transcripts communicate better statically?
- Where should reduced-motion behavior use immediate change versus static steps or a restrained crossfade?
- Which motion roles recur enough to justify semantic tokens?
- What animation complexity is sustainable for long-term maintenance and content updates?
- Which interactions become clearer, faster, or more accessible with no motion?
- Which motion must remain nonexistent until evidence, content volume, or interaction need changes?

No open motion decision should be resolved from trend preference, a reference site, or invented project behavior.
