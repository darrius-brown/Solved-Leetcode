# Write your MySQL query statement below
select MAX(num) as num from
(
SELECT num
FROM MYNUMBERS
GROUP BY num having count(num)=1) a