import type { ContentRecord } from "../content/schema/families.ts";

export type PublicRouteRecord = Pick<
  ContentRecord,
  "recordId" | "slug" | "family" | "title" | "visibility" | "review"
>;

export type GeneratedRoute = {
  path: string;
  sourceId: string;
};

const safeRouteSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isPublicationEligible(record: PublicRouteRecord): boolean {
  return (
    record.visibility === "public-ready" &&
    record.review.state === "approved"
  );
}

export function filterPublicationEligible<T extends PublicRouteRecord>(
  records: ReadonlyArray<T>,
): T[] {
  return records.filter(isPublicationEligible);
}

export function assertSafeRouteSlug(slug: string, sourceId: string): void {
  if (!safeRouteSlugPattern.test(slug)) {
    throw new Error(
      `Unsafe public route slug "${slug}" for "${sourceId}". Use one lowercase hyphen-separated path segment.`,
    );
  }
}

export function sortPublicRecords<T extends PublicRouteRecord>(
  records: ReadonlyArray<T>,
): T[] {
  return [...records].sort(
    (left, right) =>
      left.title.localeCompare(right.title, "en") ||
      left.recordId.localeCompare(right.recordId, "en"),
  );
}

export function assertUniqueFamilySlugs(
  records: ReadonlyArray<PublicRouteRecord>,
): void {
  const recordsByFamilySlug = new Map<string, PublicRouteRecord[]>();

  for (const record of records) {
    const key = `${record.family}:${record.slug}`;
    const matches = recordsByFamilySlug.get(key) ?? [];
    matches.push(record);
    recordsByFamilySlug.set(key, matches);
  }

  for (const matches of recordsByFamilySlug.values()) {
    if (matches.length < 2) continue;

    const [first] = matches;
    const recordIds = matches
      .map((record) => record.recordId)
      .sort((left, right) => left.localeCompare(right, "en"));

    throw new Error(
      `Duplicate eligible "${first.family}" slug "${first.slug}" is used by records: ${recordIds.join(", ")}.`,
    );
  }
}

export function prepareEligibleFamilyRecords<T extends PublicRouteRecord>(
  records: ReadonlyArray<T>,
  family: PublicRouteRecord["family"],
): T[] {
  const eligible = records.filter(
    (record) => record.family === family && isPublicationEligible(record),
  );

  for (const record of eligible) {
    assertSafeRouteSlug(record.slug, record.recordId);
  }

  assertUniqueFamilySlugs(eligible);
  return sortPublicRecords(eligible);
}

export function requireExpectedRecord<T extends PublicRouteRecord>(
  records: ReadonlyArray<T>,
  recordId: string,
  family: PublicRouteRecord["family"],
): T {
  const record = records.find((candidate) => candidate.recordId === recordId);

  if (!record) {
    throw new Error(
      `Required public "${family}" record "${recordId}" is missing or publication-ineligible.`,
    );
  }

  if (record.family !== family) {
    throw new Error(
      `Required record "${recordId}" belongs to "${record.family}", expected "${family}".`,
    );
  }

  return record;
}

export function requireFamilyRecords(
  records: ReadonlyArray<PublicRouteRecord>,
  family: PublicRouteRecord["family"],
): void {
  if (!records.some((record) => record.family === family)) {
    throw new Error(
      `The First Visual Vertical requires at least one eligible "${family}" record.`,
    );
  }
}

export function projectDetailPath(slug: string, sourceId: string): string {
  assertSafeRouteSlug(slug, sourceId);
  return `/projects/${slug}/`;
}

export function assertNoRouteCollisions(
  routes: ReadonlyArray<GeneratedRoute>,
): void {
  const sourcesByPath = new Map<string, string[]>();

  for (const route of routes) {
    const sources = sourcesByPath.get(route.path) ?? [];
    sources.push(route.sourceId);
    sourcesByPath.set(route.path, sources);
  }

  for (const [path, sources] of sourcesByPath) {
    if (sources.length < 2) continue;

    throw new Error(
      `Generated route collision at "${path}" from: ${[...sources]
        .sort((left, right) => left.localeCompare(right, "en"))
        .join(", ")}.`,
    );
  }
}
