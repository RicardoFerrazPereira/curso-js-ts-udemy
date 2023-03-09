// FUNÇAÕ RECURSIVA
// É uma função que chama a si mesma até encontrar uma instrução para parar

const recursiva = (max) => {
    if(max >= 10) return;
    max++;
    console.log(max)
    recursiva(max);
}

recursiva(0);
