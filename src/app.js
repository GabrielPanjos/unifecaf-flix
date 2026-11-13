// Configuração do Express (separada do server.js para facilitar testes)
const express = require('express');
const cors = require('cors');
const filmeRoutes = require('./routes/filmeRoutes');
const { naoEncontrado, erroInterno } = require('./middlewares/errorHandler');

const app = express();

app.disable('x-powered-by'); // não revela a tecnologia do servidor
app.use(cors());
app.use(express.json());

app.use('/v1/controle-filmes', filmeRoutes);

app.use(naoEncontrado);
app.use(erroInterno);

module.exports = app;
