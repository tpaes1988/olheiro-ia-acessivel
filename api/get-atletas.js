module.exports = (request, response) => {
    // --- A LINHA MÁGICA QUE DÁ PERMISSÃO ---
    response.setHeader('Access-Control-Allow-Origin', '*');

    const atletas = [
        { id: 10, nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo' },
        { id: 11, nome: 'Atacante Veloz #9', time: 'Time Vermelho', posicao: 'Atacante' }
    ];
    return response.status(200).json(atletas);
};