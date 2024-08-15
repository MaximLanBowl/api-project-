CREATE TABLE IF NOT EXISTS test_blocks (height INT8 PRIMARY KEY);
CREATE TABLE IF NOT EXISTS test_txs (
    hash VARCHAR(64) PRIMARY KEY,
    block_height INT8 NOT NULL,
    "from" VARCHAR(64) NOT NULL,
    "to" VARCHAR(64) NOT NULL,
    value VARCHAR(64) NOT NULL,
    gas BIGINT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (block_height) REFERENCES test_blocks(height)
);