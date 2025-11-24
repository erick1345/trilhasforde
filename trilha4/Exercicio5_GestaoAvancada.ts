interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor(livros: LivroBiblioteca[]) {
        this.livros = livros;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const livrosMistos: LivroBiblioteca[] = [
    { titulo: "Zorro", autor: "Johnston McCulley", genero: "Aventura", disponivel: true },
    { titulo: "Sherlock Holmes", autor: "Conan Doyle", genero: "Mistério", disponivel: true },
    { titulo: "Dracula", autor: "Bram Stoker", genero: "Terror", disponivel: false }
];

const gestao = new BibliotecaGestao(livrosMistos);

console.log("");
console.log("Disponíveis Ordenados:", gestao.obterLivrosDisponiveisOrdenados());