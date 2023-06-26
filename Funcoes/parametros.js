// Parametro e o que passamos na funcao para ela funcionar corretamente
//         parametro1 - parametro2
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2, 2));
// console.log(soma(245, 22));
// console.log(soma(-500, 60));

// parametros X argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome e ${nome}, e minha idade e ${idade}`
}

// console.log(nomeIdade(29, "Angelo"))

// Definindo valor padrado caso nao venha dado no parametro usando "numero = 1" - Tratamento de erro
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(
    multiplica(
        soma(4, 5),
        // soma(3, 3),
    )
)
