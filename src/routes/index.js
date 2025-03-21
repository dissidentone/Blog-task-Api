const express = require('express');
const router = express.Router();

// Route dosyalarını içe aktar
const postRoutes = require('./posts');
const taskRoutes = require('./tasks');
const authRoutes = require('./auth');
const userRoutes = require('./users');
const healthRoutes = require('./health');

// Router'a bağla
router.use('/posts', postRoutes);
router.use('/tasks', taskRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/health', healthRoutes);

module.exports = router;

console.log('✅ Yüklenen Routerlar:', Object.keys({
    posts: postRoutes,
    tasks: taskRoutes,
    auth: authRoutes,
    users: userRoutes,
    health: healthRoutes
  }));
  