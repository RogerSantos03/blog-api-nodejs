// src/controllers/category.controller.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await prisma.category.create({ data: { name } });
  res.status(201).json(category);
};

exports.getAllCategories = async (req, res) => {
  const categories = await prisma.category.findMany();
  res.status(200).json(categories);
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await prisma.category.update({
    where: { id: parseInt(id) },
    data: { name },
  });
  res.status(200).json(category);
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  await prisma.category.delete({ where: { id: parseInt(id) } });
  res.status(204).send();
};