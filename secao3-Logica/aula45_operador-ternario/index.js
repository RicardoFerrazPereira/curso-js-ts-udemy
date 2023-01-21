// Operador Ternário 
// ? :

const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal');
// }

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);