SELECT * FROM cidades

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 25)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 19)

INSERT INTO 
    cidades (nome, area, estado_id)
VALUES (
    'Caruaru', 
    920.6, 
    (SELECT id FROM estados WHERE sigla = 'PE')
)

INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte', 
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE') 
)

-- SET @count = 0;
-- UPDATE cidades SET cidades.id = @count:= @count + 1; -- Reorganizar os Ids.

-- Cuidado com isso. Essa prática pode detonar seu banco de dados com relação a performance. 
-- Imagine que A pessoa de id = 3 esteja relacionada em mais 30 tabelas. Ao mudar o id de 3 para 2, 
-- todas os outros relacionamentos quebrariam com isso e um update nessas outras tabelas também seria necessário. 
-- Esse tipo de update não tem necessidade alguma de acontecer.