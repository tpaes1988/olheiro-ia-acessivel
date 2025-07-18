exports.handler = async function(event, context) {
    // Este é o nosso "banco de dados" de atletas.
    const atletasDB = {
        '10': { nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo', stats: [ { nome: 'Passes Certos', valor: 42, clipes: 15 }, { nome: 'Finalizações', valor: 5, clipes: 2 }, { nome: 'Desarmes', valor: 8, clipes: 8 } ] },
        '11': { nome: 'Atacante Veloz #9', time: 'Time Vermelho', posicao: 'Atacante', stats: [ { nome: 'Passes Certos', valor: 15, clipes: 5 }, { nome: 'Finalizações', valor: 12, clipes: 9 }, { nome: 'Gols', valor: 2, clipes: 2 } ] }
    };

    // Pega o ID que foi passado na URL. Ex: /.netlify/functions/get-atleta-by-id?id=11
    const { id } = event.queryStringParameters;

    // Procura o atleta no nosso "banco de dados"
    const atleta = atletasDB[id];

    // Se encontrou o atleta, retorna os dados dele.
    if (atleta) {
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(atleta)
        };
    }

    // Se não encontrou, retorna um erro "Não Encontrado".
    return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Atleta não encontrado.' })
    };
};