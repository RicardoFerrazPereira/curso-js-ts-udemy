// const nome = 'Farrock';
// const sobrenome = 'Bulsara';
// const idade = 2;

// function soma(x, y) {
//     return x + y;
// }

///////  1  //////////

// export { nome, idade, soma };

/////////// 3 /////////////

//export { nome, idade as anos, soma };

/////////  4 - EXPORTANDO TUDA NA CRIAÇÃO

// export const nome = 'Farrock';
// export const sobrenome = 'Bulsara';
// export const idade = 2;

// export function soma(x, y) {
//     return x + y;
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

///// DEFAULT  ////

// export default function soma(x, y) {
//     return x + y;
// }

//// EXPORTANDO COMO DEFAULT

const nome = 'Farrock';
const sobrenome = 'Bulsara';
const idade = 2;

function soma(x, y) {
    return x + y;
}

export { nome, idade, soma as default}  // Só a variável nome é padrão
