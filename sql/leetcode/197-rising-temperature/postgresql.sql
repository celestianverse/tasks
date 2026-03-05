SELECT next.id
FROM Weather AS prev
JOIN Weather AS next ON next.recordDate = prev.recordDate + 1
WHERE next.temperature > prev.temperature;