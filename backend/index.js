// /backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cryptoRoutes = require('./src/routes/cryptoRoutes');

const app = express();
const PORT = 3001; // Forçando a porta 3001

// Configuração CORS mais permissiva para desenvolvimento
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3002'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Logging middleware melhorado
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    apis: {
      coinmarketcap: !!process.env.COINMARKETCAP_API_KEY,
      feargreed: true
    }
  });
});

// Teste de rota
app.get('/', (req, res) => {
  res.json({ message: 'API KyraCrypto está funcionando!' });
});

// Rotas da API
app.use('/api', cryptoRoutes);

// Error handling melhorado
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ 
    error: 'Erro interno do servidor',
    message: err.message,
    path: req.path,
    timestamp: new Date().toISOString()
  });
});
    
// Tratamento de erros do processo
process.on('uncaughtException', (err) => {
  console.error('Erro não tratado:', err);
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

process.on('unhandledRejection', (err) => {
  console.error('Promise rejeitada não tratada:', err);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('Configuração de APIs:', {
    coinmarketcap: !!process.env.COINMARKETCAP_API_KEY,
    feargreed: true
  });
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Erro: A porta ${PORT} já está em uso. Por favor, certifique-se de que nenhum outro processo está usando esta porta.`);
    process.exit(1);
  } else {
    console.error('Erro ao iniciar servidor:', err);
    process.exit(1);
  }
});