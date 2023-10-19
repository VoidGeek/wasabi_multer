// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const upload = require('../middleware/multer');

// Create a new post
router.post('/api/posts', upload.single('image'), postController.createPost);

// Get all posts
router.get('/api/posts', postController.getAllPosts);

// Get a single post by ID
router.get('/api/posts/:id', postController.getPostById);

// Update a post by ID
// router.put('/api/posts/:id', postController.updatePostMiddleware);

// // Delete a post by ID
// router.delete('/api/posts/:id', postController.deletePost);

module.exports = router;
