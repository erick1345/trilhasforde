interface ItemLivraria {
    id: number;           
    titulo: string;      
    preco: number;        
    conteudo: string;     
    autor: string;        
    genero: string;       
    disponivel: boolean;  
}

class LivroCompleto implements ItemLivraria {
    constructor(
        public id: number,
        public titulo: string,
        public preco: number,
        public conteudo: string,
        public autor: string,
        public genero: string,
        public disponivel: boolean
    ) {}


    exibir(): string {
        return `\n📚 DETALHES DO LIVRO:\nTítulo: ${this.titulo}\nConteúdo: ${this.conteudo}\nPreço: R$ ${this.preco.toFixed(2)}`;
    }
}

class SistemaLivraria {
    estoque: LivroCompleto[];

    constructor(estoque: LivroCompleto[]) {
        this.estoque = estoque;
    }

    
    buscarPorId(id: number): LivroCompleto | undefined {
        return this.estoque.find(livro => livro.id === id);
    }

    
    filtrarPorGenero(genero: string): LivroCompleto[] {
        return this.estoque.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

   
    listarDisponiveisOrdenados(): LivroCompleto[] {
        return this.estoque
            .filter(livro => livro.disponivel) 
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const livrosDoSistema = [
    new LivroCompleto(1, "Dom Casmurro", 45.00, "Bento e Capitu...", "Machado de Assis", "Romance", true),
    new LivroCompleto(2, "Harry Potter", 60.00, "Bruxos em Hogwarts...", "J.K. Rowling", "Fantasia", false), // Indisponível
    new LivroCompleto(3, "O Hobbit", 55.00, "Bilbo bolseiro...", "Tolkien", "Fantasia", true),
    new LivroCompleto(4, "Clean Code", 90.00, "Boas práticas...", "Robert Martin", "Tech", true)
];

const minhaLoja = new SistemaLivraria(livrosDoSistema);

console.log("--- Teste de Exibição ---");
console.log(livrosDoSistema[0].exibir());

console.log("\n--- Busca pelo ID 3 ---");
const busca = minhaLoja.buscarPorId(3);
console.log(busca ? `Encontrado: ${busca.titulo}` : "Não encontrado");

console.log("\n--- Livros de Fantasia ---");
console.log(minhaLoja.filtrarPorGenero("Fantasia").map(l => l.titulo));

console.log("\n--- Disponíveis (Ordem Alfabética) ---");
const disponiveis = minhaLoja.listarDisponiveisOrdenados();
disponiveis.forEach(l => console.log(`- ${l.titulo} (R$ ${l.preco})`));