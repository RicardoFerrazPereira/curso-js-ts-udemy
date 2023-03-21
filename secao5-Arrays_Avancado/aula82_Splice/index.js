// Primeiro parâmetro -> qual índice quero começar a mexer
// Segundo parâmetro -> quantos elementos quero remover do array
// Terceiro parâmetro em diante -> elemento a serem adicionados no array

// Exemplo => nomes.splice(indice, delete, elem1, elem2, elem3...)

// Indice -       -6          -5       -4      -3      -2      -1   
// Indice +        0           1        2       3       4       5
const nomes = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']

// Vou remover do índice 4, um elemento:
// nomes.splice(4, 2);
// console.log(nomes);

// Vou remover no índice 3, um elemento (remover "Tati"):
const removidos = nomes.splice(3, 1);
console.log(nomes, removidos);

console.log('#######################################################################')

// Adicionar o elemento "sete" no índice 3
const nomes1 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
const removidos1 = nomes1.splice(3, 0, 'Sete'); 
console.log(nomes1, removidos1);

console.log('########################################################################')

// Adicionar o elemento "sete" e excluir o elemento "Tati" do ídice 3
const nomes2 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
const removidos2 = nomes2.splice(3, 1, 'Sete'); 
console.log(nomes2, removidos2);

console.log('#########################################################')

// Adicionar o elemento "sete" e "ziva" no índice 3 em diante e excluir o elemento "Tati" e 'Kyra' a partir do ídice 3
const nomes3 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
const removidos3 = nomes3.splice(3, 2, 'Sete', 'Ziva'); 
console.log(nomes3, removidos3);

console.log('')
console.log('########## SIMULAR FUNÇÃO POP ###############################')
console.log('')

// Simulando a função pop(); 
// função pop(), remove o último índice do array

// Remover o ultimo elemento do array
const nomes4 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
const removidos4 = nomes4.splice(-1, 1); // Vou remover 1 elemento à partir do ultimo índice
console.log(nomes4, removidos4);

console.log('')
console.log('########## SIMULAR FUNÇÃO SHIFT ###############################')
console.log('')

// Simulando a função SHIFT(); 
// função shift(), remove 1 elemento à partir do primeiro índice do array

// Remover o ultimo elemento do array
const nomes5 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
const removidos5 = nomes5.splice(0, 1); // Vou remover 1 elemento à partir do ultimo índice
console.log(nomes5, removidos5);

console.log('')
console.log('########## SIMULAR FUNÇÃO SHIFT ###############################')
console.log('')

// Simular a função PUSH() -> Adicionar um ou vários elemento no final do array
const nomes6 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
nomes6.splice(nomes6.length, 0, 'Sour');
console.log(nomes6);

console.log('')
console.log('########## SIMULAR FUNÇÃO UNSHIFT ###############################')
console.log('')

// Simular a função UNPUSH() -> Adicionar um ou vários elementos no início do array
const nomes7 = ['Ricardo', 'Farroch', 'Eddie', 'Tati', 'Kyra', 'Bia']
nomes7.splice(0, 0, 'Sour', 'Bizarro');
console.log(nomes7);




