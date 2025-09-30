// src/controllers/post.controller.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  const { title, content, userId, categoryId } = req.body;
  const post = await prisma.post.create({
    data: { title, content, userId, categoryId },
  });
  res.status(201).json(post);
};

// Desafio: Paginação
exports.getAllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const posts = await prisma.post.findMany({
    skip: skip,
    take: limit,
    include: {
      author: { select: { name: true } },
      category: { select: { name: true } },
    },
    orderBy: {
        createdAt: 'desc'
    }
  });

  const totalPosts = await prisma.post.count();

  res.status(200).json({
    currentPage: page,
    totalPages: Math.ceil(totalPosts / limit),
    totalPosts,
    posts,
  });
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: {
      author: { select: { name: true } },
      category: { select: { name: true } },
    },
  });

  if (!post) {
    return res.status(404).json({ error: 'Post não encontrado' });
  }
  res.status(200).json(post);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { title, content, categoryId },
  });
  res.status(200).json(post);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await prisma.post.delete({ where: { id: parseInt(id) } });
  res.status(204).send();
};