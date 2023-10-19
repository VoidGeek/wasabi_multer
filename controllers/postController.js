// controllers/postController.js
const Post = require('../models/postModel');
const aws = require('aws-sdk');
// Create a new post
exports.createPost = async (req, res) => {
    try {
      const { caption } = req.body;
  
      // Create a new post instance
      const newPost = new Post({
        imageUrl: req.file.location, // Assuming req.file.location contains the image URL
        caption,
      });
  
      // Save the post to the database
      let response =await newPost.save();
  
      res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while creating the post' });
    }
  };

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find({}).exec();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching posts' });
    }
  };

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


