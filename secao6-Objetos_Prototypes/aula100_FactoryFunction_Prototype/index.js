// FACTORY FUNCTION + PROTOTYPE

// Todos os objetos criados vão ser linkados com os métodos (falar, comer, beber), mas 
// esses métodos não vão estar acoplados nos objetos criados

/*

// Usando a herança

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {  // Criar um objeto que vai ser o prototype de cada uma das pessoas
        falar() {
            console.log(`${this.nome} está falando.`);
        },
        comer() {
            console.log(`${this.nome} está comendo.`);
        },
        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };
    // return {
    //     nome,
    //     sobrenome,
    // }
    return Object.create(pessoaPrototype, {
        nome: { value: nome },  // cada chave vai ter um objeto
        sobrenome: { value: sobrenome }  // cada chave vai ter um objeto
    });
}

const p1 = criaPessoa('Farroch', 'Bulsara');
const p2 = criaPessoa('Eddie', 'Veder');
console.log(p1, p2);

*/

// COMPOSIÇÃO - MIXIN
// Usando o Mixin
// Desacoplar - Sem usar a herança

const falar = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },
  };
  
  const comer = {
    comer() {
      console.log(`${this.nome} está comendo.`);
    },
  };
  
  const beber = {
    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };
  
  //const pessoaPrototype = { ...falar, ...comer }
  const pessoaPrototype = Object.assign({}, falar, comer);
  
  function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
      nome: { value: nome },
      sobrenome: { value: sobrenome }
    });
  }
  
  const pessoa1 = criaPessoa('Farroch', 'Bulsara');
  const pessoa2 = criaPessoa('Eddie', 'Veder');
  console.log(pessoa1, pessoa2);