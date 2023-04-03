// GETTERS E SETTERS

// defineProperty -> define uma propriedade do objeto
// defineProperties -> define várias propriedades do objeto de uma vez

// defeineProperty

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco
    
    let estoquePrivado = estoque;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  
        configurable:true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;
        }
    })
}
const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
p1.estoque = 100;
console.log(p1.estoque);

// Factory function

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            //valor = valor.replace('verde', '');
            nome = valor;
        }
    };
}
const p2 = criaProduto('Camiseta');
p2.nome = 'Casaco verde';
console.log(p2.nome);
