import { count, desc } from "drizzle-orm";

import { db } from "~/db";
import { submissions, type SubmissionStatus } from "~/db/schema";

export type ReviewSubmissionInput =
  | { submissionId: number; intent: "approve" }
  | {
      submissionId: number;
      intent: "request-changes";
      feedback: string;
    };

export type ReviewSubmissionResult =
  | { ok: true }
  | { ok: false; error: string };

export function listSubmissions({ status }: { status?: SubmissionStatus }) {
  // TODO(candidate): apply the optional status filter.
  void status;

  return db.select().from(submissions).orderBy(desc(submissions.createdAt)).all();
}

export function getSubmissionCounts(): Record<"all" | SubmissionStatus, number> {
  const rows = db
    .select({ status: submissions.status, count: count() })
    .from(submissions)
    .groupBy(submissions.status)
    .all();

  const counts: Record<"all" | SubmissionStatus, number> = {
    all: 0,
    pending: 0,
    approved: 0,
    changes_requested: 0,
  };

  for (const row of rows) {
    counts[row.status] = row.count;
    counts.all += row.count;
  }

  return counts;
}

export function reviewSubmission(
  input: ReviewSubmissionInput,
): ReviewSubmissionResult {
  // TODO(candidate): enforce the business rules, update the submission, and
  // append a review event in one transaction.
  void input;

  return {
    ok: false,
    error: "Reviewing submissions has not been implemented yet.",
  };
}

