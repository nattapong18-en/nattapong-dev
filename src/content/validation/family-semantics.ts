import type {
  ContentRecord,
  LearningRecord,
  ProjectRecord,
  ResearchRecord,
} from "../schema/families.ts";
import {
  sortValidationIssues,
  type ValidationIssue,
} from "./referential-integrity.ts";

const verifiedClaimStates = new Set([
  "user-confirmed",
  "static-source-verified",
  "runtime-verified",
  "deployment-verified",
]);

function validateProject(record: ProjectRecord): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const claim of record.claims) {
    if (
      claim.state === "supported" &&
      !verifiedClaimStates.has(claim.verification)
    ) {
      issues.push({
        layer: "V3",
        code: "VERIFIED_CLAIM_CONTRADICTS_VERIFICATION",
        recordId: record.recordId,
        targetId: claim.claimId,
        message: `Claim "${claim.claimId}" is marked supported while verification is "${claim.verification}".`,
      });
    }

    if (
      claim.state === "supported" &&
      !(claim.evidenceRefs ?? []).some(
        (reference) => reference.requirement === "required",
      )
    ) {
      issues.push({
        layer: "V3",
        code: "SUPPORTED_CLAIM_MISSING_REQUIRED_EVIDENCE",
        recordId: record.recordId,
        targetId: claim.claimId,
        message: `Supported project claim "${claim.claimId}" has no required evidence reference.`,
      });
    }
  }
  return issues;
}

function validateResearch(record: ResearchRecord): ValidationIssue[] {
  if (
    record.researchStage !== "completed" &&
    record.resultState === "completed"
  ) {
    return [
      {
        layer: "V3",
        code: "RESEARCH_PREPARATION_WITH_COMPLETED_RESULT",
        recordId: record.recordId,
        message: `Research stage "${record.researchStage}" cannot carry a completed result.`,
      },
    ];
  }

  return [];
}

const learningDetailKeys = [
  "learningProgress",
  "technicalNote",
  "experiment",
  "coursework",
] as const;

const expectedLearningDetail = {
  "learning-progress": "learningProgress",
  "technical-note": "technicalNote",
  experiment: "experiment",
  coursework: "coursework",
} as const;

function validateLearning(record: LearningRecord): ValidationIssue[] {
  const expectedDetail = expectedLearningDetail[record.learningKind];
  const presentDetails = learningDetailKeys.filter(
    (key) => record[key] !== undefined,
  );

  if (
    presentDetails.length === 1 &&
    presentDetails[0] === expectedDetail
  ) {
    return [];
  }

  return [
    {
      layer: "V3",
      code: "INVALID_LEARNING_FIELD_COMBINATION",
      recordId: record.recordId,
      message: `Learning kind "${record.learningKind}" requires only "${expectedDetail}" details; found ${
        presentDetails.length === 0 ? "none" : presentDetails.join(", ")
      }.`,
    },
  ];
}

export function validateFamilySemantics(
  records: ReadonlyArray<ContentRecord>,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  for (const record of records) {
    if (
      record.visibility === "public-ready" &&
      record.review.state !== "approved"
    ) {
      issues.push({
        layer: "V3",
        code: "PUBLIC_READY_WITHOUT_APPROVED_REVIEW",
        recordId: record.recordId,
        message: `Public-ready visibility requires an approved human-review state; found "${record.review.state}".`,
      });
    }

    if (record.family === "projects") {
      issues.push(...validateProject(record));
    }

    if (record.family === "research") {
      issues.push(...validateResearch(record));
    }

    if (record.family === "learning") {
      issues.push(...validateLearning(record));
    }
  }

  return sortValidationIssues(issues);
}
