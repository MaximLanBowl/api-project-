SELECT *
FROM test_txs
WHERE block_height IN (
        SELECT block_height
        FROM (
                SELECT block_height
                ORDER BY block_height DESC
                LIMIT $1
            ) AS subquery
    )
ORDER BY block_height DESC;