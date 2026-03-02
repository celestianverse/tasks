SELECT c.name AS Customers
FROM Customers AS c
WHERE NOT EXISTS(
    SELECT 1
    FROM Orders AS o
    WHERE c.id = o.customerId
);