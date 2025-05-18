let varA = 'A';
let varB = 'B';
let varC = 'C';
let aux;

aux = varA;
varA = varB;
varB = varC;
varC = aux;

// Outra resolução seria:
// [varA, varB, varC] = [varB, varC, varA];
// console.log(varA, varB, varC);

console.log(varA, varB, varC);
