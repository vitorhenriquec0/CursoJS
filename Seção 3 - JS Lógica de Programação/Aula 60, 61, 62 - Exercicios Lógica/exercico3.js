// Escreva uma função que recebe um número e retorne:
// Numero é divisível por 3 = Fizz;
// Numero é divisível por 5 = Buzz;
// Numero é divisível por 3 e 5 = FizzBuzz;
// Numero NÃO é divisível por 3 e 5 = Retorna o próprio número;
// Checar se o numero é realmente um numero;
// Use a função com numeros de 0 a 100;

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}