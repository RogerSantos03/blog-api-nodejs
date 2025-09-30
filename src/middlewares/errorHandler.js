// src/middlewares/errorHandler.js
const { Prisma } = require('@prisma/client');

const errorHandler = (err, req, res, next) => {
  console.error(err); // Log do erro para depuração

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Erros conhecidos do Prisma (ex: violação de constraint unique)
    if (err.code === 'P2002') {
      return res.status(409).json({
        error: `Conflito: Já existe um registro com este ${err.meta.target.join(', ')}.`,
      });
    }
    // Chave estrangeira não encontrada
    if (err.code === 'P2003') {
        return res.status(400).json({
            error: `ID de ${err.meta.field_name} não encontrado.`,
        });
    }
     // Registro para deletar ou atualizar não encontrado
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Registro não encontrado.' });
    }
  }

  // Erro genérico
  return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
};

module.exports = errorHandler;