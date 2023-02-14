const times = ['Vasco', 'Bulls', 'Liverpool'];

// For in -> Lê os índices ou chaves do objeto
for (let i in times) {
    console.log(i);
}

for (let i = 0; i < times.length; i++) {
    console.log(times[i]);
}
//////////////////////////////////////////////////
// Ler as chaves do objeto
const pessoa = {
    nome: 'Farroch',
    sobrenome: 'Ferraz',
    idade: 2
}

for (let chave in pessoa) {
    console.log(chave);
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}