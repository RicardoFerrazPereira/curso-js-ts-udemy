const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeiroNumero = numeros[0];
const segundoNumero = numeros[1];
const terceiroNumero = numeros[2];
const quartoNumero = numeros[3];
const quintoNumero = numeros[4];
const sextoNumero = numeros[5];
const setimoNumero = numeros[6];
const oitavoNumero = numeros[7];
const nonoNumero = numeros[8];

console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero,
    sextoNumero, setimoNumero, oitavoNumero, nonoNumero);

// DESESTRUTURAR POR ATRIBUIÇÃO -> pegar valores do array e jogar direto na variável

// ... rest, ... spread

const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const [priNumero, segNumero ] = nuns;
const [priNumero, segNumero, ...resto ] = nuns; // ...resto -> vai receber o resto do array

const [ , ,terNumero, quaNumero, , sexNumero, , ,noNumero ] = nuns; // Pular valores utilizando espações vazios ( , )

console.log(priNumero, segNumero);
console.log(resto);
console.log(terNumero, quaNumero, sexNumero, noNumero);

// indice          0          1          2
// indice  =    0  1  2    0  1  2    0  1  2
const nums = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(nums[1][2]);

const [lista1, lista2, lista3] = nums;
console.log(lista3[2]);



