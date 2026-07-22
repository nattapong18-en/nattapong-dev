# Purpose of This Specification

This document defines the practical content model for nattapong.dev, a living, long-term personal engineering website. It establishes content classifications, editorial rules, shared metadata, status and maturity language, evidence and verification expectations, privacy safeguards, and maintenance requirements.

The specification converts the approved project vision, design direction, and current personal, project, and learning inventories into rules for preparing publishable content. It protects the distinction between demonstrated work, developing knowledge, areas of interest, and future possibilities.

This is not final public copy, a sitemap, a page layout, a database schema, frontmatter syntax, or an implementation plan. It does not determine routes, navigation, page templates, components, visual styling, or storage technology. Later content work must apply these rules to verified source material before publication.

# Source of Truth and Verification

Content claims must be checked against the strongest available source before publication. Sources have different authority depending on the claim:

- **`reference/synthesis/personal-profile.md`:** Current internal authority for personal context, education, engineering direction, priorities, working preferences, areas of interest, and candidate contact information. Changing facts still require confirmation before publication.
- **`reference/synthesis/project-inventory.md`:** Current internal authority for project classification, known capabilities, limitations, evidence, and unresolved project questions. It is a planning inventory, not proof that every recorded technical behavior exists in the latest code.
- **`reference/synthesis/learning-inventory.md`:** Current internal authority for learning areas, guided exercises, coursework, developing understanding, known gaps, and learning evidence. It must not be used to convert study into unsupported expertise.
- **Source repositories:** Strongest source for implemented code, dependencies, configuration, commit history, and repository-visible documentation. Code presence does not by itself prove correct runtime behavior, deployment, security, or production maturity.
- **Deployed applications:** Strong source for currently observable behavior and public availability at a recorded time. Deployment does not prove source equivalence, reliability, security, or long-term availability.
- **Test results:** Strong source for the specific behaviors, environments, and cases tested. Manual and automated tests must be distinguished, and passing tests must not support claims beyond their coverage.
- **Research documents:** Strongest source for reviewed papers, methods, citations, findings, and research decisions. Personal summaries must remain distinguishable from authors' findings and from Nattapong's interpretation.

Measurements, screenshots, build output, deployment records, Git history, and direct manual observations may strengthen specific claims when their origin and conditions are recorded. When sources conflict, prefer current direct evidence and record the discrepancy rather than silently choosing the more favorable description.

Unverified information must be labeled **To be verified**, **Self-reported**, **Unknown**, or **Not implemented**, as appropriate. Public language must not convert “planned,” “associated with,” “appears to,” or “to be verified” into a completed fact. Verification should record the source, date checked, method, and scope of the conclusion.

# Editorial Principles

- **Evidence before claims:** Use repositories, behavior, tests, measurements, documents, and attributable reflection to support statements.
- **Plain-language summary before technical depth:** Explain what the item is, why it matters, Nattapong's role, and its state before implementation details.
- **Honest project and learning status:** Describe current reality, including incomplete, experimental, paused, or guided work.
- **Clear ownership and contribution:** Separate individual work, collaboration, coursework, guided implementation, external examples, and reused tools.
- **Explicit uncertainty:** Name assumptions, unresolved questions, incomplete validation, and changing information near the claims they qualify.
- **Accurate scope:** Do not generalize from one exercise, browser check, test, or project to broader expertise, compatibility, reliability, or impact.
- **Personal voice:** Use direct first-person reflection where ownership, motivation, mistakes, or learning matter, while keeping technical claims precise.
- **Long-term usefulness:** Prefer content that preserves understanding, evidence, decisions, and meaningful progression over frequent low-value updates.
- **No generic marketing language:** Replace claims such as innovative, seamless, scalable, secure, production-ready, or intelligent with specific supported behavior.
- **No artificial expertise:** Areas of interest and developing skills must not be presented as professional specialization or mastery.
- **No invented completeness:** Missing endpoints, tests, research findings, deployments, dates, and design decisions must remain missing until verified.

# Content Classification

- **Major Project:** Substantial applied work with independent scope, a meaningful engineering problem, Nattapong's identifiable contribution, a current result, and enough evidence for an overview. Current major projects are the Rust Booking API and CourtFit.
- **Case Study:** A deeper evidence-based narrative derived from a project or substantial body of work. It requires enough history to explain constraints, alternatives, failures, revisions, validation, results, and lessons; it is not automatically created for every project.
- **Research:** Structured inquiry with a defined question, scope, method, evidence, interpretation, limitations, and status. Research preparation is not a completed research result.
- **Technical Note:** A bounded explanation, implementation discovery, debugging record, or reusable concept intended to help future work or readers. It must state scope and certainty.
- **Experiment:** A focused attempt to observe or test behavior under stated conditions. It is narrower than a project and must identify what cannot be concluded.
- **Learning Progress Entry:** A meaningful change in understanding supported by study, exercise, debugging, or application. It should emphasize progression and remaining gaps rather than activity volume.
- **Open-Source Contribution:** Work made in a repository or project with explicit ownership, upstream context, contribution, attribution, and evidence. A personal public repository is not automatically a contribution to an external open-source project.
- **Coursework Entry:** Selected university study, assignment, or laboratory work that demonstrates relevant understanding. Coursework remains distinct from professional experience and independent project work.
- **Background Entry:** Verified personal, educational, professional, or directional context that helps readers understand the engineer and the work.
- **Contact Information:** A confirmed, public-ready channel through which visitors may appropriately contact or follow Nattapong.

Current classifications are:

- **Rust Booking API:** Major Project.
- **CourtFit:** Major Project.
- **Rust web server:** Learning Progress / Technical Evidence; guided implementation, not a major project.
- **Thread pool:** Learning Progress / Technical Evidence; guided implementation, not a major project.
- **LearnCpp work:** Learning Progress.
- **Linux configuration:** Learning Progress / Technical Note, or Experiment when a specific behavior was tested.
- **Coursework and laboratories:** Coursework / Learning Progress.
- **Graduation project exploration:** Research Preparation; no final topic has been selected.

An item may move classification only when its scope and evidence change. A learning exercise may become an experiment when it asks and tests a bounded question; an experiment may become a major project when independent scope, engineering depth, sustained development, and a meaningful result exist; a project may gain a case study when decision history and validation are documented. Reclassification must preserve its guided, coursework, collaborative, or historical origins.

# Shared Content Fields

The following fields apply to publishable content entries. “Conditional” means required when the content or claim makes the field relevant.

| Field | Requirement | Purpose |
| --- | --- | --- |
| Title | Required | Stable public identification of the item. |
| Working title | Optional | Internal or temporary name when the public title is unresolved. |
| Summary | Required | Plain-language description of what the item is, why it matters, and its current state. |
| Content type | Required | Classification from this specification. |
| Status | Required | Current lifecycle state for work-bearing content; contact information uses readiness instead. |
| Maturity | Conditional | Required for projects, experiments, guided work, learning evidence, and other items where rigor could be misunderstood. |
| Date | Conditional | Known publication, start, completion, observation, or event date; label the date's meaning. Do not invent missing dates. |
| Updated date | Conditional | Required when material has changed meaningfully after its original date. |
| Role | Conditional | Required for projects, coursework, research, open-source work, and collaboration. |
| Contribution | Conditional | Required whenever work involves guidance, collaboration, external code, or a wider project. |
| Context | Required | Situation needed to understand relevance and scope. |
| Motivation | Conditional | Required for projects, research, experiments, and reflective learning when motivation explains the work. |
| Technologies | Conditional | Include only technologies verified as materially used. |
| Technology roles | Conditional | Required whenever technologies are listed; explain what each did. |
| Evidence | Required | Sources or artifacts supporting the entry's substantive claims. |
| Limitations | Conditional | Required when conclusions, capabilities, safety, maturity, or applicability have meaningful limits. |
| Related content | Optional | Explicit, explained links to genuinely connected material. |
| Repository | Conditional | Required when a public repository exists and is approved for linking; otherwise record its absence or visibility internally. |
| Live link | Conditional | Required only when a deployment is confirmed, public, safe, and current. |
| Source links | Conditional | Required for cited research, external guidance, upstream work, or external evidence. |
| Visibility | Required | Internal, draft, private, unlisted, or public-ready status. |
| Certainty | Required | Whether statements are established, observed, interpreted, hypothesized, or unresolved. |
| Verification status | Required | Current verification label and supporting source. |
| Last reviewed date | Required | Most recent date on which accuracy, links, status, and privacy were reviewed. |

Fields should be omitted from public presentation when empty or irrelevant, but the editorial record must not hide a required unknown. Use an explicit unresolved value internally rather than inventing content to fill a field.

# Status and Maturity Model

**Status** describes where work is in its lifecycle:

- **Planned:** Intention exists, but substantive investigation or implementation has not begun.
- **Researching:** Sources, requirements, feasibility, or possible directions are being investigated; no final approach is established.
- **In progress:** Active work is underway and the defined scope is not complete.
- **Experimental:** The work is actively testing an idea or behavior and is expected to change.
- **Paused:** Work has stopped temporarily without a decision to end it.
- **Functional MVP:** A minimum core workflow functions, while completeness, quality, testing, or operational readiness remains limited.
- **Core complete:** The intended core behavior is implemented, while testing, refinement, documentation, or secondary work continues.
- **Completed:** The stated scope has been completed; this does not imply maintenance, deployment, or production validation.
- **Maintained:** The work is usable or complete enough for its stated purpose and continues to receive relevant updates.
- **Archived:** Preserved for reference but no longer actively developed or expected to represent current practice.
- **Abandoned:** Intentionally discontinued before the intended scope was completed; the reason and learning may remain valuable.

**Maturity** describes the level of independence, rigor, and validation:

- **Learning exercise:** Small work primarily used to practice a concept.
- **Guided implementation:** Work substantially shaped by a book, tutorial, course, laboratory, or external example, with personal implementation or debugging.
- **Educational prototype:** Independent or partly independent work built to develop understanding; behavior exists but completeness and validation are limited.
- **Experimental application:** A usable application intended to explore behavior or integration without validated real-world accuracy or product maturity.
- **Functional MVP:** A coherent minimum workflow exists, but production qualities are not established.
- **Production-oriented:** Designed toward operational use with documented engineering practices, but real-world production validation is incomplete.
- **Production-validated:** Supported by verified deployment, appropriate testing, monitoring, security and reliability evidence, and actual operational conditions relevant to its claims.

Status and maturity are independent. A completed guided implementation remains a guided implementation; a maintained experimental application does not become production-validated through age; a functional MVP can still be in progress. Both must be expressed in readable text near the first project or work summary, not only through color, icons, or badges.

# Verification Model

- **Verified from repository:** Confirmed in a specified revision or current repository review. Supports implementation claims, not runtime or production claims by itself.
- **Verified from deployment:** Observed in a confirmed deployed version and date. Supports current observable behavior within the checked scenario.
- **Verified by manual testing:** Reproduced by a person under recorded steps, environment, and conditions.
- **Verified by automated tests:** Covered by identified automated tests with recorded results and scope.
- **Verified by measurement:** Supported by a documented method, conditions, data, and result.
- **Self-reported:** Based on Nattapong's account without stronger retained evidence. Phrase as personal experience or recollection.
- **To be verified:** A plausible inventory statement requiring repository, deployment, document, or test review before public assertion.
- **Not implemented:** Confirmed absent from the current work.
- **Unknown:** Available sources do not establish the answer.

Publication language must reflect verification strength. Verified claims may state precisely what was checked and under which conditions. Manual observations should use bounded language such as “manually tested in” rather than “fully compatible.” Self-reported learning should be framed as reflection, not external fact. To-be-verified or unknown details should remain unpublished as facts or be explicitly described as unresolved when the uncertainty is itself relevant. Not-implemented features must appear as limitations or future possibilities, never as current capability. Strong claims about security, scale, accuracy, performance, privacy, or production readiness require correspondingly strong evidence.

# Evidence Model

Content may use the following evidence when it directly supports a reader's question:

- **Architecture:** Verified components, boundaries, responsibilities, dependencies, and flows.
- **Diagrams:** Authored explanations of system, data, sequence, hardware, or decision relationships.
- **Code excerpts:** Small source selections that illuminate a decision, interface, algorithm, constraint, or lesson.
- **Tests:** Manual or automated checks tied to defined behavior and conditions.
- **Benchmarks:** Reproducible measurements with method, environment, baseline, and limitations.
- **Terminal output:** Curated output proving a build, test, deployment, request, measurement, or failure diagnosis.
- **Screenshots:** Legible states of interfaces, tools, results, errors, or responsive behavior.
- **Hardware images:** Physical setup, connections, components, scale, or observed state.
- **Research findings:** Findings traceable to research documents, with source findings separated from Nattapong's interpretation.
- **Build results:** Recorded build outcome tied to a revision and environment.
- **Deployment evidence:** Confirmed URL, platform record, release, or observed deployed behavior.
- **Git history:** Commits and changes that establish development sequence, ownership, or revision history.
- **Source repositories:** Code, configuration, issues, documentation, and revision history available for inspection.
- **External references:** Documentation, books, tutorials, papers, examples, or community sources that materially informed the work.
- **Reflection:** Clearly labeled personal learning, decision rationale, mistake, or later interpretation.

Every artifact must have a purpose, context, a caption or explanation, the claim it supports, an identifiable source, a verification level, and accessibility support where relevant. Dates, revisions, environments, commands, or conditions should be included when they affect interpretation. Redact secrets, private data, and irrelevant noise without altering the evidence's meaning.

Reject decorative technical evidence: fake terminal windows, unexplained code, unreadable full-screen screenshots, architecture diagrams based on assumptions, unrepeatable benchmarks, logs without a claim, or technology logos standing in for implementation.

# Major Project Requirements

A major project record must contain, internally, enough information to prepare an accurate overview. Public visibility may be reduced when a section is irrelevant, unsupported, private, or better placed in a case study.

- **Project name:** Confirmed name plus a working title if naming is unresolved.
- **Summary:** Plain-language description, purpose, current status, maturity, and primary engineering emphasis.
- **Problem:** The practical or learning problem addressed without manufacturing user demand.
- **Motivation:** Why Nattapong undertook the work.
- **Intended users or context:** Actual or proposed audience, clearly distinguishing validated users from intended use.
- **Nattapong's role:** Ownership, collaboration, guidance, and responsibilities.
- **Status and maturity:** Values from the shared models, written in text.
- **Technologies and their roles:** Verified technologies with the responsibility each served.
- **Current capabilities:** Implemented behavior verified at an appropriate level.
- **Architecture or system overview:** Verified components and relationships, or an explicit note that architecture documentation is pending.
- **Important decisions:** Decisions supported by code, notes, or recollection with certainty identified.
- **Alternatives and tradeoffs:** Relevant options considered, benefits, costs, and unresolved consequences; do not invent alternatives after the fact.
- **Main challenges:** Specific implementation, integration, reasoning, or validation difficulties.
- **Validation:** Manual tests, automated tests, measurements, deployment checks, or other review actually completed.
- **Current result:** What now works or was learned, separated from intended future results.
- **Limitations:** Missing behavior, uncertainty, validation gaps, and boundaries on use.
- **Lessons:** Personal conclusions grounded in the work.
- **Evidence:** Artifacts and sources mapped to claims.
- **Publication notes:** Privacy, attribution, safety, terminology, and claims requiring special care.
- **Open questions:** Details requiring repository, deployment, test, or documentation review.

Not every optional narrative section must appear publicly. Omission must reduce noise, not conceal a limitation or create a misleading impression. A concise overview is acceptable only when it still communicates ownership, status, maturity, evidence, and important limits.

# Rust Booking API Content Requirements

The Rust Booking API must be presented as an **individual backend project**, an **educational project**, and a **Functional MVP**. It is not production-ready, and no production reliability, scalability, concurrency, authentication completeness, authorization, or security claim may be made without new evidence.

Current facts permitted with the stated inventory verification level are:

- Rust is the backend language and Axum is the web framework.
- PostgreSQL provides persistent relational storage.
- Redis is used for temporary data; the exact data, purpose, and expiration behavior remain to be verified.
- Authentication-related implementation currently concerns registration only. A complete authentication or authorization system must not be claimed.
- The implementation includes GET, POST, and PUT operations; exact endpoint paths and behavior remain to be verified.
- A Functional MVP exists.
- No automated tests currently exist; validation has relied on manual development or API testing unless stronger evidence is later collected.
- The repository is available at `https://github.com/nattapong18-en/booking_api`.
- Deployment status remains **To be verified**.

Before publication, repository or runtime review must verify:

- Exact endpoint paths, request and response formats, and the behavior of each GET, POST, and PUT operation.
- The registration and wider authentication flow, including whether login exists.
- Whether and how passwords are hashed.
- Whether JWTs are created, validated, expired, or invalidated, and which routes use them.
- How authorization and user-specific data access are enforced.
- What Redis stores, why it is used, whether values expire, and whether it participates in concurrency control.
- The current database schema and relationships.
- Whether transactions are used and where their boundaries exist.
- How booking conflicts and concurrent requests are handled.
- Whether a current public deployment exists and which platform or configuration serves it.
- Current manual validation and any future automated testing.

The overview must place the absence of automated tests, incomplete authentication, unconfirmed authorization coverage, unclear Redis role, unverified deployment, and lack of production validation near related capability claims. Technologies such as JWT, Docker, Render, or Vercel may appear only after their exact current roles are confirmed. Architecture and security explanations must come from repository evidence, not inference.

# CourtFit Content Requirements

CourtFit must be presented as an **individual full-stack and AI integration project**, a basketball shoe recommendation chatbot, and an **educational and experimental application**. It is not verified purchasing advice, a professional fitting service, or a commercial product.

Current facts permitted with the inventory's stated verification limits are:

- The interface uses Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
- The application integrates OpenAI and Google Gemini.
- It supports streaming responses, provider switching, Stop and Retry controls, Thai and English conversations, responsive layouts, dark mode, and a BYOK workflow.
- According to the current description, the user API key stays client-side and does not pass through the application backend. This is a provisional description pending source and data-flow verification, not a security guarantee.
- Manual testing has been performed in Chrome, Firefox, and Safari; versions, operating systems, devices, screen sizes, and complete scenarios are not documented.
- The repository is available at `https://github.com/nattapong18-en/chat-bot-test`.
- Vercel is the deployment platform.
- The live application URL remains **To be verified**.

Before publication, repository, deployment, or direct test review must verify:

- Whether API keys live in component state, browser memory, session storage, local storage, or another mechanism.
- Whether a key survives refresh, appears in logs or errors, or is otherwise persisted.
- Whether requests go directly from the browser to each provider and what application code participates in the data flow.
- Which conversation history or other data is sent to providers.
- Exact browser versions and operating systems tested.
- Actual device and responsive testing.
- Keyboard, screen-reader, contrast, reduced-motion, zoom, reflow, and other accessibility testing completed.
- Whether automated tests exist.
- How recommendation quality, uncertainty, and failure cases have been evaluated.
- The confirmed live deployment URL and whether it matches the reviewed source.

Limitations must be prominent and written plainly:

- There is no verified basketball shoe product database.
- There are no real-time prices or stock details.
- Product specifications are not verified as current or complete.
- There is no checkout.
- There is no user authentication.
- There is no persistent chat history.
- Recommendation accuracy is not guaranteed, and recommendations should be independently verified before purchase.

The content must not claim API-key security, full browser compatibility, complete privacy, professional footwear expertise, injury prevention, performance improvement, retailer availability, product authenticity, or commercial readiness. Examples of generated recommendations must be labeled as model output rather than verified product facts.

# Case Study Requirements

A case study differs from a project overview by explaining how the work developed, not merely what currently exists. It requires a coherent evidence base for:

- Context and why the problem was worth addressing.
- The problem definition and how it changed.
- Constraints affecting scope, implementation, or validation.
- Decision history rather than only final decisions.
- Real alternatives considered at the time.
- Failures, mistakes, and approaches that did not work.
- Revisions made in response to evidence or changed understanding.
- Validation methods and their boundaries.
- Results separated from intended outcomes.
- Limitations placed near the claims they qualify.
- Lessons grounded in events or artifacts.
- Later reflection that is dated and distinguished from thinking at the time.

A case study should be created only when repositories, notes, Git history, tests, artifacts, or reliable reflection provide enough evidence for the narrative. A polished project overview must not be expanded into a fictional decision story to fill a template.

# Research and Research-Preparation Requirements

Use separate treatments for distinct forms of inquiry:

- **Research item:** A bounded investigation with a research question, motivation, scope, method, evidence, findings, interpretation, limitations, uncertainty, current status, and future work.
- **Research preparation:** Work performed before a question or method is selected. Record the area being explored, papers reviewed, existing work, candidate problems, available hardware when confirmed, scope constraints, open questions, and current decision status.
- **Paper review:** An attributable account of a specific paper's question, method, evidence, findings, limitations, and relevance. Separate the paper's claims from Nattapong's interpretation and questions.
- **Open research question:** A clearly unresolved question with context, why it matters, known evidence, assumptions, and what would be needed to investigate it.
- **Graduation project exploration:** Research preparation for Senior Graduation Projects 1 and 2. Current exploration includes embedded AI, Edge AI, TinyML, resource-constrained inference, wireless and sensor-based systems, and related engineering considerations, but these are candidate directions rather than a selected topic.

Every relevant public reference must state clearly: **No final graduation-project topic has been selected.** Do not imply a research contribution, confirmed hardware, completed literature review, selected model, defined evaluation method, or finding until documents support it.

Research findings require citations and must distinguish source evidence, Nattapong's interpretation, and any new result. Research-preparation entries should prioritize the decision process and unresolved scope rather than imitate the structure or certainty of completed research.

# Technical Note Requirements

A technical note should define:

- **Topic:** The exact concept, behavior, or problem addressed.
- **Intended audience:** The assumed reader and why the note may help.
- **Scope:** What the note covers and explicitly does not cover.
- **Prerequisites:** Knowledge, environment, tools, or prior context needed when relevant.
- **Explanation:** A clear account using accurate terminology after a plain-language entry point.
- **Examples:** Verified examples that illuminate the explanation without pretending to be complete implementations.
- **Caveats:** Version sensitivity, environment differences, safety concerns, incomplete understanding, and known exceptions.
- **References:** Documentation, books, tutorials, papers, community material, or source code materially used.
- **Verification status:** How explanations and examples were checked.
- **Last reviewed date:** When accuracy, links, and current understanding were last assessed.

Suitable current areas include Rust, backend development, HTTP, databases, Linux, networking, computer architecture, embedded systems, and AI integration. Notes may grow from project debugging, coursework, or experiments, but their origin and level of understanding should remain clear. Incomplete or developing notes must not be presented as authoritative documentation.

# Experiment Requirements

An experiment must record:

- The question being tested.
- Motivation for testing it.
- Setup, environment, versions, inputs, or hardware needed to interpret it.
- Conditions held constant or known to vary.
- Procedure sufficient to understand or reproduce the attempt when appropriate.
- Direct observations separated from interpretation.
- Result and verification level.
- Interpretation bounded by the evidence.
- Limitations and possible sources of error.
- What cannot be concluded.
- The next step, if one is known.
- Supporting evidence and its source.

Experiments may cover Linux configuration, API behavior, browser compatibility, model behavior, embedded prototypes, networking tests, or performance tests. Configuration success on one machine, a single API response, one browser session, or one model conversation must not be generalized beyond its conditions.

# Learning Progress Requirements

Learning progress should record meaningful development through:

- Starting point or earlier understanding.
- Concept studied.
- Practical exercise or application.
- Difficulty, confusion, or mistake encountered.
- Change in understanding.
- Evidence such as code, notes, debugging history, coursework, tests, or project application.
- Current level stated without mastery language.
- Remaining gaps.
- Connection to projects, research, coursework, or later learning.
- Later revision when understanding changes.

Current learning areas are C and C++, Rust, backend development, HTTP and web-server fundamentals, Linux and development environment, Computer Engineering coursework, Embedded Systems and IoT, networking, cybersecurity, AI and LLM integration, and research preparation.

Current evidence must retain its proper scope: the Rust book web server and thread pool are guided implementations and technical evidence; LearnCpp exercises are active learning; Linux configuration reflects daily use and assisted troubleshooting; university laboratories are coursework; embedded, networking, cybersecurity, and several systems areas remain developing interests with uneven evidence.

Do not publish raw activity feeds, daily streaks, skill percentages, unsupported mastery claims, every small exercise, or guided work as original major projects. Select entries because they reveal a meaningful change, useful explanation, or connection to later work.

# Open-Source Content Requirements

An open-source entry must identify:

- Repository or external project context.
- Ownership of the repository and relevant code.
- Nattapong's exact contribution.
- Upstream project, issue, pull request, fork, or dependency relationship when applicable.
- Current contribution status, including proposed, submitted, merged, declined, maintained, or archived when verified.
- Technical relevance and problem addressed.
- Evidence such as commits, diffs, issues, review, release notes, or source links.
- Limitations on scope, adoption, impact, or continued maintenance.
- Correct attribution for collaborators, maintainers, source material, and licenses when relevant.

Do not imply sole ownership of collaborative work, upstream acceptance before confirmation, or project-level impact from a limited contribution. A public personal project may be described as open source when licensing and visibility are verified, but it remains distinct from contributing to another open-source project.

# Coursework Content Requirements

Selected university content may come from digital logic, computer architecture, computer networks, data communication, embedded systems, microcontrollers, programming, discrete mathematics, probability, automata, or algorithms.

A coursework entry must:

- Explain its relationship to Nattapong's current engineering direction or later work.
- Identify that it is coursework or a laboratory and name individual versus group contribution.
- Demonstrate meaningful understanding, a decision, experiment, result, or change in thinking rather than list a completed class.
- Include appropriate evidence such as code, diagrams, laboratory results, reports, simulations, or reflection when public and permitted.
- State guidance, assignment constraints, provided materials, and external assistance when materially relevant.
- Avoid appearing as professional experience or a production system.
- Avoid turning every assignment, lab, or exercise into a project.

Exact course names, dates, strongest assignments, publishable reports, and selected evidence remain to be verified. Selection should favor a small number of items that illuminate current work or research preparation.

# Background and About Content

Background content may include:

- **Current role:** Undergraduate Computer Engineering student preparing for Senior Graduation Projects 1 and 2; confirm wording remains current at publication.
- **Education:** Bachelor of Engineering in Computer Engineering at Nakhon Phanom University; verify current public wording and date context.
- **Engineering direction:** Developing practical experience across backend systems, Rust, Linux, embedded systems, networking, and AI-assisted applications.
- **Current priority:** Graduation-project research preparation, including exploring areas, reviewing work, narrowing a realistic problem, and evaluating scope.
- **Areas of interest:** Software engineering, embedded systems and IoT, cybersecurity, networking and infrastructure, systems programming, and relevant AI applications, always presented as interests or developing directions where evidence is limited.
- **Learning approach:** Practical study through preparation, implementation, experimentation, debugging, and revision; the stated 20/80 preference is personal and not a measured productivity claim.
- **Working preferences:** Focused work, clear immediate goals, a prepared development environment, and time for investigation, when Nattapong approves these for public use.
- **Values:** Engineering thinking, clarity, honest evidence, readability, maintenance, and long-term development.
- **Contact context:** Why and how a visitor may appropriately make contact, without sales language.

Writing must distinguish **current evidence**, **developing interest**, **possible career direction**, and **future ambition**. Candidate entry-level roles and career directions are exploratory, not commitments or current titles. Do not use “Full-Stack Systems Engineer” as a formal current title.

# Contact Content

Candidate contact methods from the current inventory are:

- **Email:** `zpoloa0@gmail.com`; public use must be explicitly confirmed before publication.
- **GitHub:** `https://github.com/nattapong18-en`; confirm the profile is public-ready and represents the intended work.
- **LinkedIn:** Include only when identity verification and public readiness are complete and the exact public URL is confirmed.
- **Facebook page:** Include only after the public page is created and approved; it does not currently exist.
- **Other future methods:** Add only after ownership, public readiness, maintenance expectations, and privacy implications are confirmed.

Every published contact method must be current, intentionally public, accurately labeled, and periodically checked. Do not expose private location or unapproved personal accounts. Contact language should be direct and contextual, not a marketing-oriented call to action or repeated conversion prompt.

# Metadata and Labels

Useful metadata may include:

- **Content type:** What kind of item the reader is viewing.
- **Status:** Current lifecycle state.
- **Maturity:** Level of independence and validation.
- **Date and updated date:** Clearly labeled temporal context.
- **Role:** Nattapong's relationship to the work.
- **Technology:** Only materially used and verified technologies.
- **Topic:** Subject useful for discovery across content types.
- **Reading depth:** A qualitative indication that distinguishes overview, focused note, or deep technical material when this aids selection.
- **Certainty:** Established, observed, interpreted, hypothesized, or unresolved.
- **Verification:** Strongest current verification label.
- **Last reviewed:** Most recent accuracy review.

Metadata should help scanning, comparison, filtering, trust, or maintenance. Limit visible fields to those useful in context. Avoid metadata overload, decorative labels, skill badges without technology roles, duplicate synonyms, and tags too broad or too rare to improve discovery.

# Content Relationships

Relationships should be explicit and explain why two items are connected:

- **Project to case study:** The case study explains the project's deeper decision and validation history.
- **Project to technical note:** The note preserves a concept or implementation lesson encountered in the project.
- **Project to experiment:** The experiment validates a project behavior, alternative, or uncertainty.
- **Project to learning progress:** The project applied or changed an area of understanding.
- **Research preparation to paper review:** A reviewed paper informs candidate problems, methods, constraints, or terminology.
- **Research question to experiment:** The experiment tests a bounded part of the question.
- **Coursework to later project:** A concept or laboratory directly informed later engineering work.
- **Earlier learning to later revision:** A dated reflection shows how understanding changed.
- **Open-source work to project:** A contribution, dependency, reusable tool, or upstream relationship materially affected the project.
- **Limitation to future improvement:** A documented gap motivates a later change without presenting it as completed.

Do not generate relationships solely from shared tags or technologies. Each public relationship should include a short reason, preserve chronology, and avoid implying causality that evidence does not establish.

# Content Depth and Progressive Disclosure

- **First-layer summary:** Identify the item, its relevance, Nattapong's role, status, maturity when needed, strongest supported result, and important limitation in plain language.
- **Overview:** Add context, motivation, intended use, current capabilities, verified technologies and roles, selected evidence, and paths to deeper material.
- **Deep technical section:** Present architecture, methods, decision history, alternatives, tradeoffs, tests, measurements, failures, results, and limitations for readers who need evaluation depth.
- **Supporting artifact:** Provide a focused piece of evidence with purpose, context, explanation, source, verification, and accessibility support.
- **Related material:** Connect content through a stated technical, historical, research, or learning relationship.
- **Historical note:** Preserve an earlier status, decision, assumption, or understanding with its original time context and any later correction.
- **Open questions:** State what remains unknown, why it matters, and what evidence would resolve it.

Depth is determined by available evidence and reader need, not by a required page length. Essential status, ownership, uncertainty, and limitations must not be hidden only in deep sections. This model does not prescribe final layouts or page templates.

# Writing Style

Writing should be direct, precise, honest, plain-language first, technical when needed, personal when discussing ownership or reflection, explicit about uncertainty, careful about attribution, free from inflated marketing claims, and free from generic AI-generated phrasing.

Use active, concrete sentences. Name the actor, action, conditions, and result when known. Prefer “I implemented registration-related logic and still need to verify authorization coverage” over vague claims about a secure authentication system. Explain specialized terms when the first layer requires them, then use the accurate term consistently.

Do not flatten uncertainty into confident copy, add emotional language to make ordinary work sound exceptional, or repeat the same claim through headings and body text. Final public copy will be written later from verified records; examples in this specification establish editorial behavior only.

# AI Assistance and Attribution

Content should acknowledge material assistance from AI assistants, documentation, tutorials, books, external examples, and community help when that assistance affected authorship, decisions, implementation, troubleshooting, interpretation, or research direction.

Attribution should identify the type of source and the part of the work it influenced. Guided Rust book implementations must remain identified as guided; Linux configuration assisted by AI and external documentation should be presented as assisted troubleshooting; borrowed approaches, code, or research ideas require appropriate source attribution.

Ordinary tool use does not require a disclosure log for every completion, search, spellcheck, or routine reference. Disclosure becomes important when omitting it would give a misleading impression of complete independent authorship or expertise. Nattapong remains responsible for checking generated code, explanations, citations, and claims before publication; AI output is not verification.

# Content Quality Criteria

Before an item is public-ready, review it for:

- **Accuracy:** Statements match current evidence and do not exceed its scope.
- **Evidence:** Important claims map to relevant, understandable artifacts or clearly labeled reflection.
- **Clarity:** A reader can understand the subject, relevance, contribution, and state before technical depth.
- **Attribution:** Ownership, collaboration, guidance, sources, and reused work are represented correctly.
- **Status:** Lifecycle state is current, explicit, and expressed in text.
- **Maturity:** Independence and validation level are accurate and separate from completion status.
- **Scope:** Conclusions remain within tested, observed, researched, or implemented boundaries.
- **Readability:** Structure, terminology, captions, and depth serve both scanning and sustained reading.
- **Originality:** Value comes from real work, reasoning, writing, and relationships rather than template filler.
- **Maintenance:** Dates, sources, links, dependencies, and review responsibility can be kept current.
- **Accessibility:** Text alternatives, descriptions, readable artifacts, link meaning, and nonvisual status are prepared.
- **Privacy:** Secrets, personal information, logs, screenshots, and data are approved and safely redacted.
- **Verification:** Labels, source, method, date, and unresolved questions are recorded.

Failure in accuracy, attribution, privacy, status, or verification blocks publication. Other deficiencies require revision or an explicitly reduced scope before release.

# Content Maintenance

- Record a last reviewed date for every publishable item and review more often when deployments, links, status, or technology behavior changes.
- Mark stale content when current accuracy cannot be confirmed; do not silently leave time-sensitive claims appearing current.
- Update status and maturity independently as work changes, preserving meaningful prior states in history.
- Check repositories, deployments, source links, media, and contact links for breakage or changed visibility.
- Archive work when it remains useful historically but is no longer maintained or representative of current practice.
- Publish corrections when a substantive claim, attribution, result, or limitation was wrong; distinguish corrections from ordinary editing.
- Date meaningful revisions to interpretation, learning, or project narratives.
- Update deployment records when platforms, URLs, availability, or source equivalence change.
- Update repository evidence when visibility, default branch, documentation, licensing, or implementation changes.
- Preserve historical integrity: do not rewrite earlier uncertainty, mistakes, status, or assisted work to imply current understanding existed from the beginning.
- Promote verification labels only when stronger evidence has actually been reviewed; downgrade or mark unknown when evidence becomes unavailable.

# Privacy and Public Information

- **Email:** Publish only a deliberately public address after explicit confirmation and consider the long-term spam and maintenance implications.
- **Location:** Do not publish the currently private location or infer precise location from education, screenshots, logs, or metadata.
- **Personal information:** Include only information relevant to the website's purpose and approved for public use. Remove identifiers belonging to other people.
- **API keys:** Never publish keys, tokens, partial secrets, browser storage captures, request headers, environment values, or recovery information. Verify redaction before publishing CourtFit evidence.
- **Repository secrets:** Review code, history, configuration, issues, and screenshots for credentials and sensitive endpoints before linking or embedding evidence.
- **Logs:** Remove secrets, personal paths when inappropriate, identifiers, request bodies, user information, and unrelated system details while preserving evidentiary meaning.
- **Screenshots:** Review browser chrome, tabs, notifications, account names, file paths, messages, keys, and third-party content before publication.
- **User data:** Do not publish real user information. Use safe test data whose origin and fictional nature are clear.
- **Research data:** Follow applicable consent, ownership, institutional, licensing, and privacy requirements before publication; no research dataset is currently established by the inventories.

Private or sensitive information requires explicit confirmation before publication. Uncertainty about whether information is safe defaults to internal visibility until reviewed.

# Content Anti-Patterns

- Technology badges or tool lists without explaining each technology's role.
- Generic project summaries that could describe any application.
- Fake metrics, estimates presented as measurements, or scale claims without conditions.
- Unsupported claims about security, performance, reliability, accuracy, expertise, impact, or production use.
- Unclear ownership, collaboration, external guidance, or attribution.
- Unclear lifecycle status.
- Unclear maturity or presentation polish that implies greater rigor than exists.
- Decorative terminal output, unexplained code, or diagrams created without verified architecture.
- Unreadable screenshots used as backgrounds or proof.
- Research presented without method, sources, uncertainty, or limitations.
- Experiments presented without setup, conditions, or boundaries on conclusions.
- Incomplete notes presented as comprehensive authority.
- Guided exercises, tutorials, laboratories, or assignments presented as original major projects.
- Duplicate content that repeats claims without adding context, evidence, history, or a new relationship.
- AI-generated filler, interchangeable reflections, or generic engineering language.
- Content created only to make the website look full.
- Areas of interest presented as established expertise.
- Planned, researching, or intended features presented as completed.
- Production claims without appropriate testing, operational evidence, security review, and validation.
- Silent removal of failures, uncertainty, limitations, or earlier status from the historical record.

# Content Acceptance Criteria

Every publishable item must let its intended reader answer:

- **What is it?** The content type and subject are clear.
- **Why does it matter?** Motivation or relevance is specific and proportionate.
- **What did Nattapong do?** Ownership, role, contribution, guidance, and collaboration are accurate.
- **What is its status?** Current lifecycle state is explicit in text.
- **What is its maturity?** Independence and validation level are clear where relevant.
- **What evidence exists?** Artifacts are purposeful, explained, sourced, and accessible.
- **What is verified?** Verification method and strength match the publication language.
- **What remains uncertain?** Unknowns and to-be-verified details are visible where material.
- **What are the limitations?** Boundaries, missing behavior, and risks appear near related claims.
- **What can the reader do next?** A relevant path exists to deeper evidence, related content, source material, historical context, or confirmed contact information.

The item must also pass the content quality criteria for accuracy, attribution, privacy, readability, originality, accessibility, verification, and maintainability. If the available evidence cannot support a useful and honest item, keep it internal rather than adding filler.

# Open Content Questions

The following questions require repository review, deployment review, content inventory, real artifacts, test results, research documents, existing notes, Git history, audience feedback, or privacy confirmation. They must not be answered by inference.

- Which personal and professional details are approved for public use, including email, education wording, working preferences, and possible career directions?
- Which existing notes, coursework, laboratories, exercises, and configuration records contain enough original reflection and evidence to publish?
- Which dates, timelines, and progression milestones can Git history, coursework records, or retained notes establish?
- Which content relationships are supported by actual chronology or influence rather than shared technology labels?
- Which audience questions are not answered clearly once representative drafts are reviewed?
- Which repository, media, log, screenshot, or research artifacts can be published without exposing secrets, private information, third-party data, or restricted coursework?
- Which research papers have been reviewed, how were they selected, and what summaries or citations exist?
- What graduation-project candidate areas remain under consideration, what hardware is actually available, and what scope constraints have been confirmed? No final topic is currently selected.

**Rust Booking API:**

- What are the exact endpoint paths, request formats, responses, and implemented GET, POST, and PUT behaviors?
- What is the current database schema?
- How are registration, login if any, password hashing, JWT creation and validation, token expiration, identity extraction, and authorization implemented?
- What user-specific access protections are present and verified?
- What exactly is stored in Redis, why is it temporary, does it expire, and does it affect concurrency?
- Are transactions used, and how are booking conflicts or concurrent requests handled?
- What manual test evidence exists, and have any automated tests been added since the inventory?
- Is the application deployed, at which confirmed URL and platform, and does the deployment match the reviewed repository?
- Which architecture, configuration, decision history, errors, and learning reflections can be supported by repository files, Git history, or notes?
- What evidence can be published safely without exposing secrets or private data?

**CourtFit:**

- What is the confirmed live URL, and does the deployed build match the reviewed repository?
- Where exactly is the user API key held, does it survive refresh, and can it appear in logs, errors, storage, or other browser-visible data?
- Do requests go directly from the browser to OpenAI and Gemini, and what conversation or metadata is sent?
- How are provider switching, streaming, Stop, Retry, cancellation, errors, and conversation context implemented?
- Which exact browser versions, operating systems, viewport sizes, and physical devices were manually tested?
- What accessibility testing and automated testing, if any, have been completed?
- How has recommendation quality been evaluated, and which examples fairly show uncertainty or failure without implying verified advice?
- Which screenshots, responsive states, error states, API-key flow, and provider behavior can be documented safely and clearly?
- What is the current project status history, and which improvements are planned rather than implemented?

All open questions should retain **To be verified** or **Unknown** status until the relevant evidence is reviewed and recorded.
