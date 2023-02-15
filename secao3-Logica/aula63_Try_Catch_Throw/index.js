// 
// CATCH -> CAPTURA O ERRO
// THROW -> LANÇA O ERRO

try {
    // É executada quando não há erros
} catch (error) {
    // É executada quando há erros
}

const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        //throw ('x e y precisam ser números'); // lançando o erro
        throw new Error('x e y precisam ser números'); 
    }
    return x + y;
}

try {
console.log(soma(1, 2));
console.log(soma('1', 2))
} catch(error) {
   console.log(error); // não devemos mostrar o erro para o usuário final
   console.log('Alguma coisa mais amigável para o usuário');
}