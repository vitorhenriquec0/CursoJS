function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

function funcao3(a, b = 2, c) {
    console.log(a + b + c);
}
funcao3(2, undefined, 10)

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') {
            acumulador += numero;
        }
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50);

