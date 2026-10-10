ALTER TABLE ai_requests ADD COLUMN visitor_hash TEXT;
CREATE INDEX IF NOT EXISTS ai_requests_visitor_day ON ai_requests(visitor_hash, day);
