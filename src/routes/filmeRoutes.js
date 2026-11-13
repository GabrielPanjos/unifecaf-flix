// ROUTES: liga cada URL ao método do Controller.
// IMPORTANTE: o prefixo /v1/controle-filmes é aplicado no app.js.
const express = require('express');
const controller = require('../controllers/filmeController');

const router = express.Router();

router.get('/filme', controller.listarFilmes);
router.get('/filme/:id', controller.buscarFilmePorId);
router.get('/filtro/filme', controller.filtrarFilmes);

module.exports = router;
