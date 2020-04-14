const express = require('express');

const routes = express.Router();

//resumo de metodos http e requisições(request) e respostas(response)
/*
    https://ROTA/RECURSO("PAGINAS")

*/

/* MÉTODOS HTTP - (REQUISIÇÕES) Quando for criar uma rota ( se eu usar somente o get, funciona, mas por uma questão de semântica existem essas diferenças )
    (Navegador usa apenas o método get - é o 'que dá pra ver')

    - GET - Buscar/Listar informações do backend .get('/recurso', function de retorno) - mostra na url
    - POST - Criar informações no backend 
    - PUT - Alterar informações no backend
    - DELETE - Deletar informações no backend
*/

/** PARÂMETROS PASSADOS PELAS ROTAS
 * 
 *  - Query Params: Parâmetros NOMEADOS enviados na rota seguido do sinal "?" (Serve p Filtros e Listas p/ exemplo)
 *      exemplo rota.com\recurso?aluno=Vinicius&evento=Omnistack -> traz todos os alunos com nome Vinicius....
 * 
 *  - Route Params: Parâmetros utilizados para identificar RECURSOS -> traz um perfil com um ÚNICO id p exemplo
 *      exemplo rota.com\recurso\{id} -> não preciso nomear qual entidade estou buscando, como nos query params
 * 
 *  - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (busca todo o corpo da requisição)
 */

//request -> guarda todos os dados que vem da requisição feita na view!
//response -> resposta ao usuário




routes.post('/users', (request, response)=> {//arow function -> ("requisição", "resposta") => {'função'}

    // const params = request.query; - Consigo acessar o que foi requisitado
    // const id = request.params; - Acesso o id da requisição
    const data = request.body;// - acessa todo o corpo da requisição
    console.log(data);

    return response.json({});//resposta para o front-end

});//seta a rota main "localhost:3030/"

module.exports = routes;//exportando var (específico do nodejs)