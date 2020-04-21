//Controller de login
const connection = require('../database/connection.js');
module.exports = {
    async createSession(request, response){
        const { id } = request.body;//id do usuário que tenta entrar

        const ong = await connection('ongs').where('id', id).select('name').first();//first não retorna array

        if(!ong){
            return response.status(400).json({error:'Not found Ong with this ID!'});
        }
        return response.json(ong);
    }
}