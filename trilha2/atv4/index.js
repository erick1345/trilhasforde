const Temperatura = require('./temperatura');

const t = new Temperatura(25);

console.log("Celsius:", t.valor);
console.log("Fahrenheit:", t.paraFahrenheit());
console.log("Kelvin:", t.paraKelvin());
