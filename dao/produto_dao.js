const Database = require("../postgres");

class ProdutoDao {
    constructor() {
        this.db = new Database(Database);
    }

    async getAllProduto() {
        try {
            return await this.db.query("SELECT id_produto, nome, preco FROM produtos");
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findById(id) {
        try {
            const produto = await this.db.query('SELECT * FROM produtos WHERE id_produto = $1', [id]);
            if (produto.length === 0) {
                return null;
            }
            return produto[0];

        } catch (error) {
            console.error("Erro ao buscar produto por ID:", error);
            throw error;
        }
    }

    async createProduto(produto) {
        try {
            const result = await this.db.query(
                'INSERT INTO produtos(nome, preco) VALUES ($1, $2) RETURNING *',
                [produto.nome, produto.preco]);
            return result[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateProduto(produto) {
        try {
            const result = await this.db.query(
                'UPDATE produtos SET nome = $1, preco = $2 WHERE id_produto = $3 RETURNING *',
                [produto.nome, produto.preco, produto.id]);
            if (result.length === 0) {
                return null;
            }
            return result[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteProduto(id) {
        try {
            const result = await this.db.query(
                'DELETE FROM produtos WHERE id_produto = $1 RETURNING *',
                [id]);
            if (result.length === 0) {
                return null;
            }
            return result[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

module.exports = ProdutoDao;