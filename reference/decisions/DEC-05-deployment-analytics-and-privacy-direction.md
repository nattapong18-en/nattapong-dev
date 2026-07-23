# DEC-05 — Deployment, Analytics, Privacy, and Recovery Direction

# Status

- **Decision ID:** DEC-05
- **Preparation stage:** DEC-05A completed
- **Approval stage:** DEC-05B completed
- **Status:** Approved
- **Decision owner:** Nattapong
- **Review basis date:** 2026-07-23
- **Approved deployment direction:** D1 — Provider-neutral managed static hosting
- **Approved analytics direction:** A1 — No analytics initially
- **Deployment authorized:** No
- **Provider selection authorized:** No
- **DNS or domain mutation authorized:** No
- **Analytics or tracking implementation authorized:** No
- **Secret or environment creation authorized:** No
- **Configuration or CI workflow creation authorized:** No
- **Public release authorized:** No
- **Network access authorized:** No
- **Task-list update:** Authorized only for this DEC-05B closure

DEC-05A prepared the Proposed comparison and recommendation package. DEC-05B records Nattapong's explicit owner approval of the direction-level deployment, analytics, domain/HTTPS, preview, contact, third-party, secret/log, recovery, equivalence, post-deployment, and incident policy. Approval does not establish that a domain, certificate, deployment, provider account, preview, log, contact mechanism, rollback path, or public environment currently exists or works.

# Decision Questions

1. Which deployment model fits a portable static Astro site without creating an unnecessary request-time runtime?
2. Is visitor analytics necessary for the initial release, and what privacy and consent surface would it create?
3. Which domain, HTTPS, preview, release, and public-environment boundaries should apply?
4. How should future secrets, build-time values, logs, third-party requests, and public contact be constrained?
5. What evidence should connect source, build, release, and deployed output?
6. What rollback, recovery, post-deployment validation, and privacy-incident responsibilities are proportionate to one maintainer?
7. Which operational choices must remain provider-neutral and reversible until implementation evidence exists?

# Authority and Inputs

- `AGENTS.md` and `docs/07-project-rules.md` govern authorization, factual accuracy, privacy, secret handling, validation, release boundaries, and honest omission reporting.
- `reference/design-dna.md` and `docs/00-project-vision.md` govern durable identity, evidence-led decisions, accessible and performant reading, originality, and one-maintainer sustainability.
- `docs/01-design-spec.md` through `docs/06-animation-spec.md` govern direct entry, progressive enhancement, accessible fallbacks, responsive evidence, performance costs, contact presentation, and third-party failure.
- `docs/08-implementation-plan.md` and `docs/09-task-list.md` keep deployment, analytics, consent, recovery, monitoring, and release separately gated.
- DEC-01 approves Astro with static output by default, optional justified local islands, and no default request-time server.
- DEC-02 approves repository-local build-time content and a separate allowlisted public source rather than wholesale publication of internal records.
- DEC-03 approves one light-first shared foundation, reviewed local assets when justified, case-by-case remote assets, and honest missing or unavailable states.
- DEC-04 approves layered hybrid validation, risk-based release gates, explicit omitted-check records, tiered capability-based environment support, and post-deployment handoff responsibilities.
- CON-02 supplies representative content, evidence readiness, missing artifacts, redaction needs, and publication blockers.
- `reference/synthesis/personal-profile.md` governs confirmed public contact destinations and private identity boundaries.
- PRJ-01 and PRJ-02 provide commit-scoped project privacy, secret-history, deployment, and publication limitations only.

Local planning records do not establish actual deployment, DNS, HTTPS, provider, analytics, logging, retention, consent, rollback, or operational behavior. No external source was accessed.

# Current Operational Baseline

Static local inspection found a planning and evidence repository, not an implemented website or operating deployment. Presence classifications below do not imply working behavior.

| Baseline item | Classification | Local evidence and qualification |
| --- | --- | --- |
| Implementation source | Not found | No tracked application or library source exists |
| Package manifest | Not found | No tracked package manifest exists |
| Lockfile | Not found | No tracked dependency lockfile exists |
| Package-manager configuration | Not found | No tracked package-manager configuration exists |
| Build configuration | Not found | No tracked Astro or other build configuration exists |
| Deployment configuration | Not found | No tracked hosting or deployment configuration exists |
| CI workflow | Not found | No tracked CI workflow exists |
| Environment files | Not found | Filename-only local review found no environment file; no value inspection occurred |
| Secret-management configuration | Not found | No tracked or visible local secret-management path was found |
| Analytics configuration | Not found | No analytics implementation or configuration exists |
| Cookie or consent implementation | Not found | No website implementation exists |
| Contact form or processing | Not found | The profile records a public email destination, not a form implementation |
| Domain or DNS configuration | Not found | The intended domain appears in planning text only |
| Redirect or header configuration | Not found | No implementation or provider configuration exists |
| Build output | Not found | No generated site output was found |
| Deployment record | Not found | No nattapong.dev deployment record exists |
| Release record | Not found | No website release record exists |
| Rollback record | Not found | No recovery execution record exists |
| Incident record | Not found | No website incident record exists |
| Remote Git configuration | Not found | The local repository has no configured Git remote |
| Astro static deployment direction | Documentation mention only | DEC-01 approves portable static output; no build exists |
| Release and post-deployment responsibilities | Documentation mention only | DEC-04 and later task records define direction; no result exists |

Deployment, HTTPS, DNS, analytics, consent, operational logs, and recovery are **Not applicable at the current stage** as executable systems because implementation and release scope do not exist. Their later behavior remains **To be verified**.

# Current Public and Privacy Boundaries

- `nattapong.dev` is the intended website identity and custom-domain target.
- The DNS zone, registrar state, nameservers, certificate state, provider connection, and public behavior were not inspected.
- A public email destination is confirmed in the profile record, but no public contact-purpose statement is approved.
- Precise location, phone, Thai name, private accounts, private documents, credentials, and unapproved social accounts remain excluded.
- `docs/` and `reference/` are internal and must not be published wholesale.
- Booking API historical `.env` history remains a sensitive publication blocker. No value may be read or reproduced through this decision.
- CourtFit API keys, request headers, real conversations, and its private commit-author email must not be exposed.
- No public-ready artifact set currently exists. Conditional candidates still require source, privacy, rights, accessibility, and publication review.
- A public repository or URL does not establish publication approval, deployment equivalence, privacy safety, current behavior, or public readiness.
- No current analytics need, consent design, cookie need, contact-form need, or request-time server requirement is approved.

# Non-Goals

DEC-05A does not:

- Select a deployment, analytics, DNS, registrar, CDN, storage, image, logging, monitoring, alerting, email, form, consent, incident-management, or CI provider.
- Create or access a hosting account, deployment, provider dashboard, DNS zone, certificate, public URL, or external service.
- Verify ownership, DNS, HTTPS, availability, provider behavior, or public output externally.
- Deploy a build, modify DNS, request a certificate, enable analytics, create cookies or consent UI, or create a contact form.
- Select final public contact wording.
- Create or read environment values, secrets, tokens, keys, credentials, or certificates.
- Create a manifest, lockfile, configuration, workflow, script, source file, route, component, asset, or public content.
- Select exact retention periods, monitoring schedules, operational commands, or numeric availability targets.
- Make a legal, compliance, privacy, security, availability, or release-readiness claim.

# Evaluation Criteria

Alternatives are assessed qualitatively through:

- Fit with Astro static output and the absence of a request-time server
- Provider portability and coupling
- Source, build, release, and deployment traceability
- Custom-domain and HTTPS capability
- Preview behavior, rollback, recovery, and availability
- Build, deployment, patching, and incident-response burden
- One-maintainer maintenance cost
- Secret, logging, retention, third-party-request, cookie, and consent surfaces
- Visitor and owner value
- Privacy, accessibility, static-fallback, and performance implications
- Public-contact requirements
- Failure transparency and current evidence readiness
- Reversibility
- Risk of speculative infrastructure or false confidence

Classifications:

- **Strong fit:** Aligns directly with approved requirements and present evidence.
- **Viable with conditions:** Could fit after explicit scope, evidence, and safeguards exist.
- **Weak under current evidence:** Current value does not justify its cost or risk.
- **Deferred pending implementation:** Cannot be responsibly established before matching implementation exists.

No numeric score or measurement is implied.

# Deployment Alternatives

## Deployment Alternative D1 — Provider-neutral managed static hosting

Direction: create a reproducible static build artifact and serve it through a managed static host while avoiding provider-specific runtime behavior by default.

- **DEC-01 fit:** **Strong fit** with static generation and no default request-time server.
- **Custom domain and HTTPS:** Common required capabilities, but actual behavior remains provider-specific and unverified.
- **Portability:** Strong when routes, assets, content meaning, and release records stay independent from proprietary services.
- **Preview:** Potentially useful, but exposure, access control, expiry, indexing, and source equivalence require review.
- **Build responsibility:** The project must still define a reproducible build and verify generated output.
- **Redirects, headers, not-found, caching:** Host-specific differences remain and must be tested.
- **Release provenance and rollback:** Viable when releases map to revisions and known-good output remains recoverable.
- **Logs and metadata:** Managed infrastructure may retain build, access, account, preview, or deployment data; scope is unknown until selection.
- **Operational burden:** Lower than operating a server, but not zero.
- **Secret surface:** Potentially small for a static core; provider access and build configuration still create operational boundaries.
- **One-maintainer suitability:** **Strong fit** if provider-specific additions remain limited.
- **Reversibility:** Strong because a static artifact can move between suitable hosts.

Main risk: “static” or “managed” could be mistaken for identical behavior, verified security, guaranteed availability, or no operational data collection.

## Deployment Alternative D2 — Provider-specific managed platform integration

Direction: use source-connected builds and provider-specific previews, functions, image services, analytics, routing, middleware, or deployment features.

- **Setup convenience:** Potentially strong after implementation.
- **Preview and rollback:** Provider features may simplify workflows, but their behavior and retention remain unverified.
- **Configuration:** Proprietary configuration can create hidden build and runtime assumptions.
- **Logs and data:** Source connections, build logs, previews, functions, analytics, and dashboards expand provider visibility.
- **Portability:** Weaker as functions, rewrites, image services, analytics, or middleware accumulate.
- **Account/outage dependency:** Higher than provider-neutral artifact hosting.
- **One-maintainer suitability:** Viable only when a verified feature saves more maintenance than it creates.
- **Migration cost:** Can become substantial through proprietary build and runtime behavior.
- **Current need:** **Weak under current evidence** because no implementation or provider-specific requirement exists.

A later verified need—such as a capability unavailable through portable static hosting—could justify reconsideration. Availability alone is not justification.

## Deployment Alternative D3 — Self-managed or continuously running server hosting

Direction: operate a server, virtual machine, container host, or continuously running application process.

- **Runtime need:** Not established; DEC-01 explicitly avoids a default request-time server.
- **Operations:** Requires operating-system and dependency patching, TLS operations, firewall/access control, backups, monitoring, availability, and incident response.
- **Secrets and logs:** Produces the broadest self-managed operational surface.
- **Complexity and cost:** High relative to a static personal website.
- **One-maintainer burden:** **Weak under current evidence**.
- **Static-site suitability:** Possible, but disproportionate without another verified server requirement.
- **Recovery:** Requires explicit backup, restore, server-state, access, and certificate procedures.
- **Reversibility:** Static output can still migrate away, but operational state and custom server configuration add cost.

Self-managed hosting is not justified merely as an engineering exercise.

# Deployment Comparison

| Criterion | D1 — Provider-neutral managed static | D2 — Provider-specific managed integration | D3 — Self-managed server |
| --- | --- | --- | --- |
| Static-first fit | Strong fit | Viable with conditions | Weak under current evidence |
| Current requirement fit | Strong fit directionally | Weak; no proprietary feature need | Weak; no server need |
| Custom domain / HTTPS | Expected capability; unverified | Expected capability; unverified | Maintainer-operated responsibility |
| Runtime requirement | None by default | May introduce managed runtime | Continuous server |
| Secret surface | Lowest potential, not zero | Expands with builds/functions/services | Broad operational secret surface |
| Logging surface | Provider build/access metadata | Broader platform and integration logs | Maintainer-defined server and service logs |
| Preview behavior | Conditional and host-specific | Often convenient but coupled | Must be designed and operated |
| Rollback potential | Artifact/revision based | Platform feature or artifact based | Manual operational design required |
| Recovery complexity | Low to moderate | Moderate and provider-dependent | High |
| Portability | Strong | Declines with proprietary features | Static output portable; operations less so |
| Provider coupling | Low when disciplined | Medium to high | Infrastructure and operations coupling |
| Maintenance | Proportionate | Can grow through integrations | Highest |
| Privacy | Smallest potential surface; verify provider | More third-party processing surfaces | Greater direct operational responsibility |
| Current readiness | Deferred pending implementation | Deferred; no need established | Not justified |
| Reversibility | Strong | Viable with migration cost | Viable with operational migration |
| False-confidence risk | Assuming static hosts behave identically | Treating platform convenience as complete operations | Treating control as security or reliability |
| Evidence before adoption | Build artifact, route needs, provider review | Verified proprietary feature requirement | Verified server requirement and operating plan |

# Approved Deployment Direction

**D1 — provider-neutral managed static hosting is approved for the initial public-release direction.**

- Use a reproducible static artifact after separately authorized implementation and release work.
- No request-time application server is required by default.
- No provider-specific runtime function or proprietary integration is approved by default.
- Keep public content, route meaning, assets, provenance, and release records provider-independent where practical.
- Provider selection remains a separate task.
- Deployment commands and configuration remain separately authorized REL-01 work.
- Require post-deployment verification of custom domain, HTTPS, direct entry, not-found behavior, links, media, privacy, and source equivalence.
- Retain a previous known-good public release or reproducible reviewed revision for recovery.
- Treat provider-specific routing, redirects, headers, caching, previews, logs, retention, rollback, availability, and provider access as **To be verified** until selection and inspection.

Main risks:

- Assuming every static host implements routes, redirects, caching, and headers identically
- Preview URLs becoming publicly accessible
- Build or deployment logs exposing sensitive information
- Drift between source, build, and deployed output
- Provider conveniences gradually creating lock-in
- Lack of a tested recovery path
- Overstating security or availability because hosting is managed

Reconsider D1 if an approved feature requires request-time behavior, provider-neutral static delivery cannot meet verified routing or operational needs, recovery evidence shows disproportionate friction, or measured one-maintainer cost favors a different bounded model. Any change requires a new or superseding decision.

# Analytics Alternatives

## Analytics Alternative A1 — No analytics initially

- No visitor analytics script, tracking cookie, analytics identifier, or dashboard dependency.
- No analytics-specific consent UI.
- Direct user feedback and operationally necessary observations may be considered only through separate justification.
- **Current owner/visitor value:** No demonstrated analytics question exists.
- **Privacy:** Smallest analytics-specific data surface.
- **Performance and maintenance:** Lowest analytics-specific cost.
- **Product-learning limitation:** No aggregate visitor behavior dataset.
- **Reversibility:** Strong; a later justified proposal can be evaluated.

This does not prove that a future deployed site makes zero third-party requests; deployment, assets, and infrastructure must be inspected.

## Analytics Alternative A2 — Privacy-preserving minimal analytics later

A later proposal could collect a narrow aggregate set only after a specific question exists. Directional safeguards to evaluate include:

- No cross-site tracking, advertising profile, fingerprinting, or user-account correlation
- No raw content or form-field capture
- No precise-location requirement
- Minimal events and retention
- Aggregated reporting
- Actual cookie, identifier, consent, disclosure, opt-out, deletion, and export behavior
- Provider access, trust, legal review, performance cost, failure behavior, and removal plan

**Current fit:** Viable with conditions later, but premature now. An unknown provider cannot be called cookie-free, anonymous, compliant, or privacy-safe.

## Analytics Alternative A3 — Conventional third-party analytics

- May collect broader page, session, campaign, audience, event, or advertising-oriented data.
- Creates greater cookie, identifier, consent, disclosure, third-party-script, retention, interpretation, and provider-access responsibilities.
- Adds performance and maintenance cost.
- Has no demonstrated necessity for the current personal engineering website.
- Can create misleading conclusions from small or context-poor traffic.
- Removal may require scripts, identifiers, cookies, dashboards, disclosures, and retained-data review.

**Current fit:** Weak under current evidence. Common use is not justification.

# Analytics Comparison

| Criterion | A1 — No analytics initially | A2 — Minimal analytics later | A3 — Conventional analytics |
| --- | --- | --- | --- |
| Current owner/visitor value | Adequate; no question demonstrated | Conditional on a specific question | Unsupported |
| Data collected | No analytics-specific visitor data | Narrow fields to be defined later | Broad potential collection |
| Cookies/identifiers | None for analytics | Unknown until implementation | Material likelihood and complexity |
| Third-party requests | None for analytics | Possible; provider-dependent | Likely |
| Consent/disclosure | No analytics-specific UI | Must follow actual behavior and review | Highest complexity |
| Performance cost | None for analytics | Limited only if verified | Higher potential cost |
| Maintenance | Lowest | Moderate | Highest |
| Interpretation quality | No dataset | Useful only for a bounded question | Risk of broad, low-value interpretation |
| Privacy risk | Lowest analytics-specific risk | Conditional and provider-dependent | Highest |
| Portability | Strong | Depends on data/model/provider | Provider and schema coupling |
| Current readiness | Strong fit | Deferred pending demonstrated need | Weak |
| Reversibility | Easy to add later | Must support safe removal | Removal and retained data are harder |
| Adoption trigger | DEC-05B approval for initial absence | Documented question and separate proposal | Material need outweighing costs |

# Approved Analytics Direction

**A1 — no analytics initially is approved for the initial release.**

- The initial release includes no analytics script, tracking cookie, visitor identifier, analytics dashboard dependency, or analytics-specific consent UI.
- Reconsider A2 only after a specific documented question cannot be answered proportionately through direct feedback or non-user-level operational evidence.
- A later analytics proposal must define the exact question, collected fields/events, necessity, retention, third parties, cookie/identifier behavior, consent/disclosure consequences, applicable opt-out or withdrawal, performance cost, failure behavior, deletion/export limitations, and provider/legal review.
- A3 is not approved for the initial release and is not justified by current evidence.

The initial release will not produce an analytics visitor-behavior dataset. Absence of analytics does not prove that the deployed site makes zero third-party requests; deployment, assets, and infrastructure still require inspection.

# Domain and HTTPS Direction

**Approved boundary:** `nattapong.dev` is the intended first public-release domain, and verified HTTPS is required before that release is considered ready.

- Ownership, DNS, certificate, canonical host, redirects, HTTP-to-HTTPS behavior, headers, and public operation remain **To be verified**.
- HTTP-to-HTTPS behavior must be verified later.
- Apex versus `www`, certificate renewal, DNS provider, and DNS records remain deferred.
- A temporary provider URL may be used only through separately approved preview or release scope and is not automatically canonical.
- Domain verification must not expose account, DNS, certificate, or recovery secrets.
- HTTPS alone does not establish security, privacy, uptime, availability, permanence, source equivalence, or production readiness.

# Preview, Release, and Environment Boundaries

Separately reviewed remote previews are approved directionally, but creating one still requires separate authorization.

## Local authoring or local preview

- Non-public by intention.
- Must still exclude unreviewed secrets and private data.
- Does not establish deployed behavior.

## Remote review preview

- Allowed only through separate authorization.
- Must be treated as potentially accessible unless access control is verified.
- `noindex`, obscurity, and unpredictable URLs are not privacy controls.
- May contain only content reviewed for its actual exposure.
- Must remain distinct from the canonical public release.
- Requires a responsible owner for later expiry, withdrawal, or removal where applicable.

## Public release

- Requires explicit REL-01 authorization, completed applicable QA/privacy gates, an approved destination, revision and limitation records, and post-deployment verification.
- Deployment success alone does not establish production validation.

## Post-release observed environment

- Public behavior is checked in the actual deployed environment.
- Results are dated observations, not permanent guarantees.

# Secrets and Environment-Variable Direction

**Approved direction:** The initial static core requires no runtime secret.

- No secret may be committed or embedded in generated HTML, client JavaScript, source maps, public assets, screenshots, logs, reports, or public content.
- A future build-time value must have a separately verified need and be classified as **Public configuration**, **Sensitive configuration**, or **Secret**.
- A public identifier is not automatically harmless; privacy and misuse implications still require review.
- Environment variables do not automatically prevent client exposure.
- A value used during static generation may become public output.
- Generated output must be inspected for unintended disclosure.
- Quality and incident reports must not reproduce secret values.
- DEC-05A creates no environment file, variable name, credential, token, key, certificate, or secret configuration.
- Booking API historical environment risk remains separate and unresolved.
- CourtFit user-supplied provider keys are not part of the initial nattapong.dev static-core requirement.

# Logs and Operational-Evidence Direction

**Approved direction:** Future build and deployment logs are minimal and purpose-limited.

- Logs must not print secrets, environment values, request credentials, private content, real conversations, unapproved contact details, or full sensitive request bodies.
- Paths, hostnames, account identifiers, email addresses, repository metadata, and preview URLs require review before appearing in a public report.
- Quality and release records should use safe summaries rather than raw logs.
- Operational evidence should record source revision, build/release scope, method, observed result, known limitation, and review date.
- Log access, provider visibility, fields, retention, export, deletion, and redaction remain deferred.
- Absence of an observed secret in a bounded log review is not a security guarantee.

# Third-Party Scripts and Embed Direction

**Approved direction:** No third-party script or embed is included by default; exceptions require case-by-case review and separate authorization.

- No analytics script, chat widget, comment system, social feed, external font request, video player, map, form processor, embed, or remote interactive content is assumed necessary.
- A later third-party request requires demonstrated value, data-flow review, privacy/consent and cookie/identifier review, rights review, accessibility and performance review, failure/static fallback, a maintenance owner, and a removal plan.
- Prefer a normal link or reviewed local static representation when it preserves the needed meaning.
- Remote failure must not remove essential information.
- Third parties must not receive private project, conversation, contact, or browsing information without a separately approved reason.
- Popularity is not justification, but future third-party use is not permanently prohibited.

# Public Contact Direction

## C1 — Static public email link

- Uses only the already confirmed public email after public-content authorization.
- Requires no website server processing or form storage and opens the visitor's mail client.
- Exposes the public address to scraping.
- Does not establish open-to-work, internship, freelance, collaboration, consulting, or opportunity availability.
- Requires approved surrounding wording.

## C2 — Contact form or form service

- Adds collection, validation, abuse handling, retention, delivery, third-party processing, failure, consent/disclosure, accessibility, and possibly runtime requirements.
- Is not currently justified and requires a separate decision.

## C3 — No contact mechanism initially

- Minimizes exposure and maintenance.
- Removes a direct contact path despite the existing confirmed public destination.

**Approved direction: C1 — a static public email link only for the initial release.** Only the confirmed public destination may later be used. Surrounding wording requires separate public-content approval. No contact form is approved initially, and no open-to-work, hiring, internship, freelance, consulting, collaboration, or similar availability statement is approved. DEC-05B creates neither the link nor public copy.

# Rollback and Recovery Direction

**Approved direction:** Every public release maps to an identifiable source revision, approved content state or revision, build/configuration revision, deployment destination, observation date, and known limitations.

- Preserve a previous known-good public release or reproducible known-good revision.
- Recovery may redeploy a previous reviewed static artifact or reproducibly rebuild a reviewed revision, depending on later provider capability.
- Rollback must not silently rewrite Git history.
- A later recovery record should identify trigger, affected scope, previous and replacement revisions, reason, known limitations, verification, and follow-up.
- A failed release may be withdrawn rather than left publicly misleading.
- Privacy or secret exposure may require immediate removal before a complete fix.
- Recovery succeeds only after public verification; a green provider status is insufficient.
- Provider-specific rollback, artifact retention, cache purge, DNS recovery, backup, restoration, and recovery commands remain deferred.
- No zero-downtime promise is made.

# Source and Deployment Equivalence

**Approved direction:** Public release evidence maps source, approved content, build/configuration, release, destination, observation date, and known limitations.

- A provider dashboard state or successful build does not independently prove source equivalence.
- A reachable URL does not prove correspondence to a reviewed repository state.
- Generated output, routes, metadata, assets, and public claims require post-deployment comparison.
- Dashboard edits, provider rewrites, environment differences, stale caches, redirects, or manual uploads can create drift.
- Unknown equivalence is recorded **To be verified**.
- An unverified deployment must not be called current, canonical, secure, production-ready, or source-equivalent.

# Post-Deployment Validation Direction

**Approved direction:** DEC-04's quality layers apply after deployment and should cover, as applicable:

- Intended public-domain resolution and HTTPS
- Canonical and redirect behavior
- Required direct-entry routes and not-found recovery
- Navigation, browser history, and internal/external links
- Metadata, language metadata, and sharing behavior where applicable
- Representative Thai, English, mixed-language, and long-content reading
- Keyboard, focus, zoom, reflow, narrow/touch, and reduced-motion behavior
- Images, media, diagrams, captions, alternatives, and missing/broken assets
- Public contact
- Third-party requests
- Analytics absence or approved behavior
- Cookies and storage behavior
- Secret and private-data exposure
- Performance observations
- Source/deployment equivalence
- Known limitations and rollback/recovery availability

Deployment success is not post-deployment validation. Results are dated observations from the actual environment. Critical public failures require correction or withdrawal of affected scope. DEC-05B executes no check and selects no command or tool.

# Privacy-Incident Direction

**Approved direction:** **Contain → Assess → Remediate → Verify → Document and follow up.**

This direction applies to accidental exposure of secrets, environment values, private contact or identity data, real conversations, sensitive screenshots, private repository metadata, rights-restricted material, unapproved internal content, or tracking/third-party requests beyond approved policy.

1. **Contain**
   - Remove or withdraw affected public content or release when practical.
   - Disable an affected integration only through separately authorized operational access.
   - Do not copy the sensitive value into reports.
2. **Assess**
   - Identify category, affected scope, exposure path, source/deployment revision, and verified observation window.
   - Do not speculate beyond evidence.
3. **Remediate**
   - Rotate or revoke affected credentials when applicable.
   - Correct the authorized source, configuration, asset, log, or public content.
   - Rebuild or redeploy only through authorized scope.
   - Request cache or log removal where supported and justified.
4. **Verify**
   - Confirm the public exposure path is closed.
   - Check generated output and relevant third-party behavior.
   - Record what could not be verified.
5. **Document and follow up**
   - Preserve a privacy-safe incident record.
   - Record limitations and required maintenance.
   - Determine owner, provider, institutional, or legal review separately.

Removal from a page does not prove deletion from caches, logs, mirrors, analytics, providers, or third parties. Complete deletion must not be claimed without verification. Incident records must not reproduce secrets. Exact legal, notification, provider, and retention duties require context-specific review outside DEC-05A.

# Maintenance and Reversibility

- Provider-neutral static output is easier to migrate because generated files and editorial meaning need not depend on a host runtime.
- Inexpensive changes include moving the same reviewed static artifact, changing a normal external link, or continuing without analytics.
- Provider functions, proprietary image pipelines, hosted forms, platform analytics, provider redirects, account-linked previews, and dashboard-only settings create operational lock-in.
- Domain identity should remain separate from hosting so a host change does not require a new public identity.
- Analytics can be proposed later; removing it must address scripts, requests, identifiers, cookies, documentation, consent behavior, and retained data.
- Reviewed local assets and normal links reduce embed dependence while retaining rights and maintenance duties.
- Source/release records support reconstruction and recovery.
- Exact provider configuration can remain deferred until an authorized implementation and provider-selection scope exists.
- One maintainer should prefer a reproducible static release, a small operational surface, safe release records, and only services with demonstrated value.
- Unused services should be removed honestly rather than retained as ceremonial infrastructure.

# Approved-Direction Consequences

The approved direction provides input without activating tasks:

- **FND-01:** Keep provider facts out of content semantics.
- **FND-02:** Preserve the static core and avoid assuming third-party scripts.
- **NAV-01:** Preserve direct-entry and static-host portability.
- **VRT-01:** Compare candidates without requiring analytics or screenshots.
- **VRT-02:** Avoid provider-specific public claims.
- **EVD-01:** Preserve local/remote asset, privacy, provenance, and failure direction.
- **STA-01:** Support unavailable, broken, private, and withdrawn states.
- **PERF-01:** Review third-party requests and asset behavior.
- **PRV-01:** Apply secret, contact, analytics, embed, log, and incident boundaries.
- **QA-01:** Retain omitted deployment and privacy checks.
- **REL-01:** Select/configure a provider only through separate authorization after QA.
- **OPS-01:** Maintain domain, links, source equivalence, privacy, recovery, and limitations.

DEC-05 changes no downstream task status and authorizes no implementation, provider selection, deployment, analytics, public content, or release.

# Deferred Decisions

The following remain unresolved:

- Deployment provider and hosting account
- DNS provider, registrar changes, nameservers, and DNS records
- Apex versus `www`, canonical host, redirects, and headers
- HTTPS and certificate implementation
- CDN, object storage, image service, build service, and preview service
- Preview access control
- CI provider and workflow
- Build/deployment commands and configuration files
- Environment-variable names and secret store
- Logging, monitoring, and alerting providers
- Exact log fields and retention
- Artifact retention, cache behavior, and cache purge
- Backup system and rollback commands
- Recovery-time, uptime, and availability expectations
- Analytics provider, events, fields, and retention
- Cookie and consent implementation
- Legal basis or compliance claim
- Contact-form and email-delivery providers
- Abuse and spam handling
- Incident-notification process
- Exact post-deployment tools
- Public-content wording
- Implementation files
- Release date

DEC-05A did not resolve these choices, and DEC-05B leaves all of them unresolved.

# Decision-Owner Answer Record

Nattapong supplied these explicit DEC-05B answers:

1. **Deployment — D1 provider-neutral managed static hosting.** Consequence: the initial release direction uses a reproducible portable static artifact; provider selection, configuration, commands, and release remain separately gated.
2. **Analytics — A1 no analytics initially.** Consequence: no initial analytics script, tracking cookie, visitor identifier, dashboard dependency, or analytics-specific consent UI; A2 requires a documented question and separate decision.
3. **Public domain — `nattapong.dev` with verified HTTPS.** Consequence: the first public release waits for domain and HTTPS verification, while ownership, DNS, certificate, canonical host, redirects, and public behavior remain unverified.
4. **Preview — Separately reviewed remote previews.** Consequence: a remote preview requires separate authorization, exposure-appropriate content, potentially-public treatment, status separation, and an expiry/withdrawal/removal owner.
5. **Contact — Static public email link only.** Consequence: only the confirmed destination may later be used with separately approved wording; no form or availability claim is approved.
6. **Third parties — None by default, case by case.** Consequence: every exception requires demonstrated value and the approved data-flow, privacy, consent, identifier, rights, accessibility, performance, fallback, maintenance, removal, and authorization review.
7. **Recovery and incidents — Revision-mapped recovery, equivalence verification, and privacy-safe incident records.** Consequence: releases retain revision/context mapping and known-good recovery; incidents follow Contain, Assess, Remediate, Verify, and Document/follow up without reproducing private values.

# Approved Decision and Operational Boundary

- DEC-05 is **Approved** at the direction level only.
- No provider, account, DNS mutation, certificate, configuration, secret, environment file, analytics, tracking, cookie, consent UI, contact form, CI, deployment, release, public content, or network action is authorized.
- Provider selection and REL-01 remain separately gated.
- Actual domain, HTTPS, provider, preview, release, log, rollback, recovery, source-equivalence, and public behavior remain unverified.
- Every later task remains subject to its own dependencies and explicit authorization.

# Validation Record

- Confirmed the authorized workspace and `main` branch.
- Confirmed required commits `267293d` and `6358a71` are present.
- Confirmed the pre-task working tree and staging area were clean.
- Confirmed this DEC-05 path did not already exist.
- Reviewed the required governing, design, decision, task, representative-content, profile, and project-audit records.
- Inspected the tracked local tree and operational filename categories without opening a secret.
- Found no implementation, manifest, lockfile, package/build/deployment/CI configuration, environment file, secret configuration, analytics, consent, contact form, domain configuration, build output, release, rollback, or incident record.
- Confirmed no Git remote is configured.
- Compared D1, D2, and D3 and A1, A2, and A3 qualitatively.
- Covered domain/HTTPS, previews, release, secrets, logs, third parties, contact, recovery, equivalence, post-deployment validation, and privacy incidents.
- Selected no provider, account, DNS record, certificate, service, command, configuration, secret, retention period, threshold, or operational value.
- Performed no deployment, domain, HTTPS, analytics, cookie, consent, contact-form, rollback, incident, browser, provider, or network action.
- Included no private value, credential, API key, environment value, private author email, precise location, private account, or real conversation.
- Validation is limited to local static source review, Markdown structure, decision-status and deferred-choice review, sensitive-pattern review, diff integrity, and changed-path/Git-state review.

## DEC-05B closure validation

- Nattapong explicitly approved the direction-level operational policy and all seven bounded owner answers.
- D1–D3 and A1–A3 analysis remains preserved.
- No provider, account, DNS value, certificate, analytics system, secret, configuration, command, retention period, operational service, or implementation was selected.
- No deployment, analytics, DNS, domain, certificate, rollback, browser, post-deployment, or network action ran.
- No public content was created and no private or secret value was added.
- Only this DEC-05 record and `docs/09-task-list.md` were authorized.
- Deployment, release, public content, and publication remain separately gated.
