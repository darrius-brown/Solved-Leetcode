# Write your MySQL query statement below
select u.name , if(r.distance is null , 0 ,sum(r.distance)) as travelled_distance
from users u
left join rides r
on r.user_id = u.id
group by r.user_id
order by travelled_distance desc , name asc