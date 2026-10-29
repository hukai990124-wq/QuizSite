-- Preserve existing transcripts while adding bounded, account-owned memory.
ALTER TABLE gavin_conversations ADD COLUMN summary TEXT NOT NULL DEFAULT ''
  CHECK (length(summary) <= 1600);
