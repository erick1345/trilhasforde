class Funcionario {
    constructor(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }

    get nome() { return this._nome; }
    get salario() { return this._salario; }

    calcularBonus() {
        throw new Error("O método calcularBonus() deve ser implementado.");
    }
}

class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus() {
        return this.salario * 0.05;
    }
}
    
function calcularSalarioComBonus(funcionarios) {
    console.log("\n--- Exercício 5: Cálculo de Bônus Polimórfico ---");
    funcionarios.forEach(func => {
        const bonus = func.calcularBonus(); // Polimorfismo
        const salarioFinal = func.salario + bonus;
        const percentual = (bonus / func.salario * 100).toFixed(0);

        console.log(`${func.nome} (${func.constructor.name}):`);
        console.log(`  Salário Base: R$ ${func.salario.toFixed(2)}`);
        console.log(`  Bônus (${percentual}%): R$ ${bonus.toFixed(2)}`);
        console.log(`  Salário Final: R$ ${salarioFinal.toFixed(2)}\n`);
    });
}
const gerente1 = new Gerente("Ana", 8000.00);
const operario1 = new Operario("Bruno", 2500.00);

const listaFuncionarios = [gerente1, operario1];
calcularSalarioComBonus(listaFuncionarios);