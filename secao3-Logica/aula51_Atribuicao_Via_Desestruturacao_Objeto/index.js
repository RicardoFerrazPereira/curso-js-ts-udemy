// Para criar o objeto "pessoa", usamos as chaves {}

const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Ferraz',
    apelido: 'Sour',
    idade: 45,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    },
    cidade: 'Terê',
    pais: 'Brasil'
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

// Jogar na variável - ATRIBUIÇÃO NORMAL

// const nome = pessoa.nome;
// console.log(nome);

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO - facilita, pois podemos pegar várias propriedades de uma vez
const { nome } = pessoa;
console.log(nome)

const { sobrenome, idade, endereco: { rua }} = pessoa;
console.log(sobrenome, idade, rua);

//modificar o nome da variável de "apelido" para "teste"
const { apelido: teste } = pessoa;
console.log(teste);

// Pegar o resto das propriedades
const {cidade, pais, ...resto} = pessoa;
console.log(cidade, pais, resto);

