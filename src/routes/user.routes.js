// src/routes/user.routes.js
const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { validate } = require('../middlewares/validation.middleware');
const { userSchema, updateUserSchema } = require('../services/validation.schemas');

const router = Router();

router.post('/', validate(userSchema), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', validate(updateUserSchema), userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id/posts', userController.getPostsByUser); // Desafio adicional

module.exports = router;