// Escreva uma função que receba 2 números e retorne o maior deles

const retornaMaiorNumero = (num1, num2) => {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const maior = retornaMaiorNumero(1, 2);
console.log(maior);

// OU

console.log(retornaMaiorNumero(1, 2)); // como não vou reutilizar o valor da função em nenhum lugar,
                                       // então podemos chamar a função direto dentro do console.log

console.log('------ REFATURAR ESSA FUNÇÃO "retornaMaiorNumero"');


// PRIMEIRA MELHORIA -> TIRAR O ELSE

const retornaMaiorNumeroPrimeiraMelhoria = (num1, num2) => {

    if (num1 > num2) {
        return num1; // se a condição for verdadeira, o return é executado e sai da função. 
    } 
    return num2; // caso contrário ele retorna o num2
}  
console.log(retornaMaiorNumeroPrimeiraMelhoria(10, 23));  

// SEGUNDA MELHORIA -> quando eu tenho o bloco if com uma condição (uma linha apenas), podemos eliminar as chaves

const retornaMaiorNumeroSegundaMelhoria = (num1, num2) => {

    if (num1 > num2) return num1;  
    return num2; 
} 
  
console.log(retornaMaiorNumeroSegundaMelhoria(10, 23));  

// TERNÁRIO - TERCEIRA MELHORIA

const retornaMaiorNumeroTernario = (num1, num2) => {

    return num1 > num2 ? num1 : num2; 
} 
  
console.log(retornaMaiorNumeroTernario(10, 23));  

// QUARTA MELHORIA - Quando a "arrow function" tem uma linha só ('return num1 > num2 ? num1 : num2;'),
// não precisamos das chaves, ficando tudo na mesma linha. E quando ela tem só uma linha,
// fica implícito que o que tem nessa linha será retornado, podemos remover o "return" também
const retornaMaiorNumeroArrowFunction = (num1, num2) => num1 > num2 ? num1 : num2; 
  
console.log(retornaMaiorNumeroArrowFunction(10, 23));  


