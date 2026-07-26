# DEC-06 — URL and Language Routing Direction

# Status

- **Decision ID:** DEC-06
- **Status:** Approved
- **Decision owner:** Nattapong
- **Approved direction:** Option C — unprefixed canonical routes with an explicit future language-routing migration boundary
- **Route implementation authorized:** No
- **Page implementation authorized:** No
- **Redirect, canonical-tag, language-switching, deployment, and publication implementation authorized:** No

# Context

The approved public content set contains one public-ready, review-approved About record, one Project record, one mixed-language Research record, and one Learning record. The current content model keeps stable record IDs independent from slugs, permits optional explicit translation groups, and does not infer translations. No route, page, language switcher, canonical tag, redirect, or public release exists.

DEC-01 requires static HTML by default without a request-time application server. DEC-02 requires repository-local build-time content, direct-entry static pages, an allowlisted public source, one primary language per entry, optional explicitly authored translation siblings, and no automatic translation. This decision establishes only the route and language direction needed for later separately authorized implementation.

# Governing Constraints

- Generate routes only from eligible records in the approved public collections; never from `docs/`, `reference/`, fixtures, audits, or governance material.
- Keep core content navigation static and available without client JavaScript.
- Do not use filenames, titles, stable IDs, repository URLs, or inferred translations as substitutes for approved slugs or explicit translation metadata.
- Preserve the distinction among status, visibility, review, verification, and language.
- Keep route, page, navigation, visual, accessibility-presentation, deployment, and publication decisions within their separate authorizations.

# Options Considered

## A — Unprefixed v0.1

Use unprefixed family routes only. This fits the current English and mixed-language records and does not create routes for unavailable Thai content. By itself, it leaves the later translation migration boundary unstated.

## B — Language-prefixed from the beginning

Use paths such as `/en/` and `/th/` immediately. This would add language structure without an approved Thai sibling and has no honest prefix model for the mixed-language Research record. It would add future migration, duplicate-content, and navigation pressure before current content justifies it.

## C — Unprefixed canonical routes with an explicit future migration boundary

Use the small unprefixed v0.1 contract now while requiring a separate approved translation-routing decision before any language-prefixed system exists. This preserves direct static paths without implying translations and is reversible when actual eligible siblings exist.

# Decision

Adopt **Option C**.

v0.1 canonical routes are unprefixed. There is no `/en/` or `/th/` prefix, and an unprefixed route does not imply that a translation exists. Any future language-prefixed routing, default-language behavior, translation migration, or language-switch UI requires a separate approved decision. Automatic translation and inferred translation relationships are prohibited.

# v0.1 Route Contract

Trailing slashes are the intended route convention; this is a route contract, not an implemented hosting guarantee.

| Purpose | Contract | Current eligible path |
| --- | --- | --- |
| Home | `/` | `/` |
| About detail | `/about/` | `/about/` |
| Projects index | `/projects/` | `/projects/` |
| Project detail | `/projects/[slug]/` | `/projects/booking-api-source-review/` |
| Research index | `/research/` | `/research/` |
| Research detail | `/research/[slug]/` | `/research/open-research-questions/` |
| Learning index | `/learning/` | `/learning/` |
| Learning detail | `/learning/[slug]/` | `/learning/guided-http-threadpool-learning/` |

Do not create a generic `/about/[slug]/` route. Empty family indexes are not generated when no eligible records remain.

# Home and About

The home page at `/` is a bounded orientation layer. The complete About record has one canonical detail route at `/about/`. Home must not duplicate the complete About body, and no home-to-About redirect is required. This decision does not define homepage copy, layout, components, navigation labels, or visual hierarchy.

# Route Eligibility and URL Identity

A record is route-eligible only when V1 structural validation, V2 referential validation, V3 semantic validation, and future route-specific validation all succeed, its `visibility` is `public-ready`, and its `review.state` is `approved`. File location alone is insufficient. Status is lifecycle or display context and does not independently qualify or disqualify a route.

Detail routes use approved slugs. Stable record IDs, filenames, titles, and repository URLs never enter public URLs. Stable IDs and slugs remain independent. The same slug may occur in different families because family prefixes separate those routes. Duplicate slugs within one family, unsafe or reserved path segments, and any actual canonical-route collision are blocking.

# Exclusion and Failure Behavior

Candidate, withheld, and archived visibility records are silently excluded. Public-ready records without approved review, and approved records without public-ready visibility, are also silently excluded.

Structurally invalid content, V2 or V3 failures, duplicate stable IDs, duplicate family-local slugs, canonical collisions, unsafe or reserved segments, broken required relationships, and invalid future translation-target eligibility fail before static path generation. Unknown incoming URLs have ordinary not-found behavior because no static path exists; this decision does not define a 404 page.

# Mixed-Language and Future Translation Behavior

`primaryLanguage: mixed` is valid editorial metadata, not a translation state. The current mixed Research record has one canonical URL at `/research/open-research-questions/`; `mixed` neither changes its slug nor produces additional URLs or a translation group. Inline language markup and HTML language attributes remain presentation and accessibility decisions.

Future translation siblings must be separately authored and use an explicit translation group. They must independently be public-ready and review-approved before becoming a switch target. Missing or ineligible siblings create no switch target, and sibling slugs may differ. Language prefixes, default-language routing, switch UI, fallback, prefix migration, translated-sibling canonical handling, migration redirects, and final HTML language metadata remain deferred.

# Canonical and Redirect Direction

Each eligible record has exactly one canonical route. v0.1 has no aliases, legacy routes, redirect manifest, or redirect infrastructure; the site has no public legacy URL migration. A slug change after publication requires a separately approved redirect and migration decision. Canonical-tag implementation and host-level trailing-slash enforcement remain deferred.

# Static-Generation Direction

Astro static output remains the default. Future implementation generates indexes statically and derives eligible detail parameters from approved slugs at build time after eligibility and collision checks. Unknown slugs produce no generated page. No request-time content source, application server, client-side router, or client JavaScript is required for content navigation.

# Validation Responsibilities

| Responsibility | Scope |
| --- | --- |
| V1 structural validation | Field presence, types, enums, formats, and local invariants |
| V2 referential validation | Stable-ID uniqueness, required relationships, and explicit translation consistency |
| V3 semantic validation | Family semantics and visibility/review compatibility |
| Future route validation | Eligibility, family-local slug uniqueness, unsafe/reserved segments, canonical collisions, translation-target eligibility, and internal-content exclusion |
| Astro route generation | Only approved static indexes and eligible detail paths |
| V4 human review | Factual, privacy, editorial, rights, and translation approval |

Automated validation does not replace human review.

# Consequences and Trade-offs

The chosen direction is small, static, and honest about current language coverage. It prevents misleading language prefixes and avoids redirects before a public release. It also means later translation routing will need a separate deliberate migration decision rather than being inferred from today’s URLs.

# Deferred Decisions

Route and page implementation; final navigation labels; header and footer structure; homepage content and layout; visual hierarchy; components; typography; colors; motion; HTML language attributes; canonical tags; redirect implementation; host trailing-slash enforcement; 404 design; search; tags and taxonomy; pagination; feeds; sitemap; `robots.txt`; Open Graph presentation; deployment; analytics; and publication date remain deferred.

# Non-Authorization

DEC-06 records direction only. It does not authorize route, page, navigation, redirect, canonical metadata, language-switching, UI, styling, component, asset, build, deployment, analytics, or publication implementation. Those actions remain Blocked until separately authorized.
