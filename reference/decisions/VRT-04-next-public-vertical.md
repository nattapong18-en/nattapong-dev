# VRT-04 — Next Public Vertical

# Status

- **Decision ID:** VRT-04
- **Status:** Proposed
- **Decision owner:** Nattapong
- **Scope:** Selection and implementation-readiness direction for one next public vertical
- **Implementation authorized:** No
- **Owner approval required:** Yes

This proposed direction is governed by the [Project Vision](../../docs/00-project-vision.md), [Design DNA](../design-dna.md), [DEC-06 — URL and Language Routing Direction](DEC-06-url-and-language-routing-direction.md), [VIS-01 — Nattapong Visual Direction](VIS-01-nattapong-visual-direction.md), [VIS-02 — Refined Visual Identity Direction](VIS-02-refined-visual-identity-direction.md), and the [Task List](../../docs/09-task-list.md). It follows the completed [VRT-03 Learning selection](VRT-03-second-public-vertical-selection.md) without reopening its route or content boundary.

# Context

nattapong.dev currently has Projects and Learning as completed public verticals. The next vertical should add a distinct kind of engineering evidence rather than repeat the Project index, turn Learning into a general blog, or expose an unfinished system as a completed product. The strongest available direction is a Raspberry Pi Personal Cloud / Home Lab record motivated by preventing another total data-loss event. Its stated future stages—backup, Git server, Go API, Docker, authentication, dashboard, sharing, permissions, and stable personal-cloud operation—remain future work unless separately evidenced.

# Candidate Evaluation

| Candidate | Fit and distinct value | Evidence/readiness and risk | Recommendation |
| --- | --- | --- | --- |
| Home Lab | A durable place for real self-hosted systems, operating decisions, failures, verification, and incremental infrastructure progress. It adds systems-operation evidence distinct from bounded application Projects and guided Learning. | The Raspberry Pi Personal Cloud direction has a concrete motivation and current NAS starting point, but no public-ready structured record is yet present in the repository. Future stages must not be represented as complete. | **Select, subject to owner approval and a first-record evidence gate.** |
| Engineering Notes | Can eventually preserve reusable explanations and engineering discoveries. | No approved note records establish a first release, editorial cadence, or distinct entry beyond existing Learning. A route now would risk becoming a generic blog or tutorial archive. | Defer. |
| About | Existing approved identity material is coherent. | It still substantially duplicates the homepage orientation and does not yet add a distinct evidence journey. | Defer. |
| Research | The public record supports uncertainty-led research preparation. | Its preparation-only, mixed-language content still requires separate rendering validation and careful presentation to avoid implying a selected topic, method, finding, or contribution. | Defer. |
| System Programming | Could eventually show a focused technical direction. | No bounded public record or verified system-programming evidence is currently available; selecting it would risk an expertise claim or a topic label without content. | Defer. |

# Selected Vertical

Propose **Home Lab** as the next public vertical, with the route:

- `/home-lab/`

The vertical documents real self-hosted systems and evolving infrastructure records. It is neither a generic hardware page nor a second Projects listing. Its identity comes from operation, decisions, constraints, verification, failures, and ongoing system evolution.

# Purpose and Audience

Home Lab gives recruiters, engineers, and technical readers a bounded view of how Nattapong approaches personal infrastructure over time: why a system matters, what is actually operating now, what evidence supports that state, what failed or remains unknown, and what is planned next. It provides a distinct systems-and-operations record alongside Projects’ applied software work and Learning’s guided changes in understanding.

# Relationship to Existing Verticals

- **Projects** remains for bounded applied engineering work and its project-specific evidence. Home Lab must not duplicate the Projects index or recast an evolving personal system as a completed product case study.
- **Learning** remains for guided learning-progress records. Home Lab may mention lessons, but its primary unit is a real operating system and its decisions, not a tutorial or skill claim.
- **Home Lab** may later relate to Project or Learning records through explicit evidence and links, but no relationship is assumed until records support it.

# Information Architecture

The first public route is a Home Lab editorial index at `/home-lab/`. It should list only eligible Home Lab records and introduce the vertical’s operating-evidence standard. A later approved record may use a slug-derived detail route, for example `/home-lab/<approved-record-slug>/`; no detail slug is selected or authorized by this proposal.

Allowed record content types are:

- self-hosted system records;
- infrastructure experiments tied to a real operating system;
- versioned operating decisions and migrations;
- verification records, failures, limitations, and explicitly separated next versions.

It is not a shopping guide, generic blog, tutorial archive, dashboard, or a public claim of professional infrastructure operations.

# Minimum First Release

The smallest complete release, after separate authorization, is:

- one Home Lab index page;
- one Raspberry Pi Personal Cloud detail record;
- verified current NAS state, motivation, decisions, evidence, limitations, and an explicitly separated future roadmap;
- static navigation exposure only if the approved first record and index are both ready.

The first release must not imply that backup automation, Git hosting, Go services, Docker, authentication, dashboard, sharing, permissions, or stable personal-cloud operation already exists. Those are prospective versions or scope until supported by current evidence.

# Evidence and Verification Contract

Before implementation, the first record must identify:

- the confirmed current hardware and storage facts, without filling gaps from typical Raspberry Pi setups;
- the data-loss motivation as personal context, without invented incident detail;
- the current operating state and evidence source for each claim;
- verification performed, conditions, and limitations;
- failed, unavailable, unknown, or not-yet-tested behavior;
- completed state separately from a clearly labelled roadmap.

Evidence may include reviewed configuration excerpts, bounded command output, architecture diagrams, observations, or source records only when they are safe to publish, redacted as needed, and explained. Benchmarks, uptime, security guarantees, production users, hardware not confirmed in the record, and professional-infrastructure claims are prohibited without stronger evidence.

# Public Claim Boundary

The initial record may truthfully say it begins with a real NAS and is motivated by avoiding another total data-loss event only when those facts are retained in the approved record. It must present the system as evolving personal engineering work, not a finished cloud product or managed service. It must not claim completed versions, backup reliability, availability, security, production readiness, scale, or external users without direct evidence.

# Navigation Decision

Do not add `Home Lab` to shared navigation in this decision. A later bounded implementation may add the static destination only when `/home-lab/` and its approved first record both exist, Home/Projects/Learning/Home Lab remain coherent at narrow widths, and current-page behavior remains accessible without a mobile-menu runtime.

# VRT-04B Proposed File Boundary

VRT-04B remains blocked pending owner approval and first-record evidence readiness. Its exact files must be reconfirmed, but the smallest likely boundary is:

- add the minimum Home Lab content-family contract and collection registration only if existing Project or Learning contracts cannot truthfully represent the operating-system record;
- add the corresponding bounded public eligibility and route helpers only where existing helpers cannot be reused;
- add one approved Home Lab public record;
- create `src/pages/home-lab/index.astro` and a slug-derived detail page;
- modify `src/components/SiteHeader.astro` only if the approved index is ready for static navigation;
- modify `src/styles/global.css` only for bounded semantic Home Lab record treatment when existing editorial styles cannot present the evidence and limitations coherently.

The later task must not add packages, browser JavaScript, external fonts, a separate theme, assets without separate approval, configuration changes, aliases, redirects, About, Research, or another vertical.

# Deferred Scope

Deferred: multiple Home Lab records; unverified roadmap versions; monitoring dashboards; live system status; public sharing controls; user management; benchmark or uptime claims; security certifications; remote administration demonstrations; hardware-shopping content; dark mode; motion expansion; analytics; localization; About; Research; and additional public verticals.

# Owner Decisions Required

1. Approve Home Lab as the next public vertical and `/home-lab/` as its first route.
2. Approve a separate Home Lab content-family contract if review confirms existing family contracts cannot represent the record honestly.
3. Approve the first Raspberry Pi Personal Cloud record only after its current hardware, operating state, evidence, limitations, and roadmap separation are reviewed.
4. Approve static navigation exposure only with the complete first release; no navigation link is approved by this decision alone.

# Consequences

This proposal selects one evidence-led systems vertical while preserving Projects, Learning, the five current public routes, static rendering, no-browser-JavaScript behavior, and the approved visual identity. It does not authorize content authoring, implementation, deployment, or any claim about unfinished Home Lab stages.
