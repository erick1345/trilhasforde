class Pagamento {
    processar() {
        throw new Error("O método processar() deve ser implementado nas subclasses.");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(numeroCartao, valor) {
        super();
        this.numeroCartao = numeroCartao;
        this.valor = valor;
    }

    _validarCartao() {
        return this.numeroCartao && this.numeroCartao.length === 16;
    }

    processar() {
        if (this._validarCartao()) {
            console.log(`💳 Pagamento com Cartão de R$ ${this.valor.toFixed(2)} processado com sucesso.`);
        } else {
            console.log("❌ Erro: Número de cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(valor) {
        super();
        this.valor = valor;
    }

    _gerarCodigo() {
        return `BOLETO-${this.valor.toFixed(2)}-XYZ123ABC`;
    }

    processar() {
        const codigo = this._gerarCodigo();
        console.log(`📄 Boleto de R$ ${this.valor.toFixed(2)} gerado. Código: ${codigo}`);
    }
}

function processarTodosPagamentos(pagamentos) {
    console.log("\n--- Exercício 3: Processamento de Pagamentos ---");
    pagamentos.forEach(pagamento => {
        pagamento.processar();
    });
}

const p1 = new PagamentoCartao("1234567890123456", 150.75);
const p2 = new PagamentoBoleto(89.90);
const p3 = new PagamentoCartao("999", 2000.00);

const listaPagamentos = [p1, p2, p3];
processarTodosPagamentos(listaPagamentos);