// src/routes/category.routes.js
const { Router } = require('express');
const categoryController = require('../controllers/category.controller');
const { validate } = require('../middlewares/validation.middleware');
const { categorySchema } = require('../services/validation.schemas');

const router = Router();

router.post('/', validate(categorySchema), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.put('/:id', validate(categorySchema), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;