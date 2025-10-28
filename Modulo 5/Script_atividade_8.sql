-- Criação das tabelas
----------------------------------------------------------------------------------
/*
CREATE TABLE Cardapio (
    cardapio_id SERIAL PRIMARY KEY,
    nome_cafe VARCHAR(100) NOT NULL UNIQUE,
    descricao VARCHAR(255),
    preco_unitario NUMERIC(5, 2) NOT NULL CHECK (preco_unitario > 0)
);

CREATE TABLE Comanda (
    comanda_id SERIAL PRIMARY KEY,
    data_venda DATE NOT NULL DEFAULT CURRENT_DATE,
    numero_mesa INTEGER NOT NULL CHECK (numero_mesa > 0),
    nome_cliente VARCHAR(100)
);

CREATE TABLE Item_Comanda (
    comanda_id INTEGER REFERENCES Comanda(comanda_id),
    cardapio_id INTEGER REFERENCES Cardapio(cardapio_id),
    quantidade INTEGER NOT NULL CHECK (quantidade > 0),
    PRIMARY KEY (comanda_id, cardapio_id)
);
*/


-- Inserts
------------------------------------------------------------------------------------
-- 1. INSERTS na Tabela Cardapio
/*
INSERT INTO Cardapio (nome_cafe, descricao, preco_unitario) VALUES
('Expresso', 'Café puro, concentrado, tirado na hora.', 6.50),
('Latte', 'Dose de expresso com leite vaporizado e uma fina camada de espuma.', 10.00),
('Cappuccino', 'Expresso, leite vaporizado e chocolate em pó.', 11.50),
('Mocha Gelado', 'Expresso, leite gelado, calda de chocolate e chantilly.', 14.50),
('Chá Earl Grey', 'Clássico chá preto com essência de bergamota.', 8.00);
*/

-- 2. INSERTS na Tabela Comanda (As Vendas Registradas)
/*
INSERT INTO Comanda (data_venda, numero_mesa, nome_cliente) VALUES
('2025-10-25', 5, 'Ana Silva'),     -- comanda_id = 1
('2025-10-25', 12, 'Pedro Rocha'),  -- comanda_id = 2
('2025-10-26', 3, 'Mariana Gomes'), -- comanda_id = 3
('2025-10-27', 8, 'Equipe Alpha'),   -- comanda_id = 4
('2025-10-27', 1, NULL);            -- comanda_id = 5 (cliente não informado)
*/

-- 3. INSERTS na Tabela Item_Comanda (Os Itens Vendidos)
/*
INSERT INTO Item_Comanda (comanda_id, cardapio_id, quantidade) VALUES
(1, 1, 2), -- 2 Expressos (ID 1)
(1, 2, 1); -- 1 Latte (ID 2)

INSERT INTO Item_Comanda (comanda_id, cardapio_id, quantidade) VALUES
(2, 3, 1); -- 1 Cappuccino (ID 3)

INSERT INTO Item_Comanda (comanda_id, cardapio_id, quantidade) VALUES
(3, 4, 1), -- 1 Mocha Gelado (ID 4)
(3, 5, 1); -- 1 Chá Earl Grey (ID 5)

INSERT INTO Item_Comanda (comanda_id, cardapio_id, quantidade) VALUES
(4, 1, 4), -- 4 Expressos (ID 1)
(4, 2, 2), -- 2 Lattes (ID 2)
(4, 3, 1); -- 1 Cappuccino (ID 3)

INSERT INTO Item_Comanda (comanda_id, cardapio_id, quantidade) VALUES
(5, 5, 2); -- 2 Chás Earl Grey (ID 5)*/
*/


-- Consultas no banco (Questões da atividade)
-------------------------------------------------------------------------------------
-- Questão 1
select * from cardapio order by cardapio.nome_cafe

-- Questão 2
select * from comanda 
inner join item_comanda on comanda.comanda_id = item_comanda.comanda_id 
inner join cardapio on cardapio.cardapio_id = item_comanda.cardapio_id
order by (comanda.data_venda,comanda.comanda_id,cardapio.nome_cafe)


-- Questão 3
select comanda.comanda_id, comanda.data_venda, comanda.numero_mesa, comanda.nome_cliente, sum(item_comanda.quantidade * cardapio.preco_unitario) as preco_total from comanda 
inner join item_comanda on comanda.comanda_id = item_comanda.comanda_id 
inner join cardapio on cardapio.cardapio_id = item_comanda.cardapio_id
group by(comanda.comanda_id)
order by(comanda_id)

/*
-- Consulta para verificar se o agrupamento da questão 3 está correta
 select comanda.comanda_id, comanda.data_venda, comanda.numero_mesa, comanda.nome_cliente, item_comanda.quantidade, cardapio.preco_unitario, (item_comanda.quantidade * cardapio.preco_unitario) as preco_total from comanda 
inner join item_comanda on comanda.comanda_id = item_comanda.comanda_id 
inner join cardapio on cardapio.cardapio_id = item_comanda.cardapio_id
order by(comanda_id) 
*/

-- Questão 4
select comanda.comanda_id, comanda.data_venda, comanda.numero_mesa, comanda.nome_cliente, sum(item_comanda.quantidade * cardapio.preco_unitario) as preco_total from comanda 
inner join item_comanda on comanda.comanda_id = item_comanda.comanda_id 
inner join cardapio on cardapio.cardapio_id = item_comanda.cardapio_id
group by(comanda.comanda_id)
having count(item_comanda.comanda_id) > 1
order by(comanda_id)

/*
-- Consulta para verificar se o agrupamento da questão 4 está correta
select comanda.comanda_id, comanda.data_venda, comanda.numero_mesa, comanda.nome_cliente, sum(item_comanda.quantidade * cardapio.preco_unitario) as preco_total, count(item_comanda.comanda_id) as qnt_itens_diferentes from comanda
inner join item_comanda on comanda.comanda_id = item_comanda.comanda_id
inner join cardapio on cardapio.cardapio_id = item_comanda.cardapio_id
group by(comanda.comanda_id)
order by(comanda_id)
*/

-- Questão 5
select comanda.data_venda, sum(item_comanda.quantidade * cardapio.preco_unitario) as faturamento_total from comanda 
inner join item_comanda on comanda.comanda_id = item_comanda.comanda_id 
inner join cardapio on cardapio.cardapio_id = item_comanda.cardapio_id
group by(comanda.data_venda)
order by(comanda.data_venda)