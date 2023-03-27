// MAP => Altera valores do array
// Não altera o array original. Ele usa o valor do original para criar um novo.
// O map vai ter sempre o mesmo tamanho do array original

// Exemplo
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosMap = numeros.map(function(valor, indice, array) {
//     console.log(valor, indice, array);
// })

console.log('')
console.log('########## Dobre os números ###########')
console.log('')
// Dobre os números 

const numerosEmDobro1 = numeros.map(function(valor) {
    return valor * 2;
});
console.log(numerosEmDobro1);

console.log('')
console.log('#### Dobre os números -> Arrow Function ####')
console.log('')

const numerosEmDobro2 = numeros.map(valor => valor * 2);
console.log(numerosEmDobro2);


// OJBETOS

// A -> Retorne apenas um string com o nome da pessoa
// B -> Remova apenas a chave "nome" do objeto
// C -> Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },    // indice 0
    { nome: 'Maria', idade: 23 },   // indice 1
    { nome: 'Eduardo', idade: 55 }, // indice 2
    { nome: 'Letícia', idade: 19 }, // indice 3
    { nome: 'Rosana', idade: 32 },  // indice 4
    { nome: 'Wallace', idade: 47 }, // indice 5
];

// A -> Retorne apenas um string com o nome da pessoa 

console.log('')
console.log('#### Function Normal ####')
console.log('')

const nomes = pessoas.map(function(objeto) {
    return objeto.nome;
})
console.log(nomes);

console.log('')
console.log('#### Arrow Function ####')
console.log('')

const nomes2 = pessoas.map(objeto => objeto.nome);
console.log(nomes2);

// B -> Remova apenas a chave "nome" do objeto

console.log('')
console.log('#### Remova apenas a chave "nome" do objeto ####')
console.log('')

const idades = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
})

console.log(idades);

console.log('')
console.log('#### Remova apenas a chave "nome" do objeto -> Arrow function ####')
console.log('')

const idades1 = pessoas.map(obj => ({ idede: obj.idade })) 
console.log(idades1);

console.log('')
console.log('#### Adicione uma chave id em cada objeto ####')
console.log('')

// C -> Adicione uma chave id em cada objeto
// Vamos utilizar o "índice do array" como ID da pessoa

// const comIds = pessoas.map(function(obj, indice) { 
//     obj.id = indice;  // Vai alterar o objeto original
//     return obj;
// })
// console.log(comIds);

const comIds1 = pessoas.map((obj, indice) => { 
    const novoObjeto = { ...obj };  // Vai criar um array novo a partir do original adicionando o ID
    novoObjeto.id = indice;
    return novoObjeto;
})
//console.log(pessoas);
console.log(comIds1);

