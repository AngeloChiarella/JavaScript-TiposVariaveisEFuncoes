//Tradicional
function apresentar(nome) {
    return `Meu nome e ${nome}`
}

//Arrow function
const apresentarArrow = nome => `Meu nome e ${nome}`;

// () e usado quando se tem mais de um parametro
const soma = (num1, num2) => num1 + num2;

// Quando se tem mais de uma linha e usado {} e return
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente numeros de 1 a 9."
    } else {
        return num1 + num2;
    }
}

/*
Hoisting: Arrow se comporta como expressao

Arrow - jeito rapido e curto de escrever a funcao
vantagens quando esta usando objetos

*/