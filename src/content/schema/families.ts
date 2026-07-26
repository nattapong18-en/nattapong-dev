import { z } from "astro/zod";

import {
  addSharedStructuralIssues,
  claimSchema,
  evidenceSchema,
  limitationSchema,
  sharedContentFields,
  sourceSchema,
  stableIdentifierSchema,
} from "./shared.ts";

const boundedText = z.string().trim().min(1).max(400);
const boundedTextList = z.array(boundedText).min(1);

const technologySchema = z
  .object({
    name: z.string().trim().min(1).max(80),
    role: z.string().trim().min(1).max(240),
  })
  .strict();

const contactReferenceSchema = z
  .object({
    label: z.string().trim().min(1).max(80),
    destination: z.url(),
    approval: z.literal("approved"),
  })
  .strict();

export const aboutSchema = z
  .object({
    ...sharedContentFields,
    family: z.literal("about"),
    direction: boundedText,
    approvedProfileFacts: boundedTextList,
    interests: boundedTextList,
    contactReferences: z.array(contactReferenceSchema).min(1).optional(),
  })
  .strict()
  .superRefine(addSharedStructuralIssues);

const auditedRevisionSchema = z
  .object({
    repository: z.string().trim().min(1).max(200),
    branch: z.string().trim().min(1).max(80),
    revision: z.string().trim().min(1).max(96),
    scope: boundedText,
  })
  .strict();

export const projectSchema = z
  .object({
    ...sharedContentFields,
    family: z.literal("projects"),
    purpose: boundedText,
    role: boundedText,
    contributions: boundedTextList,
    technologies: z.array(technologySchema).min(1),
    currentResult: boundedText,
    verificationScope: boundedText,
    auditedRevision: auditedRevisionSchema.optional(),
    repositorySourceId: stableIdentifierSchema.optional(),
    claims: z.array(claimSchema).min(1),
    evidence: z.array(evidenceSchema).min(1),
    sources: z.array(sourceSchema).min(1),
    limitations: z.array(limitationSchema).min(1),
  })
  .strict()
  .superRefine(addSharedStructuralIssues);

export const researchSchema = z
  .object({
    ...sharedContentFields,
    family: z.literal("research"),
    researchArea: boundedText,
    question: boundedText,
    motivation: boundedText,
    researchStage: z.enum([
      "preparation",
      "open-investigation",
      "completed",
    ]),
    resultState: z.enum(["none", "preliminary", "completed"]),
    currentScope: boundedText,
    openQuestions: boundedTextList,
    nextInvestigation: boundedText.optional(),
    sources: z.array(sourceSchema).min(1),
    limitations: z.array(limitationSchema).min(1),
  })
  .strict()
  .superRefine(addSharedStructuralIssues);

export const learningKindSchema = z.enum([
  "learning-progress",
  "technical-note",
  "experiment",
  "coursework",
]);

const learningProgressDetailsSchema = z
  .object({
    startingPoint: boundedText,
    guidance: boundedText.optional(),
    changedUnderstanding: boundedText,
    currentGaps: boundedTextList,
  })
  .strict();

const technicalNoteDetailsSchema = z
  .object({
    audience: boundedText,
    scope: boundedText,
    prerequisites: boundedTextList,
    examples: boundedTextList,
    caveats: boundedTextList,
  })
  .strict();

const experimentDetailsSchema = z
  .object({
    question: boundedText,
    setup: boundedText,
    conditions: boundedTextList,
    procedure: boundedTextList,
    observations: boundedTextList,
    result: boundedText,
    interpretation: boundedText,
    nonConclusions: boundedTextList,
  })
  .strict();

const courseworkDetailsSchema = z
  .object({
    academicContext: boundedText,
    constraints: boundedTextList,
    role: boundedText,
    contribution: boundedText,
    guidance: boundedText.optional(),
    rightsState: z.enum([
      "approved",
      "needs-review",
      "not-evaluated",
      "blocked",
      "not-applicable",
    ]),
    result: boundedText,
    learningOutcome: boundedText.optional(),
  })
  .strict();

export const learningSchema = z
  .object({
    ...sharedContentFields,
    family: z.literal("learning"),
    learningKind: learningKindSchema,
    learningProgress: learningProgressDetailsSchema.optional(),
    technicalNote: technicalNoteDetailsSchema.optional(),
    experiment: experimentDetailsSchema.optional(),
    coursework: courseworkDetailsSchema.optional(),
  })
  .strict()
  .superRefine(addSharedStructuralIssues);

export const contentRecordSchema = z.discriminatedUnion("family", [
  aboutSchema,
  projectSchema,
  researchSchema,
  learningSchema,
]);

export const familySchemas = {
  about: aboutSchema,
  projects: projectSchema,
  research: researchSchema,
  learning: learningSchema,
} as const;

export type AboutRecord = z.infer<typeof aboutSchema>;
export type ProjectRecord = z.infer<typeof projectSchema>;
export type ResearchRecord = z.infer<typeof researchSchema>;
export type LearningRecord = z.infer<typeof learningSchema>;
export type ContentRecord = z.infer<typeof contentRecordSchema>;
