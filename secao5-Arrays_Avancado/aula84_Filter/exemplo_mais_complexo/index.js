// Retorne as pessoas que tem o nome com 7 letras ou mais

const pessoas = [
    { nome: 'Luiz', idade: 62 },    // indice 0
    { nome: 'Maria', idade: 23 },   // indice 1
    { nome: 'Eduardo', idade: 55 }, // indice 2
    { nome: 'Letícia', idade: 19 }, // indice 3
    { nome: 'Rosana', idade: 32 },  // indice 4
    { nome: 'Wallace', idade: 47 }, // indice 5
];
// Função normal

const filtrados = pessoas.filter(function(objeto) {
    return objeto.nome.length >= 7;
});
console.log(filtrados);

// Com Arrow function

const filtrados1 = pessoas.filter(objeto => objeto.nome.length >= 7);
console.log(filtrados1);

// RETORNE AS PESSOAS COM MAIS DE 50 ANOS

const filtrados2 = pessoas.filter(objeto => objeto.idade > 50);
console.log(filtrados2);

// RETORNE AS PESSOAS CUJO NOME TERMINA COM A LETRA "A"

const filtrados3 = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));  // Vou passar tudo para letra minuscula (toLowerCase), pra checar só uma vez
console.log(filtrados3);                                                               // e depois a função endsWith() -> termina com...   