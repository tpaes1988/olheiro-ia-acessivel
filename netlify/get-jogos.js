const { createClient } = require('@supabase/supabase-js');

module.exports = async (request, response) => {
    // --- A LINHA MÁGICA QUE DÁ PERMISSÃO ---
    response.setHeader('Access-Control-Allow-Origin', '*');

    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    try {
        let { data, error } = await supabase.from('jogos').select('*');
        if (error) throw error;
        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
};