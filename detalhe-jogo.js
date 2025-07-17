document.addEventListener('DOMContentLoaded', () => {
    // Simulação de banco de dados
    const jogosDB = {
        '1': {
            titulo: 'Final do Campeonato Sub-15: Time Azul vs. Time Vermelho',
            data: '15/07/2025',
            atletas: [
                { id: 10, nome: 'Jogador Destaque #7', posicao: 'Meio-campo' },
                // Poderíamos adicionar outros atletas que jogaram esta partida aqui
            ]
        }
        // Poderíamos adicionar outros jogos aqui
    };

    // Pega o ID do jogo da URL (ex: jogo.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const jogoId = urlParams.get('id');

    const jogo = jogosDB[jogoId];

    if (jogo) {
        // Atualiza o cabeçalho com o título do jogo
        const infoJogo = document.getElementById('info-jogo');
        infoJogo.textContent = jogo.titulo;

        // Popula a seção de atletas relacionados
        const secaoAtletas = document.getElementById('atletas-relacionados');
        secaoAtletas.innerHTML = '<h2>Atletas Analisados no Jogo</h2>'; // Limpa o conteúdo estático

        if (jogo.atletas.length > 0) {
            jogo.atletas.forEach(atleta => {
                const itemAtleta = document.createElement('div');
                itemAtleta.className = 'item-lista'; // Reutilizando a classe CSS que já temos
                itemAtleta.innerHTML = `
                    <h3>${atleta.nome}</h3>
                    <p>Posição: ${atleta.posicao}</p>
                    <a href="/atleta.html?id=${atleta.id}">Ver Perfil Completo</a>
                `;
                secaoAtletas.appendChild(itemAtleta);
            });
        } else {
            secaoAtletas.innerHTML += '<p>Nenhum atleta analisado para esta partida ainda.</p>';
        }

    } else {
        // Se o jogo não for encontrado
        const mainContent = document.querySelector('main.container');
        mainContent.innerHTML = '<h1>Jogo não encontrado</h1><a href="/" class="back-link">← Voltar para a Página Inicial</a>';
    }
});