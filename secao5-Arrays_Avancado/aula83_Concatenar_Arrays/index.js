console.log('')
console.log('########## Exemplo 1 - CONCAT ########################')
console.log('')

const a1 = [1, 2, 3];
const a2 =[4, 5, 6];
//const a3 = a1 + a2; // Não vai funcionar como o esperado
const a3 = a1.concat(a2);  // Concatenar o array 'a1' com o array 'a2'

console.log(a3);

console.log('')
console.log('########## Exemplo 2 - CONCAT ########################')
console.log('')

const a01 = [1, 2, 3];
const a02 =[4, 5, 6];
const a03 = a01.concat(a2, [7, 8, 9], 'Vasco');  // Podemos concatenar outro array literal, string....
console.log(a03);

console.log('')
console.log('########## Concatenando com SPREAD OPERATOR ###########')
console.log('')

const a001 = [1, 2, 3];
const a002 =[4, 5, 6];
const a003 = [...a001, ...a002];
console.log(a003);

const a004 = [...a001, 'Vasco', ...a002, ...[7, 8, 9]];
console.log(a004);