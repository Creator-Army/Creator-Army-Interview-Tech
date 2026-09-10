# Creator Army full-stack engineering challenge

Build the missing parts of a small content-review workflow used by a campaign
manager at Creator Army.

## Timebox

Please spend **no more than two hours** on this challenge. We care more about
clear decisions and a coherent slice of working software than completing every
possible improvement.

If you reach the time limit, stop and use the notes section below to tell us
what you would do next.

## The scenario

Creators submit content for brand campaigns. A campaign manager needs to find
submissions awaiting review, approve good work, or request changes with useful
feedback.

The starter app includes:

- A React Router application with a review queue UI
- A local SQLite database with five seeded submissions
- Drizzle schemas and database setup
- Server-side form parsing and validation
- An intentionally unfinished submission service
- A small Vitest suite with two target behaviours marked as TODO

## Your task

Complete these three behaviours:

1. **Filter the queue** by `pending`, `approved`, or `changes requested`.
2. **Review a pending submission** by approving it or requesting changes.
3. **Persist the review** so the new state remains after refreshing the page.

Business rules:

- Only a `pending` submission can be reviewed.
- Requesting changes requires non-empty feedback.
- Every successful review must append a row to `review_events`.
- Updating the submission and recording its event must happen atomically.
- A rejected operation should return a useful error and leave the data intact.

Add or complete tests for the behaviour you implement. You may change any code
in the repository, but a large rewrite should not be necessary.

## Getting started

Requirements: Node.js 22+ and pnpm 10+.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:5173>. The database is created automatically at
`.data/interview.db`.

Useful commands:

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm db:reset
```

## What is out of scope

Do not add authentication, file uploads, deployment, external APIs, real-time
updates, or a production migration system. Visual polish beyond making your
new states clear and usable is optional.

## Submission notes

Include a short note with your submission covering:

- What you completed
- Important decisions or trade-offs
- What you would improve with more time
- Any assumptions you made

## What we evaluate

We look at correctness, end-to-end reasoning, code clarity, database safety,
testing choices, and how clearly the interface communicates success or failure.
We do not reward working past the two-hour timebox.
