document.addEventListener('DOMContentLoaded', function() {
    // Função para simular o carregamento de dados do nosso futuro "backend"
    carregarDadosIniciais();
});

function carregarDadosIniciais() {
    // Dados de exemplo que virão do banco de dados no futuro
    const jogos = [
        { id: 1, titulo: 'Final do Campeonato Sub-15: Time Azul vs. Time Vermelho', data: '15/07/2025' }
    ];

    const atletas = [
        { id: 10, nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo' }
    ];

    // Seleciona as seções no HTML
    const secaoJogos = document.querySelector('#jogos-analisados');
    const secaoAtletas = document.querySelector('#atletas-destaque');

    // Limpa o texto "Nenhum jogo/atleta..."
    secaoJogos.innerHTML = '<h2>Jogos Analisados</h2>';
    secaoAtletas.innerHTML = '<h2>Atletas em Destaque</h2>';

    // Adiciona os jogos de exemplo na página
    jogos.forEach(jogo => {
        const itemJogo = document.createElement('div');
        itemJogo.className = 'item-lista';
        itemJogo.innerHTML = `
            <h3>${jogo.titulo}</h3>
            <p>Data: ${jogo.data}</p>
            <a href="/jogo.html?id=${jogo.id}">Ver Análise Detalhada</a>
        `;
        secaoJogos.appendChild(itemJogo);
    });

    // Adiciona os atletas de exemplo na página
    atletas.forEach(atleta => {
        const itemAtleta = document.createElement('div');
        itemAtleta.className = 'item-lista';
        itemAtleta.innerHTML = `
            <h3>${atleta.nome}</h3>
            <p>Time: ${atleta.time} | Posição: ${atleta.posicao}</p>
            <a href="/atleta.html?id=${atleta.id}">Ver Perfil Completo</a>
        `;
        secaoAtletas.appendChild(itemAtleta);
    });
}