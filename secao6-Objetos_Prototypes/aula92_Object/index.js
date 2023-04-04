
// -> Object.keys (retorna chaves)
// -> Object.freeze (congela o objeto)
// -> Object.defineProperties (define várias propriedades)
// -> Object.defineProperty (define uma propriedade)
// -> ... (spread)
// -> Object.assign (copia um objeto)
// -> Object.getOwnPropertyDescriptior(o, 'prop') [retorna as propriedades de cada atributo]
// -> Object.values (pega os valores das chaves)
// -> Object.entries (retorna chave e valor em arrays)

// Copiar propriedades de um objeto para outro objeto - SPREAD OPERATOR
const produto = { nome: "Caneca", preco: 1.8};
const outroProduto = {...produto}; // sread operator (...) é maneira de copiar uma propriedade de um
                                   // objeto para outro objeto

outroProduto.nome = 'outroNome';
outroProduto.preco = 2.5;
console.log(produto);
console.log(outroProduto);

// Copiar propriedades de um objeto para outro objeto - OBJECT.ASSIGN
const produto1 = { nome: "Caneca", preco: 1.8};
const outroProduto1 = Object.assign({}, produto1, {material: 'porcelana'}); // Posso acrescentar outra propriedades (material)
outroProduto1.nome = 'outroNome';
outroProduto1.preco = 2.5;
console.log(produto1);
console.log(outroProduto1);

// Object.getOwnPropertyDescriptor

const produto2 = { nome: "Quadro", preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'))
Object.defineProperty(produto2, 'nome', {
    writable: false,
    configurable: false,
    value: "Qualquer coisa"
})
console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'))
console.log(produto2);
console.log(Object.values(produto2)); // Pegar os valores das chaves

// Object.entries (retorna chave e valor em arrays)

const produto3 = { nome: "Bicicleta", preco: 5.8};

console.log(Object.entries(produto3));

for(let entry of Object.entries(produto)) {
    console.log(entry)
}