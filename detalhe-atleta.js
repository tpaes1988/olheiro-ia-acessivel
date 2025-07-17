document.addEventListener('DOMContentLoaded', () => {
    // Simulação de um banco de dados de atletas
    const atletasDB = {
        '10': {
            nome: 'Jogador Destaque #7',
            time: 'Time Azul',
            posicao: 'Meio-campo',
            stats: [
                { nome: 'Passes Certos', valor: 42, clipes: 15 },
                { nome: 'Finalizações', valor: 5, clipes: 2 },
                { nome: 'Desarmes', valor: 8, clipes: 8 }
            ]
        },
        '11': { // Adicionando outro atleta para teste futuro
            nome: 'Atacante Veloz #9',
            time: 'Time Vermelho',
            posicao: 'Atacante',
            stats: [
                { nome: 'Passes Certos', valor: 15, clipes: 5 },
                { nome: 'Finalizações', valor: 12, clipes: 9 },
                { nome: 'Gols', valor: 2, clipes: 2 }
            ]
        }
    };

    // Pega o ID do atleta da URL (ex: atleta.html?id=10)
    const urlParams = new URLSearchParams(window.location.search);
    const atletaId = urlParams.get('id');

    const atleta = atletasDB[atletaId];

    if (atleta) {
        // Atualiza o cabeçalho com as informações do atleta
        const infoAtleta = document.getElementById('info-atleta');
        infoAtleta.textContent = `${atleta.nome} - ${atleta.posicao}`;

        // Popula a seção de estatísticas
        const secaoEstatisticas = document.getElementById('estatisticas');
        secaoEstatisticas.innerHTML = '<h2>Estatísticas de Desempenho</h2>'; // Limpa o conteúdo estático

        atleta.stats.forEach(stat => {
            const itemStat = document.createElement('div');
            itemStat.className = 'stat-item';
            itemStat.innerHTML = `
                <span>${stat.nome}: <strong>${stat.valor}</strong></span>
                <a href="#">Ver ${stat.clipes} Clipes</a>
            `;
            secaoEstatisticas.appendChild(itemStat);
        });

    } else {
        // Se o atleta não for encontrado
        const mainContent = document.querySelector('main.container');
        mainContent.innerHTML = '<h1>Atleta não encontrado</h1><a href="/" class="back-link">← Voltar para a Página Inicial</a>';
    }
});