import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";

import * as schema from "~/db/schema";

export type AppDatabase = BetterSQLite3Database<typeof schema>;

const seedSubmissions: Array<typeof schema.submissions.$inferInsert> = [
  {
    creatorName: "Maya Chen",
    campaignName: "Coastal Run Club",
    contentUrl: "https://example.com/content/coastal-run",
    status: "pending",
    createdAt: "2026-09-10T01:15:00.000Z",
  },
  {
    creatorName: "Noah Williams",
    campaignName: "Sunday Reset",
    contentUrl: "https://example.com/content/sunday-reset",
    status: "pending",
    createdAt: "2026-09-09T23:40:00.000Z",
  },
  {
    creatorName: "Aisha Patel",
    campaignName: "Everyday Hydration",
    contentUrl: "https://example.com/content/hydration",
    status: "pending",
    createdAt: "2026-09-09T06:20:00.000Z",
  },
  {
    creatorName: "Leo Martin",
    campaignName: "Better Mornings",
    contentUrl: "https://example.com/content/better-mornings",
    status: "approved",
    createdAt: "2026-09-08T04:10:00.000Z",
    reviewedAt: "2026-09-08T07:30:00.000Z",
  },
  {
    creatorName: "Ruby Jones",
    campaignName: "Move More September",
    contentUrl: "https://example.com/content/move-more",
    status: "changes_requested",
    reviewerFeedback: "Show the product in the opening five seconds.",
    createdAt: "2026-09-07T22:05:00.000Z",
    reviewedAt: "2026-09-08T00:20:00.000Z",
  },
];

export function seedBaseData(database: AppDatabase): void {
  database.insert(schema.submissions).values(seedSubmissions).run();
  database
    .insert(schema.reviewEvents)
    .values([
      {
        submissionId: 4,
        action: "approved",
        createdAt: "2026-09-08T07:30:00.000Z",
      },
      {
        submissionId: 5,
        action: "changes_requested",
        feedback: "Show the product in the opening five seconds.",
        createdAt: "2026-09-08T00:20:00.000Z",
      },
    ])
    .run();
}

