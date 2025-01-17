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

    async buscarProduto(req, res) {
        try {
            let produto = new Produto();
            produto = await this.produtoDao.findById(req.params.id_produto);
            res.status(200).json(produto);
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

    async updateProduto(req, res) {
        try {
            let produto = new Produto();
            produto.nome = req.body.nome;
            produto.preco = req.body.preco;
            produto.id = req.body.id;

            produto = await this.produtoDao.updateProduto(produto);
            res.status(200).json(produto);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }

    async deleteProduto(req, res) {
        try {
            await this.produtoDao.deleteProduto(req.params.id_produto);
            res.status(200).json({message: 'Produto deleted'});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = ProdutoController;