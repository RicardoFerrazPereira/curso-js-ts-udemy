// Escreva uma função chamada "ePaisagem" que recebe
// dois argumentos, largura e altura de uma imagem (number)
// Retorne true se a imagem estiver no modo paisagem

const ePaisagem = (larg, alt) => larg > alt ? true : false;

console.log (ePaisagem(200, 150));

// OU

// A gente ja está checando uma coisa que já vai retornar true ou false,
// então podemos tirar o final do ternário
const ePaisagem1 = (larg, alt) => larg > alt;

console.log (ePaisagem1(200, 150));
