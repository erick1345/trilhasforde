const ContaBancaria = require('./ContaBancaria');

const conta = new ContaBancaria("Maria", 1000);

conta.depositar(500);   // Saldo vai para 1500
conta.sacar(300);       // Saldo vai para 1200

console.log("Saldo final: R$" + conta.getSaldo());
