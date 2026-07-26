import type { ContentRecord } from "../schema/families.ts";

export type ValidationIssue = {
  layer: "V2" | "V3";
  code: string;
  recordId: string;
  message: string;
  targetId?: string;
};

function compareIssues(left: ValidationIssue, right: ValidationIssue): number {
  return (
    left.recordId.localeCompare(right.recordId) ||
    left.code.localeCompare(right.code) ||
    (left.targetId ?? "").localeCompare(right.targetId ?? "") ||
    left.message.localeCompare(right.message)
  );
}

export function sortValidationIssues(
  issues: ReadonlyArray<ValidationIssue>,
): ValidationIssue[] {
  return [...issues].sort(compareIssues);
}

export function formatValidationIssues(
  issues: ReadonlyArray<ValidationIssue>,
): string {
  return sortValidationIssues(issues)
    .map(
      (issue) =>
        `[${issue.layer}:${issue.code}] ${issue.recordId}: ${issue.message}`,
    )
    .join("\n");
}

export function validateReferentialIntegrity(
  records: ReadonlyArray<ContentRecord>,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const recordsById = new Map<string, ContentRecord[]>();

  for (const record of records) {
    const matchingRecords = recordsById.get(record.recordId) ?? [];
    matchingRecords.push(record);
    recordsById.set(record.recordId, matchingRecords);
  }

  for (const [recordId, matchingRecords] of recordsById) {
    if (matchingRecords.length > 1) {
      issues.push({
        layer: "V2",
        code: "DUPLICATE_RECORD_ID",
        recordId,
        message: `Stable record ID "${recordId}" is used ${matchingRecords.length} times.`,
      });
    }
  }

  const knownIds = new Set(recordsById.keys());

  for (const record of records) {
    for (const relationship of record.relationships ?? []) {
      if (relationship.targetId === record.recordId) {
        issues.push({
          layer: "V2",
          code: "INVALID_SELF_REFERENCE",
          recordId: record.recordId,
          targetId: relationship.targetId,
          message: `Relationship "${relationship.kind}" does not permit a self-reference.`,
        });
        continue;
      }

      if (!knownIds.has(relationship.targetId)) {
        const required = relationship.requirement === "required";
        issues.push({
          layer: "V2",
          code: required
            ? "BROKEN_REQUIRED_RELATIONSHIP"
            : "BROKEN_OPTIONAL_RELATIONSHIP",
          recordId: record.recordId,
          targetId: relationship.targetId,
          message: `${
            required ? "Required" : "Optional"
          } relationship "${relationship.kind}" targets missing record "${relationship.targetId}".`,
        });
      }
    }

    const evidenceById = new Map(
      (record.evidence ?? []).map((evidence) => [
        evidence.evidenceId,
        evidence,
      ]),
    );
    const sourceIds = new Set(
      (record.sources ?? []).map((source) => source.sourceId),
    );
    const claimIds = new Set(
      (record.claims ?? []).map((claim) => claim.claimId),
    );

    for (const claim of record.claims ?? []) {
      for (const evidenceReference of claim.evidenceRefs ?? []) {
        const evidence = evidenceById.get(evidenceReference.evidenceId);

        if (!evidence) {
          issues.push({
            layer: "V2",
            code:
              evidenceReference.requirement === "required"
                ? "BROKEN_REQUIRED_EVIDENCE_REFERENCE"
                : "BROKEN_OPTIONAL_EVIDENCE_REFERENCE",
            recordId: record.recordId,
            targetId: evidenceReference.evidenceId,
            message: `Claim "${claim.claimId}" references missing evidence "${evidenceReference.evidenceId}".`,
          });
          continue;
        }

        if (
          evidenceReference.requirement === "required" &&
          evidence.availability !== "available"
        ) {
          issues.push({
            layer: "V2",
            code: "REQUIRED_EVIDENCE_UNAVAILABLE",
            recordId: record.recordId,
            targetId: evidence.evidenceId,
            message: `Claim "${claim.claimId}" requires evidence "${evidence.evidenceId}", whose availability is "${evidence.availability}".`,
          });
        }
      }
    }

    for (const evidence of record.evidence ?? []) {
      for (const sourceId of evidence.sourceIds ?? []) {
        if (!sourceIds.has(sourceId)) {
          issues.push({
            layer: "V2",
            code: "BROKEN_SOURCE_REFERENCE",
            recordId: record.recordId,
            targetId: sourceId,
            message: `Evidence "${evidence.evidenceId}" references missing source "${sourceId}".`,
          });
        }
      }
    }

    if (
      record.family === "projects" &&
      record.repositorySourceId &&
      !sourceIds.has(record.repositorySourceId)
    ) {
      issues.push({
        layer: "V2",
        code: "BROKEN_REPOSITORY_SOURCE_REFERENCE",
        recordId: record.recordId,
        targetId: record.repositorySourceId,
        message: `Project repository source "${record.repositorySourceId}" does not exist in the record's source list.`,
      });
    }

    for (const limitation of record.limitations ?? []) {
      for (const claimId of limitation.claimIds ?? []) {
        if (!claimIds.has(claimId)) {
          issues.push({
            layer: "V2",
            code: "BROKEN_LIMITATION_CLAIM_REFERENCE",
            recordId: record.recordId,
            targetId: claimId,
            message: `Limitation "${limitation.limitationId}" references missing claim "${claimId}".`,
          });
        }
      }
    }
  }

  const translationMembers = new Map<string, ContentRecord[]>();

  for (const record of records) {
    if (!record.translationGroup) continue;
    const members = translationMembers.get(record.translationGroup) ?? [];
    members.push(record);
    translationMembers.set(record.translationGroup, members);
  }

  for (const [translationGroup, members] of translationMembers) {
    const family = members[0]?.family;
    const seenLanguages = new Set<string>();

    for (const member of members) {
      if (member.family !== family) {
        issues.push({
          layer: "V2",
          code: "TRANSLATION_GROUP_FAMILY_MISMATCH",
          recordId: member.recordId,
          targetId: translationGroup,
          message: `Translation group "${translationGroup}" contains both "${family}" and "${member.family}" records.`,
        });
      }

      if (seenLanguages.has(member.primaryLanguage)) {
        issues.push({
          layer: "V2",
          code: "DUPLICATE_TRANSLATION_LANGUAGE",
          recordId: member.recordId,
          targetId: translationGroup,
          message: `Translation group "${translationGroup}" has more than one "${member.primaryLanguage}" member.`,
        });
      }
      seenLanguages.add(member.primaryLanguage);
    }
  }

  return sortValidationIssues(issues);
}
