import { createClient } from '@supabase/supabase-js'

// Pega as chaves que guardamos nos "Secrets" do Replit
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async function(event, context) {
    // *** AGORA BUSCA DO BANCO DE DADOS REAL ***
    let { data: jogos, error } = await supabase
        .from('jogos') // O nome da nossa tabela
        .select('*'); // Pega todas as colunas

    if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(jogos)
    };
};