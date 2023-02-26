// FACTORY FUNCTIONS -> Funções fábrica
// São funções que retornam um objeto
// Quando uma função está dentro de um objeto, chamamos essa função de "método"

//                 (   parâmetro   )
function criaPessoa(nome, sobrenome) { 
    return {
        nome, // chave
        sobrenome, // chave
        fala: function(assunto) {  // // podemos tirar a palavra function, pois se trata de um método
            return `${nome} está ${assunto}.`;  // 'nome' utilizou o parÂmetro 'nome'
        }
    };
}

const pessoa1 = criaPessoa('Farroch', 'Ferraz');
console.log(pessoa1.fala('falando sobre JS'));

console.log('######################################');

// "this" é sempre quem chamar o objeto

//                 (   parâmetro   )
function criaPessoa2(nome, sobrenome) { 
    return {
        nome, // chave
        sobrenome, // chave
        fala(assunto) {  
            return `${this.nome} está ${assunto}.`;  // 'nome' utilizou a chave 'nome'
        }
    };
}

const pessoa2 = criaPessoa2('Eddie', 'Ferraz');
console.log(pessoa2.fala('falando sobre THIS'));
console.log(pessoa2.nome); // quem chama o objeto é pessoa2

console.log('######################################');

function criaPessoa3(nome, sobrenome, altura, peso) { 
    return {
        nome, // chave
        sobrenome, // chave
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;  // 'nome' utilizou a chave 'nome'
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // toFixed -> duas casas decimais
        }
    };
}

const p3 = criaPessoa3('Sete', 'Ferraz', 1.5, 40);
console.log(p3.imc());
console.log(p3.nome);
console.log(p3.sobrenome);


console.log('######################################');
console.log('GETTER -> get')

// GETTER (get) -> obtém o valor do método. Cologamos o "get" antes do método
function criaPessoa4(nome, sobrenome, altura, peso) { 
    return {
        nome, // chave
        sobrenome, // chave
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;  // 'nome' utilizou a chave 'nome'
        },
        altura,
        peso,
        // Getter
        get imc() {  // get -> obtém o valor do método.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // toFixed -> duas casas decimais
        }
    };
}

const p5 = criaPessoa4('Kyra', 'Ferraz', 1.1, 30);
//console.log(p5.imc()); // chamei o "imc" como método
console.log(p5.nome); // atributo
console.log(p5.sobrenome); // atributo
console.log(p5.imc); // chamei o imc como um atributo -> foi o "get" que pegou o valor do imc


console.log('######################################');
console.log('SETTER -> set')




function criaPessoa5(nome, sobrenome, altura, peso) { 
    return {
        nome, // chave
        sobrenome, // chave
        // Getter - get
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter - set
        set nomeCompleto(valor) {
            console.log(valor);
            // extrair o primeiro nome (ricardo)
            valor = valor.split(' '); // vou dividir o valor nos espaços. A cada espaço o nome vai ser dividido, retornando um array
            console.log(valor);
            // método que remove o primeiro elemento do array
            this.nome = valor.shift(); // O "shift" faz duas coisas: retorna o primeiro valor do array (antes era "joana" e agora vai ser "ricardo") para a variável "nome" e vai remover esse valor (ricardo) do array
            console.log(valor);
            // Pegar o resto do array ("Ferraz" e "Pereira") e juntar numa string e seperar por um "espaço"
            console.log(sobrenome);
            this.sobrenome = valor.join(' ');

        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;  
        },
        altura,
        peso,
        // Getter
        get imc() {  // get -> obtém o valor do método.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // toFixed -> duas casas decimais
        }
    };
}

const p6 = criaPessoa5('Joana', 'Darc', 1.1, 30);
p6.nomeCompleto = 'Ricardo Ferraz Pereira';
console.log(p6.nome);
console.log(p6.sobrenome);
console.log(p6.nomeCompleto);

