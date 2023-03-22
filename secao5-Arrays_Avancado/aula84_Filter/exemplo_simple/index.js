// FILTER -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.
// Função FILTER() requer o retorno de um boolean (true ou false)
// TRUE => imbutir esse novo elemento no array
// FALSE => elemento não seja imbutido no novo array

// Retorne os números (elementos) maiores que 10

console.log('')
console.log('########## Forma mais trabalhosa ###########')
console.log('')

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
    if(valor > 10) {  
        return true;  // Nunca retorne true ou false, pois a própria condição já avalia e retorna true ou false
    }else {
        return false;
    }
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

console.log('')
console.log('########## Forma sem o retorn true ou false ###########')
console.log('')

const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter1(valor, indice, array) {
    return valor > 10;
}
const numerosFiltrados1 = numeros1.filter(callbackFilter1);
console.log(numerosFiltrados1);

console.log('')
console.log('###### Eliminar os parâmetros não usados ########')
console.log('')

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter1(valor) {
    return valor > 10;
}
const numerosFiltrados2 = numeros2.filter(callbackFilter1);
console.log(numerosFiltrados2);

console.log('')
console.log('###### Função anônima como callback de filter() ########')
console.log('')

const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados3 = numeros3.filter(function(valor) {
    return valor > 10;
});
console.log(numerosFiltrados3);

console.log('')
console.log('### Função anônima como callback de filter() com Arrow Function ###')
console.log('### Mais moderno, e muito usado ###')
console.log('')

const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados4 = numeros4.filter(valor => {  // Como só temos um argumento (valor), eliminamos os parenteses
    return valor > 10;  // Como só tem uma linha dentro do escopo, podemos eliminar a palavra retorn. Exemplo abaixo
});
console.log(numerosFiltrados4);

console.log('')
console.log('### Função anônima como callback de filter() com Arrow Function ###')
console.log('### eliminando o return, pois só tem uma linha dentro do escopo ###')
console.log('### ESSA FORMA É MAIS USADA ###')
console.log('')

const numeros5 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados5 = numeros5.filter(valor => valor > 10);
console.log(numerosFiltrados5);

console.log('')
console.log('### Exemplo DIDÁTICO com todos os parÂmetro da função filter(). ###')
console.log('')

const numeros6 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados6 = numeros6.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});
console.log(numerosFiltrados6);
