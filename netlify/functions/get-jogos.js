// A forma "require" é mais compatível com "exports.handler" do que "import"
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async function(event, context) {
    try {
        let { data: jogos, error } = await supabase
            .from('jogos')
            .select('*');

        if (error) {
            // Lança o erro para ser pego pelo catch
            throw error;
        }

        return {
            statusCode: 200,
            body: JSON.stringify(jogos)
        };
    } catch (error) {
        // Retorna uma mensagem de erro clara no corpo da resposta
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};