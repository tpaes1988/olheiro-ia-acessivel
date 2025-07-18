document.addEventListener('DOMContentLoaded', async () => {
    // Pega o ID do atleta da URL da página (ex: atleta.html?id=10)
    const urlParams = new URLSearchParams(window.location.search);
    const atletaId = urlParams.get('id');

    const mainContent = document.querySelector('main.container');
    const infoAtleta = document.getElementById('info-atleta');
    const secaoEstatisticas = document.getElementById('estatisticas');

    // Se não houver ID na URL, mostra erro.
    if (!atletaId) {
        mainContent.innerHTML = '<h1>ID do atleta não fornecido</h1><a href="/" class="back-link">← Voltar</a>';
        return;
    }

    try {
        // *** A MÁGICA ACONTECE AQUI ***
        // Liga para o backend especialista, passando o ID do atleta
        const response = await fetch(`/.netlify/functions/get-atleta-by-id?id=${atletaId}`);
        if (!response.ok) {
            throw new Error('Falha ao buscar dados do atleta');
        }
        const atleta = await response.json();

        // Atualiza o cabeçalho com as informações do atleta
        infoAtleta.textContent = `${atleta.nome} - ${atleta.posicao}`;

        // Limpa e popula a seção de estatísticas
        secaoEstatisticas.innerHTML = '<h2>Estatísticas de Desempenho</h2>';
        atleta.stats.forEach(stat => {
            const itemStat = document.createElement('div');
            itemStat.className = 'stat-item';
            itemStat.innerHTML = `
                <span>${stat.nome}: <strong>${stat.valor}</strong></span>
                <a href="#">Ver ${stat.clipes} Clipes</a>
            `;
            secaoEstatisticas.appendChild(itemStat);
        });

    } catch (error) {
        // Se der qualquer erro, mostra mensagem
        mainContent.innerHTML = `<h1>Erro ao carregar atleta</h1><p>${error.message}</p><a href="/" class="back-link">← Voltar</a>`;
        console.error('Erro:', error);
    }
});