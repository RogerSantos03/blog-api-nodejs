// src/routes/post.routes.js
const { Router } = require('express');
const postController = require('../controllers/post.controller');
const { validate } = require('../middlewares/validation.middleware');
const { postSchema, updatePostSchema } = require('../services/validation.schemas');

const router = Router();

router.post('/', validate(postSchema), postController.createPost);
router.get('/', postController.getAllPosts); // Desafio de paginação implementado aqui
router.get('/:id', postController.getPostById);
router.put('/:id', validate(updatePostSchema), postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;