SELECT e.name, b.bonus
FROM Employee AS e
LEFT JOIN Bonus AS b ON e.empId = b.empId
WHERE NOT EXISTS(
    SELECT 1
    FROM Bonus AS b2
    WHERE e.empId = b2.empId AND b2.bonus >= 1000
);