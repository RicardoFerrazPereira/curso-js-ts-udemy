// Prototype => é um atributo oculto (__proto__), recebe um método que vai ser comum 
// a todos os objetos criados. 
// É melhor colocarmos os métodos fora da função construtora. 

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Ricardo', 'Ferraz');  // <- Pessoa == Função construtora
const pessoa2 = new Pessoa('Farrock', 'Bulsadra');  // <- Pessoa == Função construtora

console.dir(pessoa1);
console.log(pessoa2);

// MANIPULANDO PROTOTYPE

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

// Com função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
// Adicionar um método ao prototype. 
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumentaPreco = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
const p1 = new Produto('Camiseta', 50);
p1.desconto(10);
console.log(p1);
p1.aumentaPreco(10);
console.log(p1);

// Reaproveitar os métodos criados em prototype num novo objeto
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype); // p2 -> é de quem eu quero setar / Produto.prototype -> quem vai ser o prototype de p2
p2.aumentaPreco(20)

console.log(p2);

// Criar um objeto e setar o prototype dele
const p3 = Object.create(Produto.prototype); // Cria o objeto e seta o prototype
console.log(p3);
p3.preco = 100;
p3.aumentaPreco(30);
console.log(p3);

// Criar objeto -> setar prototype -> setar chaves

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 20
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p4.desconto(10);
console.log(p4);
