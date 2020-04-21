const knex = require('knex');
const config = require('../../knexfile.js');

const connection = knex(config.development);//acessa as configs da props no arquivo knexfile de desenvolvimento

module.exports = connection;