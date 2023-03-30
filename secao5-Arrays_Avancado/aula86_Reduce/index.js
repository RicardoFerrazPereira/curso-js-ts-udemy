// REDUCE -> Reduzir o array a um único elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somar todos os números
console.log('########## Somar todos os números ###########')
console.log('')

const somaTodosNumeros = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;  // Tem sempre que retorna, para sair do laço do reduce
}, 0);  // Valor inicial do acumulador, que nese caso é zero
console.log(somaTodosNumeros);

// Somar os números pares
console.log('##########  Somar os números pares ###########')
console.log('')

const somaNumerosPares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador += valor;
    return acumulador; 
}, 0);
console.log(somaNumerosPares);

// Somar os números ímpares
console.log('##########  Somar os números ímpares ###########')
console.log('')

const somaNumerosImpares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 !== 0) acumulador += valor;
    return acumulador; 
}, 0);
console.log(somaNumerosImpares);

// Retorne a pessoa mais velha
console.log('########## Retorne a pessoa mais velha ###########')
console.log('')

const pessoas = [
    { nome: 'Luiz', idade: 62 },    // indice 0
    { nome: 'Maria', idade: 23 },   // indice 1
    { nome: 'Eduardo', idade: 55 }, // indice 2
    { nome: 'Letícia', idade: 19 }, // indice 3
    { nome: 'Rosana', idade: 64 },  // indice 4
    { nome: 'Wallace', idade: 47 }, // indice 5
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
    
})
console.log(maisVelha);