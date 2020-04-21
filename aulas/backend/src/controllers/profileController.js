//Esse controller tem o objetivo de definir as ações específicas de cada usuário
const connection = require('../database/connection.js');
module.exports = {
    async list(request, response){
        const id_ong = request.headers.authorization;

        const incidents = await connection('incidents').where('id_ong', id_ong).select('*');
        
        return response.json(incidents);
    }
}