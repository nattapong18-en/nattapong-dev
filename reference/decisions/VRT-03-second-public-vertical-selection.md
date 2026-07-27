# VRT-03 — Second Public Vertical Selection

# Status

- **Decision ID:** VRT-03
- **Status:** Approved
- **Decision owner:** Nattapong
- **Scope:** Second public vertical selection only
- **Implementation authorized:** No

# Decision Summary

Learning is approved as nattapong.dev's second public vertical. It extends the current static, evidence-led journal with one approved learning-progress record while preserving the existing three-route website and its visual direction. Approval selects neither implementation nor a broader sitemap change; a separate implementation authorization remains required.

# Governing Inputs

- [Project Vision](../../docs/00-project-vision.md) identifies learning progression as a first-class record of meaningful changes in understanding, rather than an activity stream.
- [Design DNA](../design-dna.md) requires content-led, honest, accessible presentation and rejects generic portfolio treatment.
- [DEC-06 — URL and Language Routing Direction](DEC-06-url-and-language-routing-direction.md) provides the unprefixed static Learning index and detail-route contract.
- [VIS-01 — Nattapong Visual Direction](VIS-01-nattapong-visual-direction.md) requires an evidence-led editorial engineering journal with static, semantic reading order.
- [VIS-02 — Refined Visual Identity Direction](VIS-02-refined-visual-identity-direction.md) remains the approved shared visual foundation.
- [Learning public record](../../content/public/learning/guided-http-threadpool-learning.md) is public-ready and review-approved with bounded learning, evidence, and limitation content.
- [About public record](../../content/public/about/engineering-direction.md) and [Research public record](../../content/public/research/open-research-questions.md) provide the comparison evidence below.

# Candidate Comparison

| Candidate | Strengths | Missing prerequisites or risks | Recommendation |
| --- | --- | --- | --- |
| `/about/` | Complete approved identity record; static route contract already exists. | The homepage already renders its bounded orientation, learning directions, and limitation. A detail now would largely repeat that material without a distinct second journey or new evidence need. | Defer. Reconsider when approved background, experience, or contact material creates a genuinely deeper About record. |
| `/research/` | Public-ready, review-approved record with a clear preparation question, scope, open questions, sources, and limitations. Fits the journal's uncertainty-led model. | The record is mixed-language, while real Thai/mixed-language rendering remains deferred from the bounded accessibility audit. Its preparation-only state requires especially careful presentation to avoid implying a selected topic, research approval, method, finding, or contribution. | Defer. Reconsider after separate mixed-language rendering validation and when the owner wants research preparation to be the next public emphasis. |
| `/learning/` | One public-ready, review-approved English learning-progress record has a complete purpose, guided-learning context, changed understanding, gaps, claims, evidence, source context, and limitations. It directly supports the journal's learning-record purpose without claiming expertise. | Only one eligible record currently exists, so the index must remain useful at one item and scale editorially without a card wall. | **Approved.** It is the smallest complete, honest expansion with no new dependency, configuration, or language-routing requirement. |

# Approved Selection

Approve **Learning** as the second public vertical.

The approved route boundary is exactly:

- `/learning/`
- `/learning/guided-http-threadpool-learning/`

These are one Learning vertical, not two independently selected verticals. The index provides the family-level entry and the detail route renders the approved record. No About or Research route is selected by this proposal.

# Evidence Supporting the Proposal

The Learning record is `visibility: public-ready` and `review.state: approved`; its `learningKind` is `learning-progress`. It explicitly states that guided educational material shaped the implementation, identifies changed understanding and current gaps, and limits the record from being read as independent authorship, professional Rust expertise, verified testing, performance, or production suitability. Those fields support a complete evidence-led detail route without adding claims or inventing copy.

The existing content configuration already defines the Learning collection, and the current static stack has no client-side navigation requirement. The route contract in DEC-06 already specifies the proposed unprefixed index and slug-derived detail path. No package, configuration, external asset, runtime, or language-prefix change is required.

# Expected Implementation Boundary

A later separately authorized implementation task should remain within the Learning family and the existing shared static foundation. Its expected file boundary must be reconfirmed against the then-current repository, but is likely limited to:

- modify `src/lib/public-content.ts` to return validated eligible Learning entries alongside the existing validated public collections;
- modify `src/lib/public-routing.ts` only if a small family-specific path or collision helper is necessary after reuse is evaluated;
- create `src/pages/learning/index.astro` and `src/pages/learning/[slug].astro`;
- modify `src/components/SiteHeader.astro` only if adding the approved Learning destination to primary navigation is separately included in that authorization;
- modify `src/components/EvidenceTrace.astro` only if the existing semantic contract cannot render the Learning record without a bounded, reusable adjustment;
- modify `src/styles/global.css` only when existing editorial, responsive, focus, and limitation treatments demonstrably cannot present this record.

The implementation must use collection data and existing V1/V2/V3 validation; it must not manually duplicate approved prose, expose internal IDs, add browser JavaScript, or add packages or configuration.

# Validation Expectations

A later implementation authorization should require:

- existing fixture validation, Astro sync, Astro check, and static build;
- generation of only the existing three routes plus the two proposed Learning routes;
- no `/about/`, `/research/`, language-prefixed, alias, redirect, or unapproved detail route;
- no shipped browser JavaScript or external-font dependency;
- direct-entry, keyboard, focus, no-JavaScript, reduced-motion, narrow reflow, long-text, and text-spacing checks;
- explicit verification that guided-learning, non-expertise, and unverified-testing/performance/production limits remain visible;
- a separate record of omitted browser, screen-reader, Thai/mixed-language, and formal certification coverage where not tested.

# Explicit Non-Goals

- No route, component, style, content, package, configuration, asset, metadata, deployment, or runtime implementation.
- No `/about/`, `/research/`, research-detail, About-detail, dark mode, external font, asset, motion system, client JavaScript, redirect, alias, canonical metadata, or language-switching work.
- No claim of independent authorship, professional Rust expertise, completed research, selected research topic, verified runtime, test, benchmark, performance, or production outcome.
- No selection of a third vertical or broader information-architecture redesign.

# Owner Approval Record

Nattapong approved Learning as the second public vertical with this exact route boundary:

- `/learning/`
- `/learning/guided-http-threadpool-learning/`

This approval preserves About's deferral because its current record substantially duplicates the homepage orientation. It preserves Research's deferral because its preparation-only, mixed-language record requires separate rendering validation and particularly careful uncertainty presentation.

The approval does not authorize implementation. No Learning page, detail route, navigation update, additional Learning record, package, configuration, browser JavaScript, or broader route expansion is approved. Static rendering and complete no-JavaScript navigation remain required for any later separately authorized implementation.
