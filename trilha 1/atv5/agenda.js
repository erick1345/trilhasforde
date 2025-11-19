class Agenda {
  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(texto) {
    if (texto.length > 0) {
      this.compromissos.push(texto);
      console.log(`Compromisso adicionado: ${texto}`);
    } else {
      console.log("O compromisso não pode estar vazio.");
    }
  }

  listarCompromissos() {
    console.log("📌 Lista de compromissos:");

    if (this.compromissos.length === 0) {
      console.log("Nenhum compromisso registrado.");
      return;
    }

    this.compromissos.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

module.exports = Agenda;
