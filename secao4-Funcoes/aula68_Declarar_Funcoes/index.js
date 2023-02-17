// Declaração de função Normal (literal) => Nesse tipo de 
// função ocorre o (Function hoisting) -> significa que tando 
// posso declarar a função e depois chama-la ou chama-la e depois declarar

falaOi(); // Chamei a função

function falaOi() {           // Declarei a função
    console.log('Olá Mundo!')
}

console.log('_________________________')
console.log('')

// First-class objects (Objetos de primeira classe) -> significa que vc
// pode tratar as funções como dados, ou seja, uma variável pode receber 
// uma função como dado (Function expression) -- Com isso, uma função pode 
// receber outra função como parâmetro.

const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

// receber outra função como parâmetro
const souUmDado2 = function() {
    console.log('Sou um dado2');
};
function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado2);

console.log('_________________________')
console.log('')

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

console.log('_________________________')
console.log('')

// Posso ter uma função dentro de um objeto

const objeto = {
    falar: function() {
        console.log('Estou falando...')
    }
};
objeto.falar();

// OU

const objeto2 = {
    falar() {
        console.log('Estou falando...')
    }
}
objeto.falar();

