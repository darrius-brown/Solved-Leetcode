# Write your MySQL query statement below
SELECT d.name AS Department , e.name AS Employee , e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId=d.id
WHERE(
    SELECT COUNT(DISTINCT salary)
    FROM Employee e1
    WHERE e1.departmentId = e.departmentId AND e1.salary >= e.salary
) <= 3;
