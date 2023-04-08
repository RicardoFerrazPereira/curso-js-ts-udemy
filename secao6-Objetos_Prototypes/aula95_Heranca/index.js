// Produto
// Camiseta - Caneca

function Produto(nome, preco) {  // PAI
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) { // Métodos -> funções dentro do objeto
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) { // Métodos -> funções dentro do objeto
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {  // FILHO
    Produto.call(this, nome, preco); // Liguei as duas funções (Camiseta a Produto)
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Linkar o prototype de Produto com o de Camiseta 
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {  // FILHO
    Produto.call(this, nome, preco);
    this.material = material;
    //this.estoque = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return; // Se valor for diferente d0 tipo number
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// Intânciar os objetos (produto, camiseta, caneca)
const produto = new Produto('Gen', 110);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Mágica', 13, 'Plástico', 25);


camiseta.aumento(10);
caneca.desconto(5);
caneca.estoque = 100;

console.log(produto);
console.log(camiseta);
console.log(caneca.estoque);
console.log(caneca);
