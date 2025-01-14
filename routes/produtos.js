const express = require('express');
const Produto = require("../models/produto");
const routerProduto = express.Router();

routerProduto.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET Produtos de produtos',
    });
})

routerProduto.post('/', (req, res, next) => {
    const { nome, id } = req.body;

    const produto = new Produto(nome, id);
    res.status(200).send(
        produto
    )
})

routerProduto.put('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PUT Produto de produto',
    })
})

routerProduto.get('/:id_produto', (req, res, next) => {
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

routerProduto.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PATCH Produto de produto',
    })
})

routerProduto.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'DELETE Produto de produto',
    })
})

module.exports = routerProduto;