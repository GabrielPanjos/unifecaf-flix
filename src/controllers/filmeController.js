// CONTROLLER: recebe a requisição, valida a entrada, chama o Model e
// devolve a resposta com o status HTTP adequado.
const filmeModel = require('../models/filmeModel');

// Monta o corpo padrão das respostas
const resposta = (status, extra) => ({ status, status_code: status, ...extra });

// GET /v1/controle-filmes/filme
async function listarFilmes(req, res, next) {
  try {
    const filmes = await filmeModel.selectAll();
    if (filmes.length === 0) {
      return res.status(404).json(resposta(404, { message: 'Nenhum filme encontrado.' }));
    }
    return res.status(200).json(resposta(200, { items: filmes.length, filmes }));
  } catch (erro) {
    next(erro);
  }
}

// GET /v1/controle-filmes/filme/:id
async function buscarFilmePorId(req, res, next) {
  try {
    const id = Number(req.params.id);
    // Validação: id precisa ser um inteiro positivo
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json(resposta(400, { message: 'O id deve ser um número inteiro positivo.' }));
    }
    const filme = await filmeModel.selectById(id);
    if (!filme) {
      return res.status(404).json(resposta(404, { message: `Filme com id ${id} não encontrado.` }));
    }
    return res.status(200).json(resposta(200, { filme }));
  } catch (erro) {
    next(erro);
  }
}

// GET /v1/controle-filmes/filtro/filme?nome=xxx
async function filtrarFilmes(req, res, next) {
  try {
    const nome = typeof req.query.nome === 'string' ? req.query.nome.trim() : '';
    // Validação: o parâmetro nome é obrigatório
    if (!nome) {
      return res.status(400).json(resposta(400, { message: 'Informe o parâmetro "nome" na query string. Ex.: ?nome=matrix' }));
    }
    const filmes = await filmeModel.selectByTexto(nome);
    if (filmes.length === 0) {
      return res.status(404).json(resposta(404, { message: `Nenhum filme encontrado para "${nome}".` }));
    }
    return res.status(200).json(resposta(200, { items: filmes.length, filmes }));
  } catch (erro) {
    next(erro);
  }
}

module.exports = { listarFilmes, buscarFilmePorId, filtrarFilmes };
