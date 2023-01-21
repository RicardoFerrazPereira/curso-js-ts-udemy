let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// 1ª forma de fazer 

// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;

// console.log(varA, varB, varC);

// 2ª forma de fazer

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);


