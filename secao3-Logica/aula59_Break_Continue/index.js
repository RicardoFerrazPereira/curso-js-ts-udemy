const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// CONTINUE -> pula para próxima interação do laço
// BREAK -> sai do laço quando a condição for true

for (let i of numeros) {
    console.log(i);
}


console.log('-------------------');
for (let i of numeros) {
   
    if ( i === 2) {
        console.log('pulei o número 2');
        continue;   // o "continue" vai fazer a interação volta pro laço não imprimindo o número 2
    }
    console.log(i);
}

console.log('-------------------');

for (let i of numeros) {
   
    if ( i === 6 || i === 7) {        
        continue;   
    }
    console.log(i);
}

console.log('---------- BREAK -----------');

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let i of num) {

    if ( i === 6 ) {        
        break;   // sai do laço quando o número for 6, não chegando a imprimir o 6
    }
    console.log(i);
}

for (let i of num) {
   
    console.log(i);

    if ( i === 6 ) {        
        break;   // sai do laço quando o número for 6, ele imprime o 6, pois ele executa a ação "console.log" e depois sai do laço
    }
   
}

