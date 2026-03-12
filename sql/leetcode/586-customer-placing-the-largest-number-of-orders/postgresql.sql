SELECT customer_number
FROM (
    SELECT customer_number,
        RANK() OVER(ORDER BY COUNT(*) DESC) AS customer_rank
    FROM Orders
    GROUP BY customer_number
)
WHERE customer_rank = 1;