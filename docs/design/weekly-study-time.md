# Account weekly study time

Show a compact “本周已学习 HH:MM:SS” block inside the existing signed-in account dialog, with matching English/Japanese copy. No new homepage counter, chart or history. Count foreground visible visits on all shared-theme pages only after session detection. Do not import historical guest/local daily time. Existing local daily counter and quiz progress stay unchanged.

Weeks start Monday 00:00 at fixed UTC−8 (Monday 08:00 UTC), without daylight saving. At the boundary, reads/UI immediately show the new week even before cleanup runs. A weekly Worker cron deletes only expired weekly-stat rows; no historical weekly totals remain in the live database. Account deletion cascades to these rows. Cloudflare-managed database recovery retention is separate from the live data retention.

## API and data contract

- GET `/api/study-time`: existing secure session required. Return `{totalMs,weekStart,resetsAt,serverNow}` for the authenticated user only, with no-store and existing security headers.
- POST same route: existing same-origin/JSON mutation guard and session required. Body `{username,start,end}` contains a bounded visible interval (at most 30 seconds, no older than 60 seconds, at most 2 seconds ahead, clipped to server now/current week). Username must match the session exactly to avoid in-flight requests being assigned to a newly signed-in account. Never accept a supplied account ID or cumulative total.
- Atomic D1 upsert stores one row per user: `user_id` FK/cascade/PK, `week_start` UTC epoch milliseconds, `total_ms` integer 0–604800000, `last_end` integer. Add only the part beyond the prior high-water mark. Duplicate intervals and overlapping tabs/devices do not increase totals twice. Out-of-order earlier intervals can be undercounted; this is a learning aid, not an audit/attendance ledger.
- Responses: 400 malformed interval/body, 401 missing/changed/expired session, 403 cross-origin or wrong content type, 405 unsupported method, 503 storage unavailable. Error bodies do not expose database/session details.
- Client uses the existing one-second visible timer's bounded intervals; synchronizes about every 15 seconds and on account open/hide/navigation. A small in-memory retry queue expires after 60 seconds; no offline/week-old backfill, cross-account migration or sensitive storage. Network failure is shown, not silently reported as zero/success. Server offset is derived from status responses. Rollovers invalidate old display data. Guests send no study-time API requests.
- Public account frontend hook: read-only `QuizSiteAccount.getUser()` returns username or null; `quizsite:account-changed` and `quizsite:account-opened` carry no credentials. Weekly timer code owns display/network behavior; login/password/session logic is unchanged.

## Verification and release

Tests cover fixed PST boundaries (including summer/year boundaries), midnight clipping, replay/concurrency, duplicate tabs/devices, invalid/future/oversized/cross-origin requests, session ownership, deletion cascade, cleanup isolation and additive migration rollback/reapply. Browser checks account popover, three languages, tracking on a quiz page, hidden pause, account switch, failures, week rollover, mobile and unchanged daily label. No model calls.

Apply additive migration `0004_weekly_study_time.sql` before publishing dependent code. Existing code ignores the new table. Code rollback leaves the unused table safely in place; the optional compensating SQL `DROP TABLE account_weekly_study;` is tested locally only, not auto-applied remotely. New writes fail closed if migration is missing without breaking login/quizzes.

Operations: [D1 migration commands](https://developers.cloudflare.com/workers/wrangler/commands/d1/), [Cron configuration](https://developers.cloudflare.com/workers/wrangler/configuration/#triggers). Cron is `0 8 * * MON`, using server time when cleanup actually executes so a delayed trigger never deletes current-week data. No new service, secret, password changes or AI quota consumption.
