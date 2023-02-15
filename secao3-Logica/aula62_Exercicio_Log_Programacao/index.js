// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÂO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const numeroDivisivel = (num1) => {
    if (typeof num1 !== 'number') return num1; // Verifica se num1 é um número ("typeof")
    if(num1 % 3 === 0 && num1 % 5 === 0) return 'FizzBuzz';
    if(num1 % 3 === 0 ) return 'Fizz';
    if(num1 % 5 === 0 ) return 'Buzz';
    return num1;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, numeroDivisivel(i));
}