const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += num;
texto.innerHTML += `<p>Raiz quadrada: ${num ** 1/2}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;

/*window.document.body.innerHTML = prompt('Digite um número:');

let num = Number(document.body.innerHTML);

window.document.body.innerHTML += `<br />Seu número é: ${num} <br>`;
window.document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num)} <br>`;
window.document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br>`;
window.document.body.innerHTML += `É NaN: ${Number.isNaN(num)} <br>`;
window.document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br>`;
window.document.body.innerHTML += `Arredonando para cima: ${Math.ceil(num)}<br>`;
window.document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)} <br>`
*/