# SEO-03 — Social Metadata and Structured Data

# Status

- **Decision ID:** SEO-03
- **Status:** Approved
- **Decision owner:** Nattapong
- **Scope:** Minimum social metadata and static JSON-LD for the five approved public routes
- **Implementation authorized:** Yes — bounded static scope recorded below
- **Owner approval required:** No — recorded below

This proposal extends the existing canonical, description, robots, sitemap, and static HTML foundation. It is governed by the [project vision](../../docs/00-project-vision.md), [Design DNA](../design-dna.md), [VIS-01](VIS-01-nattapong-visual-direction.md), [VIS-02](VIS-02-refined-visual-identity-direction.md), and the [Task List](../../docs/09-task-list.md). It does not add a route, public content, image asset, browser runtime, package, or deployment change.

# Owner Approval Record

Nattapong approved the initial static metadata direction:

- **No social image:** `og:image`, `twitter:image`, and related image fields remain omitted.
- **Email privacy:** Person JSON-LD omits the approved public email address.
- **Location precision:** Person JSON-LD uses country-level `Thailand` only.
- **Entity properties:** The WebSite and Person property sets documented below are approved, including Nakhon Phanom University affiliation and GitHub-only `sameAs`.

This approval does not authorize a social image asset, browser JavaScript, package, route, visible-content, analytics, deployment, DNS, or broader schema change.

# Context

The canonical production host is `https://nattapong.dev`. The approved indexable route boundary is `/`, `/projects/`, `/projects/booking-api-source-review/`, `/learning/`, and `/learning/guided-http-threadpool-learning/`. Social metadata should improve sharing and machine-readable identity while retaining the site’s evidence-led, calm, English-only, static-first presentation.

# Existing SEO Baseline

- `astro.config.mjs` defines the production site URL.
- `BaseLayout.astro` emits one route-specific absolute canonical URL and accepts the current page title and description.
- Every indexable route supplies a truthful title and unique description; the custom 404 is `noindex`.
- `public/robots.txt` permits crawling and points to the canonical sitemap; the sitemap contains only the five approved canonical URLs.
- No Open Graph fields, Twitter/X card fields, JSON-LD, social image, or social account metadata is currently emitted.

# Open Graph Policy

For each of the five indexable public routes, the approved implementation emits exactly one of each:

| Field | Source rule |
| --- | --- |
| `og:type` | `website`; no Project, Article, or CreativeWork subtype is proposed. |
| `og:site_name` | Literal `nattapong.dev`. |
| `og:title` | Reuse the existing route `<title>` value exactly. |
| `og:description` | Reuse the existing route meta description exactly. |
| `og:url` | Reuse the existing absolute self-referencing canonical URL exactly. |
| `og:locale` | `en_US`, representing the initial English content locale rather than the owner’s location. |

The noindex custom 404 must not receive social metadata. The implementation must not add duplicate Open Graph fields or write a second source of title/description copy.

# Twitter Card Policy

For each indexable route, the approved initial card is:

- `twitter:card`: `summary`
- `twitter:title`: the existing route title
- `twitter:description`: the existing route description

No Twitter/X handle, creator, site account, or image field is proposed because no account or image is approved. The 404 must not receive Twitter card fields.

# Social Image Decision

`og:image`, `twitter:image`, image dimensions, alt metadata, and a social-image URL are **deferred**. No approved image asset exists, so the first implementation must omit image fields rather than inventing a URL, reusing an unreviewed asset, or generating an image. A later asset task may define a reviewed accessible image and its social metadata only with separate authorization.

# Metadata Inheritance Contract

- `BaseLayout.astro` remains the sole shared head emitter for canonical, description, and proposed social metadata.
- Existing route `title`, `description`, and `currentPath` values remain the source of truth. Each route must provide a non-empty title, description, and canonical path before it is indexable.
- The site URL and `currentPath` resolve every canonical and social URL to an absolute `https://nattapong.dev` URL. Canonical trailing slashes remain exactly as current route output: `/`, `/projects/`, `/projects/booking-api-source-review/`, `/learning/`, and `/learning/guided-http-threadpool-learning/`.
- Social title and description reuse prevents manual duplication; the layout must emit at most one canonical, one description, and one of every selected social field.
- The custom 404 retains `noindex`, its own canonical, and no social or structured-data entity.

# WebSite Structured Data

The homepage only emits one static JSON-LD object with this exact property set:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "nattapong.dev",
  "url": "https://nattapong.dev/",
  "description": "I’m Nattapong Sangsana, a Computer Engineering student at Nakhon Phanom University in Thailand."
}
```

The description reuses approved visible homepage copy. Do not add `SearchAction`, publisher, image, potential action, or a separate Organization entity.

# Person Structured Data

The homepage only emits one static JSON-LD Person object with this approved property set:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nattapong Sangsana",
  "url": "https://nattapong.dev/",
  "jobTitle": "Computer Engineering Student",
  "affiliation": {
    "@type": "CollegeOrUniversity",
    "name": "Nakhon Phanom University"
  },
  "homeLocation": {
    "@type": "Country",
    "name": "Thailand"
  },
  "sameAs": ["https://github.com/nattapong18-en"]
}
```

The proposed object omits email, image, birth date, postal address, phone number, employer, alumni status, `knowsAbout`, awards, reviews, ratings, social accounts, and professional-experience claims. It must be emitted as a static `application/ld+json` data block, not executable browser behavior.

# Public Identity and Privacy Boundary

Every proposed value is approved and visible or directly represented by the approved public identity: `Nattapong Sangsana`, `nattapong.dev`, Computer Engineering Student, Nakhon Phanom University, Thailand, and GitHub. Country-level location is the maximum proposed location precision. Although the email address is approved public contact information, this proposal omits it from JSON-LD to avoid increasing machine-readable exposure without a clear discovery need.

# SEO-03B File Boundary

The approved implementation changes are:

- `src/layouts/BaseLayout.astro` — shared Open Graph/Twitter fields, duplicate prevention, and an opt-in static JSON-LD slot or typed data prop.
- `src/pages/index.astro` — pass the homepage-only WebSite and Person data through the shared layout.

No other page file should need modification if existing title, description, and path props remain complete. `astro.config.mjs`, routes, content, assets, packages, and public files must remain unchanged. The actual file boundary must be revalidated in the implementation authorization.

# Validation Requirements

A separately authorized implementation must verify:

- Astro sync, type checks, and static build pass.
- The five indexable routes retain exactly one canonical and one non-empty description; 404 remains separate and `noindex`.
- Generated HTML has the specified unique Open Graph and Twitter values on each indexable route, with no duplicate tags or image fields.
- Homepage JSON-LD parses as valid JSON and contains exactly one WebSite and one Person entity with the approved values; other routes and 404 contain none.
- All URLs in metadata and JSON-LD are absolute canonical `https://nattapong.dev` URLs with the established trailing-slash policy.
- Generated output still contains all five routes, custom 404, robots, and sitemap, while shipping no browser JavaScript files.
- A separate production review validates deployed output, social-preview behavior where available, and source/deployment equivalence. It must not claim ranking or complete indexing.

# Implementation Record

SEO-03B implements shared social metadata in `src/layouts/BaseLayout.astro` and homepage-only static WebSite and Person JSON-LD in `src/pages/index.astro`. Astro sync, check, and static build passed. Generated HTML validation confirmed one required social field per indexable route, valid homepage JSON-LD, no image or account metadata, no JSON-LD outside the homepage, preserved 404 `noindex`, and no browser JavaScript files.

# Deferred Scope

Social image asset creation, richer schema types, Article, CreativeWork, BreadcrumbList, Organization, SearchAction, Open Graph image metadata, Twitter/X account metadata, About, Research, localization, additional public verticals, analytics, and ranking guarantees remain deferred.

# Consequences

The approved implementation makes static route metadata more shareable and identifies the homepage conservatively without changing visible content, adding social claims, or promising indexing or rankings.
