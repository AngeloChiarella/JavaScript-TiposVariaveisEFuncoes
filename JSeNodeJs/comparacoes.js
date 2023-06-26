const numero = 5;
const texto = "5";

console.log(numero == texto); // true - implicita - compara valor
console.log(numero === texto); // false - explicita - compara valor e tipo de dado

//typeof
console.log(typeof numero);
console.log(typeof texto);

// Boas praticas e sempre utilizar o '===' e fazer conversao de modo explicito Ex:
// Number(), String()
