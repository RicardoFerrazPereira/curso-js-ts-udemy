try {
    // É executada quando não há erros
} catch (error) {
    // É executada quando há erros
} finally {
    // o finally é sempre executado, mas pode ser omitido se vc não precisar que um código seja executado sempre
    // em alguns momentos vamos precisar do bloco "finally"
}

// SEM ERRO
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
}catch (e) {
    console.log('Tratando o erro');
}finally {
    console.log('Finally: Eu sempre sou executado');
}

console.log('########################');

// COM ERRO
try {
    console.log(a)
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
}catch (e) {
    console.log('Tratando o erro');
}finally {
    console.log('Finally: Eu sempre sou executado');
}