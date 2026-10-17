ALTER TABLE users ADD COLUMN registration_country TEXT
  CHECK (registration_country IS NULL OR length(registration_country) = 2);

ALTER TABLE users ADD COLUMN registration_region TEXT
  CHECK (registration_region IS NULL OR length(registration_region) <= 128);
