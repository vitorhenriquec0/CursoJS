const nome = 'Vitor Henrique';
const sobrenome = 'Cardoso';
const idade = 18;
const peso = 80;
const altura = 1.85;
let imc; // peso / (altura * altura);
let anoNascimento; // 2025 - idade;

imc = peso / (altura * altura);
console.log(imc);
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} metros de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);