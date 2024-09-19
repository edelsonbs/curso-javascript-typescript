// Exercício
let varA = 'A';
let varB = 'B';
let varC = 'C';
const varAux = varA;

// varA = varB;
// varB = varC;
// varC = varAux;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
