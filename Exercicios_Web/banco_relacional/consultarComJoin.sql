SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT -- Plugin não esta gerando da mesma forma que é gerado no Workbench
    e.nome AS Estado, 
    c.nome AS Cidade, 
    e.regiao AS Região
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT
    c.nome AS Cidade, 
    e.nome AS Estado, 
    e.regiao AS Região
FROM estados e
INNER JOIN cidades c on e.id = c.estado_id