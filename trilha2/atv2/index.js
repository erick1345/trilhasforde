const Livro = require('./livro');

const meuLivro = new Livro("O Hobbit", "J.R.R. Tolkien", 310);

console.log(meuLivro);

meuLivro.marcarComoLido();

console.log(meuLivro);
