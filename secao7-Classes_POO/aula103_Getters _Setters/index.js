// função Symbol() => cria uma chave privada dentro do objeto para protejer um atributo de se acessado fora da classe (Objeto).
// Para acessa ou modificar um atributo fora da classe, usamos o GET (getters) e o SET (setters)
// Sybol() -> vai gerar um 'id' aleatório. Um symbol nunca vai ser igual ao outro

const _velocidade = Symbol('velocidade');  // Proteger o atributo "velocidade"

class Carro {
    constructor(nome) {
        this.nome = nome;
        //this.velocidade = 0;  // Sem proteção de acesso
        this[_velocidade] = 0;  // Com proteção de acesso (só com get e set)
    }
    // GET (getters)
    get velocidade() { 
        console.log('GET')       
        return this[_velocidade];
    }
    // SET (setters)
    set velocidade(valor) {
        console.log('SET') 
        if(typeof valor !== 'number') return;  // Se o tipo "valor" for diferente do tipo 'number', encerra aqui
        if(valor >= 100 || valor <= 0) return; // Se valor for maior igual a 100 ou menor igual a 0, encerra aqui
        this[_velocidade] = valor;  // Senãp, velocidade recebe valor
    }

    acelerar() {
        //if(this.velocidade >= 100) return; // Se velocidade for maior igual a 100, retorna. Senão acrescenta 1 a velociade
        //this.velocidade++
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++
    }
    desacelerar() {
        //if(this.velocidade <= 0) return;  // Se velocidade for maior menor igual a 0, retorna. Senão retira 1 da velociade
        //this.velocidade--
        if(this[_velocidade] <= 0) return; 
        this[_velocidade]--
    }
}

// Instanciar
const carro1 = new Carro('Fusca');

// Um FOR para executar o método acelerar 200 vezes
// for (let i = 0; i <= 200; i++) {  
//     carro1.acelerar();
// }
carro1.velocidade = 90; // O setter está no sinal de atribuição '='
console.log(carro1.velocidade);

console.log('>>>>> Exemplo aula anterior <<<<<')
// EXEMPLO DA AULA ANTERIOR

// O método split() divide uma String em uma lista ordenada de substrings, 
// coloca essas substrings em um array e retorna o array. A divisão é feita 
// procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // GET
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    // SET
    set nomeCompleto(valor) {
        valor = valor.split(' '); // Divide uma string através de um padrão (fornecido como o primeiro parâmetro) e retorna um array
        //console.log(valor);
        this.nome = valor.shift(); // Remove o primeiro elemento de um array e retorna esse elemento (Farroch)
        //console.log(this.nome);
        this.sobrenome = valor.join(); // Junta todos os elementos de um array em uma string e retorna esta string.
        //console.log(this.sobrenome); 
    }
}

const pessoa1 = new Pessoa('Farroch', 'Bulsara');
pessoa1.nome = 'Eddie';
pessoa1.nomeCompleto = 'Ricardo Ferraz';
console.log(pessoa1.nomeCompleto);