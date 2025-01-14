class Produto {
   constructor(id, nome) {
       this.id = id;
       this.nome = nome;
       this.dtCadastro = new Date();
   }
}

module.exports = Produto;