//importar dependencias e pacotes

const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// iniciando o servidor
const server = express()
server
//  utilizando arquivos estaticos
    .use(express.static('public'))

//configura template engine
.set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //rotas da aplicação
    .get('/', pages.index)
    .get('/orfanato', pages.orfanato)
    .get('/create-orfa', pages.createOrfa)
    .get('/orfanatos', pages.orfanatos)



//ligar servidor 
server.listen(5500)