const Produto = require('./produto');

const p1 = new Produto("Camiseta", 50, 10);

console.log("Produto:", p1.nome);
console.log("Valor total em estoque: R$" + p1.calcularValorTotal());
