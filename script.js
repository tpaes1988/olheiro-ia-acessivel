document.addEventListener('DOMContentLoaded', function() {
    // Função para simular o carregamento de dados do nosso futuro "backend"
    carregarDadosIniciais();
});
async function carregarDadosIniciais() {
    // Seleciona as seções no HTML
    const secaoJogos = document.querySelector('#jogos-analisados');
    const secaoAtletas = document.querySelector('#atletas-destaque');

    // Limpa o conteúdo para mostrar que está carregando
    secaoJogos.innerHTML = '<h2>Jogos Analisados</h2><p>Buscando jogos...</p>';
    
    try {
        // *** A MÁGICA ACONTECE AQUI ***
        // Fazendo a "ligação" para o nosso backend (a Netlify Function)
        const response = await fetch('/.netlify/functions/get-jogos');
        const jogos = await response.json(); // Pega a resposta e transforma em dados utilizáveis

        // Limpa o texto "Buscando jogos..."
        secaoJogos.innerHTML = '<h2>Jogos Analisados</h2>';

        // Adiciona os jogos que vieram do backend na página
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
        // Se der algum erro na "ligação", mostra uma mensagem amigável
        secaoJogos.innerHTML = '<h2>Jogos Analisados</h2><p>Não foi possível carregar os jogos. Tente novamente mais tarde.</p>';
        console.error('Erro ao buscar jogos:', error);
    }


    // Por enquanto, os atletas continuam com dados de mentira. Um passo de cada vez!
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

// A linha que chama a função continua a mesma
document.addEventListener('DOMContentLoaded', function() {
    carregarDadosIniciais();
});
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