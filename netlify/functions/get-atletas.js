exports.handler = async function(event, context) {
    // No futuro, estes atletas virão de um banco de dados real.
    const atletas = [
        { id: 10, nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo' },
        { id: 11, nome: 'Atacante Veloz #9', time: 'Time Vermelho', posicao: 'Atacante' }
    ];

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(atletas)
    };
};