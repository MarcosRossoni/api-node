const ProdutoDao = require('../dao/produto_dao');
const Produto = require("../models/produto");

class ProdutoController {
    constructor() {
        this.produtoDao = new ProdutoDao();
    }

    async listarTodos(req, res) {
        try {
            const listProdutos = await this.produtoDao.getAllProduto();
            res.json(listProdutos);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }

    async createProduto(req, res) {
        try {
            let produto = new Produto();
            produto.nome = req.body.nome;
            produto.preco = req.body.preco;
            produto = await this.produtoDao.createProduto(produto);
            res.status(201).json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = ProdutoController;