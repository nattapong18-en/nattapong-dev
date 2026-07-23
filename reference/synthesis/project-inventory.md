# Project Inventory

## Purpose of This Document

This document records factual information about projects that may appear on nattapong.dev.

It is an internal source document for content planning, case studies, design decisions, and implementation. It is not final public website copy.

Every claim should be verified against the current source code, repository, deployed application, documentation, or other available evidence before publication.

Projects should be described according to their actual maturity, ownership, scope, and results.

# Project Classification

The current project inventory contains:

- Rust Booking API
- CourtFit Basketball Shoe Chatbot

Learning exercises, coursework, small experiments, and guided tutorials should not be added as major projects unless they develop into substantial independent work.

Items such as the Rust book web server, thread pool implementation, Linux configuration, LearnCpp exercises, and university laboratories belong primarily in learning progress, technical notes, or experiments.

# Rust Booking API

## Basic Information

**Project name:** Booking API

**Working title:** Rust Booking API

**Project type:** Individual backend engineering project

**Status:** Coherent source-level functional-MVP candidate; runtime state unverified

**Current maturity:** Educational backend MVP; not production-ready

**Development period:** The audited repository contains 31 commits through the recorded commit; a complete public timeline has not been established.

**Repository:**
https://github.com/nattapong18-en/booking_api

**Audited branch:** `main`

**Audited commit:** `d2f754fdd2fd5581ecca9f9e16539504020f6361`

**Evidence source:** `reference/audits/PRJ-01-booking-api-evidence.md`

**Evidence scope:** Static read-only repository evidence at the audited commit only. No build, test, migration, database, Redis, API, container, or deployment was executed or verified.

**Live deployment:** To be verified. Render and Vercel appear only as README documentation claims in the audited backend repository.

## Project Summary

The Rust Booking API is an individual educational backend project developed to explore booking-system behavior using Rust. Nattapong's individual-project role comes from the confirmed internal record; repository metadata alone does not prove contribution boundaries.

The audited source contains a coherent registration, login, room-availability, booking, listing, and cancellation workflow. That supports a source-level functional-MVP description, but it does not establish that the application currently builds, runs, deploys, or behaves correctly at runtime.

It is a learning and engineering project, not a production booking platform. The audited README's production-ready wording is not supported and must not be repeated.

## Repository Snapshot and Verification Boundary

The current verified repository snapshot is `main` at commit `d2f754fdd2fd5581ecca9f9e16539504020f6361`. Findings in this record do not automatically apply to later commits, other branches, separate frontend code, or any deployed service.

Repository-native evidence verifies source structure and configuration presence. It does not prove runtime correctness, build success, passing tests, deployment availability, production maturity, security, or concurrency safety.

## Problem and Motivation

The project was created to understand how a backend system should:

- Store booking and user information
- Connect to a relational database
- Authenticate users
- Restrict access to user-specific information
- Prevent unauthorized modification of data
- Handle multiple booking requests
- Coordinate backend components
- Manage errors and application state

The project was also intended to move beyond passive tutorial learning and develop understanding through implementation and debugging.

## Intended Users

The intended users have not yet been formally defined.

The current system should be treated as a technical prototype rather than a validated product for real customers.

## Nattapong’s Role

Nattapong designed and developed the backend application as an individual project.

Current responsibilities include:

- Backend development
- API design
- Data modeling
- Database integration
- Registration, login, password-hashing, and JWT-related implementation
- Source-level user-ownership checks for booking operations
- Application-state handling
- Docker and CI configuration work
- Debugging
- Documentation

These contribution statements remain internal, user-confirmed context. The audited source verifies implementation presence but not runtime completion or sole authorship from Git metadata alone.

## Verified Technology Roles

- **Rust:** Implementation language.
- **Axum:** API framework and route/extractor/response layer.
- **Tokio:** Asynchronous runtime support.
- **SQLx:** PostgreSQL pooling, migrations, query macros, and transaction API.
- **PostgreSQL:** Users, rooms, and bookings persistence integrated in source across all six registered handlers; runtime connectivity and persistence remain unverified.
- **Redis with deadpool-redis:** Room-availability response caching with a 60-second expiry; current key construction and invalidation are inconsistent.
- **jsonwebtoken / JWT:** Login token issuance and Bearer-token validation with claim extraction; security and runtime behavior remain unverified.
- **bcrypt:** Password hashing during registration and verification during login.
- **Serde and serde_json:** Request, response, and cache serialization.
- **validator:** Registration validation.
- **chrono:** Date/time handling and token-expiry calculation.
- **dotenvy and environment variables:** Application configuration.
- **tower-http and tracing:** Permissive CORS, request tracing, and application logging.
- **Dockerfile:** Container configuration is present but was not built or executed.
- **GitHub Actions:** Workflow configuration is present, but current execution and success are unverified.
- **Render:** README documentation claim only; current backend deployment is unverified.
- **Vercel:** README documentation claim only; no verified Vercel role or frontend exists in the inspected backend tree.

Technologies should appear publicly only with these evidenced roles and qualifications. Transitive dependencies, unused declarations, and README labels do not establish a public technology claim.

## Verified Source-Level Route Purposes

The audited router registers six routes using **GET**, **POST**, and **PATCH**:

- public registration: `POST /register`;
- public login: `POST /login`;
- public room-availability lookup: `GET /rooms`;
- authenticated booking creation: `POST /book`;
- authenticated current-user booking listing: `GET /bookings`; and
- authenticated current-user booking cancellation: `PATCH /cancel/{id}`.

No PUT or DELETE route is registered at the audited commit. Route registration and handler source are verified; runtime endpoint behavior is not.

## Authentication Status

**Classification:** Partial but wired beyond registration; runtime and security verification required.

The audited source includes:

- registration validation;
- bcrypt password hashing and verification;
- login;
- JWT issuance with user identity and expiration claims;
- Bearer-token validation and claims extraction; and
- protected create, list, and cancel booking handlers.

This is not a complete authentication lifecycle. No secure, complete, or production-grade claim is supported. Runtime token behavior, error behavior, logout/revocation, refresh, key rotation, account recovery, rate limiting, and other operational controls remain unverified or absent from the inspected source.

## Authorization and User-Data Isolation

The authenticated identity is used in inspected source to:

- associate a new booking with the authenticated user;
- restrict booking-list reads to the authenticated user; and
- restrict cancellation lookup and update to the authenticated user's confirmed booking.

These are verified source-level ownership checks. Runtime cross-user isolation was not tested, and no broader role or permission model exists. They must not be presented as proof of complete authorization security.

## PostgreSQL and Persistence

PostgreSQL is integrated at source level across all six registered handlers. The current migration defines users, rooms, and bookings; usernames have a uniqueness constraint, and booking user/room fields use relational foreign keys.

Booking creation starts a PostgreSQL transaction, performs an overlap query, inserts a booking, and commits. The audit did not execute database connection, migration, query, or persistence behavior. Persistence is therefore source-integrated but runtime-unverified.

## Redis Responsibility

Redis is used as a room-availability response cache with a 60-second expiry. It is not used for sessions, JWT storage, locks, rate limiting, idempotency, or booking-record storage in the inspected source.

The audited source has cache-key and invalidation inconsistencies: lookup and booking invalidation use different prefixes, one lookup date format is malformed, and invalidating one exact booking range cannot cover every overlapping cached query range. Redis connection failure can also fail some request paths. Correct invalidation and runtime Redis behavior are not established.

## Booking Integrity and Concurrency

Application-level overlap checking exists, and the check and insert occur in one PostgreSQL transaction. The current PostgreSQL schema has no overlap exclusion constraint. No row lock, serializable isolation request, optimistic-concurrency mechanism, Redis lock, or idempotency mechanism was found.

The source therefore does not establish concurrent double-booking prevention. Transaction presence must not be described as a concurrency guarantee.

## Architecture

The static audit verified a single Rust binary with:

- an entry point that loads configuration, creates PostgreSQL and Redis pools, runs migrations, constructs shared state, applies CORS, and starts Axum;
- one router containing six routes;
- handlers with SQLx queries embedded directly rather than a separate service/data-access layer;
- a JWT claims extractor;
- request, response, error, and application-state models;
- password and availability helpers;
- one current PostgreSQL migration;
- colocated tests;
- SQLx offline query metadata; and
- Docker and GitHub Actions configuration.

This is a source-structure description, not an approved architecture diagram or runtime topology.

## Important Engineering Decisions

Source evidence now supports documenting:

- Why Rust was chosen
- Why Axum was selected
- How application state is managed
- Why SQL access is currently embedded in handlers
- How registration, login, bcrypt, JWT issuance, and claims extraction are organized
- How authenticated identity constrains booking operations
- Why booking creation uses a transaction
- Why application-level overlap checking does not guarantee concurrent integrity
- Why Redis is used for availability caching and how its invalidation should be corrected
- How errors are represented
- How configuration and secrets are managed
- How the application is deployed

The reasons behind these choices have not all been documented. Implementation presence must not be turned into invented decision rationale.

## Main Challenges

Known learning challenges include:

- Understanding how the application connects to a database
- Designing how data should be stored
- Connecting API handlers to persistent data
- Designing registration and authentication
- Preventing users from accessing or modifying another user’s information
- Understanding asynchronous backend behavior
- Thinking about concurrent booking operations
- Debugging integration issues

## Current Result

A coherent source-level functional-MVP candidate implements the main registration, login, availability, booking, listing, and cancellation flow. Runtime state remains unverified.

The project provided practical experience with:

- Rust backend development
- HTTP APIs
- Database integration
- Persistent data
- Registration and authentication concepts
- Authorization concerns
- Application state
- Async behavior
- Docker and CI configuration
- Integration debugging

The static source facts are recorded in `reference/audits/PRJ-01-booking-api-evidence.md`. Build success, running endpoints, passing tests, live deployment, runtime security, and production behavior are not verified.

## Validation and Testing

Seven automated test functions are tracked:

- five unit tests for room-availability overlap cases; and
- two asynchronous registration-handler tests.

The tests were not run during the audit. Current passing status and coverage are unverified. The handler tests depend on PostgreSQL and Redis and recreate a users table in their test setup.

GitHub Actions workflow configuration exists, but its current result was not inspected. Its configured test command uses a name filter that does not match the discovered test names, so configuration presence does not prove that the intended tests currently run or pass.

Runtime verification still needs to cover:

- User registration
- Login and token behavior
- Database operations
- Invalid input
- Duplicate data
- Cross-user authorization behavior
- Booking creation and cancellation
- Redis cache hits, expiry, invalidation, and failure
- Error responses
- Concurrent booking requests
- Migrations and container behavior

## Limitations

Current verified or preserved limitations include:

- The project was not built or run during the static audit.
- The seven tracked tests were not executed; passing status and coverage are unverified.
- Authentication is partial as a complete lifecycle, and runtime security is unverified.
- Source-level ownership checks exist, but runtime cross-user isolation and broader authorization are unverified.
- Redis cache-key construction and invalidation are inconsistent, and failure can affect request paths.
- Concurrent double-booking prevention is not established.
- The Dockerfile was not built or executed.
- GitHub Actions configuration does not establish current CI success.
- Render and Vercel are README claims only; current deployment remains To be verified.
- Production readiness has not been established and the README's production-ready wording is unsupported.
- No verified load testing
- No formal security review
- Monitoring and alerting have not been documented
- The repository has no tracked license file at the audited commit.

## Historical Environment-File Risk

A tracked `.env` path existed in repository history and was later deleted. Its contents were deliberately not inspected or reproduced. Private owner review is required, and any credential that may have been usable should be rotated when appropriate.

Prominent public promotion of the repository or its history remains blocked until this review is resolved. This record does not claim that a current valid secret is exposed.

## Lessons Learned

Important learning outcomes include:

- Backend concepts become clearer through implementation than through passive study alone.
- Database design affects API behavior and application structure.
- Authentication and authorization are separate concerns.
- Protecting user data requires checks throughout the request flow.
- Async code does not automatically guarantee correct concurrent behavior.
- Integration problems often reveal missing understanding between system layers.
- A functional MVP is different from a production-ready system.

## Evidence Available

Conservative candidates for later public use include:

- the fixed audited commit;
- a curated source-tree overview;
- a curated six-route table;
- a migration-derived users/rooms/bookings data model;
- registration, login, bcrypt, JWT, and claims-extraction excerpts;
- authenticated ownership-check excerpts;
- qualified automated-test excerpts;
- Dockerfile presence; and
- a carefully reviewed commit-history summary.

The repository URL and history are not ready for prominent public promotion until the historical `.env` review is resolved. Every excerpt requires privacy, redaction, accuracy, context, and current-commit review. No tracked screenshots or diagrams were found in the audited repository.

## Evidence Still Needed

Useful evidence to collect later includes:

- Build result for the audited or later approved canonical commit
- Migration and disposable-database verification
- Runtime results for all six routes
- Authentication and cross-user authorization tests
- Concurrent booking tests and an integrity design that supplies a real guarantee
- Corrected Redis key/invalidation behavior and runtime cache tests
- Test execution results and coverage understanding
- Example requests and responses
- Deployment status
- Known error cases
- Screenshots from API testing tools
- Benchmark or concurrency results, if performed
- Project timeline
- Development reflections
- Private historical `.env` review and any necessary credential rotation
- Public-artifact redaction and publication approval

## Publication Notes

Before publishing this project:

- Tie source claims to the audited commit or a later separately audited commit.
- State clearly that it is an educational, non-production-ready backend MVP.
- Do not call it production-ready.
- Do not claim secure authentication without review.
- Do not claim complete authorization from source-level ownership checks.
- Do not claim correct Redis invalidation.
- Do not claim passing tests until the tests are run and inspected.
- Do not claim correct concurrency handling without an evidenced integrity guarantee and runtime testing.
- Do not claim scalability without measurements.
- Keep deployment To be verified until separately inspected.
- Resolve the historical environment-file risk before prominent repository promotion.
- Explain Nattapong’s actual contribution.
- Separate completed behavior from planned behavior.
- Present limitations near the relevant claims.

# CourtFit Basketball Shoe Chatbot

## Basic Information

**Project name:** CourtFit

**Project type:** Individual project according to Nattapong’s confirmed internal record; full-stack and AI integration source exists

**Status:** Educational and experimental source-level functional-MVP candidate; runtime state unverified

**Current maturity:** Domain-specific conversational prototype; not a real store and not production-ready

**Development period:** The four commits available to the audit span July 21–22, 2026; development outside that bounded history is To be verified.

**Repository:**  
https://github.com/nattapong18-en/chat-bot-test

**Audited branch:** `main`

**Audited commit:** `3c9cc65d00622731b4a381ddb785edc3713f8c46`

**Evidence source:** `reference/audits/PRJ-02-courtfit-evidence.md`

**Evidence boundary:** Source findings cover only the recorded commit. Build, runtime, provider, browser, testing, accessibility, privacy-security, and deployment behavior were not verified.

**Deployment:** Vercel appears in README and technical documentation only. No live URL, Vercel configuration, CI/deployment workflow, or deployment result was found; current deployment remains To be verified.

## Project Summary

CourtFit is an educational and experimental basketball-shoe recommendation chatbot. The audited source supports a domain-specific conversational prototype and a source-level functional-MVP candidate, not a working commerce platform.

The source prompts users about factors such as:

- Playing position
- Playing style
- Court type
- Budget
- Foot shape
- Performance priorities

The application is a domain-specific AI project rather than a general-purpose chatbot.

Recommendations are generated by the selected model from system instructions and conversation context. They are not backed by a verified product catalog and may be inaccurate or fabricated.

## Problem and Motivation

Basketball players may need to compare many shoe models before finding options suitable for their needs.

CourtFit was created to provide a conversational way to narrow down those choices.

The project was also built to practice:

- Domain-specific chatbot design
- AI provider integration
- Provider-stream consumption and client response handling
- Responsive interface development
- Error handling
- API-key workflows
- Multi-provider support
- Recommendation-flow design
- User experience refinement

## Intended Users

Potential users include basketball players who want an initial shortlist of shoe types or models based on their preferences.

The project has not been validated as a professional footwear-fitting or purchasing service.

Recommendations are informational and should be independently verified.

## Nattapong’s Role

Nattapong’s confirmed internal record classifies CourtFit as an individual project. The audited repository independently establishes the source implementation but does not prove all contribution boundaries.

Source-level work includes:

- Product concept
- Interface design
- Responsive frontend patterns
- Conversation-flow design
- Basketball-specific recommendation logic
- Server-side OpenAI and Google GenAI adapters
- Provider-stream consumption with route buffering
- Provider switching
- Error handling
- Stop and Retry source paths
- User-provided-key workflow through the CourtFit server
- Dark-mode support
- Thai/English interface and prompt intent
- Project documentation

These are source findings at the audited commit. Runtime correctness, provider compatibility, visual behavior, testing, and deployment remain unverified.

## Architecture and Technologies

- **Framework:** Next.js App Router with React and TypeScript.
- **Styling and UI:** Tailwind CSS and local shadcn-style components using Radix primitives.
- **Routes:** One page route, `/`, and one API route, `POST /api/chat`.
- **Boundaries:** A browser client posts to the CourtFit server route; server-only adapters call the selected OpenAI or Gemini provider.
- **OpenAI:** Server-side OpenAI SDK adapter using the Responses API source path.
- **Gemini:** Server-side Google GenAI SDK adapter with provider-specific role conversion.
- **Other verified roles:** Zod request validation, next-themes for light/dark/system themes, and Lucide icons.
- **Message rendering:** Plain pre-wrapped text. No Markdown rendering dependency or implementation was found.
- **Server requirement:** The dynamic Node route requires a server runtime.

## Routes and Data Flow

- **`/`:** The single App Router page renders the client-side chat screen.
- **`POST /api/chat`:** The single route validates requests, selects a server adapter, consumes the provider stream, buffers its deltas, and emits one assembled response event.
- **API-key flow:** Browser React state → `POST /api/chat` → CourtFit application server → selected request-scoped provider adapter → selected provider.
- **Conversation flow:** Every turn sends all current non-empty retained user and assistant messages through the CourtFit server to the selected provider.

## Main Capabilities

The audited source contains:

- Basketball-specific recommendation conversations
- Recommendation prompts for position, court, playing style, budget, foot shape, and performance priorities
- Server-side OpenAI and Gemini provider adapters
- Provider switching
- Thai/English interface and prompt intent
- Thai-character detection with a same-language-response instruction
- Provider-stream consumption
- Stop and Retry controls and request paths
- Responsive layout patterns
- Light, dark, and system theme switching
- Quick recommendation controls
- User-provided API keys
- React-memory chat and key state

Runtime behavior was not executed. Actual provider responses, language quality, cancellation, retry, browser behavior, and visual correctness remain unverified.

## Conversation and Recommendation Design

The chatbot is intended to collect relevant basketball-shoe preferences before presenting recommendations.

The current recommendation process may consider:

- Position
- Play style
- Court surface
- Budget
- Foot width or shape
- Cushioning preference
- Traction preference
- Stability preference
- Weight preference
- Durability preference

The system instructions are source evidence of intent, not proof of accurate recommendations. There is no structured catalog or verified product-data source.

## Provider Integration and Streaming

- **OpenAI:** A server-side OpenAI SDK adapter uses the user key per request, supplies normalized full conversation history and system instructions to the Responses API source integration, consumes a provider stream, and receives an abort signal. Successful calls and current model/API compatibility are unverified.
- **Gemini:** A server-side Google GenAI SDK adapter uses the user key per request, converts assistant messages to Gemini `model` roles, supplies a system instruction, consumes a provider stream, and receives an abort signal. Successful calls and current model/API compatibility are unverified.
- **Streaming boundary:** Both adapters consume provider streaming APIs, but the audited route buffers provider deltas and returns one assembled text event after provider iteration. The browser contains an NDJSON event reader; incremental assistant display while generation is in progress is not established.

## Stop, Retry, and Provider Switching

- **Stop:** A Stop button and `AbortController` path exist. The signal is wired through browser fetch, the route request, and both adapters, and source maps abort to a stopped message state. Provider-side cancellation, races, billing effects, and useful partial-response preservation remain unverified. Route buffering means partial assistant content is generally unavailable before provider completion.
- **Retry:** Retry is available for error messages, reuses the failed assistant-message slot, resends relevant conversation history, uses the current provider and key, and creates a new request through the shared provider path. Runtime success and rapid-interaction duplicate prevention remain unverified.
- **Provider switching:** OpenAI and Gemini are selectable. Changing provider or key clears the conversation, connection, draft, and key state, so previous conversation is not intentionally retransmitted to the new provider. There is no user model picker.
- **Mobile limitation:** Desktop provider/key actions are wired. The mobile drawer renders its sidebar without the required state and callbacks; its New Chat action is inert and key/provider action parity is incomplete.

## API-Key and Conversation Privacy Boundary

Users provide their own provider key. In the audited implementation:

- The key is held temporarily in browser React state.
- The key is sent to the CourtFit application server with every request and retry.
- The server passes it to the selected request-scoped provider client.
- No direct project persistence was found in localStorage, sessionStorage, cookies, a database, chat-message state, or analytics.
- No key logging was found in audited project code.
- Refresh, Clear, provider change, or key change clears relevant React state.
- Chat history exists only in React memory in inspected project source and does not persist through project code.
- Every turn sends all current non-empty retained user and assistant messages through the CourtFit server to the selected provider.
- Provider or key changes clear the conversation.
- No project analytics or prompt, response, or key logging was found.

This is not a client-only BYOK architecture and must not be described as secure merely because the key is user-provided. Deployment infrastructure, middleware, process memory, HTTPS, platform logging/observability, browser extensions, same-origin scripts, operational controls, and provider retention were not verified. Complete conversation privacy is not established.

## Product and Store Boundary

The audited source contains:

- No structured shoe catalog, product database, product API, product images, product cards, or detail pages
- No verified-product search or filter implementation
- No current price or stock feed
- No cart, checkout, authentication, or commerce transaction
- Model-generated recommendations based on prompts and conversation

Safe description: **Conversational basketball-shoe recommendation prototype without a structured catalog or commerce system.**

Recommendation correctness is not guaranteed. Product information may be inaccurate or fabricated and should be independently verified.

## Educational and Public Boundary

- The rendered footer states that guidance is simulated and real-time price and stock data are unavailable.
- Visible connection guidance assigns provider-key and provider-charge responsibility to the user and states that the key passes through the project server.
- An explicit “educational use only” or “not an official store” disclaimer is not present in rendered source.
- Visible UI does not fully explain that model-generated product information may be inaccurate or fabricated.
- No purchase or checkout behavior exists.

The disclaimer requirement is therefore only partially satisfied.

## Responsive, Theme, and Accessibility Evidence

Source-supported responsive evidence includes breakpoint classes, separate desktop/mobile shell behavior, a Radix mobile drawer, adaptive widths, overflow handling, and dynamic viewport-height usage. Light/dark/system theme switching is implemented in source. The mobile drawer action limitation remains.

Source-supported accessibility evidence includes labels and named controls, Radix dialog primitives, focus-visible styles, alert/status/live-region use, IME-aware input behavior, and some reduced-motion handling.

This is static evidence only. The root document language is fixed to English; heading, announcement, and motion concerns remain. Keyboard, screen-reader, contrast, zoom/reflow, touch, language markup, physical-device, viewport-keyboard, orientation, and browser behavior were not tested. Accessibility compliance and full responsive correctness are not established.

## Testing and Quality Evidence

- No automated test source, test runner, test framework, test script, coverage configuration, or CI workflow was found.
- Lint, type-check, format, and build scripts/configuration exist, but none were executed during the audit.
- Static preview states and `data-testid` attributes are testability aids, not automated tests.
- Chrome, Firefox, and Safari manual testing remains self-reported and undocumented; no browser or device verification was executed.

## Secret and Sensitive-Data Boundary

- No candidate credential value was found in the current tree or four available commits using the bounded audit method.
- `.env.example` is the only environment-named tracked path; no real tracked `.env` path was found.
- One Git author email exists in commit metadata and differs from the confirmed public contact. The value must not be reproduced; repository-history artifacts require owner privacy review before prominent use.
- This bounded review does not prove that secrets never existed outside the available history or inspected refs.

## Available Evidence

Safe or conditional later candidates include:

- Repository URL and fixed audited commit
- Curated source-tree overview
- One-page/one-route table
- Browser/server/provider flow and API-key privacy-boundary diagrams derived from source
- Curated OpenAI and Gemini adapter excerpts
- Route-buffering, Stop, Retry, responsive, and system-instruction excerpts
- Static preview mode for future screenshot creation
- Privacy-reviewed commit-history summary

These are not approved public artifacts. Redaction, current-source accuracy, owner review, and publication approval remain required. A deployed application, deployment result, build result, test result, browser-test matrix, screenshots, product images, integration logs, and CI result were not supplied or verified.

## Runtime and Publication Limitations

Still required before stronger claims or publication:

- Confirm whether the audited commit is canonical.
- Run separately authorized build, lint, type-check, and format checks.
- Verify current provider/model compatibility and successful calls without exposing real credentials.
- Review operational key handling, HTTPS, logging, observability, memory, and provider retention.
- Decide whether incremental forwarding is intended; verify Stop, cancellation, Retry, and race behavior.
- Correct or explicitly design mobile action parity.
- Test browsers, responsive layouts, accessibility, and Thai/English response quality.
- Decide Markdown/product formatting and obtain a verified shoe-data source if factual product claims are desired.
- Add automated tests and document a test matrix.
- Verify deployment, deployment/source equivalence, and public artifacts.
- Complete Git author-email privacy review, license/reuse review, redaction, and publication approval.

# Cross-Project Comparison

## Shared Evidence

Both projects can demonstrate:

- Independent project development
- Practical implementation
- Debugging
- API integration
- Deployment-related documentation or configuration with runtime deployment still unverified
- Iterative learning
- Limitations and incomplete maturity
- Use of Git and GitHub

## Different Engineering Emphasis

The Rust Booking API primarily demonstrates:

- Backend development
- Rust
- HTTP APIs
- Databases
- Registration and authentication concepts
- Authorization concerns
- Concurrency concerns
- Backend architecture

CourtFit primarily demonstrates:

- Full-stack web source organization
- User-interface implementation
- AI API integration
- Provider-stream consumption with buffered server output
- Multi-provider support
- Domain-specific conversation design
- Responsive source patterns
- User-controlled API-key workflows

## Current Presentation Priority

No final featured-project priority has been selected.

The Rust Booking API may provide stronger evidence for backend and systems direction.

CourtFit may later provide visible interface evidence because it contains a user-facing source implementation and static preview states. No screenshot, browser rendering, live interaction, or active deployment was verified.

Final prominence should depend on:

- Current career direction
- Repository quality
- Available evidence
- Technical depth
- Project maturity
- Visual artifacts
- Accuracy of documented claims
- Relevance to the graduation project direction

# Inventory Maintenance

This document should be updated when:

- A project feature is completed
- A feature is removed
- A deployment changes
- A repository becomes public
- Testing evidence is added
- A limitation is discovered
- A project status changes
- A project is paused or archived
- A public case study is written
- New evidence becomes available

Historical changes should not be silently rewritten when they are relevant to the project’s development story.

# Open Project Questions

## Rust Booking API

- Is audited commit `d2f754fdd2fd5581ecca9f9e16539504020f6361` still the canonical project state for later publication?
- Does the project build and run with the intended PostgreSQL and Redis environment?
- Do all six registered routes behave as their inspected handlers indicate?
- Do JWT expiry, invalid-token, and authentication-error paths behave correctly at runtime?
- Do cross-user tests confirm the source-level booking ownership checks?
- Which database constraint, isolation, or locking strategy should establish concurrent overlap integrity?
- How should Redis keys and overlapping date-range invalidation be corrected?
- Should Redis failure remain request-blocking on the affected paths?
- Which of the seven tracked tests run and pass, and what meaningful coverage remains absent?
- Was the historical `.env` ever populated with usable credentials, and has any affected credential been rotated?
- Is the README's Render destination active and tied to the audited source?
- Which separate source, if any, supports the README's Vercel frontend claim?
- Which technical decisions are most important?
- Which curated artifacts pass redaction and public-readiness review?

## CourtFit

- Is audited commit `3c9cc65d00622731b4a381ddb785edc3713f8c46` still canonical?
- Is a live deployment active and source-equivalent?
- Should raw user-provided keys continue to pass through the CourtFit server?
- Which deployed infrastructure, logs, observability, and provider-retention policies can access keys or conversation content?
- Should provider deltas be forwarded incrementally instead of buffered into one assembled browser event?
- Do the selected provider models/APIs currently work, and do authorized calls succeed?
- How do Stop, cancellation, Retry, and rapid interactions behave at runtime?
- How should mobile New Chat, provider selection, and key actions reach parity with desktop controls?
- Which operating systems and browser versions were tested?
- Were mobile devices tested?
- What accessibility testing has been completed?
- Should messages remain plain text or add Markdown/product formatting?
- Which verified shoe-data source and recommendation-quality tests are appropriate?
- Which automated test matrix should be implemented?
- Which screenshots and demonstrations best explain the project?
- Is the commit-author email safe for prominent history use?
- What license and reuse terms apply?
