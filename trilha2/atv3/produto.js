class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal() {
    return this.preco * this.quantidade;
  }
}

module.exports = Produto;
