# Write your MySQL query statement below
WITH A AS
(
    SELECT
        CASE
            WHEN income < 20000 THEN 'Low Salary'
            WHEN income >= 20000 AND income <= 50000 THEN 'Average Salary'
            ELSE 'High Salary'
        END AS category
    FROM Accounts
    UNION ALL
    SELECT 'Low Salary' AS category
    UNION ALL
    SELECT 'Average Salary' AS category
    UNION ALL
    SELECT 'High Salary' AS category
)

SELECT category, COUNT(category) -  1 AS accounts_count
FROM A
GROUP BY category