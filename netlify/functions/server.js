const express = require('express');
const serverless = require('serverless-http');
const { createClient } = require('@supabase/supabase-js');

// Pega as chaves do ambiente
const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

// **NOSSO TESTE DE SEGURANÇA!**
// Se as chaves não existirem, não continue.
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  const errorMessage = "As variáveis de ambiente do Supabase não foram configuradas corretamente.";
  console.error(errorMessage);
  // Retorna um handler que SEMPRE mostrará o erro.
  module.exports.handler = async () => ({
    statusCode: 500,
    body: JSON.stringify({ error: errorMessage })
  });
} else {
  // Se as chaves existem, o código continua normalmente.
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const app = express();
  const router = express.Router();

  router.get('/jogos', async (req, res) => {
    try {
      let { data, error } = await supabase.from('jogos').select('*');
      if (error) throw error;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/atletas', (req, res) => {
    const atletas = [ { id: 10, nome: 'Jogador Destaque #7' }, { id: 11, nome: 'Atacante Veloz #9' } ];
    res.json(atletas);
  });

  app.use('/.netlify/functions/server', router);
  module.exports.handler = serverless(app);
}