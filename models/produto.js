class Produto {
   constructor(id, nome, preco) {
       this.id = id;
       this.nome = nome;
       this.preco = preco;
       this.dtCadastro = new Date();
   }
}

module.exports = Produto;