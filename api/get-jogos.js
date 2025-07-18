const { createClient } = require('@supabase/supabase-js');

// Exporta uma função assíncrona que o Render vai chamar
export default async (request, response) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    let { data: jogos, error } = await supabase.from('jogos').select('*');
    if (error) throw error;
    
    // No Render, usamos response.status().json() para enviar a resposta
    return response.status(200).json(jogos);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};