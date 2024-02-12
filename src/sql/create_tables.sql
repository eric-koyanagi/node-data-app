CREATE TABLE IF NOT EXISTS models (
  model_key VARCHAR(255) PRIMARY KEY,
  model_id INT GENERATED BY DEFAULT AS IDENTITY
);

CREATE TABLE IF NOT EXISTS configurations (
  config_id INT PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  model_id INT,
  product_name VARCHAR(255), 
  advertising_names JSONB, 
  brand VARCHAR(255),
  features JSONB,
  firmware VARCHAR(255),
  provisioning JSONB,
  published BOOLEAN,
  testing_status VARCHAR(255),
  testing_whitelist JSONB,
  bluetooth_data_chunks BOOLEAN,
  bluetooth_mtu INT
);

CREATE INDEX IF NOT EXISTS idx_model_id ON models(model_id);
CREATE INDEX IF NOT EXISTS idx_model_key_id ON models(model_key, model_id);
CREATE INDEX IF NOT EXISTS idx_config_model_id ON configurations(model_id);
CREATE INDEX IF NOT EXISTS idx_config_product_brand ON configurations(brand);
CREATE INDEX IF NOT EXISTS idx_config_product_name ON configurations(product_name);
CREATE INDEX IF NOT EXISTS idx_config_published ON configurations(published);