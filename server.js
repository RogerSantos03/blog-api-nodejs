// server.js
require('dotenv').config();
require('express-async-errors'); // Importa o handler de erros assíncronos

const express = require('express');
const app = express();
const mainRouter = require('./src/routes');
const errorHandler = require('./src/middlewares/errorHandler');

// Middleware para interpretar JSON
app.use(express.json());

// Rota principal da API
app.use('/api', mainRouter);

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});