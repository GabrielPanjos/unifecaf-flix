# UniFECAF Flix — API de Filmes

API REST em **Node.js + Express + MySQL**, organizada no padrão **MVC**, que expõe o acervo de filmes da plataforma UniFECAF Flix.

## Tecnologias
Node.js (18+), Express, mysql2 (consultas parametrizadas), dotenv, cors, MySQL/MariaDB.

## Estrutura
```
unifecaf-flix/
├── database/script.sql          # criação do banco, tabela e carga inicial
├── postman/UniFECAF-Flix.postman_collection.json
├── src/
│   ├── config/database.js       # pool de conexões MySQL
│   ├── models/filmeModel.js     # MODEL: acesso ao banco
│   ├── controllers/filmeController.js  # CONTROLLER: validação e status HTTP
│   ├── routes/filmeRoutes.js    # ROUTES: URLs → controller
│   ├── middlewares/errorHandler.js     # 404 de rota e erro 500
│   ├── app.js                   # configuração do Express
│   └── server.js                # inicia o servidor
├── .env.example
└── package.json
```
No padrão MVC de uma API, a **View** é a resposta JSON devolvida pelo Controller.

## Como executar
1. Instale Node.js 18+ e MySQL.
2. Rode o script `database/script.sql` (MySQL Workbench: File → Open SQL Script → executar; ou `mysql -u root -p < database/script.sql`).
3. Copie `.env.example` para `.env` e preencha usuário e senha do seu MySQL.
4. `npm install`
5. `npm start` → API em `http://localhost:3000`.

## Endpoints
| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/v1/controle-filmes/filme` | Lista todos os filmes | 200, 404, 500 |
| GET | `/v1/controle-filmes/filme/:id` | Busca filme pelo id | 200, 400 (id inválido), 404, 500 |
| GET | `/v1/controle-filmes/filtro/filme?nome=xxx` | Filtra por parte do nome ou da sinopse | 200, 400 (sem `nome`), 404, 500 |

Exemplo: `GET /v1/controle-filmes/filtro/filme?nome=matrix`

## Testes no Postman
Importe `postman/UniFECAF-Flix.postman_collection.json` (Import → arquivo). A coleção tem 9 requisições com testes automáticos; rode com **Run collection**.
