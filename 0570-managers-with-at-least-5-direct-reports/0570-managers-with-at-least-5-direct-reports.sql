# Write your MySQL query statement below
select name from employee where id in (select managerId from EMPLOYEE
GROUP BY managerId having count(managerId)>=5 )