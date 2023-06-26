// Conversao implicita - permite converter um tipo de dado em outro

// Number -> String
const numero = 456;
const string = '456';

// console.log(numero == string); // true - pega numero e converte em string - COMPARA SOMENTE VALOR
// console.log(numero === string); // false - COMPARA VALOR E TIPO
console.log(numero + string); // concatenou pq converte para string

// Conversao explicita

//Number()
//String()
console.log(numero + Number(string)); // converte String pra Number