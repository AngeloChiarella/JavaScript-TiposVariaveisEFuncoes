// Com template String e mais facil de entender e montar, usando `texto ${variavel} texto` (acento grave) 

const nome = "Ju";
const idade = 2021 - 1981;
const cidadeNascimento = "SP";
// const apresentacao = "Meu nome e " + nome + ", minha idade e " + idade + " e nasci na cidade de " + cidadeNascimento;

const apresentacao = `Meu nome e ${nome}, minha idade e ${idade} e nasci na cidade de ${cidadeNascimento}`;

console.log(apresentacao);