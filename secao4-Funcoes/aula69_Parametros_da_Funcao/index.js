// A função definida com a palavra "function" tem uma variável especial
// chamada "arguments" que sustenta todos os argumentos enviados
// ARGUMENTS não funciona com "arrow function"
// Argumentos são os valores que vc passa para os parâmetros
// Funciona com "function expression"

function funcao() {   // Declarei a função sem passar nenhum parâmetro
    console.log('Hello World!');
    console.log(arguments);
    console.log(arguments[1])
}
funcao('Valor', 'farroch', 'eddie'); // Estou passando um argumento, sendo que a função não tem parâmetro. Isso é uma peculiaridade do
                 // javascript, se fosse em outra linguagem, daria erro, pois para passar um argumento quando se chama a função, 
                 // a função tem que ter os "parâmetros".

console.log('_____________________________');

function funcao1() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}
funcao1(1, 2, 3, 4, 5, 6, 7);

console.log('_____________________________');

function funcao2(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c)
}
funcao2(1, 2, 3, 4, 5, 6, 7);

console.log('_____________________________');


// Quando vc divergir o número de argumentos com o número de parâmetros o javascript não gera erro nenhum.
// Tanto faz a ordem, pode ser mais argumentos que parâmetros ou mais parâmetros que argumentos
function funcao3(a, b, c, d, e, f) {
    
    console.log(a, b, c, d, e, f)
}
funcao3(1, 2, 3);

console.log('_____________________________');

function soma (a, b = 6, c = 3) {
    console.log(a + b + c);
}
soma(2);

function soma1 (a, b = 6, c = 3) {
    console.log(a + b + c);
}
soma1(2, 10);

function soma3 (a, b = 6, c = 3) {
    console.log(a + b + c);
}
soma1(2, 10, 20);

console.log('_____________________________');

// Atribuição por desestruturação OBJETO
// Usamos CHAVES quando é um objeto

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao4({ nome: 'Ricardo', sobrenome: 'Ferraz', idade: 30 })

// Atribuição por desestruturação ARRAY
// Usamos CONCHETES quando é um objeto

function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao5(['Ricardo', 'Ferraz', 30]);

console.log('_____________________________');

function conta(operador, acumulador, numeros) {
    console.log(operador, acumulador, numeros);
}
conta('+', 0, [20, 30, 40, 50]);

// REST OPERATOR 
// Tem que ser o último parâmetro da função
// Funciona com qualquer função (arrow function, function expression, função normal)

function conta1(operador, acumulador, ...numeros) { // ... indica o rest operator, tudo que vier depois do segundo parâmetro (acumulador), vem no resto dentro de um array.
    console.log(operador, acumulador, numeros);
}
conta1('+', 0, 20, 30, 40, 50); // Tenho mais argumentos do que parâmetros


console.log('_____________________________');

function conta3(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta3('+', 2, 20, 30, 40, 50); 
conta3('-', 2, 20, 30, 40, 50);
conta3('/', 2, 20, 30, 40, 50);
conta3('*', 2, 20, 30, 40, 50);

console.log('_____________________________');


// Posso usar "FUNCTION EXPRESSION"

const conta4 = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}; // quando usamos a "function expression" temos que botar ; no final depois das chaves. ATUALMENTE NÃO PRECISA MAIS
conta4('+', 2, 20, 30, 40, 50); 
conta4('-', 2, 20, 30, 40, 50);
conta4('/', 2, 20, 30, 40, 50);
conta4('*', 2, 20, 30, 40, 50);

console.log('_____________________________');

// Posso usar o REST OPERATOR para pegar os argumentos (arguments)

// Function Expression
const conta5 = function(...args) {
    console.log(args);
}
conta5('+', 2, 20, 30, 40, 50); 

// Arrow Function
const conta6 = (...args) => {
    console.log(args);
}
conta6('+', 2, 20, 30, 40, 50); 

// OBSERVAÇÃO: Sempre que precisar enviar parâmetros indeterminados para uma função, usar o REST OPERATOR