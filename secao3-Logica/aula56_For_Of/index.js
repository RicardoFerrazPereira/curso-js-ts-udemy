// For Of -> específico para objetos interáveis

// indice     0123456...
const nome = 'Farroch Ferraz';

for (let valor of nome) {
    console.log(valor);
}
console.log('--------------------------------');

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
console.log('--------------------------------');

for (let i in nome) {
    console.log(nome[i]);
}
console.log('#####################################');

const nomes = ['Eddie', 'Farroch', 'Sete'];
// FOR IN -> retorna o índice ou chave (string, array ou objetos)
for (let i in nomes) {
    console.log(nomes[i]);
}
// FOR OF -> interáveis - retorna o valor em si (arrays ou strings)
for (let valor of nomes) {
    console.log(valor);
}
// FOR CLÁSSICO -> Geralmente com interáveis (array ou strings)
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
// FOR EACH
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

