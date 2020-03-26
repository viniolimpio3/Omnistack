const express = require('express');//importando a dependencia express, para acessar sua funcionalidade
//express cria rotas para a aplicação (app) - 'microframework'
const app = express();

/*
    https://ROTA/RECURSO("PAGINAS")

*/

/* MÉTODOS HTTP

GET - Buscar informações do backend .get('/recurso', function de retorno) - mostra na url
POST - Criar informações no backend 
PUT - Alterar informações no backend
DELETE - Deletar informações no backend
*/


app.get('/', (request, response)=> {//arow function -> ("requisição", "resposta") => {'função'}

    return response.json({
        evento:'Semana Omnistack 11.0',
        aluno:'Vinícius Olímpio'

    });//resposta para o front-end

});//seta a rota main "localhost:3030/"

app.listen(3333);//porta pra acessar no localhost! - basicamente estou falando para o navegador "ouça minha aplicação na porta 3333"
