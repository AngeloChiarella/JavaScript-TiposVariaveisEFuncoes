//Declaracao de funcao
function minhaFuncao(param) {
    //codigo
}
minhaFuncao("param");

// Expressao de Funcao
const soma = function (num1, num2) { return num1 + num2 }
console.log(soma(2, 2));

//TESTES 
console.log(apresentar())

function apresentar() {
    return "Olá";
}

console.log(soma2(2, 2))
const soma2 = function (num1, num2) { return num1 + num2 }

/* 
Expressao. Nao tem nome da funcao realmente, e atribuido em uma variavel const, para evitar alterar o valor. 
nao funciona estando abaixo de onde e chamado por ser atribuida dentro de uma variavel
*/