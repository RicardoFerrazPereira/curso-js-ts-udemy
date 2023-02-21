// RETURN
// Retorna um valor
// Termina a função
// Tem função que RETORNA UM VALOR e tem função que EXECUTA UMA AÇÃO
// Podemos retornar qualquer coisa da função

function soma(a, b) {   // Função que retorna um valor
    return a + b;
}
console.log(soma(5, 3));

function soma2(a, b) {  // Função que executa uma ação 
    console.log(a + b); // Console log não retorna ela só MOSTRA NO CONSOLE O QUE VC QUER
}
soma2(5, 2);

// Exemplo de função que EXECUTA UMA AÇÃO:
// Função para alterar a cor de fundo da página ao clicar em qualquer lugar.
// document.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'blue';
// });

// Função para criar um objeto
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }; // Quando se trata de objetos, é usado chaves
}
const pessoa1 = criaPessoa('Farroch', 'Ferraz'); // Cria um objeto através da função

const pessoa2 = {  // Cria um objeto de forma manual - sem função
    nome: 'Eddie',
    sobrenome: 'Ferraz'
};

console.log(pessoa1);
console.log(pessoa2);

// Função dentro de outra função
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('Vasco');
const resto = fala('da Gama');
console.log(resto);

console.log('___________________')

// EXEMPLO MAIS SIMPLES DE RETORNO DE FUNÇÃO

// Forma mais trabalhosa - menos recomendada, pois repete muito código
function duplica(n) {
    return n * 2;
}
function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

// Forma recomendada

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(2));
console.log(triplica1(2));
console.log(quadriplica1(2));