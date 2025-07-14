// return
// retorna um valor
// termina a função

function soma(a, b) {
    return a + b
}

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto);

