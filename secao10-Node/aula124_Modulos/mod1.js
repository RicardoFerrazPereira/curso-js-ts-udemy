const nome = 'Ricardo';
const sobrenome = 'Ferraz';

const falaNome = () => nome + ' ' + sobrenome;


// Exemplo de um modo para exportar
// console.log(module)
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// Resumindo o modo acima
//console.log(module)
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';
//console.log(module.exports);

