// src/routes/index.js
const { Router } = require('express');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const postRouter = require('./post.routes');

const router = Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/posts', postRouter);

module.exports = router;