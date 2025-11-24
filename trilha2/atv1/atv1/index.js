const ContaBancaria = require('./ContaBancaria');

const conta = new ContaBancaria("Maria", 1000);

conta.depositar(500);  
conta.sacar(300);  

console.log("Saldo final: R$" + conta.getSaldo());
