# PRJ-01 Audit Record

**Audit ID:** PRJ-01A

**Project:** Rust Booking API

**Finding labels:** Verified; Verified with qualification; Partially verified; Not verified; Contradicted; Runtime verification required; Sensitive — do not publish.

Unless a history citation says otherwise, every repository path and line reference in this record refers to audited commit `d2f754fdd2fd5581ecca9f9e16539504020f6361`.

# Audit Status

Completed static read-only audit of one recorded commit. The audit verifies repository-native source, configuration, documentation, and history evidence only. It is not runtime verification, deployment verification, a security assessment of a running service, or publication approval.

No application code, test, build, migration, container, server, database, cache, endpoint, deployment, or repository script was executed.

# Authorization and Scope

Nattapong explicitly authorized read-only access to `https://github.com/nattapong18-en/booking_api`. Network access was limited to cloning that public repository into a unique temporary directory. The default branch and full local clone were inspected without modifying the source repository or the clone.

The audit covered repository identity, commit history, tracked source and configuration, registered routes, persistence, Redis, authentication, authorization, booking integrity, validation, errors, security and privacy indicators, tracked secret risk, tests, CI, deployment evidence, public-artifact candidates, and comparison with the existing internal profile and project inventory.

The audit excluded runtime execution, dependency installation or download beyond Git cloning, live endpoints, databases, Redis services, deployment dashboards, GitHub Actions results, other repositories, external accounts, and future commits.

# Repository Snapshot

- **Repository URL:** `https://github.com/nattapong18-en/booking_api`
- **Repository name:** `booking_api`, corroborated by the repository URL and package name in `Cargo.toml:1-4`
- **Default branch:** `main`, observed from `origin/HEAD` and the checked-out branch
- **Audited commit:** `d2f754fdd2fd5581ecca9f9e16539504020f6361`
- **Commit subject:** `add new README.md`
- **Commit timestamp:** `2026-05-22T20:28:01+07:00`
- **Clone type:** Full clone; Git reported `false` for shallow-repository status
- **History shape:** 31 commits on the available default-branch history, from `9cdc67385874b949e38f18608f6e93deb2fdd3a2` (`First commit`) through the audited commit. Two Git author identities appear in the history, but repository metadata alone does not establish whether they represent different people.
- **Tracked scope:** 26 tracked files, including one Rust manifest, one lockfile, six primary Rust source files plus one helper module, one current PostgreSQL migration, ten SQLx offline-query metadata files, one GitHub Actions workflow, one Dockerfile, a README, ignore files, and one environment example.
- **README:** Present at `README.md`.
- **License:** No tracked license file was found.
- **Tags/releases:** No local tags were found in the full clone.

The snapshot does not cover later commits or other branches not present through the authorized clone. No runtime or deployment state can be inferred from the commit timestamp.

# Executive Findings

- **Verified:** The repository contains a coherent Rust/Axum API source structure with six registered routes, PostgreSQL queries in every handler, a Redis-backed room-availability cache, bcrypt password hashing, JWT creation and validation, request validation, tracing, permissive CORS, a Dockerfile, seven tracked automated test functions, and a GitHub Actions workflow.
- **Verified with qualification:** The source supports describing the project as an educational or non-production-ready functional-MVP candidate, because a core registration/login/availability/booking/list/cancel flow is implemented. Actual buildability, migrations, database behavior, Redis behavior, endpoint behavior, and end-to-end completion were not executed and remain unverified.
- **Contradicted internal claims:** Authentication is not registration-only; login, JWT issuance, JWT extraction, and protected booking routes are wired. Registered methods are GET, POST, and PATCH—not PUT. Seven automated test functions are tracked, so “no automated tests” is incorrect.
- **Redis correction:** Redis stores serialized room-availability results for 60 seconds. It is not used as a session store, token store, lock, rate limiter, or booking-state store in the inspected source. Current key construction and invalidation do not align consistently, creating source-level evidence of likely stale-cache behavior.
- **Concurrency limitation:** Booking creation wraps overlap checking and insertion in one database transaction, but the current PostgreSQL schema provides no exclusion or uniqueness constraint for overlapping ranges, and the source uses no row lock, serializable isolation, optimistic-concurrency check, Redis lock, or idempotency mechanism. Concurrent double-booking safety is not supported by the static evidence.
- **Authorization:** The registered create, list, and cancel booking handlers require JWT claims and use the claim's `user_id` to associate or restrict records. This is meaningful source-level ownership enforcement, but it is not proof of runtime security or a complete authorization system.
- **Testing correction:** Five pure availability tests and two asynchronous registration-handler tests exist. They were not run. The handler tests require local PostgreSQL and Redis and recreate a users table. The CI command appears to filter tests by the string `git`; none of the discovered test names contains that string, so the workflow configuration does not establish current test coverage or success.
- **Deployment:** A Dockerfile and README deployment claims/URLs exist. No Render configuration, Vercel configuration, Compose file, deployment script, or deploy step in the tracked workflow was found. Current deployment availability remains unverified.
- **Sensitive-history risk:** A real `.env` path was tracked in earlier commits and later deleted. Its values were not read or reproduced. This history requires owner review before treating the repository and its history as publication-ready evidence.

# Verified Project Purpose

The registered source implements a room-booking API workflow:

- public registration and login;
- public room-availability lookup for a requested date range;
- authenticated booking creation;
- authenticated listing of the current user's bookings; and
- authenticated cancellation of the current user's confirmed booking.

This purpose is supported by the router in `src/routes.rs:11-20`, handler implementations in `src/handles.rs:24-364`, request and response types in `src/models.rs:74-144`, and the relational model in `migrations/20260520145317_init.sql:2-21`.

The source supports a technical learning-project description. It does not establish validated end users, product requirements, production operations, scalability, reliability, business readiness, or customer use. The README's “production-ready” claim at `README.md:5` is not supported by the audited static evidence.

# Repository Maturity

**Classification: Verified with qualification — coherent educational MVP source; runtime maturity unverified.**

The repository is more than an empty scaffold: it has registered routes, handler logic, persistence queries, a current migration, authentication wiring, Redis access, test functions, offline SQLx metadata, a container build description, and 31 commits. Those elements support calling it a functional-MVP candidate at source level.

Important qualifications prevent a stronger maturity claim:

- no build, tests, migrations, or runtime flow were executed during this audit;
- no current workflow result was inspected;
- deployment URLs were not visited;
- the current PostgreSQL migration lacks a database-level overlap guarantee;
- Redis invalidation keys do not consistently match the availability cache key;
- the environment example does not match the current PostgreSQL and Redis configuration requirements;
- the CI command does not plainly run the discovered tests without a name filter;
- there is no tracked license, release tag, monitoring configuration, coverage configuration, or deployment-platform configuration; and
- security, concurrency, and operational behavior remain unverified.

The README is portfolio/demo-oriented in presentation because it includes a technology list, feature checklist, CI badge, and “Live Demo” table (`README.md:3-40`). That presentation is documentation evidence, not proof that the project is production-maintained or currently deployed.

# Verified Technology Inventory

| Technology | Classification | Actual role | Evidence | Public-claim guidance |
|---|---|---|---|---|
| Rust | Verified | Primary implementation language; package uses Rust edition 2021. | `Cargo.toml:1-4`; `src/main.rs:16-64` | Safe to name as the backend language. |
| Cargo | Verified | Manifest and lockfile record direct and resolved dependencies. | `Cargo.toml`; `Cargo.lock` | Safe as repository tooling evidence; no build was run. |
| Axum | Verified | Router, extractors, JSON responses, and HTTP status handling. | `Cargo.toml:7`; `src/routes.rs:1-20`; `src/handles.rs:2-7` | Safe to name as the API framework. |
| Tokio | Verified | Async entry point, TCP listener, and async runtime support. | `Cargo.toml:20`; `src/main.rs:16-17,57-61` | Safe to name with source-level qualification. |
| SQLx | Verified | PostgreSQL pool, compile-time query macros, migrations, and transaction API. | `Cargo.toml:19`; `src/main.rs:9,32-45`; `src/handles.rs:30-35,118-154` | Safe to describe as the database-access toolkit; runtime connectivity unverified. |
| PostgreSQL | Verified with qualification | Required database pool; users, rooms, and bookings persistence; all registered handlers issue PostgreSQL queries. | `src/main.rs:22,32-45`; `migrations/20260520145317_init.sql:2-21`; `src/handles.rs:30-35,69-97,118-154,185-191,245-276,317-330` | Safe to say integrated in source; do not claim successful runtime operation. |
| Redis / deadpool-redis | Verified with qualification | Availability-result cache with a 60-second expiry and attempted invalidation after booking/cancellation. | `Cargo.toml:10,15`; `src/main.rs:24-30,48-52`; `src/handles.rs:78-88,156-165,297-315,353-360` | Describe specifically as an availability cache; disclose the current key mismatch if behavior is discussed. |
| JWT / jsonwebtoken | Verified with qualification | Login creates a token containing `user_id` and `exp`; an extractor validates Bearer tokens for protected handlers. | `Cargo.toml:14`; `src/handles.rs:180-220`; `src/auth.rs:6-42`; `src/models.rs:98-102` | Safe to describe as source-level JWT authentication; do not call it secure or complete. |
| bcrypt | Verified | Registration hashes passwords; login verifies supplied passwords against stored hashes. | `Cargo.toml:8`; `src/handles.rs:194-201,257-264` | Safe to state source usage; no password-security assessment or runtime verification. |
| Serde / serde_json | Verified | Request/response serialization and Redis cache serialization. | `Cargo.toml:17-18`; `src/models.rs:74-144`; `src/handles.rs:307-312,357-359` | Safe to describe only when technically relevant. |
| validator | Verified | Registration username and password rules are validated before insertion. | `Cargo.toml:25`; `src/models.rs:110-116`; `src/handles.rs:223-241`; `src/validate.rs:3-21` | Safe to describe as registration input validation, not comprehensive request validation. |
| chrono | Verified | Date/time request fields, overlap calculations, local-date checks, token expiry calculation support, and cache keys. | `Cargo.toml:9`; `src/models.rs:7-8,81-95,134-144`; `src/handles.rs:20-21,203-212,288-301` | Safe to describe as date/time handling; behavior needs runtime tests. |
| dotenvy / environment variables | Verified with qualification | Loads local environment data; expects database and JWT variables, uses a Redis default, and accepts a port. | `Cargo.toml:12`; `src/main.rs:21-24,57-58` | Safe to say configuration is environment-based; do not expose values. |
| tower-http CORS and trace | Verified | Request tracing layer and globally permissive CORS. | `Cargo.toml:22`; `src/routes.rs:6,19`; `src/main.rs:8,54-55` | Trace and CORS are safe source facts; permissive CORS is not proof of a safe production policy. |
| tracing | Verified | Startup, user-action, JWT-error, and database-error logging. | `Cargo.toml:23-24`; `src/main.rs:18-19`; `src/models.rs:44-49`; `src/auth.rs:27-31`; `src/handles.rs:28,63-67,184,243,287` | Safe to say logging exists; avoid claims about observability or privacy safety. |
| Docker | Configuration only | Multi-stage container build and runtime image description. | `Dockerfile:1-29` | Say a Dockerfile is present; do not claim it builds or runs. |
| GitHub Actions | Configuration only | Workflow checks out source, selects stable Rust, and invokes a filtered test command. | `.github/workflows/ci.yml:1-15` | Say CI configuration exists; do not claim tests pass or deployment occurs. |
| Render | Documentation mention only | README names an API URL and labels Render as deployment. | `README.md:7-12,23` | Current service state is not verified; no Render-native configuration was found. |
| Vercel | Documentation mention only | README names a frontend URL and labels Vercel as deployment, but this repository contains no frontend or Vercel configuration. | `README.md:7-12,24`; tracked-file inventory at the audited commit | Do not attribute a verified Vercel role to this repository. |
| regex, derive, features crates | Present but role limited | Declared as direct dependencies, but no direct source use was found by static text inspection. | `Cargo.toml:11,13,16`; source search at the audited commit | Do not present them as meaningful project technologies without a verified role. |

Dependencies present only through `Cargo.lock` were not treated as project technologies unless direct source or manifest evidence established their role.

# Application Structure

- **Entry point and composition:** `src/main.rs:1-64` declares modules, initializes tracing, loads environment configuration, creates Redis and PostgreSQL pools, runs migrations, builds `AppState`, constructs the router, applies permissive CORS, and starts the Axum listener.
- **Router:** `src/routes.rs:11-20` registers all six routes and applies request tracing. No nested routers or versioned route groups are present.
- **Application state:** `src/models.rs:17-22` stores a PostgreSQL pool, JWT secret string, and Redis pool.
- **Handlers and data access:** `src/handles.rs:24-364` contains all registered route handlers and embeds SQLx queries directly in them. No separate service or repository/data-access layer is present.
- **Authentication utility:** `src/auth.rs:6-42` implements Axum request extraction for JWT claims.
- **Models:** `src/models.rs:24-144` defines application errors, booking state and records, auth claims, requests, responses, the user row, room query, and availability output.
- **Validation:** `src/validate.rs:3-21` provides password validation. Username validation is declared on `RegisterRequest` in `src/models.rs:110-116`.
- **Availability logic:** `src/getrooms.rs:4-15` calculates date-overlap availability; `src/getrooms.rs:17-76` contains its tests.
- **Database migrations:** One current migration creates `users`, `rooms`, and `bookings` and seeds three room identifiers (`migrations/20260520145317_init.sql:2-21`).
- **SQLx metadata:** Ten tracked `.sqlx/query-*.json` files provide offline query metadata. They indicate SQLx preparation, not a successful current build.
- **Middleware:** `TraceLayer` and permissive CORS are wired (`src/routes.rs:19`; `src/main.rs:54-55`). Authentication is implemented as a handler extractor rather than a global middleware layer.
- **Tests:** Five unit tests are colocated in `src/getrooms.rs:17-76`; two asynchronous handler tests are colocated in `src/handles.rs:366-460`.
- **Deployment files:** A root Dockerfile exists. No Compose, Render, Vercel, or repository-native deployment script was found.

# Registered Routes

Exactly six routes are registered at the audited commit.

| Method | Path | Handler | Authentication | Authorization | Persistence | Evidence | Verification status |
|---|---|---|---|---|---|---|---|
| POST | `/book` | `create_booking` | Required through `Claims` extractor | New row uses authenticated `claims.user_id`; no role system | Starts PostgreSQL transaction, checks overlap, inserts booking, commits, then attempts Redis invalidation | `src/routes.rs:13`; `src/handles.rs:109-177`; input/output in `src/models.rs:81-96` | Verified registration and source behavior; runtime verification required |
| GET | `/bookings` | `get_my_bookings` | Required through `Claims` extractor | Query filters by authenticated `claims.user_id` | Reads the current user's PostgreSQL booking rows; no Redis | `src/routes.rs:14`; `src/handles.rs:24-57` | Verified registration and source behavior; runtime verification required |
| GET | `/rooms` | `get_room` | None | Not applicable; room availability is public | Reads/writes Redis availability cache; on miss reads rooms and bookings from PostgreSQL | `src/routes.rs:15`; `src/handles.rs:283-364`; query/output in `src/models.rs:134-144` | Verified registration; cache correctness requires qualification and runtime verification |
| PATCH | `/cancel/{id}` | `cancel_booking` | Required through `Claims` extractor | Both lookup and update constrain `booking_id` by authenticated `user_id`; confirmed status required | Reads and updates PostgreSQL; attempts Redis invalidation before update | `src/routes.rs:16`; `src/handles.rs:58-107` | Verified registration and source ownership check; runtime verification required |
| POST | `/login` | `login` | Public; credentials supplied in JSON | Not applicable at login | Reads user from PostgreSQL, verifies bcrypt hash, creates JWT | `src/routes.rs:17`; `src/handles.rs:180-220`; input/output in `src/models.rs:98-108,123-132` | Verified registration and source behavior; runtime/security verification required |
| POST | `/register` | `register` | Public | Not applicable at registration | Validates input, checks username, hashes password, inserts PostgreSQL user | `src/routes.rs:18`; `src/handles.rs:223-281`; input/output in `src/models.rs:110-121` | Verified registration and source behavior; runtime verification required |

No PUT or DELETE route is registered. No comment-only or README-only route was counted. The README feature list aligns broadly with the six route purposes (`README.md:27-40`), but the router is the authoritative source for registration.

Primary inputs and outputs are structured types: booking creation accepts `CreateBookingRequest` and returns `BookingRecord`; bookings returns a list of `BookingRecord`; rooms accepts `GetRoom` query data and returns `RoomAvailability` items; login accepts `LoginRequest` and returns `AuthResponse`; registration accepts `RegisterRequest` and returns `RegisterResponse`. Cancellation returns an empty 200 response on the implemented success path (`src/models.rs:81-144`; `src/handles.rs:106,177,220,278-280,363`).

Important source-level failure paths are route-specific:

- `POST /book` may reject missing/invalid authentication, invalid duration, an observed overlap, database errors, or Redis-pool acquisition after the database commit (`src/auth.rs:12-40`; `src/handles.rs:109-165`).
- `GET /bookings` may reject missing/invalid authentication or return a mapped database error (`src/auth.rs:12-40`; `src/handles.rs:24-35`).
- `GET /rooms` may reject invalid dates, fail on Redis-pool acquisition, treat a Redis GET failure as a miss, or expose a database/pool error through an internal-error string (`src/handles.rs:283-330,353-360`).
- `PATCH /cancel/{id}` may reject missing/invalid authentication, an invalid typed path before handler entry, a missing/non-confirmed/non-owned booking, Redis-pool acquisition, or a database failure (`src/auth.rs:12-40`; `src/handles.rs:58-107`).
- `POST /login` returns the same unauthorized message for a missing username or mismatched password, while token encoding and some bcrypt failures map to internal errors (`src/handles.rs:180-220`).
- `POST /register` may return structured validation errors, username conflict, database logic/connection errors, or hashing failure (`src/handles.rs:223-281`).

These mappings are static handler observations. Framework-generated extractor responses and actual HTTP bodies/statuses were not exercised.

# PostgreSQL and Data Model

**Classification: Verified and integrated at source level; runtime verification required.**

`DATABASE_URL` is required, parsed into PostgreSQL connection options, configured to require SSL, and used to create a pool of up to five connections. The application runs the tracked migrations at startup (`src/main.rs:22,32-45`). This is configuration and source integration evidence, not proof that a database connection or migration succeeds.

The current migration defines:

- `users`: serial primary key, unique non-null username, non-null password hash;
- `rooms`: serial primary key;
- `bookings`: serial primary key, non-null user and room foreign keys, non-null start/end timestamps, and text status defaulting to `Confirmed`; and
- three seeded room identifiers.

Evidence: `migrations/20260520145317_init.sql:2-21`.

All six handlers use PostgreSQL queries (`src/handles.rs:30-35,69-97,118-154,185-191,245-276,317-330`). Queries use SQLx parameter binding rather than string-interpolated SQL. The source performs SELECT, INSERT, and UPDATE operations; no registered DELETE operation exists.

Booking creation uses a PostgreSQL transaction for the overlap read and insert (`src/handles.rs:118-154`). Cancellation is not transactional across cache invalidation and database update; it invalidates before the update (`src/handles.rs:78-97`). Registration performs a pre-insert username check and also relies on the database uniqueness constraint (`src/handles.rs:245-276`; migration lines 2-6).

Potentially sensitive stored data includes usernames and password hashes. Booking records associate user IDs with room IDs and time ranges. No payment, address, phone, or other customer-profile fields appear in the current migration.

The `.env.example` is configuration-drift evidence: it names an earlier SQLite-form database setting and omits the Redis variable required by the current source's documented setup. Values are intentionally not reproduced here. The current code and manifest are PostgreSQL-based (`src/main.rs:9,32-40`; `Cargo.toml:19`).

# Redis Responsibility

**Classification: Verified availability cache; required by affected handler paths; correctness qualified.**

Redis is used for room-availability response caching:

- `GET /rooms` builds a date-range key, attempts a Redis GET, deserializes a cached availability list when possible, and writes a computed list with a 60-second expiry (`src/handles.rs:297-315,353-360`).
- booking creation attempts to delete a date-range cache key after the database transaction commits (`src/handles.rs:154-165`);
- cancellation attempts to delete a date-range cache key before the database update (`src/handles.rs:78-97`); and
- Redis connection pooling is part of mandatory application state (`src/main.rs:24-30,48-52`).

Redis is not used for sessions, JWT storage, rate limiting, locks, idempotency, or booking records in the inspected source.

There are three key-alignment problems in the current source:

1. availability lookup uses the plural prefix `rooms`, while creation invalidation uses singular `room` (`src/handles.rs:297-301` compared with `159-163`);
2. availability lookup formats the first date with `&Y-%m-%d`, which produces a literal `&Y` component rather than the intended year directive, while cancellation uses `%Y-%m-%d` (`src/handles.rs:297-301` compared with `82-86`); and
3. invalidation spans are derived from a booking's exact dates, while cache reads are keyed by arbitrary requested date ranges, so even consistently formatted exact keys would not invalidate every overlapping cached query range.

These are static source findings. Their exact runtime effects were not executed, but the source does not support the README's unqualified “cache invalidation” claim (`README.md:35-36`).

Redis availability also affects failure behavior. Failure to acquire a Redis connection returns an internal error for room lookup, booking creation after commit, and cancellation before database update (`src/handles.rs:79-81,156-158,304-306,354-356`). Individual GET, SET, and DELETE command errors are often ignored or converted to a cache miss (`src/handles.rs:87,307-309,165,358-359`). Redis is therefore not merely an optional best-effort optimization in all current paths.

# Authentication

**Classification: Partial but wired beyond registration; runtime and security verification required.**

Source evidence verifies:

- registration input validation and bcrypt password hashing (`src/handles.rs:223-276`; `src/validate.rs:3-21`);
- username lookup and bcrypt password verification during login (`src/handles.rs:180-201`);
- JWT claims containing `user_id` and a calculated 24-hour expiration (`src/models.rs:98-102`; `src/handles.rs:203-219`);
- JWT secret loading from an environment variable (`src/main.rs:22-24`);
- Bearer-token extraction and JWT decoding with the configured secret (`src/auth.rs:6-42`); and
- JWT claims required by create, list, and cancel handlers (`src/handles.rs:24-26,58-61,109-112`).

The internal “registration-only authentication” description is contradicted. Login, token issuance, token validation, identity extraction, token expiry data, and protected routes are present and connected.

The system is still incomplete as a general authentication lifecycle. No logout, token revocation, refresh mechanism, key rotation, audience/issuer policy, account recovery, login rate limiting, account lockout, or multi-factor behavior was found. Static library use does not establish secure authentication. The audit did not confirm token behavior, password handling, or error behavior at runtime.

# Authorization and User-Data Isolation

**Classification: Source-level ownership enforcement on all registered private booking routes; broader authorization remains partial and runtime-unverified.**

- **Create:** the inserted booking uses the authenticated claim's user ID, not a user ID supplied by the request (`src/handles.rs:109-113,140-143`). Classification: **Enforced in inspected code**.
- **Read:** the bookings query filters rows by authenticated user ID (`src/handles.rs:24-35`). Classification: **Enforced in inspected code**.
- **Update/cancel:** both the initial lookup and update require the path booking ID and authenticated user ID, and require `Confirmed` status (`src/handles.rs:58-76,91-101`). Classification: **Enforced in inspected code**.
- **Delete:** no registered delete route exists. Classification: **Not applicable**.
- **Roles/permissions:** no role or permission model exists. Classification: **Not applicable to current route set**, not evidence of a complete authorization system.

No obvious direct-object-reference gap was found in the registered read or cancel booking paths during static inspection. That does not prove runtime isolation. Claims are trusted after token decoding, and the extractor does not re-query current user status on each request (`src/auth.rs:6-42`). No adversarial or runtime test was performed.

# Booking Integrity and Concurrency

**Classification: Partial application-level guard; concurrent-booking integrity not established.**

The intended guard is clear: booking creation opens a transaction, counts overlapping non-cancelled bookings for the same room, returns a conflict if any exist, inserts the booking, and commits (`src/handles.rs:118-154`). The availability helper uses the same interval-overlap concept at date granularity (`src/getrooms.rs:4-15`).

The current PostgreSQL migration does not provide a unique or exclusion constraint for overlapping bookings, a trigger, or another database-level guard (`migrations/20260520145317_init.sql:12-19`). The source does not request a serializable transaction, lock a room or matching rows, implement optimistic concurrency, acquire a Redis lock, use idempotency keys, or retry serialization conflicts.

Accordingly, two concurrent transactions may both observe zero overlapping rows before either insert is visible. This is a potential race derived from the check-then-insert structure, not a runtime exploit claim. Concurrent double-booking prevention must not be published as guaranteed.

History strengthens this qualification. A former SQLite migration contained an overlap-prevention trigger, but migration commit `c337319d546f07ce0eb5dc91edd414a0659c3691` deleted `migrations/20260506194702_prevent_booking_overlap.sql` while adding the current PostgreSQL migration. The handler still checks for the historical `ERR_OVERLAP` message (`src/handles.rs:146-152`; `src/models.rs:15`), but no current tracked PostgreSQL migration creates that condition.

# Input Validation and Error Handling

Verified source behavior includes:

- registration username minimum length and password length/character-category validation (`src/models.rs:110-116`; `src/validate.rs:3-21`);
- invalid registration input mapped to 422 with structured field messages (`src/handles.rs:223-241`; `src/models.rs:58-64`);
- duplicate usernames checked in application code and protected by a database unique constraint (`src/handles.rs:245-276`; migration lines 2-6);
- booking creation rejects start times greater than or equal to end times (`src/handles.rs:109-117`);
- room queries reject a start date before the server's local current date and reject end dates not after the start (`src/handles.rs:283-295`);
- Axum typed path, query, and JSON extraction provides representation parsing, though its actual rejection bodies were not inspected at runtime; and
- SQL queries use bound parameters throughout the registered handlers.

Limitations and potential weaknesses include:

- no upper bound on username length is declared (`src/models.rs:110-116`);
- login input has no explicit validator (`src/models.rs:104-108`);
- booking creation does not explicitly validate a future start time, positive room ID, or room existence before insertion; database foreign keys may reject missing rooms (`src/models.rs:81-86`; `src/handles.rs:109-154`);
- the database status field is unrestricted text (`migrations/20260520145317_init.sql:18`);
- several Redis or database errors are converted to `InternalServerError(e.to_string())` and returned in JSON, potentially exposing backend details (`src/handles.rs:79-81,156-158,304-306,317-330,354-356`; `src/models.rs:55-57,66-69`);
- database errors handled through `DatabaseError` are logged in debug form but returned generically (`src/models.rs:44-49`);
- login calculates expiry through `duration_since(...).unwrap()` on a request path (`src/handles.rs:203-207`); and
- cache command failures are inconsistently ignored, converted to cache misses, or elevated to request failures (`src/handles.rs:78-88,156-165,303-315,353-360`).

These are static observations, not proven vulnerabilities or complete failure-mode coverage.

# Testing and Quality Evidence

**Classification: Seven tracked automated test functions; no execution evidence from this audit.**

- Five synchronous unit tests cover no bookings, exact overlap, partial overlap, non-overlap, and boundary adjacency for `rooms_available` (`src/getrooms.rs:17-76`).
- Two asynchronous registration-handler tests cover a successful request and validation failure (`src/handles.rs:366-460`).
- The handler-test setup requires local Redis and PostgreSQL and drops/recreates the `users` table (`src/handles.rs:381-415`). The fixture values are test data and are not reproduced here.
- A GitHub Actions workflow runs on pushes and pull requests to `main`, selects stable Rust, and invokes `cargo test git` (`.github/workflows/ci.yml:1-15`). The argument is a test-name filter; none of the seven statically discovered test names includes `git`. The workflow was not run or queried, so no conclusion about actual selected tests or success is made.
- The README contains a CI badge and claims unit tests and auto-deploy after tests pass (`README.md:3,39-40`). A badge link and prose are not current workflow-success evidence; the tracked workflow contains no deploy step.
- No separate integration-test directory, fixture directory, coverage configuration, Clippy configuration, or repository-specific rustfmt configuration was found.
- `Cargo.lock` and ten `.sqlx` query metadata files are tracked, but neither proves current build or query correctness.

The correct internal wording is: “Seven automated test functions are present in the audited source; they were not run during this audit, and current passing status and coverage are unverified.”

# Deployment Evidence

**Classification: Docker configuration present; Render and Vercel are documentation claims only; runtime status unverified.**

- `Dockerfile:1-29` describes a multi-stage cargo-chef build, uses SQLx offline mode, produces the `booking_api` binary, exposes port 10000, and declares an entry point. It was not built.
- `README.md:7-12` lists an API URL associated with Render and a frontend URL associated with Vercel. Neither URL was visited.
- `README.md:23-25` labels Render, Vercel, and GitHub Actions as deployment/CI technologies. This is documentation evidence only.
- `.github/workflows/ci.yml:1-15` has no deployment job or deployment command.
- No `render.yaml`, Vercel configuration, Compose file, deployment script, or other service-specific configuration was found in the tracked tree.
- This repository contains backend Rust source and no identifiable frontend implementation; the README's Vercel frontend appears to refer to a separate deployment or codebase that was outside authorization.

Safe status: deployment is **To be verified**. The repository supports saying a Dockerfile exists and that the README records deployment destinations, not that either destination is active or corresponds to the audited commit.

# Security and Privacy Review

This section records static boundaries only and does not constitute penetration testing.

- **Confirmed implementation fact:** SQL statements use SQLx bound parameters in registered handlers, reducing direct string-concatenation SQL injection exposure in the inspected queries (`src/handles.rs:30-35,69-97,122-154,185-191,245-276,317-330`).
- **Confirmed implementation fact:** Passwords are hashed with bcrypt at default cost and verified with bcrypt (`src/handles.rs:194-201,257-264`). This does not establish the security of the full authentication system.
- **Confirmed implementation fact:** JWT secret material is loaded from an environment variable and not hardcoded in current application source (`src/main.rs:22-24`).
- **Potential weakness:** CORS is globally permissive (`src/main.rs:54-55`). Suitability depends on the eventual client and credential model and requires a separate review.
- **Potential weakness:** Redis and some database/pool failures may be returned using backend error strings (`src/handles.rs:79-81,156-158,304-306,317-330,354-356`). Public error leakage requires runtime review.
- **Potential weakness:** Login and registration log usernames, and booking actions log user and booking identifiers (`src/handles.rs:28,63-67,184,243`). Log retention and access policies are not present in the repository.
- **Potential weakness:** JWT decode and database errors are logged in debug form (`src/auth.rs:27-31`; `src/models.rs:44-49`). Exact logged content and operational exposure require runtime review.
- **Missing evidence:** No rate limiting, account lockout, refresh/revocation lifecycle, secret rotation process, security headers policy, formal security test, dependency audit configuration, monitoring, or incident response evidence was found.
- **Missing evidence:** The audit did not verify database roles, network boundaries, TLS termination, Redis transport configuration in deployed environments, environment management, or deployment access controls.
- **Concurrency risk:** Current source does not guarantee atomic overlap exclusion under concurrent requests; see “Booking Integrity and Concurrency.”
- **Data isolation:** Source-level ownership checks are present on all registered private booking routes; runtime isolation remains unverified.

No exploit instructions are included, and no running service was tested.

# Secret and Sensitive-Data Review

**Result: Sensitive historical environment-file risk found; no secret value was read, copied, quoted, or reproduced.**

- The current tracked tree contains `.env.example` and no `.env`, private-key, certificate, or credential-named file found by the bounded filename review.
- `.gitignore:1-11` and `.dockerignore:1-5` exclude `.env` from normal current tracking and container context.
- `.env.example` is tracked and contains non-empty example configuration. It appears intended as a template, but it is stale relative to the current PostgreSQL/Redis source and should be reviewed before reuse. Values are deliberately omitted from this report.
- Git history shows `.env` was added at commit `9cdc67385874b949e38f18608f6e93deb2fdd3a2`, modified at `040551ad948b5b4dd5f2209a19d37eba28d34e8e`, and deleted at `e588fb82fdad70424e276f1184e4a44ebba450ad`. Its contents were not inspected.
- Because a real environment file was historically tracked, the repository owner should review that history privately and rotate any credential that may have been usable before linking repository history as public project evidence. History remediation, if appropriate, requires a separate authorized decision and action.
- No assertion is made that a current valid secret is exposed. The safe classification is **Sensitive — do not publish** for the historical `.env` path and any unreviewed history-derived configuration.

# Claim Verification Matrix

The matrix compares material Booking API claims in `reference/synthesis/personal-profile.md` and `reference/synthesis/project-inventory.md` with the audited repository. “Qualified” counts in the audit summary combine **Verified with qualification**, **Partially verified**, and **Runtime verification required**; “unsupported” corresponds to **Not verified**.

| Existing claim | Classification | Repository evidence | Qualification or correction | Safe public wording |
|---|---|---|---|---|
| The repository is the Booking API source repository. | Verified | Repository URL, `Cargo.toml:1-4`, audited Git snapshot | Audit covers only one commit on `main`. | “Source repository for the audited Booking API commit.” |
| Individual backend engineering project. | Verified with qualification | Backend-only tracked tree; 31-commit history with two Git author identities | User confirmation supports individual ownership; Git identity metadata alone cannot prove sole authorship or contribution boundaries. | “An individual backend learning project,” attributed to Nattapong's confirmed record. |
| Functional MVP / main backend workflow exists. | Partially verified | Six routes and coherent handler/data model in `src/routes.rs:11-20`, `src/handles.rs:24-364`, migration | Source supports the workflow; no build or runtime execution occurred. | “The audited source implements a functional-MVP workflow; runtime status remains unverified.” |
| Educational prototype / ongoing learning project, not production-ready. | Verified with qualification | Static limitations in current source; internal user-confirmed classification; README contradictorily says production-ready at `README.md:5` | Educational intent is internal evidence, not stated by the current repository. Non-production wording is required by the evidence gaps. | “Educational backend MVP; not presented as production-ready.” |
| Rust and Axum are used. | Verified | `Cargo.toml:4,7`; `src/main.rs`; `src/routes.rs` | None beyond no build execution. | “Built in Rust with Axum.” |
| PostgreSQL provides persistent relational storage. | Verified with qualification | `Cargo.toml:19`; `src/main.rs:32-45`; migration; SQLx queries | Fully integrated in source; connectivity and persistence behavior were not run. | “Uses PostgreSQL in the audited source for users, rooms, and bookings.” |
| Redis stores temporary data or caches. | Verified with qualification | `src/handles.rs:297-315,353-360` | Exact role is a 60-second availability-response cache; invalidation has key-alignment problems. | “Uses Redis as a short-lived room-availability cache in source; current invalidation behavior needs correction and runtime verification.” |
| JWT is associated with authentication. | Verified | `src/handles.rs:180-220`; `src/auth.rs:6-42` | JWT is implemented and wired, but security and runtime behavior are not established. | “Implements JWT issuance and Bearer-token validation in the audited source.” |
| Docker supports packaging. | Verified with qualification | `Dockerfile:1-29` | Configuration exists; image build and runtime were not tested. | “Includes a Dockerfile.” |
| Render is currently used for backend deployment. | Not verified | README mention and URL only at `README.md:7-12,23`; no Render config | Live service and commit correspondence were not checked. | “README records a Render destination; current deployment is To be verified.” |
| Vercel has a project role. | Not verified | README mention and frontend URL only at `README.md:7-12,24`; no frontend/Vercel config | Likely external to this backend repository, but that inference was not verified. | Omit until the related frontend/deployment is separately verified. |
| User registration is implemented. | Verified | Route and handler at `src/routes.rs:18`; `src/handles.rs:223-281` | Runtime unverified. | “Registration handler is implemented in the audited source.” |
| Authentication exists only around registration. | Contradicted | Login and JWT flow in `src/handles.rs:180-220`; extractor in `src/auth.rs:6-42`; protected handlers | Replace registration-only wording. | “Registration, login, JWT issuance, token extraction, and JWT-protected booking handlers are implemented in source; the broader auth lifecycle remains incomplete.” |
| Implemented methods include GET, POST, and PUT. | Contradicted | Router imports/registers GET, POST, PATCH at `src/routes.rs:1-18` | No PUT route is registered. | “The audited router registers GET, POST, and PATCH operations.” |
| Persistent data behavior is complete. | Runtime verification required | SQLx integration and migration are present | Database connection, migration execution, and endpoint persistence were not run. | Describe source integration only. |
| Transaction use was unknown. | Verified | Booking creation transaction at `src/handles.rs:118-154` | Transaction presence does not prove concurrency safety. | “Overlap check and insert occur in one PostgreSQL transaction in source.” |
| Redis role and expiry were undocumented. | Verified | Availability GET/SET and 60-second `set_ex` at `src/handles.rs:297-315,353-360` | Current key and invalidation behavior require qualification. | Describe it as a 60-second availability cache, with limitations. |
| No automated tests exist. | Contradicted | Five tests in `src/getrooms.rs:17-76`; two in `src/handles.rs:366-460` | Tests were not run and do not cover the full system. | “Seven automated test functions are tracked; current passing status and broader coverage are unverified.” |
| Deployment is To be verified. | Verified | Dockerfile plus README claims, but no live inspection or platform-native config | Keep this status. | “Deployment: To be verified.” |
| No confirmed concurrency guarantees. | Verified | Check-then-insert transaction; no current overlap constraint/lock/idempotency | A deleted historical SQLite trigger does not protect the current PostgreSQL schema. | “Concurrent double-booking protection is not established.” |
| Production readiness has not been established. | Verified | Runtime, security, concurrency, deployment, and test-result gaps in audited evidence | README's production-ready wording is unsupported. | “Educational/non-production-ready MVP.” |

Material-claim totals: **9 Verified**, **7 qualified** (Verified with qualification, Partially verified, or Runtime verification required), **2 unsupported/Not verified**, and **3 Contradicted**.

# Public-Ready Evidence Candidates

| Candidate | Claim supported | Publication safety | Redaction | Additional verification |
|---|---|---|---|---|
| Repository URL and audited commit | A public source repository and fixed audit snapshot exist | Conditional: repository is public, but historical `.env` risk needs owner review first | Do not surface historical configuration values or author metadata unnecessarily | Private history/credential review before prominent linking |
| Curated source-tree overview | The project separates entry point, router, handlers, auth, models, validation, migrations, and tests | Generally safe | Omit local paths and any unnecessary identity metadata | Confirm selected file set still matches the published commit |
| Registered route table | Six GET/POST/PATCH routes and their source-level auth boundaries | Safe with runtime qualification | No secret content | Validate behavior later; do not imply live endpoints |
| Current migration excerpt or derived data-model diagram | Users, rooms, bookings, foreign keys, unique username | Generally safe | Avoid real data; use schema only | Note lack of overlap constraint and runtime validation |
| Curated registration/login/JWT flow excerpt | bcrypt hashing, login verification, claim issuance, Bearer extraction | Conditional | Exclude fixture credentials, secret values, and verbose error/log output | Security review and runtime tests; do not label secure |
| Curated ownership-check excerpts | Authenticated user ID constrains create/list/cancel handlers | Generally safe with qualification | No tokens or live IDs | Runtime authorization tests |
| Redis availability-cache explanation | Cache-aside read/write with 60-second expiry | Conditional | No connection values | Correct or explicitly disclose key/invalidation problems before presenting as a success |
| Booking transaction and overlap-check excerpt | Intended overlap detection and transaction use | Safe only as limitation-oriented evidence | No live booking data | Concurrency tests and database-level integrity decision before stronger claims |
| Automated-test excerpts | Seven test functions exist | Conditional | Remove fixture usernames/passwords and environment assumptions | Run approved tests later; state limited coverage |
| Dockerfile excerpt | Container build configuration exists | Generally safe | None apparent | Build verification before claiming a working image |
| Commit-history summary | Iterative development, SQLite-to-PostgreSQL migration, Redis, tests, CI, README work | Conditional | Avoid author emails and sensitive `.env` history details in public copy | Owner review of history and factual narrative |
| README | Project-authored overview | Not ready without correction | Review URLs and any sensitive context | Correct production-ready, test, CI/CD, cache invalidation, and deployment claims |

No tracked screenshots or diagrams were found. No build results, test results, benchmark results, API-client captures, or current deployment records were present as safe repository-native artifacts.

# Claims Safe to Publish

Subject to normal editorial review and a fixed audited-commit reference, the following conservative claims are source-supported:

- The project is a Rust backend API built with Axum.
- The audited router registers six endpoints using GET, POST, and PATCH.
- The source includes registration and login, bcrypt password hashing/verification, JWT creation and Bearer-token extraction, room availability lookup, booking creation, current-user booking listing, and current-user cancellation.
- PostgreSQL source integration covers users, rooms, and bookings, with foreign keys and a unique username.
- Booking creation performs an application-level overlap check and insert inside one database transaction.
- Redis is used as a short-lived room-availability cache with a 60-second expiry in the audited source.
- The create, list, and cancel handlers use authenticated user identity for booking association or ownership filtering.
- Seven automated test functions are tracked: five availability tests and two registration-handler tests.
- A Dockerfile and GitHub Actions workflow configuration are present.

Each runtime-sensitive statement must be phrased as an audited-source fact, not proof that the application currently builds, runs, deploys, or behaves correctly.

# Claims Requiring Qualification

- **Functional MVP:** source-level workflow is present; runtime completion is unverified.
- **Authentication:** registration, login, JWT issuance, and protected handlers exist; the lifecycle lacks several production controls and has not been security-tested.
- **Authorization:** ownership constraints are present on registered private booking routes; runtime isolation and broader authorization are unverified.
- **PostgreSQL:** integrated throughout source; connection, migrations, and runtime data behavior were not executed.
- **Redis caching:** cache-aside logic and expiry exist, but key construction/invalidation are inconsistent and Redis failures can affect requests.
- **Overlap protection:** application-level checking exists; concurrent correctness is not guaranteed.
- **Tests:** seven functions exist; they were not run, two require local services, and coverage is narrow.
- **CI:** workflow configuration exists; current success and effective test selection are unverified.
- **Docker:** Dockerfile exists; image build and execution are unverified.
- **Deployment:** README records destinations; availability and audited-commit correspondence are unverified.
- **Individual contribution:** user-confirmed internal record supports it; repository history uses two Git author identities and is not sufficient on its own to prove contribution boundaries.

# Claims Not Currently Supported

- Production readiness, production validation, scalability, reliability, monitoring, or operational maturity.
- Secure or complete authentication.
- Complete authorization beyond the inspected registered booking routes.
- Concurrent double-booking safety or database-enforced overlap prevention.
- Correct cache invalidation.
- Passing tests, current CI success, coverage level, or auto-deployment.
- Active Render or Vercel deployment, current public availability, or deployment of the audited commit.
- A verified frontend role in this repository.
- PUT operations.
- Redis use for sessions, tokens, locks, rate limiting, idempotency, or booking-state storage.
- Successful Docker build or SQLx offline build.
- Current configuration completeness from `.env.example`.
- Absence of sensitive values from full history; the historical `.env` requires private review.

# Contradictions With Existing Internal Records

1. **Authentication scope:** `reference/synthesis/project-inventory.md` says authentication is implemented only around registration. The audited source implements registration, login, JWT creation, token extraction/validation, and protected booking handlers. The internal wording should be replaced with qualified source-accurate coverage.
2. **HTTP methods:** the inventory lists GET, POST, and PUT. The router registers GET, POST, and PATCH; no PUT route exists.
3. **Automated tests:** the inventory states no automated tests exist. Seven tracked test functions exist. Their current passing state and breadth remain unverified.
4. **Redis framing:** internal “temporary data storage or caching” wording is too broad. The exact source role is a 60-second room-availability result cache, with current key/invalidation problems.
5. **README versus internal maturity:** the internal records correctly prohibit production-ready wording, while the README calls the project production-ready. The README statement should not be propagated to nattapong.dev.

# Recommended Internal Corrections

Do not apply these changes without a separate authorized task:

- Replace “registration-related authentication only” with a qualified description of registration, login, bcrypt, JWT issuance, JWT validation, identity extraction, and JWT-protected booking handlers; retain that the overall auth lifecycle and security are incomplete.
- Replace GET/POST/PUT with GET/POST/PATCH and record the six verified route registrations.
- Replace “no automated tests” with “seven tracked automated test functions; not run during this audit; limited coverage and current pass status unverified.”
- Specify Redis as a 60-second room-availability cache rather than generic temporary booking data. Record the key-format and invalidation limitations.
- Record that PostgreSQL is integrated across all registered handlers at source level, while runtime behavior remains unverified.
- Record the create-booking transaction, but explicitly state that it does not establish concurrency safety and that the current PostgreSQL schema lacks an overlap constraint.
- Keep deployment as To be verified. Treat Render and Vercel as README claims until separately verified.
- Add the historical `.env` risk to internal publication readiness without reproducing values.
- Treat the README as needing factual correction before it is used as a public artifact.

# Known Limitations

- Static inspection cannot prove compilation, type correctness against current dependencies, migration success, runtime routing, database behavior, cache behavior, HTTP responses, or deployed behavior.
- The audit covers one commit on the default branch and does not cover future commits.
- No GitHub Actions run results, branch-protection settings, repository settings, issues, releases, or deployment dashboards were inspected.
- No live URL was visited and no API request was sent.
- No dependency-vulnerability, license, or supply-chain tool was run.
- No database, Redis, Docker, compiler, or Rust tool was started.
- Secret review was bounded and value-preserving; the historical `.env` contents were deliberately not inspected.
- Git author identities do not prove distinct contributors, legal identity, or contribution ownership.
- README and comments were treated as claims, not implementation proof.
- Absence from the inspected files does not prove a behavior never existed manually or externally.

# Runtime Verification Still Required

- Confirm the audited commit builds with an approved, reproducible environment.
- Run the test suite with explicit test selection and isolated safe PostgreSQL/Redis resources; verify which tests execute and whether they pass.
- Verify migrations against a disposable PostgreSQL database and confirm schema/query compatibility.
- Exercise all six routes with valid, invalid, unauthenticated, authenticated, and cross-user cases.
- Confirm HTTP status bodies and whether backend error details leak.
- Test JWT expiry, invalid signatures, malformed headers, deleted/nonexistent users, and lifecycle gaps.
- Test ownership isolation across users for list and cancellation paths.
- Test simultaneous overlapping booking requests; do not claim integrity until a database-level or otherwise proven guarantee is established.
- Verify Redis cache hits, expiry, invalidation, unavailability, stale data, and overlapping date-range behavior after key logic is reviewed.
- Verify CORS against the eventual public-client model.
- Build and inspect the container before claiming Docker support beyond configuration presence.
- Separately verify any Render API and Vercel frontend destinations, their source correspondence, configuration, privacy, and current availability.
- Privately review historical `.env` values and rotate/remediate any credential that may have been valid.
- Review dependencies, licenses, logs, environment handling, and operational controls before any security or production claim.

# Remaining Questions

- Which of the two Git author identities represent Nattapong, and do they reflect one person or more than one contributor?
- Is the current audited commit intended to be the canonical public project state?
- Does the project currently build and run with PostgreSQL and Redis?
- Which database isolation or constraint strategy is intended for concurrent overlap prevention?
- Should Redis remain required for booking/cancellation success, or should cache failure be non-blocking?
- How should arbitrary cached date ranges be invalidated correctly?
- Was the historical `.env` ever populated with usable credentials, and have affected credentials been rotated?
- Is the README's Render destination active and tied to this repository and commit?
- What separate repository or artifact, if any, supports the README's Vercel frontend claim?
- Why does CI invoke a `git` test-name filter, and what checks are intended to be required?
- Which project evidence is safe and useful after redaction and runtime verification?

# Audit Method

The audit followed a non-executing evidence process:

1. Verified the clean `nattapong.dev` workspace, branch, and required governance history.
2. Read the required governing documents, internal synthesis records, and approved decisions.
3. Created a unique temporary directory outside the workspace and performed one full clone of the explicitly authorized public repository.
4. Verified origin identity, default branch, commit SHA, commit metadata, full-clone status, tracked files, and clean clone state.
5. Read the manifest, lockfile presence, source, migration, SQLx metadata inventory, README, workflow, Dockerfile, ignore files, environment-example shape, and relevant Git history.
6. Enumerated registered routes from router construction and traced each handler's inputs, outputs, authentication, authorization, persistence, Redis use, and failures.
7. Compared current PostgreSQL migration behavior with the deleted historical overlap trigger without executing either.
8. Counted tracked test declarations statically and inspected workflow configuration without running it or querying hosted results.
9. Reviewed sensitive paths and history by filename and metadata without printing secret values.
10. Compared findings with the internal profile and project inventory and recorded corrections only in this report.

Code evidence was treated as implementation intent and structure. Configuration was treated as configuration presence. README statements were treated as documentation claims. Runtime behavior remains unverified unless explicitly described otherwise.

# Files and Commands Reviewed

Repository files reviewed included:

- `Cargo.toml` and the presence/inventory role of `Cargo.lock`;
- `README.md`, `.gitignore`, `.dockerignore`, and `.env.example` without reproducing configuration values;
- `.github/workflows/ci.yml`;
- `Dockerfile`;
- `migrations/20260520145317_init.sql`;
- `src/main.rs`, `src/routes.rs`, `src/handles.rs`, `src/auth.rs`, `src/models.rs`, `src/validate.rs`, and `src/getrooms.rs`;
- the ten `.sqlx/query-*.json` files as an inventory and offline-query-metadata set; and
- relevant Git history for repository chronology, environment-file path history, PostgreSQL migration, the deleted SQLite overlap trigger, Redis additions, test additions, CI changes, and README changes.

Read-only commands were limited to workspace identity/status checks, Git clone and repository metadata, Git log/show/tree/file listing, bounded `find` and `rg` searches, line-numbered file reading, and counts. No source command, package command, compiler, test runner, container tool, server, migration, network client, database client, or cache client was run.

# Publication and Implementation Boundary

This report is internal evidence for future verification and editorial work. It does not authorize public copy, public repository promotion, inventory/profile/task-list changes, implementation, source changes, dependency changes, deployment, testing, migration, remediation, or publication.

Any later use must preserve the audited commit, evidence strength, educational/non-production-ready maturity, limitations, runtime unknowns, and sensitive-history boundary. Corrections recommended here require a separate authorized task. Public claims must not be strengthened merely because the repository is public or because configuration and source are present.
