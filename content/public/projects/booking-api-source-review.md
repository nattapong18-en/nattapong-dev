---
recordId: project-booking-api
slug: booking-api-source-review
family: projects
title: Rust Booking API
summary: "Booking API is an educational backend project built with Rust, Axum, Tokio, SQLx, and PostgreSQL."
primaryLanguage: en
status: functional-mvp
maturity: functional-mvp-candidate
verification: static-source-verified
visibility: public-ready
review:
  state: approved
purpose: "Practise API design, asynchronous backend programming, database access, error handling, and the organization of a small Rust service."
role: "Individual educational backend project."
contributions:
  - "Developed the project as a practice exercise in API design, asynchronous backend programming, database access, error handling, and small Rust service organization."
technologies:
  - name: Rust
    role: "Backend implementation language."
  - name: Axum
    role: "Web framework used by the backend."
  - name: Tokio
    role: "Asynchronous runtime used by the backend."
  - name: SQLx
    role: "Database-access toolkit used by the backend."
  - name: PostgreSQL
    role: "Relational persistence used in the audited source."
currentResult: "A source-level functional-MVP candidate whose runtime behaviour remains unverified."
verificationScope: "Commit-scoped static source review; runtime behaviour, passing tests, deployment, production readiness, and security completeness are not verified."
claims:
  - claimId: project-booking-stack
    statement: "Booking API is an educational backend project built with Rust, Axum, Tokio, SQLx, and PostgreSQL."
    state: supported
    verification: static-source-verified
    evidenceRefs:
      - evidenceId: project-booking-static-review
        requirement: required
  - claimId: project-booking-practice
    statement: "It was used to practise API design, asynchronous backend programming, database access, error handling, and the organization of a small Rust service."
    state: supported
    verification: static-source-verified
    evidenceRefs:
      - evidenceId: project-booking-static-review
        requirement: required
  - claimId: project-booking-review-scope
    statement: "The description is based on a commit-scoped static source review."
    state: supported
    verification: static-source-verified
    evidenceRefs:
      - evidenceId: project-booking-static-review
        requirement: required
evidence:
  - evidenceId: project-booking-static-review
    type: repository-review
    title: "Commit-scoped static source review"
    purpose: "Support the bounded source-level description of the educational backend project."
    scope: "One reviewed commit; runtime behaviour, tests, deployment, security completeness, concurrency, and cache behaviour are excluded."
    availability: available
    verification: static-source-verified
    sourceIds:
      - project-booking-static-audit
sources:
  - sourceId: project-booking-static-audit
    type: audit
    title: "Approved PRJ-01 static audit"
    availability: available
limitations:
  - limitationId: project-booking-verification-limit
    statement: "Runtime behaviour, passing tests, deployment, production readiness, security completeness, real-world usage, concurrency, and cache behaviour are not verified or claimed beyond the static audit."
    claimIds:
      - project-booking-stack
      - project-booking-practice
      - project-booking-review-scope
  - limitationId: project-booking-history-limit
    statement: "A historical environment-file issue remains a publication limitation. Repository-history details and the public repository link are omitted from v0.1."
---

Booking API is an educational backend project built with Rust, Axum, Tokio, SQLx, and PostgreSQL.

I developed it to practise API design, asynchronous backend programming, database access, error handling, and the organization of a small Rust service.

The current description is based on a static review of the source code at a specific commit. It does not confirm runtime behaviour, passing tests, deployment, production readiness, security completeness, or real-world usage.

A historical environment-file issue also remains a publication limitation. For v0.1, repository-history details and the public repository link are intentionally omitted until that risk has been reviewed separately.
