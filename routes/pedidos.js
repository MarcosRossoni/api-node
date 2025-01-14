const express = require('express');
const routerPedidos = express.Router();

routerPedidos.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET Produtos de pedidos',
    });
})

routerPedidos.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'POST Produto de produto',
    })
})

routerPedidos.put('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PUT Produto de produto',
    })
})

routerPedidos.get('/:id_produto', (req, res, next) => {
    if (req.params.id_produto === '1') {
        res.status(200).send({
            mensagem: 'GET Produto de produto',
        })

        return
    }

    res.status(200).send({
        mensagem: 'GET Produto de produto',
        id_produto: req.params.id_produto,
    });
})

routerPedidos.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PATCH Produto de produto',
    })
})

routerPedidos.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'DELETE Produto de produto',
    })
})

module.exports = routerPedidos;