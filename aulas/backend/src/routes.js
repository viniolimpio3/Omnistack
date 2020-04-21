//Importações
const express = require('express');

const routes = express.Router();

//controllers
const ongController = require('./controllers/ongController.js')
const incidentController = require('./controllers/incidentController.js')
const profileController = require('./controllers/profileController.js')
const sessionController = require('./controllers/sessionController.js')
// ROTAS
// LISTA ONGS; CRIA ONGS (POST) (Posso ter diferentes métodos pra uma só rota)
routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

//LISTA CASOS; DELETA CASOS; CRIA CASO
routes.get('/incidents',incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.remove);

//Perfil
routes.get('/profile', profileController.list);

routes.post('/session', sessionController.createSession);

module.exports = routes;//exportando routes para index.js