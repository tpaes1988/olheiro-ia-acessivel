module.exports = (request, response) => {
    // --- A LINHA MÁGICA QUE DÁ PERMISSÃO ---
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    const atletasDB = {
        '10': { nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo', stats: [ { nome: 'Passes Certos', valor: 42, clipes: 15 }, { nome: 'Finalizações', valor: 5, clipes: 2 }, { nome: 'Desarmes', valor: 8, clipes: 8 } ] },
        '11': { nome: 'Atacante Veloz #9', time: 'Time Vermelho', posicao: 'Atacante', stats: [ { nome: 'Passes Certos', valor: 15, clipes: 5 }, { nome: 'Finalizações', valor: 12, clipes: 9 }, { nome: 'Gols', valor: 2, clipes: 2 } ] }
    };
    const { id } = request.query;
    const atleta = atletasDB[id];

    if (atleta) {
        return response.status(200).json(atleta);
    }
    return response.status(404).json({ message: 'Atleta não encontrado.' });
};