class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Valor de depósito inválido!");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Saque inválido! Verifique o valor ou o saldo.");
    }
  }

  getSaldo() {
    return this.saldo;
  }
}

// Exporta a classe para ser usada em outro arquivo
module.exports = ContaBancaria;
