// Não precisamos linkar o método no prototype como é feito na função construtora.
// Com a classe, os métodos vão automaticamente para o prototype
// Todas as instâncias criadas a partir de "Pessoa" poderão acessar os métodos do pai

class Pessoa {
    constructor(nome, sobrenome) {  // método para pasar parâmetro para a classe
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}
const pessoa1 = new Pessoa('Eddie', 'Mungo');
console.log(pessoa1);

