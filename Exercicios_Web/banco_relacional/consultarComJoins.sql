SELECT * FROM prefeitos;
SELECT * FROM cidades;

SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id;
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;
-- SELECT * FROM cidades c FULL JOIN prefeitos p ON c.id = p.cidade_id; comando não suportado pelo mysql

-- Pode ser substituido pelo UNION ALL dessa forma tera uma consulta FULL, removendo o ALL tira as duplicatas
SELECT * FROM cidades c LEFT OUTER JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;