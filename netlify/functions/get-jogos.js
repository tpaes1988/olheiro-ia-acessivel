exports.handler = async function(event, context) {
    // No futuro, este array virá de um banco de dados real.
    // Por enquanto, ele mora aqui no backend.
    const jogos = [
        { id: 1, titulo: 'Final do Campeonato Sub-15: Time Azul vs. Time Vermelho', data: '15/07/2025' },
        { id: 2, titulo: 'Semifinal Estadual Sub-17: Guerreiros FC vs. Águias do Sul', data: '11/07/2025' }
    ];

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogos)
    };
};