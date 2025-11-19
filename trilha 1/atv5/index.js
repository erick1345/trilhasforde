const Agenda = require('./agenda');

const minhaAgenda = new Agenda();

minhaAgenda.adicionarCompromisso("Reunião às 10h");
minhaAgenda.adicionarCompromisso("Dentista às 15h");
minhaAgenda.adicionarCompromisso("Estudar JavaScript");

minhaAgenda.listarCompromissos();
