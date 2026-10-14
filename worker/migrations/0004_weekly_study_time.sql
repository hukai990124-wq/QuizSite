CREATE TABLE IF NOT EXISTS account_weekly_study (
  user_id TEXT PRIMARY KEY NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  week_start INTEGER NOT NULL CHECK (week_start >= 0),
  total_ms INTEGER NOT NULL CHECK (total_ms >= 0 AND total_ms <= 604800000),
  last_end INTEGER NOT NULL CHECK (last_end >= week_start)
);
CREATE INDEX IF NOT EXISTS account_weekly_study_expiry_idx ON account_weekly_study(week_start);
