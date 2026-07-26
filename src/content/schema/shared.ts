import { z } from "astro/zod";

const identifierPattern = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

export const stableIdentifierSchema = z
  .string()
  .min(3)
  .max(96)
  .regex(identifierPattern, "Use a lowercase, hyphen-separated stable identifier.");

export const slugSchema = z
  .string()
  .min(1)
  .max(120)
  .regex(slugPattern, "Use a lowercase, hyphen-separated slug.");

export const primaryLanguageSchema = z.enum(["en", "th", "mixed"]);

export const lifecycleStatusSchema = z.enum([
  "active",
  "researching",
  "in-progress",
  "experimental",
  "paused",
  "functional-mvp",
  "completed",
  "archived",
  "unavailable",
]);

export const maturitySchema = z.enum([
  "developing",
  "learning-exercise",
  "guided-implementation",
  "educational-project",
  "experiment",
  "functional-mvp-candidate",
  "research-preparation",
  "not-selected",
  "not-implemented",
]);

export const verificationStateSchema = z.enum([
  "user-confirmed",
  "static-source-verified",
  "runtime-verified",
  "deployment-verified",
  "self-reported",
  "to-be-verified",
  "unknown",
  "not-verified",
  "not-evaluated",
  "not-applicable",
]);

export const visibilitySchema = z.enum([
  "candidate",
  "public-ready",
  "withheld",
  "archived",
]);

export const reviewStateSchema = z.enum([
  "internal-only",
  "candidate",
  "needs-factual-review",
  "needs-privacy-review",
  "needs-rights-review",
  "approved",
  "withdrawn",
]);

export const availabilityStateSchema = z.enum([
  "available",
  "unavailable",
  "unknown",
  "not-evaluated",
  "blocked",
  "not-applicable",
]);

export const claimStateSchema = z.enum([
  "supported",
  "qualified",
  "self-reported",
  "to-be-verified",
  "unknown",
  "not-verified",
  "blocked",
  "not-applicable",
]);

export const relationshipKindSchema = z.enum([
  "related",
  "learning-informed-project",
  "project-informed-learning",
  "research-informed-learning",
  "supersedes",
]);

export const relationshipSchema = z
  .object({
    kind: relationshipKindSchema,
    targetId: stableIdentifierSchema,
    requirement: z.enum(["required", "optional"]),
    reason: z.string().trim().min(1).max(240),
  })
  .strict();

export const sourceSchema = z
  .object({
    sourceId: stableIdentifierSchema,
    type: z.enum([
      "repository",
      "audit",
      "documentation",
      "book",
      "paper",
      "self-report",
      "course-material",
      "other",
    ]),
    title: z.string().trim().min(1).max(160),
    availability: availabilityStateSchema,
    locator: z.string().trim().min(1).max(240).optional(),
    limitation: z.string().trim().min(1).max(320).optional(),
  })
  .strict();

export const evidenceSchema = z
  .object({
    evidenceId: stableIdentifierSchema,
    type: z.enum([
      "source-review",
      "repository-review",
      "manual-test",
      "automated-test",
      "measurement",
      "artifact",
      "reflection",
      "other",
    ]),
    title: z.string().trim().min(1).max(160),
    purpose: z.string().trim().min(1).max(240),
    scope: z.string().trim().min(1).max(320),
    availability: availabilityStateSchema,
    verification: verificationStateSchema,
    sourceIds: z.array(stableIdentifierSchema).min(1).optional(),
  })
  .strict();

export const evidenceReferenceSchema = z
  .object({
    evidenceId: stableIdentifierSchema,
    requirement: z.enum(["required", "optional"]),
  })
  .strict();

export const claimSchema = z
  .object({
    claimId: stableIdentifierSchema,
    statement: z.string().trim().min(1).max(400),
    state: claimStateSchema,
    verification: verificationStateSchema,
    evidenceRefs: z.array(evidenceReferenceSchema).min(1).optional(),
  })
  .strict();

export const limitationSchema = z
  .object({
    limitationId: stableIdentifierSchema,
    statement: z.string().trim().min(1).max(400),
    claimIds: z.array(stableIdentifierSchema).min(1).optional(),
  })
  .strict();

export const reviewSchema = z
  .object({
    state: reviewStateSchema,
    reviewedAt: z
      .string()
      .regex(datePattern, "Use an explicit YYYY-MM-DD review date.")
      .optional(),
    note: z.string().trim().min(1).max(240).optional(),
  })
  .strict();

export const sharedContentFields = {
  recordId: stableIdentifierSchema,
  slug: slugSchema,
  title: z.string().trim().min(1).max(160),
  summary: z.string().trim().min(1).max(320),
  primaryLanguage: primaryLanguageSchema,
  translationGroup: stableIdentifierSchema.optional(),
  status: lifecycleStatusSchema,
  maturity: maturitySchema,
  verification: verificationStateSchema,
  visibility: visibilitySchema,
  review: reviewSchema,
  relationships: z.array(relationshipSchema).optional(),
  claims: z.array(claimSchema).optional(),
  evidence: z.array(evidenceSchema).optional(),
  sources: z.array(sourceSchema).optional(),
  limitations: z.array(limitationSchema).optional(),
  updatedAt: z
    .string()
    .regex(datePattern, "Use an explicit YYYY-MM-DD update date.")
    .optional(),
};

export const sharedContentSchema = z.object(sharedContentFields).strict();

export type SharedContent = z.infer<typeof sharedContentSchema>;
export type ContentRelationship = z.infer<typeof relationshipSchema>;
export type ContentClaim = z.infer<typeof claimSchema>;
export type ContentEvidence = z.infer<typeof evidenceSchema>;
export type ContentSource = z.infer<typeof sourceSchema>;
export type ContentLimitation = z.infer<typeof limitationSchema>;

type StructuralIssueContext = {
  addIssue(issue: {
    code: "custom";
    message: string;
    path: Array<string | number>;
  }): void;
};

function addDuplicateLocalIdIssues(
  values: ReadonlyArray<string>,
  path: string,
  label: string,
  context: StructuralIssueContext,
): void {
  const seen = new Set<string>();

  for (const [index, value] of values.entries()) {
    if (seen.has(value)) {
      context.addIssue({
        code: "custom",
        message: `Duplicate ${label} "${value}" within this record.`,
        path: [path, index],
      });
    }
    seen.add(value);
  }
}

export function addSharedStructuralIssues(
  value: SharedContent,
  context: StructuralIssueContext,
): void {
  addDuplicateLocalIdIssues(
    (value.claims ?? []).map((claim) => claim.claimId),
    "claims",
    "claim ID",
    context,
  );
  addDuplicateLocalIdIssues(
    (value.evidence ?? []).map((evidence) => evidence.evidenceId),
    "evidence",
    "evidence ID",
    context,
  );
  addDuplicateLocalIdIssues(
    (value.sources ?? []).map((source) => source.sourceId),
    "sources",
    "source ID",
    context,
  );
  addDuplicateLocalIdIssues(
    (value.limitations ?? []).map((limitation) => limitation.limitationId),
    "limitations",
    "limitation ID",
    context,
  );
}
