class Temperatura {
  constructor(valor) {
    this.valor = valor;
  }

  paraFahrenheit() {
    return (this.valor * 9/5) + 32;
  }

  paraKelvin() {
    return this.valor + 273.15;
  }
}

module.exports = Temperatura;
