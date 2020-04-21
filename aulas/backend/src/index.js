const express = require('express');//importando a dependencia(pacote) express, para acessar sua funcionalidade
//express cria rotas para a aplicação (app) - 'microframework'
const cors = require('cors');
const routes = require('./routes');//importando um arquivo na própria pasta (./ - indica que não é um pacote que está sendo importado)

const app = express();

app.use(cors());
app.use(express.json()); // Os dados da requisição serão no formato json 
app.use(routes);

 /** CHAMANDO SQL
  *     -Drivers: SELECT * FROM users; -> sql normal
  *     -Query Builder(js): table('users').select('*').where() 
  */

app.listen(3333);//porta pra acessar no localhost! - basicamente estou falando para o navegador "ouça minha aplicação na porta 3333"

