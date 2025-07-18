document.addEventListener('DOMContentLoaded', function() {
    carregarDadosIniciais();
});

async function carregarDadosIniciais() {
    const secaoJogos = document.querySelector('#jogos-analisados');
    const secaoAtletas = document.querySelector('#atletas-destaque');

    secaoJogos.innerHTML = '<h2>Jogos Analisados</h2><p>Buscando jogos...</p>';
    secaoAtletas.innerHTML = '<h2>Atletas em Destaque</h2><p>Carregando atletas...</p>';

    // --- BUSCAR JOGOS ---
    try {
        // NOVO ENDEREÇO, DENTRO DA MESMA CASA!
        const response = await fetch('/.netlify/functions/server/jogos');
        if (!response.ok) throw new Error('Erro ao buscar jogos');
        const jogos = await response.json();
        secaoJogos.innerHTML = '<h2>Jogos Analisados</h2>';
        jogos.forEach(jogo => {
            const itemJogo = document.createElement('div');
            itemJogo.className = 'item-lista';
            itemJogo.innerHTML = `<h3>${jogo.titulo}</h3><p>Data: ${jogo.data}</p><a href="/jogo.html?id=${jogo.id}">Ver Análise Detalhada</a>`;
            secaoJogos.appendChild(itemJogo);
        });
    } catch (error) {
        secaoJogos.innerHTML = '<h2>Jogos Analisados</h2><p>Erro ao carregar os jogos.</p>';
        console.error(error);
    }

    // --- BUSCAR ATLETAS ---
    try {
        // NOVO ENDEREÇO, DENTRO DA MESMA CASA!
        const response = await fetch('/.netlify/functions/server/atletas');
        if (!response.ok) throw new Error('Erro ao buscar atletas');
        const atletas = await response.json();
        secaoAtletas.innerHTML = '<h2>Atletas em Destaque</h2>';
        atletas.forEach(atleta => {
            const itemAtleta = document.createElement('div');
            itemAtleta.className = 'item-lista';
            itemAtleta.innerHTML = `<h3>${atleta.nome}</h3><p>Time: ${atleta.time} | Posição: ${atleta.posicao}</p><a href="/atleta.html?id=${atleta.id}">Ver Perfil Completo</a>`;
            secaoAtletas.appendChild(itemAtleta);
        });
    } catch (error) {
        secaoAtletas.innerHTML = '<h2>Atletas em Destaque</h2><p>Erro ao carregar os atletas.</p>';
        console.error(error);
    }
}