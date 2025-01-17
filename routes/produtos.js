const express = require('express');
const routerProduto = express.Router();
const ProdutoController = require("../controller/produto_controller")

const produtoController = new ProdutoController();

routerProduto.get('/', produtoController.listarTodos.bind(produtoController))

routerProduto.post('/', produtoController.createProduto.bind(produtoController))

routerProduto.get('/:id_produto', produtoController.buscarProduto.bind(produtoController));

routerProduto.put('/', produtoController.updateProduto.bind(produtoController));

routerProduto.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'PATCH Produto de produto',
    })
})

routerProduto.delete('/:id_produto', produtoController.deleteProduto.bind(produtoController));

module.exports = routerProduto;