interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor(produtos: ProdutoLoja[]) {
        this.produtos = produtos;
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
       
        return this.produtos.find(p => p.codigo === codigo);
    }
}


const estoque = [
    { codigo: 10, nome: "Mouse" },
    { codigo: 20, nome: "Teclado" }
];
const loja = new Loja(estoque);

console.log("");
console.log(loja.buscarProdutoPorCodigo(10)); 
console.log(loja.buscarProdutoPorCodigo(99));