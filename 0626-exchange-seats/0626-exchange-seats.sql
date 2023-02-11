# Write your MySQL query statement below
SELECT s1.id,
    CASE 
        WHEN s1.id%2 =1 THEN IFNULL(s2.student, s1.student)
        ELSE IFNULL(s3.student, s1.student)
    END AS student
FROM seat s1
LEFT JOIN seat s2 ON s1.id = s2.id - 1
LEFT JOIN seat s3 ON s1.id = s3.id + 1