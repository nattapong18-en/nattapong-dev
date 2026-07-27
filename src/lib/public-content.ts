import {
  getCollection,
  type CollectionEntry,
} from "astro:content";

import type { ContentRecord } from "../content/schema/families.ts";
import { validateFamilySemantics } from "../content/validation/family-semantics.ts";
import {
  formatValidationIssues,
  validateReferentialIntegrity,
} from "../content/validation/referential-integrity.ts";
import {
  assertNoRouteCollisions,
  filterPublicationEligible,
  learningDetailPath,
  prepareEligibleFamilyRecords,
  projectDetailPath,
  requireExpectedRecord,
  requireFamilyRecords,
} from "./public-routing.ts";

const expectedAboutRecordId = "about-profile";
const expectedLearningRecordId = "learning-rust-http";

export type PublicContent = {
  about: CollectionEntry<"about">;
  projects: CollectionEntry<"projects">[];
  learning: CollectionEntry<"learning">[];
};

let publicContentPromise: Promise<PublicContent> | undefined;

async function loadPublicContent(): Promise<PublicContent> {
  const [aboutEntries, projectEntries, researchEntries, learningEntries] =
    await Promise.all([
      getCollection("about"),
      getCollection("projects"),
      getCollection("research"),
      getCollection("learning"),
    ]);

  const records: ContentRecord[] = [
    ...aboutEntries.map((entry) => entry.data),
    ...projectEntries.map((entry) => entry.data),
    ...researchEntries.map((entry) => entry.data),
    ...learningEntries.map((entry) => entry.data),
  ];

  const validationIssues = [
    ...validateReferentialIntegrity(records),
    ...validateFamilySemantics(records),
  ];

  if (validationIssues.length > 0) {
    throw new Error(
      `Public content validation failed:\n${formatValidationIssues(validationIssues)}`,
    );
  }

  const eligibleRecords = filterPublicationEligible(records);
  const aboutRecord = requireExpectedRecord(
    eligibleRecords,
    expectedAboutRecordId,
    "about",
  );
  const learningRecord = requireExpectedRecord(
    eligibleRecords,
    expectedLearningRecordId,
    "learning",
  );
  const projectRecords = prepareEligibleFamilyRecords(records, "projects");
  const learningRecords = prepareEligibleFamilyRecords(records, "learning");

  requireFamilyRecords(projectRecords, "projects");
  requireFamilyRecords(learningRecords, "learning");

  const about = aboutEntries.find(
    (entry) => entry.data.recordId === aboutRecord.recordId,
  );

  if (!about) {
    throw new Error(
      `Eligible About record "${aboutRecord.recordId}" has no matching collection entry.`,
    );
  }

  const projectsByRecordId = new Map(
    projectEntries.map((entry) => [entry.data.recordId, entry]),
  );
  const projects = projectRecords.map((record) => {
    const entry = projectsByRecordId.get(record.recordId);

    if (!entry) {
      throw new Error(
        `Eligible Project record "${record.recordId}" has no matching collection entry.`,
      );
    }

    return entry;
  });

  const learningByRecordId = new Map(
    learningEntries.map((entry) => [entry.data.recordId, entry]),
  );
  const learning = learningRecords.map((record) => {
    const entry = learningByRecordId.get(record.recordId);

    if (!entry) {
      throw new Error(
        `Eligible Learning record "${record.recordId}" has no matching collection entry.`,
      );
    }

    return entry;
  });

  if (
    !learning.some(
      (entry) => entry.data.recordId === learningRecord.recordId,
    )
  ) {
    throw new Error(
      `Required Learning record "${learningRecord.recordId}" is missing from eligible collection entries.`,
    );
  }

  assertNoRouteCollisions([
    { path: "/", sourceId: "home" },
    { path: "/projects/", sourceId: "projects-index" },
    ...projects.map((entry) => ({
      path: projectDetailPath(entry.data.slug, entry.data.recordId),
      sourceId: entry.data.recordId,
    })),
    { path: "/learning/", sourceId: "learning-index" },
    ...learning.map((entry) => ({
      path: learningDetailPath(entry.data.slug, entry.data.recordId),
      sourceId: entry.data.recordId,
    })),
  ]);

  return { about, projects, learning };
}

export function getPublicContent(): Promise<PublicContent> {
  publicContentPromise ??= loadPublicContent();
  return publicContentPromise;
}
