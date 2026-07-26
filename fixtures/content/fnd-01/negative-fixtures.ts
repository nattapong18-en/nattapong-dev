/*
 * Focused, synthetic negative cases for FND-01 validation only.
 * Each set starts from the passing fixtures and introduces one intended fault.
 */

import {
  aboutDirectionEnFixture,
  bookingApiEnFixture,
  positiveFixtures,
  researchPreparationMixedFixture,
  rustHttpThreadpoolEnFixture,
} from "./positive-fixtures.ts";

type FixtureRecord = (typeof positiveFixtures)[number];

function replaceFixture(
  recordId: string,
  replacement: FixtureRecord | Record<string, unknown>,
): ReadonlyArray<FixtureRecord | Record<string, unknown>> {
  return positiveFixtures.map((fixture) =>
    fixture.recordId === recordId ? replacement : fixture,
  );
}

export type NegativeFixtureCase = {
  name: string;
  layer: "V2" | "V3";
  expectedCode: string;
  records: ReadonlyArray<FixtureRecord | Record<string, unknown>>;
};

const duplicateStableId = {
  ...bookingApiEnFixture,
  slug: "booking-api-duplicate-id",
};

const brokenRequiredRelationship = {
  ...rustHttpThreadpoolEnFixture,
  relationships: [
    {
      kind: "related",
      targetId: "fixture-missing-required-target",
      requirement: "required",
      reason: "Synthetic required relationship must resolve.",
    },
  ],
};

const invalidSelfReference = {
  ...rustHttpThreadpoolEnFixture,
  relationships: [
    {
      kind: "related",
      targetId: rustHttpThreadpoolEnFixture.recordId,
      requirement: "optional",
      reason: "Synthetic self-reference is intentionally invalid.",
    },
  ],
};

const duplicateTranslationLanguage = {
  ...aboutDirectionEnFixture,
  recordId: "fixture-about-direction-en-duplicate",
  slug: "current-engineering-direction-duplicate",
};

const publicReadyWithoutReview = {
  ...aboutDirectionEnFixture,
  recordId: "fixture-about-public-ready-without-review",
  slug: "public-ready-without-review",
  translationGroup: undefined,
  visibility: "public-ready",
  review: {
    state: "candidate",
    note: "Intentionally lacks approved human review.",
  },
};

const contradictoryVerifiedClaim = {
  ...bookingApiEnFixture,
  recordId: "fixture-project-contradictory-claim",
  slug: "project-contradictory-claim",
  relationships: undefined,
  claims: [
    {
      ...bookingApiEnFixture.claims[0],
      verification: "not-verified",
    },
  ],
  limitations: [
    {
      limitationId: "fixture-project-contradictory-limit",
      statement: "Synthetic contradiction for validation.",
      claimIds: ["fixture-booking-source-structure"],
    },
  ],
};

const invalidLearningFields = {
  ...rustHttpThreadpoolEnFixture,
  recordId: "fixture-learning-invalid-fields",
  slug: "learning-invalid-fields",
  experiment: {
    question: "Can an incompatible experiment detail coexist here?",
    setup: "Synthetic setup.",
    conditions: ["Synthetic condition."],
    procedure: ["Synthetic procedure."],
    observations: ["Synthetic observation."],
    result: "Synthetic result.",
    interpretation: "No interpretation beyond the fixture.",
    nonConclusions: ["No general conclusion."],
  },
};

const requiredEvidenceUnavailable = {
  ...bookingApiEnFixture,
  recordId: "fixture-project-required-evidence-unavailable",
  slug: "required-evidence-unavailable",
  relationships: undefined,
  evidence: [
    {
      ...bookingApiEnFixture.evidence[0],
      availability: "unavailable",
    },
    bookingApiEnFixture.evidence[1],
  ],
};

const researchPreparationWithCompletedResult = {
  ...researchPreparationMixedFixture,
  recordId: "fixture-research-completed-result-conflict",
  slug: "research-completed-result-conflict",
  resultState: "completed",
};

export const negativeFixtureCases: ReadonlyArray<NegativeFixtureCase> = [
  {
    name: "duplicate stable ID",
    layer: "V2",
    expectedCode: "DUPLICATE_RECORD_ID",
    records: [...positiveFixtures, duplicateStableId],
  },
  {
    name: "broken required relationship",
    layer: "V2",
    expectedCode: "BROKEN_REQUIRED_RELATIONSHIP",
    records: replaceFixture(
      rustHttpThreadpoolEnFixture.recordId,
      brokenRequiredRelationship,
    ),
  },
  {
    name: "invalid self-reference",
    layer: "V2",
    expectedCode: "INVALID_SELF_REFERENCE",
    records: replaceFixture(
      rustHttpThreadpoolEnFixture.recordId,
      invalidSelfReference,
    ),
  },
  {
    name: "duplicate primary language in translation group",
    layer: "V2",
    expectedCode: "DUPLICATE_TRANSLATION_LANGUAGE",
    records: [...positiveFixtures, duplicateTranslationLanguage],
  },
  {
    name: "public-ready record without approved human review",
    layer: "V3",
    expectedCode: "PUBLIC_READY_WITHOUT_APPROVED_REVIEW",
    records: replaceFixture(
      aboutDirectionEnFixture.recordId,
      publicReadyWithoutReview,
    ),
  },
  {
    name: "contradictory verified claim",
    layer: "V3",
    expectedCode: "VERIFIED_CLAIM_CONTRADICTS_VERIFICATION",
    records: replaceFixture(
      bookingApiEnFixture.recordId,
      contradictoryVerifiedClaim,
    ),
  },
  {
    name: "invalid family-specific field combination",
    layer: "V3",
    expectedCode: "INVALID_LEARNING_FIELD_COMBINATION",
    records: replaceFixture(
      rustHttpThreadpoolEnFixture.recordId,
      invalidLearningFields,
    ),
  },
  {
    name: "required evidence unavailable",
    layer: "V2",
    expectedCode: "REQUIRED_EVIDENCE_UNAVAILABLE",
    records: replaceFixture(
      bookingApiEnFixture.recordId,
      requiredEvidenceUnavailable,
    ),
  },
  {
    name: "research preparation with completed result",
    layer: "V3",
    expectedCode: "RESEARCH_PREPARATION_WITH_COMPLETED_RESULT",
    records: replaceFixture(
      researchPreparationMixedFixture.recordId,
      researchPreparationWithCompletedResult,
    ),
  },
];
