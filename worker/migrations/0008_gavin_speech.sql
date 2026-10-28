-- Daily site-wide request cap for the optional online speech feature.
CREATE TABLE IF NOT EXISTS gavin_speech_usage (
  day TEXT PRIMARY KEY NOT NULL,
  requests INTEGER NOT NULL CHECK (requests >= 0)
);
