const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection')

const routes = express.Router();

routes.get('/ongs', async (request,response) => {
    const ongs = await connection('ongs').select('*');
})

routes.post('/ongs', async (request,response) => {
    const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id});
});

module.exports = routes;


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET:     Buscar uma informação do back-end
 * POST:    Criar uma informação no back-end
 * PUT:     Alterar uma informação no back-end
 * DELETE:  Deletar uma informação no back-end
 * 
 */

 /**
  * Tipos de Parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros e Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */