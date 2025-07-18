document.addEventListener('DOMContentLoaded', function() {
    // A função principal que carrega todos os dados iniciais
    carregarDadosIniciais();
});

async function carregarDadosIniciais() {
    // Seleciona as seções no HTML
    const secaoJogos = document.querySelector('#jogos-analisados');
    const secaoAtletas = document.querySelector('#atletas-destaque');

    // Limpa as seções para mostrar que algo está acontecendo
    secaoJogos.innerHTML = '<h2>Jogos Analisados</h2><p>Buscando jogos...</p>';
    secaoAtletas.innerHTML = '<h2>Atletas em Destaque</h2><p>Carregando...</p>';

    try {
        // *** FAZENDO A LIGAÇÃO PARA O BACKEND ***
        const response = await fetch('/.netlify/functions/get-jogos');
        // Se a resposta não for "OK" (ex: erro 500 no servidor), lança um erro
        if (!response.ok) {
            throw new Error(`Erro na rede: ${response.statusText}`);
        }
        const jogos = await response.json();

        // Limpa o texto "Buscando jogos..."
        secaoJogos.innerHTML = '<h2>Jogos Analisados</h2>';

        // Adiciona os jogos que vieram do backend
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

    } catch (error) {
        // Se der qualquer erro, mostra uma mensagem amigável
        secaoJogos.innerHTML = '<h2>Jogos Analisados</h2><p>Não foi possível carregar os jogos. Tente novamente mais tarde.</p>';
        console.error('Erro ao buscar jogos:', error);
    }

    // --- Dados dos Atletas (ainda como exemplo) ---
    const atletas = [
        { id: 10, nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo' }
    ];
    secaoAtletas.innerHTML = '<h2>Atletas em Destaque</h2>';
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