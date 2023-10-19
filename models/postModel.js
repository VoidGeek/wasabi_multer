// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  imageUrl: String,
  caption: String,
});

module.exports = mongoose.model('Post', postSchema);
