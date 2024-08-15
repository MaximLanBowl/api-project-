WITH daily_aggregate AS (
    SELECT date::date AS daily_date,
        SUM(gas) OVER (
            ORDER BY date::date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS cumulative_sum
    FROM test_txs
)
SELECT daily_date,
    cumulative_sum
FROM daily_aggregate;