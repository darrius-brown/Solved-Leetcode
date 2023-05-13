# Write your MySQL query statement below
select p.product_id, 
round(SUM(p.price * U.units) / sum(u.units), 2) average_price
from Prices p, UnitsSold u
where p.product_id= u.product_id 
and  u.purchase_date between start_date and end_date 
group by p.product_id