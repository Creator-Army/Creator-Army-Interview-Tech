import { eq } from "drizzle-orm";

import { submissions } from "~/db/schema";
import { createTestDb, seedBaseData } from "~/test/setup";

let testDb: ReturnType<typeof createTestDb>;

vi.mock("~/db", () => ({
  get db() {
    return testDb;
  },
}));

const { getSubmissionCounts, listSubmissions, reviewSubmission } = await import(
  "~/services/submission-service"
);

beforeEach(() => {
  testDb = createTestDb();
  seedBaseData(testDb);
});

describe("submission service", () => {
  it("lists seeded submissions newest first", () => {
    const result = listSubmissions({});

    expect(result).toHaveLength(5);
    expect(result[0]?.creatorName).toBe("Maya Chen");
  });

  it("returns counts for the queue navigation", () => {
    expect(getSubmissionCounts()).toEqual({
      all: 5,
      pending: 3,
      approved: 1,
      changes_requested: 1,
    });
  });

  it.todo("filters the queue by submission status");

  it.todo("reviews a pending submission and records its review event");

  it("leaves reviewed submissions available for candidate tests", () => {
    const approved = testDb
      .select()
      .from(submissions)
      .where(eq(submissions.status, "approved"))
      .all();

    expect(approved).toHaveLength(1);
    expect(reviewSubmission).toBeTypeOf("function");
  });
});

