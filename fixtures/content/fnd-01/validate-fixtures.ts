/*
 * Run directly with Node 26.1.0:
 *   node fixtures/content/fnd-01/validate-fixtures.ts
 *
 * The runner performs no file, network, Git, environment, home-directory,
 * public-content, docs, or reference access. It imports only committed fixture
 * inputs and the actual FND-01 schemas and validators.
 */

import {
  contentRecordSchema,
  type ContentRecord,
} from "../../../src/content/schema/families.ts";
import { validateFamilySemantics } from "../../../src/content/validation/family-semantics.ts";
import {
  formatValidationIssues,
  validateReferentialIntegrity,
  type ValidationIssue,
} from "../../../src/content/validation/referential-integrity.ts";
import { negativeFixtureCases } from "./negative-fixtures.ts";
import { positiveFixtures } from "./positive-fixtures.ts";

function assertCondition(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function parseRecords(records: ReadonlyArray<unknown>): ContentRecord[] {
  return records.map((record) => contentRecordSchema.parse(record));
}

function runValidation(
  records: ReadonlyArray<ContentRecord>,
): ValidationIssue[] {
  return [
    ...validateReferentialIntegrity(records),
    ...validateFamilySemantics(records),
  ];
}

const parsedPositiveFixtures = parseRecords(positiveFixtures);
const positiveIssues = runValidation(parsedPositiveFixtures);

assertCondition(
  parsedPositiveFixtures.length === 8,
  `Expected eight positive fixtures, found ${parsedPositiveFixtures.length}.`,
);
assertCondition(
  positiveIssues.length === 0,
  `Positive fixtures failed:\n${formatValidationIssues(positiveIssues)}`,
);

const positiveIds = new Set(
  parsedPositiveFixtures.map((fixture) => fixture.recordId),
);
assertCondition(
  positiveIds.size === parsedPositiveFixtures.length,
  "Positive fixtures contain a duplicate stable ID.",
);

for (const negativeCase of negativeFixtureCases) {
  const parsedRecords = parseRecords(negativeCase.records);
  const issues = runValidation(parsedRecords);
  const intendedIssue = issues.find(
    (issue) =>
      issue.layer === negativeCase.layer &&
      issue.code === negativeCase.expectedCode,
  );

  assertCondition(
    intendedIssue,
    `Negative case "${negativeCase.name}" did not fail with ${negativeCase.layer}:${negativeCase.expectedCode}.\n${formatValidationIssues(issues)}`,
  );
}

console.log(
  `FND-01 fixtures passed: ${parsedPositiveFixtures.length} positive records; ${negativeFixtureCases.length} intended negative failures.`,
);
