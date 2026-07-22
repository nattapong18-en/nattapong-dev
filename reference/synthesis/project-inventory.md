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

**Project type:** Individual full-stack and AI integration project

**Status:** Core development completed; testing and refinement ongoing

**Current maturity:** Educational and experimental web application

**Development period:** To be verified from the repository commit history.

**Repository:**  
https://github.com/nattapong18-en/chat-bot-test

**Deployment platform:** Vercel

**Live application:** To be verified from the repository or Vercel deployment dashboard.

## Project Summary

CourtFit is a web-based basketball shoe recommendation chatbot.

It helps users narrow down basketball shoe options based on factors such as:

- Playing position
- Playing style
- Court type
- Budget
- Foot shape
- Performance priorities

The application is a domain-specific AI project rather than a general-purpose chatbot.

## Problem and Motivation

Basketball players may need to compare many shoe models before finding options suitable for their needs.

CourtFit was created to provide a conversational way to narrow down those choices.

The project was also built to practice:

- Domain-specific chatbot design
- AI provider integration
- Streaming responses
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

Nattapong designed and developed the complete application.

The work includes:

- Product concept
- Interface design
- Responsive frontend development
- Conversation-flow design
- Basketball-specific recommendation logic
- OpenAI integration
- Google Gemini integration
- Streaming-response behavior
- Provider switching
- Error handling
- Stop and Retry controls
- Bring Your Own Key workflow
- Dark-mode support
- Thai and English interaction
- Testing and refinement
- Deployment
- Project documentation

Each feature should be verified against the latest repository and deployed version before publication.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- OpenAI API
- Google Gemini API
- REST APIs
- Git
- GitHub
- Vercel

## Technology Roles

- **Next.js:** Application framework
- **React:** User interface development
- **TypeScript:** Typed application logic
- **Tailwind CSS:** Styling
- **shadcn/ui:** Interface components
- **OpenAI API:** AI response provider
- **Google Gemini API:** Alternative AI response provider
- **REST APIs:** Communication with AI services
- **Git and GitHub:** Version control and repository hosting
- **Vercel:** Deployment

## Main Capabilities

CourtFit currently supports:

- Basketball-specific recommendation conversations
- User input about playing position
- Court-type preferences
- Playing-style preferences
- Budget input
- Foot-shape considerations
- Performance-priority selection
- OpenAI provider support
- Google Gemini provider support
- Provider switching
- Thai conversations
- English conversations
- Streaming responses
- Stop control
- Retry control
- Responsive layouts
- Dark mode
- Quick recommendation controls
- User-provided API keys
- Client-side API-key handling during use

These features should be checked against the latest version before being described publicly as complete.

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

The exact prompt design and recommendation rules should be reviewed before publication.

## Important Engineering Decisions

Decisions that may be worth documenting include:

- Why the project uses multiple AI providers
- How provider switching is handled
- How streaming responses are implemented
- How Stop and Retry behavior works
- How user API keys are stored
- Why keys are not persisted
- How errors are displayed
- How conversation context is sent
- How Thai and English interaction is supported
- How responsive chat behavior is designed
- How the chatbot remains domain-specific
- How recommendations are framed to avoid false certainty

These decisions should be documented from the actual code rather than inferred.

## Main Challenges

Potential challenges include:

- Managing streaming API responses
- Supporting multiple providers with different APIs
- Handling user-provided keys safely
- Designing understandable error states
- Preserving conversation context
- Preventing the assistant from becoming too general
- Producing useful recommendations without a verified product database
- Maintaining a responsive interface
- Supporting both Thai and English
- Avoiding overconfident recommendation language
- Handling cancelled or retried requests

## Current Result

The core application is complete enough for testing and refinement.

It currently demonstrates:

- Domain-specific AI interaction
- Multi-provider integration
- Streaming chat responses
- User-controlled request handling
- Responsive frontend behavior
- BYOK workflow
- Basketball-specific recommendation entry points
- Bilingual conversation support

The application should still be presented as experimental because its recommendations are generated without a verified real-time product database.

## Browser Testing

CourtFit has been manually tested using:

- Google Chrome
- Mozilla Firefox
- Safari

The exact browser versions, operating systems, screen sizes, and test scenarios have not yet been documented.

Current testing should be described as manual compatibility testing rather than complete cross-browser validation.

## Validation and Testing

Current known testing includes:

- Manual chatbot interaction
- Google Chrome testing
- Mozilla Firefox testing
- Safari testing
- Thai-language conversation testing
- English-language conversation testing
- Provider switching
- Streaming response behavior
- Stop and Retry controls
- Responsive interface checking

The following still need clearer documentation:

- Browser versions
- Mobile devices tested
- Invalid API-key behavior
- Missing API-key behavior
- Network interruption behavior
- Provider failure behavior
- Accessibility testing
- Automated tests
- Recommendation-quality evaluation

## Limitations

CourtFit does not currently use a verified basketball-shoe product database or real-time retailer information.

It cannot reliably confirm:

- Current prices
- Stock availability
- Latest product specifications
- Retailer availability
- Regional availability
- Product authenticity
- Complete factual accuracy of recommendations

The application also does not currently include:

- User authentication
- Checkout
- Persistent chat history
- Verified product catalog
- Real-time inventory
- Commercial transaction functionality
- Professional footwear assessment
- Guaranteed injury prevention
- Guaranteed performance improvement

AI-generated recommendations should be independently verified before purchase.

## Privacy and API-Key Considerations

Users enter their API key through the web interface.

Based on the current description:

- The API key remains on the client side during use.
- The API key does not pass through the application’s backend.
- The key is not intentionally stored as persistent application data.

The exact browser storage behavior still needs to be verified from the source code.

Before publication, confirm whether the key is stored in:

- Component state
- Session storage
- Local storage
- Browser memory only

Also confirm:

- Whether the key disappears after a page refresh
- Whether it can appear in browser logs
- Whether error messages may expose part of the key
- Whether requests are sent directly from the browser to the AI provider

No strong privacy or security claim should be made without confirming the actual data flow.

## Lessons Learned

Potential learning outcomes include:

- Building a domain-specific AI application requires more than connecting an API.
- Provider abstractions must account for different request and streaming behavior.
- Streaming interfaces need clear cancellation, retry, and error states.
- Recommendations should communicate uncertainty.
- AI output is limited when the system lacks verified external data.
- User-provided API keys create usability, privacy, and security responsibilities.
- Responsive chat interfaces require careful handling of viewport and input behavior.
- Domain-specific prompts need testing and revision.

## Evidence Available

Available or expected evidence includes:

- Source code
- GitHub repository
- Deployed application
- Screenshots
- Responsive-interface demonstrations
- API integration logs
- Build validation results
- Project documentation
- Live chatbot testing
- Example conversations
- Error-state demonstrations
- Provider-switching behavior

## Evidence Still Needed

Useful evidence to collect includes:

- Live application URL
- Development timeline
- Architecture overview
- Provider abstraction explanation
- Streaming sequence diagram
- API-key data-flow diagram
- Confirmed storage behavior
- Example recommendation conversations
- Test matrix
- Responsive screenshots
- Error-state screenshots
- Accessibility review
- Performance review
- Known browser limitations
- Recommendation-quality evaluation
- Clear project status history

## Publication Notes

Before publishing CourtFit:

- Verify every feature against the latest build.
- Add the confirmed deployment link.
- Clearly label it as educational and experimental.
- Do not describe recommendations as verified product advice.
- Do not claim real-time price or inventory knowledge.
- Explain the absence of a verified product database.
- Verify and clearly explain API-key handling.
- Do not claim key security without reviewing the data flow.
- Separate implemented features from planned improvements.
- Show recommendation uncertainty and limitations.
- Avoid implying commercial or professional footwear expertise.

# Cross-Project Comparison

## Shared Evidence

Both projects can demonstrate:

- Independent project development
- Practical implementation
- Debugging
- API integration
- Deployment experience
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

- Full-stack web development
- User-interface implementation
- AI API integration
- Streaming responses
- Multi-provider support
- Domain-specific conversation design
- Responsive design
- User-controlled API-key workflows

## Current Presentation Priority

No final featured-project priority has been selected.

The Rust Booking API may provide stronger evidence for backend and systems direction.

CourtFit may provide stronger visible evidence because it includes a complete user-facing interface and live interaction.

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

- What is the confirmed live deployment URL?
- Is the API key stored only in React state or browser memory?
- Does the key survive a page refresh?
- Are requests sent directly from the browser to the providers?
- What conversation history is sent to providers?
- How is streaming implemented?
- How does provider switching work?
- Which operating systems and browser versions were tested?
- Were mobile devices tested?
- What accessibility testing has been completed?
- What recommendation tests exist?
- Which screenshots and demonstrations best explain the project?
- What improvements are currently planned?
