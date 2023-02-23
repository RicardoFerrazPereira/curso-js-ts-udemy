//IIFE (Immediately Invoked Function Expression) é uma função em JavaScript
// que é executada assim que definida.

// Contém duas partes principais. A primeira é a função anônima cujo escopo léxico 
// é encapsulado entre parênteses. Isso previne o acesso externo às variáveis
// declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

// A função se torna uma expressão que é imediatamente executada. A variável definida
// dentro da expressão não pode ser acessada fora de seu escopo.

// É uma função auto-invocada que você declara, mesmo como anônima,
// e que, no momento da declaração, você pode invocá-la.

// Com esse tipo de função é possível fugir do escopo global do browser, 
// limitando-se apenas ao escopo local da função. 

(function() {
  console.log('Será executado na hora e fugirá do escopo global')
}) () //Invocação da função

console.log('________________');

(function () {
  const nome = "Ricardo";
  console.log(nome);
})();
// A variável nome não é acessível fora do escopo da expressão
//nome // gerará o erro "Uncaught ReferenceError: nome is not defined"
const nome = 'Farroch';
console.log(nome);

console.log('________________');

// Atribuir uma IIFE a uma variável não armazenará a função em si, 
// mas o resultado da função.

const result = (function () {
  const nome = "Eddie";
  return nome;
})();
// Imediatamente gera a saída:
console.log(result); // "Eddie"

console.log('________________');

// Está tudo dentro da função, trabalhamos como se elas não existic

(function() {  // Posso fazer o que quiser dentro do escopo 

  const sobrenome = "da Gama";

  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Vasco'));
  }

  falaNome();

})();

// Podemos passar parâmetros para a função

(function(idade, peso, altura) {  // Parâmetros

  const sobrenome = "Mungo";

  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Eddie'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(10, 15, 1.50); // Argumentos


