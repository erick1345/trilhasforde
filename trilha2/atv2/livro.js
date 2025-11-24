class Livro {
  constructor(titulo, autor, paginas, lido = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido() {
    this.lido = true;
    console.log(`O livro "${this.titulo}" foi marcado como lido.`);
  }
}

module.exports = Livro;
