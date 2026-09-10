# Creator Army engineering interview

## Timebox

Spend **no more than two hours** on this exercise. Stop when the time is up, even if you have not finished everything.

## The task

You are completing a small content-review workflow for a Creator Army campaign manager.

Creators submit content for brand campaigns. The campaign manager needs to filter the review queue, approve suitable content, or request changes with feedback.

The starter project already includes the UI, a local SQLite database with seeded submissions, database schemas, form parsing, and a small test suite.

Complete the missing code so a campaign manager can:

1. Filter submissions by `pending`, `approved`, or `changes requested`.
2. Approve a pending submission.
3. Request changes to a pending submission and leave feedback.
4. Refresh the page and still see the saved review decision.

## Requirements

Your solution must follow these rules:

- Build the solution with Next.js and TypeScript.
- Only a `pending` submission can be reviewed.
- Requesting changes requires non-empty feedback.
- Every successful review adds a row to `review_events`.
- The submission update and review event are saved in one transaction.
- A failed review returns a useful error without changing the data.
- Tests cover the behaviour you implement.

You may change any code in the repository.

## Getting started

You will need Node.js 22+ and pnpm 11+.

```bash
pnpm install
pnpm dev
```

Open the local URL shown in your terminal. The app creates its database at `.data/interview.db`.

Useful commands:

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm db:reset
```

Look for `TODO(candidate)` comments and skipped tests as starting points. You are free to take a different approach if you prefer.

## Out of scope

Do not add authentication, file uploads, deployment, external APIs, real-time updates, or a production migration system.
Visual changes are optional unless they are needed to make success, failure, or submission status clear.

## What to submit

Submit your completed project with a short note covering:

- What you completed
- Important decisions or trade-offs
- What you would improve with more time
- Any assumptions you made
