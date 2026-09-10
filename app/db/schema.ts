import type Database from "better-sqlite3";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const submissionStatuses = [
  "pending",
  "approved",
  "changes_requested",
] as const;

export type SubmissionStatus = (typeof submissionStatuses)[number];

export const submissions = sqliteTable("submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  creatorName: text("creator_name").notNull(),
  campaignName: text("campaign_name").notNull(),
  contentUrl: text("content_url").notNull(),
  status: text("status", { enum: submissionStatuses })
    .notNull()
    .default("pending"),
  reviewerFeedback: text("reviewer_feedback"),
  createdAt: text("created_at").$defaultFn(() => new Date().toISOString()),
  reviewedAt: text("reviewed_at"),
});

export const reviewEvents = sqliteTable("review_events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  submissionId: integer("submission_id")
    .notNull()
    .references(() => submissions.id),
  action: text("action", {
    enum: ["approved", "changes_requested"],
  }).notNull(),
  feedback: text("feedback"),
  createdAt: text("created_at").$defaultFn(() => new Date().toISOString()),
});

export function initialiseSchema(sqlite: Database.Database): void {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      creator_name TEXT NOT NULL,
      campaign_name TEXT NOT NULL,
      content_url TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      reviewer_feedback TEXT,
      created_at TEXT NOT NULL,
      reviewed_at TEXT,
      CHECK (status IN ('pending', 'approved', 'changes_requested'))
    );

    CREATE TABLE IF NOT EXISTS review_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      submission_id INTEGER NOT NULL REFERENCES submissions(id),
      action TEXT NOT NULL,
      feedback TEXT,
      created_at TEXT NOT NULL,
      CHECK (action IN ('approved', 'changes_requested'))
    );
  `);
}

