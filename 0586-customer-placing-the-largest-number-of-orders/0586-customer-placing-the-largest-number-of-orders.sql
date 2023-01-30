# Write your MySQL query statement below
select a.customer_number from 
(select customer_number, count(order_number) as cn from orders group by customer_number order by count(order_number) desc limit 1) a 