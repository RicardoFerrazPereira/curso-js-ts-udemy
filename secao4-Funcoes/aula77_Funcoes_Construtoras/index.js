// FUNÇÕES CONSTRUTORAS
// São funções que criam novos objetos e retorna
// Construtoras -> Pessoa (new)
// Não precisa usar o "return"
// O corpo da função já vai ser objeto que vai ser criado
// "new" -> cria um objeto vazio, faz o "this" apontar para esse objeto vazio e retorna o objeto para a "variável"
// Método -> é uma função dentro de um objeto.
// Atributos privados -> podemos ter coisas que não queremos que estejam disponíveis nos objetos,
// que só iremos usar dentro da função. Criamos uma variável (const ou let) dentro da função. exemplo: ID

function Pessoa(nome, sobrenome) {
    // Atributos e métodos privados
    const ID = 123456;
    const metodoInterno = () => {
    };  
    // Atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Métodos públicos
    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const pessoa1 = new Pessoa('Ricardo', 'Ferraz');
console.log(pessoa1); 
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.metodo();