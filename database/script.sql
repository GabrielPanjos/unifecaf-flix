-- UniFECAF Flix — script de criação do banco e carga inicial
-- Execute no MySQL Workbench ou: mysql -u root -p < database/script.sql
-- ATENÇÃO: se o professor forneceu um script oficial, use-o no lugar deste
-- e ajuste os nomes das colunas em src/models/filmeModel.js.

SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS db_unifecaf_flix CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE db_unifecaf_flix;

DROP TABLE IF EXISTS tb_filme;

CREATE TABLE tb_filme (
  id                INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome              VARCHAR(100)  NOT NULL,
  sinopse           TEXT          NOT NULL,
  duracao           TIME          NOT NULL,
  data_lancamento   DATE          NOT NULL,
  data_relancamento DATE          NULL,
  foto_capa         VARCHAR(255)  NULL,
  valor_unitario    DECIMAL(6,2)  NOT NULL DEFAULT 0.00
);

INSERT INTO tb_filme (nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario) VALUES
('O Poderoso Chefão', 'A saga da família Corleone, uma das mais poderosas famílias mafiosas de Nova York, e a transição de poder de Vito para seu filho Michael.', '02:55:00', '1972-03-24', NULL, 'https://exemplo.com/capas/poderoso-chefao.jpg', 19.90),
('Matrix', 'Um programador descobre que a realidade é uma simulação criada por máquinas e se une a rebeldes para libertar a humanidade.', '02:16:00', '1999-03-31', '2021-12-22', 'https://exemplo.com/capas/matrix.jpg', 14.90),
('Interestelar', 'Um grupo de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade.', '02:49:00', '2014-11-06', NULL, 'https://exemplo.com/capas/interestelar.jpg', 17.50),
('Cidade de Deus', 'A vida de jovens em uma favela do Rio de Janeiro entre os anos 60 e 80, marcada pelo crescimento do crime organizado.', '02:10:00', '2002-08-30', NULL, 'https://exemplo.com/capas/cidade-de-deus.jpg', 12.00),
('Clube da Luta', 'Um homem insone e insatisfeito com a vida forma um clube secreto de lutas com um vendedor de sabão carismático.', '02:19:00', '1999-10-15', NULL, 'https://exemplo.com/capas/clube-da-luta.jpg', 13.90),
('A Origem', 'Um ladrão especializado em invadir sonhos recebe a missão de implantar uma ideia na mente de um empresário.', '02:28:00', '2010-07-16', NULL, 'https://exemplo.com/capas/a-origem.jpg', 16.90),
('Central do Brasil', 'Uma ex-professora que escreve cartas para analfabetos acompanha um menino em busca do pai pelo interior do Brasil.', '01:50:00', '1998-04-03', NULL, 'https://exemplo.com/capas/central-do-brasil.jpg', 11.50),
('O Rei Leão', 'O jovem leão Simba foge após a morte do pai e precisa decidir se volta para reivindicar seu lugar como rei.', '01:28:00', '1994-07-08', '2019-07-19', 'https://exemplo.com/capas/rei-leao.jpg', 10.90);
