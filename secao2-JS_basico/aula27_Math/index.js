let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda pra baixo
let num3 = Math.ceil(num1); // arredonda pra cima
let num4 = Math.round(num1); // ,5 pra cima arredonda pra cima

console.log(num2, num3, num4)

console.log(Math.max(1, 2, 4, -10, -33, 100, 230, -100, 1500, 30, 13)); // maior numero
console.log(Math.min(1, 2, 4, -10, -33, 100, 230, -100, 1500, 30, 13)); // menor numero

console.log(Math.random());

const numeroAleatorio = Math.random() * (10 - 5) + 5;

console.log(numeroAleatorio);