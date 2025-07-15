// Função construtora -> objetos
// Função fábrica -> objetos

// Construtora ->  Pessoa (new)

function Pessoa(nome, sobrenome) {

    // Atributos ou métodos privados
    const Id = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Vitor Henrique', 'Cardoso');
console.log(p1)
p1.metodo();