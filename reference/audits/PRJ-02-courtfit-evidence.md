# PRJ-02 Audit Record

This internal record documents PRJ-02A, a static, read-only evidence and privacy audit of CourtFit. Unless a finding says otherwise, repository evidence cited below is from audited commit `3c9cc65d00622731b4a381ddb785edc3713f8c46`.

# Audit Status

**Completed — static read-only audit of one recorded commit.**

The audit inspected source, configuration, documentation, static files, and bounded repository-native Git metadata. No application, repository script, build, test, lint, type check, browser, local server, AI-provider request, deployed application, deployment dashboard, or deployment command was executed.

The findings establish source and configuration presence only. They do not establish current build success, runtime correctness, provider compatibility, successful provider calls, correct streaming or cancellation, active deployment, accessibility compliance, recommendation accuracy, privacy security, or production readiness.

# Authorization and Scope

- **Authorized repository:** `https://github.com/nattapong18-en/chat-bot-test`
- **Authorized network use:** one Git clone of that public repository into a unique directory under `/tmp`; no other network destination was contacted.
- **Temporary clone:** `/tmp/prj-02-courtfit-audit.7at6uP/chat-bot-test`
- **Primary target:** the repository default branch and its checked-out HEAD.
- **Authorized nattapong.dev output:** `reference/audits/PRJ-02-courtfit-evidence.md` only.
- **Excluded:** source modification, execution, installation, build, tests, lint, type checking, browser review, provider calls, deployment access, authentication, public-content changes, inventory/profile/governance/task updates, artifact copying, staging, commit, push, and remote changes.

The nattapong.dev preflight passed before external access: the workspace was `/home/nattapaong/Project/Web/nattapong-dev-template`, the branch was `main`, commits `a140039`, `7b18a23`, and `a9addd8` were present with the required subjects, and the working tree was clean.

# Repository Snapshot

| Field | Recorded value |
| --- | --- |
| Repository URL | `https://github.com/nattapong18-en/chat-bot-test` |
| Repository name | `chat-bot-test` |
| Default branch | `main`, confirmed by `refs/remotes/origin/HEAD` |
| Audited commit | `3c9cc65d00622731b4a381ddb785edc3713f8c46` |
| Commit subject | `Prevent truncated assistant responses` |
| Commit timestamp | `2026-07-22T01:41:13+07:00` |
| Clone type | Full clone; `git rev-parse --is-shallow-repository` returned `false` |
| Tracked-file count | 77 |
| Available commit count | 4 commits reachable from audited `main` HEAD |
| Tags | No tags found in the cloned refs |
| License | No tracked `LICENSE`, `LICENCE`, or `COPYING` file found |
| Releases | Not verified; no release endpoint or GitHub web interface was accessed |

The four available commits span `2026-07-21T17:50:56+07:00` through `2026-07-22T01:41:13+07:00`: one large initial source/documentation commit, a README commit, a Gemini compatibility/error change, and the audited response-handling change. All available commits use one Git author identity. This short history supports describing the repository as very early and compact, not mature or production-validated.

**Audit limitations:** This record covers only commit `3c9cc65d00622731b4a381ddb785edc3713f8c46`. It does not automatically apply to later commits, other branches, forks, a deployment, provider services, local untracked files, GitHub account settings, releases not represented in cloned refs, or operational logs. No untrusted pull-request branch was inspected.

# Executive Findings

- **Verified:** The source is a Next.js App Router application with one page route (`/`) and one dynamic Node route handler (`POST /api/chat`). It uses React client state, TypeScript, Tailwind CSS, local shadcn-style components backed by Radix primitives, Zod validation, the OpenAI SDK, and the Google GenAI SDK. Evidence: `package.json:14-40`, `app/page.tsx:1-13`, and `app/api/chat/route.ts:1-30` at the audited commit.
- **Verified with qualification:** CourtFit is source-supported as a domain-specific basketball-shoe recommendation chatbot and an educational/experimental, source-level functional-MVP candidate. It is not a product catalog, verified fitting service, real store, or production-ready system. Evidence: `features/chat/components/empty-chat.tsx:13-90`, `lib/ai/instructions.ts:4-61`, `README.md:10-28`, and `docs/14-task-list.md:62-81` at the audited commit.
- **Contradicted:** The older internal statement that the API key does not pass through the application backend is false for this commit. The browser posts the key to `/api/chat`; the route passes it to the selected server adapter. Evidence: `features/chat/lib/chat-client.ts:29-46`, `app/api/chat/route.ts:30-67`, and `lib/ai/router.ts:9-17` at the audited commit.
- **Verified with qualification:** Keys are user-entered and held in React state. No direct project code stores them in localStorage, sessionStorage, cookies, a database, a URL, chat messages, or analytics. Refresh or page closure should clear that React state. The application server nevertheless receives every key with every chat request, and deployment transport, middleware, platform logging, memory inspection, browser extensions, injected scripts, and operational controls were not verified. Evidence: `features/chat/components/ai-connection-setup.tsx:24-57`, `features/chat/components/chat-screen.tsx:31-75`, `features/chat/lib/chat-client.ts:36-46`, and `README.md:45-55` at the audited commit.
- **Partially verified:** Both provider adapters request provider-side streams, and the client implements an NDJSON stream reader. The route currently buffers all provider deltas, normalizes the completed text, and emits one `text_delta` only after provider iteration ends. Source therefore does not support “incremental assistant display while the provider responds.” Evidence: `lib/ai/adapters/openai.ts:12-48`, `lib/ai/adapters/gemini.ts:14-56`, `app/api/chat/route.ts:53-111`, and `features/chat/lib/chat-client.ts:59-113` at the audited commit.
- **Verified with qualification:** Stop uses one `AbortController`; its signal reaches `fetch`, the route request signal, and both provider SDK calls. Because the route does not forward partial provider deltas, useful partial text will generally not be available to preserve before provider completion. Race behavior and provider-side cancellation require runtime verification. Evidence: `features/chat/hooks/use-chat.ts:19-91,138-147`, `features/chat/components/chat-composer.tsx:102-113`, `app/api/chat/route.ts:63-89`, `lib/ai/adapters/openai.ts:19-30`, and `lib/ai/adapters/gemini.ts:25-36` at the audited commit.
- **Verified:** Retry reuses the failed assistant message slot, clears its prior content, and sends the conversation through the associated user message using the current provider and key. It is shared across both providers and creates a new API request. Evidence: `features/chat/hooks/use-chat.ts:149-179` and `features/chat/components/message-item.tsx:60-120` at the audited commit.
- **Verified with qualification:** Provider selection supports OpenAI and Gemini. Changing provider or key clears the conversation and connection. The desktop sidebar exposes these actions; the mobile drawer instantiates `AppSidebar` without provider state or callbacks, so its New Chat action is inert and its change-key/provider controls are absent. Evidence: `features/chat/types/ai.ts:1-30`, `features/chat/components/chat-screen.tsx:64-83`, `components/layout/app-sidebar.tsx:43-87`, and `components/layout/mobile-sidebar.tsx:19-42` at the audited commit.
- **Verified:** Chat messages live in React state and do not persist across refresh. Every turn sends all non-empty prior user and assistant messages plus the newest user message to the selected provider through the server. Provider changes clear that history. Evidence: `features/chat/hooks/use-chat.ts:14-17,96-135,191-195`, `features/chat/lib/chat-client.ts:36-46`, and `features/chat/components/chat-screen.tsx:64-75` at the audited commit.
- **Verified:** No structured product catalog, database, commerce API, product route, product cards, detail pages, cart, authentication, checkout, price feed, or stock feed exists in the tracked source. Recommendations come from model output constrained by prompt instructions and can still be inaccurate or fabricated. Proposed product models/routes are documentation-only future material. Evidence: `lib/ai/instructions.ts:21-47`, `docs/09-data-model.md:89-161`, `docs/10-api-contracts.md:77-116`, and the 77-file tracked tree at the audited commit.
- **Partially verified:** Responsive classes, a mobile Radix drawer, `dvh` layout, scroll containment, adaptive widths, a mobile/desktop breakpoint, and light/dark theme code exist. Visual correctness, physical-device behavior, zoom/reflow, viewport keyboard behavior, and browser compatibility were not tested. Evidence: `components/layout/app-shell.tsx:14-22`, `components/layout/mobile-sidebar.tsx:19-43`, `features/chat/components/chat-screen.tsx:77-140`, `app/globals.css:5-104`, and `components/shared/theme-toggle.tsx:11-39` at the audited commit.
- **Not verified:** No automated test source, test dependency, test runner, test script, coverage configuration, or CI workflow was found. Test strategy documentation and unchecked test tasks are plans, not results. Manual Chrome, Firefox, and Safari testing appears only in nattapong.dev internal records, not repository-native evidence. Evidence: `package.json:5-40`, `docs/12-testing-strategy.md:1-61`, and `docs/14-task-list.md:72-81` at the audited commit.
- **Not verified:** Vercel is a README/documentation claim only. No Vercel configuration, deployment URL, GitHub Actions workflow, or repository-native deployment result was found. The Node/dynamic route is implementation evidence for a server runtime requirement, not deployment evidence. Evidence: `README.md:79-90`, `docs/04-technical-stack.md:60-63`, `app/api/chat/route.ts:21-22`, and the tracked tree at the audited commit.

# Verified Project Purpose

**Classification: Verified with qualification.**

CourtFit presents a chat-first basketball-shoe recommendation interface:

- The visible empty state asks for position, court, priority, and budget and offers Thai/English basketball-shoe prompts. `features/chat/components/empty-chat.tsx:13-90` at the audited commit.
- The system instructions define a basketball shoe store consultant, recommendation flow, fit/use factors, uncertainty, and restrictions against live-data claims. `lib/ai/instructions.ts:4-61` at the audited commit.
- The README calls it a basketball-shoe recommendation assistant rather than a general chatbot. `README.md:10-15` at the audited commit.

It is best described as an **individual project according to Nattapong’s internal record**, a **full-stack and AI integration project at source level**, and an **educational/experimental basketball-shoe recommendation chatbot**. Repository source establishes the client/server implementation but does not independently prove individual ownership or contribution boundaries.

The source does **not** present a working product catalog or commerce experience. It has recommendation shortcuts and a store-consultant prompt, but no structured products, cards, search, filters, product pages, cart, or checkout. “Basketball-shoe store chatbot” is safe only when immediately qualified as a conversational educational prototype without store data or commerce.

# Repository Maturity

**Classification: Verified with qualification.**

- The repository has four commits across less than one day of recorded history, one author identity, no tags, no tracked license, no releases verified, and one large initial commit containing nearly the entire implementation and planning set.
- Source defines a coherent minimum flow: choose provider/key, submit a message, route through one of two adapters, show a response/error, stop, retry, reset, and switch provider.
- Production-safety and testing tasks remain unchecked, including request-size limits, rate limiting, request timeout, logging review, secret review, moderation, automated tests, accessibility review, and responsive review. `docs/14-task-list.md:62-81` at the audited commit.
- A per-message limit, count limit, and aggregate conversation-character limit are implemented, despite stale unchecked task wording for message limits. `features/chat/schemas/chat-schema.ts:3-45` at the audited commit.

Safe maturity wording is **early educational/experimental application and source-level functional-MVP candidate; runtime state unverified**. “Core complete,” “fully tested,” “secure,” “deployed,” “store,” and “production-ready” are not supported.

# Verified Technology Inventory

Direct dependencies are classified from `package.json`; lockfile-only packages are not treated as direct project technologies.

| Technology | Classification | Actual role | Evidence | Public-claim guidance |
| --- | --- | --- | --- | --- |
| Next.js | Verified and used | App Router page, root layout, and dynamic Node route handler | `package.json:21`; `app/page.tsx:1-13`; `app/layout.tsx:1-33`; `app/api/chat/route.ts:21-30` | Safe as source technology; build/runtime unverified |
| React / React DOM | Verified and used | Client UI and in-memory connection/chat/draft state | `package.json:24-25`; `features/chat/components/chat-screen.tsx:1-42`; `features/chat/hooks/use-chat.ts:1-17` | Safe with React-memory qualification |
| TypeScript | Verified and used | Typed `.ts`/`.tsx` source with strict configuration | `package.json:40`; `tsconfig.json:2-28` | Safe; type check not run |
| Tailwind CSS 4 | Verified and used | Utility styling, responsive variants, theme tokens through PostCSS | `package.json:31,39`; `postcss.config.mjs:1-7`; `app/globals.css:1-86` | Safe as source usage; rendering unverified |
| shadcn/ui | Verified with qualification | `components.json` configuration and local Button/Sheet/Textarea components; not a runtime package | `components.json:1-21`; `components/ui/button.tsx:1-54`; `components/ui/sheet.tsx:1-63` | Say “shadcn-style local components using Radix primitives,” not an independently verified full library |
| Radix UI | Verified and used | Dialog/Slot primitives for mobile sheet and polymorphic button support | `package.json:16-17`; `components/ui/sheet.tsx:1-53`; `components/ui/button.tsx:1-50` | Safe with limited role |
| OpenAI SDK | Verified and used | Server-only request-scoped client, Responses API, fixed base URL, streaming request | `package.json:23`; `lib/ai/adapters/openai.ts:1-50` | Integration present; successful/current provider operation unverified |
| Google GenAI SDK | Verified and used | Server-only request-scoped Gemini client and `generateContentStream` | `package.json:15`; `lib/ai/adapters/gemini.ts:1-59` | Integration present; successful/current provider operation unverified |
| Zod | Verified and used | Chat request and environment validation | `package.json:28`; `features/chat/schemas/chat-schema.ts:1-45`; `lib/env.ts:1-18` | Safe as source role |
| next-themes | Verified and used | System/light/dark theme state and class switching | `package.json:22`; `components/shared/theme-provider.tsx:1-11`; `components/shared/theme-toggle.tsx:1-39` | Theme implementation present; persistence/runtime behavior unverified |
| lucide-react | Verified and used | Interface icons | `package.json:20`; imports across `components/` and `features/chat/components/` | Safe as limited UI role |
| class-variance-authority, clsx, tailwind-merge | Verified and used | Button variants and class merging | `package.json:18-19,27`; `components/ui/button.tsx:1-30`; `lib/utils.ts:1-6` | Supporting utilities only |
| server-only | Verified and used | Marks provider/config/router modules as server-only | `package.json:26`; `lib/ai/adapters/openai.ts:1`; `lib/ai/adapters/gemini.ts:1`; `lib/ai/router.ts:1` | Source boundary aid, not a security guarantee |
| Markdown rendering | Not found | Documentation proposes `react-markdown` and `remark-gfm`, but neither is declared or imported; messages render as plain pre-wrapped text | `docs/04-technical-stack.md:28-32`; `features/chat/components/message-content.tsx:1-11`; `package.json:14-40` | Do not claim Markdown or code-block rendering |
| Animation library | Not found | Tailwind transition/animation utilities only | `features/chat/components/streaming-indicator.tsx:9-18`; `package.json:14-40` | Do not claim an animation framework |
| State-management library | Not found | React state and custom hooks only | `features/chat/hooks/use-chat.ts:1-17`; `features/chat/components/chat-screen.tsx:31-42`; `package.json:14-40` | Safe to say React local state |
| Browser storage | No direct project use found | API key/chat are held in React state; theme library runtime persistence was not executed or inspected beyond project source | repository-wide project-source search; `features/chat/components/chat-screen.tsx:31-42` | Do not claim no browser storage of any kind; qualify the claim to key/chat project code |
| Fetch | Verified and used | Browser calls local `/api/chat`; providers are called by SDKs from server code | `features/chat/lib/chat-client.ts:29-46`; provider adapters | Safe with server-route boundary |
| Image handling | Not found | No image component, image asset, product image, or public asset tree | tracked tree and source imports | Do not claim product imagery |
| Vercel | Documentation mention only | Named in README/docs and ignored local `.vercel` directory; no deployment config or URL | `README.md:79-90`; `docs/04-technical-stack.md:60-63`; `.gitignore:27-28` | “Vercel platform context; deployment unverified” only |
| ESLint | Configuration only | Lint script and Next.js configuration | `package.json:11,35-36`; `eslint.config.mjs:1-9` | Configuration present; not run |
| TypeScript type check | Configuration only | `tsc --noEmit` script | `package.json:12`; `tsconfig.json:1-29` | Configuration present; not run |
| Prettier | Configuration only | Format/check scripts and config | `package.json:9-10,37-38`; `.prettierrc.json` | Configuration present; not run |
| Automated testing technology | Not found | No runner, test library, test script, test source, or coverage setup | `package.json:5-40`; tracked tree | Do not claim automated tests |

# Application Architecture

**Router:** Next.js App Router only. No `pages/` directory or mixed router was found.

**Main page and layout:**

- `app/layout.tsx` is a server component that supplies metadata, global CSS, and a client theme provider. `app/layout.tsx:1-33` at the audited commit.
- `app/page.tsx` is the only page and renders `ChatScreen`; its `preview` query parameter selects static UI preview states. `app/page.tsx:1-13` and `features/chat/components/chat-screen.tsx:19-29,145-166` at the audited commit.

**Client boundary and state ownership:**

- `ChatScreen`, connection setup, composer, sidebar, mobile sheet, theme controls, empty-state controls, `useChat`, and auto-scroll use client code.
- `InteractiveChatScreen` owns the draft and `AiConnection`; `useChat` owns messages, generation state, and the active abort controller. `features/chat/components/chat-screen.tsx:31-56` and `features/chat/hooks/use-chat.ts:14-18` at the audited commit.
- Static prompt controls and preview messages are source arrays, not a product dataset. `features/chat/components/empty-chat.tsx:13-30`, `features/chat/components/prompt-suggestions.tsx:15-36`, and `features/chat/lib/preview-messages.ts:1-48` at the audited commit.

**Server boundary:**

- `POST /api/chat` is forced dynamic on the Node runtime, validates JSON, selects an adapter, passes the request abort signal, consumes the provider stream, normalizes errors, and emits NDJSON. `app/api/chat/route.ts:21-30,39-67,113-161` at the audited commit.
- Provider router, adapters, model configuration, environment parsing, and SDK clients are marked `server-only`. `lib/ai/router.ts:1-18`, `lib/ai/adapters/openai.ts:1-50`, `lib/ai/adapters/gemini.ts:1-59`, and `lib/env.ts:1-18` at the audited commit.

**Provider adapters:**

- OpenAI and Gemini are isolated behind one `ProviderAdapter` shape.
- Both receive the same normalized user/assistant history and an abort signal.
- The OpenAI adapter maps roles directly; the Gemini adapter converts assistant to `model`.
- Shared instructions are applied as OpenAI `instructions` and Gemini `systemInstruction`.

**Styling and public assets:** Styling is centralized in `app/globals.css` plus component utilities. No tracked `public/` assets, screenshots, product images, or diagram files were found.

**Environment configuration:** `.env.example` documents server-controlled OpenAI model configuration and a public application name using placeholders. The Gemini model is fixed in source. No user API key environment variable is defined. `.env.example:1-6`, `lib/env.ts:5-18`, and `lib/ai/config.ts:1-15` at the audited commit.

**Error boundaries:** No Next.js `error.tsx`, `global-error.tsx`, or React error boundary was found. Chat request errors are represented within message state.

**Test organization:** No test directories or test files exist. A `data-testid` attribute and static preview mode are inspectable hooks, not automated tests.

**Deployment files:** No `vercel.json`, Dockerfile, GitHub Actions workflow, or other deployment-specific file was found.

# Pages and Routes

| Path | Type | Purpose | Client/server boundary | Data or provider behavior | Evidence | Verification status |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Next.js page route | Provider/key setup, basketball-shoe chat, quick preference controls, messages, theme, and responsive shell | Server page renders a large client `ChatScreen` subtree | Static UI data until connected; browser then posts to `/api/chat`; no authentication | `app/page.tsx:1-13`; `features/chat/components/chat-screen.tsx:23-143` at audited commit | Verified source route; runtime unverified |
| `/?preview=<value>` | Query-controlled state on `/`, not a separate route | Static preview of conversation, disabled composer, drawer, or empty state | Server page passes query string to client component | Uses hardcoded mock preview messages; no provider call | `app/page.tsx:3-12`; `features/chat/components/chat-screen.tsx:23-29,145-166`; `features/chat/lib/preview-messages.ts:1-48` | Verified source behavior; not a distinct page |
| `/api/chat` | Next.js API route handler; `POST` only | Validate key/provider/history, route to provider, normalize response/errors | Node server route and server-only SDK adapters | Receives user key and full non-empty history; calls selected provider; no project authentication | `app/api/chat/route.ts:21-47,156-161`; `lib/ai/router.ts:9-17` | Verified source route; provider/runtime behavior unverified |

No navigation link, placeholder page, product page, catalog route, account route, checkout route, or additional API route was found. Proposed `GET /api/products` endpoints are explicitly future documentation, not routes. `docs/10-api-contracts.md:77-116` at the audited commit.

# Chat Flow

**Implemented in the registered/current UI:**

1. A user selects OpenAI or Gemini and enters a non-empty key; no provider validation occurs until a request. `features/chat/components/ai-connection-setup.tsx:29-53,108-196`.
2. Quick controls/suggestions populate the draft, or the user types in a controlled textarea. `features/chat/components/empty-chat.tsx:32-44`; `features/chat/components/prompt-suggestions.tsx:42-63`; `features/chat/components/chat-composer.tsx:68-124`.
3. Submit trims the message, blocks empty/duplicate active submissions, creates a user message and pending assistant placeholder, and sends all non-empty history through the new user message. `features/chat/hooks/use-chat.ts:96-135,191-195`.
4. The browser posts provider, key, and messages to `/api/chat`. `features/chat/lib/chat-client.ts:29-46`.
5. The route validates limits, chooses the provider, and consumes its response. `features/chat/schemas/chat-schema.ts:3-45`; `app/api/chat/route.ts:39-74`.
6. The route sends one normalized assembled text event, followed by an optional development diagnostic and `done`. The client appends each received normalized event to the assistant message. `app/api/chat/route.ts:82-111`; `features/chat/lib/chat-client.ts:59-146`; `features/chat/hooks/use-chat.ts:31-61`.

**Behavior classifications:**

- Message input and Enter/Shift+Enter: **Verified** in source. IME composition is respected. `features/chat/components/chat-composer.tsx:46-65`.
- Roles: **Verified** user/assistant internally; Gemini converts assistant to `model`. `features/chat/types/chat.ts:1-18`; `lib/ai/adapters/gemini.ts:25-30`.
- System prompt: **Verified** source-defined domain policy, provider-specific insertion. `lib/ai/instructions.ts:1-61`.
- Full-history transmission: **Verified** for all non-empty messages retained in current state. `features/chat/hooks/use-chat.ts:125,191-195`.
- Loading/typing indicator: **Verified** pending/responding indicator with `role="status"`. `features/chat/components/message-item.tsx:134-147`; `features/chat/components/streaming-indicator.tsx:5-18`.
- Incremental streaming display: **Contradicted** by route buffering at this commit.
- Markdown rendering: **Not found**; content is one plain `<p>` with whitespace preservation. `features/chat/components/message-content.tsx:1-11`.
- Error messages: **Verified with qualification**; normalized codes and bilingual text exist, but some UI headings incorrectly name Gemini for provider-independent quota/unavailability errors. `lib/ai/errors.ts:24-67`; `features/chat/components/message-item.tsx:60-84`.
- Retry: **Verified** for error messages only.
- Stop/cancel: **Verified with qualification** in source; runtime/provider effects unverified.
- Conversation reset: **Verified** via New Chat and provider/key changes. `features/chat/hooks/use-chat.ts:142-145`; `features/chat/components/chat-screen.tsx:64-75`.
- Provider switching: **Verified with qualification**; clears conversation/key; mobile drawer limitation applies.
- Model switching: **Not found**; users cannot select models.
- Thai/English behavior: **Verified with qualification**; detection is any Thai character versus English fallback, and the system instructs same-language replies. Provider output quality is unverified. `features/chat/lib/chat-language.ts:1-7`; `lib/ai/instructions.ts:7-20`.
- Persistence across reloads: **Not found**; React state only.
- Empty/first-message state: **Verified**.
- Mobile interaction: **Partially verified** from source; drawer action wiring and actual viewport behavior require correction/verification.

# OpenAI Integration

**Classification: Verified with qualification; runtime verification required.**

- **Origin:** Browser calls local `/api/chat`; the OpenAI SDK is instantiated in a `server-only` adapter. `features/chat/lib/chat-client.ts:36-46`; `lib/ai/adapters/openai.ts:1-18`.
- **SDK/endpoint:** Official `openai` direct dependency with base URL `https://api.openai.com/v1`. `package.json:23`; `lib/ai/adapters/openai.ts:3,10,18`.
- **API operation:** `client.responses.create`.
- **Model in audited source:** `OPENAI_MODEL` server environment value when provided; otherwise `gpt-4.1-mini`. `lib/ai/config.ts:8-14`; `lib/env.ts:10-17`.
- **Request:** Shared instructions, the complete normalized message history as role/content pairs, and `stream: true`. `lib/ai/adapters/openai.ts:19-29`.
- **Retries:** SDK `maxRetries: 0`; UI Retry creates a new application request. `lib/ai/adapters/openai.ts:29`; `features/chat/hooks/use-chat.ts:149-179`.
- **Streaming parser:** Iterates Responses API events, accepts `response.output_text.delta`, and maps completion/incomplete reason. `lib/ai/adapters/openai.ts:32-48`.
- **Abort:** Receives the route request signal in SDK request options. `lib/ai/adapters/openai.ts:12-16,29`.
- **Errors:** Raw SDK errors are classified server-side into public codes/messages. No raw provider error is intentionally returned. `lib/ai/adapters/openai.ts:49-50`; `lib/ai/errors.ts:70-163`.
- **Key:** User-entered key reaches the server route and request-scoped OpenAI client; no hardcoded or server-owned OpenAI user key was found.
- **Logging:** Project logging records response-length/timing diagnostics in development, not prompts, responses, or keys. `app/api/chat/route.ts:99-110,120-151,164-181`; `features/chat/hooks/use-chat.ts:48-52`.

This audit does not establish that the endpoint or model remains currently supported, that the SDK request succeeds, that provider errors are completely classified, or that a deployment protects request bodies operationally.

# Gemini Integration

**Classification: Verified with qualification; runtime verification required.**

- **Origin:** Browser calls local `/api/chat`; the Google GenAI SDK is instantiated in a `server-only` adapter. `features/chat/lib/chat-client.ts:36-46`; `lib/ai/adapters/gemini.ts:1-24`.
- **SDK/endpoint:** Direct `@google/genai` dependency with base URL `https://generativelanguage.googleapis.com/` and `vertexai: false`. `package.json:15`; `lib/ai/adapters/gemini.ts:3,12,20-24`.
- **API operation:** `client.models.generateContentStream`.
- **Model in audited source:** fixed `gemini-flash-latest`; no environment override or user choice. `lib/ai/config.ts:6-14`.
- **Request conversion:** User remains `user`; assistant becomes `model`; every message is one text part. Shared instructions become `systemInstruction`. Temperature is `0.3`; maximum output tokens are `2,048`. `lib/ai/adapters/gemini.ts:25-36`.
- **Streaming parser:** Iterates candidates and concatenates all text parts in each chunk; maps finish reasons `STOP`, `MAX_TOKENS`, `SAFETY`, and `RECITATION`. `lib/ai/adapters/gemini.ts:39-56,62-71`.
- **Abort:** The route request signal becomes `config.abortSignal`. `lib/ai/adapters/gemini.ts:14-18,31-36`.
- **Errors:** Provider errors are normalized through the shared classifier. `lib/ai/adapters/gemini.ts:57-58`; `lib/ai/errors.ts:106-163`.
- **Key:** User-entered key reaches the server route and request-scoped Gemini client; no hardcoded or server-owned Gemini user key was found.

This audit does not establish current provider/model compatibility, successful calls, chunk semantics, cancellation correctness, or whether the SDK transports the key in a particular header/query form.

# Provider Switching

**Classification: Verified with qualification.**

- Selectable providers are OpenAI and Google Gemini; both are enabled. `features/chat/types/ai.ts:1-30`.
- Provider and key are stored together in one `AiConnection` in React state. `features/chat/types/ai.ts:5-8`; `features/chat/components/chat-screen.tsx:31-34`.
- Changing the provider or key calls `clearConversation`, clears draft, clears connection, and returns to setup. Provider change resets the setup choice; key change retains the provider as the initial selection but still requires a new key. `features/chat/components/chat-screen.tsx:64-75`.
- Selecting a different provider in setup clears the key draft. `features/chat/components/ai-connection-setup.tsx:42-46`.
- Switching does not preserve the conversation; no prior messages are converted or retransmitted to the new provider.
- Model selection changes indirectly with provider: OpenAI uses its server-controlled model; Gemini uses its fixed server model. There is no model picker.
- The key input is reset on provider change, so source does not intentionally expose one provider’s key to the other adapter.
- Provider-specific routing is explicit after strict enum validation. `features/chat/schemas/chat-schema.ts:8-18`; `lib/ai/router.ts:9-17`.
- Provider-specific UI errors are incomplete: several headings say Gemini regardless of actual provider. `features/chat/components/message-item.tsx:62-74`.
- The desktop switch controls are wired. The mobile drawer does not receive provider/callback props, so it does not reproduce the same actions. `components/layout/mobile-sidebar.tsx:19-42`.

# API-Key Privacy Boundary

**Classification: Verified with qualification; no security guarantee.**

| Question | Finding | Evidence |
| --- | --- | --- |
| Entered by user | Yes, masked input with show/hide/clear | `features/chat/components/ai-connection-setup.tsx:108-151,185-196` |
| Hardcoded | No user/provider key found in current source or bounded history scans | path-only scan; `.env.example` contains placeholders/configuration only |
| Server environment | User keys: no. OpenAI model only: optional server environment | `lib/env.ts:10-17`; `lib/ai/config.ts:8-14` |
| Public environment | No API key. `NEXT_PUBLIC_APP_NAME` only | `lib/env.ts:10-17` |
| React state | Yes, in connection draft and then `AiConnection` | `features/chat/components/ai-connection-setup.tsx:24-39`; `features/chat/components/chat-screen.tsx:31-34` |
| Browser memory | Yes, as normal client-side JavaScript state and controlled input value | same source |
| localStorage | No direct project use found for key/chat | repository-wide source search |
| sessionStorage | No direct project use found | repository-wide source search |
| Cookies | No direct project use found | repository-wide source search |
| Persisted chat state | No key field in `ChatMessage`; no persistence implementation | `features/chat/types/chat.ts:8-18`; `features/chat/hooks/use-chat.ts:14-17` |
| Sent to local API route | Yes, in JSON body on every request/retry | `features/chat/lib/chat-client.ts:36-46` |
| Sent directly browser-to-provider | No; browser calls only `/api/chat` | `features/chat/lib/chat-client.ts:36-46` |
| Sent by app server to provider | Yes, supplied to the selected request-scoped SDK client | `app/api/chat/route.ts:47-67`; provider adapters |
| Logged by project code | No key/body logging found; development diagnostics exclude key/messages/text | `app/api/chat/route.ts:99-110,120-181`; `features/chat/hooks/use-chat.ts:48-52` |
| Included in URL | No project source path found | `features/chat/lib/chat-client.ts:36-46` |
| Analytics | No analytics dependency, identifier, or call found | `package.json:14-40`; repository-wide source search |
| Exposed through client bundle by design | The key value is not built into the bundle, but client code necessarily holds the runtime value; same-origin scripts, browser tools/extensions, or compromised client code could access it | client state sources above |
| Visible removal | Clear key, header disconnect, change key/provider, refresh/close | `features/chat/components/ai-connection-setup.tsx:55-57,185-193`; `features/chat/components/chat-header.tsx:32-45`; `features/chat/components/chat-screen.tsx:64-75` |

**Who can access the key in the implemented architecture:** the user/browser runtime, CourtFit’s application server process and any infrastructure capable of observing its requests or memory, and the selected provider through its SDK request. The other provider is not intentionally selected or called for that request.

**Persistence after refresh:** No project code persists the key; React state is recreated on refresh. This is source-supported but not runtime-tested.

**Project-server boundary:** The key always passes through the application server. The older internal description that it remains client-side and bypasses the backend is contradicted.

**BYOK accuracy:** “Users supply their own provider key” is accurate. “Client-only BYOK” is inaccurate. Safe wording is: **the user enters a key held in browser React state; each chat request sends it to CourtFit’s server route, which creates a request-scoped client for the explicitly selected provider; no project persistence or key logging was found in audited source.**

**Present protections:** masked input; show/hide/clear; no autocomplete; strict provider enum; provider-specific router; no custom model/base URL input; request schema/length limits; response `no-store` headers; server-only modules; fixed public errors; zero SDK retries for OpenAI; no project persistence/analytics/key logging found.

**Missing or unverified protections:** deployment HTTPS; reverse-proxy/platform/middleware logging; server request-body limits independent of parsed schema; rate limiting; application timeout; concurrent request safeguards; CSP and script-injection protections; dependency/browser-extension risks; operational secret handling; monitoring redaction; provider-side retention; privacy policy/consent; production security review; safe deployment configuration. `docs/14-task-list.md:62-81` and `docs/11-security-and-safety.md:62-96` show several as planned.

# Conversation Privacy

**Classification: Verified with qualification.**

- Chat history is stored in React state only and is lost on refresh. `features/chat/hooks/use-chat.ts:14-17`.
- Every new message request includes all current non-empty user/assistant content through the latest user message. `features/chat/hooks/use-chat.ts:125,191-195`.
- The browser sends content and key to the project server; the server passes the message history to the selected provider. `features/chat/lib/chat-client.ts:36-46`; `app/api/chat/route.ts:47-67`.
- OpenAI receives the message history as direct role/content input; Gemini receives role-converted text parts. `lib/ai/adapters/openai.ts:19-28`; `lib/ai/adapters/gemini.ts:25-35`.
- Provider switching and key changing clear the visible conversation before a new provider connection, so prior content is not intentionally retransmitted after a switch. `features/chat/components/chat-screen.tsx:64-75`.
- New Chat clears visible state and aborts the active request. No persisted state exists to clear. `features/chat/hooks/use-chat.ts:142-145`.
- Project diagnostics contain identifiers, lengths, counts, finish reason, cancellation flag, and duration, not prompt/response content or key. They run only in development. `features/chat/types/api.ts:30-41`; `app/api/chat/route.ts:164-181`.
- No analytics or error-reporting integration was found.

Operational request logging, provider retention, platform telemetry, browser extensions, and deployed transport were not inspected. Source therefore cannot support “complete conversation privacy.”

# Streaming Implementation

**OpenAI — Partially verified, runtime verification required.**

The adapter requests `stream: true`, iterates `response.output_text.delta`, and records completion reasons. `lib/ai/adapters/openai.ts:19-48`. The route then accumulates every delta into `providerResponse` and does not enqueue it. After iteration finishes, it emits the entire normalized response in one `text_delta`. `app/api/chat/route.ts:53-74,82-111`.

**Gemini — Partially verified, runtime verification required.**

The adapter calls `generateContentStream`, iterates candidates/chunks, joins text parts, and records finish reasons. `lib/ai/adapters/gemini.ts:25-56`. The same route-level buffering prevents incremental forwarding to the client.

**Client protocol — Verified in source.**

The browser reads `Response.body` with a reader, uses `TextDecoder`, buffers incomplete lines, parses newline-delimited JSON, handles partial JSON lines, and dispatches text/diagnostic/error events. `features/chat/lib/chat-client.ts:59-146`. This parser could handle multiple deltas, but the audited route normally emits one assembled text delta.

**Completion/error behavior:** The route emits `done` after one text event. The client ignores `done` explicitly and treats a clean body close as completion. Malformed JSON creates `INVALID_AI_RESPONSE`. Provider exceptions become an NDJSON error event. `app/api/chat/route.ts:93-136`; `features/chat/lib/chat-client.ts:116-146`.

**Cleanup limitations:** Abort signals are connected, and the hook aborts on unmount/provider change. There is no explicit reader cancellation or provider-change stream cleanup beyond abort. Runtime races remain unverified.

Safe public wording is **“Both server adapters consume provider streaming APIs, while the audited route buffers the provider output and returns one assembled response event; incremental UI streaming is not established.”**

# Stop and Cancellation

**Classification: Verified with qualification; runtime verification required.**

- A Stop button replaces Send while `isGenerating` and calls `stopGenerating`. `features/chat/components/chat-composer.tsx:102-113`; `features/chat/components/chat-screen.tsx:132-139`.
- `stopGenerating` aborts the current `AbortController`. `features/chat/hooks/use-chat.ts:138-140`.
- The signal reaches browser `fetch`, becomes `request.signal` on the route, then reaches OpenAI as the request signal and Gemini as `abortSignal`. `features/chat/lib/chat-client.ts:36-46`; `app/api/chat/route.ts:63-67`; provider adapter evidence above.
- The hook maps an abort to `stopped`, clears the active controller, and resets generating state. `features/chat/hooks/use-chat.ts:62-91`.
- Conversation clear and component unmount also abort. `features/chat/hooks/use-chat.ts:142-147`.
- Stopped content remains if content had already reached state. `features/chat/components/message-item.tsx:124-153`.

Because route-level buffering withholds provider deltas, stopping before provider completion will generally leave no partial assistant text. An event already decoded by the client does not have an additional signal guard inside `onChunk`, so late-update races require runtime testing. Provider-side billing/cancellation semantics are also unverified.

# Retry Behavior

**Classification: Verified in source; runtime verification required.**

- Retry is offered only for `error` assistant messages, not ordinary completed or stopped messages. `features/chat/components/message-item.tsx:60-96`.
- The same assistant message is reset to empty/pending; the previous assistant error/content is not appended or duplicated. `features/chat/hooks/use-chat.ts:164-170`.
- The related original user message is found using `relatedUserMessageId`. `features/chat/hooks/use-chat.ts:153-162`.
- `messages.slice(0, assistantIndex)` includes prior conversation plus that user message and excludes the failed assistant placeholder; `toRequestMessages` sends all non-empty content. `features/chat/hooks/use-chat.ts:172-175,191-195`.
- Current provider/model/key selection is preserved through the current `connection`.
- `runAssistantResponse` creates a new abort controller and API request; the same shared path supports both providers. `features/chat/hooks/use-chat.ts:19-34`.
- Active-request guards reduce duplicate retry requests.

Actual provider success, duplicate prevention under rapid interaction, and error recovery require runtime verification.

# Product and Recommendation Data

**Classification: Verified absence of structured/current data; model-generated output only.**

- No static shoe JSON, product array, database, product API client, search API, catalog route, product image, product card, detail page, cart, or checkout source was found.
- The visible quick controls encode only preference phrases (position, court, priority, budget), not product facts. `features/chat/components/empty-chat.tsx:13-44`.
- Prompt suggestions are hardcoded example questions. `features/chat/components/prompt-suggestions.tsx:15-36`.
- Recommendation behavior is prompt-directed AI generation. Instructions tell the model to ask for fit/use factors, limit product lists, qualify uncertainty, and avoid claiming live price/stock/specification facts. `lib/ai/instructions.ts:21-47,50-61`.
- Proposed `BasketballShoe`, preference, search-result, business-error models, and product endpoints are explicitly later documentation. `docs/09-data-model.md:89-161`; `docs/10-api-contracts.md:77-116`.
- Message output is plain text; bold Markdown requested by the prompt will display literal `**` markers because Markdown rendering is not implemented. `lib/ai/instructions.ts:27-28`; `features/chat/components/message-content.tsx:5-9`.

The model can still invent product names, specifications, availability, or suitability despite prompt rules. No recommendation algorithm, factual grounding, product verification, or quality evaluation exists in the audited source.

# Educational Disclaimer and Public Boundaries

**Classification: Partially verified.**

Rendered source includes:

- A composer footer paraphrased as “simulated-system guidance; no real-time price or stock data.” `features/chat/components/chat-composer.tsx:126-128`.
- API-key setup text explaining temporary page memory, application-server transmission, first-request validation, and user responsibility for provider charges. `features/chat/components/ai-connection-setup.tsx:153-182`.
- Prompt rules against verified price/stock/latest/best/injury claims. These are model instructions, not visible static disclaimer text. `lib/ai/instructions.ts:37-47`.

Rendered source does **not** explicitly say “educational use only,” “academic project,” “not an official store,” “AI output may be inaccurate,” “no professional advice,” or “no checkout/purchase.” README uses an Academic Project badge and documents limitations, but that is documentation, not rendered UI. `README.md:5-8,150-160`.

Safe public presentation must add the educational/experimental and recommendation-accuracy limits outside model-generated content in a later authorized task.

# Responsive and Dark-Mode Evidence

**Classification: Source-supported with limitations; runtime visual verification required.**

- Desktop uses a two-column grid at `lg`; desktop sidebar is hidden below that breakpoint. `components/layout/app-shell.tsx:14-22`.
- A Radix dialog sheet provides a mobile drawer with an accessible trigger/title/description and constrained width. `components/layout/mobile-sidebar.tsx:19-43`; `components/ui/sheet.tsx:21-53`.
- Main/chat heights use `h-dvh`; message area uses vertical overflow; widths/padding adapt at `sm`/`lg`; prompt/provider grids change columns; composer textarea caps height. Relevant evidence: `features/chat/components/chat-screen.tsx:84-140`, `features/chat/components/ai-connection-setup.tsx:60-82,185-197`, `features/chat/components/prompt-suggestions.tsx:42-63`, `features/chat/components/chat-composer.tsx:35-44,68-130`.
- Message widths and controls flex/wrap for narrower layouts. `features/chat/components/message-item.tsx:30-52,97-120`.
- Theme provider defaults to system theme and toggles light/dark classes. Dark token parity exists in CSS. `app/layout.tsx:18-31`; `components/shared/theme-toggle.tsx:11-39`; `app/globals.css:5-56`.

Known static limitation: `MobileSidebar` renders `AppSidebar` without active provider or action callbacks, so the mobile drawer’s New Chat control has no handler and provider/key actions do not appear. The header Clear action remains available after connection. No mobile device, software keyboard, orientation, reflow, zoom, touch-target, Chrome, Firefox, or Safari behavior was run.

# Accessibility Evidence

**Static evidence only; not an accessibility certification.**

Positive source evidence:

- Form, fieldset, legend, explicit key label, radio inputs, status guidance, masked input, and named buttons. `features/chat/components/ai-connection-setup.tsx:60-196`.
- Composer textarea has an accessible bilingual name/hint; Enter respects IME composition; send/stop buttons have names. `features/chat/components/chat-composer.tsx:54-65,78-123`.
- Buttons use visible `focus-visible` rings and have disabled states. `components/ui/button.tsx:7-29`.
- Radix Dialog supplies the drawer primitive; title/description and close text exist. `components/layout/mobile-sidebar.tsx:21-42`; `components/ui/sheet.tsx:21-53`.
- Error uses `role="alert"`; streaming uses `role="status"`; conversation uses `aria-live="polite"`; selection uses `aria-pressed`. `components/shared/error-message.tsx:11-23`; `features/chat/components/streaming-indicator.tsx:8-18`; `features/chat/components/message-list.tsx:17-32`; `features/chat/components/empty-chat.tsx:71-82`.
- The ping animation has a `motion-reduce:animate-none` class. `features/chat/components/streaming-indicator.tsx:13-15`.
- No images require alt text in the current source.

Static concerns and gaps:

- Root document language is always `en` although major visible content is Thai or bilingual; messages do not set per-message `lang`. `app/layout.tsx:18-21`; `features/chat/components/message-item.tsx:30-43`.
- Once a conversation replaces the empty state, the main chat view has no heading; the header title is a paragraph. `features/chat/components/chat-header.tsx:19-29`; `features/chat/components/chat-screen.tsx:95-115`.
- The entire conversation section is live, which may announce more content than intended; streaming announcement behavior was not tested.
- Smooth auto-scroll is requested without checking reduced-motion preference. `features/chat/hooks/use-auto-scroll.ts:28-41`.
- No reduced-motion rule covers drawer transforms or auto-scroll beyond the indicator.
- No screen-reader, keyboard-only, focus-order, zoom/reflow, contrast, high-contrast, or touch review exists; the repository task list leaves accessibility review unchecked. `docs/14-task-list.md:72-81`.
- The mobile drawer action wiring limitation affects functional parity.

# Error Handling

**Classification: Verified with qualification.**

- Missing/unsupported provider, missing key, invalid schema, message size/count, and aggregate conversation-size validation exist. `features/chat/schemas/chat-schema.ts:3-45`; `app/api/chat/route.ts:203-225`.
- Provider errors map authentication, provider mismatch, quota, rate limit, timeout, unavailable model, provider unavailable, malformed response, and internal failures into fixed public messages. `lib/ai/errors.ts:24-67,106-163`.
- Raw provider errors are read only server-side for classification; the client receives fixed normalized messages. `lib/ai/errors.ts:116-162`; `app/api/chat/route.ts:120-136`.
- Client handles non-OK JSON, absent response body, malformed NDJSON, stream error events, abort, and generic network errors. `features/chat/lib/chat-client.ts:48-57,116-166`; `features/chat/hooks/use-chat.ts:62-85`.
- Empty provider output becomes a fixed incomplete-response fallback rather than an empty assistant message. `lib/ai/response-normalizer.ts:13-24`.
- Error UI preserves the user message and offers Retry; some authentication/quota errors also offer key/provider changes. `features/chat/components/message-item.tsx:60-120`.

Limitations:

- No application timeout, rate limiter, moderation, or independent request-byte limit was found.
- OpenAI disables SDK retries; Gemini retry behavior was not explicitly configured and SDK defaults were not executed.
- Provider error normalization does not use the provider argument for classification, and several user headings hardcode Gemini-specific wording for errors that can originate from OpenAI. `lib/ai/errors.ts:106-110`; `features/chat/components/message-item.tsx:62-74`.
- A clean response close without a `done` event is not treated as an error by the client.
- Operational logs/middleware, malformed provider chunks, and all recovery behavior require runtime tests.

# Testing and Quality Evidence

**Automated tests: Not found.**

- No test source file, test directory, test framework dependency, test script, test runner configuration, or coverage configuration was found.
- `docs/12-testing-strategy.md` lists desired unit, component, API, and end-to-end coverage; it is a plan. `docs/12-testing-strategy.md:1-61`.
- Test tasks T501-T506, accessibility review T507, and responsive review T508 are unchecked. `docs/14-task-list.md:72-81`.
- A `data-testid` on the chat scroll container and static preview query modes are testability aids, not evidence that tests exist or pass. `features/chat/components/chat-screen.tsx:89-94,145-166`.
- Lint, type-check, format, and build scripts/configuration exist. None was run. `package.json:5-12`; `eslint.config.mjs:1-9`; `tsconfig.json:1-29`.
- No GitHub Actions or other CI configuration was found.
- README badges describe technology/status, not build results. `README.md:5-8`.
- Manual Chrome, Firefox, and Safari testing is an internal self-reported claim only; no repository-native test matrix, versions, operating systems, screenshots, or results support it.

# Deployment Evidence

**Classification: Documentation claim only; runtime status unverified.**

- README identifies a Next.js server-route architecture but gives no live URL. `README.md:57-77,120-160`.
- Technical-stack documentation lists Vercel and compatible Node hosting. `docs/04-technical-stack.md:60-63`.
- `.gitignore` ignores `.vercel/`, which shows expected tooling context only. `.gitignore:27-28`.
- No `vercel.json`, deployment workflow, deployment badge, deployment output, domain, environment record, serverless configuration, or GitHub Actions file exists.
- The dynamic Node route means a deployment must support server execution and outbound provider calls. `app/api/chat/route.ts:21-22`.
- `.env.example` documents model/application-name configuration only; user provider keys are runtime request values.

The audit did not visit Vercel, a live URL, GitHub deployment records, or provider dashboards. Current deployment, URL, availability, source equivalence, environment configuration, HTTPS, and server logs remain unverified.

# Security and Privacy Review

**Source protections verified with qualification:**

- User keys are not hardcoded and no project persistence path was found.
- Strict provider enum and schema limits reduce malformed input. `features/chat/schemas/chat-schema.ts:3-45`.
- Users cannot provide base URLs or model identifiers.
- Server-only adapters isolate SDK calls. `lib/ai/router.ts:1-18`.
- Response headers request no caching and add `nosniff`. `app/api/chat/route.ts:24-28,156-161`.
- Public errors are normalized.
- Development diagnostics omit message/key content.
- `.gitignore` excludes `.env`/`.env.*` except `.env.example`, logs, build output, and `.vercel`. `.gitignore:1-55`.

**Material risks/limitations:**

- BYOK moves billing responsibility but does not make the key client-only or inherently secure.
- The application server receives raw keys and full conversations in JSON request bodies.
- Browser-held keys are accessible to the page runtime and potentially to compromised same-origin scripts/extensions or browser inspection.
- Server/process/platform operators and logging infrastructure may be able to observe request content; deployment controls were not audited.
- No rate limiting, timeout, request concurrency control, moderation, CSP, privacy policy, or public-deployment security review is implemented/evidenced.
- The fixed public metadata description says “secure” without evidence. `app/layout.tsx:9-12`.
- No formal threat model, dependency audit, vulnerability scan, or security test was performed.
- Model instructions reduce unsafe factual claims but cannot guarantee output correctness.

No exploit instructions are included in this record.

# Secret and Sensitive-Data Review

**Result: No candidate credential value was identified by the bounded non-value scans; one personal-data publication issue remains.**

The review deliberately returned paths/categories only and did not print, copy, hash, or partially reveal candidate values.

- **Environment paths:** `.env.example` is the only `.env`-named path found in current or available history. It contains configuration placeholders, not a user provider key. No tracked `.env` path was found.
- **Key/private-key signatures:** No OpenAI-style key, Google API-key-style value, or private-key header signature was identified in the audited tree or all four available commits by path-only pattern scans.
- **Other credentials:** No deployment token, database URL, private key, or provider token path was identified by bounded path-only scans.
- **Documentation examples:** One chat request example uses an explicitly fictional placeholder rather than a real credential. Do not reuse it as proof of safe production handling. `docs/10-api-contracts.md:7-20`.
- **Personal email:** One author email address exists in Git commit metadata across the available history. It is not the confirmed public contact address in nattapong.dev’s internal profile. Do not reproduce it; owner review is recommended before prominent publication of commit-history artifacts.
- **Phone/location:** No tracked phone number or precise location was established. A path-only phone heuristic produced only false-positive numeric/date/style content after bounded review.
- **Conversations:** One tracked static preview conversation is clearly mock UI data, not identified real-user content. `features/chat/lib/preview-messages.ts:1-48`.
- **Analytics identifiers:** None found.
- **Screenshots:** No tracked screenshots or image assets exist, so no screenshot credential review was required.

This is a bounded static pattern and metadata review, not proof that no secret has ever existed outside the available four-commit history, in deleted unreachable objects, local files, GitHub settings, deployments, logs, issues, releases, or provider systems.

# Claim Verification Matrix

Duplicated material wording in `reference/synthesis/project-inventory.md` and `reference/synthesis/personal-profile.md` is consolidated below. Tally: **11 Verified, 15 qualified/partial/runtime-required, 6 Not verified, and 3 Contradicted material claim groups (35 total).**

| Existing claim | Classification | Repository evidence | Qualification or correction | Safe public wording |
| --- | --- | --- | --- | --- |
| CourtFit is a basketball-shoe recommendation chatbot | Verified | `features/chat/components/empty-chat.tsx:13-90`; `lib/ai/instructions.ts:4-61` | Chat-first, model-generated recommendations | “Basketball-shoe recommendation chatbot” |
| Individual full-stack and AI integration project | Partially verified | Client page/state plus server route/adapters | Full-stack/AI source is verified; individual role is internal user-confirmed context | “Individual project according to Nattapong’s internal record; client/server AI integration verified in source” |
| Core development completed; testing/refinement ongoing | Not verified | Four-commit history; unchecked production/test tasks | Lifecycle/completion cannot be established statically | “Early source-level functional-MVP candidate; runtime state unverified” |
| Educational and experimental application | Verified with qualification | README academic badge; docs call academic MVP | Education context is documentation; experimental maturity fits evidence | “Educational and experimental application” |
| Domain-specific rather than general chatbot | Verified | Visible shoe prompts and domain system instructions | Model could still answer outside scope; runtime unverified | “Designed as a domain-specific basketball-shoe assistant” |
| Considers position, court, style, budget, foot shape, performance priorities | Verified with qualification | `empty-chat.tsx:13-44`; `instructions.ts:21-35` | Some factors are prompt instructions/free text, not structured logic | “Prompts users for basketball-shoe preferences such as position, court, budget, and fit” |
| Nattapong designed/developed the complete app | Not verified | Repository has one author identity but no contribution evidence | Git metadata does not prove complete/sole contribution | Retain as self-reported role only |
| Next.js, React, TypeScript, Tailwind CSS, shadcn/ui | Verified | `package.json:14-40`; source/config | shadcn is local configured components using Radix | List with actual roles and shadcn qualification |
| OpenAI integration | Verified with qualification | `lib/ai/adapters/openai.ts:1-50` | Source integration only; provider success/current support unverified | “Server-side OpenAI Responses API adapter exists in audited source” |
| Google Gemini integration | Verified with qualification | `lib/ai/adapters/gemini.ts:1-59` | Source integration only; provider success/current support unverified | “Server-side Google GenAI streaming adapter exists in audited source” |
| REST APIs | Verified with qualification | Browser JSON POST plus SDK calls | “REST” is broad; source uses one local HTTP route and provider SDKs | Describe the concrete `/api/chat` and SDK boundary |
| Git and GitHub | Verified | Full clone and four-commit history | Does not prove workflow quality | “Public GitHub repository with audited commit” |
| Vercel deployment | Not verified | README/docs mention only | No URL/config/result; Vercel not accessed | “Vercel platform context; live deployment To be verified” |
| Thai and English conversations | Verified with qualification | language detector, bilingual UI, prompt instructions | Actual provider reply quality not executed | “Thai/English input and same-language response intent exist in source” |
| Responses update incrementally while provider responds | Contradicted | route buffers at `app/api/chat/route.ts:53-111` | Provider streams are consumed but not forwarded incrementally | “Provider-stream consumption exists; audited UI receives one assembled response event” |
| Stop control | Verified with qualification | hook, button, signal wiring | Partial preservation/provider cancellation runtime unverified | “AbortController-based Stop path is wired in source” |
| Retry control | Verified | `use-chat.ts:149-179`; error UI | Runtime provider result unverified | “Error Retry resends relevant history using current provider/key” |
| Provider switching | Verified with qualification | `chat-screen.tsx:64-75`; provider options | Clears history/key; mobile drawer parity issue | “OpenAI/Gemini switching exists and resets incompatible state” |
| Responsive layouts | Verified with qualification | responsive classes/mobile drawer | Runtime/device/browser review absent; mobile action wiring issue | “Responsive source patterns exist; visual/device behavior unverified” |
| Dark mode | Verified | next-themes and CSS tokens | Runtime/theme persistence unverified | “System/light/dark theme switching exists in source” |
| Quick recommendation controls | Verified | `empty-chat.tsx:13-44`; `prompt-suggestions.tsx:15-63` | They build prompts, not database queries | “Quick preference and prompt controls populate chat input” |
| User-provided API keys (BYOK) | Verified | setup UI and request type | BYOK is not a security guarantee | “Users supply their selected provider key” |
| Key kept temporarily in session/browser memory | Verified with qualification | React state only | Avoid “sessionStorage”; key also reaches app server | “Held in React memory until clear/refresh, then sent to the server per request” |
| Key stays client-side and does not pass through backend | Contradicted | `chat-client.ts:36-46`; route/adapters | Server receives and uses key | State the actual browser → app server → selected provider flow |
| No persistent chat history | Verified | React state only; no persistence | Theme library behavior is unrelated | “Chat history is not persisted by project code” |
| No verified product database/real-time price/stock/specs | Verified | no product implementation; prompt disclaimer | Model may still invent facts | Preserve limitation prominently |
| No authentication, checkout, or commerce transaction | Verified | no routes/dependencies/source | Static absence only at audited commit | Preserve limitation |
| Manual Chrome, Firefox, and Safari testing | Not verified | no repository-native matrix/result | Internal self-report only; versions/scenarios absent | “Manual browser testing is self-reported and undocumented” |
| Deployed app, screenshots, logs, and build validation are available evidence | Not verified | none tracked or accessed | May exist elsewhere, but audit cannot support it | Omit until artifacts are separately provided and reviewed |
| Recommendation accuracy is not guaranteed | Verified with qualification | no grounding/quality tests; prompt limits | Source supports the limitation, not an accuracy measurement | “Model-generated recommendations require independent verification” |
| API-key handling is secure | Runtime verification required | source protections plus missing deployment controls | No secure/complete privacy claim supported | Describe boundaries/protections/unknowns, not “secure” |
| Deployment work is part of the completed contribution | Not verified | no repository-native deployment result | Documentation claim only | Omit or mark self-reported/To be verified |
| Personal profile says repository is “To be added” | Contradicted | authorized/audited repository URL exists | Internal record is stale | Correct later to the audited URL and commit, when authorized |
| shadcn/ui is used | Verified with qualification | `components.json`; local UI files; Radix imports | Not a direct `shadcn` runtime dependency | “Local shadcn-style components using Radix primitives” |
| Basketball-shoe store experience | Partially verified | store-consultant prompt, chat UI | No catalog/store/commerce implementation | “Conversational recommendation prototype, not a real store” |

# Public-Ready Evidence Candidates

No artifact is copied or approved for publication by this audit.

| Candidate | Claim supported | Publication safety | Redaction required | Runtime verification needed | Secret-history review | Current-source accuracy |
| --- | --- | --- | --- | --- | --- | --- |
| Repository URL plus fixed commit | Exact source provenance | Generally safe after owner confirms repository promotion | Do not reproduce author email | No for source claim | Review commit-metadata email before prominent history use | Yes, commit-scoped |
| Curated source-tree overview | App/client/server/provider boundaries | Safe if paths only and limitations included | None expected | No | Minimal | Accurate |
| One-page/one-route table | Registered source routes | Safe | None | Yes for runtime behavior | No | Accurate |
| Chat-flow diagram derived from source | Browser → `/api/chat` → selected adapter/provider | Safe if server key/history boundary is explicit | Never include key/request values | Yes | No | Accurate if route buffering is shown |
| API-key privacy-boundary diagram | React memory → app server → provider; no project persistence found | High value; use cautious wording | Never show key/header/body/storage capture | Deployment review required | No | Accurate for audited source |
| OpenAI adapter excerpt | Responses API, model/instructions/history/signal | Safe small excerpt | No key values or example headers | Provider call required for runtime | No | Accurate |
| Gemini adapter excerpt | SDK, role conversion, system instruction, signal | Safe small excerpt | No key values | Provider call required for runtime | No | Accurate |
| Route buffering excerpt | Explains why incremental UI streaming is not established | Safe and important corrective evidence | None | Runtime useful but not required for source claim | No | Accurate |
| Stop/retry excerpt | Abort path and history-resend behavior | Safe with limitations | No conversation content/key | Yes for behavior | No | Accurate |
| Responsive/mobile component excerpt | Breakpoints, drawer, source limitation | Safe only if mobile callback defect is disclosed | None | Visual/device testing required | No | Accurate |
| Static preview query mode | Candidate for later safe screenshots without provider calls | Source itself is safe | Review generated screenshot chrome/content | Browser rendering required; not authorized here | No | Mock data clearly labeled in source |
| README architecture text diagram | Intended server adapter boundary | Needs correction for streaming wording and runtime claims | None | Yes | No | Partly stale |
| System instructions excerpt | Domain/accuracy boundaries | Safe in small contextual excerpt | Review for excessive prompt disclosure if operationally sensitive later | No for source claim | No | Accurate |
| Commit-history summary | Early development shape | Safe after metadata review | Author email must remain omitted | No | Yes, bounded review found no candidate key but email remains | Accurate for four commits |

No existing screenshots, image assets, product cards, product datasets, test results, CI results, build output, deployment captures, or authored diagram files are public-ready candidates because none were found.

# Claims Safe to Publish

The following conservative wording is source-supported for the recorded commit:

- “CourtFit is an educational and experimental basketball-shoe recommendation chatbot and source-level functional-MVP candidate.”
- “At audited commit `3c9cc65d00622731b4a381ddb785edc3713f8c46`, it uses Next.js App Router, React, TypeScript, Tailwind CSS, local shadcn-style components backed by Radix primitives, Zod, the OpenAI SDK, and the Google GenAI SDK.”
- “The repository defines one page route and one `POST /api/chat` server route.”
- “Users choose OpenAI or Gemini and enter their own API key. The key is held in React state and sent with each chat request to CourtFit’s application server, which routes it to the selected provider adapter.”
- “No direct project source use of localStorage, sessionStorage, cookies, a database, analytics, or key logging was found for API keys or chat history.”
- “Current non-empty conversation history is sent to the selected provider on each turn through the application server; provider changes clear the conversation.”
- “OpenAI and Gemini adapters consume provider streaming APIs, but the audited server route buffers provider output and returns one assembled text event.”
- “AbortController-based Stop and error Retry paths are wired in source; runtime correctness is unverified.”
- “The project has no structured product database, real-time price/stock feed, authentication, cart, checkout, or persistent chat history in the audited source.”
- “Responsive and dark-theme source patterns exist; browser/device/accessibility behavior was not executed.”
- “No automated tests or repository-native active-deployment evidence were found.”

# Claims Requiring Qualification

- **“Streaming responses”:** qualify as provider-stream consumption with one assembled client text event, not incremental UI display.
- **“BYOK/client-side keys”:** state that keys are entered/held client-side but transmitted to and processed by CourtFit’s server.
- **“Responsive”:** source patterns only; disclose mobile drawer wiring limitation and lack of visual/device tests.
- **“Thai and English”:** UI and prompt intent exist; provider language quality was not tested.
- **“OpenAI/Gemini support”:** adapters exist; successful/current compatibility was not tested.
- **“Stop and Retry work”:** source paths exist; cancellation races, partial preservation, provider effects, and runtime recovery are unverified.
- **“shadcn/ui”:** local shadcn-configured components using Radix primitives.
- **“store”:** conversational retail domain only; no actual catalog or commerce.
- **“Vercel”:** platform documentation context only; no live URL or active deployment verified.
- **“secure/private”:** replace with the precise data flow, protections found, and missing operational verification.
- **“manual browser testing”:** self-reported only, with versions, systems, viewports, devices, and scenarios undocumented.

# Claims Not Currently Supported

- Current build, lint, formatting, or type-check success.
- Successful or currently compatible OpenAI/Gemini calls.
- Incremental assistant text display during provider generation.
- Correct provider-side cancellation, useful partial-response preservation, or race-free Stop behavior.
- Passing automated tests, test coverage, or CI.
- Active Vercel deployment, current live URL, source/deployment equivalence, or availability.
- API-key security, complete privacy, or absence from operational logs.
- Markdown rendering, syntax highlighting, or code-copy support.
- Verified product catalog, product facts, prices, stock, retailer information, recommendation accuracy, or professional fitting advice.
- Full mobile/responsive/browser compatibility or accessibility compliance.
- Production readiness, rate limiting, timeouts, moderation, monitoring, or commercial readiness.
- Complete/sole authorship from repository metadata.

# Contradictions With Existing Internal Records

1. **Key request path:** Internal wording says the key remains client-side and does not pass through the backend. Audited source posts it to `/api/chat` and uses it in a server adapter. This is the most important correction.
2. **Streaming:** Internal wording implies streamed/incremental responses. Audited source consumes provider streams but buffers them before one client text event. “Streaming responses” needs material qualification.
3. **Personal-profile repository field:** `reference/synthesis/personal-profile.md` says CourtFit’s repository is “To be added,” while the authorized repository is now confirmed and audited.
4. **Markdown implication in repository docs:** Product requirements/UX/technical-stack documents specify Markdown and code rendering, but current source has plain-text message rendering and lacks the proposed dependencies.
5. **Mobile navigation completion:** Repository task documentation marks mobile sidebar/responsive behavior complete, but the drawer does not receive provider state/actions from the active chat.
6. **Production-safety task consistency:** Repository task documentation leaves “message length limits” unchecked even though schema source implements per-message/count/aggregate character limits. Request byte-size limits, timeout, and rate limits remain absent.
7. **Core completion/evidence availability:** Internal records describe core development as completed and list deployed application, screenshots, integration logs, and build validation as available. Repository-native evidence does not verify those artifacts or completion state.
8. **Browser testing:** Internal records state Chrome/Firefox/Safari manual tests; repository-native evidence does not retain conditions or results.

# Recommended Internal Corrections

Do not apply these corrections automatically:

1. Replace “the key stays client-side and does not pass through the application backend” with the audited browser → CourtFit server route → selected provider flow.
2. Replace unqualified “streaming responses” with the exact buffered-stream finding until incremental forwarding is implemented and runtime-tested.
3. Update CourtFit’s repository field to the authorized URL and bind source claims to audited commit `3c9cc65d00622731b4a381ddb785edc3713f8c46`.
4. Downgrade “core development completed” to “source-level functional-MVP candidate; build/runtime/test/deployment state unverified.”
5. Mark manual Chrome/Firefox/Safari testing as self-reported and undocumented pending a retained test matrix.
6. Remove deployed app, screenshots, logs, and build-results claims from “available evidence” until actual artifacts are supplied and privacy-reviewed.
7. Qualify shadcn/ui as local shadcn-configured components using Radix primitives.
8. Add the absence of Markdown rendering, the mobile drawer wiring limitation, provider-generic Gemini error headings, and missing automated tests to internal limitations.
9. Preserve the verified absence of product database, current prices/stock/specs, authentication, checkout, persistent history, and recommendation guarantees.
10. Keep Vercel as platform context with Live URL **To be verified**.

# Known Limitations

- Static source inspection cannot establish buildability, runtime correctness, provider compatibility, UI appearance, deployment, performance, privacy operations, or accessibility.
- Direct dependencies were not installed and lockfile packages were not executed.
- No provider or deployed app was contacted.
- GitHub issues, actions, releases UI, security settings, deployment metadata, and repository settings were not accessed.
- The available history has only four reachable commits; unreachable/deleted objects and external history were not inspected.
- Secret review used bounded non-value path/pattern checks and cannot prove universal absence.
- Provider SDK internals, defaults, transport details, retry behavior, and retention policies were not executed or independently verified.
- The `next-themes` dependency’s runtime storage behavior was not executed; the no-storage finding is limited to direct project key/chat code.
- No visual screenshot or rendered DOM was inspected.
- No external authorship or contribution evidence was reviewed.

# Runtime Verification Still Required

- Install/build/type-check/lint only in a future separately authorized environment.
- Execute automated tests after tests exist; verify schema, chat state, composer, route, streaming, stop, retry, provider switching, errors, and privacy boundaries.
- Confirm successful OpenAI and Gemini requests using safe owner-controlled credentials without logging or retaining them.
- Verify current provider model/endpoint compatibility separately; do not infer it from source identifiers.
- Verify whether provider deltas should be forwarded incrementally and test truncation, completion, finish reasons, malformed chunks, and empty responses.
- Test Stop before first token, during response, after response, on provider/network failure, and during provider/key changes.
- Test Retry for both providers, rapid clicks, long history, partial/error states, and duplicate prevention.
- Verify refresh/close/key-clear behavior, request/response caching, middleware/platform logs, HTTPS, memory handling, and operational redaction.
- Confirm full-history provider transmission and disclose it appropriately.
- Test mobile drawer actions, virtual keyboard, narrow screens, tablets, desktop, orientation, zoom, reflow, and overflow.
- Retain actual Chrome/Firefox/Safari versions, operating systems, devices, viewports, and scenarios.
- Perform keyboard, focus, screen-reader, language-markup, contrast, reduced-motion, announcement, touch, and heading review.
- Evaluate model recommendations against a curated verified dataset before making any accuracy or usefulness claim.
- Confirm live URL, Vercel project/source equivalence, environment configuration, availability, logging, rate limiting, timeouts, and privacy controls without exposing credentials.
- Review the Git author email’s public-readiness before promoting commit-history artifacts.

# Remaining Questions

- Is audited commit `3c9cc65d00622731b4a381ddb785edc3713f8c46` the intended canonical CourtFit state?
- Is one final assembled response event intentional, or is incremental forwarding still required?
- What deployment, if any, corresponds exactly to the audited commit?
- Which operational systems can observe request bodies containing user keys and conversations?
- What provider-side retention and privacy terms should users be told about?
- Should the architecture continue to accept raw BYOK credentials at the application server?
- How should mobile navigation receive the active provider and action callbacks?
- Should provider-specific headings use the actual provider rather than Gemini-specific text?
- Should Markdown be implemented, or should prompt formatting stop requesting Markdown syntax?
- What test matrix and accessibility standard will govern public use?
- What source of verified shoe data, if any, could support product-specific recommendations?
- Which screenshots or preview states can be created later without exposing browser/account/private information?
- Is the Git author email intentionally public in repository history?
- What license and reuse terms, if any, should be added by the owner?

# Audit Method

1. Confirmed the authorized nattapong.dev workspace, branch, required governance history, and clean working tree.
2. Read the required governing, task, decision, inventory, and profile files.
3. Created a unique `/tmp` directory and cloned only the authorized GitHub repository without credentials.
4. Confirmed remote URL, default branch, HEAD, full-clone status, file count, commit count, tags, history shape, and clean clone status.
5. Read repository-local instructions.
6. Inspected the tracked tree, manifest, lockfile header/direct dependencies, configurations, source, docs, static preview data, and Git metadata without executing project code.
7. Traced browser/server/provider flows for keys, messages, streaming, abort, retry, switching, errors, and models.
8. Compared imports and source use against declared technologies and documentation claims.
9. Used bounded path-only scans for environment paths, common key/private-key signatures, credential URLs/tokens, email, phone-like data, analytics identifiers, and history paths without printing candidate values.
10. Compared all material CourtFit claim groups in the two internal records and recorded corrections only here.
11. Reviewed the final report, Git status/diff, changed paths, and report text for sensitive values.

Generated analysis is not independent verification. Conclusions are bounded to repository-native evidence at the audited commit.

# Files and Commands Reviewed

**nattapong.dev files read:** `AGENTS.md`, `docs/05-content-spec.md`, `docs/07-project-rules.md`, `docs/08-implementation-plan.md`, `docs/09-task-list.md`, `reference/decisions/DEC-01-stack-and-rendering.md`, `reference/decisions/DEC-02-content-storage-authoring-bilingual.md`, `reference/synthesis/project-inventory.md`, and `reference/synthesis/personal-profile.md`.

**External repository files reviewed:** tracked-tree inventory; `AGENTS.md`; `README.md`; `package.json`; lockfile header/direct-dependency record; Next.js, TypeScript, ESLint, Prettier, PostCSS, shadcn, environment-example, and ignore configuration; all `app/`, `components/`, `features/chat/`, and `lib/` source; and relevant `docs/` architecture, product, chat, integration, data, API, privacy, testing, task, and decision records. No source file was modified.

**Read-only command categories:** `pwd`, `git status`, `git branch`, `git remote`, `git symbolic-ref`, `git rev-parse`, `git log`, `git show --stat/--summary`, `git rev-list`, `git tag`, `git ls-tree`, `git ls-files`, `git grep -l`, `mktemp`, `git clone`, `test`, `wc`, `cat`, `sed`, `awk`, `rg`, `sort`, `head`, and `nl`.

No install, package, Node, Next.js, TypeScript, shell-script-from-repository, build, lint, format, test, server, browser, provider, deployment, authentication, staging, commit, remote-change, or push command was run.

# Publication and Implementation Boundary

This report is an **internal evidence record**. It does not authorize:

- changes to `reference/synthesis/project-inventory.md`, `reference/synthesis/personal-profile.md`, governance documents, decisions, task list, public content, source code, manifests, lockfiles, configuration, or deployments;
- publication of CourtFit claims, repository history, screenshots, excerpts, diagrams, keys, conversations, or artifacts;
- installation, build, testing, browser access, AI-provider access, deployment access, or live verification;
- a claim of security, privacy, provider compatibility, runtime correctness, active deployment, passing tests, recommendation accuracy, accessibility compliance, commerce capability, or production readiness.

Any later use must preserve the audited commit, evidence type, qualifications, privacy boundary, limitations, and required runtime verification. No inventory or public-content correction was applied in this task.
