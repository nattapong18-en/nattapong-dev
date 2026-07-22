# Decision Record

**ID:** DEC-01  
**Scope:** Implementation stack and rendering strategy for nattapong.dev  
**Decision owner:** Nattapong  

This record evaluates the smallest technical foundation that can support the approved personal engineering website and records the decision owner's approved direction. Approval does not authorize implementation, dependency installation, scaffolding, or follow-on technology choices.

# Decision Status

Approved

- **Approved by:** Nattapong
- **Approval method:** Explicit user confirmation
- **Approval wording:** “Use Astro as the framework for nattapong.dev, use static HTML by default, add JavaScript only through locally justified islands, and require a new decision before introducing request-time server rendering or an application server.”

# Decision Question

Which implementation stack and rendering strategy provide the smallest, most maintainable, accessible, content-led, and extensible foundation for the currently approved scope of nattapong.dev?

# Audited Baseline

- The approved workspace is `/home/nattapaong/Project/Web/nattapong-dev-template`.
- GOV-02 established a recoverable local Git baseline on `main` at commit `73244b0` with no remote.
- The audit found no implementation source files, package manifest, lockfile, package manager, framework, language implementation, build configuration, quality tooling, or deployment configuration.
- Empty source-oriented directories do not establish an architecture and must not bias this decision.
- Planning-document technology names describe project content, not the implementation of nattapong.dev.
- The website will be maintained primarily by one person, so the selected foundation must minimize operational and conceptual overhead.
- The authorized GOV-03 task-list synchronization predated this record and was preserved through the decision process without changing the audited implementation baseline.

# Governing Requirements

- Generate durable, directly addressable pages for projects, research preparation, notes, experiments, learning, coursework, background, and contact information.
- Put readable content, status, limitations, and evidence ahead of decorative or application-like behavior.
- Support long-form Thai, English, and mixed Thai-English content without requiring JavaScript to read it.
- Produce semantic HTML that supports logical headings, landmarks, keyboard use, visible focus, zoom, reflow, assistive technology, and reduced-motion behavior.
- Keep core identity, navigation, prose, metadata, and evidence available when optional client JavaScript fails or is disabled.
- Support responsive images, screenshots, code, terminal transcripts, API evidence, diagrams, tables, comparisons, captions, and static alternatives.
- Allow narrowly scoped interactivity when it improves control or understanding.
- Preserve direct entry, stable URLs, browser navigation, and a meaningful static baseline.
- Avoid an unnecessary request-time server, broad hydration, speculative infrastructure, and dependencies without recurring need.
- Remain deployable without binding the project to a specific provider.
- Allow later justified expansion without building future product-scale capabilities now.

# Non-Requirements

The current scope does not justify:

- User authentication, server-side accounts, sessions, or protected pages.
- A database or continuously running application server for nattapong.dev.
- Request-time personalization or real-time content.
- Comments, a content-management interface, or collaborative authoring infrastructure.
- Complex search, filtering, feeds, or large archive infrastructure.
- Analytics, a contact form, or server-side form processing.
- Heavy animation, application-wide client state, or SPA navigation as a goal.
- Provider-specific runtime services.
- Server rendering merely because a framework supports it.

# Evaluation Criteria

- Fit with the personal engineering website's identity and non-goals.
- Static-first behavior and reliability without client JavaScript.
- Long-form, direct-entry, and content-led page support.
- Semantic HTML, accessibility, keyboard, focus, and reduced-motion implications.
- Thai, English, and mixed-language rendering.
- Responsive technical evidence and media presentation.
- Ability to isolate optional interactivity.
- Client JavaScript cost and clarity of client/server boundaries.
- Need for a server runtime and operational infrastructure.
- Build, local-development, and deployment complexity.
- Testing surface and failure modes.
- Compatibility with multiple possible content-authoring approaches without deciding DEC-02.
- Maintenance, dependency surface, upgrades, and conceptual burden for one person.
- Deployment portability, reversibility, and migration cost.
- Risk of over-engineering versus ability to add justified capabilities later.

# Options Considered

1. **Next.js using the App Router:** A React framework with file-based routing, Server Components by default, explicit Client Component boundaries, static export, and optional request-time server capabilities.
2. **Astro with interactive islands:** A content-oriented framework that prerenders pages to HTML by default and adds client JavaScript only to explicitly hydrated interactive islands.
3. **React with Vite as a client-rendered application:** A client-side React SPA built and bundled by Vite, with routing, static generation, and broader application architecture added separately if needed.

# Option 1 — Next.js App Router

**Core rendering model:** App Router pages and layouts are Server Components by default. Client Components create explicit browser-side boundaries. Next.js can statically export an HTML file for each compatible route, while its broader feature set also supports request-time rendering and server behavior.

**Static-first suitability:** Strong when deliberately configured for static export and kept within static-export constraints. Direct-entry pages can ship as HTML without requiring a continuously running Next.js server. However, the team must actively avoid reaching for dynamic framework features that the approved scope does not require.

**Selective client interactivity:** Strong. Small Client Component boundaries can contain state, event handlers, and browser APIs. The boundary is clear, but marking a module as client-side also moves its imported subtree into the client bundle, so boundaries require discipline.

**Server-runtime requirements:** None for a compatible static export. A server runtime becomes necessary only if later requirements use request-time data, cookies, server actions, request-dependent route handlers, or similar dynamic behavior. None is currently demonstrated.

**Content and long-form fit:** Good. It can render content-heavy pages, layouts, metadata, media, and static evidence. The framework is nevertheless oriented toward a broader React application model than the current website needs, and content authoring would still require a separate DEC-02 choice.

**Bilingual fit:** No inherent barrier. Thai and mixed-language quality depends on authored markup, language metadata, typography, wrapping, and testing rather than Next.js itself.

**Accessibility implications:** Server-rendered HTML provides a sound baseline, but semantics, focus, client navigation, disclosures, overlays, and media remain implementation responsibilities. Client Components introduce hydration and state behavior that must be tested.

**Performance implications:** Static export can provide fast direct entry and portable static assets. Server Components can keep noninteractive component code out of the browser, while client navigation and Client Components still introduce React runtime and framework payloads. This can be controlled, but the project receives more runtime machinery than Astro's default static component model.

**Evidence and media implications:** Capable of rendering code, terminal output, diagrams, tables, and responsive media. Some framework image and server features have different constraints in static export, so media behavior must be chosen with the static target in mind rather than assuming all framework features remain available.

**Developer complexity:** Higher than the current scope requires. The maintainer must understand Server Components, Client Components, static-export limitations, caching and dynamic behavior boundaries, and framework-specific routing conventions even when most pages are static.

**Maintenance and upgrades:** A substantial React and Next.js dependency surface offers a mature integrated framework but creates more framework-specific behavior to monitor. The cost can be justified for a server-capable React application; it is less clearly justified for a mostly static personal engineering website.

**Testing implications:** Requires tests for generated pages, Server/Client boundaries, hydration, client navigation, static-export compatibility, direct entry, and optional-JavaScript failure. These are manageable but broader than the approved Astro baseline.

**Deployment portability:** Strong in static-export mode because the output can be served by a general static file server. Portability decreases if later work adopts provider-sensitive runtime features.

**Reversibility:** Content and standards-based output can remain portable, but App Router layouts, components, metadata APIs, Server Component assumptions, and routing conventions create migration work.

**Project-specific strengths:** Integrated routing; direct-entry static pages; clear local client boundaries; strong path if verified server requirements later become central.

**Project-specific weaknesses:** More conceptual and dependency overhead than current content needs; risk of drifting into server or React application features without evidence; static export does not make every Next.js feature available.

**Becomes preferable when:** Request-time rendering, authenticated or personalized content, server actions, substantial React-specific interactive experiences, or a stronger need for one integrated React server framework becomes approved.

# Option 2 — Astro with Interactive Islands

**Core rendering model:** Astro prerenders pages to static HTML by default. Astro components produce HTML without a client runtime unless a component is explicitly hydrated as a client island. On-demand routes can be added later with an adapter, but they are not required for a static site.

**Static-first suitability:** Strongest fit of the three options. Its default behavior matches the governing requirement: durable static pages first, with no need to justify removing application-wide client JavaScript after the fact.

**Selective client interactivity:** Strong. Mobile-navigation state, disclosures, copy controls, media controls, small comparisons, or verified demonstrations can become isolated islands only when implemented and justified. Static surrounding content remains independent.

**Server-runtime requirements:** None for the approved static output. Astro can opt individual routes into on-demand rendering later, but doing so requires reopening or superseding this record through a separately approved decision. No current content requires it.

**Content and long-form fit:** Strong. Page-oriented static output, file-based routing, layouts, and HTML-first components align with long-form reading, direct entry, content hierarchy, and varied page families. This decision does not choose Markdown, content collections, files, or another authoring model.

**Bilingual fit:** No inherent barrier. Static HTML supports language metadata, Thai and English text, mixed inline runs, and normal browser text behavior. Actual success still depends on font, line-break, width, and content testing in later decisions.

**Accessibility implications:** The no-JavaScript baseline makes essential content and native navigation easier to preserve. Astro does not automatically make markup accessible; semantic structure, focus, keyboard behavior, state announcements, captions, and alternatives remain explicit implementation and review responsibilities.

**Performance implications:** Static pages can ship little or no client JavaScript. Only explicit islands add hydration cost, making the JavaScript budget visible at the component boundary. Static assets can be served without request-time compute. Media, fonts, syntax highlighting, and diagrams can still become expensive and require later controls.

**Evidence and media implications:** Strong fit for static code excerpts, transcripts, tables, figures, captions, and diagrams. Interactive demonstrations can remain exceptional islands with static evidence alongside them. Asset handling and optimization details remain later implementation decisions.

**Developer complexity:** Lower for the approved scope because the default mental model is page templates producing HTML. Complexity grows only when islands, UI-framework integrations, or server adapters are added. Those additions must be justified rather than assumed.

**Maintenance and upgrades:** Smaller client runtime exposure and no required server adapter reduce the operational surface. Astro itself remains a framework dependency with its own templates, routing, build process, and upgrades; it is not maintenance-free.

**Testing implications:** The baseline emphasizes generated HTML, direct-entry pages, content variants, accessibility, responsive behavior, and asset failure. Client-interaction testing is limited to the islands that actually exist. Static output must still be built and inspected once implementation tooling is approved.

**Deployment portability:** Strong. Fully static HTML, CSS, JavaScript, and media can be hosted by any suitable static-file service. Provider-specific adapters are unnecessary unless later requirements introduce on-demand behavior or provider services.

**Reversibility:** Static content, semantic HTML, assets, and framework-independent content records can migrate. Astro templates, component frontmatter, island directives, and file-based page organization create some framework coupling, but the static-first boundary limits it.

**Project-specific strengths:** Defaults match static reliability; local JavaScript boundaries; direct-entry HTML; low operational burden; content and evidence remain primary; server capabilities remain available without being required now.

**Project-specific weaknesses:** Astro-specific templates and island directives require learning and create framework coupling. App-wide shared client state or deeply interactive React behavior would be less natural. Adding multiple UI frameworks would increase complexity and should be rejected without evidence.

**Becomes preferable when:** It is preferable under the current approved scope. It would cease to be the clear preference if the website becomes predominantly request-time, authenticated, personalized, real-time, or application-like.

# Option 3 — React with Vite Client Application

**Core rendering model:** React's official guidance describes a build-tool start such as Vite as a client-only SPA. Vite builds an application bundle suitable for static hosting, but it does not by itself supply the page-generation, routing, data, or rendering architecture needed for this content-led website.

**Static-first suitability:** Weak for the option as defined. The files can be hosted statically, but the core page content is rendered and navigated by client JavaScript rather than being independently generated as complete static documents. Adding SSG or SSR would turn this into a different, more assembled option.

**Selective client interactivity:** Weak at the architectural level because React normally owns the application root. Code splitting can reduce bundles, but it is not equivalent to making most pages HTML-only with isolated interactive regions.

**Server-runtime requirements:** None for a basic SPA. The browser becomes the required runtime for core rendering. SSR or SSG would require additional architecture, dependencies, and maintenance not supplied by the basic React-and-Vite option.

**Content and long-form fit:** Possible but not naturally aligned. The project would need to choose routing, direct-entry fallback behavior, metadata handling, content loading, and pre-rendering strategy. These extra choices duplicate framework-level work without a demonstrated benefit.

**Bilingual fit:** No inherent rendering barrier, but all core text depends on the client application successfully loading and executing. Typography and language behavior remain separate design responsibilities.

**Accessibility implications:** React can produce semantic and accessible UI, but an SPA adds client routing, focus restoration, announcements, loading, and JavaScript-failure concerns to content that does not require an application shell.

**Performance implications:** Vite provides an efficient production bundling foundation, but the option sends a React runtime and application JavaScript for core content. That conflicts with the project's requirement to keep prose, metadata, navigation context, status, and limitations available before optional enhancement.

**Evidence and media implications:** Capable after implementation, but static technical artifacts would still sit inside a client-rendered application. Media and evidence do not demonstrate a need for React ownership of whole pages.

**Developer complexity:** Initially simple, then grows through separate decisions for routing, page metadata, content loading, static generation, focus behavior, and direct-entry hosting. React's own documentation cautions that starting from a build tool can become an ad hoc framework as requirements grow.

**Maintenance and upgrades:** The base tool is small, but the missing framework responsibilities tend to produce several additional dependencies and local conventions. One maintainer would own their integration and upgrade compatibility.

**Testing implications:** Requires client-routing, loading, hydration or mounting, JavaScript-disabled failure, direct-entry fallback, metadata, and application-state tests. Static document checks are less representative because the base HTML does not contain the complete site content.

**Deployment portability:** The bundle can use static hosting, but clean direct-entry URLs commonly require host fallback configuration. That creates more deployment coupling than independently generated HTML routes.

**Reversibility:** React components may migrate to another React framework, but application routing, data flow, SPA assumptions, and client-only behavior require rework to become static-first.

**Project-specific strengths:** Maximum flexibility for application-like interaction; familiar component/state model for complex client behavior; static asset deployment.

**Project-specific weaknesses:** JavaScript is required for core content; direct-entry and metadata behavior need extra architecture; broader accessibility and failure surface; likely accumulation of routing and rendering dependencies.

**Becomes preferable when:** The website's primary experience becomes an application with substantial shared client state and interaction, and complete static documents and no-JavaScript access are no longer governing priorities. That condition is not approved.

# Additional Option

No additional option justified.

The three required options span the meaningful current tradeoff: an integrated React server framework, a static-first islands framework, and a client-rendered React application. Adding another generator would broaden the comparison without evidence that it better fits the content, interaction, maintenance, or future requirements.

# Comparative Analysis

| Criterion | Next.js App Router | Astro with islands | React with Vite SPA |
| --- | --- | --- | --- |
| Static HTML per content route | **Strong, conditional:** static export supports it, subject to feature constraints | **Strong:** default model | **Weak:** not supplied by the basic SPA architecture |
| Core content without client JavaScript | **Strong:** static export renders initial HTML; boundaries still require care | **Strong:** static HTML is the default | **Weak:** React application JavaScript is required |
| Selective client interactivity | **Strong:** explicit Client Components | **Strong:** explicit per-component islands | **Conditional:** bundle splitting is possible, but React owns the app root |
| Direct-entry pages | **Strong:** generated HTML routes in static export | **Strong:** generated HTML routes | **Conditional:** requires router and host fallback behavior |
| Long-form and evidence-led content | **Strong:** capable but broader than needed | **Strong:** directly aligned | **Conditional:** possible with extra architecture |
| Semantic/accessibility baseline | **Strong, implementation-dependent** | **Strong, implementation-dependent, with less default JS** | **Conditional:** semantics possible; SPA focus and routing add work |
| Thai and mixed-language support | **Strong, implementation-dependent** | **Strong, implementation-dependent** | **Strong, implementation-dependent** |
| Client JavaScript restraint | **Conditional:** requires careful client boundaries | **Strong:** opt-in hydration | **Weak:** client runtime is foundational |
| Runtime server need now | **Not required** in static-export mode | **Not required** in static mode | **Not required**, but the browser is the core runtime |
| Build and conceptual complexity | **Conditional:** integrated but comparatively broad | **Strong:** proportional to current scope | **Conditional:** simple start, then assembled responsibilities |
| One-person maintenance | **Conditional:** larger integrated framework surface | **Strong:** smallest matching operational surface | **Conditional:** maintainer owns more architectural integration |
| Static deployment portability | **Strong** | **Strong** | **Strong, with direct-entry configuration caveat** |
| Future request-time capabilities | **Strong:** first-class framework path | **Conditional:** add on-demand routes and an adapter when justified | **Weak:** requires a larger architectural change |
| Risk of current over-engineering | **Conditional to high** | **Low when integrations remain limited** | **High if rebuilt into a static-generation framework locally** |

The comparison does not imply that Astro is universally better. It indicates that Astro's defaults most closely match the requirements already approved for this project, while the unused capabilities and failure surfaces of the alternatives carry more current cost.

# Approved Rendering Strategy

Use **static-first generation with selective interactive client boundaries**.

- **Default rendering:** Generate every approved content page as complete static HTML at build time.
- **Static responsibility:** Identity, prose, metadata, status, maturity, verification, limitations, research and technical notes, figures and captions, code, terminal transcripts, tables, diagrams, navigation context, and related-content context remain static.
- **Dynamic responsibility:** No request-time dynamic responsibility is approved. Content changes become visible through a new reviewed build and release.
- **Client JavaScript boundary:** Add JavaScript only to a local component with an approved interaction need, such as mobile-navigation state, a disclosure, optional theme selection, media controls, copy feedback, a small comparison, or a verified technical demonstration. None is mandatory merely because it is possible.
- **Server-runtime expectation:** No continuously available application server, server adapter, API route, session layer, or request-time renderer is expected for the initial scope.
- **Progressive enhancement:** Native HTML and CSS provide the complete reading and navigation experience. JavaScript enhances control or explanation without owning essential content.
- **Direct entry:** Every public page resolves as an independently generated document with its identity, status, context, and return paths present on first response.
- **Optional-JavaScript failure:** Essential content and destinations remain available. Optional controls either retain a meaningful native/static form or remain absent without removing the supported claim or evidence.
- **Future hybrid behavior:** Request-time rendering or a server adapter may be considered only after a verified requirement cannot be served by static generation or local client enhancement and a new decision is approved.

There is no demonstrated reason for request-time server rendering, hybrid output, or a continuously running application server today. Client-side single-page rendering conflicts with the approved static reliability and progressive-enhancement requirements.

# Approved Stack Decision

Use **Astro as the site framework, with static HTML generation as the default and client JavaScript added only through separately justified local islands**.

No request-time server rendering, server adapter, or continuously running application server is approved. Introducing any of those capabilities requires reopening or superseding DEC-01 through a separately approved decision.

This approved decision is not authority to scaffold Astro, create a manifest, choose a package manager, install dependencies, or begin implementation.

# Why This Option Fits

- Its default output directly expresses the project's content-first and static-reliability rules instead of requiring the maintainer to opt out of an application-wide runtime.
- It produces direct-entry HTML pages suitable for long-form content, varied page families, metadata, and technical evidence.
- Its explicit island boundary matches the component and motion specifications: interaction is local, purposeful, optional, and testable.
- Essential content can remain independent of JavaScript, supporting accessibility, low-powered devices, failure resilience, and performance.
- Static output avoids an unjustified server runtime, database, session layer, or provider-specific adapter.
- It remains capable of adding on-demand routes later if a future approved requirement proves that static generation is insufficient.
- Its operational model is proportionate to one maintainer and the present content volume.
- It does not decide the content model, authoring format, design system implementation, deployment provider, or optional integrations.

# Why the Alternatives Are Not Preferred

**Next.js App Router** is technically capable and can meet the static-first requirement through static export. It is not preferred because the approved scope would use only a constrained subset of a broader React server framework while still accepting its Server/Client component model, framework payloads, export constraints, and upgrade surface. It becomes a stronger choice if verified request-time or React-centric application requirements appear.

**React with Vite as a client application** is flexible and deployable as static assets, but its base architecture makes browser JavaScript responsible for the core experience. Adding routing, SSG, metadata, and progressive static documents would require assembling the framework behavior this project already needs. It becomes reasonable only if shared client-side application state becomes the dominant experience.

# Accessibility Consequences

- Complete static documents provide a reliable basis for landmarks, headings, links, forms of navigation, captions, tables, language metadata, and assistive-technology reading.
- The framework does not guarantee accessibility. Every template and island still requires semantic markup, keyboard behavior, focus handling, state communication, zoom/reflow, contrast, media alternatives, and reduced-motion testing.
- Essential information must remain outside islands and disclosures that depend on JavaScript.
- Client islands must use native elements where possible and define failure behavior, focus restoration, announcements, and touch equivalents.
- Page transitions, client routing enhancements, or animated navigation are not implied by this decision.

# Responsive and Bilingual Consequences

- Static HTML preserves normal browser reflow and language behavior across widths; it does not solve layout or typography automatically.
- Templates and content components must be tested with long Thai, long English, mixed-script text, metadata wrapping, code, terminal output, tables, diagrams, and captions.
- Language metadata must describe the actual content rather than assume one language for every page.
- Responsive evidence may need alternate diagrams, contained overflow, or text equivalents; framework selection does not remove this content responsibility.
- Typography, fonts, exact breakpoints, and the bilingual authoring policy remain separate decisions.

# Performance Consequences

- Static files remove request-time rendering latency and server availability from the initial content path.
- Astro's opt-in islands make client JavaScript cost attributable to specific interactions.
- No island should be added solely to provide a component programming model for static markup.
- Images, fonts, code highlighting, video, diagrams, and third-party embeds remain potential dominant costs and require later evidence-based controls.
- Static generation shifts work to build time; actual build performance and output size cannot be evaluated until real implementation and content exist.
- No numeric performance claim or budget is established by this decision.

# Content and Evidence Consequences

- Projects, research preparation, notes, experiments, learning, and coursework can remain independent documents with stable direct links.
- Static evidence—code, terminal output, API examples, figures, tables, captions, and limitations—can appear without a client application layer.
- Interactive evidence must include a static artifact or explanation that preserves the supported claim.
- The rendering decision does not determine whether content lives in Markdown, structured files, content collections, another repository-local format, or a future external system.
- Content records should remain independent of presentation and avoid framework-specific facts where practical so DEC-02 can choose an authoring model on its own evidence.

# Maintenance Consequences

- One framework and static output are the approved default; UI-framework integrations, server adapters, and provider-specific packages are not approved by this decision.
- Every integration increases upgrades, compatibility checks, and failure modes and must pass the dependency rules separately.
- Astro-specific templates and directives create a real learning and migration cost, which should be documented rather than treated as free.
- A static site still requires dependency review, build validation, content maintenance, link review, accessibility regression checks, and release discipline.
- The framework should not be expanded into a general publishing platform for imagined future scale.

# Testing Consequences

Later implementation should validate:

- Successful generation of every approved direct-entry page.
- Semantic structure, headings, metadata, links, and internal relationships in generated HTML.
- Thai, English, mixed-language, and long-content rendering.
- Keyboard, focus, zoom, reflow, touch, and reduced-motion behavior.
- Code, terminal, diagrams, tables, images, captions, and broken-media fallbacks.
- Operation of core content without optional client JavaScript.
- Each island's hydration, interaction states, static fallback, failure behavior, and isolation from unrelated content.
- Broken links, invalid content, unavailable destinations, and missing optional fields.

This decision does not select testing tools, commands, environments, browser versions, CI, or numeric thresholds.

# Deployment Portability

The approved output direction is a directory of static HTML, CSS, JavaScript, and media that can be served by a suitable static-file host. No provider is selected.

Portability depends on keeping the initial implementation free from provider-specific adapters, request-time APIs, proprietary image services, and hidden rewrite assumptions. Direct-entry URL behavior, not-found behavior, headers, caching, asset paths, and domain configuration must be verified against the provider eventually selected by DEC-05.

If a later route requires on-demand rendering, adapter and runtime portability must be evaluated as a new consequence rather than assumed from the static baseline.

# Risks and Mitigations

- **Astro-specific coupling:** Templates and island directives are framework-specific. Mitigate by keeping content semantics, assets, URLs, and design roles independent from framework APIs.
- **Unnecessary island growth:** Convenience could turn static regions into hydrated components. Mitigate with a required interaction purpose, static fallback, and client-cost review for every island.
- **Integration sprawl:** Astro can host several UI frameworks and adapters. Mitigate by adding none by default and requiring recurring need plus a separate dependency decision.
- **Static content staleness:** Published content changes only after rebuild and release. Mitigate through last-reviewed metadata, explicit status maintenance, and a reliable release workflow selected later.
- **Bilingual layout failures:** Static output does not prove Thai or mixed-script quality. Mitigate with representative content from the first vertical experience and later RWD validation.
- **Large media or highlighting cost:** Low framework JavaScript does not guarantee a fast site. Mitigate by validating actual assets, generated output, and enhancement cost.
- **Future dynamic requirements:** Authentication, personalization, or frequently changing request data could make static output insufficient. Mitigate by preserving route/content boundaries and reopening this decision when a verified need appears.
- **Framework upgrade burden:** Astro remains a moving dependency. Mitigate through bounded upgrades, official migration guidance, regression checks, and a limited integration surface after tooling is approved.
- **False accessibility confidence:** Static HTML can still be inaccessible. Mitigate by treating accessibility as acceptance throughout implementation and testing.

# Reversibility and Migration

The hardest parts to reverse are Astro templates, routing conventions, component composition, island directives, build integrations, and any adapter-specific behavior. A future migration would need to recreate these concerns.

The following should remain portable:

- Content classifications, fields, status, maturity, verification, limitations, and relationships.
- Plain text, Markdown-like source content if later selected, citations, and evidence metadata.
- Standards-based semantic HTML patterns and accessible interaction contracts.
- Design tokens expressed through semantic roles rather than framework names.
- CSS concepts, media assets, diagrams, code samples, captions, and text alternatives.
- Stable public URLs and redirects documented independently of framework internals.
- Static-first client boundaries whose behavior can be reimplemented locally.

Reconsider the framework if approved requirements introduce authenticated areas, request-specific personalization, frequently changing server data, substantial server mutations, application-wide client state, real-time collaboration, unacceptable build scaling, or deployment constraints that Astro cannot meet without disproportionate complexity.

Avoid lock-in by keeping the initial dependency surface small, declining provider-specific adapters without need, avoiding framework APIs inside content records, and documenting every material boundary and migration consequence.

# Decisions Explicitly Deferred

- Content storage, validation, and authoring model (DEC-02).
- Final package manager and lockfile.
- Styling implementation and CSS organization.
- Component library or decision to use none.
- Animation library or decision to use none.
- Theme count and primary theme.
- Fonts and font-delivery strategy.
- Final routes, navigation labels, and sitemap.
- Design-token names and values.
- Testing tools, runners, and automation.
- Deployment provider, adapter, runtime, domain, and recovery strategy.
- Analytics and consent behavior.
- Forms and form processing.
- Search, filtering, and archive infrastructure.
- Continuous integration.
- Exact browser and device support policy.
- Numeric accessibility and performance budgets.
- Optional UI-framework integration for islands.
- Syntax-highlighting, diagram, image, and media tooling.

# Official Sources Consulted

- [Astro: Islands architecture](https://docs.astro.build/en/concepts/islands/) — Documents that Astro components render to HTML without a client runtime by default and that explicitly marked client islands receive isolated JavaScript.
- [Astro: On-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/) — Documents default build-time prerendering, optional per-route on-demand rendering, the adapter requirement for request-time rendering, and the guidance to start with static output until server rendering is justified.
- [Astro: Routing](https://docs.astro.build/en/guides/routing/) — Documents file-based routing that derives build URLs from page files, supporting independently addressable content pages.
- [Next.js: Static Exports](https://nextjs.org/docs/app/guides/static-exports) — Documents per-route HTML generation, static hosting portability, and the dynamic features unavailable in static-export mode.
- [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) — Documents Server Components as the App Router default and Client Components as the boundary for state, events, and browser APIs.
- [React: Build a React app from Scratch](https://react.dev/learn/build-a-react-app-from-scratch) — Documents that build-tool starts are client-only SPAs without built-in routing, data, or alternate rendering architecture, and explains the maintenance tradeoff of assembling these responsibilities.
- [Vite: Building for Production](https://vite.dev/guide/build) — Documents Vite's HTML entry and production bundle suitable for static hosting; it supports the build-tool assessment but does not establish content-page generation by itself.
- [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy.html) — Documents static build output and also distinguishes it from optional SSR support.

Documented framework facts above are separated from the project-specific inference that Astro's defaults best match nattapong.dev.

# Consequences of Approval

Approval establishes Astro with static output and selective islands as the implementation direction. It allows later authorized tasks to:

- Use the decision as an input to DEC-02, DEC-03, DEC-04, and DEC-05 without deciding those gates.
- Define a bounded scaffold task with exact authorized files and dependency choices.
- Establish the minimal semantic and build foundation after the remaining blocking decisions are ready.
- Evaluate candidate content models against Astro without assuming a CMS or authoring format.
- Plan generated-page, no-JavaScript, bilingual, responsive, and accessibility validation.
- Select a first vertical experience after verified content and evidence are ready.

Approval does not authorize installation, scaffolding, page implementation, package-manager selection, deployment, or a commit.

# Approval Record

Nattapong explicitly approved this decision:

> Use Astro as the framework for nattapong.dev, use static HTML by default, add JavaScript only through locally justified islands, and require a new decision before introducing request-time server rendering or an application server.

The approval was supplied through explicit user confirmation by the decision owner. No approval date is recorded. The approval closes the stack and rendering question only; it does not authorize implementation or resolve any deferred decision.

# Open Questions

- Is any known first-release requirement unable to work as a statically generated page with local progressive enhancement?
- Does representative Thai, English, and mixed-language content reveal a rendering constraint relevant to stack approval, rather than to later typography or layout decisions?
- Which authoring model should DEC-02 evaluate within the approved static Astro foundation?
- Which initial interactions, if any, are real enough to justify an island during the first vertical experience?
- What future evidence would be sufficient to reopen the static-output decision for a specific route?
