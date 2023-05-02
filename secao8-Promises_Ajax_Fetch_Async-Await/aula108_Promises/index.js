// Assíncronos
// Vamos criar uma função que demora a executar alguma coisa

// function esperaAi(msg, tempo) {
//     setTimeout(() => {
//         console.log(msg);
//     }, tempo);
// }

// Funçõa que cria um número aleatório no "tempo"

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// esperaAi('Frase 1', 1000) // A mensagem: Frase 1, vai demorar 1 seg (1000 milésimo de segundo), para aparecer na tela.
// esperaAi('Frase 1', aleatorio(1, 3));
// esperaAi('Frase 2', aleatorio(1, 3));
// esperaAi('Frase 3', aleatorio(1, 3));


// Vamos criar uma "promise" para executar as "frases" na ordem que eu quero que seja executado,
// independente do tempo que levar. A "Frase 2" só vai ser executada depois que executar a "Frase 1", 
// não importa o tempo que leve.

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {  // resolve -> o código executou com sucesso, então resolve ele pra mim // reject ->  deu um erro no código, então rejeita isso para mim
        if(typeof msg !== 'string') reject('BAD VALUE')  // Se mensagem for diferente de uma string, vou rejeitar (reject)                                      
        setTimeout(() => {
        resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1 - Conexão com BD', aleatorio(1, 3))
    .then(resposta => {    // then será executado quando for resovido a "promise". Sempre que chamarmos o "resolve", o "then" será executado
        console.log(resposta);
        return esperaAi('Frase 2 - Buscando dados da BASE', aleatorio(1, 3))
    }) 
    .then(resposta => {  
        console.log(resposta);
        return esperaAi('Frase 3 - Tratando dados da BASE', aleatorio(1, 3)); // Vou gerar um erro para o "catch" entrar em ação. Vou colocar números ao invés de uma "string"
    })
    .then(resposta => {  
        console.log(resposta);
        return esperaAi(2222222, aleatorio(1, 3)); // Vou gerar um erro para o "catch" entrar em ação. Vou colocar números ao invés de uma "string"
    })
    .then(resposta => {  // Preciso desse then para exibir a última promise.
        console.log(resposta);
    })
    .then(reposta => {
        console.log('Exibe dados na tela.');
    })
    .catch(e => {   // catch será executado quando for REJECT a "promise". Capturando o erro.
        console.log('ERRO:', e);
    }); 

console.log('Isso aqui será exibido antes de qualquer promise, porque as promise são executadas em paralelo, o JS executa o código e na hora que as promises terminarem ele volta e mostras esses dados')
