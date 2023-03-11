// FUNÇÕES GERADORAS
// 

function* geradora1() {
    // Código qualquer
    yield 'valor 1' // Na primeira vez que a função for chamada, ele vai retornar o 'valor 1'
    // Código qualquer
    yield 'valor 2'  // Na segunda vez que a função for chamada, ele vai retornar o 'valor 2'
    // Código qualquer
    yield 'valor 3'  // Na terceira vez que a função for chamada, ele vai retornar o 'valor 3'
}

const g1 = geradora1();
console.log(g1);
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

console.log('_________________________');

const g2 = geradora1();
for (let valor of g2) {
    console.log(valor);
    
}

console.log('_________________________');

// Gerador que delega tarefa pra outro gerador

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4) {
    console.log(valor);
}

console.log('_________________________');

// Função geradora retornando uma função

function* geradora5() {
    yield function() {
        console.log('Vim do yield1');
    };

    // qualquer código...

    yield function() {
        console.log('Vim do yield2');
    }
}

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;

funcao1();
funcao2();