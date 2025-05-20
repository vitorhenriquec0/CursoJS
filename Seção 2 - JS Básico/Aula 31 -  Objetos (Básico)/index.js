const pessoa1 = {
    nome: 'Vítor',
    sobrenome: 'Henrique',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
}

pessoa1.fala();


/* function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,sobrenome, idade};
}

const pessoa1 = criaPessoa('Vitor', 'Henrique', 18);
console.log(pessoa1.nome, pessoa1.sobrenome); */


/* const pessoa1 = {
    nome: 'Vítor',
    sobrenome: 'Henrique',
    idade: 18
};

console.log(pessoa1.nome); */