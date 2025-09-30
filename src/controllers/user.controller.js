// src/controllers/user.controller.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  // Nunca retorne a senha, mesmo que hasheada
  const { password: _, ...userWithoutPassword } = user;
  res.status(201).json(userWithoutPassword);
};

exports.getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true }, // Seleciona campos específicos
  });
  res.status(200).json(users);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    select: { id: true, name: true, email: true },
  });
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const data = { name, email };
  if (password) {
    data.password = await bcrypt.hash(password, 10);
  }

  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
  const { password: _, ...userWithoutPassword } = user;
  res.status(200).json(userWithoutPassword);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  res.status(204).send();
};

// Desafio: Listar posts de um usuário
exports.getPostsByUser = async (req, res) => {
    const { id } = req.params;
    const posts = await prisma.post.findMany({
        where: { userId: parseInt(id) },
        include: { category: { select: { name: true } } } // Inclui o nome da categoria
    });
    res.status(200).json(posts);
}