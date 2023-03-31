// COMBINAR FILTER + MAP + REDUCE

// Retornar a soma do dobro de todos os pares
// -> Filtrar pares (filter)
// -> Dobrar os valores (map)
// -> Somar tudo - reduzir (reduce) 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor * 2
}).reduce(function(acumulador, valor) {
    return acumulador + valor
})
console.log(numerosPares);

// [ 50, 80, 2, 8, 22 ] pares
// [ 100, 160, 4, 16, 44 ] dobro
// 324 soma

// ARROW FUNCTION

const numerosParesArrow = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor)
    
console.log(numerosParesArrow);
