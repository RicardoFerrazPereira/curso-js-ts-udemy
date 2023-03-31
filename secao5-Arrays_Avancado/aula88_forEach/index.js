// forEach -> só está disponível dentro do array
// 


const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// forOf
for(let valor of a1) {
    console.log(valor);
}

console.log('============================')
// forEach
a1.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})