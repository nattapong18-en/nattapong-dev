# CNT-01 — Minimal Contact Experience

# Status

- **Decision ID:** CNT-01
- **Status:** Proposed
- **Decision owner:** Nattapong
- **Scope:** A minimal static contact presentation using approved public contact data
- **Implementation authorized:** No
- **Owner approval required:** Yes

This proposal follows the [Project Vision](../../docs/00-project-vision.md), [Design DNA](../design-dna.md), [DEC-05 — Deployment, Analytics, and Privacy Direction](DEC-05-deployment-analytics-and-privacy-direction.md), the approved [VIS-01](VIS-01-nattapong-visual-direction.md) and [VIS-02](VIS-02-refined-visual-identity-direction.md) directions, the [Task List](../../docs/09-task-list.md), and the proposed [VRT-04](VRT-04-next-public-vertical.md) boundary. It does not select, authorize, or begin Home Lab work.

# Context

nattapong.dev is a public, static personal engineering record with a homepage that provides orientation but no contact presentation. The approved public contact data is limited to `zpoloa0@gmail.com` and `https://github.com/nattapong18-en`. The contact experience should make those approved routes discoverable without turning the site into a hiring funnel, adding a data-collecting form, or implying availability.

# Contact Experience Options

| Option | Benefits | Risks or missing prerequisites | Recommendation |
| --- | --- | --- | --- |
| Small homepage contact block | Reaches visitors at the end of the existing orientation journey; adds no route, runtime, provider, or duplicated footer structure. | Must remain concise so it does not compete with engineering direction or imply solicitation. | **Propose.** |
| Shared footer contact links | Could make contact persist across every route. | The current shared layout has no footer; introducing one solely for two links broadens shared presentation and duplicates a still-small contact need. | Defer. |
| Dedicated `/contact/` route | Gives contact its own direct-entry URL. | Insufficient content for a distinct page; adds route, navigation, metadata, and maintenance scope without improving the initial task. | Defer. |
| Contact form | Could collect messages without exposing an address. | Requires submission handling, spam/abuse, privacy, accessibility, failure states, and likely third-party or server capability; none is approved. | Defer. |

# Proposed Direction

Propose one compact **Contact** section near the end of the homepage, after the current orientation and boundary material. Its purpose is only: provide the approved ways to find or contact Nattapong. It must use semantic text links, retain the current calm editorial structure, and remain complete in static HTML.

# Purpose and Placement

The homepage is the appropriate first placement because it already establishes personal identity and directs visitors into the public record. The Contact section should appear after the existing `Current boundary` region so it reads as a quiet closing action rather than a primary call to action. It must not displace the homepage introduction, Engineering Direction, Projects destination, or limitation boundary.

# Approved Public Fields

Only these two fields are proposed:

| Label | Visible value and link behavior |
| --- | --- |
| Email | Display `zpoloa0@gmail.com` visibly and link to `mailto:zpoloa0@gmail.com`. The label and address together make the purpose clear. |
| GitHub | Use the descriptive label `GitHub profile` and link to `https://github.com/nattapong18-en` as a normal semantic link. |

No icon-only control, shortened ambiguous label, hidden address, or unapproved contact destination is proposed. The implementation should not force a new tab or attach speculative tracking parameters.

# Content and Claim Boundary

The section may communicate only that these are approved ways to find or contact Nattapong. It must not state or imply employment availability, open-to-work status, freelance work, clients, internships, collaboration, recruiting interest, response-time expectations, or monitoring of the address. It must not add a phone number, exact address, LinkedIn, Facebook, Twitter/X, messaging account, or other social identity.

# Accessibility Contract

The later implementation must preserve:

- descriptive visible link text and a visible email address;
- native anchor semantics with no ARIA substitute for normal links;
- visible keyboard focus that meets the existing shared focus treatment;
- sufficient text and focus contrast on the homepage surface;
- normal reading and focus order after the existing homepage material;
- a narrow-screen layout that wraps the address safely without horizontal overflow;
- no meaning dependent on icon, hover, color, motion, or JavaScript.

# Privacy and Spam Boundary

The approved email is intentionally public for this bounded presentation; it must not be obfuscated in a way that harms copy, keyboard, assistive-technology, or no-JavaScript use. A visible static `mailto:` link is not a contact form and introduces no submission processing, storage, analytics, CAPTCHA, tracking, cookies, or third-party request. Spam handling, mailbox operations, contact-form delivery, and response practices remain outside the website and are not represented as features.

# Navigation Decision

Do not add a primary-navigation item, dedicated contact route, footer, or mobile-menu behavior. The existing Home, Projects, and Learning navigation remains unchanged. A later revisit requires demonstrated content or visitor need and a separate decision.

# CNT-01B Proposed File Boundary

CNT-01B remains blocked pending owner approval. The smallest likely implementation boundary is:

- modify `src/pages/index.astro` to add the semantic Contact region using only the two approved links;
- modify `src/styles/global.css` only if existing homepage, link, focus, spacing, and responsive rules cannot present that region coherently.

No shared layout, header, route, form handler, package, configuration, analytics, deployment, DNS, content-record, or browser-JavaScript change is proposed.

# Validation Requirements

A later implementation authorization should require:

- Astro sync, check, and static build;
- confirmation that existing routes remain unchanged and no new route is generated;
- generated HTML inspection for one semantic Contact section, visible email, correct `mailto:` destination, and correct GitHub destination;
- homepage keyboard/focus, no-JavaScript, reduced-motion, 320px, 200%–400% reflow, text-spacing, and long-email wrapping checks;
- confirmation that no form, script, analytics request, availability claim, or unapproved contact field appears;
- regression confirmation for existing homepage orientation, navigation, semantic landmarks, and static metadata.

# Deferred Scope

Deferred: shared footer; `/contact/`; contact form; mail-delivery provider; CAPTCHA; anti-spam service; analytics; contact preferences; availability or solicitation language; response-time statement; icons; additional social accounts; location or phone contact; Home Lab implementation; localization; and further public verticals.

# Owner Decisions Required

1. Approve the homepage-end Contact block rather than a shared footer.
2. Approve visible `zpoloa0@gmail.com` with a static `mailto:` link.
3. Approve the descriptive GitHub-profile link to `https://github.com/nattapong18-en`.
4. Confirm that a route, form, solicitation language, and additional contact fields remain deferred.

# Consequences

This proposal adds a small static contact affordance only after separate approval. It preserves the current public routes, navigation, visual identity, no-browser-JavaScript boundary, privacy limits, and Home Lab deferral. It does not promise availability or create a contact-processing system.
