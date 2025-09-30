// src/services/validation.schemas.js
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  password: Joi.string().min(6),
}).min(1); // Pelo menos um campo deve ser fornecido

const categorySchema = Joi.object({
  name: Joi.string().min(3).required(),
});

const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  userId: Joi.number().integer().required(),
  categoryId: Joi.number().integer().required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().min(5),
  content: Joi.string().min(10),
  categoryId: Joi.number().integer(),
}).min(1);

module.exports = {
  userSchema,
  updateUserSchema,
  categorySchema,
  postSchema,
  updatePostSchema
};