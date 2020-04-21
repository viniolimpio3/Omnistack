//Incident = CASO
const connection = require('../database/connection.js');
module.exports = {
    async list(request, response){
        //paginação query -> page tem valor default 1
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();//retorna o índice 0 do array count[] -> conta quantos incidents existem

        response.header('Total-Count', count['count(*)']); //retorna no header do response - a qtd de incidents

        const casos = await connection('incidents')
            .join('ongs', 'ongs.id', '=' , 'incidents.id_ong')//busca dados de outra table
            .limit(5)//limita 5 buscas por vez!
            .offset((page - 1) * 5)//pula os itens caso a pagina vá aumentando!! -> Paginação!!
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.cidade', 'ongs.uf']);//especifica as cols de cada tabela

         

        return response.json(casos);
    },
    async remove(request, response){
        //PARA DELETAR - O PARAM id VAI NA URL!     
        const { id } = request.params;
        const id_ong = request.headers.authorization;//busca o contexto do usuário!

        const incident = await connection('incidents').where('id', id).select('id_ong').first();//seleciona a primeira col id!!

        if(incident.id_ong !== id_ong ){//verifica se o id do caso(id_ong) é o do mesmo usuário que fez a requisição de delete(incidents.id_ong)
            return response.status(401).json({error:'Operation not allowed!!'});//prop status na requisição http! geralment "200" é a resposta que conseguiu se conectar,
            //401 -> não autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();//status http code 204 - é uma resposta sem conteúdo!

    },
    async create(request, response){
        
        const { title, description, value } = request.body;

        const id_ong = request.headers.authorization;//busca o id da ong !!

        //cria uma variável(id) que recebe o 1º indice da array retornada
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            id_ong
        });

        return response.json({ id });//esse id retornado, será a identificação pro frontend saber qual o número do CASO!!

    }
}