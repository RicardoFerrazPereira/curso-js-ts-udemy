// WHILE -> checa a condição (true) e depois executa o código
// DO WHILE -> executa o código e depois checa a condição

const nome = 'Ricardo';

let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

console.log('Segue a vida...')

console.log('############################');

const gerarNumeroAleatorio = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // retornar um número inteiro
}

const min = 1;
const max = 50;
let rand = 10;

//let rand = gerarNumeroAleatorio(min, max);
// quando gerar um número aleatório, quero saber se ele é o 10. Quando o número for
// 10, ele sai do laço
while (rand !== 10) {
    rand = gerarNumeroAleatorio(min, max);
    console.log(rand);
}

console.log('############################');

// DO WHILE

do {
    //rand = gerarNumeroAleatorio(min, max);
    console.log(rand);
} while (rand !== 10);
