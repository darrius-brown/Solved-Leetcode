# Write your MySQL query statement below
WITH base AS (SELECT requester_id, accepter_id
FROM RequestAccepted
UNION ALL
SELECT accepter_id, requester_id
FROM RequestAccepted)

SELECT requester_id as id
    , COUNT(DISTINCT accepter_id) as num
FROM base
GROUP BY requester_id
ORDER BY 2 DESC
LIMIT 1