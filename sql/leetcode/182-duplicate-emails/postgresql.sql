SELECT email
FROM Person
GROUP BY email
HAVING count(email) > 1 and email IS NOT NULL;