//  var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// var area;

// let forma = 'retangulo';
// let area;
// let altura = 5;
// let comprimento = 7;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

//var nao e tao seguro quanto let. 

const forma = 'retangulo';
const altura = 5;
const comprimento = 7;

// const area = 0; // const nao pode ser declarado sem valor
let area;

if (forma === 'retangulo') {
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area)