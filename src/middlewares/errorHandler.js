// Tratamento centralizado de erros: rota inexistente (404) e falhas internas (500).
function naoEncontrado(req, res) {
  res.status(404).json({ status: 404, status_code: 404, message: `Rota ${req.method} ${req.originalUrl} não existe.` });
}

// eslint-disable-next-line no-unused-vars
function erroInterno(erro, req, res, next) {
  console.error('Erro interno:', erro.message);
  // Não expõe detalhes do erro ao cliente (boa prática de segurança)
  res.status(500).json({ status: 500, status_code: 500, message: 'Erro interno do servidor.' });
}

module.exports = { naoEncontrado, erroInterno };
