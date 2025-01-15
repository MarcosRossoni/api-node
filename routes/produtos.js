const express = require('express');
const routerProduto = express.Router();
const ProdutoController = require("../controller/produto_controller")

const produtoController = new ProdutoController();

routerProduto.get('/', produtoController.listarTodos.bind(produtoController))

routerProduto.post('/', produtoController.createProduto.bind(produtoController))

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