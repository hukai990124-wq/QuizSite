-- One bounded, account-owned conversation; a cleared row retains its revision
-- so stale clients cannot recreate deleted messages.
CREATE TABLE IF NOT EXISTS gavin_conversations (
  user_id TEXT PRIMARY KEY NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  messages_json TEXT NOT NULL CHECK (json_valid(messages_json) AND json_type(messages_json) = 'array'),
  revision INTEGER NOT NULL CHECK (revision > 0),
  updated_at INTEGER NOT NULL
);
