# Interviewer guide

This challenge is designed to fit inside a strict two-hour timebox. The starter
already handles framework setup, database creation, seed data, page structure,
and form parsing so the candidate can work on behaviour rather than plumbing.

## Suggested scorecard

Score each area from 1–4. Use the evidence in the submission and follow-up
conversation rather than treating the rubric as an automated checklist.

| Area | What good evidence looks like |
| --- | --- |
| Correctness | Filters work, valid reviews persist, invalid transitions are rejected |
| Data integrity | Submission update and review event use one transaction |
| Full-stack reasoning | UI, route action, service, and database form a coherent flow |
| Code quality | Types and names clarify the domain; logic lives outside the route |
| Tests | Tests target business rules and failure cases, not implementation details |
| Product judgment | Success, pending, empty, and error states are understandable |
| Communication | Notes explain trade-offs, assumptions, and next steps concisely |

## Strong follow-up questions

- Where did you choose to spend your time, and why?
- What could go wrong if two reviewers act on the same submission?
- How would you make the transition safe under real production concurrency?
- What would change if a review decision needed to be reversible?
- Which test gives you the most confidence in the implementation?
- What would you monitor after shipping this workflow?

## Signals by level

For a mid-level candidate, look for a complete path, sensible separation of
concerns, and direct tests of the stated rules.

For a senior candidate, also look for explicit concurrency reasoning, an
appropriate conditional update or equivalent safeguard, transaction boundaries,
and disciplined decisions about what not to build.

Do not penalise candidates for leaving cosmetic work unfinished when their note
shows sound prioritisation within the timebox.

