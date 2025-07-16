//                -5     -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);

// push
// nomes.splice(nomes.length, 0, 'Luiz');

// unshift
// nomes.splice(0, 0, 'Luiz', 'Otávio');

// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);



let removidos1 = nomes.splice(3, 0, 'Luiz');
console.log(nomes, removidos1);

let removidos2 = nomes.splice(3, 2, 'Luiz');
console.log(nomes, removidos2);

let removidos3 = nomes.splice(3, 2, 'Luiz', 'Otávio');
console.log(nomes, removidos3);