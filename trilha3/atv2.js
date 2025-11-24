
class FiguraGeometrica {
    calcularArea() {
    
        throw new Error("O método calcularArea() deve ser implementado pelas subclasses.");
    }
}

class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
    
        return Math.PI * (this.raio ** 2);
    }
}


class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
      
        return this.lado * this.lado;
    }
}


class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
       
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras) {
    console.log("\n--- Exercício 2: Cálculo de Áreas ---");
    figuras.forEach(figura => {
    
        console.log(`Área de ${figura.constructor.name}: ${figura.calcularArea().toFixed(2)}`);
    });
}

const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 8);

const todasAsFiguras = [circulo, quadrado, triangulo];
imprimirAreas(todasAsFiguras);