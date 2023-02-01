console.log("Linha 0");
console.log("Linha 1");
console.log("Linha 2");
console.log("Linha 3");
console.log("Linha 4");
console.log("Linha 5");

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) {    
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {    
    console.log(`Linha ${i}`);
}

for (let i = 7; i <= 10; i++) {    
    console.log(`Linha ${i}`);
}

for (let i = 100; i <= 200; i += 10) {    
    console.log(`Linha ${i}`);
}

for (let i = -100; i <= 100; i += 10) {    
    console.log(`Linha ${i}`);
}

// INVERTIDO
for (let i = 500; i >= 400; i -= 10) {    
    console.log(`Linha ${i}`);
}

// PAR OU IMPAR
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'; // OPERADOR TERNÁRIO
    console.log(i, par);
}

// PERCORRER UM ARRAY
const frutas = ['Banana', 'Uva', 'Abacate', 'Laranja', 'Ameixa', 'Morango'];

console.log(frutas.length); // Tamanho do array

for (let i = 0; i < frutas.length; i++) {    
    console.log(i);
}

for (let i = 0; i < frutas.length; i++) {    
    console.log(frutas[i]);
}

for (let i = 0; i < frutas.length; i++) {    
    console.log(`Índice ${i}`, frutas[i]);
}