const connection = require('../database/connection.js');
const crypto = require('crypto');//modulo do nodejs -> nesse projeto uso para gerar um id randomico!

module.exports = { 
    async list(request, response){
        const ongs = await connection('ongs').select('*');//seleciona toda a tabela ongs
        return response.json(ongs);
    },
    async create(request, response){
         //const body = request.body;

        // DESESTRUTURAÇÃO js -> eu nomeio as props do meu objeto; ao inves de usar body.name, se quiser o name da resquisição só digito name
        const { name, email, whatsapp, cidade, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');//gera um id do tipo hexadecimal

        //espera inserir na tabela para retornar!
        await connection('ongs').insert({//insere!!
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({ id });
    }
}