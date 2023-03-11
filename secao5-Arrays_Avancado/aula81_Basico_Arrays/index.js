// Array
// Podemos manipular esses arrays da maneira que quisermos:


 // Criar array de forma literal (forma mais usada)
const nomes1 = ['Farroch', 'Eddie', 'Sete']; 
console.log(nomes1);

nomes1[2] = 'Kyra'  // Alterar índice
console.log(nomes1);

delete nomes1[1] ;  // Deletar um elemento sem alterar o indice
console.log(nomes1);

console.log('______________________________________');

// Criar um array utilizando o CONSTRUTOR de array (forma menos usada)
const times = new Array('Vasco', 'América', 'Bangu');
console.log(times);

console.log('______________________________________');

// Valor por referência
const cores = ['Branco', 'Azul', 'Amarelo'];
//const novo = cores;
const novo = [...cores]; // spread operator (espalhamento) -> fez uma cópia de 'cores' pra dentro de novo,
                         // por isso no console.log abaixo, o elemento 'amarelo' aparece para cores e para
                         // o "novo" não aparece o 'amarelo'
novo.pop(); // pop -> remove o final do array
console.log(novo);
console.log(cores);

console.log(cores.length); // tamanho do array

console.log('______________________________________');

const carros = ['Fusca', 'Uno', 'Gol'];
const removido = carros.shift();  // shift -> remove elemento do começo do array (não é muito utilizado, pois desloca os índices do array)
console.log(carros, removido);

console.log('______________________________________');

// função push (muito utilizada) -> adiciona qualquer coisa no final do array

const cidades = ['RJ', 'SP', 'BH'];
cidades.push('PR')
console.log(cidades);

console.log('______________________________________');

// Adicionar elemento no início do array (não é muito utilizado, pois desloca os índices do array)

const estados = ['BA', 'PA', 'PE'];
estados.unshift('MG');
estados.unshift('SP');
console.log(estados);

console.log('______________________________________');

// SLICE -> Fatiar o array 

const frutas = ['Banana', 'Uva', 'Jaca', 'Melancia', 'Maçã'];
const fatiar = frutas.slice(1, 3); // Intervalo do índice do array. Onde eu quero começar (índice 1 = Uva)
                                   // onde terminar (índice 3 = Melancia).  Vai selecionar: 'Uva' e 'Jaca'
console.log(frutas);
console.log(fatiar);

const comidas = ['Arroz', 'Ovo', 'Lasanha', 'Macarrão', 'Feijão'];
const fatiar1 = comidas.slice(1, -2); // -2 -> elimina os dois últimos
console.log(comidas);
console.log(fatiar1);

console.log('______________________________________');

// Fazer uma string se tornar array:

// SPLIT (muito utilizado) -> Melhor maneira separar o nome e colocar num array
const nome = 'Ricardo Ferraz Pereira';
const nomes = nome.split(' '); // O que vou utilizar para separar essa string em um array? Espaço (' ').
console.log(nomes);

// JOIN -> fazer o array se tornar uma string

const nomes2 = ['Ricardo', 'Ferraz', 'Pereira'];
const nome1 = nomes2.join(' '); // O que vou utilizar para separar essa string em um array? Espaço (' ').
console.log(nome1);