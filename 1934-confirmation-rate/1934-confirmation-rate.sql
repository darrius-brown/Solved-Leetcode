# Write your MySQL query statement below
with cte1 as(select user_id,  sum(if(action="confirmed",1,0))/count(user_id) as confirmation_rate from Confirmations c
right join signups s
using(user_id)
group by user_id)

select user_id, round(confirmation_rate, 2) as confirmation_rate from cte1;