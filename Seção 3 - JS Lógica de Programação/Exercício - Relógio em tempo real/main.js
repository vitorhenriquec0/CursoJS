function traduzirDiaSemana(numeroDoDia) {
    switch (numeroDoDia) {
        case 0: return 'Domingo';
        case 1: return 'Segunda-Feira';
        case 2: return 'Terça-Feira';
        case 3: return 'Quarta-Feira';
        case 4: return 'Quinta-Feira';
        case 5: return 'Sexta-Feira';
        case 6: return 'Sábado';
    }
}

function traduzirMes(numeroDoMes) {
    switch (numeroDoMes) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function atualizarHorario() {
    const agora = new Date();

    const dia = agora.getDate();
    const ano = agora.getFullYear();
    let hora = zeroAEsquerda(agora.getHours());
    let min = zeroAEsquerda(agora.getMinutes());
    let seg = zeroAEsquerda(agora.getSeconds());

    const nomeDoDia = traduzirDiaSemana(agora.getDay());
    const nomeDoMes = traduzirMes(agora.getMonth());

    const horarioCompleto = `${nomeDoDia}, ${dia} de ${nomeDoMes} de ${ano}, ${hora}:${min}:${seg}`;

    document.getElementById('horario').textContent = horarioCompleto;
}

// --- Iniciando o Relógio ---

// Chama a função uma vez imediatamente para não haver atraso na exibição
atualizarHorario();

// Configura para chamar a função repetidamente a cada 1000ms (1 segundo)
setInterval(atualizarHorario, 1000);
