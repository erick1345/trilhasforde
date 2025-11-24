interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor(livros: Livro[]) {
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}


const acervo = [
    { titulo: "Clean Code", autor: "Robert Martin", disponivel: true },
    { titulo: "Refactoring", autor: "Martin Fowler", disponivel: false }
];
const lib = new Biblioteca(acervo);

console.log("");
console.log(lib.buscarLivrosDisponiveis());