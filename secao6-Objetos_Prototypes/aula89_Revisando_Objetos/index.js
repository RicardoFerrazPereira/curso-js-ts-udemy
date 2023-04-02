// Os assessores de propriedade fornecem acesso as propriedades de um objeto
// usando a notação de ponto " . " ou a notação de colchetes ' [] '.

// Literal
const pessoa = {
    nome: 'Farrock',
    sobrenome: 'Bulsara'
};
console.log(pessoa.nome);  // Notação de ponto
console.log(pessoa['nome']); // Notação de conchete

// Construtor
const pessoa1 = new Object();
pessoa1.nome = 'Eddie',
pessoa1.sobrenome = 'Ferraz';

console.log(pessoa1.nome); 
console.log(pessoa1['nome']); 

// Apagar a chave nome
const pessoa2 = {
    nome: 'Farrock',
    sobrenome: 'Bulsara'
};
delete pessoa2.nome;
console.log(pessoa2);

// Objetos podem conter métodos
const pessoa3 = new Object();
pessoa3.nome = 'Kyra',
pessoa3.sobrenome = 'Ferraz',
pessoa3.idade = 45
pessoa3.falarNome = function() {        // métodos -> quando uma função está dentro de um objeto chamamos de "método"
    return (`${this.nome} está falando seu nome`);
}
pessoa3.getDataNascimento = function() {        // métodos
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa3.falarNome());
console.log(pessoa3.getDataNascimento());

// Ver as 'chaves' com o "for in"
for (let chave in pessoa3) {
    console.log(chave);
}
// Acessar os valores das chaves
for (let chave in pessoa3) {
    console.log(pessoa3[chave]);
}

// Criar um molde pra criar um objeto -> Factory function / Constructor functions
// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Ricardo', 'Ferraz');
console.log(p1.nomeCompleto());

// Constructor functions
// a palavra "new" cria um novo objeto, atrela a palavra "this" nesse objeto e retorne esse "this".
// por isso não tem "return"
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Sete', 'Ferraz');
console.log(p2);

// Travar meu objeto -> 'freeze' -> nenhum objeto feito dessa função 
// pode ser alterado ou criar un novo atributo ou método
// Só poderei manipular o objeto antes da linha -> Object.freeze(this);
function PessoaFreeze(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // congela (trava) o objeto, nada pode ser alterado, criado, deletado
}

const p3 = new PessoaFreeze('Amor', 'Ferraz');
console.log(p3);
p3.nome = 'Outro Nome' // não vai ser alterado
p3.sobrenome = 'Pereira' // não vai ser alterado
p3.fala
console.log(p3);


