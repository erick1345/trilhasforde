
interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

const doc = new Texto("Lembrete", "Comprar café.");
console.log("");
console.log(doc.exibir());