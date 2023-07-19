// Importar um módulo nosso

// const mod1 = require('./mod1'); // require -> o mesmo que importar
// console.log(mod1.falaNome());

// Se eu quiser importar somente o a função falaNome()

// const falaNome = require('./mod1').falaNome; 
// console.log(falaNome());

// Importar o módulo inteiro e pegar uma chave

// const mod1 = require('./mod1'); 
// const falaNome = mod1.falaNome
// console.log(falaNome());

// Desetruturando -> removendo as chaves de dentro do objeto

const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());

// Exemplo de como importar um módulo do node
const path = require('path');  // path -> é um módulo do node


