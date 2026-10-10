CREATE TABLE IF NOT EXISTS ai_state (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  stopped INTEGER NOT NULL DEFAULT 0 CHECK (stopped IN (0, 1))
);
INSERT OR IGNORE INTO ai_state (id, stopped) VALUES (1, 0);

-- Keep global consumption after account deletion; never store questions or replies.
CREATE TABLE IF NOT EXISTS ai_requests (
  id TEXT PRIMARY KEY NOT NULL,
  user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  day TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  reserved INTEGER NOT NULL CHECK (reserved >= 0),
  charged INTEGER CHECK (charged >= 0),
  status TEXT NOT NULL CHECK (status IN ('pending', 'complete', 'failed'))
);
CREATE INDEX IF NOT EXISTS ai_requests_user_day ON ai_requests(user_id, day);
CREATE INDEX IF NOT EXISTS ai_requests_day ON ai_requests(day);
