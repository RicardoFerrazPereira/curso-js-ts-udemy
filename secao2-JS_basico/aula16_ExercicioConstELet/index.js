/**
 Ricardo Ferraz Pereira tem 44 anos, pesa 84 kg
 tem 1.85 de altura e seu imc é de 25.9259
 */

const nome = 'Ricardo Ferraz';
const sobrenome = 'Pereira';
const idade = 44;
const peso = 84;
const altura = 1.85;

let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(imc);
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'tem', altura, 'e seu imc é de', imc)

// Template Strings

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)