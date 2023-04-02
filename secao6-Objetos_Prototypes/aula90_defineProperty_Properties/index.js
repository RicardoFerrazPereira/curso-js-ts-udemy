// Funções relacionadas com as chaves do objeto
// defineProperty -> define uma propriedade do objeto
// defineProperties -> define várias propriedades do objeto de uma vez

// defeineProperty

function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // enumerable mostra a chave -> true = visível / false = oculto
        value: estoque, // value pega o valor da chave
        writable: false, // Controla se o valor pode ou não ser alterado -> true = sim / false = não
        configurable:true// configurable como falso, não permite apagar e reconfigurar a variável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable:true // configurável
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true, 
            configurable:true
        }
    })
}
const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 1000;
console.log(p1);
// Ver as chaves do objeto em um array
console.log(Object.keys(p1));
// forIn
for(let chave in p1) {
    console.log(chave);
}

// defineProperties

