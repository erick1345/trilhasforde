class Animal {
    #energia;
    
    constructor(nome, energiaInicial = 100) {
        this._nome = nome;
        this.#energia = energiaInicial;
    }

    comer(quantidade = 10) {
        this.#energia += quantidade;
        console.log(`${this._nome} se alimentou e recuperou ${quantidade} de energia.`);
    }

    statusEnergia() {
        console.log(`🔋 ${this._nome}: Nível de energia atual é ${this.#energia}.`);
        return this.#energia;
    }
    _setEnergia(novaEnergia) {
        this.#energia = novaEnergia;
    }
}

class Leao extends Animal {
    constructor(nome) {
        super(nome, 100);
    }

    comer() {
        if (this.statusEnergia() < 30) {
            console.log(`🦁 ${this._nome} está muito cansado para caçar.`);
            return;
        }

        console.log(`\n🦁 ${this._nome} CAÇANDO... (gasta 20 de energia)`);
        
        this._setEnergia(this.statusEnergia() - 20);
        
        super.comer(50);
    }
}

class Passaro extends Animal {
    constructor(nome) {
        super(nome, 50);
    }

    comer() {
        console.log(`\n🐦 ${this._nome} ALIMENTANDO-SE...`);
        super.comer(5);
    }
}
console.log("\n--- Exercício 4: Status e Polimorfismo de Energia ---");
const leao = new Leao("Simba");
const passaro = new Passaro("Piu");

leao.statusEnergia();
passaro.statusEnergia();

leao.comer();
passaro.comer();

leao.statusEnergia();
passaro.statusEnergia();