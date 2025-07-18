const { createClient } = require('@supabase/supabase-js');

module.exports = async (request, response) => {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    // Por enquanto, os atletas ainda não estão no banco de dados.
    // Vamos retornar os dados de exemplo.
    const atletas = [
        { id: 10, nome: 'Jogador Destaque #7', time: 'Time Azul', posicao: 'Meio-campo' },
        { id: 11, nome: 'Atacante Veloz #9', time: 'Time Vermelho', posicao: 'Atacante' }
    ];
    return response.status(200).json(atletas);
};