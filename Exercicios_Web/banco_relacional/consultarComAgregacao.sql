SELECT
    regiao as 'Região',
    SUM(populacao) AS Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC

SELECT
    SUM(populacao) AS Total -- Soma de toda população
FROM estados

SELECT
    AVG(populacao) AS Total -- Média de toda população
FROM estados