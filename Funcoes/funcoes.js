// Codigo e executado linha por linha, mas quando se fala de funcao, 
//ele chama ela la em baixo e pode ser executado antes de declarar


// 1) Executando a funcao no momento que eu quero
imprimeTexto("Ola Mundo!")


// Declarando a funcao usando - function
function imprimeTexto(texto) {
    console.log(texto);
}

// 3) Reaproveitamento de codigo com outro texto
imprimeTexto("Oi");

// Tres formas de escrever funcoes

// segunda forma - pode ser sem parametros e ter 'return', retorno de algum dado
function soma() {
    return 2 + 2;
}
// console.log(soma());

// Funcao dentro de Funcao
imprimeTexto(soma());