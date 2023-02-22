// Closures -> é a habilidade que a função tem em acessar seu escopo léxico

function retornaFuncao() {
    const nome = 'Ricardo';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);

////////////////////////////////////////

function retornaFuncao2(nome) {
    return function() {
        return nome;
    };
}

const funcao1 = retornaFuncao2('Farroch');
const funcao2 = retornaFuncao2('Eddie');
console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(), funcao2());